import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { z } from "zod";

const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string(),
  template: z.enum(["home", "default", "sidebar", "crisis", "post"]),
  icon: z.string().default("PERSON"),
  reviewer: z.string().default("Dr. Mithila Desai, PhD"),
  lastReviewed: z.string().default("CONFIRM"),
  schema: z.string().default("WebPage"),
  related: z.array(z.string()).default([]),
  category: z.string().default(""),
  datePublished: z.string().default(""),
  dateModified: z.string().default(""),
  inBrief: z.string().default(""),
});

export type PageContent = z.infer<typeof frontmatterSchema> & {
  html: string;
  slug: string;
};

const DIR = path.join(process.cwd(), "resources/content");

function* walk(dir: string): Generator<string> {
  for (const f of readdirSync(dir)) {
    const p = path.join(dir, f);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (f.endsWith(".md")) yield p;
  }
}

let cache: Map<string, PageContent> | null = null;

function confirmToChip(html: string): string {
  if (process.env.NODE_ENV === "production")
    return html.replace(/\s*\[CONFIRM(?::\s*[^\]]+)?\]/g, "");
  return html.replace(
    /\[CONFIRM(?::\s*([^\]]+))?\]/g,
    (_, note) =>
      `<span class="cf">CONFIRM${note ? ` ${note.trim()}` : ""}</span>`,
  );
}

/* Strip spec-sheet directives left by the content doc ("H1:", "Intro:",
   "Glass cards:", fenced blocks) while keeping the copy itself. */
const DROP_LABELS = new Set([
  "Intro",
  "Intro (answer-first)",
  "In brief",
  "Lead",
  "Glass cards",
  "Card",
  "Cards",
  "Button",
  "Buttons",
  "Badge",
  "Badges",
  "Decision",
  "Meta",
  "SEO",
  "URL",
  "Template",
  "Reviewer",
  "Schema",
  "Sidebar",
  "Layout",
  "Images",
  "Image",
  "Photos",
  "Alt",
  "Fields",
  "Form",
  "Nav",
  "CTA",
  "Section",
  "Design",
  "Icons",
  "Icon",
  "Lead psychologist",
]);
function cleanSpec(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^\s*\((?:CTA|buttons?|image|photo|table|form|layout)[^)]*\)\s*$/gim, "")
    .replace(/^Decision D\d[^\n]*$/gim, "")
    .replace(/^#### /gm, "### ")
    .replace(/^### /gm, "## ")
    .replace(/`\[(CONFIRM[^\]]*)\]`/g, "[$1]")
    .replace(/^\{CTA\}\s*$/gim, "")
    .split("\n")
    .map((l) => {
      if (/^H1\s*:/.test(l)) return "";
      const m = l.match(/^([A-Za-z][A-Za-z ()/-]{0,34}?)\s*:\s+(.*)$/);
      if (m && DROP_LABELS.has(m[1])) return m[2];
      return l;
    })
    .join("\n");
}

const SPEC_LINE =
  /^(Decision|Note|For the agent|Meta|URL|Badge|Reviewer|The cloud workspace|Local crawl|Applies to|Old |Full map|\()/i;
function firstParagraph(md: string): string {
  const p = md
    .split(/\n{2,}/)
    .map((s) => s.trim())
    .find(
      (s) =>
        s &&
        !s.startsWith("#") &&
        !s.startsWith(">") &&
        !s.startsWith("<") &&
        !s.startsWith("-") &&
        !s.startsWith("|") &&
        !s.startsWith("*") &&
        !SPEC_LINE.test(s),
    );
  const t = (p ?? "")
    .replace(/`?\[CONFIRM[^\]]*\]`?/g, "")
    .replace(/\[|\]|`|\*|\(.*?\)/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (t.length <= 170) return t;
  const cut = t.slice(0, 158);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/* The spec docs carry a fenced ```yaml block with the real title/description. */
function yamlBlockField(md: string, key: string): string {
  const block = md.match(/```ya?ml\s+([\s\S]*?)```/);
  const line = block?.[1].match(
    new RegExp(`^${key}:\\s*["']?(.*?)["']?\\s*$`, "m"),
  );
  return line?.[1].trim() ?? "";
}

/* The generator-derived description sometimes caught a spec block
   (yaml/title lines) — prefer the fenced yaml description, else re-derive
   from cleaned content. */
function fixDescription(desc: string, cleaned: string, raw: string): string {
  const bad =
    /^\s*(yaml|title:|description:|url:|template:|reviewer:|schema:|H1\s*:)/i.test(
      desc,
    ) || desc.includes("title:") || SPEC_LINE.test(desc.trim());
  if (!bad) return desc;
  return yamlBlockField(raw, "description") || firstParagraph(cleaned);
}

function postProcess(html: string): string {
  let out = html
    .replace(/<ul>/g, '<ul class="list">')
    .replace(/<blockquote>/g, '<blockquote class="notebox">');
  out = confirmToChip(out);
  return out;
}

export function loadContent(): Map<string, PageContent> {
  if (cache) return cache;
  cache = new Map();
  for (const file of walk(DIR)) {
    const { data, content } = matter(readFileSync(file, "utf8"));
    const fm = frontmatterSchema.parse({ ...data });
    const cleaned = cleanSpec(content);
    fm.description = fixDescription(fm.description, cleaned, content);
    const rel = path
      .relative(DIR, file)
      .replaceAll("\\", "/")
      .replace(/\.md$/, "");
    cache.set(fm.url, {
      ...fm,
      slug: rel,
      html: postProcess(marked.parse(cleaned, { async: false }) as string),
    });
  }
  return cache;
}

export function getPage(url: string): PageContent | undefined {
  return loadContent().get(url);
}

export function allUrls(): string[] {
  return [...loadContent().keys()];
}

export function allPosts(): PageContent[] {
  return [...loadContent().values()].filter((p) => p.template === "post");
}
