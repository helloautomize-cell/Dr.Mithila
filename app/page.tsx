import Link from "next/link";
import dynamic from "next/dynamic";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { GhostButton } from "@/components/ghost-button";
import { WordReveal } from "@/components/word-reveal";
import { CharReveal } from "@/components/char-reveal";
import { CredentialPanel } from "@/components/credential-panel";
import { PhotoCollage35 } from "@/components/photo-collage-35";
import { TeamSection } from "@/components/team-section";
import { WhyBento } from "@/components/why-bento";
import { AwardCard } from "@/components/award-card";
import { MapIllustration } from "@/components/map-illustration";
import { InstagramEditorial } from "@/components/instagram-editorial";
import { TMHImage } from "@/components/tmh-image";
import { Reveal } from "@/components/reveal";
import { Confirm } from "@/components/confirm";
import { Icon, IconTile, type IconName } from "@/lib/icons";
import { getImage } from "@/lib/images";
import { site } from "@/lib/site-config";

const OrbitExplorer = dynamic(() =>
  import("@/components/orbit-explorer").then((m) => m.OrbitExplorer),
);
const WaterfallTimeline = dynamic(() =>
  import("@/components/waterfall-timeline").then((m) => m.WaterfallTimeline),
);
const AudiencePicker = dynamic(() =>
  import("@/components/audience-picker").then((m) => m.AudiencePicker),
);
const JourneyScroller = dynamic(() =>
  import("@/components/journey-scroller").then((m) => m.JourneyScroller),
);
const PracticeGallery = dynamic(() =>
  import("@/components/practice-gallery").then((m) => m.PracticeGallery),
);

const MILESTONES = [
  {
    era: "1980s",
    title: "Choosing Psychology",
    children: (
      <>
        At a time when mental health was rarely spoken about at home, she
        trained as a clinical psychologist in Mumbai. <Confirm />
      </>
    ),
  },
  {
    era: "1989",
    title: "Opening a Practice",
    children: (
      <>
        She began seeing clients in Mumbai, with one belief that still shapes
        every session: people heal when they feel heard. <Confirm>year</Confirm>
      </>
    ),
  },
  {
    era: "Over the years",
    title: "Schools, Families and Workplaces",
    children:
      "Work with students, parents and teachers in schools, counselling for employees through workplace programmes, and training the next generation of psychology students.",
  },
  {
    era: "2023",
    title: "Excellence in Mental Health and Wellness",
    children:
      "Women Entrepreneur Awards, presented to her as clinical psychologist of Power of Mind clinics, the practice's earlier name.",
  },
  {
    era: "2026",
    title: "Mental Health Expert of the Year",
    children:
      'ELLE India Beauty and Wellness Awards. In her words: "Beauty has always been more than skin deep; it begins in the mind."',
  },
  {
    era: "Today",
    title: "The Mental Health, Borivali West",
    children:
      "The same room, the same care, under a new name. In person on Gulmohar Road, and online for families across India and Indians living abroad.",
    now: true,
  },
];

const WAYS: [IconName, string, string, [string, string, string][]][] = [
  [
    "PERSON",
    "Therapy",
    "For one person, two, or a whole family.",
    [
      ["Individual therapy", "One-to-one for adults", "/individual-therapy/"],
      [
        "Child and teen therapy",
        "With parents involved",
        "/child-and-teen-therapy/",
      ],
      [
        "Couples counselling",
        "Before or after marriage",
        "/couples-counselling/",
      ],
      ["Family counselling", "Change and conflict", "/family-counselling/"],
      ["Online therapy", "From home, or abroad", "/online-therapy/"],
    ],
  ],
  [
    "MIND",
    "Concerns",
    "What people most often bring.",
    [
      ["Anxiety and panic", "Worry that won't switch off", "/anxiety/"],
      [
        "Depression and low mood",
        "When everything feels heavy",
        "/depression/",
      ],
      ["OCD", "Unwanted thoughts, checking", "/ocd/"],
      ["Stress and burnout", "Pressure, sleep, temper", "/stress-and-burnout/"],
      ["Grief and loss", "Living with a loss", "/grief-and-loss/"],
    ],
  ],
  [
    "COMPASS",
    "Assessments",
    "Clear answers, in plain words.",
    [
      [
        "Psychological assessment",
        "Tests chosen for your question",
        "/psychological-assessment/",
      ],
      [
        "ADHD and learning",
        "Children, teens and adults",
        "/psychological-assessment/adhd-learning-neurodiversity/",
      ],
      ["Career guidance", "Aptitude for students", "/career-guidance/"],
    ],
  ],
  [
    "FAMILY",
    "Organisations",
    "Schools and workplaces.",
    [
      ["Workplace wellbeing", "Counselling and talks", "/workplace-wellbeing/"],
      [
        "Schools and colleges",
        "Students, parents, teachers",
        "/schools-and-colleges/",
      ],
    ],
  ],
];

