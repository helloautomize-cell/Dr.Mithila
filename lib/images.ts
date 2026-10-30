import generated from "@/lib/generated-images.json";

export type ImageName = keyof typeof generated;

export interface SiteImage {
  name: ImageName;
  src: string;
  alt: string;
  focus: string;
  avif: string;
  webp: string;
  width: number;
  height: number;
}

const srcset = (name: string, widths: number[], ext: string) =>
  widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(", ");

export function getImage(name: ImageName, alt?: string): SiteImage {
  const meta = generated[name] as {
    widths: number[];
    intrinsic: [number, number];
    alt: string;
    focus: string;
  };
  return {
    name,
    src: `/images/${name}.jpg`,
    alt: alt ?? meta.alt,
    focus: meta.focus,
    avif: srcset(name, meta.widths, "avif"),
    webp: srcset(name, meta.widths, "webp"),
    width: meta.intrinsic[0],
    height: meta.intrinsic[1],
  };
}
