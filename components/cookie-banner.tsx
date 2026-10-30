"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent, CONSENT_EVENT } from "@/lib/consent";

/*
 * Essential vs analytics consent. Hidden once a choice exists; reopened by
 * the footer's Cookie settings link. Phase 6 reads the stored state.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (!getConsent()) setVisible(true);
    });
    const open = () => setVisible(true);
    window.addEventListener("tmh:cookie-settings", open);
    const close = () => setVisible(false);
    window.addEventListener(CONSENT_EVENT, close);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("tmh:cookie-settings", open);
      window.removeEventListener(CONSENT_EVENT, close);
    };
  }, []);

  if (!visible) return null;
  const choose = (analytics: boolean) => () => {
    setConsent(analytics);
    setVisible(false);
  };

  return (
    <div className="cookie" role="dialog" aria-label="Cookie settings">
      <p>
        <b>A note on cookies.</b> We use only what the site needs to work
        (essential). Anonymous analytics are optional and off until you allow
        them.
      </p>
      <div className="cookie-btns">
        <button onClick={choose(false)}>Essential only</button>
        <button className="acc" onClick={choose(true)}>
          Allow analytics
        </button>
      </div>
    </div>
  );
}
