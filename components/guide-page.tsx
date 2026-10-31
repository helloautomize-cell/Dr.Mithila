import Link from "next/link";
import { Icon, type IconName } from "@/lib/icons";
import { TMHImage } from "@/components/tmh-image";
import { Confirm } from "@/components/confirm";
import { GuideActions, GuideScrollFx } from "@/components/guide-client";
import { GuideCard } from "@/components/guide-card";
import { EndBand } from "@/components/health-library";
import {
  FeelGrid,
  Warn,
  Loop,
  DoList,
  Steps,
  Approach,
  Medicine,
  Confidentiality,
  AssessmentLine,
  MidCta,
  Crisis,
  FaqList,
} from "@/components/guide-mdx";
import {
  LIB_BASE,
  topic,
  fmtDate,
  relatedGuides,
  prevNext,
  type Guide,
  type BodySegment,
} from "@/lib/health-library";
import { SERVICES } from "@/lib/services";
import type { ImageName } from "@/lib/images";

const BASE = "https://www.thementalhealth.in";

function accentH1(h1: string) {
  // one accent word in *stars* per schema
  const parts = h1.split(/\*([^*]+)\*/);
  if (parts.length === 1) return h1;
  return parts.map((p, i) => (i % 2 ? <em key={i}>{p}</em> : p));
}

function PanicWave() {
  return (
    <div
      className="acov"
      role="img"
      aria-label="Illustration of a panic attack as a wave that rises, peaks and passes"
    >
      <i className="tree" aria-hidden="true" />
      <span className="lb">
        <Icon name="HEART" /> Anxiety and mood
      </span>
      <svg className="wv" viewBox="0 0 520 220" aria-hidden="true">
        <defs>
          <linearGradient id="awg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D9AE84" stopOpacity=".35" />
            <stop offset="1" stopColor="#D9AE84" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 200 H520" stroke="rgba(250,247,242,.14)" />
        <path
          className="ar2"
          d="M0 196 C60 194 90 180 130 120 C160 70 175 30 200 28 C230 26 250 70 290 120 C340 175 420 194 520 196 V200 H0Z"
        />
        <path
          className="cv2"
          d="M0 196 C60 194 90 180 130 120 C160 70 175 30 200 28 C230 26 250 70 290 120 C340 175 420 194 520 196"
        />
        <g className="pk2">
          <circle cx="200" cy="28" r="7" fill="#D9AE84" />
          <circle
            cx="200"
            cy="28"
            r="16"
            fill="none"
            stroke="#D9AE84"
            strokeOpacity=".4"
          />
        </g>
      </svg>
      <div className="tk">
        <span>
          <b>It starts</b>A sudden rush
        </span>
        <span style={{ textAlign: "center" }}>
          <b>It peaks</b>Within about 10 minutes
        </span>
        <span style={{ textAlign: "right" }}>
          <b>It eases</b>The body settles
        </span>
      </div>
    </div>
  );
}

function GuideCover({ guide }: { guide: Guide }) {
  if (guide.slug === "panic-attacks") return <PanicWave />;
  const t = topic(guide.topic);
  if (guide.cover.kind === "photo") {
    return (
      <div className="acov ph">
        <TMHImage
          name={guide.cover.src as ImageName}
          alt={guide.cover.alt}
          sizes="(min-width: 960px) 520px, 100vw"
          priority
        />
      </div>
    );
  }
  return (
    <div className={`acov cov ${guide.cover.tone ?? t.tone}`}>
      <i className="tree" aria-hidden="true" />
      <span className="lb">
        <Icon name={t.icon as IconName} /> {t.label}
      </span>
      <span className="ci">
        <Icon name={(guide.cover.icon ?? t.icon) as IconName} />
      </span>
    </div>
  );
}

function renderSegment(seg: BodySegment, guide: Guide, i: number) {
  if (seg.type === "html")
    return <div key={i} dangerouslySetInnerHTML={{ __html: seg.html }} />;
  const a = seg.attrs as Record<string, never>;
  switch (seg.name) {
    case "FeelGrid":
      return <FeelGrid key={i} body={a.body} mind={a.mind} />;
    case "Warn":
      return <Warn key={i} label={a.label} text={a.text} />;
    case "Loop":
      return <Loop key={i} title={a.title} steps={a.steps} note={a.note} />;
    case "DoList":
      return <DoList key={i} items={a.items} breathe={!!a.breathe} />;
    case "Steps":
      return <Steps key={i} items={a.items} />;
    case "Approach":
      return <Approach key={i} />;
    case "Medicine":
      return <Medicine key={i} />;
    case "Confidentiality":
      return <Confidentiality key={i} />;
    case "AssessmentLine":
      return <AssessmentLine key={i} />;
    case "MidCta":
      return <MidCta key={i} />;
    case "Crisis":
      return <Crisis key={i} />;
    case "FaqList":
      return <FaqList key={i} faqs={guide.faqs} />;
    default:
      return null;
  }
}

