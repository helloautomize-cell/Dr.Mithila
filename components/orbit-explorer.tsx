"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "@/lib/icons";

export interface OrbitItem {
  title: string;
  text: string;
  icon: IconName;
  href: string;
}

const ITEMS: OrbitItem[] = [
  {
    title: "Anxiety and overthinking",
    text: "Worry that won't switch off, panic, and the 3am what-ifs. Practical ways to calm the body and loosen anxious thoughts.",
    icon: "MIND",
    href: "#anxiety",
  },
  {
    title: "Low mood",
    text: "When everything feels heavy or flat. Gentle, structured support to find energy and meaning again.",
    icon: "CLOUD",
    href: "#",
  },
  {
    title: "Stress and burnout",
    text: "Work pressure, exams and caring for others, spilling into sleep and temper.",
    icon: "FLAME",
    href: "#",
  },
  {
    title: "Couples and marriage",
    text: "Communication gaps, trust, conflict, and questions before marriage.",
    icon: "RINGS",
    href: "#",
  },
  {
    title: "Children and teens",
    text: "Big feelings, school worries and behaviour, with parents involved at the right moments.",
    icon: "SPROUT",
    href: "#",
  },
  {
    title: "Assessment and clarity",
    text: "Attention, learning, personality and career aptitude, explained in plain words.",
    icon: "COMPASS",
    href: "#",
  },
];

const ANGLES = [-150, 180, 150, -30, 0, 30];

/* Line-art brain with roots; the right hemisphere mirrors the left. */
function Brain() {
  const paths = (
    <>
      <path
        className="bo"
        d="M100 22 C84 12 60 12 46 24 C30 24 18 38 20 54 C8 62 6 82 16 94 C10 110 20 128 38 130 C44 144 62 150 78 144 C88 150 98 146 100 140"
      />
      <path className="gy" d="M46 24 C52 34 48 44 58 50" />
      <path className="gy" d="M20 54 C32 56 40 50 48 58 C54 64 50 74 60 78" />
      <path className="gy" d="M16 94 C28 90 36 96 44 90 C52 84 62 90 66 82" />
      <path
        className="gy"
        d="M38 130 C42 118 52 116 56 108 C60 100 72 104 76 96"
      />
      <path className="gy" d="M78 144 C76 132 84 126 82 116" />
      <path className="gy" d="M66 30 C70 40 80 40 82 52 C84 62 76 66 80 76" />
      <path className="gy" d="M88 22 C86 34 92 40 90 52" />
      <path className="gy" d="M34 74 C40 70 44 76 50 72" />
      <path className="gy" d="M58 120 C64 126 72 122 74 130" />
      <path
        className="gy"
        d="M86 88 C80 96 90 104 84 114 C80 122 90 128 88 136"
      />
    </>
  );
  return (
    <svg className="brain" viewBox="0 0 200 175" aria-hidden="true">
      <defs>
        <radialGradient id="brain-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#EBD9C7" />
        </radialGradient>
      </defs>
      <g className="hl">{paths}</g>
      <g className="hr" transform="translate(200 0) scale(-1 1)">
        {paths}
      </g>
      <path className="mid" d="M100 22 C98 60 102 100 100 140" />
      <path className="rt" d="M100 140 C100 150 100 156 100 166" />
      <path className="rt" d="M100 148 C94 154 86 156 80 166" />
      <path className="rt" d="M100 148 C106 154 114 156 120 166" />
      <path className="rt" d="M100 154 C92 160 72 160 64 168" />
      <path className="rt" d="M100 154 C108 160 128 160 136 168" />
    </svg>
  );
}

/*
 * Six icon nodes orbit a self-drawing brain. Hover, click or auto-cycle (4s)
 * highlights the node, draws a dashed link and lights the matching region.
 */
export function OrbitExplorer({ items = ITEMS }: { items?: OrbitItem[] }) {
  const [cur, setCur] = useState(0);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (interacted) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setCur((c) => (c + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [interacted, items.length]);

  const pick = (i: number) => {
    setCur(i);
    setInteracted(true);
  };

  const positions = ANGLES.map((deg) => {
    const a = (deg * Math.PI) / 180;
    return { x: 50 + 46 * Math.cos(a), y: 50 + 46 * Math.sin(a) };
  });

  const itemButton = (o: OrbitItem, i: number) => (
    <div
      key={o.title}
      className={i === cur ? "oi on" : "oi"}
      data-i={i}
      onMouseEnter={() => pick(i)}
    >
      <button className="oib" onClick={() => pick(i)} aria-expanded={i === cur}>
        <span className="n">{`0${i + 1}`}</span>
        <h3>{o.title}</h3>
      </button>
      <p>
        {o.text}{" "}
        <a className="link" href={o.href} style={{ fontSize: 14 }}>
          Learn more
        </a>
      </p>
    </div>
  );

  return (
    <div className="orbg">
      <div className="ocol l">{items.slice(0, 3).map(itemButton)}</div>
      <div className={`oring l${cur}`}>
        <div className="halo" aria-hidden="true" />
        <div className="r1" aria-hidden="true" />
        <div className="r2" aria-hidden="true" />
        <svg className="lk" viewBox="0 0 100 100" aria-hidden="true">
          {positions.map((p, i) => (
            <line
              key={i}
              data-i={i}
              className={i === cur ? "on" : undefined}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
            />
          ))}
        </svg>
        <div className="core">
          <Brain />
        </div>
        {items.map((o, i) => (
          <button
            key={o.title}
            className={i === cur ? "node on" : "node"}
            data-i={i}
            aria-label={o.title}
            style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}
            onClick={() => pick(i)}
            onMouseEnter={() => pick(i)}
          >
            <Icon name={o.icon} />
          </button>
        ))}
      </div>
      <div className="ocol r">
        {items.slice(3).map((o, i) => itemButton(o, i + 3))}
      </div>
    </div>
  );
}
