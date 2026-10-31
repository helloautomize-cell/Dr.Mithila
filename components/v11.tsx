import type { ReactNode } from "react";
import Link from "next/link";
import { TMHImage } from "@/components/tmh-image";
import { Reveal } from "@/components/reveal";
import { BookButton } from "@/components/book-button";
import { CharReveal } from "@/components/char-reveal";
import { Confirm } from "@/components/confirm";
import { Icon, type IconName } from "@/lib/icons";
import type { ImageName } from "@/lib/images";
import { crisis } from "@/lib/site-config";

/* ===== v11 shared inner-page components (preview v11 markup) ===== */

export interface TrustItem {
  icon: IconName;
  label: string;
}
export interface FloatCard {
  pos: "a" | "b";
  icon?: IconName;
  img?: ImageName;
  title: ReactNode;
  sub: ReactNode;
}
export interface HeroPhoto {
  img: ImageName;
  alt: string;
  pos?: string;
}

export function TagPill({ icon, label }: { icon: IconName; label: ReactNode }) {
  return (
    <span className="xtag">
      <span>
        <Icon name={icon} />
      </span>
      {label}
    </span>
  );
}

export function TrustRow({ items }: { items: TrustItem[] }) {
  return (
    <div className="xtrust">
      {items.map((t, i) => (
        <span key={i}>
          <Icon name={t.icon} /> {t.label}
        </span>
      ))}
    </div>
  );
}

export function FloatingCard({ f }: { f: FloatCard }) {
  return (
    <div className={`xfl ${f.pos}`} suppressHydrationWarning>
      {f.img ? (
        <TMHImage name={f.img} alt="" sizes="84px" />
      ) : (
        <span className="xi">
          <Icon name={f.icon ?? "SHIELD"} />
        </span>
      )}
      <div>
        <b>{f.title}</b>
        <small>{f.sub}</small>
      </div>
    </div>
  );
}

export function InnerHero({
  tag,
  title,
  lead,
  bookLabel,
  bookHref = "/contact/#book",
  link,
  trust,
  photo,
  floats,
  media,
}: {
  tag: { icon: IconName; label: ReactNode };
  title: ReactNode;
  lead: ReactNode;
  bookLabel?: string;
  bookHref?: string;
  link?: { href: string; label: string };
  trust?: TrustItem[];
  photo?: HeroPhoto;
  floats?: FloatCard[];
  media?: ReactNode;
}) {
  return (
    <section className="xhero g">
      <i className="tree" aria-hidden="true" />
      <div className="wrap">
        <div>
          <TagPill icon={tag.icon} label={tag.label} />
          <h1>{title}</h1>
          {lead ? <p className="lead">{lead}</p> : null}
          <div className="cta">
            {bookLabel ? <BookButton href={bookHref} label={bookLabel} /> : null}
            {link ? (
              <a className="link" href={link.href}>
                {link.label} <Icon name="ARR" />
              </a>
            ) : null}
          </div>
          {trust?.length ? <TrustRow items={trust} /> : null}
        </div>
        {media ?? (photo ? (
          <div className="xph">
            <div className="fr">
              <TMHImage
                name={photo.img}
                alt={photo.alt}
                sizes="(min-width: 900px) 500px, 100vw"
                objectPosition={photo.pos}
              />
            </div>
            {floats?.map((f, i) => <FloatingCard key={i} f={f} />)}
          </div>
        ) : null)}
      </div>
    </section>
  );
}

