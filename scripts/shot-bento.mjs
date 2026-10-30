// Bento section-01 screenshots: implementation vs reference, at 390/1024/1440.
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";

const BASE = process.env.BASE ?? "http://localhost:3000";
const REF = pathToFileURL("E:/Automize/Mithila/bento.html").href;
const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1440", width: 1440, height: 900 },
];

const browser = await chromium.launch({ channel: "chrome" });

for (const v of viewports) {
  const page = await browser.newPage({
    viewport: { width: v.width, height: v.height },
  });
  const errors = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(String(e)));

  // implementation: section 01 on the home page
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - innerWidth,
  );
  const sec = page.locator("section", { has: page.locator(".bento") }).first();
  await sec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200); // let the stagger + bars finish
  await sec.screenshot({ path: `test-results/bento-${v.name}.png` });
  console.log(
    `impl @${v.name}: overflow=${overflow}px consoleErrors=${errors.length}`,
    errors.slice(0, 3),
  );

  // reference
  await page.goto(REF, { waitUntil: "networkidle" });
  const refSec = page.locator("section.sec").first();
  await refSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await refSec.screenshot({ path: `test-results/bento-ref-${v.name}.png` });
  await page.close();
}
await browser.close();
