import { site } from "@/lib/site-config";

/*
 * WhatsApp deep link. Pre-fill pattern from site-plan section 3:
 * "Hello, I would like to book a session about [page title]. My name is "
 * CONFIRM: number comes from the old site (+91 91677 66941).
 */
export function waHref(pageTitle?: string): string {
  const about = pageTitle ? ` about ${pageTitle}` : "";
  const text = `Hello, I would like to book a session${about}. My name is `;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
