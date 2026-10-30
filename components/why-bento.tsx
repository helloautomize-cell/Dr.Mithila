"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { Icon, IconTile } from "@/lib/icons";
import { TMHImage } from "@/components/tmh-image";

/*
 * Home section 01 "Why The Mental Health" as a bento grid, ported from the
 * approved reference (bento.html). Tiles get .in with a 90ms stagger as they
 * enter the viewport, which also grows tile B's year bars. All motion is
 * disabled under prefers-reduced-motion in globals.css.
 */
export function WhyBento() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const tiles = [...root.querySelectorAll<HTMLElement>(".bt")];
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            const i = tiles.indexOf(e.target as HTMLElement);
            setTimeout(() => e.target.classList.add("in"), i * 90);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    tiles.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div className="bento" ref={ref}>
      {/* A · continuity of care */}
      <article className="bt a">
        <div className="tx">
          <span className="tag">
            <IconTile name="USER" size="sm" />
            Continuity of care
          </span>
          <h3>
            One psychologist who knows your <em>story</em>.
          </h3>
          <p>
            Dr. Desai sees you herself, from the first session to the last, so
            you never repeat your story to someone new.
          </p>
          <div className="journey">
            <div className="row">
              <span className="d on">1</span>
              <span className="ln" />
              <span className="d on">2</span>
              <span className="ln" />
              <span className="d on">3</span>
              <span className="ln" />
              <span className="d on">
                <Icon name="HEART" />
              </span>
            </div>
            <small>
              <span>First session</span>
              <span>Every session after</span>
            </small>
          </div>
        </div>
        <div className="pic">
          <TMHImage
            name="dr-mithila-desai/portrait"
            objectPosition="50% 25%"
            sizes="(min-width: 1000px) 380px, (min-width: 641px) 90vw, 100vw"
          />
          <div className="dtag">
            <b>Dr. Mithila Desai</b>
            Your psychologist, every time
          </div>
        </div>
      </article>

      {/* B · experience */}
      <article className="bt b">
        <i className="bgl" aria-hidden="true" />
        <span className="tag">
          <Icon name="AWARD" />
          Experience
        </span>
        <h3>
          35 years of <em>practice</em>
        </h3>
        <p>
          With adults, children, couples, families, schools and workplaces
          across Mumbai.
        </p>
        <div className="bars" aria-hidden="true">
          {[22, 34, 46, 58, 72, 86, 100].map((h) => (
            <span key={h} style={{ "--h": `${h}%` } as CSSProperties} />
          ))}
        </div>
        <div className="blab">
          <span>1989</span>
          <span>Today</span>
        </div>
      </article>

      {/* C · under one roof */}
      <article className="bt c">
        <span className="tag">
          <Icon name="CLIP" />
          Under one roof
        </span>
        <h3>Therapy and assessment together</h3>
        <div className="combo">
          <span className="pill">
            <i>
              <Icon name="CHAT" />
            </i>
            Therapy
          </span>
          <span className="plus" aria-hidden="true">
            +
          </span>
          <span className="pill">
            <i>
              <Icon name="CLIP" />
            </i>
            Assessment
          </span>
        </div>
        <div className="bchips">
          <span>Attention</span>
          <span>Learning</span>
          <span>Personality</span>
          <span>Career aptitude</span>
        </div>
        <p>Tested here and explained in plain words.</p>
      </article>

      {/* D · private and unhurried */}
      <article className="bt d">
        <div className="vault" aria-hidden="true">
          <span className="bl l">
            <i style={{ width: 44 }} />
            <i style={{ width: 30 }} />
            <i style={{ width: 38 }} />
          </span>
          <span className="r r1" />
          <span className="r r2" />
          <span className="lk">
            <Icon name="LOCK" />
          </span>
          <span className="bl">
            <i style={{ width: 36 }} />
            <i style={{ width: 48 }} />
            <i style={{ width: 26 }} />
          </span>
        </div>
        <h3>Private and unhurried</h3>
        <p>
          Confidential sessions planned around you. You decide what to share and
          when.
        </p>
      </article>

      {/* E · two ways to meet */}
      <article className="bt e">
        <div className="top">
          <span className="tag">
            <Icon name="GLOBE" />
            Two ways to meet
          </span>
          <h3>In person or online</h3>
        </div>
        <div className="split">
          <div className="msk">
            <svg
              className="roads"
              viewBox="0 0 200 140"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <g fill="none" stroke="#fff" strokeLinecap="round">
                <path d="M-10 90 C60 80 120 70 210 76" strokeWidth="10" />
                <path d="M110 -10 C106 50 112 100 100 150" strokeWidth="7" />
                <path d="M-10 30 L210 44" strokeWidth="4" />
              </g>
            </svg>
            <span className="pin" />
            <small>In person</small>
            <b>Borivali West</b>
          </div>
          <div className="vid">
            <span className="live">
              <i />
              Online
            </span>
            <span className="cam">
              <Icon name="VIDEO" />
            </span>
            <small>By video</small>
            <b>India and abroad</b>
          </div>
        </div>
      </article>

      {/* F · honest about medicine */}
      <article className="bt f">
        <span className="tag">
          <Icon name="PILL" />
          Honest about medicine
        </span>
        <h3>A psychologist, not a psychiatrist</h3>
        <div className="vs">
          <div className="me">
            <b>Dr. Desai</b>
            <ul>
              <li className="y">
                <Icon name="TICK" />
                <span>Talk therapy</span>
              </li>
              <li className="y">
                <Icon name="TICK" />
                <span>Assessment</span>
              </li>
              <li className="n">
                <Icon name="X" />
                <span>Prescribing</span>
              </li>
            </ul>
          </div>
          <div className="ps">
            <b>Your psychiatrist</b>
            <ul>
              <li className="y">
                <Icon name="TICK" />
                <span>Medicine, if needed</span>
              </li>
              <li className="y">
                <Icon name="TICK" />
                <span>She works alongside</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
