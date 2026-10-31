import Link from "next/link";
import { Icon, type IconName } from "@/lib/icons";
import { LIB_BASE, topic, fmtDate } from "@/lib/library-shared";
import type { Guide } from "@/lib/health-library";
import { TMHImage } from "@/components/tmh-image";
import type { ImageName } from "@/lib/images";

/* Guide card: designed cover (topic tone + tree + icon) or photo cover. */
export function GuideCard({ guide }: { guide: Guide }) {
  const t = topic(guide.topic);
  return (
    <Link className="gc" href={`${LIB_BASE}${guide.slug}/`} data-c={guide.topic}>
      {guide.cover.kind === "photo" ? (
        <span className="cov ph">
          <TMHImage
            name={guide.cover.src as ImageName}
            alt={guide.cover.alt}
            sizes="(min-width: 1000px) 380px, (min-width: 641px) 46vw, 92vw"
          />
          <span className="lb">{t.label}</span>
          <span className="rt">
            <Icon name="CLOCK" />
            {guide.readingTime} min
          </span>
        </span>
      ) : (
        <span className={`cov ${guide.cover.tone ?? t.tone}`}>
          <i className="tree" aria-hidden="true" />
          <span className="lb">{t.label}</span>
          <span className="rt">
            <Icon name="CLOCK" />
            {guide.readingTime} min
          </span>
          <span className="ci">
            <Icon name={(guide.cover.icon ?? t.icon) as IconName} />
          </span>
        </span>
      )}
      <span className="bd">
        <span className="gc-t">{guide.title}</span>
        <span className="gc-x">{guide.inBrief.summary}</span>
        <span className="ft">
          <TMHImage
            name="dr-mithila-desai/dr-desk"
            alt=""
            sizes="30px"
            objectPosition="55% 15%"
          />
          <span>
            <b>Dr. Mithila Desai</b>
            <br />
            {fmtDate(guide.datePublished)}
          </span>
          <span className="rv2">
            <Icon name="SHIELD" />
            Reviewed
          </span>
        </span>
      </span>
    </Link>
  );
}
