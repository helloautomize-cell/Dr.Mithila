"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { site, crisis } from "@/lib/site-config";
import { Icon } from "@/lib/icons";
import { bookSession, type BookingState } from "@/lib/actions/booking";

const WHO = [
  "Myself",
  "My child under 12",
  "My teenager 12 to 17",
  "My partner and me",
  "My family",
  "An older family member",
];

const MEET = ["In person in Borivali", "Online", "No preference"];

const HELP = [
  "Individual therapy",
  "Child and teen therapy",
  "Couples counselling",
  "Family counselling",
  "Online therapy",
  "Psychological assessment",
  "Career guidance",
  "Workplace wellbeing",
  "Schools and colleges",
  "Something else / not sure yet",
];

const INITIAL: BookingState = { status: "idle", errors: {}, values: {} };
const CHILD_OR_TEEN = new Set([WHO[1], WHO[2]]);
const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

/* Turnstile widget mounts only when a site key is configured. */
function TurnstileSlot() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!TURNSTILE_KEY || !ref.current) return;
    const render = () =>
      (
        window as unknown as {
          turnstile?: { render: (el: HTMLElement, o: object) => void };
        }
      ).turnstile?.render(ref.current!, { sitekey: TURNSTILE_KEY });
    const s = document.getElementById("cf-ts") as HTMLScriptElement | null;
    if (s) {
      if ((window as unknown as { turnstile?: unknown }).turnstile) render();
      else s.addEventListener("load", render, { once: true });
    } else {
      const el = document.createElement("script");
      el.id = "cf-ts";
      el.async = true;
      el.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      el.onload = render;
      document.head.appendChild(el);
    }
  }, []);
  if (!TURNSTILE_KEY) return null;
  return <div ref={ref} style={{ marginTop: 22 }} />;
}

