"use client";

import { useRef } from "react";
import { Icon, type IconName } from "@/lib/icons";

/* Two-part pill: walnut icon block + espresso label.
   Magnetic cursor-follow on hover-capable devices only. */
export function BookButton({
  href = "/book/",
  label = "Book a session",
  icon = "CAL",
  className,
}: {
  href?: string;
  label?: string;
  icon?: IconName;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover:hover)").matches) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px,${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      className={className ? `btn mag ${className}` : "btn mag"}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="i">
        <Icon name={icon} />
      </span>
      <span className="t">{label}</span>
    </a>
  );
}
