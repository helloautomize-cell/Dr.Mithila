import type { ReactNode } from "react";
import { Confirm } from "@/components/confirm";
import type { ImageName } from "@/lib/images";

export interface TeamMember {
  role: string;
  name: string;
  detail: ReactNode;
  initials?: string;
  photo?: ImageName;
  /* photo shows only when consent is on file; otherwise initials fallback */
  photoConsent?: boolean;
  link?: { href: string; label: string };
}

export const TEAM: TeamMember[] = [
  {
    role: "Founder · Lead clinical psychologist",
    name: "Dr. Mithila Desai, PhD",
    photo: "dr-mithila-desai/portrait",
    photoConsent: true,
    detail: (
      <>
        Sees every client herself, from the first session to the last. RCI{" "}
        <Confirm>no.</Confirm>
      </>
    ),
    link: { href: "/dr-mithila-desai/", label: "View profile" },
  },
  {
    role: "Consultant psychiatrist",
    name: "Dr. Sujay Prabhugaonkar",
    initials: "SP",
    photo: "team/team-sujay-prabhugaonkar",
    photoConsent: true,
    detail: (
      <>
        MBBS, DPM (Mumbai). A medical doctor who can assess whether medicine may
        help, and prescribe it. <Confirm>still on team, MMC no.</Confirm>
      </>
    ),
  },
  {
    role: "Role to confirm",
    name: "Dr. Neha Pansare",
    initials: "NP",
    photo: "team/team-neha-pansare",
    photoConsent: true,
    detail: (
      <>
        MBBS, MPH <Confirm>role</Confirm>
      </>
    ),
  },
  {
    role: "Psychologist",
    name: "Ms. Ashmi R. Shah",
    initials: "AS",
    photo: "team/team-ashmi-shah",
    photoConsent: true,
    detail: (
      <>
        Master&apos;s in Clinical Psychology{" "}
        <Confirm>spelling, RCI no.</Confirm>
      </>
    ),
  },
  {
    role: "Psychologist",
    name: "Ms. Ashika Shah",
    initials: "AS",
    photo: "team/team-ashika-shah",
    photoConsent: true,
    detail: (
      <>
        Qualification to confirm <Confirm>spelling, RCI no.</Confirm>
      </>
    ),
  },
  {
    role: "Coordinator",
    name: "Ms. Vishwa Shah",
    initials: "VS",
    photo: "team/team-vishwa-shah",
    photoConsent: true,
    detail: (
      <>
        Appointments and client queries. Usually the first voice you hear.{" "}
        <Confirm>show on site</Confirm>
      </>
    ),
  },
];
