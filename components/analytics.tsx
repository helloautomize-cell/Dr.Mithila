"use client";

import { useEffect } from "react";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";
import { GA_ID } from "@/lib/analytics";

/*
 * GA4 + Consent Mode v2. The gtag script is injected only after the visitor
 * allows analytics (cookie banner or cookie settings), so a first visit makes
 * zero third-party requests. Click events are delegated once on document and
 * mapped from link hrefs: book_click, call_click, whatsapp_click,
 * directions_click. map_load and generate_lead fire from their components.
 */
function loadGtag() {
  if (!GA_ID || document.getElementById("ga4js")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("config", GA_ID);
  const s = document.createElement("script");
  s.id = "ga4js";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);
}

function eventForHref(href: string): string | null {
  if (href.startsWith("tel:")) return "call_click";
  if (/(wa\.me|api\.whatsapp|whatsapp:)/i.test(href)) return "whatsapp_click";
  if (/(maps\.app\.goo\.gl|google\.[^/]+\/maps|maps\?)/i.test(href))
    return "directions_click";
  if (href.includes("/contact/#book") || href.endsWith("#book"))
    return "book_click";
  return null;
}

export function Analytics() {
  useEffect(() => {
    if (getConsent()?.analytics) loadGtag();
    const onConsent = (e: Event) => {
      if ((e as CustomEvent).detail?.analytics) loadGtag();
    };
    window.addEventListener(CONSENT_EVENT, onConsent);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const name = eventForHref(a.getAttribute("href") ?? "");
      if (name) window.gtag?.("event", name);
    };
    document.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent);
      document.removeEventListener("click", onClick, true);
    };
  }, []);
  return null;
}
