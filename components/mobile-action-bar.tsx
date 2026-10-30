"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/lib/icons";
import { crisis } from "@/lib/site-config";
import { waHref } from "@/lib/whatsapp";
import { CallSheet } from "@/components/call-sheet";

const CRISIS_PAGES = ["/get-help-now/", "/self-harm-and-suicidal-thoughts/"];

/*
 * Floating espresso pill below 1024px: Book, Call (opens a sheet),
 * WhatsApp (message built from the page title). Crisis pages show a red
 * Call 14416 in place of Book. Hides while a form field has focus.
 * forceCrisis exists only for the styleguide phone-frame demo.
 */
export function MobileActionBar({ forceCrisis = false }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const waRef = useRef<HTMLAnchorElement>(null);
  const crisisMode = forceCrisis || CRISIS_PAGES.includes(pathname);

  useEffect(() => {
    waRef.current?.setAttribute(
      "href",
      waHref(document.title.split("·")[0].trim() || undefined),
    );
  }, [pathname]);

  useEffect(() => {
    const onIn = (e: FocusEvent) => {
      if ((e.target as HTMLElement).matches("input,textarea,select"))
        setHidden(true);
    };
    const onOut = () => setHidden(false);
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    return () => {
      document.removeEventListener("focusin", onIn);
      document.removeEventListener("focusout", onOut);
    };
  }, []);

  return (
    <div className={hidden ? "mbar hide" : "mbar"}>
      {crisisMode ? (
        <a className="mcall alert" href={`tel:${crisis.telemanas}`}>
          <Icon name="TEL" /> Call {crisis.telemanas}
        </a>
      ) : (
        <Link href="/contact/#book">
          <Icon name="CAL" /> Book
        </Link>
      )}
      <CallSheet>
        <button type="button" className="mcall">
          <Icon name="TEL" /> <span>Call</span>
        </button>
      </CallSheet>
      <a ref={waRef} href={waHref()} target="_blank" rel="noreferrer">
        <Icon name="WA" /> Chat
      </a>
    </div>
  );
}
