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
    title: "Individual therapy",
    desc: "One to one sessions for adults with Dr. Desai.",
    time: "50 min",
    href: "/individual-therapy/",
  },
  {
    icon: "CHILD",
    title: "Child and teen therapy",
    desc: "Age appropriate support, with parents involved.",
    time: "50 min",
    href: "/child-and-teen-therapy/",
  },
  {
    icon: "RINGS",
    title: "Couples counselling",
    desc: "For partners at any stage of a relationship.",
    time: "60 min",
    href: "/couples-counselling/",
  },
  {
    icon: "FAMILY",
    title: "Family counselling",
    desc: "For families through change or conflict.",
    time: "60 min",
    href: "/family-counselling/",
  },
  {
    icon: "GLOBE",
    title: "Online therapy",
    desc: "The same sessions, on video, from home or abroad.",
    time: "50 min",
    href: "/online-therapy/",
  },
  {
    icon: "MIND",
    title: "Anxiety and panic",
    desc: "When worry will not switch off.",
    time: "Therapy",
    href: "/anxiety/",
  },
  {
    icon: "CLOUD",
    title: "Depression and low mood",
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
    title: "Stress and burnout",
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
    title: "Self-esteem and body image",
    desc: "Self criticism, confidence, appearance worries.",
    time: "Therapy",
    href: "/self-esteem-and-body-image/",
  },
  {
    icon: "LEAF",
    title: "Grief and loss",
    desc: "Living through a loss at your own pace.",
    time: "Therapy",
    href: "/grief-and-loss/",
  },
  {
    icon: "CLIP",
    title: "Psychological assessment",
    desc: "Clear answers with standardised tests.",
    time: "Assessment",
    href: "/psychological-assessment/",
  },
];
