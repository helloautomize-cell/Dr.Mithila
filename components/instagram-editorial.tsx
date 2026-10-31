"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { TMHImage } from "@/components/tmh-image";
import { Icon } from "@/lib/icons";
import { site } from "@/lib/site-config";
import type { ImageName } from "@/lib/images";

/*
 * Section 08 "In her words": espresso quote card + Instagram-style post
 * cards, all linking out to @dr.mithiladesai. Ported from preview v13.
 * When the client supplies more posts, add PostCard entries and show 3-5.
 */

const HANDLE = "dr.mithiladesai";

const TOPICS = [
  { icon: "LEAF", label: "Feelings" },
  { icon: "FAMILY", label: "Families" },
  { icon: "MIND", label: "Everyday mental health" },
] as const;

type Post = {
  variant: "t" | "w" | "s";
  image: ImageName;
  alt: string;
  objectPosition: string;
  sizes: string;
  caption: string;
  date: string;
};

const POST_SIZES = "(min-width: 1000px) 300px, (min-width: 641px) 46vw, 78vw";

const POSTS: Post[] = [
  {
    variant: "t",
    image: "dr-mithila-desai/elle-2026",
    alt: "Dr. Desai at the ELLE India awards",
    objectPosition: "50% 18%",
    sizes: POST_SIZES,
    caption:
      "“Beauty has always been more than skin deep; it begins in the mind.” On receiving the ELLE India award.",
    date: "2026",
  },
  {
    variant: "w",
    image: "dr-mithila-desai/dr-talk-2026",
    alt: "Dr. Desai at the Resilient Living Conference",
    objectPosition: "30% 30%",
    sizes: "(min-width: 1000px) 340px, (min-width: 641px) 56vw, 78vw",
    caption:
      "A truly enriching experience at the Resilient Living Conference, where I had the opportunity to speak alongside 15 wonderful speakers and share my thoughts on relationships and the role they play in resilient living.",
    date: "14 August 2026",
  },
  {
    variant: "s",
    image: "dr-mithila-desai/award-2023",
    alt: "Dr. Desai with the Women Entrepreneur Award",
    objectPosition: "30% 20%",
    sizes: POST_SIZES,
    caption:
      "Excellence in Mental Health and Wellness, Women Entrepreneur Awards.",
    date: "2023",
  },
];

/* Same IntersectionObserver reveal as <Reveal>, but on an anchor element. */
function PostCard({ post }: { post: Post }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < innerHeight) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      className={`xp ${post.variant} rv`}
      href={site.instagram}
      target="_blank"
      rel="noopener"
    >
      <div className="hd">
        <TMHImage
          name="dr-mithila-desai/portrait"
          alt=""
          sizes="28px"
          objectPosition="50% 22%"
        />
        <b>{HANDLE}</b>
        <span>
          <Icon name="INSTA" />
        </span>
      </div>
      <div className="im">
        <TMHImage
          name={post.image}
          alt={post.alt}
          sizes={post.sizes}
          objectPosition={post.objectPosition}
        />
      </div>
      <div className="ft">
        <span className="ac">
          <Icon name="HEART" />
          <Icon name="CHAT" />
          <Icon name="SEND" />
        </span>
        <p>
          <b>{HANDLE}</b> {post.caption}
        </p>
        <small>{post.date}</small>
      </div>
    </a>
  );
}

export function InstagramEditorial() {
  return (
    <div className="xig">
      <Reveal className="xq">
        <i className="tree" />
        <div className="pf">
          <TMHImage
            name="dr-mithila-desai/portrait"
            alt="Dr. Mithila Desai"
            sizes="52px"
            objectPosition="50% 22%"
          />
          <div>
            <b>{site.instagramHandle}</b>
            <small>14.7k followers · Mumbai</small>
          </div>
        </div>
        <span className="mk">&ldquo;</span>
        <p className="qq">
          Healing is the most beautiful <em>journey</em>.
        </p>
        <small className="src">Dr. Mithila Desai on Instagram, 2026</small>
        <div className="tg">
          {TOPICS.map(({ icon, label }) => (
            <span key={label}>
              <Icon name={icon} /> {label}
            </span>
          ))}
        </div>
        <a className="btn" href={site.instagram} target="_blank" rel="noopener">
          <span className="i">
            <Icon name="INSTA" />
          </span>
          <span className="t">Follow on Instagram</span>
        </a>
      </Reveal>
      <div className="xps">
        {POSTS.map((post) => (
          <PostCard key={post.variant} post={post} />
        ))}
      </div>
    </div>
  );
}
