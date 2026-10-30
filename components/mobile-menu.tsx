"use client";

import Link from "next/link";

import * as Dialog from "@radix-ui/react-dialog";
import { Icon } from "@/lib/icons";
import { site, crisis } from "@/lib/site-config";
import { SERVICE_GROUPS, MOBILE_FLAT_LINKS } from "@/lib/nav";
import { waHref } from "@/lib/whatsapp";

/*
 * Full-screen sheet: accordion groups collapsed by default, 48px rows,
 * fixed footer with Book and Call plus today's hours. Esc closes (Radix).
 */
export function MobileMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const close = () => onOpenChange(false);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="msheet-ovl" />
        <Dialog.Content className="msheet" aria-describedby={undefined}>
          <div className="msheet-top">
            <span className="logo" aria-hidden="true" />
            <Dialog.Close className="msheet-x" aria-label="Close menu">
              <Icon name="X" />
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <nav className="msheet-nav" aria-label="Mobile">
            {SERVICE_GROUPS.map((g) => (
              <details key={g.key} className="mg">
                <summary>
                  {g.label}
                  <i aria-hidden="true" />
                </summary>
                <div className="mg-body">
                  {g.columns.map((c) => (
                    <div key={c.heading}>
                      <span className="dd-h">{c.heading}</span>
                      {c.links.map((l) => (
                        <a key={l.href} href={l.href} onClick={close}>
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ))}
                  <a className="mg-all" href={g.href} onClick={close}>
                    All {g.label.toLowerCase()} <Icon name="ARR" />
                  </a>
                </div>
              </details>
            ))}
            {MOBILE_FLAT_LINKS.map((l) => (
              <a key={l.href} className="mrow" href={l.href} onClick={close}>
                {l.label}
              </a>
            ))}
            <Link className="mrow alert" href="/get-help-now/" onClick={close}>
              Get help now · Tele-MANAS {crisis.telemanas} · {crisis.emergency}
            </Link>
          </nav>
          <div className="msheet-foot">
            <Link className="mb-book" href="/contact/#book" onClick={close}>
              <Icon name="CAL" /> Book a session
            </Link>
            <a className="mb-call" href={`tel:${site.phoneTel}`}>
              <Icon name="TEL" /> Call
            </a>
            <a
              className="mb-wa"
              href={waHref()}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="WA" /> WhatsApp
            </a>
            <p>
              <Icon name="CLOCK" /> {site.hours}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
