"use client";

import { useEffect } from "react";

// Elements with infinite CSS animations. AnimGate toggles .a-run while any of
// them is near the viewport, so off-screen animation costs nothing.
const ANIMATED =
  ".float, .mq .tr, .bento .vault .r1, .bento .vid .live, .bento .vid .live i, .oring .r1, .oring .r2, .oring .core, .oring .halo, .oring .node, .badge35 svg, .pointer .hand, .xfl, .xbr i, .xbr span, .ado .bre";

// Elements marked .rv fade/rise in once when 15% visible. Reveal observes its
// own children; this gate covers bare .rv elements (and any mounted later).
export function AnimGate() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.target.classList.contains("rv")) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          } else {
            e.target.classList.toggle("a-run", e.isIntersecting);
          }
        }),
      { threshold: 0.15, rootMargin: "120px" },
    );

    const seen = new WeakSet<Element>();
    const watch = (root: ParentNode) =>
      root
        .querySelectorAll(`${ANIMATED}, .rv:not(.in)`)
        .forEach((el) => {
          if (!seen.has(el)) {
            seen.add(el);
            io.observe(el);
          }
        });

    watch(document);

    const mo = new MutationObserver((muts) =>
      muts.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (n instanceof Element) {
            watch(n);
            if (n.matches(`${ANIMATED}, .rv:not(.in)`)) {
              seen.add(n);
              io.observe(n);
            }
          }
        }),
      ),
    );
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
