import type { ReactNode } from "react";

/*
 * Line icons copied from the approved preview (24x24, stroke currentColor,
 * stroke-width 1.6, round caps). Keys match the reference's I{...} map.
 */
const P = {
  USER: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
      <path d="M16 4.5l1.5 1.5 3-3" />
    </>
  ),
  AWARD: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5" />
      <path d="M10 9l1.5 1.5L14.5 7.5" />
    </>
  ),
  CAP: (
    <>
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5z" />
      <path d="M6.5 11v4.5c1.5 1.5 3.5 2.2 5.5 2.2s4-.7 5.5-2.2V11M21.5 9v5" />
    </>
  ),
  CLIP: (
    <>
      <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
      <path d="M9 4.5h6v3H9zM8.5 12h7M8.5 15.5h5" />
    </>
  ),
  PILL: (
    <>
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </>
  ),
  EAR: (
    <>
      <path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0" />
      <path d="M10 9.5a2 2 0 0 1 4 0c0 1.5-1.5 2-1.5 3" />
    </>
  ),
  TOOL: (
    <path d="M14.5 6.5a4 4 0 0 0 5 5l-9 9a2.2 2.2 0 0 1-3-3l9-9a4 4 0 0 0-2-2z" />
  ),
  CHAT: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  LINK: (
    <>
      <path d="M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1-1" />
    </>
  ),
  PERSON: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
    </>
  ),
  CHILD: (
    <>
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="10" r="2.2" />
      <path d="M3.5 20c0-3.5 2.5-5.5 5.5-5.5s5.5 2 5.5 5.5M14.5 20c.2-2.4 1.2-3.8 2.5-3.8s2.6 1.4 3 3.8" />
    </>
  ),
  FAMILY: (
    <>
      <circle cx="7" cy="7" r="2.6" />
      <circle cx="17" cy="7" r="2.6" />
      <circle cx="12" cy="12.5" r="2" />
      <path d="M2.5 18c0-3 2-5 4.5-5M21.5 18c0-3-2-5-4.5-5M8.5 20c0-2.2 1.5-3.6 3.5-3.6s3.5 1.4 3.5 3.6" />
    </>
  ),
  LOOP: (
    <>
      <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
      <path d="M18 3v4h-4M6 21v-4h4" />
    </>
  ),
  SHIELD: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  MIRROR: (
    <>
      <ellipse cx="12" cy="10" rx="5.5" ry="7" />
      <path d="M12 17v4M9 21h6M10 7l3 3" />
    </>
  ),
  LEAF: (
    <>
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z" />
      <path d="M5 19c3-4 6-7 10-9" />
    </>
  ),
  MOON: (
    <>
      <path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z" />
      <path d="M16 4v3M14.5 5.5h3" />
    </>
  ),
  GLOBE: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5z" />
    </>
  ),
  CAL: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  TEL: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  ARR: <path d="M5 12h14M13 6l6 6-6 6" />,
  TICK: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  X: <path d="M6 6l12 12M18 6L6 18" />,
  MENU: <path d="M4 8h16M4 16h16" />,
  WA: (
    <>
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
    </>
  ),
  MIND: (
    <path d="M12 4a6 6 0 0 0-6 6c0 2 1 3 1 5v3h7v-2h2a2 2 0 0 0 2-2v-2l1.5-.5L17 9a6 6 0 0 0-5-5z" />
  ),
  HEART: (
    <>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
      <path d="M7 12h3l1-2 2 4 1-2h3" />
    </>
  ),
  DOOR: <path d="M6 20V4h9v16M4 20h16M12 12h.01" />,
  PIN: (
    <>
      <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  LOCK: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  STAR: (
    <path d="M12 4l2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z" />
  ),
  CLOCK: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  SEND: <path d="M4 12l16-8-6 16-2.5-6.5z" />,
  CLOUD: (
    <path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 18z" />
  ),
  FLAME: (
    <path d="M12 21c-4 0-6-3-6-6 0-4 4-6 4-10 3 2 4 4 4 6 1-1 1.5-2 1.5-3 2 2 2.5 4.5 2.5 7 0 3-2 6-6 6z" />
  ),
  RINGS: (
    <>
      <circle cx="9" cy="13" r="5" />
      <circle cx="15" cy="13" r="5" />
      <path d="M10 4l2 2 2-2" />
    </>
  ),
  SPROUT: (
    <path d="M12 21v-9M12 12c0-4-3-6-7-6 0 4 3 6 7 6zM12 14c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5z" />
  ),
  COMPASS: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  VIDEO: (
    <>
      <rect x="3" y="6.5" width="13" height="11" rx="2.5" />
      <path d="M16 10.5l5-3v9l-5-3z" />
    </>
  ),
  EYE: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  CUP: (
    <>
      <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3" />
    </>
  ),
  PEN: (
    <>
      <path d="M4 20l4-1 11-11-3-3L5 16z" />
      <path d="M14 6l3 3" />
    </>
  ),
  BRIEF: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  SCHOOL: (
    <>
      <path d="M3 21h18M5 21V10l7-5 7 5v11" />
      <path d="M10 21v-5h4v5" />
      <circle cx="12" cy="11" r="1.6" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof P;
export const iconNames = Object.keys(P) as IconName[];

export function Icon({
  name,
  className,
  strokeWidth,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className ? `ic ${className}` : "ic"}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={strokeWidth ? { strokeWidth } : undefined}
    >
      {P[name]}
    </svg>
  );
}

export function IconTile({
  name,
  size,
  solid,
  className,
}: {
  name: IconName;
  size?: "sm" | "lg" | "xl";
  solid?: boolean;
  className?: string;
}) {
  const cls = [
    "tile",
    size,
    solid ? "solid" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls}>
      <Icon name={name} />
    </span>
  );
}
