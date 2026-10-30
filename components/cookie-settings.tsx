"use client";

import { openCookieSettings } from "@/lib/consent";

export function CookieSettings() {
  return (
    <button className="cset" type="button" onClick={openCookieSettings}>
      Cookie settings
    </button>
  );
}
