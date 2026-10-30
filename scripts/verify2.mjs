import { chromium } from "playwright";
const b = await chromium.launch({ channel: "chrome" });
for (const w of [390, 768, 1024, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 844 } });
  const errs = [];
  p.on("pageerror", (e) => errs.push(String(e)));
  p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  const mbar = await p.evaluate(() => {
    const m = document.querySelector(".mbar");
    return m ? getComputedStyle(m).display : "absent";
  });
  const topbar = await p.evaluate(() => getComputedStyle(document.querySelector(".topbar")).display);
  const nav = await p.evaluate(() => getComputedStyle(document.querySelector(".nav nav")).display);
  console.log(`@${w}: overflow=${ov} mbar=${mbar} topbar=${topbar} nav=${nav} errs=${errs.length}`);
  await p.screenshot({ path: `test-results/shell-${w}.png` });
  await p.close();
}
// dropdown + mobile menu Esc / keyboard
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await p.hover(".dd-btn");
const ddVis = await p.evaluate(() => getComputedStyle(document.querySelector(".dd-panel")).visibility);
await p.keyboard.press("Escape");
const ddVis2 = await p.evaluate(() => getComputedStyle(document.querySelector(".dd-panel")).visibility);
console.log("dropdown hover:", ddVis, "-> after Esc:", ddVis2);
const p2 = await b.newPage({ viewport: { width: 390, height: 844 } });
await p2.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await p2.click(".menu");
await p2.waitForTimeout(400);
const sheet = await p2.evaluate(() => !!document.querySelector(".msheet"));
await p2.keyboard.press("Escape");
await p2.waitForTimeout(300);
const sheetGone = await p2.evaluate(() => !document.querySelector(".msheet"));
console.log("mobile sheet opens:", sheet, "closes on Esc:", sheetGone);
await p2.screenshot({ path: "test-results/shell-closed-390.png" });
await b.close();
