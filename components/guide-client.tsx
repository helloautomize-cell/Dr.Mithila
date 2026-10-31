"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/lib/icons";

/* Copy link / print / share buttons + toast (guide hero). */
export function GuideActions({ url, title }: { url: string; title: string }) {
  const [msg, setMsg] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(null);
  const toast = (m: string) => {
    setMsg(m);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(""), 1800);
  };
  const copy = () => {
    try {
      navigator.clipboard
        .writeText(url)
        .then(() => toast("Link copied"), () => toast(`Link: ${url}`));
    } catch {
      toast(`Link: ${url}`);
    }
  };
  const share = () => {
    if (navigator.share)
      navigator.share({ title, url }).catch(() => {});
    else copy();
  };
  return (
    <>
      <div className="aact">
        <button type="button" onClick={copy}>
          <Icon name="LINK" /> Copy link
        </button>
        <button type="button" onClick={() => window.print()}>
          <Icon name="PRINT" /> Print
        </button>
        <button type="button" onClick={share}>
          <Icon name="SHARE" /> Share
        </button>
      </div>
      <div className={`toast${msg ? " on" : ""}`} role="status">
        {msg || "Link copied"}
      </div>
    </>
  );
}

/*
 * One shared passive scroll handler (perf rule): drives the TOC active
 * state, the reading progress bar, the loop light-up and the steps fill.
 */
export function GuideScrollFx() {
  useEffect(() => {
    const body = document.getElementById("abody");
    if (!body) return;
    const bar = document.getElementById("abar");
    const pc = document.getElementById("apc");
    const links = [...document.querySelectorAll<HTMLAnchorElement>("#atoc a")];
    const loop = document.getElementById("acyc");
    const steps = document.getElementById("asteps");
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = body.getBoundingClientRect();
      const p = Math.min(
        1,
        Math.max(0, (innerHeight * 0.35 - r.top) / (r.height - innerHeight * 0.35)),
      );
      if (bar) bar.style.width = `${p * 100}%`;
      if (pc) pc.textContent = `${Math.round(p * 100)}% read`;
      let cur: HTMLAnchorElement | null = null;
      for (const a of links) {
        const t = document.getElementById(a.dataset.a ?? "");
        if (t && t.getBoundingClientRect().top < 180) cur = a;
      }
      links.forEach((a) => a.classList.toggle("on", a === cur));
      if (loop) {
        const cr = loop.getBoundingClientRect();
        const cp = Math.min(
          1,
          Math.max(0, (innerHeight * 0.85 - cr.top) / (innerHeight * 0.5)),
        );
        loop.querySelectorAll("li").forEach((l, i) =>
          l.classList.toggle("on", cp > i / 4 + 0.05),
        );
      }
      steps?.querySelectorAll(":scope > div").forEach((s) =>
        s.classList.toggle(
          "in2",
          s.getBoundingClientRect().top < innerHeight * 0.6,
        ),
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
