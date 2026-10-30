"use client";

import { useEffect, useRef, type ReactNode } from "react";

/*
 * IntersectionObserver reveal: .rv fades/rises in once when 15% visible.
 * Content stays visible without JS (the .rv styles are the only gate).
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < innerHeight) {
      el.classList.add("in");
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
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={className ? `rv ${className}` : "rv"}
      tabIndex={tabIndex}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
