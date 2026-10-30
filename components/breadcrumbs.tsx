"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labelForPath } from "@/lib/nav";

/* Breadcrumbs + BreadcrumbList JSON-LD on every non-home page. */
export function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const segs = pathname.split("/").filter(Boolean);
  const trail = segs.map((_, i) => {
    const path = "/" + segs.slice(0, i + 1).join("/") + "/";
    return { path, label: labelForPath(path) };
  });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.label,
        item: t.path,
      })),
    ],
  };
  return (
    <div className="g" style={{ paddingTop: 18 }}>
      <div className="wrap">
        <p className="crumb">
          <Link href="/">Home</Link>
          {trail.map((t, i) => (
            <span key={t.path}>
              {" "}
              /{" "}
              {i === trail.length - 1 ? (
                t.label
              ) : (
                <Link href={t.path}>{t.label}</Link>
              )}
            </span>
          ))}
        </p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </div>
  );
}
