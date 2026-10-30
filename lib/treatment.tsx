import type { ReactNode } from "react";
import Link from "next/link";
import { Confirm } from "@/components/confirm";
import type { PathStep } from "@/components/v11-live";
import type {
  ConcernItem,
  FaqItem,
  FloatCard,
  GlanceCell,
  HeroPhoto,
  RelCard,
  SignCard,
  ToolCard,
  TrustItem,
} from "@/components/v11";
import type { IconName } from "@/lib/icons";
import type { ImageName } from "@/lib/images";

export interface TreatmentData {
  url: string;
  crisis?: boolean;
  crumb: ReactNode;
  tag: { icon: IconName; label: ReactNode };
  title: ReactNode;
  lead: ReactNode;
  bookLabel: string;
  linkLabel: string;
  trust: TrustItem[];
  photo: HeroPhoto;
  floats: FloatCard[];
  glance: GlanceCell[];
  nav: { id: string; icon: IconName; label: string }[];
  signs: {
    eyebrow: string;
    title: ReactNode;
    lead: ReactNode;
    big: SignCard & { img: ImageName; imgAlt: string };
    cards: SignCard[];
    wide: { icon: IconName; title: ReactNode; text: ReactNode };
  };
  panic?: {
    eyebrow: string;
    title: ReactNode;
    lead: ReactNode;
    note: ReactNode;
  };
  explainer?: {
    eyebrow: string;
    title: ReactNode;
    lead: ReactNode;
    points: { icon: IconName; title: string; text: ReactNode }[];
  };
  help: {
    eyebrow: string;
    title: ReactNode;
    lead: string;
    photo: HeroPhoto;
    photoIcon: IconName;
    photoCaption: string;
    steps: PathStep[];
  };
  try?: {
    eyebrow: string;
    title: ReactNode;
    lead: string;
    tools: ToolCard[];
  };
  faq: {
    eyebrow: string;
    title: ReactNode;
    card: {
      img: ImageName;
      alt: string;
      title: ReactNode;
      text: ReactNode;
      bookLabel?: string;
    };
    items: FaqItem[];
    sources?: ReactNode;
  };
  related: { title: ReactNode; cards: RelCard[] };
  end: {
    eyebrow: string;
    title: ReactNode;
    text: string;
    img: ImageName;
    imgAlt: string;
  };
}

