/*
 * Consent store: essential vs analytics. Phase 6 reads `analytics` to gate
 * GA4 and the live map. Persisted in localStorage; changes emit a
 * window event so the banner, footer link and loaders stay in sync.
 */
export type ConsentState = { analytics: boolean; ts: number };
const KEY = "tmh-consent";
export const CONSENT_EVENT = "tmh:consent";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean) {
  const state: ConsentState = { analytics, ts: Date.now() };
  localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("tmh:cookie-settings"));
}
