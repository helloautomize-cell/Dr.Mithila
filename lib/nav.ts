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
        heading: "Who It Is For",
        links: [
          { label: "Adults", href: "/individual-therapy/" },
          { label: "Children and Teenagers", href: "/child-and-teen-therapy/" },
          { label: "Couples", href: "/couples-counselling/" },
          { label: "Families and Parents", href: "/family-counselling/" },
        ],
      },
      {
        heading: "How",
        links: [
          { label: "In Person in Borivali", href: "/services/" },
          { label: "Online Therapy", href: "/online-therapy/" },
          {
            label: "Online Therapy for Indians Abroad",
            href: "/online-therapy/indians-abroad/",
          },
          { label: "Plan Your First Session", href: "/plan-your-visit/" },
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
          { label: "Anxiety and Panic", href: "/anxiety/" },
          { label: "Depression and Low Mood", href: "/depression/" },
          { label: "Stress, Anger and Burnout", href: "/stress-and-burnout/" },
          { label: "Grief and Loss", href: "/grief-and-loss/" },
        ],
      },
      {
        heading: "Patterns",
        links: [
          { label: "OCD", href: "/ocd/" },
          {
            label: "Habits, Addiction and Dependence",
            href: "/addiction-and-habits/",
          },
          { label: "Sleep Problems", href: "/sleep-problems/" },
          {
            label: "Self-Esteem and Body Image",
            href: "/self-esteem-and-body-image/",
          },
        ],
      },
      {
        heading: "Experiences",
        links: [
          { label: "Trauma", href: "/trauma/" },
          {
            label: "Self-Harm and Suicidal Thoughts",
            href: "/self-harm-and-suicidal-thoughts/",
          },
          {
            label: "LGBTQIA+ Affirmative Counselling",
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
            label: "Psychological Assessment",
            href: "/psychological-assessment/",
          },
          {
            label: "ADHD, Learning and Neurodiversity",
            href: "/psychological-assessment/adhd-learning-neurodiversity/",
          },
          {
            label: "Career Guidance and Aptitude Testing",
            href: "/career-guidance/",
          },
        ],
      },
    ],
  },
  {
    key: "organisations",
    label: "For Organisations",
    href: "/services/",
    columns: [
      {
        heading: "For Organisations",
        links: [
          {
            label: "Workplace Wellbeing and EAP",
            href: "/workplace-wellbeing/",
          },
          { label: "Schools and Colleges", href: "/schools-and-colleges/" },
        ],
      },
    ],
  },
];

/* Header top-level items (phase-2 prompt order; dropdown merges the service
   groups above into one compact "How we help" panel). */
export const MAIN_NAV: NavLink[] = [
  { label: "Dr. Desai", href: "/dr-mithila-desai/" },
  { label: "How We Help", href: "/services/" },
  { label: "Our Team", href: "/our-team/" },
  { label: "Your First Session", href: "/plan-your-visit/" },
  { label: "Health Library", href: "/health-library/" },
  { label: "Get Help Now", href: "/get-help-now/" },
];

/* Mobile menu: accordion groups (all closed) + flat links, Get help now
   always visible (site-plan section 3). */
export const MOBILE_FLAT_LINKS: NavLink[] = [
  { label: "Dr. Mithila Desai", href: "/dr-mithila-desai/" },
  { label: "Our Team", href: "/our-team/" },
  { label: "About", href: "/about/" },
  { label: "Plan Your First Session", href: "/plan-your-visit/" },
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
    heading: "Client Information",
    links: [
      { label: "Our Team", href: "/our-team/" },
      { label: "Plan Your First Session", href: "/plan-your-visit/" },
      { label: "FAQs", href: "/faqs/" },
      { label: "Health Library", href: "/health-library/" },
      { label: "Contact", href: "/contact/" },
      { label: "Get Help Now", href: "/get-help-now/" },
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
