/*
 * scripts/process-images.mjs
 * From resources/images/ produce public/images/ in WebP and AVIF at
 * 640, 960, 1280 and 1600 widths, plus public/images/alt-text.json.
 * Run: node scripts/process-images.mjs  (or npm run images)
 */
import { mkdir, copyFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  await (
    await import("node:fs")
  ).promises.readFile(path.join(root, "lib/image-manifest.json"), "utf8"),
);

const WIDTHS = [640, 960, 1280, 1600];
const outDir = path.join(root, "public/images");
const logoDir = path.join(root, "resources/images/logo");
const altText = {};
const generated = {};

for (const [name, meta] of Object.entries(manifest)) {
  const src = path.join(root, meta.src);
  const dir = path.join(outDir, path.dirname(name));
  await mkdir(dir, { recursive: true });

  const img = sharp(src);
  const { width, height } = await img.metadata();
  const targets = WIDTHS.filter((w) => w <= (width ?? 1600));
  if (!targets.length || targets[targets.length - 1] < 1600)
    targets.push(width ?? 1600);
  const widths = [...new Set(targets)];

  for (const w of widths) {
    for (const [format, options] of [
      ["webp", { quality: 82 }],
      ["avif", { quality: 60 }],
    ]) {
      await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .toFormat(format, options)
        .toFile(path.join(dir, `${path.basename(name)}-${w}.${format}`));
    }
  }
  // original as the <img> fallback
  await copyFile(src, path.join(dir, `${path.basename(name)}.jpg`));
  altText[name] = meta.alt;
  generated[name] = {
    widths,
    intrinsic: [width ?? 0, height ?? 0],
    alt: meta.alt,
    focus: meta.focus,
  };
}

// logo and tree mark: copied as PNG (used as mask/background images)
await mkdir(path.join(outDir, "logo"), { recursive: true });
await copyFile(
  path.join(logoDir, "tmh-logo-cutout.png"),
  path.join(outDir, "logo/tmh-logo.png"),
);
await copyFile(
  path.join(logoDir, "tmh-tree-mark-cutout.png"),
  path.join(outDir, "logo/tmh-tree.png"),
);
await copyFile(
  path.join(logoDir, "tmh-logo-original.jpg"),
  path.join(outDir, "logo/tmh-logo-original.jpg"),
);

await writeFile(
  path.join(outDir, "alt-text.json"),
  JSON.stringify(altText, null, 2) + "\n",
);
await writeFile(
  path.join(root, "lib/generated-images.json"),
  JSON.stringify(generated, null, 2) + "\n",
);

console.log(
  `Processed ${Object.keys(manifest).length} images at widths ${WIDTHS.join("/")} -> public/images/`,
);
