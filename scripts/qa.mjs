/*
 * scripts/qa.mjs — Playwright QA over every route.
 * Checks: horizontal overflow at 390/768/1024/1440, console errors,
 * invalid nested interactive elements, crisis strip visibility on
 * /get-help-now/, accordion open/close, reduced-motion fallbacks.
 * Requires `npm run dev` on :3000.
 */
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const WIDTHS = [390, 768, 1024, 1440];
const pages = await fetch(BASE + "/").then(async () => {
  // derive route list from the content dir via dev-rendered sitemap? simpler: hardcode from known urls
  return null;
});
const URLS = [
  "/", "/about/", "/dr-mithila-desai/", "/services/", "/our-team/",
  "/plan-your-visit/", "/contact/", "/faqs/", "/get-help-now/",
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

const fail = [];
const browser = await chromium.launch({ channel: "chrome" });

for (const w of WIDTHS) {
  for (const url of URLS) {
    const p = await browser.newPage({ viewport: { width: w, height: 844 } });
    const errs = [];
    p.on("pageerror", (e) => errs.push(String(e)));
    p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
    const res = await p.goto(BASE + url, { waitUntil: "domcontentloaded" });
    await p.waitForTimeout(350);
    const ov = await p.evaluate(
      () => document.documentElement.scrollWidth - innerWidth,
    );
    const nested = await p.evaluate(
      () => document.querySelectorAll("a a, a button, button a, button button").length,
    );
    if (res.status() !== 200) fail.push(`${url} @${w}: HTTP ${res.status()}`);
    if (ov > 0) fail.push(`${url} @${w}: overflow ${ov}px`);
    if (nested) fail.push(`${url} @${w}: ${nested} nested interactive`);
    for (const e of errs) fail.push(`${url} @${w}: console ${e.slice(0, 120)}`);
    await p.close();
  }
  console.log(`@${w} done`);
}

/* crisis strip on /get-help-now/ — must be visible without scrolling */
{
  const p = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto(BASE + "/get-help-now/", { waitUntil: "networkidle" });
  const ok = await p.evaluate(() => {
    const c = document.querySelector(".crisis");
    const r = c?.getBoundingClientRect();
    return !!c && r.top >= 0 && r.bottom <= innerHeight;
  });
  const has = await p.evaluate(
    () =>
      document.body.innerText.includes("112") &&
      document.body.innerText.includes("14416"),
  );
  if (!ok) fail.push("/get-help-now/: crisis strip not in first viewport");
  if (!has) fail.push("/get-help-now/: missing 112/14416");
  await p.close();
}

/* accordions: every details opens and closes */
for (const url of ["/faqs/", "/health-library/first-therapy-session/"]) {
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(BASE + url, { waitUntil: "networkidle" });
  const bad = await p.evaluate(() => {
    let n = 0;
    document.querySelectorAll("details").forEach((d) => {
      const s = d.querySelector("summary");
      s.click();
      if (!d.open) n++;
      s.click();
      if (d.open) n++;
    });
    return n;
  });
  if (bad) fail.push(`${url}: ${bad} accordion(s) failed toggle`);
  await p.close();
}

/* reduced motion: journey unpinned, chars visible */
{
  const p = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  await p.goto(BASE + "/", { waitUntil: "networkidle" });
  const rm = await p.evaluate(() => ({
    pinned: matchMedia("(min-width:900px) and (prefers-reduced-motion:no-preference)").matches,
    jr: parseFloat(getComputedStyle(document.querySelector(".jr")).height),
    c: document.querySelector(".chars .c")
      ? parseFloat(getComputedStyle(document.querySelector(".chars .c")).opacity)
      : 1,
  }));
  if (rm.pinned || rm.jr > 4000)
    fail.push("reduced motion: journey still pinned");
  if (rm.c < 0.9) fail.push("reduced motion: chars not visible");
  await p.close();
}

console.log(fail.length ? `\nFAILURES (${fail.length}):` : "\nALL CHECKS PASSED");
fail.forEach((f) => console.log("  " + f));
process.exit(fail.length ? 1 : 0);
