import { readdir, readFile, stat, rm, writeFile, mkdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { gunzipSync } from "node:zlib";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const maxAssetSize = 25 * 1024 * 1024;
const unusedLegacyVideos = ["hero-pc.mp4", "hero-phone.mp4", "douga_02.mp4", "HP-002.mp4"];

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  }));
  return files.flat();
}

async function restoreLegacyStatic(outputDir, sourceDir) {
  const archive = JSON.parse(gunzipSync(
    await readFile(path.resolve(sourceDir, "../compat/legacy-static.json.gz")),
    { maxOutputLength: 64 * 1024 * 1024 },
  ).toString("utf8"));
  if (archive.version !== 1 || !Array.isArray(archive.files)) throw new Error("Invalid legacy static archive");
  const seen = new Set();
  for (const entry of archive.files) {
    if (typeof entry.path !== "string" || !/^[A-Za-z0-9_./-]+$/.test(entry.path) ||
        entry.path.startsWith("/") || entry.path.split("/").some((part) => !part || part === "." || part === "..") ||
        seen.has(entry.path)) throw new Error("Invalid legacy static path");
    seen.add(entry.path);
    const bytes = Buffer.from(entry.data, "base64");
    if (createHash("sha256").update(bytes).digest("hex") !== entry.sha256) {
      throw new Error(`Legacy static checksum mismatch: ${entry.path}`);
    }
    const target = path.join(outputDir, "_next/static", entry.path);
    try {
      const current = await readFile(target);
      if (!current.equals(bytes)) throw new Error(`Immutable static collision: ${entry.path}`);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, bytes, { flag: "wx" });
    }
  }
}

export async function prepareCloudflareOutput(outputDir, sourceDir) {
  const sourceFiles = (await filesIn(sourceDir)).filter((file) => /\.(tsx?|jsx?|css|json)$/.test(file));
  const source = (await Promise.all(sourceFiles.map((file) => readFile(file, "utf8")))).join("\n");
  for (const video of unusedLegacyVideos) {
    if (source.includes(video)) throw new Error(`Referenced legacy asset must be retained: ${video}`);
  }
  // Remove only these reviewed, unused files from generated output. Originals remain in public/.
  for (const video of unusedLegacyVideos) {
    await rm(path.join(outputDir, "images", video), { force: true });
  }
  await restoreLegacyStatic(outputDir, sourceDir);
  const files = await filesIn(outputDir);
  for (const file of files) {
    if ((await stat(file)).size > maxAssetSize) {
      throw new Error(`Asset exceeds 25 MiB: ${path.relative(outputDir, file)}`);
    }
  }
  const imagePaths = files
    .map((file) => `/${path.relative(outputDir, file).split(path.sep).join("/")}`)
    .filter((file) => /^\/images\/.+\.(?:png|jpe?g|webp|gif|avif|svg|ico)$/i.test(file))
    .sort();
  const legacyWorker = await readFile(new URL("./legacy-images-worker.mjs", import.meta.url), "utf8");
  await writeFile(path.join(outputDir, "_worker.js"),
    `${legacyWorker}\nexport default createLegacyImageHandler(${JSON.stringify(imagePaths)});\n`);
  // All other routes remain static and consume no Pages Functions requests.
  await writeFile(path.join(outputDir, "_routes.json"), JSON.stringify({
    version: 1, include: ["/_next/image"], exclude: [],
  }, null, 2));
  await writeFile(path.join(outputDir, "_headers"), `/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-XSS-Protection: 1; mode=block

https://:project.pages.dev/*
  X-Robots-Tag: noindex

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
`);
  console.log(`Cloudflare output checked: ${files.length} files, all assets <= 25 MiB.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = fileURLToPath(new URL("../", import.meta.url));
  const result = spawnSync(process.execPath, [path.join(root, "node_modules/next/dist/bin/next"), "build", "--webpack"], {
    cwd: root,
    env: { ...process.env, CLOUDFLARE_STATIC_EXPORT: "1" },
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
  await prepareCloudflareOutput(path.join(root, "out"), path.join(root, "src"));
}
