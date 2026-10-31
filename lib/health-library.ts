import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { z } from "zod";
import type { IconName } from "@/lib/icons";
import {
  LIB_BASE,
  TOPICS,
  topic,
  fmtDate,
  type Topic,
  type TopicSlug,
} from "@/lib/library-shared";

export { LIB_BASE, TOPICS, topic, fmtDate };
export type { Topic, TopicSlug };

const guideFaq = z.object({ q: z.string(), a: z.string() });
const guideSource = z.object({
  title: z.string(),
  publisher: z.string(),
  year: z.string(),
  url: z.string().optional(),
});
const guideCover = z.union([
  z.object({
    kind: z.literal("designed"),
    icon: z.string(),
    tone: z.string().optional(),
  }),
  z.object({
    kind: z.literal("photo"),
    src: z.string(),
    alt: z.string(),
  }),
]);

export const guideFrontmatter = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  h1: z.string(),
  dek: z.string(),
  topic: z.enum(TOPICS.map((t) => t.slug) as [TopicSlug, ...TopicSlug[]]),
  concerns: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  author: z.string(),
  reviewer: z.string(),
  datePublished: z.string(),
  dateModified: z.string(),
  lastReviewed: z.string(),
  cover: guideCover,
  inBrief: z.object({
    summary: z.string(),
    points: z.array(z.string()).min(2).max(4),
  }),
  faqs: z.array(guideFaq),
  sources: z.array(guideSource).min(1),
  relatedGuides: z.array(z.string()).max(3).default([]),
  relatedServices: z.array(z.string()).min(2).max(4),
  featured: z.boolean().default(false),
  startHere: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  crisis: z.literal(true),
  oldUrl: z.string().optional(),
  status: z.enum(["draft", "review", "published"]),
});

export type GuideFrontmatter = z.infer<typeof guideFrontmatter>;

export interface TocEntry {
  id: string;
  text: string;
}
export type BodySegment =
  | { type: "html"; html: string }
  | {
      type: "comp";
      name: string;
      attrs: Record<string, unknown>;
      inner: string;
    };

export interface Guide extends GuideFrontmatter {
  segments: BodySegment[];
  toc: TocEntry[];
  readingTime: number;
  bodyText: string;
}

const DIR = path.join(process.cwd(), "resources/content/health-library");

/* --- tiny MDX-ish attr parser -------------------------------------------
   Supports attr="...", attr={...} (JSON) and bare boolean attrs. */
function parseAttrs(src: string): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  let i = 0;
  const ws = () => {
    while (i < src.length && /\s/.test(src[i])) i++;
  };
  while (i < src.length) {
    ws();
    const m = /^([A-Za-z_]\w*)/.exec(src.slice(i));
    if (!m) break;
    const key = m[1];
    i += key.length;
    ws();
    if (src[i] !== "=") {
      out[key] = true;
      continue;
    }
    i++;
    ws();
    if (src[i] === '"' || src[i] === "'") {
      const q = src[i++];
      const end = src.indexOf(q, i);
      out[key] = src.slice(i, end);
      i = end + 1;
    } else if (src[i] === "{") {
      let depth = 0;
      const start = i;
      while (i < src.length) {
        if (src[i] === "{") depth++;
        else if (src[i] === "}") {
          depth--;
          if (depth === 0) {
            i++;
            break;
          }
        }
        i++;
      }
      const raw = src.slice(start + 1, i - 1).trim();
      try {
        out[key] = JSON.parse(raw);
      } catch {
        out[key] = raw;
      }
    }
  }
  return out;
}

const COMP_RE =
  /<([A-Z][A-Za-z]*)\b((?:(?!\/?>)[\s\S])*?)(?:\/>|>([\s\S]*?)<\/\1>)/;

function emLast(text: string): string {
  return text.replace(/(\S+[.?]*)$/, "<em>$1</em>");
}

function parseBody(raw: string): {
  segments: BodySegment[];
  toc: TocEntry[];
  bodyText: string;
} {
  const comps: { name: string; attrs: Record<string, unknown>; inner: string }[] =
    [];
  let md = raw;
  let m: RegExpExecArray | null;
  // extract component tags left to right
  while ((m = COMP_RE.exec(md))) {
    const idx = comps.length;
    comps.push({
      name: m[1],
      attrs: parseAttrs(m[2] ?? ""),
      inner: (m[3] ?? "").trim(),
    });
    md = md.slice(0, m.index) + `\n\n@@COMP_${idx}@@\n\n` + md.slice(m.index + m[0].length);
    COMP_RE.lastIndex = 0;
  }
  // number + id the H2s, collect toc
  const toc: TocEntry[] = [];
  md = md.replace(/^## +(.+)$/gm, (_, t: string) => {
    const text = t.replace(/[*_`]/g, "").trim();
    const id = `a-${toc.length + 1}`;
    toc.push({ id, text });
    return `<h2 id="${id}"><span>${emLast(text)}</span></h2>`;
  });
  let html = marked.parse(md, { async: false }) as string;
  // [CONFIRM: note] -> dev chip; stripped entirely in production builds
  html = PROD
    ? html.replace(/\[CONFIRM(?::\s*[^\]]*)?\]/g, "")
    : html.replace(
        /\[CONFIRM(?::\s*([^\]]*))?\]/g,
        (_, n: string) => `<span class="cf">CONFIRM${n ? " " + n : ""}</span>`,
      );
  // split rendered html on the component placeholders
  const segments: BodySegment[] = [];
  const parts = html.split(/<p>@@COMP_(\d+)@@<\/p>/g);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      const h = parts[i].trim();
      if (h) segments.push({ type: "html", html: h });
    } else {
      const c = comps[Number(parts[i])];
      segments.push({
        type: "comp",
        name: c.name,
        attrs: c.attrs,
        inner: c.inner,
      });
    }
  }
  const bodyText = raw
    .replace(COMP_RE, " ")
    .replace(/[#*_`>[\]-]/g, " ")
    .replace(/\{[^}]*\}/g, " ");
  return { segments, toc, bodyText };
}

