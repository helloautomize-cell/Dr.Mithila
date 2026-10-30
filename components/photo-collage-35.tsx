import { TMHImage } from "@/components/tmh-image";
import { Reveal } from "@/components/reveal";
import type { ImageName } from "@/lib/images";

/* Two overlapping photos plus a rotating circular-text seal. */
export function PhotoCollage35({
  imageA = "dr-mithila-desai/elle-2026",
  imageB = "dr-mithila-desai/award-2023",
  big = "35",
  small = "YEARS",
  ringText = "Years of practice · Mumbai · since 1989 ·",
}: {
  imageA?: ImageName;
  imageB?: ImageName;
  big?: string;
  small?: string;
  ringText?: string;
}) {
  return (
    <Reveal className="col35">
      <div className="a">
        <TMHImage
          name={imageA}
          sizes="(min-width: 760px) 300px, 66vw"
          objectPosition="50% 20%"
        />
      </div>
      <div className="b">
        <TMHImage
          name={imageB}
          sizes="(min-width: 760px) 240px, 52vw"
          objectPosition="35% 25%"
        />
      </div>
      <div className="badge35" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <defs>
            <path
              id="cp35"
              d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0"
            />
          </defs>
          <text>
            <textPath href="#cp35">{ringText}</textPath>
          </text>
        </svg>
        <b>
          {big}
          <small>{small}</small>
        </b>
      </div>
    </Reveal>
  );
}
