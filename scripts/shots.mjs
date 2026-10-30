// Dev-time screenshot + smoke script (Phase 1 verification).
import { chromium } from "playwright";

const BASE = process.env.BASE ?? "http://localhost:3000";
const routes = ["/", "/styleguide/"];
const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "1440", width: 1440, height: 900 },
];

const browser = await chromium.launch({
  channel: "chrome",
  args: ["--disable-gpu", "--force-prefers-reduced-motion=no-preference"],
});

for (const route of routes) {
  for (const v of viewports) {
    const page = await browser.newPage({
      viewport: { width: v.width, height: v.height },
    });
    const errors = [];
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    page.on("pageerror", (e) => errors.push(String(e)));
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    // measure horizontal overflow
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - innerWidth,
    );
    await page.evaluate(() => scrollTo(0, document.body.scrollHeight * 0.3));
    await page.waitForTimeout(400);
    const slug = route === "/" ? "home" : route.replaceAll("/", "");
    await page.screenshot({
      path: `test-results/${slug}-${v.name}.png`,
      fullPage: false,
    });
    console.log(
      `${route} @${v.name}: overflow=${overflow}px consoleErrors=${errors.length}`,
      errors.slice(0, 3),
    );
    await page.close();
  }
}
await browser.close();
