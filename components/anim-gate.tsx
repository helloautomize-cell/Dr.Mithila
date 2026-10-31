"use client";

import { useEffect } from "react";

// Elements with infinite CSS animations. AnimGate toggles .a-run while any of
// them is near the viewport, so off-screen animation costs nothing.
const ANIMATED =
  ".float, .mq .tr, .bento .vault .r1, .bento .vid .live, .bento .vid .live i, .oring .r1, .oring .r2, .oring .core, .oring .halo, .oring .node, .badge35 svg, .pointer .hand, .xfl, .xbr i, .xbr span";

export function AnimGate() {
  useEffect(() => {
    const els = document.querySelectorAll(ANIMATED);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle("a-run", e.isIntersecting)),
      { rootMargin: "120px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
