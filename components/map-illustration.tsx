import { Reveal } from "@/components/reveal";

/*
 * Stylised street sketch with a pin. The real Google map loads only on
 * click, after consent (wired in Phase 6); for now this is the illustration.
 */
export function MapIllustration() {
  return (
    <Reveal className="map">
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
      <small style={{ right: 24, bottom: 20 }}>
        Illustration · live map loads on tap
      </small>
      <div className="pin">
        <span>The Mental Health</span>
        <i></i>
      </div>
    </Reveal>
  );
}
