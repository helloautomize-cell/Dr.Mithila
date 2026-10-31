/*
 * GA4 event helper. Nothing is loaded or sent unless the visitor allowed
 * analytics (components/analytics.tsx gates the gtag script on consent).
 * NEXT_PUBLIC_GA4_ID unset = fully inert, so local dev stays clean.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  window.gtag("event", event, params ?? {});
}
