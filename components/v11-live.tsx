"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { TMHImage } from "@/components/tmh-image";
import { Icon, type IconName } from "@/lib/icons";
import type { ImageName } from "@/lib/images";

/* Sticky chip nav: highlights the section in view and smooth-scrolls on click. */
export function OnThisPage({
  items,
}: {
  items: { id: string; icon: IconName; label: string }[];
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const links = [...nav.querySelectorAll("a")];
    const spy = () => {
      let cur: HTMLAnchorElement | null = null;
      links.forEach((a) => {
        const t = document.getElementById(a.dataset.x || "");
        if (t && t.getBoundingClientRect().top < 200)
          cur = a as HTMLAnchorElement;
      });
      links.forEach((a) => a.classList.toggle("on", a === cur));
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      e.preventDefault();
      const t = document.getElementById(a.dataset.x || "");
      if (t)
        window.scrollTo({
          top: t.getBoundingClientRect().top + scrollY - 150,
          behavior: "smooth",
        });
    };
    spy();
    addEventListener("scroll", spy, { passive: true });
    nav.addEventListener("click", onClick);
    return () => {
      removeEventListener("scroll", spy);
      nav.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <nav className="xnav g" aria-label="On this page" ref={ref}>
      <div className="wrap">
        {items.map((it) => (
          <a key={it.id} href={`#${it.id}`} data-x={it.id}>
            <Icon name={it.icon} /> {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export interface PathStep {
  icon: IconName;
  n: ReactNode;
  title: ReactNode;
  text: ReactNode;
}

/* Left column sticks; the right line fills honey to walnut as steps pass
   60% of the viewport and each icon turns walnut when reached. */
export function TherapyPath({
  sticky,
  steps,
  note,
  bare,
  style,
}: {
  sticky?: ReactNode;
  steps: PathStep[];
  note?: ReactNode;
  bare?: boolean;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const list = root.querySelector<HTMLElement>(".xpl");
    if (!list) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stepsEls = [...list.querySelectorAll<HTMLElement>(".s")];
    const xp = () => {
      const r = list.getBoundingClientRect();
      const p = Math.min(
        1,
        Math.max(0, (innerHeight * 0.6 - r.top) / r.height),
      );
      list.style.setProperty("--p", p.toFixed(3));
      stepsEls.forEach((s) =>
        s.classList.toggle("on", s.getBoundingClientRect().top < innerHeight * 0.6),
      );
    };
    xp();
    addEventListener("scroll", xp, { passive: true });
    addEventListener("resize", xp);
    if (reduced) {
      stepsEls.forEach((s) => s.classList.add("on"));
      list.style.setProperty("--p", "1");
    }
    return () => {
      removeEventListener("scroll", xp);
      removeEventListener("resize", xp);
    };
  }, []);

  const list = (
    <div className="xpl">
      <i className="fill" aria-hidden="true" />
      {steps.map((s, i) => (
        <div className="s" key={i}>
          <span className="xi">
            <Icon name={s.icon} />
          </span>
          <small>{s.n}</small>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
  if (bare)
    return (
      <div ref={ref} style={style}>
        {list}
        {note ? <p className="notebox">{note}</p> : null}
      </div>
    );
  return (
    <div className="xpath" ref={ref} style={style}>
      <div className="xst">{sticky}</div>
      {list}
      {note ? <p className="notebox">{note}</p> : null}
    </div>
  );
}

/* Sticky photo card used on the left of TherapyPath */
export function PathPhoto({
  img,
  alt,
  icon,
  caption,
  pos,
}: {
  img: ImageName;
  alt: string;
  icon: IconName;
  caption: string;
  pos?: string;
}) {
  return (
    <>
      <div className="fr">
        <TMHImage
          name={img}
          alt={alt}
          sizes="(min-width: 900px) 380px, 100vw"
          objectPosition={pos}
        />
      </div>
      <div className="cap">
        <span className="xi">
          <Icon name={icon} />
        </span>
        {caption}
      </div>
    </>
  );
}