export const TREATMENT_DATA: Record<string, TreatmentData> = {
  "/anxiety/": {
    url: "/anxiety/",
    crumb: (
      <>
        <Link href="/">Home</Link> / <Link href="/services/">How we help</Link> /
        Anxiety and panic
      </>
    ),
    tag: { icon: "MIND", label: "Concern · Anxiety and panic" },
    title: (
      <>
        Help for anxiety and <em>panic</em>.
      </>
    ),
    lead: (
      <>
        Anxiety is the body&apos;s alarm system staying switched on, with worry,
        tension and fear that are out of proportion to what is happening, or
        that won&apos;t go away. Dr. Mithila Desai helps adults, teenagers and
        children understand their anxiety and learn practical ways to calm it,
        in person or online.
      </>
    ),
    bookLabel: "Talk to Dr. Desai",
    linkLabel: "Is this anxiety?",
    trust: [
      { icon: "PIN", label: "Borivali West" },
      { icon: "GLOBE", label: "Online, in India or abroad" },
      { icon: "FAMILY", label: "Adults, teens and children" },
    ],
    photo: {
      img: "clinic/clinic-nook",
      alt: "A calm corner of the therapy room with a green couch and soft light",
      pos: "40% 50%",
    },
    floats: [
      {
        pos: "a",
        img: "dr-mithila-desai/dr-desk",
        title: "Dr. Mithila Desai, PhD",
        sub: "Clinical psychologist",
      },
      {
        pos: "b",
        icon: "SHIELD",
        title: "Reviewed by Dr. Desai",
        sub: (
          <>
            Last reviewed <Confirm />
          </>
        ),
      },
    ],
    glance: [
      {
        icon: "MIND",
        label: "What it is",
        text: "Worry, fear or panic that is hard to control and affects daily life",
      },
      {
        icon: "FAMILY",
        label: "How common",
        text: "Among the most common mental health conditions in India and worldwide",
      },
      {
        icon: "LOOP",
        label: "Common types",
        text: "Generalised, panic, social, health anxiety, specific fears",
      },
      {
        icon: "COMPASS",
        label: "How therapy helps",
        text: "Understanding the cycle and practising new responses",
      },
      {
        icon: "LEAF",
        label: "Here",
        text: "Assessment, therapy and skills for daily life",
      },
    ],
    nav: [
      { id: "x-signs", icon: "CLIP", label: "Signs" },
      { id: "x-panic", icon: "HEART", label: "Panic attacks" },
      { id: "x-help", icon: "COMPASS", label: "How therapy helps" },
      { id: "x-try", icon: "LEAF", label: "Try today" },
      { id: "x-faq", icon: "CHAT", label: "Questions" },
    ],
    signs: {
      eyebrow: "01 · Signs",
      title: (
        <>
          Signs that can mean <em>anxiety</em>.
        </>
      ),
      lead: "Anxiety shows up in the mind, the body and in what you do. A few of these on most days, for weeks, is worth talking about.",
      big: {
        icon: "MIND",
        title: "In your mind",
        k: "Thoughts that won't settle",
        items: [
          "Worrying most days about many things, and finding it hard to stop",
          "Needing reassurance again and again",
          "Trouble falling asleep because your mind won't settle",
        ],
        img: "clinic/clinic-room",
        imgAlt: "The consultation room in soft daylight",
      },
      cards: [
        {
          icon: "HEART",
          title: "In your body",
          k: "The alarm system switched on",
          items: [
            "Feeling restless, tense or on edge",
            "Racing heart, tight chest, breathlessness, sweating, trembling, stomach upset",
          ],
        },
        {
          icon: "DOOR",
          title: "In what you do",
          k: "Life getting smaller",
          items: [
            "Avoiding places, people or situations because of fear",
          ],
        },
      ],
      wide: {
        icon: "FLAME",
        title: "Sudden waves of intense fear that peak within minutes",
        text: "This can be a panic attack. Read what happens, and why it is frightening but not dangerous in itself.",
      },
    },
    panic: {
      eyebrow: "02 · Panic attacks",
      title: (
        <>
          A wave that rises, peaks and <em>passes</em>.
        </>
      ),
      lead: "A sudden rush of intense fear with strong body sensations: pounding heart, breathlessness, dizziness, tingling, and a feeling that something terrible is about to happen. It usually peaks within about 10 minutes. Panic attacks are frightening but not dangerous in themselves.",
      note: (
        <>
          <b>Important:</b> chest pain, breathlessness and fainting can also
          have physical causes. If this is your first episode, if you have heart
          or lung problems, or if you&apos;re unsure, see a doctor or go to a
          hospital emergency department first.
        </>
      ),
    },
    help: {
      eyebrow: "03 · How therapy helps",
      title: (
        <>
          Five steps, at your <em>pace</em>.
        </>
      ),
      lead: "Therapy for anxiety is practical. You understand what keeps it going, then practise new responses, one small step at a time.",
      photo: {
        img: "dr-mithila-desai/dr-armchair",
        alt: "Dr. Mithila Desai listening in her therapy room",
      },
      photoIcon: "EAR",
      photoCaption: "Every step is agreed with you, never rushed.",
      steps: [
        {
          icon: "MIND",
          n: "01",
          title: "Understanding your anxiety",
          text: "What sets it off, what you feel, what you do, and what keeps it going.",
        },
        {
          icon: "HEART",
          n: "02",
          title: "Calming the body",
          text: "Breathing, relaxation and grounding skills you can use anywhere.",
        },
        {
          icon: "CHAT",
          n: "03",
          title: "Working with worried thoughts",
          text: "Noticing them, questioning them, and letting some of them pass.",
        },
        {
          icon: "SPROUT",
          n: "04",
          title: "Facing fears gradually",
          text: "Small, planned steps back into situations you've been avoiding, at a pace you agree to.",
        },
        {
          icon: "SHIELD",
          n: "05",
          title: "Preventing setbacks",
          text: "A plan for what to do if anxiety returns.",
        },
      ],
    },
    try: {
      eyebrow: "04 · Try today",
      title: (
        <>
          Simple things to try <em>today</em>.
        </>
      ),
      lead: "Small habits that calm the alarm a little. They help alongside therapy, not instead of it.",
      tools: [
        {
          icon: "EYE",
          text: "Name five things you can see and four you can hear",
        },
        { icon: "CUP", text: "Reduce tea, coffee and energy drinks" },
        { icon: "MOON", text: "Keep a regular sleep time" },
        {
          icon: "PEN",
          text: "Write your worries down at a set time each day, then put them aside",
        },
      ],
    },
    faq: {
      eyebrow: "05 · Questions",
      title: (
        <>
          Common <em>questions</em>.
        </>
      ),
      card: {
        img: "dr-mithila-desai/dr-online",
        alt: "Dr. Desai in an online session",
        title: "In person or online",
        text: "Meet in Borivali West, or join by video from home, in India or abroad.",
        bookLabel: "Book a session",
      },
      items: [
        {
          q: "Is anxiety a real health problem or just stress?",
          a: "Everyone feels anxious sometimes. It becomes a health problem when it is strong, frequent and lasts for weeks, and starts to limit work, study, sleep or relationships. It is common, is not a weakness, and responds well to the right help.",
        },
        {
          q: "Can a panic attack harm my heart?",
          a: "In a healthy heart it is not dangerous. Because chest pain and breathlessness can also come from heart or lung problems, please get a medical check if symptoms are new, different or severe.",
        },
        {
          q: "Will I always have anxiety?",
          a: "Many people find it reduces a great deal with therapy and stays manageable. Some notice it returning in stressful times, but with the skills they've learnt, it no longer takes over.",
        },
        {
          q: "Is it better to avoid what makes me anxious?",
          a: "Avoiding brings short-term relief but usually makes anxiety stronger over time. Therapy helps you return to what you've been avoiding, slowly and with support.",
        },
        {
          q: "Can children have anxiety?",
          a: "Yes. Children may show it through stomach aches, clinginess, tears before school or trouble sleeping.",
        },
      ],
      sources:
        "Sources: National Mental Health Survey of India 2015 to 16, NIMHANS · World Health Organization, Anxiety disorders fact sheet, 2023 · NICE CG113, Generalised anxiety disorder and panic disorder in adults",
    },
    related: {
      title: (
        <>
          Often goes <em>together</em>.
        </>
      ),
      cards: [
        {
          icon: "PERSON",
          title: "Individual therapy",
          text: "One-to-one sessions for adults.",
          href: "/individual-therapy/",
        },
        {
          icon: "LOOP",
          title: "OCD",
          text: "Unwanted thoughts and repeated checking or cleaning.",
          href: "/ocd/",
        },
        {
          icon: "FLAME",
          title: "Stress and burnout",
          text: "When pressure spills into sleep, temper and health.",
          href: "/stress-and-burnout/",
        },
        {
          icon: "MOON",
          title: "Sleep problems",
          text: "Trouble falling or staying asleep.",
          href: "/sleep-problems/",
        },
      ],
    },
    end: {
      eyebrow: "Talk to Dr. Desai",
      title: (
        <>
          You don&apos;t have to work it out <em>alone</em>.
        </>
      ),
      text: "In person on Gulmohar Road, Borivali West, or online. A short message is enough to begin.",
      img: "clinic/clinic-waiting",
      imgAlt: "The calm waiting area of the practice",
    },
  },
};

