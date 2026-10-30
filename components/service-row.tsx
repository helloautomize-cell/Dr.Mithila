import Link from "next/link";
import { Icon, type IconName } from "@/lib/icons";

/*
 * A service line item: tinted icon tile with a number, title, one line,
 * and a round arrow that rotates on hover. Render inside .exp.sv.
 */
export function ServiceRow({
  n,
  icon,
  title,
  children,
  href,
}: {
  n: number;
  icon: IconName;
  title: string;
  children: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <span className="bdg">
        <Icon name={icon} />
        <i>{String(n).padStart(2, "0")}</i>
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
      <span className="go">
        <Icon name="ARR" />
      </span>
    </Link>
  );
}
