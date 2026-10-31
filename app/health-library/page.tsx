import { Suspense } from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import {
  LibraryHero,
  TrustStrip,
  StartHereRow,
  ConcernGuideMap,
  EditorialPromise,
  ComingNext,
  EndBand,
  type ConcernRow,
} from "@/components/health-library";
import { GuideToolbar, TopicBento } from "@/components/library-browser";
import { CharReveal } from "@/components/char-reveal";
import {
  TOPICS,
  LIB_BASE,
  visibleGuides,
  featuredGuide,
  startHereGuides,
  topicCounts,
} from "@/lib/health-library";
import { SERVICES } from "@/lib/services";
import { schemaScript } from "@/components/page-templates";

export const instant = false;

const BASE = "https://www.thementalhealth.in";

export function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  return searchParams.then((sp) => ({
    title: "Health library | The Mental Health",
    description:
      "Plain-language guides on mental health, therapy and wellbeing, written or reviewed by clinical psychologist Dr. Mithila Desai.",
    robots: sp.q ? { index: false, follow: false } : undefined,
  }));
}

/* Concern rows in the preview's order; service pages get the other label. */
const CONCERN_ORDER: { path: string; isService: boolean }[] = [
  { path: "/anxiety/", isService: false },
  { path: "/depression/", isService: false },
  { path: "/ocd/", isService: false },
  { path: "/stress-and-burnout/", isService: false },
  { path: "/couples-counselling/", isService: true },
  { path: "/child-and-teen-therapy/", isService: true },
];

export default function HealthLibraryPage() {
  const guides = visibleGuides();
  const counts = topicCounts();
  const topics = TOPICS.map((t) => ({
    ...t,
    count: counts.get(t.slug) ?? 0,
  }));
  const featured = featuredGuide();
  const startHere = startHereGuides();
  const firstTopicGuides = guides
    .filter((g) => g.topic === TOPICS[0].slug)
    .sort((a, b) => a.datePublished.localeCompare(b.datePublished))
    .slice(0, 3);
  const concernRows: ConcernRow[] = CONCERN_ORDER.flatMap(({ path, isService }) => {
    const svc = SERVICES.find((s) => s.href === path);
    const gs = guides
      .filter((g) => g.concerns.includes(path.replaceAll("/", "")))
      .slice(0, 3);
    if (!svc || !gs.length) return [];
    return [
      { icon: svc.icon, title: svc.title, href: svc.href, isService, guides: gs },
    ];
  });

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE}${LIB_BASE}#collection`,
        name: "Health library",
        description:
          "Plain-language guides on mental health, therapy and wellbeing, written or reviewed by Dr. Mithila Desai.",
        isPartOf: { "@id": `${BASE}/#practice` },
      },
      {
        "@type": "ItemList",
        itemListElement: guides.map((g, i) => ({
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
        ],
      },
    ],
  };

  return (
    <>
      <LibraryHero count={guides.length} featured={featured} />
      <div className="g">
        <div className="wrap">
          <TrustStrip />
        </div>
      </div>

      <section className="sec g">
        <div className="wrap">
          <div className="xh">
            <div>
              <Eyebrow>01 · Browse by topic</Eyebrow>
              <h2 className="h2">
                <CharReveal>
                  Find what you came <em>for</em>.
                </CharReveal>
              </h2>
            </div>
            <p className="lead">
              Seven topics, from your first session to online therapy from
              abroad. Tap a topic to see its guides.
            </p>
          </div>
          <TopicBento topics={topics} firstGuides={firstTopicGuides} />
        </div>
      </section>

      <section className="sec g" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="xh">
            <div>
              <Eyebrow>02 · New to therapy</Eyebrow>
              <h2 className="h2">
                <CharReveal>
                  Three guides to read <em>first</em>.
                </CharReveal>
              </h2>
            </div>
            <p className="lead">
              If you are thinking about therapy for the first time, these
              answer the questions people ask most before they book.
            </p>
          </div>
          <StartHereRow guides={startHere} />
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
            <GuideToolbar guides={guides} topics={topics} />
          </Suspense>
        </div>
      </section>

      <ConcernGuideMap rows={concernRows} />
      <EditorialPromise />
      <ComingNext />
      <EndBand
        quote={
          <>
            Some questions need a <em>conversation</em>.
          </>
        }
        line="Call 112 or Tele-MANAS 14416 (free, 24 hours)."
        image="clinic/clinic-nook"
        alt="A calm corner of the therapy room"
      />
      {schemaScript(graph)}
    </>
  );
}
