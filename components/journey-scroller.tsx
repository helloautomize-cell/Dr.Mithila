"use client";

import Link from "next/link";

import { useEffect, useRef } from "react";
import { Icon, type IconName } from "@/lib/icons";

export interface JourneyStep {
  icon: IconName;
  title: string;
  text: string;
  tag?: string;
}

const STEPS: JourneyStep[] = [
  {
    icon: "WA",
    title: "Get in Touch",
    text: "Use the form, call 87796 51309 or WhatsApp. We ask who the session is for and whether you'd like to meet in person or online.",
  },
  {
    icon: "CAL",
    title: "Choose a Time",
    text: "We offer you a slot and send the address on Gulmohar Road, or the video link.",
  },
  {
    icon: "PIN",
    title: "Arrive and Settle In",
    text: "Come a few minutes early. Online, find a private, quiet spot and check your connection.",
  },
  {
    icon: "MIND",
    title: "Talk",
    text: "Dr. Desai asks what brings you in and what you hope will change. You share only what you're ready to.",
  },
  {
    icon: "COMPASS",
    title: "Agree on a Plan",
    text: "Together you decide whether to meet again, how often, and what to focus on first.",
    tag: "Your plan",
  },
];

const DESKTOP = "(min-width:900px) and (prefers-reduced-motion:no-preference)";

/*
 * Desktop: the section pins for about 4.6 viewports and the step cards slide
 * sideways, the active card lifts and a honey path draws behind them.
 * Mobile and reduced motion: a vertical list with a filling line.
 */
export function JourneyScroller({ steps = STEPS }: { steps?: JourneyStep[] }) {
  const secRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const dotRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    const track = trackRef.current;
    if (!sec || !track) return;
    const cards = [...track.querySelectorAll<HTMLElement>(".jc")];
    const path = pathRef.current;
    const plen = path ? path.getTotalLength() : 0;
    if (path) path.style.strokeDasharray = String(plen);

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = sec.getBoundingClientRect();
      if (window.matchMedia(DESKTOP).matches) {
        const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
        const max = track.scrollWidth - innerWidth;
        track.style.transform = `translateX(${-p * max}px)`;
        const a = Math.min(cards.length - 1, Math.floor(p * cards.length));
        cards.forEach((c, i) => {
          c.classList.toggle("on", i === a);
          c.classList.toggle("done", i < a);
        });
        if (numRef.current?.firstChild)
          numRef.current.firstChild.nodeValue = `0${a + 1}`;
        if (barRef.current) barRef.current.style.width = `${p * 100}%`;
        if (dotRef.current) dotRef.current.style.left = `${p * 100}%`;
        if (path) path.style.strokeDashoffset = String(plen * (1 - p));
        if (lineRef.current) lineRef.current.style.height = "0";
      } else {
        track.style.transform = "";
        const p = Math.min(
          1,
          Math.max(
            0,
            (innerHeight * 0.6 - track.getBoundingClientRect().top) /
              track.offsetHeight,
          ),
        );
        if (lineRef.current) lineRef.current.style.height = `${p * 100}%`;
        cards.forEach((c) => {
          c.classList.remove("done");
          c.classList.toggle(
            "on",
            c.getBoundingClientRect().top < innerHeight * 0.6,
          );
        });
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="dark sec jr" ref={secRef}>
      <div className="pin">
        <svg
          className="jpath"
          viewBox="0 0 1600 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            ref={pathRef}
            d="M0 220 C200 60 400 260 600 140 S1000 40 1200 160 S1500 240 1600 100"
            fill="none"
            stroke="#D9AE84"
            strokeWidth="1.5"
          />
        </svg>
        <div className="g">
          <div className="wrap" style={{ position: "relative" }}>
            <span className="eyebrow">06 · Your first session</span>
            <h2 className="h2" style={{ marginTop: 22, maxWidth: "18ch" }}>
              Your first session, step by <em>step</em>.
            </h2>
          </div>
        </div>
        <div className="jtrack" ref={trackRef}>
          <i className="jl" ref={lineRef} aria-hidden="true" />
          {steps.map((s, i) => (
            <article key={s.title} className={s.tag ? "jc fin" : "jc"}>
              <span className="k">{`0${i + 1}`}</span>
              <span className="ico">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
          <div style={{ flex: "none", width: 40 }} />
        </div>
        <div className="g">
          <div className="wrap jhud">
            <span className="jnum" ref={numRef}>
              01<small> / {String(steps.length).padStart(2, "0")}</small>
            </span>
            <div className="jbar">
              <i ref={barRef} />
              <b ref={dotRef} />
            </div>
            <Link className="link" href="/plan-your-visit/">
              Plan your first session <Icon name="ARR" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
