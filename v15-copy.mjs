import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOTS = ["app", "components", "lib", "resources"];
const SKIP = [/disclaimer/i, /terms-of-use/i, /privacy/i, /v15-copy\.mjs/];

const PAIRS = [
  // 1/10/31 top crisis bar + any "Not an emergency service. In danger? Call 112"
  ["Not an emergency service. In danger? Call 112", "Need urgent help? Call 112"],
  // 2 home why-choose
  ["Honest about medicine", "Works with your psychiatrist"],
  ["Dr. Desai is a psychologist and does not prescribe. If medicine may help, she will say so and work alongside your psychiatrist.",
   "Dr. Desai focuses on therapy and assessment. If medicine may also help, she will say so and work alongside your psychiatrist, so your care stays joined up."],
  // 3 awards
  ["Awards are not a promise of results. They reflect the care", "These awards reflect the care"],
  // 4 home FAQ
  ["Is Dr. Mithila Desai a psychiatrist?", "Is Dr. Mithila Desai a psychologist or a psychiatrist?"],
  ["No. Dr. Desai is a clinical psychologist with a PhD. She helps through talking therapy and psychological assessment and does not prescribe medicine. A psychiatrist is a medical doctor who can prescribe.",
   "Dr. Desai is a clinical psychologist with a PhD. Her care is talking therapy and psychological assessment. A psychiatrist is a medical doctor who prescribes medicine."],
  // 5 dr desai panel
  ["A psychologist, not a psychiatrist", "Therapy first, with care joined up"],
  ["Dr. Desai is not a medical doctor and does not prescribe medicine. When medicine may help, she suggests a psychiatrist and, with your consent, works alongside them.",
   "As a clinical psychologist, Dr. Desai helps through talking therapy and assessment. When medicine may also help, she suggests a psychiatrist and, with your consent, works alongside them."],
  // 6 dr desai FAQ
  ["She is not a medical doctor and does not prescribe medicine. Her training is in understanding thoughts, feelings and behaviour, and helping people through talking therapy and assessment.",
   "Her training is in understanding thoughts, feelings and behaviour, and helping people through talking therapy and assessment. When medicine is part of the plan, she works alongside a psychiatrist."],
  // 8 team
  ["Talking therapy and psychological assessment. They do not prescribe medicine.",
   "Talking therapy and psychological assessment, working alongside psychiatrists when medicine is needed."],
  // 9 get help now
  ["The Mental Health is not an emergency service. We may not see messages straight away.",
   "These helplines answer 24 hours a day. Messages to The Mental Health are answered during clinic hours."],
  // 11/29 medicine line
  ["Psychologists do not prescribe medicine. Talk therapy helps many people on its own.",
   "Talk therapy helps many people on its own."],
  // 12/27 crisis last sentence
  ["The Mental Health is not an emergency service and cannot respond to messages at all hours.",
   "Messages to The Mental Health are answered during clinic hours."],
  // 13/28 reviewer box
  ["It is not a diagnosis and does not replace a session.",
   "For advice about your own situation, book a session with Dr. Desai."],
  // 14 facts at a glance
  ["- Not offered: medicine, emergency or crisis care, hospital admission",
   "- Works alongside: your psychiatrist or paediatrician when medicine or a medical opinion may help"],
  // 15 fees
  ["We do not offer packages paid in advance", "Sessions are paid one at a time"],
  // 16 faqs psy vs psych
  ["Psychologists do not prescribe. Many people benefit from seeing one or both.",
   "When medicine is needed, the two often work together. Many people benefit from seeing one or both."],
  // 17 faqs medicine
  ["Not from us. Psychologists do not prescribe. Talk therapy helps many people on its own.",
   "Talk therapy helps many people on its own."],
  // 18 faqs crisis
  ["call Tele-MANAS on 14416 (free, 24 hours, many languages). We are not an emergency service.",
   "call Tele-MANAS on 14416 (free, 24 hours, many languages). These lines answer straight away."],
  // 19 individual therapy glance
  ["- Medicine: not prescribed here; we can work alongside your psychiatrist",
   "- Medicine: when it may help, we work alongside your psychiatrist"],
  // 20 online abroad crisis
  ["Call your local emergency number straight away, or go to the nearest hospital. We are not an emergency service and cannot send help to you.",
   "Call your local emergency number straight away, or go to the nearest hospital. Local emergency services can reach you fastest."],
  // 21 lgbtq glance
  ["- What we do not do: any attempt to change someone's orientation or gender identity",
   "- Affirming, always: your orientation and gender identity are respected as they are"],
  // 22 lgbtq position
  ["Conversion therapy is harmful, and we do not offer it in any form.",
   "Conversion therapy is harmful. Every session here is affirming."],
  // 24 entity summary
  ["Dr. Desai is a psychologist, not a medical doctor, and does not prescribe medicine. When medicine may help, she suggests a psychiatrist and can work alongside them with the client's consent.",
   "Dr. Desai's care is talking therapy and psychological assessment. When medicine may help, she suggests a psychiatrist and works alongside them with the client's consent."],
  // 25 footer crisis
  ["The Mental Health is not an emergency service. If you are in danger, call 112 or Tele-MANAS 14416.",
   "Need urgent help? Call 112 or Tele-MANAS 14416 (free, 24 hours)."],
  // 26 footer bottom
  ["The information here is for general education and does not replace a session with a qualified professional.",
   "The information here is for general education. For advice about your own situation, book a session."],
  // 30 assessment line
  ["Her reports help families, schools and individuals plan support. Official disability certificates are issued by government medical boards.",
   "Her reports help families, schools and individuals plan support, and can support applications to government medical boards for certificates."],
];

const files = [];
const walk = (d) => {
  for (const e of readdirSync(d)) {
    const p = path.join(d, e.name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(md|mdx|ts|tsx|json|html|css)$/.test(e.name) && !SKIP.some((s) => s.test(p)))
      files.push(p);
  }
};
ROOTS.forEach(walk);

let changed = 0;
for (const f of files) {
  let s = readFileSync(f, "utf8");
  const orig = s;
  for (const [a, b] of PAIRS) s = s.split(a).join(b);
  if (s !== orig) {
    writeFileSync(f, s);
    changed++;
    console.log("edited", f);
  }
}
console.log(`${changed} files updated`);