export function BookingForm() {
  const [state, action, pending] = useActionState(bookSession, INITIAL);
  const v = state.values;
  const err = state.errors;

  const [who, setWho] = useState(v.who || "Myself");
  const [age, setAge] = useState(v.age || "");
  const under18 = CHILD_OR_TEEN.has(who) || (age !== "" && Number(age) < 18);

  const startedRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (startedRef.current)
      startedRef.current.value = String(Date.now());
  }, []);

  const errRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (state.status === "error") errRef.current?.focus();
  }, [state]);

  const msg = (id: string) =>
    err[id] ? (
      <small className="fmsg" id={`bf-${id}-err`}>
        {err[id]}
      </small>
    ) : null;
  const inv = (id: string) => (err[id] ? { "aria-invalid": true } : {});

  return (
    <form id="book" action={action} data-u18={under18 || undefined} noValidate>
      <h3>Book a session</h3>
      <p className="muted" style={{ margin: 0 }}>
        Fill this in and we reply during working hours. Prefer not to type?{" "}
        Call <a href={`tel:${site.phoneTel}`}>+91 {site.phoneDisplay}</a> or{" "}
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener"
        >
          WhatsApp us
        </a>
        .
      </p>

      {state.status === "error" ? (
        <div className="ferr" role="alert" tabIndex={-1} ref={errRef}>
          <b>Please check the form</b>
          <ul>
            {Object.entries(err).map(([k, m]) => (
              <li key={k}>{m}</li>
            ))}
          </ul>
          <p className="falt">
            Or skip the form: call{" "}
            <a href={`tel:${site.phoneTel}`}>+91 {site.phoneDisplay}</a> or{" "}
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener"
            >
              WhatsApp us
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="started" ref={startedRef} />

      <label htmlFor="bf-name">Your name</label>
      <input
        id="bf-name"
        name="name"
        autoComplete="name"
        required
        defaultValue={v.name}
        aria-describedby={err.name ? "bf-name-err" : undefined}
        {...inv("name")}
      />
      {msg("name")}

      <label htmlFor="bf-mobile">Mobile number</label>
      <input
        id="bf-mobile"
        name="mobile"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        defaultValue={v.mobile}
        aria-describedby={err.mobile ? "bf-mobile-err" : undefined}
        {...inv("mobile")}
      />
      {msg("mobile")}

      <label htmlFor="bf-email">Email (optional)</label>
      <input
        id="bf-email"
        name="email"
        type="email"
        autoComplete="email"
        defaultValue={v.email}
        aria-describedby={err.email ? "bf-email-err" : undefined}
        {...inv("email")}
      />
      {msg("email")}

      <span className="flab" id="bf-who-lab">
        Who is the session for?
      </span>
      <div className="ch" role="radiogroup" aria-labelledby="bf-who-lab">
        {WHO.map((w) => (
          <label key={w}>
            <input
              type="radio"
              name="who"
              value={w}
              checked={who === w}
              onChange={() => setWho(w)}
            />
            <span>{w}</span>
          </label>
        ))}
      </div>

      <label htmlFor="bf-age">Age of the person the session is for (years)</label>
      <input
        id="bf-age"
        name="age"
        inputMode="numeric"
        pattern="[0-9]{1,3}"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        aria-describedby={err.age ? "bf-age-err" : undefined}
        {...inv("age")}
      />
      {msg("age")}

      <div className="guardian">
        <p className="muted" style={{ margin: "18px 0 4px" }}>
          For anyone under 18, a parent or guardian books the session.
        </p>
        <label htmlFor="bf-guardian">Parent or guardian name</label>
        <input
          id="bf-guardian"
          name="guardian"
          autoComplete="off"
          defaultValue={v.guardian}
          required={under18}
          aria-describedby={
            err.guardian ? "bf-guardian-err" : undefined
          }
          {...inv("guardian")}
        />
        {msg("guardian")}
        <label className="chk">
          <input
            type="checkbox"
            name="guardian-consent"
            defaultChecked={false}
            {...inv("guardian-consent")}
          />
          <span>
            I am the parent or legal guardian of this young person and I agree
            to The Mental Health using these details to arrange their
            appointment.
          </span>
        </label>
        {msg("guardian-consent")}
      </div>

      <label htmlFor="bf-help">What would you like help with? (optional)</label>
      <select id="bf-help" name="help" defaultValue={v.help ?? ""}>
        <option value="">Choose one</option>
        {HELP.map((h) => (
          <option key={h}>{h}</option>
        ))}
      </select>

      <span className="flab">How would you like to meet?</span>
      <div className="ch" role="radiogroup" aria-label="How would you like to meet">
        {MEET.map((m, i) => (
          <label key={m}>
            <input
              type="radio"
              name="meet"
              value={m}
              defaultChecked={v.meet ? v.meet === m : i === 0}
            />
            <span>{m}</span>
          </label>
        ))}
      </div>

      <label htmlFor="bf-when">Preferred days or times (optional)</label>
      <input
        id="bf-when"
        name="when"
        placeholder="For example, weekday evenings"
        defaultValue={v.when}
      />

      <label htmlFor="bf-city">City or country (optional)</label>
      <input
        id="bf-city"
        name="city"
        autoComplete="address-level2"
        defaultValue={v.city}
      />

      <label className="chk">
        <input
          type="checkbox"
          name="consent"
          required
          {...inv("consent")}
        />
        <span>
          I agree that The Mental Health may use these details to contact me
          about my appointment, as explained in the{" "}
          <Link href="/privacy-policy/">Privacy Policy</Link>.
        </span>
      </label>
      {msg("consent")}

      <TurnstileSlot />

      <button className="btn" type="submit" disabled={pending}>
        <span className="i">
          <Icon name="ARR" />
        </span>
        <span className="t">{pending ? "Sending…" : "Send request"}</span>
      </button>

      <p className="note" style={{ marginTop: 18 }}>
        Please do not share details of your concerns here. You can talk about
        them with Dr. Desai in your session. If you are in danger, call 112 or
        Tele-MANAS {crisis.telemanas}.
      </p>
    </form>
  );
}
