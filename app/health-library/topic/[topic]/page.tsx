import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Icon, type IconName } from "@/lib/icons";
import { GuideToolbar } from "@/components/library-browser";
import { schemaScript } from "@/components/page-templates";
import {
  TOPICS,
  LIB_BASE,
  visibleGuides,
  topicCounts,
  topic,
} from "@/lib/health-library";

export const instant = false;

const BASE = "https://www.thementalhealth.in";

export function generateStaticParams() {
  const counts = topicCounts();
  return TOPICS.filter((t) => (counts.get(t.slug) ?? 0) > 0).map((t) => ({
    topic: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/health-library/topic/[topic]">): Promise<Metadata> {
  const { topic: slug } = await params;
  try {
    const t = topic(slug);
    return {
      title: `${t.label} guides | The Mental Health`,
      description: `${t.line} Plain-language guides written or reviewed by clinical psychologist Dr. Mithila Desai.`,
    };
  } catch {
    return {};
  }
}

export default async function TopicPage({
  params,
}: PageProps<"/health-library/topic/[topic]">) {
  const { topic: slug } = await params;
  let t;
  try {
    t = topic(slug);
  } catch {
    notFound();
  }
  const guides = visibleGuides();
  const counts = topicCounts();
  const topics = TOPICS.map((x) => ({ ...x, count: counts.get(x.slug) ?? 0 }));
  const inTopic = guides.filter((g) => g.topic === t.slug);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE}${LIB_BASE}topic/${t.slug}/`,
        name: `${t.label} guides`,
        about: t.label,
        isPartOf: { "@id": `${BASE}${LIB_BASE}#collection` },
      },
      {
        "@type": "ItemList",
        itemListElement: inTopic.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${BASE}${LIB_BASE}${g.slug}/`,
        })),
      },
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
        ],
      },
    ],
  };

  return (
    <>
      <section className="lhero g" style={{ paddingBottom: "clamp(30px,4vw,50px)" }}>
        <i className="tree" aria-hidden="true" />
        <div className="wrap">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> /{" "}
              <Link href={LIB_BASE}>Health library</Link> / {t.label}
            </p>
            <span className="xtag">
              <span>
                <Icon name={t.icon as IconName} />
              </span>
              {t.label} · {inTopic.length} guide{inTopic.length === 1 ? "" : "s"}
            </span>
            <h1>{t.label}.</h1>
            <p className="lead">
              {t.line} Written or reviewed by clinical psychologist Dr. Mithila
              Desai.
            </p>
          </div>
        </div>
      </section>
      <section
        className="g"
        id="l-all"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--line)",
          paddingBottom: "clamp(80px,10vw,130px)",
          scrollMarginTop: 60,
        }}
      >
        <div className="wrap">
          <Suspense>
            <GuideToolbar guides={guides} topics={topics} initialCat={t.slug} />
          </Suspense>
        </div>
      </section>
      {schemaScript(graph)}
    </>
  );
}
