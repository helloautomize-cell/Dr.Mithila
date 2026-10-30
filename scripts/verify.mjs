import { chromium } from "playwright";
const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto("http://localhost:3000/styleguide/", { waitUntil: "networkidle" });
const bad = await p.evaluate(() => {
  const out = [];
  document
    .querySelectorAll("a a, a button, button a, button button")
    .forEach((e) => out.push(e.outerHTML.slice(0, 80)));
  return out;
});
console.log("nested interactive:", bad.length, bad);
// tap targets
const small = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll("a,button,summary").forEach((e) => {
    const r = e.getBoundingClientRect();
    if (r.width && r.height && Math.min(r.width, r.height) < 24)
      out.push(`${e.tagName}.${e.className} ${Math.round(r.width)}x${Math.round(r.height)} "${(e.textContent || "").trim().slice(0, 24)}"`);
  });
  return out;
});
console.log("tap targets <24px:", small.length, small.slice(0, 10));
await b.close();

// reduced motion
const b2 = await chromium.launch({ channel: "chrome" });
const p2 = await b2.newPage({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
await p2.goto("http://localhost:3000/styleguide/", {
  waitUntil: "networkidle",
});
const rm = await p2.evaluate(() => {
  const r1 = getComputedStyle(document.querySelector(".oring .r1"));
  const jr = document.querySelector(".jr");
  const jh = getComputedStyle(jr).height;
  const c = document.querySelector(".chars .c");
  const cop = c ? getComputedStyle(c).opacity : "n/a";
  const flow = document.querySelector(".yrs .flow");
  return {
    ringAnim: r1.animationName,
    jrHeight: jh,
    charOpacity: cop,
    flowH: flow?.style.height || "unset",
  };
});
console.log("reduced-motion:", JSON.stringify(rm));
await b2.close();
