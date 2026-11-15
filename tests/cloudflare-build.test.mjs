import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, stat, rm, open } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { gzipSync } from "node:zlib";
import { createHash } from "node:crypto";
import { prepareCloudflareOutput } from "../scripts/build-cloudflare.mjs";

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), "kikuzou-export-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const out = path.join(root, "out");
  const src = path.join(root, "src");
  await mkdir(path.join(out, "images"), { recursive: true });
  await mkdir(src);
  await writeLegacyArchive(root, {});
  await writeFile(path.join(src, "page.tsx"), '<video src="/images/douga-04.mp4" />');
  await writeFile(path.join(out, "images/douga-04.mp4"), "active video");
  return { root, out, src };
}

async function writeLegacyArchive(root, files) {
  await mkdir(path.join(root, "compat"), { recursive: true });
  const entries = Object.entries(files).map(([file, content]) => {
    const bytes = Buffer.from(content);
    return { path: file, sha256: createHash("sha256").update(bytes).digest("hex"), data: bytes.toString("base64") };
  });
  await writeFile(path.join(root, "compat/legacy-static.json.gz"), gzipSync(JSON.stringify({ version: 1, files: entries })));
}

async function largeFile(file) {
  const handle = await open(file, "w");
  try { await handle.truncate(25 * 1024 * 1024 + 1); }
  finally { await handle.close(); }
}

test("excludes unused legacy videos from the output and preserves the active video", async (t) => {
  const { root, out, src } = await fixture(t);
  const legacy = "hero-pc.mp4";
  await largeFile(path.join(out, "images", legacy));
  await writeFile(path.join(root, legacy), "original retained");
  await prepareCloudflareOutput(out, src);
  await assert.rejects(stat(path.join(out, "images", legacy)), { code: "ENOENT" });
  assert.equal(await readFile(path.join(out, "images/douga-04.mp4"), "utf8"), "active video");
  assert.equal(await readFile(path.join(root, legacy), "utf8"), "original retained");
  const headers = await readFile(path.join(out, "_headers"), "utf8");
  assert.match(headers, /X-Frame-Options: DENY/);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /Referrer-Policy: strict-origin-when-cross-origin/);
  assert.match(headers, /https:\/\/:project\.pages\.dev\/\*/);
  assert.match(headers, /X-Robots-Tag: noindex/);
});

test("refuses to exclude a legacy video if source code references it", async (t) => {
  const { out, src } = await fixture(t);
  await largeFile(path.join(out, "images/hero-pc.mp4"));
  await writeFile(path.join(src, "page.tsx"), '<video src="/images/hero-pc.mp4" />');
  await assert.rejects(prepareCloudflareOutput(out, src), /referenced.*hero-pc\.mp4/i);
  assert.ok((await stat(path.join(out, "images/hero-pc.mp4"))).size > 25 * 1024 * 1024);
});

test("rejects new oversized assets instead of silently omitting them", async (t) => {
  const { out, src } = await fixture(t);
  await largeFile(path.join(out, "images/new-video.mp4"));
  await assert.rejects(prepareCloudflareOutput(out, src), /25 MiB.*new-video\.mp4/i);
});

test("emits a Worker restricted to the old image endpoint with existing image paths", async (t) => {
  const { out, src } = await fixture(t);
  await writeFile(path.join(out, "images/logo.png"), "image");
  await writeFile(path.join(out, "images/日本語.webp"), "image");
  await prepareCloudflareOutput(out, src);
  const routes = JSON.parse(await readFile(path.join(out, "_routes.json"), "utf8"));
  assert.deepEqual(routes, { version: 1, include: ["/_next/image"], exclude: [] });
  const worker = await readFile(path.join(out, "_worker.js"), "utf8");
  assert.match(worker, /export default createLegacyImageHandler/);
  assert.match(worker, /\/images\/logo\.png/);
  assert.match(worker, /\/images\/日本語\.webp/);
  assert.doesNotMatch(worker, /douga-04\.mp4/);
});

test("retains old static files and their original bytes alongside the current build", async (t) => {
  const { root, out, src } = await fixture(t);
  await writeLegacyArchive(root, { "chunks/old.js": "old JavaScript", "media/font.woff2": "old font" });
  await mkdir(path.join(out, "_next/static/chunks"), { recursive: true });
  await writeFile(path.join(out, "_next/static/chunks/new.js"), "new JavaScript");
  await prepareCloudflareOutput(out, src);
  assert.equal(await readFile(path.join(out, "_next/static/chunks/old.js"), "utf8"), "old JavaScript");
  assert.equal(await readFile(path.join(out, "_next/static/media/font.woff2"), "utf8"), "old font");
  assert.equal(await readFile(path.join(out, "_next/static/chunks/new.js"), "utf8"), "new JavaScript");
});

test("allows identical static paths but refuses to replace an immutable URL with different bytes", async (t) => {
  const { root, out, src } = await fixture(t);
  await writeLegacyArchive(root, { "chunks/shared.js": "identical" });
  await mkdir(path.join(out, "_next/static/chunks"), { recursive: true });
  const current = path.join(out, "_next/static/chunks/shared.js");
  await writeFile(current, "identical");
  await prepareCloudflareOutput(out, src);
  await writeFile(current, "different");
  await assert.rejects(prepareCloudflareOutput(out, src), /immutable.*collision/i);
  assert.equal(await readFile(current, "utf8"), "different");
});

test("refuses legacy archive paths outside the static directory", async (t) => {
  const { root, out, src } = await fixture(t);
  await writeLegacyArchive(root, { "../../outside.js": "must not be written" });
  await assert.rejects(prepareCloudflareOutput(out, src), /invalid legacy static path/i);
  await assert.rejects(stat(path.join(out, "outside.js")), { code: "ENOENT" });
});
