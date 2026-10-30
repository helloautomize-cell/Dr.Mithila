export interface NavLink {
  label: string;
  href: string;
  note?: string;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface NavGroup {
  key: string;
  label: string;
  href?: string;
  columns: NavColumn[];
}

/* Services mega-panel content (site-plan section 3). */
export const SERVICE_GROUPS: NavGroup[] = [
  {
    key: "therapy",
    label: "Therapy",
    href: "/services/",
    columns: [
      {
        heading: "Who it is for",
        links: [
          { label: "Adults", href: "/individual-therapy/" },
          { label: "Children and teenagers", href: "/child-and-teen-therapy/" },
          { label: "Couples", href: "/couples-counselling/" },
          { label: "Families and parents", href: "/family-counselling/" },
        ],
      },
      {
        heading: "How",
        links: [
          { label: "In person in Borivali", href: "/services/" },
          { label: "Online therapy", href: "/online-therapy/" },
          {
            label: "Online therapy for Indians abroad",
            href: "/online-therapy/indians-abroad/",
          },
          { label: "Plan your first session", href: "/plan-your-visit/" },
        ],
      },
    ],
  },
  {
    key: "concerns",
    label: "Concerns",
    href: "/services/",
    columns: [
      {
        heading: "Feelings",
        links: [
          { label: "Anxiety and panic", href: "/anxiety/" },
          { label: "Depression and low mood", href: "/depression/" },
          { label: "Stress, anger and burnout", href: "/stress-and-burnout/" },
          { label: "Grief and loss", href: "/grief-and-loss/" },
        ],
      },
      {
        heading: "Patterns",
        links: [
          { label: "OCD", href: "/ocd/" },
          {
            label: "Habits, addiction and dependence",
            href: "/addiction-and-habits/",
          },
          { label: "Sleep problems", href: "/sleep-problems/" },
          {
            label: "Self-esteem and body image",
            href: "/self-esteem-and-body-image/",
          },
        ],
      },
      {
        heading: "Experiences",
        links: [
          { label: "Trauma", href: "/trauma/" },
          {
            label: "Self-harm and suicidal thoughts",
            href: "/self-harm-and-suicidal-thoughts/",
          },
          {
            label: "LGBTQIA+ affirmative counselling",
            href: "/lgbtqia-affirmative-counselling/",
          },
        ],
      },
    ],
  },
  {
    key: "assessments",
    label: "Assessments",
    href: "/services/",
    columns: [
      {
        heading: "Assessments",
        links: [
          {
            label: "Psychological assessment",
            href: "/psychological-assessment/",
          },
          {
            label: "ADHD, learning and neurodiversity",
            href: "/psychological-assessment/adhd-learning-neurodiversity/",
          },
          {
            label: "Career guidance and aptitude testing",
            href: "/career-guidance/",
          },
        ],
      },
    ],
  },
  {
    key: "organisations",
    label: "For organisations",
    href: "/services/",
    columns: [
      {
        heading: "For organisations",
        links: [
          {
            label: "Workplace wellbeing and EAP",
            href: "/workplace-wellbeing/",
          },
          { label: "Schools and colleges", href: "/schools-and-colleges/" },
        ],
      },
    ],
  },
];

/* Header top-level items (phase-2 prompt order; dropdown merges the service
   groups above into one compact "How we help" panel). */
export const MAIN_NAV: NavLink[] = [
  { label: "Dr. Desai", href: "/dr-mithila-desai/" },
  { label: "How we help", href: "/services/" },
  { label: "Our team", href: "/our-team/" },
  { label: "Your first session", href: "/plan-your-visit/" },
  { label: "Get help now", href: "/get-help-now/" },
];

/* Mobile menu: accordion groups (all closed) + flat links, Get help now
   always visible (site-plan section 3). */
export const MOBILE_FLAT_LINKS: NavLink[] = [
  { label: "Dr. Mithila Desai", href: "/dr-mithila-desai/" },
  { label: "Our team", href: "/our-team/" },
  { label: "About", href: "/about/" },
  { label: "Plan your first session", href: "/plan-your-visit/" },
  { label: "Health Library", href: "/health-library/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Contact", href: "/contact/" },
];

/* Footer link columns. */
export const FOOTER_NAV: NavColumn[] = [
  SERVICE_GROUPS[0].columns[0],
  SERVICE_GROUPS[0].columns[1],
  ...SERVICE_GROUPS[1].columns,
  SERVICE_GROUPS[2].columns[0],
  SERVICE_GROUPS[3].columns[0],
  {
    heading: "Client information",
    links: [
      { label: "Our team", href: "/our-team/" },
      { label: "Plan your first session", href: "/plan-your-visit/" },
      { label: "FAQs", href: "/faqs/" },
      { label: "Health Library", href: "/health-library/" },
      { label: "Contact", href: "/contact/" },
      { label: "Get help now", href: "/get-help-now/" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Use", href: "/terms-of-use/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Editorial and Clinical Review Policy", href: "/editorial-policy/" },
  { label: "Client Rights and Responsibilities", href: "/client-rights/" },
  {
    label: "Appointments, Cancellation and Refund",
    href: "/appointments-cancellation-refund/",
  },
  { label: "Accessibility Statement", href: "/accessibility/" },
];

/* Pathname -> human label, for breadcrumbs. */
export const PATH_LABELS: Record<string, string> = Object.fromEntries([
  ["dr-mithila-desai", "Dr. Mithila Desai"],
  ["services", "How we help"],
  ["our-team", "Our team"],
  ["about", "About"],
  ["plan-your-visit", "Plan your first session"],
  ["contact", "Contact and book"],
  ["faqs", "FAQs"],
  ["get-help-now", "Get help now"],
  ["health-library", "Health Library"],
  ["thank-you", "Thank you"],
  ["styleguide", "Styleguide"],
  ...SERVICE_GROUPS.flatMap((g) =>
    g.columns.flatMap((c) =>
      c.links.map(
        (l) =>
          [l.href.replaceAll("/", "").replace(/-/g, "-"), l.label] as const,
      ),
    ),
  ),
]);

export function labelForPath(pathname: string): string {
  const seg = pathname.split("/").filter(Boolean);
  const last = seg[seg.length - 1] ?? "";
  return (
    PATH_LABELS[pathname.replaceAll("/", "")] ??
    PATH_LABELS[last] ??
    last
      .split("-")
      .map((w) => w[0]?.toUpperCase() + w.slice(1))
      .join(" ")
  );
}
