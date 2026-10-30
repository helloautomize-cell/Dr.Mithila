import type { ReactNode } from "react";

/*
 * [CONFIRM] chip: visible in development, hidden in production builds.
 * Children describe what still needs client approval ("year", "CRR no.").
 */
export function Confirm({ children }: { children?: ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span className="cf">CONFIRM{children ? <> {children}</> : null}</span>
  );
}
