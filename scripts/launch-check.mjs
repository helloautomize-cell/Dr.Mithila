/*
 * npm run launch-check — lists every remaining [CONFIRM] marker in
 * resources/content and fails while any exist (blocks launch).
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "resources/content");

function* walk(d) {
  for (const f of readdirSync(d)) {
    const p = path.join(d, f);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (f.endsWith(".md")) yield p;
  }
}

let count = 0;
for (const file of walk(dir)) {
  const rel = path.relative(root, file);
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      for (const m of line.matchAll(/\[CONFIRM(?::\s*[^\]]+)?\]/g)) {
        count++;
        console.log(`${rel}:${i + 1}  ${m[0]}`);
      }
    });
}
if (count) {
  console.log(`\nlaunch-check: ${count} [CONFIRM] marker(s) remaining — FAIL`);
  process.exit(1);
}
console.log("launch-check: no [CONFIRM] markers — PASS");
