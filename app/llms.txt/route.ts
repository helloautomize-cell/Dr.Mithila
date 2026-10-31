import { loadContent } from "@/lib/content";
import { LIB_BASE, TOPICS, visibleGuides } from "@/lib/health-library";

const BASE = "https://www.thementalhealth.in";

const SERVICES = [
  "/individual-therapy/",
  "/child-and-teen-therapy/",
  "/couples-counselling/",
  "/family-counselling/",
  "/online-therapy/",
  "/online-therapy/indians-abroad/",
  "/psychological-assessment/",
  "/psychological-assessment/adhd-learning-neurodiversity/",
  "/career-guidance/",
  "/workplace-wellbeing/",
  "/schools-and-colleges/",
];

const CONCERNS = [
  "/anxiety/",
  "/depression/",
  "/ocd/",
  "/stress-and-burnout/",
  "/trauma/",
  "/self-esteem-and-body-image/",
  "/grief-and-loss/",
  "/addiction-and-habits/",
  "/self-harm-and-suicidal-thoughts/",
  "/sleep-problems/",
  "/lgbtqia-affirmative-counselling/",
];

const PRACTICE = [
  "/about/",
  "/dr-mithila-desai/",
  "/our-team/",
  "/services/",
  "/plan-your-visit/",
  "/contact/",
  "/faqs/",
  "/get-help-now/",
];

const LEGAL = [
  "/privacy-policy/",
  "/terms-of-use/",
  "/disclaimer/",
  "/editorial-policy/",
  "/client-rights/",
  "/appointments-cancellation-refund/",
  "/accessibility/",
];

function trim(s: string, n: number): string {
  return s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s;
}

export function GET() {
  const pages = loadContent();
  const link = (u: string) => {
    const p = pages.get(u);
    const label = (p?.title || u).split("|")[0].trim();
    const desc = p?.description ? `: ${trim(p.description, 140)}` : "";
    return `- [${label}](${BASE}${u})${desc}`;
  };

  const guides = visibleGuides().map(
    (g) => `- [${g.title}](${BASE}${LIB_BASE}${g.slug}/)`,
  );
  const topics = TOPICS.map(
    (t) => `- [${t.label} guides](${BASE}${LIB_BASE}topic/${t.slug}/)`,
  );

  const md = `# The Mental Health

> Talking therapy and psychological assessment with Dr. Mithila Desai, PhD,
> clinical psychologist in Borivali West, Mumbai. In person and online,
> including online sessions for Indians living abroad.

The Mental Health is a psychology practice led by Dr. Mithila Desai, a
clinical psychologist practising since 1989. Sessions are by appointment,
in person in Borivali West or by video. In an emergency call 112, or
Tele-MANAS 14416 (free, 24 hours) — this site is not a crisis service.

## Services

${SERVICES.map(link).join("\n")}

## Concerns we help with

${CONCERNS.map(link).join("\n")}

## The practice

${PRACTICE.map(link).join("\n")}

## Health Library

- [Health Library index](${BASE}${LIB_BASE}) — plain-language guides written
  or reviewed by Dr. Desai
${topics.join("\n")}
${guides.join("\n")}

## Policies

${LEGAL.map(link).join("\n")}
`;

  return new Response(md, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
}