export type { ConcernItem };

/* Defaults shared by every treatment page; each entry only carries the
   copy that is unique to it. */
export interface TreatmentSpec {
  url: string;
  crisis?: boolean;
  label: string;
  tagLabel: string;
  icon: IconName;
  title: ReactNode;
  lead: ReactNode;
  glance: GlanceCell[];
  signsTitle: ReactNode;
  signsLead: ReactNode;
  mind: string[];
  body: string[];
  behaviour: string[];
  wide?: { icon: IconName; title: ReactNode; text: ReactNode };
  explainer?: {
    eyebrow: string;
    title: ReactNode;
    lead: ReactNode;
    points: { icon: IconName; title: string; text: ReactNode }[];
  };
  panic?: TreatmentData["panic"];
  helpTitle: ReactNode;
  helpLead: string;
  steps: PathStep[];
  tryTools?: ToolCard[];
  faqs: FaqItem[];
  related: RelCard[];
  sources?: ReactNode;
}

export function makeTreatment(s: TreatmentSpec): TreatmentData {
  let n = 0;
  const nav = [
    { id: "x-signs", icon: "CLIP" as IconName, label: "Signs" },
    ...(s.explainer || s.panic
      ? [
          {
            id: s.panic ? "x-panic" : "x-key",
            icon: "HEART" as IconName,
            label: s.panic ? "Panic attacks" : "The key point",
          },
        ]
      : []),
    { id: "x-help", icon: "COMPASS" as IconName, label: "How therapy helps" },
    ...(s.tryTools
      ? [{ id: "x-try", icon: "LEAF" as IconName, label: "Try today" }]
      : []),
    { id: "x-faq", icon: "CHAT" as IconName, label: "Questions" },
  ];
  const e = () => `${String(++n).padStart(2, "0")}`;
  const signsEyebrow = `${e()} · Signs`;
  const keyEyebrow =
    s.panic?.eyebrow ?? s.explainer?.eyebrow ?? `${e()} · The key point`;
  if (s.panic) s.panic.eyebrow = keyEyebrow;
  if (s.explainer) s.explainer.eyebrow = keyEyebrow;
  const helpEyebrow = `${e()} · How therapy helps`;
  const tryEyebrow = `${e()} · Try today`;
  const faqEyebrow = `${e()} · Questions`;
  return {
    url: s.url,
    crisis: s.crisis,
    crumb: (
      <>
        <Link href="/">Home</Link> / <Link href="/services/">How we help</Link> /{" "}
        {s.label}
      </>
    ),
    tag: { icon: s.icon, label: s.tagLabel },
    title: s.title,
    lead: s.lead,
    bookLabel: "Talk to Dr. Desai",
    linkLabel: `Is this ${s.tagLabel.split(" · ").pop()?.toLowerCase()}?`,
    trust: [
      { icon: "PIN", label: "Borivali West" },
      { icon: "GLOBE", label: "Online, in India or abroad" },
      { icon: "FAMILY", label: "Adults, teens and children" },
    ],
    photo: {
      img: "clinic/clinic-nook",
      alt: "A calm corner of the therapy room with a green couch and soft light",
      pos: "40% 50%",
    },
    floats: [
      {
        pos: "a",
        img: "dr-mithila-desai/dr-desk",
        title: "Dr. Mithila Desai, PhD",
        sub: "Clinical psychologist",
      },
      {
        pos: "b",
        icon: "SHIELD",
        title: "Reviewed by Dr. Desai",
        sub: (
          <>
            Last reviewed <Confirm />
          </>
        ),
      },
    ],
    glance: s.glance,
    nav,
    signs: {
      eyebrow: signsEyebrow,
      title: s.signsTitle,
      lead: s.signsLead,
      big: {
        icon: "MIND",
        title: "In your mind",
        k: "Thoughts that won't settle",
        items: s.mind,
        img: "clinic/clinic-room",
        imgAlt: "The consultation room in soft daylight",
      },
      cards: [
        {
          icon: "HEART",
          title: "In your body",
          k: "The alarm system switched on",
          items: s.body,
        },
        {
          icon: "DOOR",
          title: "In what you do",
          k: "Life getting smaller",
          items: s.behaviour,
        },
      ],
      wide: s.wide ?? {
        icon: "FLAME",
        title: "A few of these on most days, for weeks",
        text: "That is worth talking about, even if it does not feel severe.",
      },
    },
    panic: s.panic,
    explainer: s.explainer,
    help: {
      eyebrow: helpEyebrow,
      title: s.helpTitle,
      lead: s.helpLead,
      photo: {
        img: "dr-mithila-desai/dr-armchair",
        alt: "Dr. Mithila Desai listening in her therapy room",
      },
      photoIcon: "EAR",
      photoCaption: "Every step is agreed with you, never rushed.",
      steps: s.steps,
    },
    try: s.tryTools
      ? {
          eyebrow: tryEyebrow,
          title: (
            <>
              Simple things to try <em>today</em>.
            </>
          ),
          lead: "Small habits that help alongside therapy, not instead of it.",
          tools: s.tryTools,
        }
      : undefined,
    faq: {
      eyebrow: faqEyebrow,
      title: (
        <>
          Common <em>questions</em>.
        </>
      ),
      card: {
        img: "dr-mithila-desai/dr-online",
        alt: "Dr. Desai in an online session",
        title: "In person or online",
        text: "Meet in Borivali West, or join by video from home, in India or abroad.",
        bookLabel: "Book a session",
      },
      items: s.faqs,
      sources: s.sources,
    },
    related: {
      title: (
        <>
          Often goes <em>together</em>.
        </>
      ),
      cards: s.related,
    },
    end: {
      eyebrow: "Talk to Dr. Desai",
      title: (
        <>
          You don&apos;t have to work it out <em>alone</em>.
        </>
      ),
      text: "In person on Gulmohar Road, Borivali West, or online. A short message is enough to begin.",
      img: "clinic/clinic-waiting",
      imgAlt: "The calm waiting area of the practice",
    },
  };
}
