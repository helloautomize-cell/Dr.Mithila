// Mobile menu overlay check at 390px.
import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
try {
  await page.click("text=Essential only", { timeout: 3000 });
} catch {}
await page.waitForTimeout(1200);
// open hamburger
const btn = page.locator("header button, .hd button, nav button").first();
await btn.click();
await page.waitForTimeout(900);
await page.screenshot({ path: "test-results/m-menu.png" });
// scroll within menu if it overflows
const ov = await page.evaluate(
  () => document.documentElement.scrollWidth - innerWidth,
);
console.log("menu shot saved, page overflow:", ov);
await browser.close();
