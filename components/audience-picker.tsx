"use client";

import { useState } from "react";
import { Icon, IconTile, type IconName } from "@/lib/icons";
import { BookButton } from "@/components/book-button";

export interface Audience {
  key: string;
  icon: IconName;
  tag: string;
  heading: string;
  text: string;
  concerns: string[];
  cta: string;
}

const AUDIENCES: Audience[] = [
  {
    key: "Myself",
    icon: "USER",
    tag: "Adults",
    heading: "For you, as an adult",
    text: "Anxiety, low mood, burnout, grief or a hard season. We start where you are.",
    concerns: [
      "Anxiety and worry",
      "Low mood",
      "Stress and burnout",
      "Grief and loss",
    ],
    cta: "Book for me",
  },
  {
    key: "My child",
    icon: "CHILD",
    tag: "Under 12",
    heading: "For your child",
    text: "Play and drawing are often part of sessions, because children may find it easier to show than to tell. Parents are involved at every step.",
    concerns: [
      "School and learning",
      "Big feelings",
      "Attention and focus",
      "Assessment",
    ],
    cta: "Book for my child",
  },
  {
    key: "My teen",
    icon: "SPROUT",
    tag: "12 to 17",
    heading: "For your teen",
    text: "A space of their own. Dr. Desai explains to both of you what stays private and when parents must be told.",
    concerns: ["Exam stress", "Friendships", "Screen time", "Self-esteem"],
    cta: "Book for my teen",
  },
  {
    key: "Us as a couple",
    icon: "RINGS",
    tag: "Partners",
    heading: "For the two of you",
    text: "Learning to listen, argue fairly and rebuild trust.",
    concerns: ["Communication", "Before marriage", "After a breach of trust"],
    cta: "Book for us",
  },
  {
    key: "My family",
    icon: "FAMILY",
    tag: "Everyone at home",
    heading: "For the whole family",
    text: "When a change, a loss or a conflict touches everyone at home.",
    concerns: ["Parenting together", "Family conflict", "Elder care stress"],
    cta: "Book for my family",
  },
];

function accentLast(text: string) {
  const i = text.lastIndexOf(" ");
  if (i < 0) return <em>{text}</em>;
  return (
    <>
      {text.slice(0, i)} <em>{text.slice(i + 1)}</em>
    </>
  );
}

/* Five icon cards plus an animated panel that swaps per audience. */
export function AudiencePicker({ items = AUDIENCES }: { items?: Audience[] }) {
  const [active, setActive] = useState(0);
  const a = items[active];

  return (
    <>
      <div className="tabs tabs2" role="tablist">
        {items.map((t, i) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            <IconTile name={t.icon} size="sm" />
            <b>{t.key}</b>
            <small>{t.tag}</small>
          </button>
        ))}
      </div>
      <div className="panel sw" key={active}>
        <div>
          <IconTile name={a.icon} size="lg" solid />
          <h3>{accentLast(a.heading)}</h3>
          <p className="lead">{a.text}</p>
          <div className="cta" style={{ marginTop: 28 }}>
            <BookButton href="/book/" label={a.cta} />
          </div>
        </div>
        <ul>
          {a.concerns.map((c) => (
            <li key={c}>
              {c}
              <Icon name="ARR" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
