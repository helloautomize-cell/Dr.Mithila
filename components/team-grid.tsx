import { TMHImage } from "@/components/tmh-image";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/lib/icons";
import { TEAM, type TeamMember } from "@/lib/team";

export { TEAM };
export type { TeamMember };

export function TeamGrid({
  members = TEAM,
  leadCount = 1,
}: {
  members?: TeamMember[];
  leadCount?: number;
}) {
  return (
    <div className="team">
      {members.map((m, i) => (
        <Reveal key={m.name} className={i < leadCount ? "tm lead" : "tm"}>
          <div className="ph">
            {m.photo && m.photoConsent ? (
              <TMHImage
                name={m.photo}
                sizes="(min-width: 960px) 400px, 100vw"
              />
            ) : (
              <>
                <i className="tree" aria-hidden="true" />
                <b>{m.initials}</b>
                <small>Photo with consent</small>
              </>
            )}
          </div>
          <div className="bd">
            <span className="role">{m.role}</span>
            <h3>{m.name}</h3>
            <p>{m.detail}</p>
            {m.link ? (
              <p style={{ marginTop: 14 }}>
                <a className="link" href={m.link.href}>
                  {m.link.label} <Icon name="ARR" />
                </a>
              </p>
            ) : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
