// Bulk mobile audit: every route at 390px.
// Reports HTTP status, horizontal overflow, elements wider than viewport
// (excluding decorative i.tree/svg inside overflow-hidden ancestors),
// console errors, and raw text nodes that may be grid-misplaced.
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
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

const browser = await chromium.launch({ channel: "chrome" });
const report = [];

for (const url of URLS) {
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const errs = [];
  page.on("pageerror", (e) => errs.push(String(e).slice(0, 140)));
  page.on("console", (m) => {
    if (m.type() === "error") errs.push(m.text().slice(0, 140));
  });
  let status = 0;
  try {
    const res = await page.goto(BASE + url, { waitUntil: "domcontentloaded", timeout: 30000 });
    status = res.status();
    await page.waitForTimeout(1200);
  } catch (e) {
    report.push(`${url}: NAV FAIL ${String(e).slice(0, 80)}`);
    await page.close();
    continue;
  }

  const data = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const overflow = document.documentElement.scrollWidth - vw;
    // offenders: visible elements extending past right viewport edge,
    // skipping known decorative masks (i.tree, svg internals, overflow-hidden clips)
    const offenders = [];
    const clippedBy = (el) => {
      let a = el.parentElement;
      while (a) {
        const o = getComputedStyle(a).overflowX;
        if (o === "hidden" || o === "clip" || o === "auto" || o === "scroll") return a.className || a.tagName;
        a = a.parentElement;
      }
      return null;
    };
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > vw + 2 && r.height > 0) {
        if (el.closest("svg") || el.tagName === "svg") return;
        const clip = clippedBy(el);
        if (clip) return; // clipped by ancestor = decorative scroll area
        offenders.push(
          `${el.tagName}.${String(el.className).slice(0, 50)} w=${Math.round(r.width)}`,
        );
      }
    });
    // mis-sized grid/flex children: element wider than its parent's content box
    const mis = [];
    document.querySelectorAll("main *, .cbody *").forEach((el) => {
      const p = el.parentElement;
      if (!p) return;
      const r = el.getBoundingClientRect(), pr = p.getBoundingClientRect();
      if (r.width > pr.width + 4 && r.width > 60 && !el.closest("svg")) {
        const cs = getComputedStyle(p);
        if (cs.overflowX === "visible" && getComputedStyle(el).position !== "absolute" && getComputedStyle(el).position !== "fixed") {
          mis.push(`${el.tagName}.${String(el.className).slice(0,40)} ${Math.round(r.width)}>${Math.round(pr.width)} in ${p.tagName}.${String(p.className).slice(0,30)}`);
        }
      }
    });
    return {
      overflow,
      offenders: [...new Set(offenders)].slice(0, 12),
      mis: [...new Set(mis)].slice(0, 12),
      h: document.documentElement.scrollHeight,
    };
  });

  const problems = [];
  if (status !== 200) problems.push(`HTTP ${status}`);
  if (data.overflow > 0) problems.push(`overflow ${data.overflow}px`);
  if (data.offenders.length) problems.push(`offenders: ${data.offenders.join(" | ")}`);
  if (data.mis.length) problems.push(`mis-sized: ${data.mis.join(" | ")}`);
  for (const e of errs.slice(0, 3)) problems.push(`console: ${e}`);
  report.push(`${url} ${problems.length ? "FAIL " + problems.join(" ;; ") : "ok"}`);
  await page.close();
}

console.log(report.join("\n"));
await browser.close();
