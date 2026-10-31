"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icon, type IconName } from "@/lib/icons";
import { GuideCard } from "@/components/guide-card";
import type { Guide } from "@/lib/health-library";
import type { Topic } from "@/lib/library-shared";

/*
 * Client half of the library index: the hero search, topic bento and the
 * toolbar + grid all talk through two window events so the pieces can live
 * in different sections:
 *   "lib:topic" (detail: topic slug or "all") — filter + scroll to the list
 *   "lib:q"     (detail: query string)       — search + scroll to the list
 */
export const LIB_TOPIC_EVENT = "lib:topic";
export const LIB_QUERY_EVENT = "lib:q";

function scrollToList() {
  const el = document.getElementById("l-all");
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 70,
    behavior: "smooth",
  });
}

function filterGuides(guides: Guide[], cat: string, q: string): Guide[] {
  const query = q.trim().toLowerCase();
  return guides.filter(
    (g) =>
      (cat === "all" || g.topic === cat) &&
      (!query ||
        `${g.title} ${g.dek} ${g.inBrief.summary} ${g.tags.join(" ")}`
          .toLowerCase()
          .includes(query)),
  );
}

export function GuideToolbar({
  guides,
  topics,
  initialCat = "all",
}: {
  guides: Guide[];
  topics: (Topic & { count: number })[];
  initialCat?: string;
}) {
  const params = useSearchParams();
  const [cat, setCat] = useState(initialCat);
  const [q, setQ] = useState(() => params.get("q") ?? "");
  const [sort, setSort] = useState<"new" | "az">("new");
  const [shown, setShown] = useState(12);

  useEffect(() => {
    const onTopic = (e: Event) => {
      setCat((e as CustomEvent<string>).detail);
      setQ("");
      scrollToList();
    };
    const onQuery = (e: Event) => {
      setQ((e as CustomEvent<string>).detail);
      setCat("all");
      scrollToList();
    };
    window.addEventListener(LIB_TOPIC_EVENT, onTopic);
    window.addEventListener(LIB_QUERY_EVENT, onQuery);
    return () => {
      window.removeEventListener(LIB_TOPIC_EVENT, onTopic);
      window.removeEventListener(LIB_QUERY_EVENT, onQuery);
    };
  }, []);

  const results = useMemo(() => {
    const r = filterGuides(guides, cat, q);
    r.sort(
      sort === "az"
        ? (a, b) => a.title.localeCompare(b.title)
        : (a, b) => b.datePublished.localeCompare(a.datePublished),
    );
    return r;
  }, [guides, cat, q, sort]);

  const list = results.slice(0, shown);
  const counts = new Map(topics.map((t) => [t.slug, t.count]));
  const topicLabel = (slug: string) => topics.find((t) => t.slug === slug)?.label ?? slug;

  return (
    <>
      <div className="lbar" id="lbar">
        <div className="lchips" role="group" aria-label="Filter by topic">
          <button
            type="button"
            data-c="all"
            aria-pressed={cat === "all"}
            onClick={() => setCat("all")}
          >
            All <i>{guides.length}</i>
          </button>
          {topics.map((t) => (
            <button
              key={t.slug}
              type="button"
              data-c={t.slug}
              aria-pressed={cat === t.slug}
              onClick={() => setCat(t.slug)}
            >
              {t.label} <i>{counts.get(t.slug)}</i>
            </button>
          ))}
        </div>
        <label className="lsort">
          Sort{" "}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "new" | "az")}
          >
            <option value="new">Newest first</option>
            <option value="az">A to Z</option>
          </select>
        </label>
      </div>
      <p className="lcount" aria-live="polite">
        {results.length
          ? `Showing ${results.length} guide${results.length > 1 ? "s" : ""}${
              cat !== "all" ? ` in ${topicLabel(cat)}` : ""
            }${q.trim() ? ` for "${q.trim()}"` : ""}`
          : ""}
      </p>
      <div className="lgrid">
        {list.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>
      <div className="lempty" style={results.length ? { display: "none" } : { display: "block" }}>
        <span className="xi">
          <Icon name="SEARCH" />
        </span>
        <h3>
          No guide on that <em>yet</em>.
        </h3>
        <p>
          Try another word, or browse all topics. You can also ask Dr. Desai
          directly in a session.
        </p>
        <button
          className="ghost"
          type="button"
          onClick={() => {
            setQ("");
            setCat("all");
          }}
        >
          Show all guides
        </button>
      </div>
      {results.length > shown ? (
        <div className="lmore">
          <button className="ghost" type="button" onClick={() => setShown((n) => n + 12)}>
            Show more guides
          </button>
        </div>
      ) : null}
    </>
  );
}

/* Hero search pill + "Often read" chips. */
export function LibrarySearch() {
  const [value, setValue] = useState("");
  const submit = (q: string) => {
    window.dispatchEvent(new CustomEvent(LIB_QUERY_EVENT, { detail: q }));
  };
  return (
    <>
      <form
        className="lsearch"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit(value);
        }}
      >
        <Icon name="SEARCH" />
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search guides, for example panic or first session"
          aria-label="Search the health library"
        />
        <button type="submit">Search</button>
      </form>
      <div className="lpop">
        <span>Often read:</span>
        {[
          ["panic", "Panic attacks"],
          ["first session", "First session"],
          ["OCD", "OCD"],
          ["online", "Online therapy"],
        ].map(([q, label]) => (
          <button key={q} type="button" onClick={() => { setValue(q); submit(q); }}>
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

/* Topic bento: tapping a tile filters the listing and scrolls to it. */
export function TopicBento({
  topics,
  firstGuides,
}: {
  topics: (Topic & { count: number })[];
  firstGuides: Guide[];
}) {
  const pick = (slug: string) =>
    window.dispatchEvent(new CustomEvent(LIB_TOPIC_EVENT, { detail: slug }));
  return (
    <div className="ltop">
      {topics.map((t, i) =>
        i === 0 ? (
          <button
            key={t.slug}
            className="big rv"
            type="button"
            onClick={() => pick(t.slug)}
          >
            <i className="tree" aria-hidden="true" />
            <span className="n">
              {t.count}
              <span>{t.count === 1 ? "guide" : "guides"}</span>
            </span>
            <span className="xi">
              <Icon name={t.icon as IconName} />
            </span>
            <b>{t.label}</b>
            <small>{t.line} Begin here if therapy is new to you.</small>
            <span className="lst">
              {firstGuides.map((g) => (
                <span key={g.slug} className="lr">
                  <Icon name="ARR" />
                  {g.title}
                </span>
              ))}
            </span>
          </button>
        ) : (
          <button
            key={t.slug}
            className="rv"
            type="button"
            onClick={() => pick(t.slug)}
          >
            <span className="n">
              {t.count}
              <span>{t.count === 1 ? "guide" : "guides"}</span>
            </span>
            <span className="xi">
              <Icon name={t.icon as IconName} />
            </span>
            <b>{t.label}</b>
            <small>{t.line}</small>
          </button>
        ),
      )}
      <a className="ask rv" href="/contact/#book">
        <span className="xi">
          <Icon name="CHAT" />
        </span>
        <b>Can't find your question?</b>
        <small>Every story is different. Ask Dr. Desai in a session.</small>
        <span className="go">
          Book a session <Icon name="ARR" />
        </span>
      </a>
    </div>
  );
}
