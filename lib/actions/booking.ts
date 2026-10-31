"use server";

import { redirect } from "next/navigation";
import { site } from "@/lib/site-config";

export type BookingState = {
  status: "idle" | "error";
  errors: Record<string, string>;
  values: Record<string, string>;
};

const FIELDS = [
  "name",
  "mobile",
  "email",
  "who",
  "age",
  "guardian",
  "help",
  "meet",
  "when",
  "city",
] as const;

const CHILD_OR_TEEN = new Set(["My child under 12", "My teenager 12 to 17"]);

function ist() {
  return new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
}

async function turnstileOk(fd: FormData): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // only enforced when keys exist
  const token = String(fd.get("cf-turnstile-response") ?? "");
  if (!token) return false;
  try {
    const r = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      },
    );
    return Boolean((await r.json()).success);
  } catch {
    return false;
  }
}

export async function bookSession(
  _prev: BookingState,
  fd: FormData,
): Promise<BookingState> {
  // Spam traps: honeypot field, and submissions under 3s when the client
  // rendered the timer field. Both silently "succeed" so bots learn nothing.
  if (String(fd.get("company") ?? "").trim() !== "") redirect("/thank-you/");
  const started = Number(fd.get("started"));
  if (Number.isFinite(started) && started > 0 && Date.now() - started < 3000)
    redirect("/thank-you/");

  const v: Record<string, string> = {};
  for (const f of FIELDS) v[f] = String(fd.get(f) ?? "").trim().slice(0, 400);

  const errors: Record<string, string> = {};
  if (!v.name) errors.name = "Please tell us your name.";
  if (!/^[0-9+()\-\s.]{7,20}$/.test(v.mobile))
    errors.mobile = "Please give a mobile number we can call or WhatsApp.";
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    errors.email = "Please check the email address.";
  if (v.age && !/^\d{1,3}$/.test(v.age))
    errors.age = "Age should be a number in years.";

  const under18 =
    CHILD_OR_TEEN.has(v.who) || (v.age !== "" && Number(v.age) < 18);
  if (under18) {
    if (!v.guardian)
      errors.guardian = "Please give the parent or guardian's name.";
    if (fd.get("guardian-consent") !== "on")
      errors["guardian-consent"] =
        "Please tick the guardian consent box for a young person.";
  }
  if (fd.get("consent") !== "on")
    errors.consent = "Please tick the consent box so we may reply.";

  if (Object.keys(errors).length)
    return { status: "error", errors, values: v };

  if (!(await turnstileOk(fd)))
    return {
      status: "error",
      errors: {
        form: "The spam check could not be completed. Please try again, or call or WhatsApp us.",
      },
      values: v,
    };

  const sentAt = ist();
  const lines = [
    "New booking request — The Mental Health website (/contact/#book)",
    `Sent: ${sentAt} IST`,
    "",
    `Name: ${v.name}`,
    `Mobile: ${v.mobile}`,
    v.email && `Email: ${v.email}`,
    `Session for: ${v.who || "not given"}`,
    v.age && `Age: ${v.age}`,
    v.guardian && `Parent/guardian: ${v.guardian}`,
    `Help with: ${v.help || "not given"}`,
    `Meet: ${v.meet || "not given"}`,
    v.when && `Preferred days/times: ${v.when}`,
    v.city && `City/country: ${v.city}`,
    "",
    `Consent: agreed that The Mental Health may use these details to contact them about the appointment (${sentAt} IST).`,
    "Call: tel:+918779651309 · WhatsApp: https://wa.me/" + site.whatsapp,
  ].filter(Boolean);

  const key = process.env.RESEND_API_KEY;
  if (key) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.RESEND_FROM ||
            "The Mental Health website <onboarding@resend.dev>",
          to: [process.env.RESEND_TO || site.email],
          subject: `Booking request: ${v.name}`,
          text: lines.join("\n"),
          ...(v.email ? { reply_to: v.email } : {}),
        }),
      });
      if (!r.ok) throw new Error(`Resend ${r.status}`);
    } catch {
      return {
        status: "error",
        errors: {
          form: "The request could not be sent just now. Please call or WhatsApp us instead.",
        },
        values: v,
      };
    }
  } else {
    console.warn(
      "[booking] RESEND_API_KEY is not set; request logged but not emailed:\n" +
        lines.join("\n"),
    );
  }

  redirect("/thank-you/");
}
