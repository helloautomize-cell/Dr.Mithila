import { chromium } from "playwright";
const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = [];
p.on("pageerror", (e) => errs.push(String(e)));
p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
await p.goto("http://localhost:3000/styleguide/", { waitUntil: "networkidle" });
await p.evaluate(() =>
  document.querySelector(".oring")?.scrollIntoView({ block: "center" }),
);
await p.waitForTimeout(900);
await p.screenshot({ path: "test-results/orbit-view-1440.png" });
const diag = await p.evaluate(() => {
  const el = document.querySelector(".oring");
  const kids = [...el.children].map((k) => {
    const r = k.getBoundingClientRect();
    const c = getComputedStyle(k);
    return `${k.tagName}.${k.getAttribute("class")} ${Math.round(r.width)}x${Math.round(r.height)} disp:${c.display} op:${c.opacity}`;
  });
  return kids;
});
console.log(diag.join("\n"));
console.log("errors:", errs);
await b.close();
