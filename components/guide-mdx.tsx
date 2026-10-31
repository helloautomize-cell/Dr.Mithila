import { Icon, type IconName } from "@/lib/icons";
import { TMHImage } from "@/components/tmh-image";
import { Confirm } from "@/components/confirm";

/*
 * Components allowed inside guide .mdx bodies (schema section 4).
 * Rendered server-side; scroll effects (.on, .in2) come from GuideScrollFx.
 */

export function FeelGrid({ body, mind }: { body: string[]; mind: string[] }) {
  return (
    <div className="afeel">
      <div className="rv">
        <h3>
          <span className="xi">
            <Icon name="HEART" />
          </span>
          In your body
        </h3>
        <ul>
          {body.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
      <div className="rv">
        <h3>
          <span className="xi">
            <Icon name="MIND" />
          </span>
          In your mind
        </h3>
        <ul>
          {mind.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Warn({ label, text }: { label?: string; text: string }) {
  return (
    <div className="awarn">
      <Icon name="PILL" />
      <span>
        {label ? <b>{label} </b> : null}
        {text}
      </span>
    </div>
  );
}

export function Loop({
  title,
  steps,
  note,
}: {
  title: string;
  steps: { t: string; d: string }[];
  note?: string;
}) {
  return (
    <div className="acyc" id="acyc">
      <i className="tree" aria-hidden="true" />
      <small>{title}</small>
      <ol>
        {steps.map((s) => (
          <li key={s.t}>
            <b>{s.t}</b>
            {s.d}
          </li>
        ))}
      </ol>
      {note ? (
        <p className="back">
          <Icon name="LOOP" /> {note}
        </p>
      ) : null}
    </div>
  );
}

export function DoList({
  items,
  breathe,
}: {
  items: { icon: string; t: string; d: string }[];
  breathe?: boolean;
}) {
  return (
    <ol className="ado">
      {items.map((s, i) => (
        <li key={s.t}>
          <span className={`xi${breathe && i === 0 ? " bre" : ""}`}>
            <Icon name={s.icon as IconName} />
          </span>
          <span>
            <b>{s.t}</b>
            {s.d}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function Steps({
  items,
}: {
  items: { icon: string; t: string; d: string }[];
}) {
  return (
    <div className="asteps" id="asteps">
      {items.map((s, i) => (
        <div key={s.t}>
          <span className="xi">
            <Icon name={s.icon as IconName} />
          </span>
          <div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Global copy blocks (site-plan section 4) — never retyped in a guide. */
export function Approach() {
  return (
    <div className="aline">
      <Icon name="COMPASS" />
      <span>
        Dr. Desai decides how to work with you after she has understood your
        concerns, your history and your goals. She draws on established
        talking therapies such as <Confirm>approaches she uses</Confirm>, and
        explains each step as you go.
      </span>
    </div>
  );
}

export function Medicine() {
  return (
    <div className="aline">
      <Icon name="PILL" />
      <span>
        Psychologists do not prescribe medicine. Talk therapy helps many
        people on its own. When medicine may also help, Dr. Desai will tell
        you and suggest a psychiatrist, and with your consent she can work
        alongside them. Please do not stop or change any prescribed medicine
        without speaking to the doctor who prescribed it.
      </span>
    </div>
  );
}

export function Confidentiality() {
  return (
    <div className="aline">
      <Icon name="LOCK" />
      <span>
        What you share in sessions is confidential. There are a few important
        limits: if someone is at risk of harming themselves or others, or if a
        child or vulnerable adult may be unsafe, the law and professional
        ethics may require sharing information to keep people safe. Wherever
        possible, Dr. Desai would discuss this with you first. She can explain
        confidentiality in more detail in your first session.
      </span>
    </div>
  );
}

export function AssessmentLine() {
  return (
    <div className="aline">
      <Icon name="CLIP" />
      <span>
        Before therapy begins, Dr. Desai takes time to understand your
        concerns, history and goals, so the plan that follows fits you rather
        than a template. Where useful, she may also suggest a{" "}
        <a className="in" href="/psychological-assessment/">
          psychological assessment
        </a>{" "}
        for a clearer picture.
      </span>
    </div>
  );
}

export function MidCta() {
  return (
    <div className="amid rv">
      <TMHImage
        name="dr-mithila-desai/dr-online"
        alt="Dr. Desai in an online session"
        sizes="(min-width: 560px) 150px, 100vw"
      />
      <div>
        <b>Panic is something you can work on.</b>
        <p>Meet Dr. Desai in Borivali West, or online from home.</p>
        <a className="btn" href="/contact/#book">
          <span className="i">
            <Icon name="CAL" />
          </span>
          <span className="t">Book a session</span>
        </a>
      </div>
    </div>
  );
}

export function Crisis() {
  return (
    <div className="acris">
      <h3>
        <Icon name="TEL" /> If you are in danger right now
      </h3>
      <p>
        If you have hurt yourself, are thinking of ending your life, or feel
        you may act on thoughts of harming yourself or someone else, please
        do not wait for an appointment. Call <b>112</b>, go to the nearest
        hospital emergency department, or call <b>Tele-MANAS on 14416</b> or
        1-800-891-4416. Tele-MANAS is the Government of India&apos;s free
        mental health helpline, open 24 hours, in many Indian languages. The
        Mental Health is not an emergency service and cannot respond to
        messages at all hours.
      </p>
      <div className="nums2">
        <a href="tel:14416">
          <Icon name="TEL" /> Tele-MANAS 14416
        </a>
        <a className="o" href="tel:112">
          <Icon name="TEL" /> Emergency 112
        </a>
      </div>
    </div>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>
            {f.q}
            <i />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
