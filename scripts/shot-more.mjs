import { chromium } from "playwright";
const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto("http://localhost:3000/styleguide/", { waitUntil: "networkidle" });
for (const [name, sel] of [
  ["orbit-390", ".oring"],
  ["audience-390", ".panel"],
  ["journey-390", ".jtrack"],
  ["frame-390", ".frame"],
]) {
  const el = await p.$(sel);
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await p.waitForTimeout(400);
    await p.screenshot({ path: `test-results/${name}.png` });
  }
}
await b.close();
console.log("done");
