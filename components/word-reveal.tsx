import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactNode,
} from "react";

/*
 * H1 word reveal: each word rises and unblurs with a 70ms stagger on load.
 * Pure markup + CSS animation, so it never delays the LCP image.
 * Element children (e.g. <em>) animate as a single unit.
 */
export function WordReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  let k = 0;
  const out = Children.map(children, (child) => {
    if (typeof child === "string") {
      return child.split(/(\s+)/).map((t, i) => {
        if (!t) return null;
        if (/^\s+$/.test(t)) return t;
        return (
          <span
            key={`${k}-${i}`}
            className="w"
            style={{ "--i": k++ } as CSSProperties}
          >
            {t}
          </span>
        );
      });
    }
    if (isValidElement(child)) {
      const el = child as React.ReactElement<{
        className?: string;
        style?: CSSProperties;
      }>;
      return cloneElement(el, {
        className: `${el.props.className ?? ""} w`.trim(),
        style: { ...el.props.style, "--i": k++ } as CSSProperties,
      });
    }
    return child;
  });
  return <span className={className}>{out}</span>;
}
