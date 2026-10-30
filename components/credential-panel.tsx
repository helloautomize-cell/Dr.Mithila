import type { ReactNode } from "react";
import { IconTile, type IconName } from "@/lib/icons";
import { Reveal } from "@/components/reveal";
import { Confirm } from "@/components/confirm";

export interface Credential {
  icon: IconName;
  value: ReactNode;
  caption: ReactNode;
}

const DEFAULT_CREDENTIALS: Credential[] = [
  {
    icon: "AWARD",
    value: (
      <>
        35<small>yrs</small>
      </>
    ),
    caption: (
      <>
        in practice, helping people across Mumbai since 1989{" "}
        <Confirm>year</Confirm>
      </>
    ),
  },
  {
    icon: "CAP",
    value: "PhD",
    caption: (
      <>
        Clinical Psychologist and Psychotherapist <Confirm>subject</Confirm>
      </>
    ),
  },
  {
    icon: "SHIELD",
    value: "RCI",
    caption: (
      <>
        Registered with the Rehabilitation Council of India{" "}
        <Confirm>CRR no.</Confirm>
      </>
    ),
  },
  {
    icon: "GLOBE",
    value: (
      <>
        Borivali <em>&amp; abroad</em>
      </>
    ),
    caption: "In person in Borivali West, and online for Indians living abroad",
  },
];

export function CredentialPanel({
  items = DEFAULT_CREDENTIALS,
}: {
  items?: Credential[];
}) {
  return (
    <div className="wrap cred2">
      {items.map((c, i) => (
        <Reveal key={i} className="thover">
          <IconTile name={c.icon} size="sm" />
          <b>{c.value}</b>
          <p>{c.caption}</p>
        </Reveal>
      ))}
    </div>
  );
}
