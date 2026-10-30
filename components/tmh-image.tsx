import type { CSSProperties } from "react";
import { getImage, type ImageName } from "@/lib/images";

/*
 * Responsive picture backed by scripts/process-images.mjs output:
 * AVIF + WebP srcsets, original JPG fallback, width/height to hold layout.
 */
export function TMHImage({
  name,
  alt,
  sizes = "100vw",
  className,
  objectPosition,
  priority,
}: {
  name: ImageName;
  alt?: string;
  sizes?: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
}) {
  const img = getImage(name, alt);
  const style: CSSProperties = objectPosition
    ? { objectPosition }
    : { objectPosition: img.focus };
  return (
    <picture>
      <source type="image/avif" srcSet={img.avif} sizes={sizes} />
      <source type="image/webp" srcSet={img.webp} sizes={sizes} />
      <img
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className={className}
        style={style}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
