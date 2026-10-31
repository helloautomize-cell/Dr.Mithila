import type { NextConfig } from "next";

const indexable = process.env.SITE_INDEXABLE === "true";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about/', permanent: true },
      { source: '/faq.html', destination: '/faqs/', permanent: true },
      { source: '/make-appointment.html', destination: '/contact/', permanent: true },
      { source: '/contact.html', destination: '/contact/', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy/', permanent: true },
      { source: '/terms-conditions.html', destination: '/terms-of-use/', permanent: true },
      // old blog ?p=N posts -> health library guides (must precede catch-alls)
      ...([
        ['1', 'when-someone-you-love-is-depressed'],
        ['16', 'when-someone-you-love-is-depressed'],
        ['56', 'first-therapy-session'],
        ['60', 'online-vs-offline-therapy'],
        ['71', 'panic-attacks'],
        ['89', 'planning-for-therapy-costs'],
        ['90', 'cbt-and-rebt-explained'],
        ['91', 'signs-you-need-a-psychologist'],
        ['92', 'ocd-therapy-what-it-involves'],
        ['93', 'how-many-therapy-sessions'],
        ['94', 'stopping-therapy-halfway'],
        ['95', 'individual-therapy-vs-couples-counselling'],
        ['96', 'marriage-counselling-first-session'],
        ['97', 'child-therapy-borivali'],
        ['98', 'panic-attack-vs-anxiety-attack'],
        ['99', 'corporate-wellness-eap'],
        ['100', 'planning-an-eap-budget'],
        ['101', 'workplace-burnout-signs'],
        ['102', 'how-online-therapy-works'],
        ['103', 'online-counselling-for-nris'],
        ['104', 'online-counselling-for-nris'],
      ] as const).map(([p, slug]) => ({
        source: '/blog',
        has: [{ type: 'query' as const, key: 'p', value: p }],
        destination: `/health-library/${slug}/`,
        permanent: true as const,
      })),
      { source: '/blog', has: [{ type: 'query', key: 'p' }], destination: '/health-library/', permanent: true },
      { source: '/blog', destination: '/health-library/', permanent: true },
      { source: '/blog/', destination: '/health-library/', permanent: true },
      { source: '/blog/:path*', destination: '/health-library/', permanent: true },
      { source: '/blog/author/:path*', destination: '/dr-mithila-desai/', permanent: true },
    ];
  },
  async headers() {
    if (indexable) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