export function GuidePage({ guide }: { guide: Guide }) {
  const t = topic(guide.topic);
  const url = `${BASE}${LIB_BASE}${guide.slug}/`;
  const rel = relatedGuides(guide);
  const { prev, next } = prevNext(guide);
  const services = guide.relatedServices
    .map((href) => SERVICES.find((s) => s.href === href))
    .filter((s): s is (typeof SERVICES)[number] => !!s);

  return (
    <>
      <GuideScrollFx />
      <section className="ahero g">
        <i className="tree" aria-hidden="true" />
        <div className="wrap">
          <div>
            <p className="crumb">
              <Link href="/">Home</Link> /{" "}
              <Link href={LIB_BASE}>Health library</Link> /{" "}
              <Link href={`${LIB_BASE}topic/${guide.topic}/`}>{t.label}</Link>
            </p>
            <span className="xtag">
              <span>
                <Icon name={t.icon as IconName} />
              </span>
              {t.label} · Guide
            </span>
            <h1>{accentH1(guide.h1)}</h1>
            <p className="lead">{guide.dek}</p>
            <div className="ameta">
              <div className="au">
                <TMHImage
                  name="dr-mithila-desai/portrait"
                  alt=""
                  sizes="48px"
                  objectPosition="50% 22%"
                />
                <span>
                  <b>Dr. Mithila Desai, PhD</b>
                  Clinical psychologist
                </span>
              </div>
              <span>
                <Icon name="CAL" /> Published {fmtDate(guide.datePublished)}
              </span>
              <span>
                <Icon name="LOOP" /> Updated{" "}
                {guide.dateModified.includes("CONFIRM") ? (
                  <Confirm>{guide.dateModified.replace(/^\[?CONFIRM:?\s?|\]?$/g, "") || "launch date"}</Confirm>
                ) : (
                  fmtDate(guide.dateModified)
                )}
              </span>
              <span>
                <Icon name="CLOCK" /> {guide.readingTime} min read
              </span>
              {guide.status !== "published" ? (
                <span className="cf">STATUS {guide.status}</span>
              ) : null}
            </div>
            <GuideActions url={url} title={guide.title} />
          </div>
          <GuideCover guide={guide} />
        </div>
      </section>

      <div className="g">
        <div className="wrap">
          <div className="abrief rv">
            <h2>In brief</h2>
            <p className="sum">{guide.inBrief.summary}</p>
            <ul>
              {guide.inBrief.points.map((p) => (
                <li key={p}>
                  <span>
                    <Icon name="TICK" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="g">
        <div className="wrap alay">
          <nav className="atoc" aria-label="On this page" id="atoc">
            <small>On this page</small>
            {guide.toc.map((e) => (
              <a key={e.id} href={`#${e.id}`} data-a={e.id}>
                {e.text}
              </a>
            ))}
            <div className="bar">
              <i id="abar" />
            </div>
            <p className="pc" id="apc">
              0% read
            </p>
          </nav>

          <article className="abody" id="abody">
            {guide.segments.map((s, i) => renderSegment(s, guide, i))}

            {guide.sources.length ? (
              <div className="asrc">
                <h3>Sources</h3>
                <ol>
                  {guide.sources.map((s) => (
                    <li key={s.title}>
                      {s.url ? (
                        <a className="in" href={s.url}>
                          {s.title}
                        </a>
                      ) : (
                        s.title
                      )}
                      {s.publisher ? ` ${s.publisher}` : ""}
                      {s.year ? `, ${s.year}` : ""}
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {guide.tags.length || guide.concerns.length ? (
              <div className="atags">
                <Link href={`${LIB_BASE}topic/${guide.topic}/`}>{t.label}</Link>
                {guide.concerns.map((c) => {
                  const svc = SERVICES.find((s) => s.href === `/${c}/`);
                  return (
                    <Link key={c} href={svc?.href ?? `${LIB_BASE}?q=${c}`}>
                      {svc?.title ?? c}
                    </Link>
                  );
                })}
                {guide.tags.map((x) => (
                  <Link key={x} href={`${LIB_BASE}?q=${encodeURIComponent(x)}`}>
                    {x}
                  </Link>
                ))}
              </div>
            ) : null}

            <div className="arevw">
              <TMHImage
                name="dr-mithila-desai/portrait"
                alt="Dr. Mithila Desai"
                sizes="72px"
                objectPosition="50% 22%"
              />
              <div>
                <b>
                  Clinically reviewed by Dr. Mithila Desai, PhD, clinical
                  psychologist
                </b>
                <p>
                  Rehabilitation Council of India CRR No. <Confirm /> · Last
                  reviewed{" "}
                  {guide.lastReviewed.includes("CONFIRM") ? (
                    <Confirm>{guide.lastReviewed.replace(/^\[?CONFIRM:?\s?|\]?$/g, "") || "date at sign-off"}</Confirm>
                  ) : (
                    fmtDate(guide.lastReviewed)
                  )}
                  <br />
                  This guide gives general information about psychological care
                  at The Mental Health. It is not a diagnosis and does not
                  replace a session. Read our{" "}
                  <Link href="/editorial-policy/">editorial policy</Link>.
                </p>
              </div>
            </div>

            <div className="apn">
              {prev ? (
                <Link className="rev" href={`${LIB_BASE}${prev.slug}/`}>
                  <small>
                    <Icon name="ARR" /> Previous guide
                  </small>
                  <b>{prev.title}</b>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={`${LIB_BASE}${next.slug}/`}>
                  <small>
                    Next guide <Icon name="ARR" />
                  </small>
                  <b>{next.title}</b>
                </Link>
              ) : null}
            </div>
          </article>

          <aside className="aside">
            <div className="bk">
              <TMHImage
                name="dr-mithila-desai/dr-armchair"
                alt="Dr. Mithila Desai in her therapy room"
                sizes="240px"
              />
              <div>
                <b>Talk to Dr. Desai about {t.label.toLowerCase()}</b>
                <p>In person in Borivali West, or online.</p>
                <Link className="btn" href="/contact/#book">
                  <span className="i">
                    <Icon name="CAL" />
                  </span>
                  <span className="t">Book a session</span>
                </Link>
              </div>
            </div>
            <div className="sos">
              <b>
                <Icon name="TEL" /> Need help now?
              </b>
              Call Tele-MANAS 14416 (free, 24 hours) or 112.
            </div>
          </aside>
        </div>
      </div>

      {services.length ? (
        <section className="xsec g">
          <div className="wrap">
            <div className="xh" style={{ marginBottom: 30 }}>
              <div>
                <span className="eyebrow">How we can help</span>
                <h2
                  className="h2"
                  style={{ fontSize: "clamp(28px,3.4vw,44px)" }}
                >
                  Care for this concern, <em>here</em>.
                </h2>
              </div>
            </div>
            <div className="xrel">
              {services.map((s) => (
                <Link key={s.href} href={s.href}>
                  <span className="xi">
                    <Icon name={s.icon} />
                  </span>
                  <b>{s.title}</b>
                  <small>{s.desc}</small>
                  <span className="go">
                    Read more <Icon name="ARR" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {rel.length ? (
        <section className="xsec g">
          <div className="wrap">
            <div className="xh" style={{ marginBottom: 30 }}>
              <div>
                <span className="eyebrow">Keep reading</span>
                <h2
                  className="h2"
                  style={{ fontSize: "clamp(28px,3.4vw,44px)" }}
                >
                  Related <em>guides</em>.
                </h2>
              </div>
              <p className="lead">
                <Link className="link" href={LIB_BASE}>
                  All guides <Icon name="ARR" />
                </Link>
              </p>
            </div>
            <div className="lgrid">
              {rel.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <EndBand
        quote={
          <>
            You don&rsquo;t have to work it out <em>alone</em>.
          </>
        }
        line="Thinking of harming yourself? Please don't wait for an appointment. Call Tele-MANAS 14416 or 112."
        image="clinic/clinic-waiting"
        alt="The calm waiting area of the practice"
      />
    </>
  );
}
