"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

/*
 * Scroll-linked heading: characters fade from 14% to 100% opacity as the
 * heading moves through the viewport. Used on Why, Her story, Where do I start.
 * Under prefers-reduced-motion the CSS shows the text in full and JS skips.
 */
function splitText(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(\s+)/).map((w, i) => {
    if (!w) return null;
    if (/^\s+$/.test(w)) return w;
    return (
      <span key={`${keyPrefix}-${i}`} style={{ whiteSpace: "nowrap" }}>
        {[...w].map((ch, j) => (
          <span key={j} className="c">
            {ch}
          </span>
        ))}
      </span>
    );
  });
}

function splitChildren(children: ReactNode, keyPrefix: string): ReactNode {
  return Children.map(children, (child, i) => {
    if (typeof child === "string") return splitText(child, `${keyPrefix}-${i}`);
    if (isValidElement(child)) {
      const el = child as React.ReactElement<{ children?: ReactNode }>;
      return cloneElement(el, {
        children: splitChildren(el.props.children, `${keyPrefix}-${i}`),
      });
    }
    return child;
  });
}

export function CharReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const chars = el.querySelectorAll(".c");
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = Math.min(
        1,
        Math.max(0, (innerHeight * 0.92 - r.top) / (innerHeight * 0.5)),
      );
      const n = Math.round(p * chars.length);
      chars.forEach((c, i) => c.classList.toggle("on", i < n));
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
    <span ref={ref} className={className ? `chars ${className}` : "chars"}>
      {splitChildren(children, "cr")}
    </span>
  );
}
