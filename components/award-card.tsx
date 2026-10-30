import { TMHImage } from "@/components/tmh-image";
import { Reveal } from "@/components/reveal";
import type { ImageName } from "@/lib/images";

export function AwardCard({
  image,
  kicker,
  title,
  caption,
  objectPosition,
}: {
  image: ImageName;
  kicker: string;
  title: string;
  caption: string;
  objectPosition?: string;
}) {
  return (
    <Reveal className="awc">
      <TMHImage
        name={image}
        sizes="(min-width: 860px) 600px, 100vw"
        objectPosition={objectPosition}
      />
      <div>
        <small>{kicker}</small>
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </Reveal>
  );
}
