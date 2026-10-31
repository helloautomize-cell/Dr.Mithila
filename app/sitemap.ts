import type { MetadataRoute } from "next";
import { allUrls } from "@/lib/content";
import { LIB_BASE, TOPICS, visibleGuides } from "@/lib/health-library";

const BASE = "https://www.thementalhealth.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = allUrls().map((u) => `${BASE}${u}`);
  const lib = [LIB_BASE];
  for (const g of visibleGuides()) lib.push(`${LIB_BASE}${g.slug}/`);
  for (const t of TOPICS) lib.push(`${LIB_BASE}topic/${t.slug}/`);
  return [...new Set([...urls, ...lib.map((u) => `${BASE}${u}`)])].map(
    (url) => ({ url }),
  );
}
