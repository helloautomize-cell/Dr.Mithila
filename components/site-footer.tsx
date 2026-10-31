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
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <b className="fh">Talk to us</b>
          <ul>
            <li>
              <a href={`tel:${site.phoneTel}`}>+91 {site.phoneDisplay}</a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
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
            © 2026 The Mental Health · Earlier known as Power of Mind · Need
            urgent help? Call {crisis.emergency} or Tele-MANAS{" "}
            {crisis.telemanas} (free, 24 hours).
          </span>
          <span>
            Run by <Confirm>legal entity</Confirm> for the practice of Dr.
            Mithila Desai, Clinical Psychologist, RCI CRR No. <Confirm /> · The
            information here is for general education. For advice about your
            own situation, <Link href="/contact/#book">book a session</Link>.
          </span>
        </div>
      </div>
    </footer>
  );
}
