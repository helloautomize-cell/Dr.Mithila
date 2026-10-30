import type { Metadata } from "next";
import {
  Figtree,
  Instrument_Serif,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { CookieBanner } from "@/components/cookie-banner";
import { Breadcrumbs } from "@/components/breadcrumbs";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "The Mental Health · Dr. Mithila Desai, clinical psychologist",
    template: "%s · The Mental Health",
  },
  description:
    "Talking therapy and psychological assessment with Dr. Mithila Desai in Borivali West, Mumbai, and online.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${instrumentSerif.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body>
        <div className="site">
          <ScrollProgress />
          <SiteHeader />
          <Breadcrumbs />
          {children}
          <SiteFooter />
          <MobileActionBar />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