let cache: Guide[] | null = null;

export function loadGuides(): Guide[] {
  if (cache) return cache;
  const files = readdirSync(DIR).filter(
    (f) => f.endsWith(".mdx") || f.endsWith(".md"),
  );
  const guides = files.map((file) => {
    const { data, content } = matter(readFileSync(path.join(DIR, file), "utf8"));
    const fm = guideFrontmatter.parse(data);
    if (fm.slug !== file.replace(/\.(mdx|md)$/, ""))
      throw new Error(`${file}: slug "${fm.slug}" does not match file name`);
    const { segments, toc, bodyText } = parseBody(content);
    const words = bodyText.trim().split(/\s+/).filter(Boolean).length;
    return {
      ...fm,
      segments,
      toc,
      readingTime: Math.max(1, Math.ceil(words / 200)),
      bodyText,
    } satisfies Guide;
  });
  if (guides.filter((g) => g.featured).length > 1)
    throw new Error("health-library: only one guide may be featured");
  const inUse = guides.filter((g) => g.startHere !== undefined);
  const slots = new Set(inUse.map((g) => g.startHere));
  if (slots.size !== inUse.length)
    throw new Error("health-library: startHere positions must be unique");
  cache = guides;
  return guides;
}

const PROD = process.env.NODE_ENV === "production";

/* Guides the site lists and builds: everything in dev, published in prod.
   While no guide is published yet the library shows all of them, so the
   section is not empty before clinical sign-off flips the statuses. */
export function visibleGuides(): Guide[] {
  const g = loadGuides();
  if (!PROD) return g;
  const pub = g.filter((x) => x.status === "published");
  return pub.length ? pub : g;
}

export function getGuide(slug: string): Guide | undefined {
  return visibleGuides().find((g) => g.slug === slug);
}

export function featuredGuide(): Guide | undefined {
  return visibleGuides().find((g) => g.featured);
}

export function startHereGuides(): Guide[] {
  return visibleGuides()
    .filter((g) => g.startHere !== undefined)
    .sort((a, b) => (a.startHere ?? 0) - (b.startHere ?? 0));
}

export function topicCounts(): Map<TopicSlug, number> {
  const m = new Map<TopicSlug, number>();
  for (const g of visibleGuides()) m.set(g.topic, (m.get(g.topic) ?? 0) + 1);
  return m;
}

/* Related cards: relatedGuides first, then newest in the same topic. */
export function relatedGuides(guide: Guide, max = 3): Guide[] {
  const all = visibleGuides().filter((g) => g.slug !== guide.slug);
  const picked: Guide[] = [];
  for (const slug of guide.relatedGuides) {
    const g = all.find((x) => x.slug === slug);
    if (g) picked.push(g);
  }
  const rest = all
    .filter((g) => g.topic === guide.topic && !picked.includes(g))
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
  return [...picked, ...rest].slice(0, max);
}

/* Previous / next by publish date across the whole library. */
export function prevNext(guide: Guide): {
  prev?: Guide;
  next?: Guide;
} {
  const sorted = [...visibleGuides()].sort(
    (a, b) =>
      a.datePublished.localeCompare(b.datePublished) ||
      a.slug.localeCompare(b.slug),
  );
  const i = sorted.findIndex((g) => g.slug === guide.slug);
  return { prev: sorted[i - 1], next: sorted[i + 1] };
}

/* Small index the client search runs against (schema section 1). */
export interface SearchEntry {
  slug: string;
  title: string;
  haystack: string;
}
export function searchIndex(): SearchEntry[] {
  return visibleGuides().map((g) => ({
    slug: g.slug,
    title: g.title,
    haystack:
      `${g.title} ${g.dek} ${g.inBrief.summary} ${topic(g.topic).label} ${g.tags.join(" ")}`.toLowerCase(),
  }));
}

/* 301 map for next.config redirects(): old ?p=N blog posts to new slugs. */
export function guideRedirects(): { from: string; to: string }[] {
  const out: { from: string; to: string }[] = [];
  for (const g of loadGuides()) {
    if (!g.oldUrl) continue;
    const p = /[?&]p=(\d+)/.exec(g.oldUrl)?.[1];
    if (p) out.push({ from: p, to: `${LIB_BASE}${g.slug}/` });
  }
  return out;
}
