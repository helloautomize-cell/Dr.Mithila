import Link from "next/link";
import { TMHImage } from "@/components/tmh-image";
import { Reveal } from "@/components/reveal";
import { BookButton } from "@/components/book-button";
import { Confirm } from "@/components/confirm";
import { Icon, type IconName } from "@/lib/icons";
import { TEAM, type TeamMember } from "@/lib/team";
import { site } from "@/lib/site-config";

/* TeamSection (approved team-section.html): lead card for Dr. Desai +
   divider + five member cards whose details expand on hover or focus.
   Used on Home and /our-team/. */
const FLOW: [IconName, string, string][] = [
  ["PERSON", "You meet her first", "Every client starts with Dr. Desai."],
  [
    "CHILD",
    "The right colleague joins",
    "A psychiatrist or psychologist, only if it helps.",
  ],
  ["COMPASS", "One shared plan", "Everyone works from the same plan."],
];

const MEMBER_ICON: Record<string, IconName> = {
  "Dr. Sujay Prabhugaonkar": "PILL",
  "Dr. Neha Pansare": "HEART",
  "Ms. Ashmi R. Shah": "CHAT",
  "Ms. Ashika Shah": "CHAT",
  "Ms. Vishwa Shah": "TEL",
};

function LeadCard() {
  const lead = TEAM[0];
  return (
    <Reveal className="ld">
      <div className="ph">
        <TMHImage
          name="dr-mithila-desai/dr-desk"
          alt="Dr. Mithila Desai smiling, seated at her desk"
          sizes="(min-width: 820px) 420px, 100vw"
          objectPosition="52% 20%"
        />
        <span className="seal">
          <span>
            <Icon name="HEART" />
          </span>
          {site.doctorShort}
        </span>
      </div>
      <div className="bd">
        <span className="role">{lead.role}</span>
        <h3>{lead.name}</h3>
        <p className="d">
          Stays with you from the first session to the last, and decides with
          you who else should be involved. RCI <Confirm>no.</Confirm>
        </p>
        <div className="flow">
          {FLOW.map(([icon, b, small]) => (
            <div className="fs" key={b}>
              <span className="ic">
                <Icon name={icon} />
              </span>
              <b>{b}</b>
              <small>{small}</small>
            </div>
          ))}
        </div>
        <div className="acts">
          <BookButton href="/contact/#book" label="Book with Dr. Desai" />
          <Link className="link" href="/dr-mithila-desai/">
            View profile <Icon name="ARR" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function MemberCard({ m, i }: { m: TeamMember; i: number }) {
  const showPhoto = Boolean(m.photo && m.photoConsent);
  return (
    <Reveal className="m" delay={i * 0.08} tabIndex={0}>
      {showPhoto && m.photo ? (
        <TMHImage
          name={m.photo}
          sizes="(min-width: 1080px) 230px, (min-width: 820px) 30vw, 68vw"
          objectPosition="50% 18%"
        />
      ) : (
        <span className="mi">{m.initials}</span>
      )}
      <span className="tag">
        <Icon name={MEMBER_ICON[m.name] ?? "USER"} />
      </span>
      <div className="cap">
        <span className="r">{m.role}</span>
        <h4>{m.name}</h4>
        <div className="more">
          <div>
            <p>{m.detail}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function TeamSection({ moreHref = "/our-team/" }: { moreHref?: string }) {
  const members = TEAM.slice(1);
  return (
    <div className="teamv2">
      <LeadCard />
      <div className="mh">
        <span className="ic">
          <Icon name="CHILD" />
        </span>
        Working alongside Dr. Desai
      </div>
      <div className="mem">
        {members.map((m, i) => (
          <MemberCard key={m.name} m={m} i={i} />
        ))}
      </div>
      {moreHref ? (
        <p style={{ marginTop: 34 }}>
          <Link className="link" href={moreHref}>
            Meet the whole team <Icon name="ARR" />
          </Link>
        </p>
      ) : null}
    </div>
  );
}
