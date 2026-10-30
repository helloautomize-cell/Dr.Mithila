import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const SMALL = new Set([
  "a", "an", "and", "as", "at", "but", "by", "en", "for", "if", "in",
  "nor", "of", "on", "or", "per", "so", "the", "to", "up", "via", "vs",
  "with", "yet",
]);

function tcWord(w, isFirst, isLast) {
  if (!w) return w;
  // keep tokens with capitals after the first char (ADHD, PhD, Dr., Tele-MANAS, LGBTQIA+)
  if (/[A-Z]/.test(w.slice(1))) return w;
  const parts = w.split("-");
  return parts
    .map((p, pi) => {
      const lower = p.toLowerCase();
      if (!isFirst && !isLast && pi === 0 && SMALL.has(lower)) return lower;
      if (/[0-9]/.test(p)) return p;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("-");
}

function titleCase(s) {
  const words = s.split(/(\s+)/);
  const idx = words.map((w, i) => i).filter((i) => /\S/.test(words[i]));
  idx.forEach((wi, k) => {
    words[wi] = tcWord(words[wi], k === 0, k === idx.length - 1);
  });
  return words.join("");
}

const files = execSync(
  'rg -l --glob "*.tsx" --glob "*.ts" --glob "!test-results/**" "title:|label:|heading:" app components lib',
  { encoding: "utf8" }
)
  .trim()
  .split("\n")
  .filter((f) => !f.includes("styleguide"));

const re = /(\b(?:title|label|heading)\s*:\s*)"((?:[^"\\]|\\.)*)"/g;
let total = 0;
for (const f of files) {
  let src = readFileSync(f, "utf8");
  let changed = false;
  src = src.replace(re, (m, k, v) => {
    if (/[.?]$/.test(v.trim()) || /[<>{}]/.test(v)) return m;
    const nv = titleCase(v);
    if (nv !== v) {
      changed = true;
      total++;
      console.log(`${f}: "${v}" -> "${nv}"`);
    }
    return `${k}"${nv}"`;
  });
  if (changed) writeFileSync(f, src);
}
console.log(`\n${total} strings updated`);
