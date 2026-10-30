import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={className ? `eyebrow ${className}` : "eyebrow"}>
      {children}
    </span>
  );
}
