import { readdir, readFile, stat, rm, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
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
  const files = await filesIn(outputDir);
  for (const file of files) {
    if ((await stat(file)).size > maxAssetSize) {
      throw new Error(`Asset exceeds 25 MiB: ${path.relative(outputDir, file)}`);
    }
  }
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
