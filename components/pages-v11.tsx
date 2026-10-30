import Link from "next/link";
import { BookButton } from "@/components/book-button";
import { Confirm } from "@/components/confirm";
import { Reveal } from "@/components/reveal";
import { TMHImage } from "@/components/tmh-image";
import { TeamSection } from "@/components/team-section";
import { Icon, IconTile } from "@/lib/icons";
import { site } from "@/lib/site-config";
import {
  CareFlow4,
  ChipGroups,
  ConcernGrid,
  EndBand,
  FaqSplit,
  InnerHero,
  PrivacyBand,
  PhotoDuo,
  SectionHead,
  ServiceWayCard,
  TeamMosaic,
  TriCards,
  RoleCards,
} from "@/components/v11";
import { TherapyPath } from "@/components/v11-live";

/* ============ /dr-mithila-desai/ ============ */
const FACTS: [string, React.ReactNode][] = [
  [
    "Qualification",
    <>
      PhD <Confirm>subject, university, year</Confirm>
    </>,
  ],
  [
    "Registration",
    <>
      RCI, CRR No. <Confirm />
    </>,
  ],
  ["In practice", "35 years"],
  [
    "Languages",
    <>
      English, Hindi <Confirm>others</Confirm>
    </>,
  ],
  ["Sessions", "Borivali West and online"],
  ["Recognition", "ELLE India Mental Health Expert of the Year, 2026"],
];

const HOW = [
  {
    icon: "EAR" as const,
    t: "Listening comes first",
    p: "The early sessions are about understanding what is happening and what matters to you.",
  },
  {
    icon: "TOOL" as const,
    t: "Skills you can use",
    p: "Practical ways to handle worry, low mood or conflict between sessions.",
  },
  {
    icon: "LEAF" as const,
    t: "The present moment",
    p: (
      <>
        Mindfulness, noticing what is happening now without judging it, is part
        of how she works. <Confirm />
      </>
    ),
  },
  {
    icon: "STAR" as const,
    t: "Your strengths",
    p: "She looks at what already helps you, and builds on it.",
  },
  {
    icon: "CHAT" as const,
    t: "Plain words",
    p: "She explains what she notices and why she suggests something, so therapy never feels like a mystery.",
  },
  {
    icon: "LINK" as const,
    t: "Working with others",
    p: "With your consent, she can speak with your psychiatrist, doctor or your child's school.",
  },
];

