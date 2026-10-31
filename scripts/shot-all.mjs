// Full-page 390px screenshots for every route not yet manually reviewed.
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const URLS = [
  "/contact/", "/faqs/", "/get-help-now/",
  "/health-library/", "/health-library/first-therapy-session/",
  "/health-library/panic-attacks/",
  "/health-library/online-counselling-for-nris/", "/thank-you/",
  "/individual-therapy/", "/child-and-teen-therapy/",
  "/couples-counselling/", "/family-counselling/", "/online-therapy/",
  "/online-therapy/indians-abroad/", "/anxiety/", "/depression/", "/ocd/",
  "/stress-and-burnout/", "/trauma/", "/self-esteem-and-body-image/",
  "/grief-and-loss/", "/addiction-and-habits/",
  "/self-harm-and-suicidal-thoughts/", "/sleep-problems/",
  "/lgbtqia-affirmative-counselling/", "/psychological-assessment/",
  "/psychological-assessment/adhd-learning-neurodiversity/",
  "/career-guidance/", "/workplace-wellbeing/", "/schools-and-colleges/",
  "/privacy-policy/", "/terms-of-use/", "/disclaimer/",
  "/editorial-policy/", "/client-rights/",
  "/appointments-cancellation-refund/", "/accessibility/",
];

const slug = (u) => u.replaceAll("/", "_").replace(/^_+|_+$/g, "") || "home";
const browser = await chromium.launch({ channel: "chrome" });
for (const url of URLS) {
  const p = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  try {
    await p.goto(BASE + url, { waitUntil: "networkidle", timeout: 30000 });
    try { await p.click("text=Essential only", { timeout: 2000 }); } catch {}
    // settle reveals: sweep through the page quickly
    await p.evaluate(async () => {
      const h = document.documentElement.scrollHeight;
      for (let y = 0; y < h; y += 700) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
      scrollTo(0, 0);
    });
    await p.waitForTimeout(800);
    await p.screenshot({ path: `test-results/full-${slug(url)}.png`, fullPage: true });
    console.log(url, "ok");
  } catch (e) {
    console.log(url, "FAIL", String(e).slice(0, 80));
  }
  await p.close();
}
await browser.close();
