import type { ReactNode } from "react";
import { Icon, type IconName } from "@/lib/icons";

export function GhostButton({
  href,
  icon,
  children,
  className,
  external,
}: {
  href: string;
  icon?: IconName;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      className={className ? `ghost ${className}` : "ghost"}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {icon ? <Icon name={icon} /> : null}
      {children}
    </a>
  );
}