const CONCERN_PILLS: [string, string][] = [
  ["Worry or panic", "/anxiety/"],
  ["Low mood", "/depression/"],
  ["Stress at work", "/stress-and-burnout/"],
  ["My relationship", "/couples-counselling/"],
  ["My child or teenager", "/child-and-teen-therapy/"],
  ["Repeated thoughts", "/ocd/"],
  ["An assessment", "/psychological-assessment/"],
  ["Talking online", "/online-therapy/"],
];

const portrait = getImage("dr-mithila-desai/portrait");

export default function Home() {
  return (
    <main>
      {/* hero */}
      <link
        rel="preload"
        as="image"
        href={portrait.src}
        imageSrcSet={portrait.avif}
        imageSizes="(min-width: 900px) 500px, 420px"
        fetchPriority="high"
      />
      <section className="hero g">
        <div className="wrap">
          <div>
            <Eyebrow>The Mental Health · Borivali West, Mumbai</Eyebrow>
            <h1>
              <WordReveal>
                Healing begins when you feel <em>heard</em>.
              </WordReveal>
            </h1>
            <p className="lead">
              A calm, private space to talk with Dr. Mithila Desai, a clinical
              psychologist who has been listening to Mumbai for 35 years. In
              person on Gulmohar Road, or online from anywhere.
            </p>
            <div className="cta">
              <BookButton href="/contact/#book" />
              <GhostButton href={`tel:${site.phoneTel}`} icon="TEL">
                {site.phoneDisplay}
              </GhostButton>
            </div>
            <div className="pills">
              <small>What would you like help with?</small>
              {CONCERN_PILLS.map(([label, href]) => (
                <a key={label} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="portrait">
            <div className="glow" aria-hidden="true" />
            <div className="arch photo">
              <TMHImage
                name="dr-mithila-desai/portrait"
                sizes="(min-width: 900px) 500px, 420px"
                priority
              />
              <span className="sig">Since 1989 · Mumbai</span>
            </div>
            <div className="float f1">
              <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <i className="dot" aria-hidden="true" />
                <b>Dr. Mithila Desai, PhD</b>
              </span>
              <span className="muted">Clinical Psychologist</span>
            </div>
            <div className="float f2">
              <b>ELLE India 2026</b>
              <span className="muted">Mental Health Expert of the Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* credentials */}
      <div className="g">
        <CredentialPanel />
      </div>

      {/* orbit explorer */}
      <section className="orb sec g">
        <div className="wrap">
          <div className="head">
            <Eyebrow>Understanding your mind</Eyebrow>
            <h2 className="h2" style={{ marginTop: 22 }}>
              Six things people bring to <em>the room</em>.
            </h2>
            <p className="lead">
              Tap any one to see how Dr. Desai works with it.
            </p>
          </div>
          <OrbitExplorer />
        </div>
      </section>

      {/* 35 years collage */}
      <section className="sec g" style={{ paddingTop: 0 }}>
        <div className="wrap big35">
          <PhotoCollage35 />
          <Reveal>
            <Eyebrow>
              Since 1989 <Confirm>year</Confirm>
            </Eyebrow>
            <p className="state" style={{ marginTop: 22 }}>
              Thirty-five years of sitting with people in <em>Mumbai</em>,
              through exams, marriages, losses and new beginnings.
            </p>
            <div className="facts3">
              <div>
                <IconTile name="FAMILY" size="sm" className="fi" />
                <b>Children to elders</b>
                <span>Every age, every stage</span>
              </div>
              <div>
                <IconTile name="CAP" size="sm" className="fi" />
                <b>Schools and workplaces</b>
                <span>Programmes across the city</span>
              </div>
              <div>
                <IconTile name="AWARD" size="sm" className="fi" />
                <b>Two national awards</b>
                <span>2023 and 2026</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 why */}
      <section className="sec g leadmark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="two" style={{ alignItems: "end" }}>
            <div>
              <Eyebrow>01 · Why The Mental Health</Eyebrow>
              <h2 className="h2" style={{ marginTop: 22 }}>
                <CharReveal>
                  A quiet place to be <em>heard</em>.
                </CharReveal>
              </h2>
            </div>
            <div className="startp">
              <p className="lead">
                Starting therapy can feel like a big step. We keep it simple:
                one experienced psychologist, a private room, and time to talk
                at your pace.
              </p>
            </div>
          </div>
          <WhyBento />
        </div>
      </section>

      {/* 02 her story */}
      <section
        className="sec g"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="wrap">
          <Eyebrow>02 · Her story</Eyebrow>
          <h2 className="h2" style={{ marginTop: 22, maxWidth: "18ch" }}>
            <CharReveal>
              Three and a half decades of <em>listening</em>.
            </CharReveal>
          </h2>
          <div className="story">
            <div className="stick">
              <div className="arch photo">
                <TMHImage
                  name="dr-mithila-desai/award-2023"
                  sizes="(min-width: 860px) 380px, 100vw"
                  objectPosition="40% 30%"
                />
              </div>
            </div>
            <WaterfallTimeline items={MILESTONES} />
          </div>
        </div>
      </section>

      {/* 03 recognition */}
      <section className="sec g leadmark">
        <div className="wrap">
          <div className="two" style={{ alignItems: "end" }}>
            <div>
              <Eyebrow>03 · Recognition</Eyebrow>
              <h2 className="h2" style={{ marginTop: 22 }}>
                Recognised for her <em>work</em>.
              </h2>
            </div>
            <p className="lead">
              Awards are not a promise of results. They reflect the care she has
              brought to mental health in Mumbai for over three decades.
            </p>
          </div>
          <div className="aw">
            <AwardCard
              image="dr-mithila-desai/elle-2026"
              kicker="ELLE India · 2026"
              title="Mental Health Expert of the Year"
              caption="ELLE India Beauty and Wellness Awards"
            />
            <AwardCard
              image="dr-mithila-desai/award-2023"
              kicker="Women Entrepreneur Awards · 2023"
              title="Excellence in Mental Health and Wellness"
              caption="For outstanding contribution over the year"
              objectPosition="30% 20%"
            />
          </div>
        </div>
      </section>

      {/* team */}
      <section className="sec g leadmark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="two" style={{ alignItems: "end" }}>
            <div>
              <Eyebrow>The people behind the practice</Eyebrow>
              <h2 className="h2" style={{ marginTop: 22 }}>
                A dedicated team, one shared <em>approach</em>.
              </h2>
            </div>
            <p className="lead">
              Dr. Desai leads a multidisciplinary team of psychologists, a
              consultant psychiatrist and a care coordinator, so every client
              gets the right support at the right time.{" "}
              <Link className="link" href="/our-team/">
                Meet the team <Icon name="ARR" />
              </Link>
            </p>
          </div>
          <TeamSection />
        </div>
      </section>

      {/* 04 where do i start */}
      <section className="start sec g leadmark">
        <div className="wrap">
          <Eyebrow>04 · Where do I start?</Eyebrow>
          <div className="two" style={{ alignItems: "end" }}>
            <h2 className="h2" style={{ marginTop: 22, maxWidth: "16ch" }}>
              <CharReveal>
                Tell us who it&apos;s <em>for</em>.
              </CharReveal>
            </h2>
            <p className="lead">
              Pick one, and we&apos;ll show you where most people begin, and
              what a first session looks like for them.
            </p>
          </div>
          <AudiencePicker />
        </div>
      </section>

      {/* 05 how we can help */}
      <section className="sec g leadmark">
        <div className="wrap">
          <div className="two" style={{ alignItems: "end" }}>
            <div>
              <Eyebrow>05 · How we can help</Eyebrow>
              <h2 className="h2" style={{ marginTop: 22 }}>
                Ways we work and what we <em>help</em> with.
              </h2>
            </div>
            <p className="lead">
              Talking therapy for one person, two, or a whole family, clear
              assessments, and programmes for schools and workplaces.
            </p>
          </div>
          <div className="wg">
            {WAYS.map(([icon, heading, sub, links]) => (
              <Reveal key={heading}>
                <IconTile name={icon} size="sm" />
                <span className="eyebrow" style={{ marginTop: 12 }}>
                  {heading}
                </span>
                <h3 style={{ marginTop: 12 }}>
                  {heading === "Concerns" ? "What we help with" : heading}
                </h3>
                <p>{sub}</p>
                {links.slice(0, 2).map(([label, note, href]) => (
                  <a key={href} href={href}>
                    <span
                      style={{
                        color: "var(--ink)",
                        fontWeight: 500,
                        fontSize: 15,
                      }}
                    >
                      {label}
                      <span>{note}</span>
                    </span>
                    <Icon name="ARR" />
                  </a>
                ))}
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 30 }}>
            <Link className="link" href="/services/">
              View all services <Icon name="ARR" />
            </Link>
          </p>
        </div>
      </section>

      {/* 06 your first session */}
      <JourneyScroller />

      {/* inside the practice */}
      <section className="sec g insp">
        <div className="wrap">
          <div className="two" style={{ alignItems: "end" }}>
            <div>
              <Eyebrow>Inside the practice</Eyebrow>
              <h2 className="h2" style={{ marginTop: 22 }}>
                <CharReveal>
                  A room made for <em>calm</em>.
                </CharReveal>
              </h2>
            </div>
            <p className="lead">
              Soft light, quiet colours and a door that closes. This is where
              your sessions happen, on Gulmohar Road in Borivali West.
            </p>
          </div>
          <PracticeGallery />
        </div>
      </section>

      {/* 07 visit us */}
      <section className="sec g">
        <div className="wrap">
          <Eyebrow>07 · Visit us</Eyebrow>
          <h2 className="h2" style={{ marginTop: 22, maxWidth: "18ch" }}>
            A quiet room off <em>Gulmohar</em> Road.
          </h2>
          <div className="vb">
            <div className="maplink">
              <MapIllustration />
            </div>
            <div className="vcard">
              <div>
                <span className="ico">
                  <Icon name="PIN" />
                </span>
                <p>
                  <b>Address</b>
                  {site.address}
                </p>
              </div>
              <div>
                <span className="ico">
                  <Icon name="STAR" />
                </span>
                <p>
                  <b>Landmark</b>
                  {site.landmark}
                </p>
              </div>
              <div>
                <span className="ico">
                  <Icon name="CLOCK" />
                </span>
                <p>
                  <b>Hours</b>By appointment · {site.hours}
                </p>
              </div>
              <div>
                <span className="ico">
                  <Icon name="TEL" />
                </span>
                <p>
                  <b>Call</b>
                  {site.phoneDisplay}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  gridTemplateColumns: "none",
                }}
              >
                <GhostButton href={site.mapsUrl} external>
                  Get directions
                </GhostButton>
                <GhostButton href="/plan-your-visit/">
                  Plan your visit
                </GhostButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 in her words */}
      <section className="sec g leadmark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="two" style={{ alignItems: "end" }}>
            <div>
              <Eyebrow>08 · In her words</Eyebrow>
              <h2 className="h2" style={{ marginTop: 22 }}>
                From Dr. Desai&apos;s <em>Instagram</em>.
              </h2>
            </div>
            <p className="lead">
              Short notes on feelings, families and everyday mental health,
              shared with 14,700 followers.{" "}
              <a className="link" href={site.instagram}>
                {site.instagramHandle}
              </a>
            </p>
          </div>
          <InstagramEditorial />
        </div>
      </section>

      {/* 09 quick answers */}
      <section className="sec g" style={{ paddingTop: 0 }}>
        <div className="wrap two">
          <div>
            <Eyebrow>09 · Quick answers</Eyebrow>
            <h2 className="h2" style={{ marginTop: 22 }}>
              Things people <em>ask</em> first.
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Something else on your mind?{" "}
              <Link className="link" href="/contact/">
                Ask us directly
              </Link>
            </p>
          </div>
          <div className="faq">
            <details open>
              <summary>
                Is Dr. Mithila Desai a psychiatrist?<i></i>
              </summary>
              <p>
                No. Dr. Desai is a clinical psychologist with a PhD. She helps
                through talking therapy and psychological assessment and does
                not prescribe medicine. A psychiatrist is a medical doctor who
                can prescribe. Many people see only a psychologist; some see
                both. If medicine may help you, she will say so and can work
                alongside your psychiatrist.
              </p>
            </details>
            <details>
              <summary>
                Is what I say kept private?<i></i>
              </summary>
              <p>
                Yes. What you share stays between you and Dr. Desai. The only
                exceptions are when someone&apos;s life or safety is at serious
                risk, when a child may be at risk of harm, or when the law
                requires it. She explains these limits at your first session.
              </p>
            </details>
            <details>
              <summary>
                Can I have sessions online?<i></i>
              </summary>
              <p>
                Yes. Online sessions happen by video at a booked time, just like
                a session in the room. You need a private space, headphones and
                a steady connection. Some people mix in-person and online
                sessions.
              </p>
            </details>
            <details>
              <summary>
                How many sessions will I need?<i></i>
              </summary>
              <p>
                It depends on what you&apos;d like help with, how long it has
                been going on and how often you can come. Some people feel
                clearer after a few sessions; others meet for several months.
                Dr. Desai reviews progress with you along the way.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* closing quote band */}
      <section className="close dark sec g">
        <i className="tree" aria-hidden="true" />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="bq">
            <q>
              &ldquo;What mental health needs is more sunlight, more candor, and
              more unashamed conversations.&rdquo;
            </q>
            <cite>
              The thought behind the practice <Confirm>keep</Confirm>
            </cite>
          </div>
          <div className="cta" style={{ marginTop: 44 }}>
            <BookButton href="/contact/#book" />
            <GhostButton href="#whatsapp" icon="WA">
              WhatsApp
            </GhostButton>
          </div>
        </div>
      </section>
    </main>
  );
}
