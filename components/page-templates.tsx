import type { ReactNode } from "react";
import Link from "next/link";
import { Icon, IconTile, type IconName } from "@/lib/icons";
import { BookButton } from "@/components/book-button";
import { HelpCallout } from "@/components/help-callout";
import { TMHImage } from "@/components/tmh-image";
import { Reveal } from "@/components/reveal";
import { TreatmentPage } from "@/components/treatment-page";
import { TREATMENT_DATA } from "@/lib/treatment";
import { MORE_TREATMENT } from "@/lib/treatment-more";
import { DoctorPage, ServicesPageV11, TeamPage } from "@/components/pages-v11";
import { TherapyPath } from "@/components/v11-live";
import type { ImageName } from "@/lib/images";
import { allPosts, type PageContent } from "@/lib/content";
import { labelForPath } from "@/lib/nav";
import { crisis, site } from "@/lib/site-config";

function Body({ html }: { html: string }) {
  return <div className="cbody" dangerouslySetInnerHTML={{ __html: html }} />;
}

/* Body starting at the heading containing `marker` (h2/h3). */
function bodyFrom(html: string, marker: string): string {
  const i = html.indexOf(marker);
  if (i < 0) return "";
  const h = html.lastIndexOf("<h", i);
  return html.slice(h);
}

