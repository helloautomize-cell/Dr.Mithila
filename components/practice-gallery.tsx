"use client";

import { useEffect, useRef } from "react";
import { TMHImage } from "@/components/tmh-image";
import { Icon, type IconName } from "@/lib/icons";
import type { ImageName } from "@/lib/images";

/* "Inside the practice" photo row (preview v8). Each figure drifts slightly
   on scroll via --py = centerOffset * data-s; listener skipped under
   prefers-reduced-motion. Below 900px it becomes a scroll-snap row (CSS). */
const ITEMS: { img: ImageName; icon: IconName; caption: string; s: number }[] =
  [
    { img: "clinic/clinic-room", icon: "PERSON", caption: "The consultation room", s: -0.06 },
    { img: "clinic/clinic-nook", icon: "LEAF", caption: "A quiet corner to settle", s: 0.05 },
    { img: "clinic/clinic-waiting", icon: "CLOCK", caption: "The waiting area", s: -0.03 },
    { img: "clinic/clinic-entrance", icon: "PIN", caption: "The entrance", s: 0.07 },
  ];

export function PracticeGallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const figs = [...root.querySelectorAll<HTMLElement>(".gi")];
    const plx = () =>
      figs.forEach((g) => {
        const r = g.getBoundingClientRect();
        const c = r.top + r.height / 2 - innerHeight / 2;
        g.style.setProperty(
          "--py",
          (c * parseFloat(g.dataset.s || "0")).toFixed(1) + "px",
        );
      });
    plx();
    addEventListener("scroll", plx, { passive: true });
    addEventListener("resize", plx);
    return () => {
      removeEventListener("scroll", plx);
      removeEventListener("resize", plx);
    };
  }, []);

  return (
    <div className="gl" ref={ref}>
      {ITEMS.map((it) => (
        <figure className="gi" key={it.img} data-s={it.s}>
          <TMHImage
            name={it.img}
            sizes="(min-width: 900px) 300px, 72vw"
            objectPosition="50% 50%"
          />
          <figcaption>
            <span>
              <Icon name={it.icon} />
            </span>
            {it.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
