import Link from "next/link";
import {
  DarkBand,
  EndBand,
  FaqSplit,
  GlancePanel,
  InnerHero,
  PanicWave,
  RelatedCards,
  SectionHead,
  SignsBento,
  TryToday,
} from "@/components/v11";
import { OnThisPage, PathPhoto, TherapyPath } from "@/components/v11-live";
import { BookButton } from "@/components/book-button";
import type { TreatmentData } from "@/lib/treatment";

/* Treatment template (preview v11, anxiety as model):
   InnerHero, GlancePanel, OnThisPage, Signs, key explainer (PanicWave),
   TherapyPath, TryToday, FaqSplit, Related, EndBand. */
export function TreatmentPage({ d }: { d: TreatmentData }) {
  return (
    <main className={d.crisis ? "crisis" : undefined}>
      {d.crisis ? (
        <section className="g" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <div className="alertline" style={{ margin: 0 }}>
              <b>If you are thinking of harming yourself:</b> please don&apos;t
              wait for an appointment. Call Tele-MANAS{" "}
              <a href="tel:14416" style={{ color: "var(--alert)" }}>
                14416
              </a>{" "}
              or{" "}
              <a href="tel:112" style={{ color: "var(--alert)" }}>
                112
              </a>
              , free and open 24 hours.{" "}
              <Link href="/get-help-now/" style={{ color: "var(--alert)" }}>
                Get help now
              </Link>
            </div>
          </div>
        </section>
      ) : null}
      <InnerHero
        tag={d.tag}
        title={d.title}
        lead={d.lead}
        bookLabel={d.bookLabel}
        link={{ href: `#${d.nav[0].id}`, label: d.linkLabel }}
        trust={d.trust}
        photo={d.crisis ? undefined : d.photo}
        floats={d.crisis ? undefined : d.floats}
      />
      <GlancePanel cells={d.glance} />
      <OnThisPage items={d.nav} />

      <section className="xsec g" id="x-signs">
        <div className="wrap">
          <SectionHead
            eyebrow={d.signs.eyebrow}
            title={d.signs.title}
            lead={d.signs.lead}
          />
          <SignsBento
            big={d.signs.big}
            cards={d.signs.cards}
            wide={d.signs.wide}
          />
        </div>
      </section>

      {d.panic ? (
        <section className="xsec g" id="x-panic">
          <div className="wrap">
            <PanicWave
              eyebrow={d.panic.eyebrow}
              title={d.panic.title}
              lead={d.panic.lead}
              note={d.panic.note}
            />
          </div>
        </section>
      ) : null}
      {d.explainer ? (
        <section className="xsec g" id="x-key">
          <div className="wrap">
            <DarkBand
              eyebrow={d.explainer.eyebrow}
              title={d.explainer.title}
              lead={d.explainer.lead}
              points={d.explainer.points}
            />
          </div>
        </section>
      ) : null}

      <section className="xsec g" id="x-help">
        <div className="wrap">
          <SectionHead
            eyebrow={d.help.eyebrow}
            title={d.help.title}
            lead={d.help.lead}
          />
          <TherapyPath
            sticky={
              <PathPhoto
                img={d.help.photo.img}
                alt={d.help.photo.alt}
                pos={d.help.photo.pos}
                icon={d.help.photoIcon}
                caption={d.help.photoCaption}
              />
            }
            steps={d.help.steps}
          />
        </div>
      </section>

      {d.try ? (
        <section className="xsec g" id="x-try">
          <div className="wrap">
            <SectionHead
              eyebrow={d.try.eyebrow}
              title={d.try.title}
              lead={d.try.lead}
            />
            <TryToday tools={d.try.tools} />
          </div>
        </section>
      ) : null}

      <section className="xsec g" id="x-faq">
        <div className="wrap">
          <FaqSplit
            eyebrow={d.faq.eyebrow}
            title={d.faq.title}
            card={{
              img: d.faq.card.img,
              alt: d.faq.card.alt,
              title: d.faq.card.title,
              text: d.faq.card.text,
              cta: d.faq.card.bookLabel ? (
                <BookButton label={d.faq.card.bookLabel} />
              ) : undefined,
            }}
            faqs={d.faq.items}
            sources={d.faq.sources}
          />
        </div>
      </section>

      <section className="xsec g">
        <div className="wrap">
          <div className="xh" style={{ marginBottom: 30 }}>
            <div>
              <span className="eyebrow">Related</span>
              <h2
                className="h2"
                style={{ fontSize: "clamp(28px,3.4vw,44px)" }}
              >
                {d.related.title}
              </h2>
            </div>
          </div>
          <RelatedCards cards={d.related.cards} />
          <EndBand
            eyebrow={d.end.eyebrow}
            title={d.end.title}
            text={d.end.text}
            img={d.end.img}
            imgAlt={d.end.imgAlt}
            primary={{ href: "/contact/#book", label: "Book a session" }}
            ghost={{ href: "/plan-your-visit/", label: "Plan your first session" }}
            showCrisis
          />
        </div>
      </section>
    </main>
  );
}