export function DoctorPage() {
  return (
    <main>
      <section className="phero g">
        <div className="wrap">
          <div className="xph" style={{ justifySelf: "start" }}>
            <div className="fr">
              <TMHImage
                name="dr-mithila-desai/dr-armchair"
                alt="Dr. Mithila Desai seated in a calm therapy room, listening"
                sizes="(min-width: 900px) 500px, 100vw"
                objectPosition="50% 20%"
              />
            </div>
            <div className="xfl b">
              <span className="xi">
                <Icon name="AWARD" />
              </span>
              <div>
                <b>ELLE India 2026</b>
                <small>Mental Health Expert of the Year</small>
              </div>
            </div>
          </div>
          <div>
            <span className="xtag">
              <span>
                <Icon name="USER" />
              </span>
              Clinical psychologist · Borivali West
            </span>
            <h1>
              Dr. Mithila Desai, clinical <em>psychologist</em>
            </h1>
            <div className="facts">
              {FACTS.map(([k, v]) => (
                <div key={k}>
                  <small>{k}</small>
                  <b>{v}</b>
                </div>
              ))}
            </div>
            <div className="cta">
              <BookButton href="/contact/#book" label="Book with Dr. Desai" />
              <a className="ghost" href={`tel:${site.phoneTel}`}>
                <Icon name="TEL" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sec g"
        style={{ background: "#fff", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap xab">
          <Reveal className="col">
            <div className="a">
              <TMHImage
                name="dr-mithila-desai/dr-desk"
                alt="Dr. Mithila Desai at her desk"
                sizes="(min-width: 900px) 460px, 100vw"
              />
            </div>
            <div className="q">
              <p>
                &quot;Healing begins the moment you feel truly heard.&quot;
              </p>
              <small>
                Dr. Desai&apos;s guiding principle{" "}
                <Confirm>as her words</Confirm>
              </small>
            </div>
          </Reveal>
          <div className="tx">
            <span className="eyebrow">01 · About</span>
            <h2 className="h2" style={{ margin: "8px 0 6px" }}>
              Thirty five years of <em>listening</em>.
            </h2>
            <p className="lead" style={{ maxWidth: "none" }}>
              Dr. Mithila Desai is a clinical psychologist in Borivali West,
              Mumbai. She holds a PhD and has worked in psychology for 35 years.
              She sees adults, teenagers, children, couples and families for
              talking therapy and psychological assessment, in person and
              online.
            </p>
            <p className="muted">
              Alongside her clinical work, she has worked with schools for many
              years, supporting students, parents and teachers, and has
              counselled employees through workplace programmes. She has also
              trained psychology students. <Confirm />
            </p>
            <div className="xpsy">
              <span className="xi">
                <Icon name="PILL" />
              </span>
              <div>
                <b>A psychologist, not a psychiatrist</b>
                <p>
                  Dr. Desai is not a medical doctor and does not prescribe
                  medicine. When medicine may help, she suggests a psychiatrist
                  and, with your consent, works alongside them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec g">
        <div className="wrap">
          <SectionHead
            eyebrow="02 · How she works"
            title={
              <>
                Listening comes <em>first</em>.
              </>
            }
            lead="Six things clients can expect from the first session onwards."
          />
          <div className="why" style={{ marginTop: 0 }}>
            {HOW.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <span className="wi">
                  <Icon name={c.icon} />
                </span>
                <h3>{c.t}</h3>
                <p>{c.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec g" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead
            eyebrow="03 · Beyond the therapy room"
            title={
              <>
                Schools, workplaces and <em>stages</em>.
              </>
            }
            lead="Much of her work happens where people learn, work and gather."
          />
          <div className="xbey">
            <Reveal className="ph">
              <TMHImage
                name="dr-mithila-desai/dr-talk-2026"
                alt="Dr. Mithila Desai receiving a plaque at the Resilient Living Conference"
                sizes="(min-width: 900px) 480px, 100vw"
              />
              <div>
                <small>Resilient Living Conference · 2026</small>
                <h3>
                  Speaking on relationships and the role they play in resilient
                  living
                </h3>
              </div>
            </Reveal>
            <div className="ls">
              <Reveal as="article">
                <IconTile name="SCHOOL" />
                <div>
                  <h3>Schools</h3>
                  <p>
                    Supporting students, parents and teachers for many years.{" "}
                    <Confirm />
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08} as="article">
                <IconTile name="BRIEF" />
                <div>
                  <h3>Workplaces</h3>
                  <p>
                    Counselling employees through workplace wellbeing
                    programmes.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.16} as="article">
                <IconTile name="CAP" />
                <div>
                  <h3>Teaching</h3>
                  <p>
                    Training the next generation of psychology students.{" "}
                    <Confirm />
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sec g"
        style={{ background: "#fff", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <TherapyPath
            sticky={
              <>
                <span className="eyebrow">04 · Training and roles</span>
                <h2 className="h2" style={{ margin: "22px 0 20px" }}>
                  Education, roles and <em>awards</em>.
                </h2>
                <p className="notebox">
                  Directory listings disagree on her degrees and years. The
                  final list will come from Dr. Desai.{" "}
                  <Confirm>full list</Confirm>
                </p>
              </>
            }
            steps={[
              {
                icon: "CAP",
                n: "PhD",
                title: "Clinical psychology",
                text: (
                  <>
                    University and year <Confirm />
                  </>
                ),
              },
              {
                icon: "CAP",
                n: "Master's",
                title: "Clinical psychology",
                text: (
                  <>
                    University of Mumbai <Confirm />
                  </>
                ),
              },
              {
                icon: "TOOL",
                n: "Training",
                title: "CBT and REBT practitioner",
                text: <Confirm />,
              },
              {
                icon: "SHIELD",
                n: "Registration",
                title: "Rehabilitation Council of India",
                text: (
                  <>
                    CRR number <Confirm />
                  </>
                ),
              },
              {
                icon: "SPROUT",
                n: "Founder",
                title: "The Mental Health, Borivali West",
                text: "Earlier known as Power of Mind",
              },
              {
                icon: "AWARD",
                n: "2023",
                title: "Excellence in Mental Health and Wellness",
                text: "Women Entrepreneur Awards",
              },
              {
                icon: "AWARD",
                n: "2026",
                title: "Mental Health Expert of the Year",
                text: "ELLE India Beauty and Wellness Awards",
              },
            ]}
          />
        </div>
      </section>

      <section className="sec g">
        <div className="wrap">
          <SectionHead
            eyebrow="05 · Recognition"
            title={
              <>
                Recognised for her <em>work</em>.
              </>
            }
          />
          <div className="xaw">
            <Reveal className="awc">
              <TMHImage
                name="dr-mithila-desai/elle-2026"
                alt="Dr. Desai receiving the ELLE India award"
                sizes="(min-width: 900px) 500px, 100vw"
              />
              <div>
                <small>ELLE India · 2026</small>
                <h3>Mental Health Expert of the Year</h3>
                <p>ELLE India Beauty and Wellness Awards</p>
              </div>
            </Reveal>
            <Reveal className="awc" delay={0.08}>
              <TMHImage
                name="dr-mithila-desai/award-2023"
                alt="Dr. Desai with the Women Entrepreneur Award"
                objectPosition="30% 20%"
                sizes="(min-width: 900px) 500px, 100vw"
              />
              <div>
                <small>Women Entrepreneur Awards · 2023</small>
                <h3>Excellence in Mental Health and Wellness</h3>
                <p>Women Entrepreneur Awards</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="sec g"
        style={{ background: "#fff", borderTop: "1px solid var(--line)" }}
      >
        <div className="wrap">
          <span className="eyebrow">06 · What she helps with</span>
          <h2 className="h2" style={{ marginTop: 22 }}>
            Areas of <em>care</em>.
          </h2>
          <ChipGroups
            groups={[
              {
                title: "Feelings and mood",
                chips: [
                  "Anxiety",
                  "Panic",
                  "Low mood",
                  "Depression",
                  "Stress",
                  "Anger",
                  "Grief",
                  "Loneliness",
                ],
              },
              {
                title: "Thoughts and habits",
                chips: [
                  "OCD",
                  "Habits and dependence",
                  "Sleep problems",
                  "Self-esteem",
                  "Body image",
                ],
              },
              {
                title: "Relationships",
                chips: [
                  "Couples",
                  "Pre-marital questions",
                  "Family conflict",
                  "Parenting",
                ],
              },
              {
                title: "Children and teenagers",
                chips: [
                  "Worry",
                  "Behaviour",
                  "School stress",
                  "Bullying",
                  "ADHD and learning",
                ],
              },
              {
                title: "Assessments",
                chips: [
                  "Attention",
                  "Learning",
                  "Personality",
                  "Aptitude and career",
                ],
              },
              {
                title: "Organisations",
                chips: [
                  "Employee counselling",
                  "Workshops",
                  "School programmes",
                ],
              },
            ]}
          />
        </div>
      </section>

      <section className="sec g">
        <div className="wrap">
          <FaqSplit
            eyebrow="07 · Questions"
            title={
              <>
                About Dr. <em>Desai</em>.
              </>
            }
            card={{
              img: "dr-mithila-desai/dr-door",
              alt: "Dr. Desai at the door of her consultation room",
              pos: "50% 15%",
              title: "Your first session",
              text: "A conversation, not a test. See what happens and what to bring.",
              cta: (
                <Link className="link" href="/plan-your-visit/">
                  Plan your first session <Icon name="ARR" />
                </Link>
              ),
            }}
            reviewer={false}
            faqs={[
              {
                q: 'Why is a psychologist called "Dr."?',
                a: 'Dr. Desai holds a PhD, the highest university degree, which is why she uses the title "Dr.". She is not a medical doctor and does not prescribe medicine. Her training is in understanding thoughts, feelings and behaviour, and helping people through talking therapy and assessment.',
              },
              {
                q: "Does Dr. Desai see children?",
                a: (
                  <>
                    Yes, usually with a parent involved in some sessions. For
                    younger children, play and drawing are often part of the
                    session, because children may find it easier to show than to
                    tell. <Confirm>youngest age</Confirm>
                  </>
                ),
              },
              {
                q: "Which languages can I speak in my session?",
                a: (
                  <>
                    English or Hindi <Confirm>Marathi, Gujarati</Confirm>. Many
                    people mix languages, and that is fine. Use whatever words
                    feel natural to you.
                  </>
                ),
              },
              {
                q: "Can she give me a certificate or a letter?",
                a: "After an assessment she writes a report. She can also write letters for schools, colleges or employers when appropriate and you agree. Official disability certificates are issued by government medical boards.",
              },
            ]}
          />
          <EndBand
            eyebrow="Book with Dr. Desai"
            title={
              <>
                Start with one <em>conversation</em>.
              </>
            }
            text="In person on Gulmohar Road, Borivali West, or online for Indians living abroad."
            img="clinic/clinic-room"
            imgAlt="Dr. Desai's consultation room"
            primary={{ href: "/contact/#book", label: "Book a session" }}
            ghost={{
              href: `tel:${site.phoneTel}`,
              label: (
                <>
                  <Icon name="TEL" /> {site.phoneDisplay}
                </>
              ),
            }}
          />
        </div>
      </section>
    </main>
  );
}

/* ============ /services/ ============ */
const WAYS = [
  {
    n: 1,
    icon: "PERSON" as const,
    title: "Individual therapy",
    text: "One-to-one sessions for adults, for worry, low mood, stress or a hard season.",
    href: "/individual-therapy/",
    img: {
      img: "dr-mithila-desai/dr-armchair" as const,
      alt: "Dr. Desai listening in a calm therapy room",
      pos: "50% 25%",
    },
  },
  {
    n: 2,
    icon: "CHILD" as const,
    title: "Child and teen therapy",
    text: "Support for young people, with parents involved at the right moments.",
    href: "/child-and-teen-therapy/",
    img: {
      img: "scenes/svc-child-teen" as const,
      alt: "A child drawing at a low wooden table with a parent beside them",
    },
  },
  {
    n: 3,
    icon: "RINGS" as const,
    title: "Couples counselling",
    text: "For couples who feel stuck, before or after marriage.",
    href: "/couples-counselling/",
    img: {
      img: "scenes/svc-couples" as const,
      alt: "A couple seen from behind on a sofa in a warm therapy room",
      pos: "50% 40%",
    },
  },
  {
    n: 4,
    icon: "FAMILY" as const,
    title: "Family counselling",
    text: "Working through change and conflict together.",
    href: "/family-counselling/",
    img: {
      img: "scenes/svc-family" as const,
      alt: "A warm family therapy room with armchairs and a sofa",
    },
  },
];

const CONCERNS = [
  {
    icon: "MIND" as const,
    title: "Anxiety and panic",
    text: "Worry that won't switch off, and panic attacks.",
    href: "/anxiety/",
  },
  {
    icon: "CLOUD" as const,
    title: "Depression and low mood",
    text: "When everything feels heavy or flat.",
    href: "/depression/",
  },
  {
    icon: "LOOP" as const,
    title: "OCD",
    text: "Unwanted thoughts and repeated checking or cleaning.",
    href: "/ocd/",
  },
  {
    icon: "FLAME" as const,
    title: "Stress, anger and burnout",
    text: "When pressure spills into sleep, temper and health.",
    href: "/stress-and-burnout/",
  },
  {
    icon: "SHIELD" as const,
    title: "Trauma",
    text: "After frightening, painful or overwhelming experiences.",
    href: "/trauma/",
  },
  {
    icon: "MIRROR" as const,
    title: "Self-esteem and body image",
    text: "How you see and speak to yourself.",
    href: "/self-esteem-and-body-image/",
  },
  {
    icon: "LEAF" as const,
    title: "Grief and loss",
    text: "Living with a death or another big loss.",
    href: "/grief-and-loss/",
  },
  {
    icon: "MOON" as const,
    title: "Sleep problems",
    text: "Trouble falling or staying asleep.",
    href: "/sleep-problems/",
  },
];

export function ServicesPageV11() {
  return (
    <main>
      <InnerHero
        tag={{ icon: "COMPASS", label: "Therapy, assessment and programmes" }}
        title={
          <>
            How we can <em>help</em>.
          </>
        }
        lead="Talking therapy and psychological assessment with Dr. Mithila Desai in Borivali West and online. Start with the way of working that fits your situation, or with the concern you'd like help with."
        bookLabel="Book a session"
        link={{ href: "#x-con", label: "Find your concern" }}
        trust={[
          { icon: "PERSON", label: "Individuals" },
          { icon: "RINGS", label: "Couples" },
          { icon: "FAMILY", label: "Families" },
          { icon: "SCHOOL", label: "Schools and workplaces" },
        ]}
        photo={{
          img: "clinic/clinic-room",
          alt: "The consultation room with a wooden desk and window light",
        }}
        floats={[
          {
            pos: "a",
            icon: "GLOBE",
            title: "In person or online",
            sub: "Borivali West and abroad",
          },
        ]}
      />

      <section className="sec g" style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
        <div className="wrap">
          <SectionHead
            eyebrow="01 · Ways we work"
            title={
              <>
                For one person, two, or a whole <em>family</em>.
              </>
            }
            lead="Pick who the sessions are for. Dr. Desai adapts how she works to each."
          />
          <div className="xways">
            {WAYS.map((w) => (
              <ServiceWayCard key={w.title} w={w} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="sec g"
        id="x-con"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--line)",
          scrollMarginTop: 90,
        }}
      >
        <div className="wrap">
          <SectionHead
            eyebrow="02 · Concerns"
            title={
              <>
                What would you like help <em>with</em>?
              </>
            }
            lead="Each page explains the signs, how therapy helps and what you can try today."
          />
          <ConcernGrid
            items={CONCERNS}
            feature={{
              icon: "GLOBE",
              title: "Online therapy for Indians abroad",
              text: "Sessions planned around your time zone. Video sessions with Dr. Desai for Indians living abroad, at a booked time.",
              href: "/online-therapy/",
              cta: "Book an online session",
              img: "dr-mithila-desai/dr-online",
              imgAlt: "Dr. Desai in an online video session",
            }}
          />
        </div>
      </section>

      <section className="sec g">
        <div className="wrap">
          <SectionHead
            eyebrow="03 · Assessments and programmes"
            title={
              <>
                Clear answers, and support beyond the <em>room</em>.
              </>
            }
          />
          <TriCards
            cards={[
              {
                small: "Assessments",
                title: "Clear answers, in plain words",
                img: {
                  img: "scenes/svc-assessment",
                  alt: "A desk with a questionnaire, a pencil, a timer and a cup of tea",
                },
                items: [
                  "Psychological assessment",
                  "ADHD, learning and neurodiversity",
                  "Career guidance and aptitude testing",
                ],
              },
              {
                small: "For organisations",
                title: "Schools and workplaces",
                img: {
                  img: "dr-mithila-desai/dr-talk-2026",
                  alt: "Dr. Desai at the Resilient Living Conference",
                  pos: "30% 30%",
                },
                items: [
                  "Workplace wellbeing and EAP counselling",
                  "Workshops for students, parents and teachers",
                ],
              },
              {
                small: "What we do not offer",
                title: "So you find the right help quickly",
                negative: true,
                icon: "SHIELD",
                items: [
                  <>
                    <b>Medicine.</b> Please see a psychiatrist.
                  </>,
                  <>
                    <b>Emergency care.</b> Call 112 or 14416.
                  </>,
                  <>
                    <b>Hospital or residential care</b>, including detox.
                  </>,
                  <>
                    <b>Disability certificates</b>, issued by government boards.
                  </>,
                ],
              },
            ]}
          />
          <EndBand
            eyebrow="Not sure where to start?"
            title={
              <>
                Tell us who it&apos;s for. We&apos;ll <em>guide</em> you.
              </>
            }
            text="Your first session is a conversation, not a test. Together you decide on next steps."
            img="dr-mithila-desai/dr-door"
            imgAlt="Dr. Desai at the door of her consultation room"
            imgPos="50% 20%"
            primary={{ href: "/contact/#book", label: "Book a session" }}
            ghost={{ href: "/plan-your-visit/", label: "Plan your first session" }}
          />
        </div>
      </section>
    </main>
  );
}

/* ============ /our-team/ ============ */
export function TeamPage() {
  return (
    <main>
      <InnerHero
        tag={{ icon: "FAMILY", label: "A multidisciplinary team" }}
        title={
          <>
            The people behind The Mental <em>Health</em>.
          </>
        }
        lead={
          <>
            The practice is led by clinical psychologist Dr. Mithila Desai, who
            sees clients herself. She leads a multidisciplinary team, so you are
            supported by the right person, and medicine can be considered by a
            psychiatrist when it may help. <Confirm>team list</Confirm>
          </>
        }
        bookLabel="Book with Dr. Desai"
        link={{ href: "#x-roles", label: "Who does what" }}
        media={
          <TeamMosaic
            photos={[
              { img: "dr-mithila-desai/dr-desk", alt: "Dr. Mithila Desai" },
              { img: "team/team-sujay-prabhugaonkar", alt: "Dr. Sujay Prabhugaonkar" },
              { img: "team/team-neha-pansare", alt: "Dr. Neha Pansare" },
              { img: "team/team-ashmi-shah", alt: "Ms. Ashmi R. Shah" },
              { img: "team/team-ashika-shah", alt: "Ms. Ashika Shah" },
              { img: "team/team-vishwa-shah", alt: "Ms. Vishwa Shah" },
            ]}
          />
        }
      />

      <section
        className="sec g"
        style={{ paddingTop: "clamp(40px,5vw,70px)" }}
      >
        <div className="wrap">
          <span className="eyebrow">01 · Meet the team</span>
          <h2 className="h2" style={{ marginTop: 22 }}>
            A dedicated team, one shared <em>approach</em>.
          </h2>
          <TeamSection moreHref="" />
        </div>
      </section>

      <section
        className="sec g"
        id="x-roles"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--line)",
          scrollMarginTop: 90,
        }}
      >
        <div className="wrap">
          <SectionHead
            eyebrow="02 · Who does what"
            title={
              <>
                The right person for each part of your <em>care</em>.
              </>
            }
            lead="Psychologists and psychiatrists train differently and help in different ways. Here is what each person on the team does."
          />
          <RoleCards
            roles={[
              {
                icon: "CHAT",
                title: "Psychologists",
                avatars: [
                  "dr-mithila-desai/dr-desk",
                  "team/team-ashmi-shah",
                  "team/team-ashika-shah",
                ],
                names: "Dr. Desai, Ms. Ashmi Shah, Ms. Ashika Shah",
                dl: [
                  [
                    "What they do",
                    "Talking therapy and psychological assessment. They do not prescribe medicine.",
                  ],
                  [
                    "When you'd see them",
                    "From your first session. Unless you ask for someone else, your sessions are with Dr. Desai.",
                  ],
                ],
              },
              {
                icon: "PILL",
                title: "Consultant psychiatrist",
                avatars: ["team/team-sujay-prabhugaonkar"],
                names: (
                  <>
                    Dr. Sujay Prabhugaonkar <Confirm />
                  </>
                ),
                dl: [
                  [
                    "What they do",
                    "A medical doctor who can assess whether medicine may help, and prescribe it.",
                  ],
                  [
                    "When you'd see them",
                    "Only if medicine may help, and only with your consent. You can also keep your own psychiatrist.",
                  ],
                ],
              },
              {
                icon: "TEL",
                title: "Care coordinator",
                avatars: ["team/team-vishwa-shah"],
                names: "Ms. Vishwa Shah",
                dl: [
                  ["What they do", "Appointments and client queries."],
                  [
                    "When you'd speak to them",
                    "Usually the first voice you hear, when you call or message to book.",
                  ],
                ],
              },
            ]}
          />
        </div>
      </section>

      <section className="sec g">
        <div className="wrap">
          <SectionHead
            eyebrow="03 · How care is shared"
            title={
              <>
                One plan, decided <em>with</em> you.
              </>
            }
            lead="You are never passed around. Dr. Desai stays with you and brings others in only when it helps."
          />
          <CareFlow4
            steps={[
              {
                icon: "TEL",
                title: "You get in touch",
                text: "The care coordinator helps you book a time, in person or online.",
              },
              {
                icon: "USER",
                title: "You meet Dr. Desai",
                text: "Your first session is with her. You talk, and agree on a plan.",
              },
              {
                icon: "LINK",
                title: "A colleague joins, if needed",
                text: "For example, a psychiatrist to talk about medicine. She explains why and asks first.",
              },
              {
                icon: "COMPASS",
                title: "One shared plan",
                text: "Everyone works from the same plan, and you review it together.",
              },
            ]}
          />
        </div>
      </section>

      <section className="g">
        <div className="wrap">
          <PrivacyBand
            eyebrow="04 · Your privacy"
            statement={
              <>
                The team shares only what is needed for your care, and only when
                you <em style={{ color: "var(--honey)" }}>agree</em>.
              </>
            }
            points={[
              {
                icon: "LOCK",
                title: "Your consent first",
                text: "No one else joins your care without you saying yes.",
              },
              {
                icon: "SHIELD",
                title: "Only what's needed",
                text: "Colleagues hear only what helps them help you.",
              },
              {
                icon: "HEART",
                title: "Your choice of psychiatrist",
                text: "Keep your own if you have one. Dr. Desai can work alongside them.",
              },
            ]}
          />
        </div>
      </section>

      <section className="sec g">
        <div className="wrap">
          <SectionHead
            eyebrow="05 · Where you'll meet us"
            title={
              <>
                A calm room on Gulmohar <em>Road</em>.
              </>
            }
            lead="Inside Dr. Navalkar's Orthocare & Multi-speciality Clinic building, room C-2, Shimpoli, Borivali West."
          />
          <PhotoDuo
            items={[
              {
                img: "clinic/clinic-room",
                alt: "The consultation room",
                icon: "PERSON",
                caption: "The consultation room",
              },
              {
                img: "clinic/clinic-waiting",
                alt: "The waiting area and reception",
                icon: "CLOCK",
                caption: "The waiting area",
              },
            ]}
          />
        </div>
      </section>

      <section className="sec g" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <FaqSplit
            eyebrow="06 · Questions"
            title={
              <>
                About the <em>team</em>.
              </>
            }
            reviewer={false}
            faqs={[
              {
                q: "Who will I see if I book a session?",
                a: (
                  <>
                    Unless you ask for someone else, your sessions are with Dr.
                    Mithila Desai. If another team member would suit you better,
                    for example a psychiatrist to talk about medicine, she will
                    explain why and ask for your consent first. <Confirm />
                  </>
                ),
              },
              {
                q: "Can I see the psychiatrist directly?",
                a: (
                  <>
                    Please ask when you book. <Confirm>yes or no, and how</Confirm>
                  </>
                ),
              },
              {
                q: "Can I keep my own psychiatrist?",
                a: "Yes. You choose. With your consent, Dr. Desai can work alongside them.",
              },
            ]}
          />
          <EndBand
            eyebrow="Start with Dr. Desai"
            title={
              <>
                One first conversation, then the right <em>support</em>.
              </>
            }
            text="In person on Gulmohar Road, Borivali West, or online."
            img="dr-mithila-desai/dr-door"
            imgAlt="Dr. Desai welcoming you at her door"
            imgPos="50% 20%"
            primary={{ href: "/contact/#book", label: "Book a session" }}
            ghost={{ href: "/plan-your-visit/", label: "Plan your first session" }}
          />
        </div>
      </section>
    </main>
  );
}
