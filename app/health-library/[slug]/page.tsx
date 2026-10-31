import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { schemaScript } from "@/components/page-templates";
import {
  LIB_BASE,
  visibleGuides,
  getGuide,
  topic,
} from "@/lib/health-library";

export const instant = false;

const BASE = "https://www.thementalhealth.in";

export function generateStaticParams() {
  return visibleGuides()
    .filter((g) => g.slug !== "topic")
    .map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/health-library/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: `${g.title} | The Mental Health`,
    description: g.description,
    robots:
      g.status === "published"
        ? undefined
        : { index: false, follow: false },
  };
}

export default async function GuideRoute({
  params,
}: PageProps<"/health-library/[slug]">) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g || slug === "topic") notFound();

  const t = topic(g.topic);
  const url = `${BASE}${LIB_BASE}${g.slug}/`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: g.title,
        description: g.description,
        url,
        author: { "@id": `${BASE}/#dr-mithila-desai` },
        reviewedBy: { "@id": `${BASE}/#dr-mithila-desai` },
        datePublished: g.datePublished,
        dateModified: g.dateModified.includes("CONFIRM")
          ? g.datePublished
          : g.dateModified,
        lastReviewed: g.lastReviewed.includes("CONFIRM")
          ? undefined
          : g.lastReviewed,
        isPartOf: { "@id": `${BASE}${LIB_BASE}#collection` },
        publisher: { "@id": `${BASE}/#practice` },
        about: t.label,
      },
      ...(g.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: g.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Health library",
            item: `${BASE}${LIB_BASE}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t.label,
            item: `${BASE}${LIB_BASE}topic/${t.slug}/`,
          },
          { "@type": "ListItem", position: 4, name: g.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <GuidePage guide={g} />
      {schemaScript(graph)}
    </>
  );
}
