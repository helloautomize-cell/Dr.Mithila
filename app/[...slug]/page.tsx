import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allUrls, getPage } from "@/lib/content";
import { pageGraph } from "@/lib/schema";
import { PageTemplate, schemaScript } from "@/components/page-templates";

export const instant = false;

export function generateStaticParams() {
  return allUrls()
    .filter((u) => u !== "/")
    .map((u) => ({ slug: u.split("/").filter(Boolean) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[...slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/") + "/");
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/") + "/");
  if (!page) notFound();
  return (
    <>
      <PageTemplate page={page} />
      {schemaScript(pageGraph(page))}
    </>
  );
}
