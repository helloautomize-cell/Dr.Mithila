import type { IconName } from "@/lib/icons";

export interface ServiceDef {
  icon: IconName;
  title: string;
  desc: string;
  time: string;
  href: string;
}

/* Reference #services list — ways we work + concerns, in order. */
export const SERVICES: ServiceDef[] = [
  {
    icon: "PERSON",
    title: "Individual Therapy",
    desc: "One to one sessions for adults with Dr. Desai.",
    time: "50 min",
    href: "/individual-therapy/",
  },
  {
    icon: "CHILD",
    title: "Child and Teen Therapy",
    desc: "Age appropriate support, with parents involved.",
    time: "50 min",
    href: "/child-and-teen-therapy/",
  },
  {
    icon: "RINGS",
    title: "Couples Counselling",
    desc: "For partners at any stage of a relationship.",
    time: "60 min",
    href: "/couples-counselling/",
  },
  {
    icon: "FAMILY",
    title: "Family Counselling",
    desc: "For families through change or conflict.",
    time: "60 min",
    href: "/family-counselling/",
  },
  {
    icon: "GLOBE",
    title: "Online Therapy",
    desc: "The same sessions, on video, from home or abroad.",
    time: "50 min",
    href: "/online-therapy/",
  },
  {
    icon: "MIND",
    title: "Anxiety and Panic",
    desc: "When worry will not switch off.",
    time: "Therapy",
    href: "/anxiety/",
  },
  {
    icon: "CLOUD",
    title: "Depression and Low Mood",
    desc: "When everything feels heavy and flat.",
    time: "Therapy",
    href: "/depression/",
  },
  {
    icon: "LOOP",
    title: "OCD",
    desc: "Unwanted thoughts and checking rituals.",
    time: "Therapy",
    href: "/ocd/",
  },
  {
    icon: "FLAME",
    title: "Stress and Burnout",
    desc: "Pressure, sleep, temper, exhaustion.",
    time: "Therapy",
    href: "/stress-and-burnout/",
  },
  {
    icon: "SHIELD",
    title: "Trauma",
    desc: "After frightening or painful experiences.",
    time: "Therapy",
    href: "/trauma/",
  },
  {
    icon: "MIRROR",
    title: "Self-Esteem and Body Image",
    desc: "Self criticism, confidence, appearance worries.",
    time: "Therapy",
    href: "/self-esteem-and-body-image/",
  },
  {
    icon: "LEAF",
    title: "Grief and Loss",
    desc: "Living through a loss at your own pace.",
    time: "Therapy",
    href: "/grief-and-loss/",
  },
  {
    icon: "CLIP",
    title: "Psychological Assessment",
    desc: "Clear answers with standardised tests.",
    time: "Assessment",
    href: "/psychological-assessment/",
  },
];
