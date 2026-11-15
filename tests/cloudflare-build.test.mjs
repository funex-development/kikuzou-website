import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, stat, rm, open } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { prepareCloudflareOutput } from "../scripts/build-cloudflare.mjs";

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), "kikuzou-export-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const out = path.join(root, "out");
  const src = path.join(root, "src");
  await mkdir(path.join(out, "images"), { recursive: true });
  await mkdir(src);
  await writeFile(path.join(src, "page.tsx"), '<video src="/images/douga-04.mp4" />');
  await writeFile(path.join(out, "images/douga-04.mp4"), "active video");
  return { root, out, src };
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
