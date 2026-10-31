/* Client-safe library constants — no fs, no zod. Keep in sync with
   resources/docs/health-library-schema.md section 2. */

export const LIB_BASE = "/health-library/";

export const TOPICS = [
  { slug: "starting-therapy", label: "Starting therapy", icon: "DOOR", tone: "lt", line: "First sessions, how many sessions, and when to begin." },
  { slug: "anxiety-and-mood", label: "Anxiety and mood", icon: "MIND", tone: "es", line: "Worry, panic, low mood, and helping someone you love." },
  { slug: "ocd", label: "OCD", icon: "LOOP", tone: "sg", line: "What OCD therapy involves." },
  { slug: "relationships", label: "Relationships", icon: "RINGS", tone: "hn", line: "Couples, marriage and choosing the right kind of help." },
  { slug: "children-and-teens", label: "Children and teens", icon: "SPROUT", tone: "sl", line: "Signs a child may need support." },
  { slug: "work-and-burnout", label: "Work and burnout", icon: "BRIEF", tone: "wn", line: "Burnout and support at work." },
  { slug: "online-therapy", label: "Online therapy", icon: "GLOBE", tone: "dk", line: "Video sessions from home, in India or abroad." },
] as const;

export type TopicSlug = (typeof TOPICS)[number]["slug"];
export type Topic = (typeof TOPICS)[number];

const TOPIC_MAP = new Map<string, Topic>(TOPICS.map((t) => [t.slug, t]));
export function topic(slug: string): Topic {
  const t = TOPIC_MAP.get(slug);
  if (!t) throw new Error(`Unknown health-library topic: ${slug}`);
  return t;
}

export function fmtDate(s: string): string {
  if (s.includes("CONFIRM")) return s;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return s;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
