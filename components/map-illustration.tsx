"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/lib/icons";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";

const EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(
    "Dr. Navalkar's Orthocare & Multi-speciality Clinic, Gulmohar Road, Borivali West, Mumbai"
  ) +
  "&output=embed";

/*
 * Stylised street sketch with a pin. The real Google Maps embed preloads
 * once the section nears the viewport, on tap, or after analytics consent.
 */
export function MapIllustration() {
  const [live, setLive] = useState(false);
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (getConsent()?.analytics) setLive(true);
    const onConsent = (e: Event) => {
      if ((e as CustomEvent).detail?.analytics) setLive(true);
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  useEffect(() => {
    const el = host.current;
    if (!el || live) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setLive(true)),
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [live]);

  return (
    <div ref={host}>
      <Reveal className="map">
        {live ? (
          <iframe
            src={EMBED_SRC}
            title="Google Maps: The Mental Health, Borivali West"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        ) : (
          <>
            <svg
              viewBox="0 0 600 420"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label="Simple map of the practice location"
            >
              <g fill="none" stroke="#fff" strokeLinecap="round">
                <path d="M-20 260 C150 240 300 200 640 210" strokeWidth="22" />
                <path d="M330 -20 C320 120 330 260 300 460" strokeWidth="16" />
                <path d="M-20 90 L640 130" strokeWidth="10" />
                <path d="M120 -20 L180 460" strokeWidth="8" />
                <path d="M460 -20 L520 460" strokeWidth="8" />
              </g>
              <path
                d="M-20 260 C150 240 300 200 640 210"
                stroke="#E2D3C4"
                strokeWidth="2"
                strokeDasharray="2 8"
                fill="none"
              />
              <circle cx="470" cy="330" r="60" fill="#E1E6D9" />
            </svg>
            <small style={{ left: 24, top: 216 }}>Gulmohar Road</small>
            <button
              type="button"
              className="mapload"
              onClick={() => setLive(true)}
              aria-label="Load the live Google map"
            >
              <span className="pin">
                <span>
                  <Icon name="PIN" /> Load live map
                </span>
                <i></i>
              </span>
            </button>
            <small style={{ right: 24, bottom: 20 }}>
              Tap to load the live map
            </small>
          </>
        )}
      </Reveal>
    </div>
  );
}
