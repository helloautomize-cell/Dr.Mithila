"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/lib/icons";
import { TMHImage } from "@/components/tmh-image";
import { BookButton } from "@/components/book-button";
import { site } from "@/lib/site-config";
import { MAIN_NAV, SERVICE_GROUPS } from "@/lib/nav";
import { MobileMenu } from "@/components/mobile-menu";

function UtilityBar() {
  const bump = (d: number) => {
    const el = document.documentElement;
    const cur = parseFloat(getComputedStyle(el).fontSize) || 16;
    el.style.fontSize = `${Math.min(19, Math.max(14, cur + d))}px`;
  };
  return (
    <div className="topbar g">
      <div className="wrap">
        <span className="tb-l">
          <Link href="/plan-your-visit/">Plan your first session</Link>
          <Link href="/health-library/">Health Library</Link>
        </span>
        <span className="tb-r">
          <span className="tb-i">
            <Icon name="CLOCK" />
            {site.hours}
          </span>
          <a className="tb-i" href={`tel:${site.phoneTel}`}>
            <Icon name="TEL" /> +91 {site.phoneDisplay}
          </a>
          <Link className="tb-alert" href="/get-help-now/">
            Need help now? Tele-MANAS 14416 · Emergency 112
          </Link>
          <span className="tb-aa" role="group" aria-label="Text size">
            <button onClick={() => bump(-1)} aria-label="Decrease text size">
              A
            </button>
            <button onClick={() => bump(1)} aria-label="Increase text size">
              A+
            </button>
          </span>
        </span>
      </div>
    </div>
  );
}

function HelpDropdown({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        ref.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={ref}
      className={open ? "dd open" : "dd"}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="dd-btn"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        onFocus={() => setOpen(true)}
      >
        How we help <Icon name="ARR" className="chev" />
      </button>
      <div className="dd-panel" role="menu">
        <div className="dd-grid">
          {SERVICE_GROUPS.map((g) => (
            <div key={g.key} className="dd-col">
              <a className="dd-g" href={g.href} onClick={onNavigate}>
                {g.label}
              </a>
              {g.columns.map((c) => (
                <div key={c.heading}>
                  <span className="dd-h">{c.heading}</span>
                  {c.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      role="menuitem"
                      onClick={onNavigate}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div className="dd-doc">
            <Link
              className="dd-ph"
              href="/dr-mithila-desai/"
              onClick={onNavigate}
              aria-label="Dr. Mithila Desai, view profile"
            >
              <TMHImage
                name="dr-mithila-desai/portrait"
                alt="Dr. Mithila Desai"
                sizes="200px"
              />
            </Link>
            <b>Dr. Mithila Desai</b>
            <span>Clinical Psychologist, PhD</span>
            <Link className="link" href="/dr-mithila-desai/" onClick={onNavigate}>
              View profile <Icon name="ARR" />
            </Link>
          </div>
        </div>
        <div className="dd-foot">
          <Link href="/get-help-now/" onClick={onNavigate}>
            Need help now? Tele-MANAS 14416 · Emergency 112
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenus = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 10);
    const raf = requestAnimationFrame(onScroll);
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <UtilityBar />
      <header className={scrolled ? "nav g s" : "nav g"}>
        <div className="wrap">
          <Link href="/" className="logo" aria-label="The Mental Health, home" />
          <nav aria-label="Main">
            {MAIN_NAV.map((l) =>
              l.label === "How we help" ? (
                <HelpDropdown key={l.label} onNavigate={closeMenus} />
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  data-p={l.href}
                  className={
                    pathname === l.href ||
                    (l.href === "/health-library/" &&
                      pathname.startsWith("/health-library/"))
                      ? "on"
                      : undefined
                  }
                  style={
                    l.label === "Get help now"
                      ? { color: "var(--alert)" }
                      : undefined
                  }
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>
          <BookButton href="/contact/#book" />
          <button
            className="menu"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="MENU" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} />
    </>
  );
}
