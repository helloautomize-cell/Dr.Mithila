"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/*
 * IntersectionObserver reveal: .rv fades/rises in once when 15% visible.
 * Content stays visible without JS (the .rv styles are the only gate).
 * The "in" class is React state, not DOM mutation: classList edits from a
 * sibling component (AnimGate) could land before hydration finished and
 * trip the server/client attribute check. data-rv marks ownership so
 * AnimGate leaves these elements alone.
 */
export function Reveal({
  children,
  className,
  delay,
  tabIndex,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  tabIndex?: number;
  as?: "div" | "article" | "figure" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (el.getBoundingClientRect().top < innerHeight) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      data-rv=""
      className={`rv${inView ? " in" : ""}${className ? ` ${className}` : ""}`}
      tabIndex={tabIndex}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
