/*
 * scripts/build-content.mjs
 * Splits resources/docs/new-website-content.md into per-page markdown files
 * under resources/content/**.md with frontmatter (title, description, url,
 * template, icon, reviewer, lastReviewed, schema, related).
 * Run: node scripts/build-content.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(
  path.join(root, "resources/docs/new-website-content.md"),
  "utf8",
);

/* url / template / icon map per site-plan section 2 */
const PAGES = {
  1: ["/", "home", "HEART"],
  2: ["/about/", "default", "HEART"],
  3: ["/dr-mithila-desai/", "sidebar", "USER"],
  4: ["/services/", "default", "COMPASS"],
  5: ["/plan-your-visit/", "sidebar", "CAL"],
  6: ["/contact/", "sidebar", "CHAT"],
  7: ["/faqs/", "default", "CHAT"],
  8: ["/get-help-now/", "crisis", "HEART"],
  9: ["/health-library/", "default", "CLIP"],
  10: ["/thank-you/", "default", "TICK"],
  11: [null, "skip", ""],
  41: ["/our-team/", "default", "FAMILY"],
  12: ["/individual-therapy/", "sidebar", "PERSON"],
  13: ["/child-and-teen-therapy/", "sidebar", "CHILD"],
  14: ["/couples-counselling/", "sidebar", "RINGS"],
  15: ["/family-counselling/", "sidebar", "FAMILY"],
  16: ["/online-therapy/", "sidebar", "GLOBE"],
  17: ["/online-therapy/indians-abroad/", "sidebar", "GLOBE"],
  18: ["/anxiety/", "sidebar", "MIND"],
  19: ["/depression/", "sidebar", "CLOUD"],
  20: ["/ocd/", "sidebar", "LOOP"],
  21: ["/stress-and-burnout/", "sidebar", "FLAME"],
  22: ["/trauma/", "sidebar", "SHIELD"],
  23: ["/self-esteem-and-body-image/", "sidebar", "MIRROR"],
  24: ["/grief-and-loss/", "sidebar", "LEAF"],
  25: ["/addiction-and-habits/", "sidebar", "LOOP"],
  26: ["/self-harm-and-suicidal-thoughts/", "sidebar", "HEART"],
  27: ["/sleep-problems/", "sidebar", "MOON"],
  28: ["/lgbtqia-affirmative-counselling/", "sidebar", "HEART"],
  29: ["/psychological-assessment/", "sidebar", "CLIP"],
  30: ["/psychological-assessment/adhd-learning-neurodiversity/", "sidebar", "COMPASS"],
  31: ["/career-guidance/", "sidebar", "COMPASS"],
  32: ["/workplace-wellbeing/", "sidebar", "FAMILY"],
  33: ["/schools-and-colleges/", "sidebar", "CAP"],
  34: ["/privacy-policy/", "default", "LOCK"],
  35: ["/terms-of-use/", "default", "CLIP"],
  36: ["/disclaimer/", "default", "SHIELD"],
  37: ["/editorial-policy/", "default", "CLIP"],
  38: ["/client-rights/", "default", "SHIELD"],
  39: ["/appointments-cancellation-refund/", "default", "CAL"],
  40: ["/accessibility/", "default", "USER"],
};

const SCHEMA_FOR = (t, n) =>
  t === "sidebar"
    ? "MedicalWebPage"
    : n === 3
      ? "ProfilePage"
      : n === 6
        ? "ContactPage"
        : n === 41
          ? "AboutPage"
          : n === 8
            ? "WebPage"
            : "WebPage";

