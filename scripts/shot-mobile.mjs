// Mobile responsive audit: screenshot home page in viewport chunks at 390px.
import { chromium } from "playwright";

const BASE = process.env.BASE ?? "http://localhost:3000";
const route = process.env.ROUTE ?? "/";
const slug = route === "/" ? "home" : route.replaceAll("/", "").replaceAll("-", "_");

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(BASE + route, { waitUntil: "networkidle" });
// dismiss cookie banner so it doesn't cover content in shots
try {
  await page.click("text=Essential only", { timeout: 3000 });
} catch {}
await page.waitForTimeout(2500);

// Force all reveal/animation elements to their final state so screenshots show content.
const overflow = await page.evaluate(
  () => document.documentElement.scrollWidth - innerWidth,
);
const height = await page.evaluate(() => document.documentElement.scrollHeight);
console.log(`${route} @390: overflow=${overflow}px height=${height}px errors=${errors.length}`);
if (errors.length) console.log(errors.slice(0, 5));

// find overflowing elements
const offenders = await page.evaluate(() => {
  const out = [];
  const vw = document.documentElement.clientWidth;
  document.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > vw + 1) {
      out.push(
        `${el.tagName}.${String(el.className).slice(0, 60)} w=${Math.round(r.width)}`,
      );
    }
  });
  return [...new Set(out)].slice(0, 20);
});
if (offenders.length) console.log("overflow offenders:", offenders);

const chunks = Math.ceil(height / 844);
for (let i = 0; i < chunks; i++) {
  await page.evaluate((y) => scrollTo(0, y), i * 844);
  await page.waitForTimeout(700);
  await page.screenshot({
    path: `test-results/m-${slug}-${String(i).padStart(2, "0")}.png`,
  });
}
console.log(`saved ${chunks} chunks`);
await browser.close();
