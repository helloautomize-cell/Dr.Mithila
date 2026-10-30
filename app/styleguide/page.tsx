import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { BookButton } from "@/components/book-button";
import { GhostButton } from "@/components/ghost-button";
import { WordReveal } from "@/components/word-reveal";
import { CharReveal } from "@/components/char-reveal";
import { CredentialPanel } from "@/components/credential-panel";
import { OrbitExplorer } from "@/components/orbit-explorer";
import { PhotoCollage35 } from "@/components/photo-collage-35";
import { WaterfallTimeline } from "@/components/waterfall-timeline";
import { AudiencePicker } from "@/components/audience-picker";
import { JourneyScroller } from "@/components/journey-scroller";
import { TeamGrid } from "@/components/team-grid";
import { AwardCard } from "@/components/award-card";
import { ServiceRow } from "@/components/service-row";
import { MapIllustration } from "@/components/map-illustration";
import { HelpCallout } from "@/components/help-callout";
import {
  GlancePanel,
  SignsBento,
  PanicWave,
  TryToday,
  RelatedCards,
  EndBand,
} from "@/components/v11";
import { TherapyPath, PathPhoto } from "@/components/v11-live";
import { TREATMENT_DATA } from "@/lib/treatment";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { Confirm } from "@/components/confirm";
import { Icon, IconTile, iconNames } from "@/lib/icons";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const SWATCHES: [string, string, string][] = [
  ["Walnut", "--walnut", "#723E22"],
  ["Walnut 500", "--walnut-500", "#5C3119"],
  ["Espresso", "--espresso", "#2A1D17"],
  ["Espresso 2", "--espresso-2", "#33241C"],
  ["Clay 100", "--clay-100", "#F3EBE3"],
  ["Paper", "--paper", "#FAF7F2"],
  ["Ink", "--ink", "#241A15"],
  ["Ink 2", "--ink-2", "#66564C"],
  ["Line", "--line", "#E7DCD1"],
  ["Honey", "--honey", "#D9AE84"],
  ["Sage", "--sage", "#5E6E57"],
  ["Alert", "--alert", "#B3261E"],
  ["Alert 50", "--alert-50", "#FBEFEE"],
  ["On dark", "--on-dark", "#FAF7F2"],
  ["On dark 2", "--on-dark-2", "#CDBBAE"],
];

const CONTRAST: [string, string, string][] = [
  ["Ink on paper", "15.9 : 1", "AAA"],
  ["Ink on white", "17.0 : 1", "AAA"],
  ["Ink-2 on paper", "6.5 : 1", "AA"],
  ["Ink-2 on white", "7.0 : 1", "AA"],
  ["Walnut on paper", "8.1 : 1", "AAA"],
  ["Walnut on white", "8.7 : 1", "AAA"],
  ["Alert on alert-50", "5.8 : 1", "AA"],
  ["Honey on espresso (accents only)", "8.0 : 1", "AAA"],
  ["On-dark on espresso", "15.3 : 1", "AAA"],
  ["On-dark-2 on espresso", "8.8 : 1", "AAA"],
  ["Sage on paper (dots only)", "5.1 : 1", "AA"],
  ["White on walnut", "8.7 : 1", "AAA"],
  ["White on espresso", "16.3 : 1", "AAA"],
  ["Confirm ink on confirm bg", "8.2 : 1", "AAA"],
];

