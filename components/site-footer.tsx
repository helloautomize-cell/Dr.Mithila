import Link from "next/link";
import { Confirm } from "@/components/confirm";
import { site, crisis } from "@/lib/site-config";
import { LEGAL_LINKS } from "@/lib/nav";
import { CookieSettings } from "@/components/cookie-settings";

export function SiteFooter() {
  return (
    <footer className="g">
      <div className="wrap">
        <div>
          <span className="logo rev" aria-hidden="true" />
          <p style={{ marginTop: 20, maxWidth: "34ch" }}>
            Talk therapy and psychological assessment in Borivali West and
            online, led by clinical psychologist Dr. Mithila Desai.
          </p>
          <p style={{ marginTop: 14 }}>
            <a className="link" href={site.instagram}>
              Instagram {site.instagramHandle}
            </a>
          </p>
        </div>
        <div>
          <b className="fh">Visit</b>
          <ul>
            <li>17, Shraddha SBI Staff Gulmohar CHS</li>
            <li>Gulmohar Road, Shimpoli</li>
            <li>Borivali West, Mumbai 400092</li>
            <li>Opposite Banana Leaf Restaurant</li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener">
                See us on Google Maps
              </a>
            </li>
            <li>
              Hours <Confirm />
            </li>
          </ul>
        </div>
        <div>
          <b className="fh">Talk to us</b>
          <ul>
            <li>
              <a href={`tel:${site.phoneTel}`}>+91 {site.phoneDisplay}</a>
            </li>
            <li>
              WhatsApp <Confirm>number</Confirm>
            </li>
            <li>
              Email <Confirm>one email</Confirm>
            </li>
            <li>
              <Link href="/contact/#book">Book a session</Link>
            </li>
          </ul>
        </div>
        <div>
          <b className="fh">Urgent help</b>
          <ul>
            <li>
              Tele-MANAS <b style={{ color: "var(--on-dark)" }}>14416</b>
            </li>
            <li>
              Emergency <b style={{ color: "var(--on-dark)" }}>112</b>
            </li>
            <li>
              <Link href="/get-help-now/">Get help now</Link>
            </li>
          </ul>
          <b className="fh" style={{ marginTop: 22 }}>Legal</b>
          <ul>
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <CookieSettings />
            </li>
          </ul>
        </div>
        <div className="base">
          <span>
            © 2026 The Mental Health · Earlier known as Power of Mind · Not an
            emergency service. In danger? Call {crisis.emergency} or Tele-MANAS{" "}
            {crisis.telemanas}.
          </span>
          <span>
            Run by <Confirm>legal entity</Confirm> for the practice of Dr.
            Mithila Desai, Clinical Psychologist, RCI CRR No. <Confirm /> · For
            general education, not a substitute for a session.
          </span>
        </div>
      </div>
    </footer>
  );
}
