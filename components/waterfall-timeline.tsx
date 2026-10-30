"use client";

import { useEffect, useRef, type ReactNode } from "react";

export interface Milestone {
  era: string;
  title: string;
  children: ReactNode;
  now?: boolean;
}

/*
 * A vertical milestone list. A flowing gradient line grows down with scroll
 * and each milestone lights up as the line reaches it.
 * Under reduced motion the line is static and everything is lit.
 */
export function WaterfallTimeline({ items }: { items: Milestone[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const y = ref.current;
    const flow = flowRef.current;
    if (!y || !flow) return;
    const yrs = y.querySelectorAll<HTMLElement>(".yr");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      flow.style.height = "100%";
      yrs.forEach((e) => e.classList.add("lit", "in"));
      return;
    }

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    yrs.forEach((e) => {
      if (e.getBoundingClientRect().top < innerHeight) e.classList.add("in");
      else io.observe(e);
    });

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = y.getBoundingClientRect();
      const h = Math.min(
        r.height - 16,
        Math.max(0, innerHeight * 0.65 - r.top),
      );
      flow.style.height = `${h}px`;
      yrs.forEach((e) => e.classList.toggle("lit", e.offsetTop + 14 <= h + 8));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="yrs" ref={ref}>
      <i className="flow" ref={flowRef} aria-hidden="true" />
      {items.map((m) => (
        <div key={m.era + m.title} className={m.now ? "yr now rv" : "yr rv"}>
          <b>{m.era}</b>
          <h3>{m.title}</h3>
          <p>{m.children}</p>
        </div>
      ))}
    </div>
  );
}