const MILESTONES = [
  {
    era: "1980s",
    title: "Choosing psychology",
    children: (
      <>
        At a time when mental health was rarely spoken about at home, she
        trained as a clinical psychologist in Mumbai. <Confirm />
      </>
    ),
  },
  {
    era: "1989",
    title: "Opening a practice",
    children: (
      <>
        She began seeing clients in Mumbai, with one belief that still shapes
        every session: people heal when they feel heard. <Confirm>year</Confirm>
      </>
    ),
  },
  {
    era: "Over the years",
    title: "Schools, families and workplaces",
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

function Label({ children }: { children: string }) {
  return (
    <span className="sg-lab">
      <b>{children.split(" · ")[0]}</b>
      {children.includes(" · ") ? ` · ${children.split(" · ")[1]}` : ""}
    </span>
  );
}

export default function StyleguidePage() {
  return (
    <>
      <main className="g">
        <div className="wrap" style={{ padding: "clamp(50px,7vw,90px) 0 0" }}>
          <Eyebrow>The Mental Health · design system</Eyebrow>
          <h1
            style={{
              fontSize: "clamp(40px,6vw,84px)",
              lineHeight: 1,
              letterSpacing: "-0.045em",
              margin: "22px 0",
              maxWidth: "14ch",
            }}
          >
            Component <em>styleguide</em>.
          </h1>
          <p className="lead">
            Every building block of the site, shown with real copy. Yellow{" "}
            <Confirm /> chips mark facts Dr. Desai still has to approve. This
            page is noindexed and never ships to production.
          </p>
        </div>

        {/* ---------- Type ---------- */}
        <section className="sg-sec wrap">
          <Label>
            Type · Figtree, Instrument Serif italic accent, Noto Sans Devanagari
          </Label>
          <div className="demo-band">
            <p className="muted" style={{ fontSize: 13 }}>
              Hero H1 · clamp to 104px · -0.045em · regular 400 with one serif
              italic accent word
            </p>
            <h1
              style={{
                fontSize: "clamp(46px,7.2vw,104px)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                margin: "12px 0 30px",
              }}
            >
              Healing begins when you feel <em>heard</em>.
            </h1>
            <p className="muted" style={{ fontSize: 13 }}>
              H2 · clamp(34px, 4.6vw, 60px)
            </p>
            <h2 className="h2" style={{ margin: "12px 0 30px" }}>
              A quiet place to be <em>heard</em>.
            </h2>
            <p className="muted" style={{ fontSize: 13 }}>
              Lead · clamp(17px, 1.5vw, 20px) / 1.6 ink-2
            </p>
            <p className="lead" style={{ margin: "12px 0 30px" }}>
              A calm, private space to talk with Dr. Mithila Desai, a clinical
              psychologist who has been listening to Mumbai for 35 years.
            </p>
            <p className="muted" style={{ fontSize: 13 }}>
              Body · 17px / 1.65 minimum
            </p>
            <p style={{ margin: "12px 0 30px", maxWidth: "60ch" }}>
              What you share stays between you and Dr. Desai. The only
              exceptions are when someone&apos;s life or safety is at serious
              risk, when a child may be at risk of harm, or when the law
              requires it.
            </p>
            <p className="muted" style={{ fontSize: 13 }}>
              Eyebrow · 12px · 600 · uppercase · .18em
            </p>
            <div
              style={{
                margin: "12px 0 30px",
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <Eyebrow>The Mental Health · Borivali West</Eyebrow>
              <Eyebrow>02 · Her story</Eyebrow>
            </div>
            <p className="muted" style={{ fontSize: 13 }}>
              Devanagari · Noto Sans Devanagari 500/600, for names and Marathi
              or Hindi lines
            </p>
            <p
              className="deva"
              style={{ margin: "12px 0 0", fontSize: "clamp(24px,3vw,40px)" }}
            >
              मानसिक आरोग्य · डॉ. मिथिला देसाई
            </p>
          </div>
        </section>

        {/* ---------- Colour ---------- */}
        <section className="sg-sec wrap">
          <Label>Colour · tokens and measured contrast</Label>
          <div className="sgsw">
            {SWATCHES.map(([label, token, hex]) => (
              <div key={token}>
                <i style={{ background: hex }} />
                <p>
                  <b>{label}</b>
                  <code>
                    {token}
                    <br />
                    {hex}
                  </code>
                </p>
              </div>
            ))}
          </div>
          <table className="contrast" style={{ marginTop: 24 }}>
            <thead>
              <tr>
                <th>Pair</th>
                <th>Ratio (measured)</th>
                <th>WCAG</th>
              </tr>
            </thead>
            <tbody>
              {CONTRAST.map(([pair, ratio, grade]) => (
                <tr key={pair}>
                  <td>{pair}</td>
                  <td>{ratio}</td>
                  <td className="pass">{grade} pass</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ---------- Buttons ---------- */}
        <section className="sg-sec wrap">
          <Label>Actions · BookButton, GhostButton, inline link</Label>
          <div className="demo-band" style={{ display: "grid", gap: 22 }}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <BookButton />
              <BookButton
                href="/dr-mithila-desai/"
                label="Book with Dr. Desai"
              />
              <GhostButton href={`tel:${site.phoneTel}`} icon="TEL">
                {site.phoneDisplay}
              </GhostButton>
              <GhostButton href="#whatsapp" icon="WA">
                WhatsApp
              </GhostButton>
            </div>
            <p>
              <Link className="link" href="/dr-mithila-desai/">
                View profile <Icon name="ARR" />
              </Link>
            </p>
          </div>
          <div className="dark dark-band" style={{ marginTop: 18 }}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <BookButton />
              <GhostButton href="#whatsapp" icon="WA">
                WhatsApp
              </GhostButton>
            </div>
          </div>
        </section>

        {/* ---------- Icons ---------- */}
        <section className="sg-sec wrap">
          <Label>Icons · 35 line icons, IconTile sizes and states</Label>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: 26,
            }}
          >
            <IconTile name="AWARD" size="sm" />
            <IconTile name="MIND" />
            <IconTile name="RINGS" size="lg" />
            <IconTile name="COMPASS" size="xl" />
            <IconTile name="STAR" />
            <IconTile name="WA" size="lg" solid />
            <Icon name="ARR" />
            <Icon name="TEL" />
          </div>
          <div className="demo-band">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(96px,1fr))",
                gap: 10,
              }}
            >
              {iconNames.map((n) => (
                <div
                  key={n}
                  style={{
                    display: "grid",
                    justifyItems: "center",
                    gap: 8,
                    padding: "14px 6px",
                    border: "1px solid var(--line)",
                    borderRadius: 14,
                    fontSize: 11,
                    color: "var(--ink-2)",
                  }}
                >
                  <IconTile name={n} size="sm" />
                  {n}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Reveals ---------- */}
        <section className="sg-sec wrap">
          <Label>Motion · WordReveal and CharReveal</Label>
          <div className="demo-band">
            <p className="muted" style={{ fontSize: 13 }}>
              WordReveal · words rise and unblur on load, 70ms stagger
            </p>
            <h1
              style={{
                fontSize: "clamp(40px,6vw,84px)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                margin: "14px 0 40px",
              }}
            >
              <WordReveal>
                Healing begins when you feel <em>heard</em>.
              </WordReveal>
            </h1>
            <p className="muted" style={{ fontSize: 13 }}>
              CharReveal · characters light up as you scroll (scroll to see)
            </p>
            <h2 className="h2" style={{ marginTop: 14, maxWidth: "18ch" }}>
              <CharReveal>
                Three and a half decades of <em>listening</em>.
              </CharReveal>
            </h2>
          </div>
        </section>

        {/* ---------- CredentialPanel ---------- */}
        <section className="sg-sec wrap">
          <Label>Proof · CredentialPanel</Label>
          <CredentialPanel />
        </section>

        {/* ---------- OrbitExplorer ---------- */}
        <section className="sg-sec wrap">
          <Label>Explorer · OrbitExplorer, six nodes, auto-cycle 4s</Label>
          <div className="orb" style={{ textAlign: "center" }}>
            <Eyebrow>Understanding your mind</Eyebrow>
            <h2 className="h2" style={{ marginTop: 22 }}>
              Six things people bring to <em>the room</em>.
            </h2>
            <p className="lead" style={{ margin: "16px auto 0" }}>
              Tap any one to see how Dr. Desai works with it.
            </p>
          </div>
          <OrbitExplorer />
        </section>

        {/* ---------- PhotoCollage35 ---------- */}
        <section className="sg-sec wrap">
          <Label>Collage · PhotoCollage35 with rotating seal</Label>
          <div className="wrap big35" style={{ padding: 0 }}>
            <PhotoCollage35 />
            <div>
              <Eyebrow>Since 1989</Eyebrow>
              <p className="state" style={{ marginTop: 22 }}>
                Thirty-five years of sitting with people in <em>Mumbai</em>,
                through exams, marriages, losses and new beginnings.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- WaterfallTimeline ---------- */}
        <section className="sg-sec wrap">
          <Label>Timeline · WaterfallTimeline, scroll-driven flow</Label>
          <WaterfallTimeline items={MILESTONES} />
        </section>

        {/* ---------- AudiencePicker ---------- */}
        <section className="sg-sec wrap">
          <Label>Picker · AudiencePicker, five tabs and a swapping panel</Label>
          <AudiencePicker />
        </section>

        {/* ---------- ServiceRow ---------- */}
        <section className="sg-sec wrap">
          <Label>Rows · ServiceRow inside .exp.sv</Label>
          <div className="exp sv">
            <ServiceRow n={1} icon="PERSON" title="Individual therapy" href="#">
              One-to-one sessions for adults, for worry, low mood, stress or a
              hard season.
            </ServiceRow>
            <ServiceRow n={5} icon="MIND" title="Anxiety and panic" href="#">
              Worry that won&apos;t switch off, and panic attacks.
            </ServiceRow>
            <ServiceRow n={7} icon="LOOP" title="OCD" href="#">
              Unwanted thoughts and repeated checking or cleaning.
            </ServiceRow>
          </div>
        </section>

        {/* ---------- AwardCard ---------- */}
        <section className="sg-sec wrap">
          <Label>Recognition · AwardCard pair</Label>
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
        </section>

        {/* ---------- TeamGrid ---------- */}
        <section className="sg-sec wrap">
          <Label>Team · TeamGrid, lead card spans two rows</Label>
          <TeamGrid />
        </section>

        {/* ---------- MapIllustration ---------- */}
        <section className="sg-sec wrap">
          <Label>Visit · MapIllustration, live map loads on tap</Label>
          <div className="vb">
            <MapIllustration />
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
                  <b>Hours</b>By appointment <Confirm>days and hours</Confirm>
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
            </div>
          </div>
        </section>

        {/* ---------- v11: GlancePanel ---------- */}
        <section className="sg-sec wrap">
          <Label>v11 · GlancePanel, five-cell at-a-glance strip</Label>
        </section>
      </main>
      <GlancePanel
        cells={[
          { icon: "MIND", label: "What it is", text: "Worry that is hard to control" },
          { icon: "FAMILY", label: "How common", text: "Among the most common concerns" },
          { icon: "LOOP", label: "Common types", text: "Generalised, panic, social" },
          { icon: "COMPASS", label: "How therapy helps", text: "Understanding the cycle" },
          { icon: "LEAF", label: "Here", text: "Skills for daily life" },
        ]}
      />
      <main className="g">
        {/* ---------- v11: SignsBento ---------- */}
        <section className="sg-sec wrap">
          <Label>
            v11 · SignsBento, big card + two cards + wide dark strip
          </Label>
          <SignsBento {...TREATMENT_DATA["/anxiety/"].signs} />
        </section>
        {/* ---------- v11: PanicWave ---------- */}
        <section className="sg-sec wrap">
          <Label>v11 · PanicWave, dark explainer with animated wave</Label>
          <PanicWave
            eyebrow="02 · Panic attacks"
            title={
              <>
                A wave that rises, peaks and <em>passes</em>.
              </>
            }
            lead={TREATMENT_DATA["/anxiety/"].panic!.lead}
            note={TREATMENT_DATA["/anxiety/"].panic!.note}
          />
        </section>
        {/* ---------- v11: TherapyPath ---------- */}
        <section className="sg-sec wrap">
          <Label>v11 · TherapyPath, sticky photo + scroll-filled steps</Label>
          <TherapyPath
            sticky={
              <PathPhoto
                img="dr-mithila-desai/dr-armchair"
                alt="Dr. Mithila Desai listening in her therapy room"
                icon="EAR"
                caption="Every step is agreed with you, never rushed."
              />
            }
            steps={TREATMENT_DATA["/anxiety/"].help.steps}
          />
        </section>
        {/* ---------- v11: TryToday ---------- */}
        <section className="sg-sec wrap">
          <Label>v11 · TryToday, breathing card + four tool cards</Label>
          <TryToday tools={TREATMENT_DATA["/anxiety/"].try!.tools} />
        </section>
        {/* ---------- v11: RelatedCards + EndBand ---------- */}
        <section className="sg-sec wrap">
          <Label>v11 · RelatedCards row and EndBand</Label>
          <RelatedCards cards={TREATMENT_DATA["/anxiety/"].related.cards} />
          <EndBand
            eyebrow="Talk to Dr. Desai"
            title={
              <>
                You don&apos;t have to work it out <em>alone</em>.
              </>
            }
            text="In person on Gulmohar Road, Borivali West, or online."
            img="clinic/clinic-waiting"
            imgAlt="The calm waiting area of the practice"
            primary={{ href: "/contact/#book", label: "Book a session" }}
            ghost={{ href: "/plan-your-visit/", label: "Plan your first session" }}
          />
        </section>

        {/* ---------- HelpCallout ---------- */}
        <section className="sg-sec wrap">
          <Label>Safety · HelpCallout</Label>
          <HelpCallout />
        </section>
      </main>

      {/* ---------- JourneyScroller (full bleed, dark) ---------- */}
      <div className="g">
        <div className="wrap" style={{ paddingTop: "clamp(56px,7vw,90px)" }}>
          <Label>
            Journey · JourneyScroller, pins on desktop, list on mobile
          </Label>
        </div>
      </div>
      <JourneyScroller />

      {/* ---------- MobileActionBar in a phone frame ---------- */}
      <main className="g">
        <section className="sg-sec wrap" style={{ paddingBottom: 120 }}>
          <Label>
            Mobile · MobileActionBar in a phone frame, both variants
          </Label>
          <div
            style={{
              display: "flex",
              gap: 30,
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <div className="frame">
              <div className="fsc">
                <Eyebrow>Default</Eyebrow>
                <p className="muted" style={{ fontSize: 15 }}>
                  Book · Call · WhatsApp, on every page below 760px.
                </p>
              </div>
              <MobileActionBar />
            </div>
            <div className="frame">
              <div className="fsc">
                <Eyebrow>Crisis variant</Eyebrow>
                <p className="muted" style={{ fontSize: 15 }}>
                  On Get help now and the self-harm page, the call slot becomes
                  a red Call 14416.
                </p>
              </div>
              <MobileActionBar forceCrisis />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
