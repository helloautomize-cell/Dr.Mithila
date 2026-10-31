import Link from "next/link";
import { Icon, type IconName } from "@/lib/icons";
import { TMHImage } from "@/components/tmh-image";
import { BookButton } from "@/components/book-button";
import { GhostButton } from "@/components/ghost-button";
import { Confirm } from "@/components/confirm";
import { Reveal } from "@/components/reveal";
import { LibrarySearch } from "@/components/library-browser";
import {
  LIB_BASE,
  topic,
  fmtDate,
  type Guide,
} from "@/lib/health-library";
import { site } from "@/lib/site-config";
import type { ImageName } from "@/lib/images";

/* ---------- index hero: search + featured guide card ---------- */
export function LibraryHero({
  count,
  featured,
}: {
  count: number;
  featured?: Guide;
}) {
  return (
    <section className="lhero g">
      <i className="tree" aria-hidden="true" />
      <div className="wrap">
        <div>
          <p className="crumb">
            <Link href="/">Home</Link> / Health library
          </p>
          <span className="xtag">
            <span>
              <Icon name="BOOK" />
            </span>
            Health library · {count} guides
          </span>
          <h1>
            Health <em>library</em>.
          </h1>
          <p className="lead">
            Plain-language guides on mental health, therapy and wellbeing,
            written or reviewed by clinical psychologist Dr. Mithila Desai.
            They are for general information and do not replace a session.
          </p>
          <LibrarySearch />
        </div>
        {featured ? (
          <div className="lph">
            <Link className="lfeat" href={`${LIB_BASE}${featured.slug}/`}>
              {featured.cover.kind === "photo" ? (
                <TMHImage
                  name={featured.cover.src as ImageName}
                  alt={featured.cover.alt}
                  sizes="(min-width: 960px) 560px, 100vw"
                  objectPosition="50% 25%"
                  priority
                />
              ) : null}
              <span className="rib">Start here</span>
              <div className="in">
                <span className="k">
                  <Icon name={topic(featured.topic).icon as IconName} />
                  {topic(featured.topic).label}
                </span>
                <h2>{featured.title}</h2>
                <p>{featured.dek}</p>
                <div className="mt">
                  <span>
                    <Icon name="PEN" /> Dr. Mithila Desai
                  </span>
                  <span>
                    <Icon name="CLOCK" /> {featured.readingTime} min read
                  </span>
                  <span>
                    <Icon name="SHIELD" /> Reviewed
                  </span>
                </div>
              </div>
            </Link>
            <div className="xfl b">
              <span className="xi">
                <Icon name="SHIELD" />
              </span>
              <div>
                <b>Every guide reviewed</b>
                <small>by Dr. Desai, with sources</small>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ---------- trust strip ---------- */
const TRUST: [IconName, string, string][] = [
  ["PEN", "Written or reviewed by Dr. Desai", "A named clinical psychologist on every guide"],
  ["CLIP", "Sources listed", "Each guide shows what it is based on"],
  ["CLOCK", "Dates you can see", "First published and last reviewed"],
  ["COMPASS", "Information, not a diagnosis", "A session is where your story is heard"],
];

export function TrustStrip() {
  return (
    <Reveal className="ltrust">
      {TRUST.map(([icon, b, s]) => (
        <div key={b}>
          <span className="xi">
            <Icon name={icon} />
          </span>
          <span>
            <b>{b}</b>
            <small>{s}</small>
          </span>
        </div>
      ))}
    </Reveal>
  );
}

/* ---------- three guides to read first ---------- */
export function StartHereRow({ guides }: { guides: Guide[] }) {
  return (
    <Reveal className="lstart">
      {guides.map((g, i) => (
        <Link key={g.slug} href={`${LIB_BASE}${g.slug}/`}>
          <span className="n">{String(i + 1).padStart(2, "0")}</span>
          <h3>{g.title}</h3>
          <p>{g.dek}</p>
          <span className="go">
            Read the guide <Icon name="ARR" />
          </span>
        </Link>
      ))}
    </Reveal>
  );
}

/* ---------- guides by concern (espresso band) ---------- */
export interface ConcernRow {
  icon: IconName;
  title: string;
  href: string;
  isService: boolean;
  guides: Guide[];
}

export function ConcernGuideMap({ rows }: { rows: ConcernRow[] }) {
  return (
    <section
      className="dark sec g"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="wrap lmap">
        <i className="tree" aria-hidden="true" />
        <div style={{ position: "relative" }}>
          <span className="eyebrow">03 · Guides by concern</span>
          <h2 className="h2" style={{ margin: "22px 0 24px" }}>
            Reading is a start. Help is the next <em>step</em>.
          </h2>
          <p className="lead">
            Each concern we help with has its own page on how therapy works
            here. These guides sit alongside them.
          </p>
          <div className="cta">
            <BookButton href="/contact/#book" />
            <GhostButton href="/services/">All concerns</GhostButton>
          </div>
        </div>
        <div className="lrows">
          {rows.map((r) => (
            <Reveal key={r.href} className="lrow">
              <span className="xi">
                <Icon name={r.icon} />
              </span>
              <div>
                <b>{r.title}</b>
                <div className="gs">
                  {r.guides.map((g) => (
                    <Link key={g.slug} href={`${LIB_BASE}${g.slug}/`}>
                      {g.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link className="pg" href={r.href}>
                {r.isService ? "Service" : "Concern"} page <Icon name="ARR" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- how we write these guides ---------- */
const RULES: [IconName, string, string][] = [
  ["PEN", "A named author", "Written or reviewed by Dr. Desai. No anonymous posts."],
  ["CLIP", "Sources you can check", "Guidance from bodies such as WHO, NICE and NIMHANS, listed at the end."],
  ["CHAT", "Plain, kind language", "No labels, no promises of results, no fear-based words."],
  ["TEL", "Safety on every page", "Tele-MANAS 14416 and 112 are on every guide."],
];

export function EditorialPromise() {
  return (
    <section className="sec g">
      <div className="wrap ledit">
        <Reveal className="ph">
          <TMHImage
            name="dr-mithila-desai/dr-desk"
            alt="Dr. Mithila Desai at her desk"
            sizes="(min-width: 900px) 480px, 100vw"
            objectPosition="50% 20%"
          />
          <div className="sig2">
            <b>Dr. Mithila Desai, PhD</b>
            Clinical psychologist · RCI CRR No. <Confirm />
          </div>
        </Reveal>
        <div>
          <span className="eyebrow">04 · How we write these guides</span>
          <h2 className="h2" style={{ marginTop: 22 }}>
            Careful words for a sensitive <em>subject</em>.
          </h2>
          <p className="lead" style={{ marginTop: 22 }}>
            Every guide follows our editorial and clinical review policy, so
            you know who wrote it, what it is based on, and when it was last
            checked.
          </p>
          <div className="lrules">
            {RULES.map(([icon, b, p]) => (
              <Reveal key={b}>
                <span className="xi">
                  <Icon name={icon} />
                </span>
                <b>{b}</b>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link className="link" href="/editorial-policy/">
              Read our editorial policy <Icon name="ARR" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- coming next ---------- */
const COMING: [string, string][] = [
  ["Everyday mental health", "Psychologist, psychiatrist, counsellor: who does what in India"],
  ["Children and teens", "Exam stress: helping your child through boards and entrance exams"],
  ["Starting therapy", "What CBT is, in plain words"],
  ["Crisis and safety", "Tele-MANAS 14416: what happens when you call"],
];

export function ComingNext() {
  return (
    <section className="sec g" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="xh" style={{ marginBottom: 30 }}>
          <div>
            <span className="eyebrow">Coming next</span>
            <h2
              className="h2"
              style={{ fontSize: "clamp(28px,3.4vw,44px)" }}
            >
              Guides in the <em>works</em>.
            </h2>
          </div>
          <p className="lead">
            Two new guides a month, each reviewed and signed by Dr. Desai.
          </p>
        </div>
        <div className="lnext">
          {COMING.map(([small, b]) => (
            <Reveal key={b}>
              <small>{small}</small>
              <b>{b}</b>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- end band (booking + crisis line) ---------- */
export function EndBand({
  quote,
  line,
  image,
  alt,
}: {
  quote: React.ReactNode;
  line: string;
  image: ImageName;
  alt: string;
}) {
  return (
    <section className="sec g" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="xend">
          <div className="tx">
            <span className="eyebrow">Talk to Dr. Desai</span>
            <h2>{quote}</h2>
            <p>
              In person on Gulmohar Road, Borivali West, or online. A short
              message is enough to begin.
            </p>
            <div className="cta">
              <BookButton href="/contact/#book" />
              <GhostButton href="/plan-your-visit/">
                Plan your first session
              </GhostButton>
            </div>
            <p className="cr">
              <Icon name="TEL" />
              <span>
                <b>Not an emergency service.</b> {line}
              </span>
            </p>
          </div>
          <div className="im">
            <TMHImage
              name={image}
              alt={alt}
              sizes="(min-width: 900px) 520px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