// global copy blocks from site-plan s4
const BLOCKS = {
  "{APPROACH}":
    "Dr. Desai decides how to work with you after she has understood your concerns, your history and your goals. She draws on established talking therapies such as [CONFIRM: approaches she uses, in plain words; sources mention CBT, REBT, mindfulness and acceptance-based work], and explains each step as you go.",
  "{CRISIS}":
    "> **If you are in danger right now.** If you have hurt yourself, are thinking of ending your life, or feel you may act on thoughts of harming yourself or someone else, please do not wait for an appointment. Call **112**, go to the nearest hospital emergency department, or call **Tele-MANAS on 14416** or 1-800-891-4416. Tele-MANAS is the Government of India's free mental health helpline, open 24 hours, in many Indian languages. The Mental Health is not an emergency service and cannot respond to messages at all hours.",
  "{MEDICINE}":
    "Psychologists do not prescribe medicine. Talk therapy helps many people on its own. When medicine may also help, Dr. Desai will tell you and suggest a psychiatrist, and with your consent she can work alongside them. Please do not stop or change any prescribed medicine without speaking to the doctor who prescribed it.",
  "{REVIEWER}":
    "> Clinically reviewed by **Dr. Mithila Desai**, PhD, clinical psychologist · Rehabilitation Council of India CRR No. [CONFIRM] · Last reviewed [CONFIRM: date]\n> This page gives general information about psychological care at The Mental Health. It is not a diagnosis and does not replace a session. Read our [editorial policy](/editorial-policy/).",
  "{CONFIDENTIALITY}":
    "What you say in a session stays private. The only exceptions are when someone's life or safety is at serious risk, when a child may be at risk of harm, or when the law requires disclosure. Dr. Desai will explain this at the first session.",
  "{ASSESSMENT}":
    "Dr. Desai chooses standardised assessments based on the question you need answered, and explains the results in plain words. Her reports help families, schools and individuals plan support. Official disability certificates are issued by government medical boards.",
};

/* `N. **Q?**\n   A` groups -> <details> FAQ block */
function faqsToDetails(md) {
  return md.replace(
    /(?:^|\n)((?: *\d+\. \*\*[^\n]+\n(?:   .+\n?)+)+)/g,
    (m, block) => {
      const items = [];
      const re = / *\d+\. \*\*(.+?)\*\*\s*\n((?:   .*\n?)+)/g;
      let mm;
      while ((mm = re.exec(block))) {
        const q = mm[1].replace(/\*\*/g, "").trim();
        const a = mm[2].replace(/^ {3}/gm, "").trim();
        items.push(
          `<details><summary>${q}<i></i></summary><p>${a}</p></details>`,
        );
      }
      if (!items.length) return m;
      return `\n<div class="faq">\n${items.join("\n")}\n</div>\n`;
    },
  );
}

function expandBlocks(md) {
  for (const [k, v] of Object.entries(BLOCKS)) md = md.split(k).join(v);
  return md;
}

function firstParagraph(md) {
  const p = md
    .split(/\n{2,}/)
    .map((s) => s.trim())
    .find((s) => s && !s.startsWith("#") && !s.startsWith(">") && !s.startsWith("<") && !s.startsWith("-") && !s.startsWith("|"));
  return (p ?? "").replace(/\[|\]|`|\*|\(.*?\)/g, "").slice(0, 158);
}

/* split the doc into page chunks */
const chunks = [];
const re = /^## Page (\d+) · (.+)$/gm;
let m, prev = null;
while ((m = re.exec(src))) {
  if (prev) chunks.push({ n: prev.n, title: prev.title, body: src.slice(prev.end, m.index) });
  prev = { n: +m[1], title: m[2].trim(), end: re.lastIndex };
}
if (prev) chunks.push({ n: prev.n, title: prev.title, body: src.slice(prev.end) });

let made = 0;
for (const { n, title, body } of chunks) {
  const conf = PAGES[n];
  if (!conf || !conf[0]) continue;
  const [url, template, icon] = conf;
  const end = body.search(/^# Part /m);
  let md = (end > -1 ? body.slice(0, end) : body).trim();
  md = expandBlocks(md);
  md = faqsToDetails(md);
  const description = firstParagraph(md);
  const slug = url.replace(/^\/|\/$/g, "");
  const file = slug || "home";

  const fm = [
    "---",
    `title: "${title.replace(/"/g, "'")}"`,
    `description: "${description.replace(/"/g, "'")}"`,
    `url: "${url}"`,
    `template: "${template}"`,
    `icon: "${icon}"`,
    `reviewer: "Dr. Mithila Desai, PhD"`,
    `lastReviewed: "CONFIRM"`,
    `schema: "${SCHEMA_FOR(template, n)}"`,
    'related: []',
    "---",
    "",
  ].join("\n");

  const out = path.join(root, "resources/content", `${file}.md`);
  mkdirSync(path.dirname(out), { recursive: true });
  writeFileSync(out, fm + md + "\n");
  made++;
}
console.log(`Wrote ${made} content files to resources/content/`);