export interface GlanceCell {
  icon: IconName;
  label: string;
  text: ReactNode;
}
export function GlancePanel({ cells }: { cells: GlanceCell[] }) {
  return (
    <div className="g">
      <div className="wrap">
        <Reveal className="xgl">
          {cells.map((c) => (
            <div key={c.label}>
              <span className="xi">
                <Icon name={c.icon} />
              </span>
              <small>{c.label}</small>
              <p>{c.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  chars = true,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  chars?: boolean;
}) {
  return (
    <div className="xh">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">{chars ? <CharReveal>{title}</CharReveal> : title}</h2>
      </div>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

export interface SignCard {
  icon: IconName;
  title: string;
  k: string;
  items: string[];
}
export function SignsBento({
  big,
  cards,
  wide,
}: {
  big: SignCard & { img: ImageName; imgAlt: string };
  cards: SignCard[];
  wide: { icon: IconName; title: ReactNode; text: ReactNode };
}) {
  return (
    <div className="xsg">
      <Reveal className="big" as="article">
        <span className="xi">
          <Icon name={big.icon} />
        </span>
        <h3>{big.title}</h3>
        <p className="k">{big.k}</p>
        <ul>
          {big.items.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
        <div className="ph">
          <TMHImage name={big.img} alt={big.imgAlt} sizes="360px" />
        </div>
      </Reveal>
      {cards.map((c, i) => (
        <Reveal key={c.title} delay={0.08 * (i + 1)} as="article">
          <span className="xi">
            <Icon name={c.icon} />
          </span>
          <h3>{c.title}</h3>
          <p className="k">{c.k}</p>
          <ul>
            {c.items.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </Reveal>
      ))}
      <Reveal className="wide" delay={0.3} as="article">
        <span className="xi">
          <Icon name={wide.icon} />
        </span>
        <div>
          <h3>{wide.title}</h3>
          <p>{wide.text}</p>
        </div>
      </Reveal>
    </div>
  );
}

export function PanicWave({
  eyebrow,
  title,
  lead,
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  note: ReactNode;
}) {
  return (
    <div className="xpw dark">
      <i className="tree" aria-hidden="true" />
      <div className="in2">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p className="lead">{lead}</p>
        </div>
        <div>
          <Reveal className="xwave">
            <svg viewBox="0 0 520 220" aria-hidden="true">
              <defs>
                <linearGradient id="xwg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#D9AE84" stopOpacity=".35" />
                  <stop offset="1" stopColor="#D9AE84" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 200 H520" stroke="rgba(250,247,242,.14)" />
              <path
                d="M0 120 H520"
                stroke="rgba(250,247,242,.06)"
                strokeDasharray="4 6"
              />
              <path
                className="ar"
                d="M0 196 C60 194 90 180 130 120 C160 70 175 30 200 28 C230 26 250 70 290 120 C340 175 420 194 520 196 V200 H0Z"
              />
              <path
                className="cv"
                d="M0 196 C60 194 90 180 130 120 C160 70 175 30 200 28 C230 26 250 70 290 120 C340 175 420 194 520 196"
              />
              <g className="pk">
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
            <div className="lb">
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
          </Reveal>
          <div className="xnote">
            <Icon name="PILL" />
            <span>{note}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Dark explainer band for non-anxiety pages (PanicWave alternative):
   left copy, right stacked icon points. */
export function DarkBand({
  eyebrow,
  title,
  lead,
  points,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  points: { icon: IconName; title: string; text: ReactNode }[];
}) {
  return (
    <div className="xpw dark">
      <i className="tree" aria-hidden="true" />
      <div className="in2">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p className="lead">{lead}</p>
        </div>
        <div>
          {points.map((p, i) => (
            <Reveal key={i} className="xnote" delay={i * 0.08}>
              <Icon name={p.icon} />
              <span>
                <b>{p.title}:</b> {p.text}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface ToolCard {
  icon: IconName;
  text: ReactNode;
}
export function TryToday({ tools }: { tools: ToolCard[] }) {
  return (
    <div className="xtools">
      <Reveal className="br" as="article">
        <div className="xbr">
          <i />
          <span className="i2">Breathe in</span>
          <span className="o">Breathe out slowly</span>
        </div>
        <p>
          Breathe out slowly, a little longer than you breathe in, for a few
          minutes
        </p>
        <small>Follow the circle for a minute</small>
      </Reveal>
      {tools.map((t, i) => (
        <Reveal key={i} delay={0.08 * (i + 1)} as="article">
          <div className="tp">
            <span className="xi">
              <Icon name={t.icon} />
            </span>
            <span className="n">{String(i + 2).padStart(2, "0")}</span>
          </div>
          <p>{t.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export interface FaqItem {
  q: ReactNode;
  a: ReactNode;
}
export function FaqSplit({
  eyebrow,
  title,
  card,
  faqs,
  reviewer = true,
  sources,
}: {
  eyebrow: string;
  title: ReactNode;
  card?: {
    img: ImageName;
    alt: string;
    title: ReactNode;
    text: ReactNode;
    cta?: ReactNode;
    pos?: string;
  };
  faqs: FaqItem[];
  reviewer?: ReactNode | boolean;
  sources?: ReactNode;
}) {
  return (
    <div className="xfq">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2" style={{ margin: "22px 0 30px" }}>
          {title}
        </h2>
        {card ? (
          <div className="card">
            <TMHImage
              name={card.img}
              alt={card.alt}
              sizes="320px"
              objectPosition={card.pos}
            />
            <div>
              <b>{card.title}</b>
              <p>{card.text}</p>
              {card.cta}
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <div className="faq">
          {faqs.map((f, i) => (
            <details key={i} open={i === 0}>
              <summary>
                {f.q}
                <i />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        {reviewer ? (
          <div className="xrev">
            <TMHImage
              name="dr-mithila-desai/portrait"
              alt=""
              sizes="84px"
              objectPosition="50% 22%"
            />
            <span>
              {reviewer === true ? (
                <>
                  Written and reviewed by <b>Dr. Mithila Desai</b>, clinical
                  psychologist · Last reviewed <Confirm>date</Confirm>
                </>
              ) : (
                reviewer
              )}
            </span>
          </div>
        ) : null}
        {sources ? (
          <p className="xrefs">
            <Icon name="CLIP" />
            <span>{sources}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export interface RelCard {
  icon: IconName;
  title: string;
  text: string;
  href: string;
}
export function RelatedCards({ cards }: { cards: RelCard[] }) {
  return (
    <div className="xrel">
      {cards.map((c) => (
        <Link key={c.title} href={c.href}>
          <span className="xi">
            <Icon name={c.icon} />
          </span>
          <b>{c.title}</b>
          <small>{c.text}</small>
          <span className="go">
            Read more <Icon name="ARR" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function EndBand({
  eyebrow,
  title,
  text,
  img,
  imgAlt,
  imgPos,
  primary,
  ghost,
  showCrisis,
}: {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  img: ImageName;
  imgAlt: string;
  imgPos?: string;
  primary: { href: string; label: string };
  ghost?: { href: string; label: ReactNode };
  showCrisis?: boolean;
}) {
  return (
    <div className="xend">
      <div className="tx">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta">
          <BookButton href={primary.href} label={primary.label} />
          {ghost ? (
            <a className="ghost" href={ghost.href}>
              {ghost.label}
            </a>
          ) : null}
        </div>
        {showCrisis ? (
          <p className="cr">
            <Icon name="TEL" />
            <span>
              <b>Thinking of harming yourself?</b> Please don&apos;t wait for an
              appointment. Call Tele-MANAS {crisis.telemanas} or{" "}
              {crisis.emergency}.
            </span>
          </p>
        ) : null}
      </div>
      <div className="im">
        <TMHImage
          name={img}
          alt={imgAlt}
          sizes="(min-width: 900px) 420px, 100vw"
          objectPosition={imgPos}
        />
      </div>
    </div>
  );
}

/* Placeholder panel for treatment hero images still to come */
export function ArtPanel({ icon }: { icon: IconName }) {
  return (
    <div className="xart">
      <i className="tree" aria-hidden="true" />
      <Icon name={icon} />
    </div>
  );
}

export interface WayCard {
  n: number;
  icon: IconName;
  title: string;
  text: string;
  href: string;
  cta?: string;
  img?: HeroPhoto;
  artIcon?: IconName;
}
export function ServiceWayCard({ w }: { w: WayCard }) {
  return (
    <Link className="xway rv" href={w.href}>
      <div className="m">
        {w.img ? (
          <TMHImage
            name={w.img.img}
            alt={w.img.alt}
            sizes="(min-width: 900px) 320px, 100vw"
            objectPosition={w.img.pos}
          />
        ) : (
          <ArtPanel icon={w.artIcon ?? "LEAF"} />
        )}
      </div>
      <div className="b">
        <span className="xi">
          <Icon name={w.icon} />
        </span>
        <small>{String(w.n).padStart(2, "0")}</small>
        <h3>{w.title}</h3>
        <p>{w.text}</p>
        <span className="go">
          {w.cta ?? "Book a session"} <Icon name="ARR" />
        </span>
      </div>
    </Link>
  );
}

export interface ConcernItem {
  icon: IconName;
  title: string;
  text: string;
  href: string;
}
export function ConcernGrid({
  items,
  feature,
}: {
  items: ConcernItem[];
  feature: {
    title: string;
    text: ReactNode;
    href: string;
    cta: string;
    img: ImageName;
    imgAlt: string;
    icon: IconName;
  };
}) {
  return (
    <div className="xcon">
      {items.map((c) => (
        <Link key={c.title} href={c.href}>
          <span className="xi">
            <Icon name={c.icon} />
          </span>
          <span>
            <b>{c.title}</b>
            <small>{c.text}</small>
          </span>
          <span className="go">
            <Icon name="ARR" />
          </span>
        </Link>
      ))}
      <Link className="ft" href={feature.href}>
        <div className="tt">
          <span className="xi">
            <Icon name={feature.icon} />
          </span>
          <b>{feature.title}</b>
          <small>{feature.text}</small>
          <span className="btn">
            <span className="i">
              <Icon name="CAL" />
            </span>
            <span className="t">{feature.cta}</span>
          </span>
        </div>
        <div className="im">
          <TMHImage
            name={feature.img}
            alt={feature.imgAlt}
            sizes="(min-width: 900px) 420px, 100vw"
          />
        </div>
      </Link>
    </div>
  );
}

export interface TriCard {
  small: string;
  title: ReactNode;
  items: ReactNode[];
  negative?: boolean;
  img?: HeroPhoto;
  icon?: IconName;
}
export function TriCards({ cards }: { cards: TriCard[] }) {
  return (
    <div className="xtri">
      {cards.map((c, i) => (
        <Reveal key={i} className={c.negative ? "no" : undefined} delay={i * 0.08} as="article">
          {c.img ? (
            <div className="m">
              <TMHImage
                name={c.img.img}
                alt={c.img.alt}
                sizes="(min-width: 900px) 380px, 100vw"
                objectPosition={c.img.pos}
              />
            </div>
          ) : null}
          <div className="b">
            {c.icon ? (
              <span className="xi">
                <Icon name={c.icon} />
              </span>
            ) : null}
            <small>{c.small}</small>
            <h3>{c.title}</h3>
            <ul>
              {c.items.map((li, j) => (
                <li key={j}>
                  <Icon name={c.negative ? "X" : "TICK"} />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function TeamMosaic({ photos }: { photos: HeroPhoto[] }) {
  return (
    <div className="xmos">
      {photos.map((p, i) => (
        <figure key={i}>
          <TMHImage
            name={p.img}
            alt={p.alt}
            sizes="(min-width: 900px) 170px, 30vw"
            objectPosition={p.pos ?? "50% 20%"}
          />
        </figure>
      ))}
    </div>
  );
}

export interface RoleCard {
  icon: IconName;
  title: string;
  avatars: ImageName[];
  names: ReactNode;
  dl: [string, ReactNode][];
}
export function RoleCards({ roles }: { roles: RoleCard[] }) {
  return (
    <div className="xroles">
      {roles.map((r, i) => (
        <Reveal key={r.title} delay={i * 0.08} as="article">
          <span className="xi">
            <Icon name={r.icon} />
          </span>
          <h3>{r.title}</h3>
          <div className="who">
            {r.avatars.map((a, j) => (
              <TMHImage key={j} name={a} alt="" sizes="84px" />
            ))}
            <span>{r.names}</span>
          </div>
          <dl>
            {r.dl.map(([dt, dd], j) => (
              <div key={j}>
                <dt>{dt}</dt>
                <dd>{dd}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      ))}
    </div>
  );
}

export function CareFlow4({
  steps,
}: {
  steps: { icon: IconName; title: string; text: string }[];
}) {
  return (
    <div className="xflow4">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08} as="article">
          <span className="xi">
            <Icon name={s.icon} />
          </span>
          <small>{String(i + 1).padStart(2, "0")}</small>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function PrivacyBand({
  eyebrow,
  statement,
  points,
}: {
  eyebrow: string;
  statement: ReactNode;
  points: { icon: IconName; title: string; text: string }[];
}) {
  return (
    <div className="xconf dark">
      <i className="tree" aria-hidden="true" />
      <div className="in2">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <p
            className="state"
            style={{ marginTop: 24, color: "var(--on-dark)" }}
          >
            {statement}
          </p>
        </div>
        <div className="pts">
          {points.map((p) => (
            <div key={p.title}>
              <span className="xi">
                <Icon name={p.icon} />
              </span>
              <span>
                <b>{p.title}</b>
                <p>{p.text}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PhotoDuo({
  items,
}: {
  items: { img: ImageName; alt: string; icon: IconName; caption: string }[];
}) {
  return (
    <div className="xduo">
      {items.map((it, i) => (
        <Reveal key={i} delay={i * 0.08} as="figure">
          <TMHImage
            name={it.img}
            alt={it.alt}
            sizes="(min-width: 900px) 600px, 100vw"
          />
          <figcaption>
            <span>
              <Icon name={it.icon} />
            </span>
            {it.caption}
          </figcaption>
        </Reveal>
      ))}
    </div>
  );
}

/* Chip groups for "Areas of care" (dr page) */
export function ChipGroups({
  groups,
}: {
  groups: { title: string; chips: string[] }[];
}) {
  return (
    <div className="cols3">
      {groups.map((g) => (
        <div key={g.title}>
          <h3>{g.title}</h3>
          <div className="chips">
            {g.chips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* Areas of care bento (preview v12, Dr. Desai page section 06) */
const CARE_CHIPS: Record<string, [string, string][]> = {
  feel: [
    ["Anxiety", "/anxiety/"],
    ["Panic", "/anxiety/"],
    ["Low mood", "/depression/"],
    ["Depression", "/depression/"],
    ["Stress", "/stress-and-burnout/"],
    ["Anger", "/individual-therapy/"],
    ["Grief", "/grief-and-loss/"],
    ["Loneliness", "/individual-therapy/"],
  ],
  think: [
    ["OCD", "/ocd/"],
    ["Habits and dependence", "/addiction-and-habits/"],
    ["Sleep problems", "/sleep-problems/"],
    ["Self-esteem", "/self-esteem-and-body-image/"],
    ["Body image", "/self-esteem-and-body-image/"],
  ],
  relate: [
    ["Couples", "/couples-counselling/"],
    ["Pre-marital questions", "/couples-counselling/"],
    ["Family conflict", "/family-counselling/"],
    ["Parenting", "/family-counselling/"],
  ],
  kids: [
    ["Worry", "/child-and-teen-therapy/"],
    ["Behaviour", "/child-and-teen-therapy/"],
    ["School stress", "/child-and-teen-therapy/"],
    ["Bullying", "/child-and-teen-therapy/"],
    ["ADHD and learning", "/psychological-assessment/adhd-learning-neurodiversity/"],
  ],
  assess: [
    ["Attention", "/psychological-assessment/adhd-learning-neurodiversity/"],
    ["Learning", "/psychological-assessment/adhd-learning-neurodiversity/"],
    ["Personality", "/psychological-assessment/"],
    ["Aptitude and career", "/psychological-assessment/"],
  ],
  org: [
    ["Employee counselling", "/workplace-wellbeing/"],
    ["Workshops", "/workplace-wellbeing/"],
    ["School programmes", "/schools-and-colleges/"],
  ],
};

function CareChips({ of }: { of: keyof typeof CARE_CHIPS }) {
  return (
    <div className="cch">
      {CARE_CHIPS[of].map(([label, href]) => (
        <a key={label} href={href}>
          {label}
          <i>
            <Icon name="ARR" />
          </i>
        </a>
      ))}
    </div>
  );
}

export function AreasOfCareBento() {
  return (
    <div className="xcare">
      <Reveal className="c-feel" as="article">
        <div className="tx">
          <span className="xi">
            <Icon name="HEART" />
          </span>
          <h3>Feelings and mood</h3>
          <p>When emotions feel too strong, too flat, or won&apos;t settle.</p>
          <CareChips of="feel" />
        </div>
        <div className="ph">
          <TMHImage
            name="clinic/clinic-nook"
            alt="A calm corner of the therapy room"
            sizes="(min-width: 1080px) 560px, 100vw"
            objectPosition="40% 60%"
          />
        </div>
      </Reveal>
      <Reveal className="c-think" delay={0.08} as="article">
        <span className="xi">
          <Icon name="LOOP" />
        </span>
        <div>
          <h3>Thoughts and habits</h3>
          <p>Patterns that feel hard to stop or change.</p>
          <CareChips of="think" />
        </div>
      </Reveal>
      <Reveal className="c-img" delay={0.16} as="article">
        <div className="ph">
          <TMHImage
            name="scenes/svc-couples"
            alt="A couple in a warm therapy room"
            sizes="(min-width: 1080px) 280px, 50vw"
            objectPosition="50% 45%"
          />
        </div>
        <div className="tx">
          <span className="xi">
            <Icon name="RINGS" />
          </span>
          <h3>Relationships</h3>
          <CareChips of="relate" />
        </div>
      </Reveal>
      <Reveal className="c-img" delay={0.24} as="article">
        <div className="ph">
          <TMHImage
            name="scenes/svc-child-teen"
            alt="A child drawing with a parent beside them"
            sizes="(min-width: 1080px) 280px, 50vw"
          />
        </div>
        <div className="tx">
          <span className="xi">
            <Icon name="CHILD" />
          </span>
          <h3>Children and teenagers</h3>
          <CareChips of="kids" />
        </div>
      </Reveal>
      <Reveal className="c-sm" delay={0.32} as="article">
        <span className="xi">
          <Icon name="CLIP" />
        </span>
        <h3>Assessments</h3>
        <p>Clear answers, in plain words.</p>
        <CareChips of="assess" />
      </Reveal>
      <Reveal className="c-sm" delay={0.4} as="article">
        <span className="xi">
          <Icon name="BRIEF" />
        </span>
        <h3>Organisations</h3>
        <p>Schools and workplaces.</p>
        <CareChips of="org" />
      </Reveal>
      <Reveal className="c-start" delay={0.48} as="article">
        <i className="tree" aria-hidden="true" />
        <div>
          <span className="eyebrow">Not sure where to start?</span>
          <h3>You don&apos;t need the right word for it.</h3>
          <p>
            Tell Dr. Desai what&apos;s been happening. She&apos;ll help you make
            sense of it in the first session.
          </p>
        </div>
        <div className="cta">
          <BookButton href="/contact/#book" label="Book a session" />
          <Link className="ghost" href="/plan-your-visit/">
            How the first session works
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
