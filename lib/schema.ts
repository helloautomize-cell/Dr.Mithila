import { site } from "@/lib/site-config";
import type { PageContent } from "@/lib/content";

const BASE = "https://www.thementalhealth.in";

function practice() {
  return {
    "@type": "MedicalClinic",
    "@id": `${BASE}/#practice`,
    name: site.name,
    alternateName: "Dr Mithila Desai's Power Of Mind Clinic",
    telephone: `+91-${site.phoneDisplay.replaceAll(" ", "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "17, Shraddha SBI Staff Gulmohar CHS, Gulmohar Road, Shimpoli",
      addressLocality: "Borivali West, Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400092",
      addressCountry: "IN",
    },
    sameAs: [site.instagram],
    areaServed: [
      "Borivali",
      "Kandivali",
      "Dahisar",
      "Malad",
      "Goregaon",
      "Mira Road",
      "Mumbai",
      "Online, across India and abroad",
    ],
  };
}

function doctor() {
  return {
    "@type": "Person",
    "@id": `${BASE}/#dr-mithila-desai`,
    name: "Mithila Desai",
    honorificPrefix: "Dr.",
    honorificSuffix: "PhD",
    jobTitle: "Clinical Psychologist",
    worksFor: { "@id": `${BASE}/#practice` },
    knowsLanguage: ["en", "hi"],
    sameAs: [site.instagram],
  };
}

/* One @graph per page (site-plan section 7). */
export function pageGraph(page: PageContent, breadcrumbs?: unknown) {
  const url = `${BASE}${page.url}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${BASE}/#practice` },
    },
    practice(),
    doctor(),
    {
      "@type": page.schema,
      "@id": `${url}#page`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#practice` },
      reviewedBy: { "@id": `${BASE}/#dr-mithila-desai` },
      ...(page.schema === "ProfilePage"
        ? { mainEntity: { "@id": `${BASE}/#dr-mithila-desai` } }
        : {}),
    },
    ...(breadcrumbs ? [breadcrumbs as Record<string, unknown>] : []),
  ];
  if (page.schema === "BlogPosting")
    graph[3] = {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      url,
      headline: page.title,
      description: page.description,
      inLanguage: "en-IN",
      articleSection: page.category,
      ...(page.datePublished ? { datePublished: page.datePublished } : {}),
      ...(page.dateModified ? { dateModified: page.dateModified } : {}),
      author: { "@id": `${BASE}/#dr-mithila-desai` },
      reviewedBy: { "@id": `${BASE}/#dr-mithila-desai` },
      publisher: { "@id": `${BASE}/#practice` },
      isPartOf: { "@id": `${BASE}/#website` },
    };
  if (page.html.includes('class="faq"'))
    graph.push({ "@type": "FAQPage", "@id": `${url}#faq`, isPartOf: { "@id": `${url}#page` } });
  return { "@context": "https://schema.org", "@graph": graph };
}