function Hero({ page, sos = false }: { page: PageContent; sos?: boolean }) {
  return (
    <section className={sos ? "ihero sos g" : "ihero g"}>
      <i className="tree" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative" }}>
        <IconTile name={page.icon as IconName} size="lg" />
        <h1>{page.title}</h1>
        {page.description ? <p className="lead">{page.description}</p> : null}
        {sos ? (
          <div className="big">
            <a href={`tel:${crisis.emergency}`}>
              <Icon name="TEL" /> Call {crisis.emergency}
            </a>
            <a className="o" href={`tel:${crisis.telemanas}`}>
              <Icon name="TEL" /> Call Tele-MANAS {crisis.telemanas}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Aside() {
  return (
    <aside>
      <div className="box d">
        <span className="eyebrow">Talk to Dr. Desai</span>
        <p style={{ margin: "12px 0 18px" }}>
          In person in Borivali West, or online.
        </p>
        <BookButton href="/contact/#book" />
      </div>
      <div className="alertline" style={{ margin: 0 }}>
        <b>Thinking of harming yourself?</b> Please don&apos;t wait for an
        appointment. Call Tele-MANAS 14416 or 112.{" "}
        <Link href="/get-help-now/" style={{ color: "var(--alert)" }}>
          Get help now
        </Link>
      </div>
      <div className="box">
        <b>Call the practice</b>
        <p className="muted" style={{ marginTop: 6 }}>
          <a href={`tel:${site.phoneTel}`}>+91 {site.phoneDisplay}</a>
        </p>
      </div>
    </aside>
  );
}

const FINDING_STEPS: { img: ImageName; alt: string; title: string; text: string }[] = [
  {
    img: "clinic/clinic-entrance",
    alt: "Clinic building entrance",
    title: "Come to Gulmohar Road",
    text: "We're inside Dr. Navalkar's Orthocare & Multi-speciality Clinic building, opposite Banana Leaf Restaurant, Shimpoli, Borivali West.",
  },
  {
    img: "clinic/clinic-waiting",
    alt: "Reception and waiting area",
    title: "Check in at Reception",
    text: "Tell the front desk you're here to see Dr. Mithila Desai, then take a seat in the waiting area.",
  },
  {
    img: "clinic/clinic-room",
    alt: "Consultation room C-2",
    title: "Room C-2",
    text: "Dr. Desai's room is C-2. The front desk will show you the way.",
  },
  {
    img: "clinic/clinic-nook",
    alt: "A calm corner of the therapy room",
    title: "Settle In",
    text: "Take a moment before you begin. There's no rush, and you share only what you're ready to.",
  },
];

const SESSION_STEPS = [
  {
    icon: "SHIELD" as const,
    n: "01",
    title: "Welcome",
    text: "Dr. Desai explains confidentiality and its limits, and how sessions work.",
  },
  {
    icon: "CHAT" as const,
    n: "02",
    title: "Your Story",
    text: "What brings you in now, how long it has been going on, what you've tried, and what you'd like to be different.",
  },
  {
    icon: "LEAF" as const,
    n: "03",
    title: "Some Background",
    text: "Sleep, work or study, family, health and any medicine you take, so she sees the whole picture.",
  },
  {
    icon: "EAR" as const,
    n: "04",
    title: "Questions for Her",
    text: "Ask anything: how she works, how long therapy may take, what happens next.",
  },
  {
    icon: "COMPASS" as const,
    n: "05",
    title: "A Plan",
    text: "You agree whether to meet again, how often, and what to focus on first.",
  },
];

function VisitPage({ page }: { page: PageContent }) {
  const tail = bodyFrom(page.html, "What to bring");
  /* splice the online figure between the "What to bring" list and the
     "Online sessions" heading, matching the preview order */
  const onl = tail.indexOf("<h");
  const rest = onl >= 0 ? tail.slice(onl) : tail;
  const onlineIdx = rest.search(/<h2[^>]*>\s*(?:Online)/i);
  return (
    <main>
      <section className="ihero g">
        <i className="tree" aria-hidden="true" />
        <div className="wrap vhero" style={{ position: "relative" }}>
          <div>
            <h1>
              Plan your first <em>session</em>.
            </h1>
            <p className="lead">
              Your first session with Dr. Desai is a conversation, not a test.
              You talk about what brings you in, she asks a few questions to
              understand your situation, and together you decide on next steps.
            </p>
          </div>
          <figure className="vph">
            <TMHImage
              name="dr-mithila-desai/dr-door"
              alt="Dr. Mithila Desai smiling at the door of her consultation room"
              sizes="(min-width: 860px) 420px, 80vw"
            />
            <figcaption>
              <span>
                <Icon name="PERSON" />
              </span>
              She&apos;ll be the one you meet first
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="sec g fu" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="eyebrow">Finding us</span>
          <h2 className="h2" style={{ marginTop: 22, maxWidth: "18ch" }}>
            From the gate to the <em>room</em>, in four steps.
          </h2>
          <div className="fsteps">
            {FINDING_STEPS.map((s, i) => (
              <Reveal key={s.title} as="article">
                <div className="fp">
                  <TMHImage
                    name={s.img}
                    alt={s.alt}
                    sizes="(min-width: 900px) 280px, (min-width: 520px) 48vw, 92vw"
                  />
                  <b>{String(i + 1).padStart(2, "0")}</b>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {i === 0 ? (
                  <a
                    className="link"
                    style={{ marginTop: 10, fontSize: 14 }}
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    Open in Google Maps <Icon name="ARR" />
                  </a>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="sec g"
        style={{ background: "#fff", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap side">
          <div>
            <h2>
              What happens at the first <em>session</em>
            </h2>
            <TherapyPath
              bare
              style={{ marginTop: 34 }}
              steps={SESSION_STEPS}
              note="You share only what you're ready to share. There are no right or wrong answers."
            />
            {onlineIdx >= 0 ? (
              <>
                <Body html={rest.slice(0, onlineIdx)} />
                <figure className="onl">
                  <TMHImage
                    name="dr-mithila-desai/dr-online"
                    alt="Dr. Desai in an online session with headphones and a laptop"
                    sizes="(min-width: 900px) 640px, 100vw"
                  />
                  <figcaption>
                    <span>
                      <Icon name="GLOBE" />
                    </span>
                    Online, from wherever you are
                  </figcaption>
                </figure>
                <Body html={rest.slice(onlineIdx)} />
              </>
            ) : (
              <Body html={rest} />
            )}
            <HelpCallout />
          </div>
          <Aside />
        </div>
      </section>
    </main>
  );
}

function PostCard({ p }: { p: PageContent }) {
  return (
    <Link className="post-card" href={p.url}>
      <IconTile name={p.icon as IconName} size="sm" />
      <span className="eyebrow" style={{ marginTop: 14 }}>
        {p.category}
      </span>
      <h3>{p.title}</h3>
      <p>{p.inBrief || p.description}</p>
      <span className="go">
        <Icon name="ARR" />
      </span>
    </Link>
  );
}

function LibraryIndex({ page }: { page: PageContent }) {
  return (
    <main>
      <Hero page={page} />
      <section className="sec g" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="post-grid">
            {allPosts().map((p) => (
              <PostCard key={p.url} p={p} />
            ))}
          </div>
          <Body html={page.html} />
        </div>
      </section>
    </main>
  );
}

function PostPage({ page }: { page: PageContent }) {
  return (
    <main>
      <section className="ihero g">
        <i className="tree" aria-hidden="true" />
        <div className="wrap" style={{ position: "relative" }}>
          <p className="crumb">
            <Link href="/health-library/">Health Library</Link>
            {page.category ? ` / ${page.category}` : ""}
          </p>
          <h1>{page.title}</h1>
          {page.datePublished ? (
            <p className="muted" style={{ marginTop: 18, fontSize: 15 }}>
              Published {page.datePublished}
              {page.dateModified ? ` · Updated ${page.dateModified}` : ""} ·
              Written and reviewed by Dr. Mithila Desai
            </p>
          ) : null}
          {page.inBrief ? (
            <div className="brief">
              <b>In brief</b>
              <p>{page.inBrief}</p>
            </div>
          ) : null}
        </div>
      </section>
      <section className="sec g" style={{ paddingTop: 0 }}>
        <div className="wrap side">
          <div>
            <Body html={page.html} />
            {page.related.length ? (
              <div className="pills" style={{ marginTop: 40 }}>
                <small>Keep reading</small>
                {page.related.map((r) => (
                  <Link key={r} href={r}>
                    {labelForPath(r)}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Aside />
        </div>
      </section>
    </main>
  );
}

export function PageTemplate({ page }: { page: PageContent }) {
  if (page.template === "post") return <PostPage page={page} />;
  const treatment = TREATMENT_DATA[page.url] ?? MORE_TREATMENT[page.url];
  if (treatment) return <TreatmentPage d={treatment} />;
  if (page.url === "/health-library/") return <LibraryIndex page={page} />;
  if (page.url === "/services/") return <ServicesPageV11 />;
  if (page.url === "/our-team/") return <TeamPage />;
  if (page.url === "/dr-mithila-desai/") return <DoctorPage />;
  if (page.url === "/plan-your-visit/") return <VisitPage page={page} />;
  const inner = <Body html={page.html} />;
  if (page.template === "crisis")
    return (
      <main>
        <Hero page={page} sos />
        <section className="sec g">
          <div className="wrap side">
            <div>{inner}</div>
            <Aside />
          </div>
        </section>
      </main>
    );
  if (page.template === "sidebar")
    return (
      <main>
        <Hero page={page} />
        <section className="sec g" style={{ paddingTop: 0 }}>
          <div className="wrap side">
            <div>
              {inner}
              <HelpCallout />
            </div>
            <Aside />
          </div>
        </section>
      </main>
    );
  return (
    <main>
      <Hero page={page} />
      <section className="sec g" style={{ paddingTop: 0 }}>
        <div className="wrap">{inner}</div>
      </section>
    </main>
  );
}

export function schemaScript(graph: unknown): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
