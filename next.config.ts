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
      { source: '/blog', destination: '/health-library/', permanent: true },
      { source: '/blog/', destination: '/health-library/', permanent: true },
      { source: '/blog/:path*', destination: '/health-library/', permanent: true },
      { source: '/blog', has: [{ type: 'query', key: 'p', value: '56' }], destination: '/health-library/first-therapy-session/', permanent: true },
      { source: '/blog', has: [{ type: 'query', key: 'p', value: '71' }], destination: '/health-library/panic-attacks/', permanent: true },
      { source: '/blog', has: [{ type: 'query', key: 'p', value: '103' }], destination: '/health-library/online-counselling-for-nris/', permanent: true },
      { source: '/blog', has: [{ type: 'query', key: 'p', value: '104' }], destination: '/health-library/online-counselling-for-nris/', permanent: true },
      { source: '/blog', has: [{ type: 'query', key: 'p' }], destination: '/health-library/', permanent: true },
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
