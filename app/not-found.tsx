import Link from "next/link";
import { BookButton } from "@/components/book-button";
import { GhostButton } from "@/components/ghost-button";
import { Eyebrow } from "@/components/eyebrow";
import { Icon } from "@/lib/icons";

export default function NotFound() {
  return (
    <main className="ihero g">
      <i className="tree" aria-hidden="true" />
      <div className="wrap" style={{ position: "relative" }}>
        <p className="crumb">
          <Link href="/">Home</Link> / 404
        </p>
        <Eyebrow className="mt-4">Nothing here</Eyebrow>
        <h1>
          We could not find that <em>page</em>.
        </h1>
        <p className="lead">
          The link may be old or mistyped. The main pages are below, or book a
          session and ask us directly.
        </p>
        <div className="cta">
          <BookButton href="/contact/#book" />
          <GhostButton href="/">Back to home</GhostButton>
        </div>
        <div className="pills" style={{ marginTop: 40 }}>
          <Link href="/dr-mithila-desai/">
            Dr. Desai <Icon name="ARR" />
          </Link>
          <Link href="/services/">
            How we help <Icon name="ARR" />
          </Link>
          <Link href="/our-team/">
            Our team <Icon name="ARR" />
          </Link>
          <Link href="/plan-your-visit/">
            Your first session <Icon name="ARR" />
          </Link>
          <Link href="/get-help-now/">
            Get help now <Icon name="ARR" />
          </Link>
        </div>
      </div>
    </main>
  );
}
