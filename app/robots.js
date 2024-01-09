export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "BacklinkCrawler",
        disallow: "/",
      },
      {
        userAgent: "Backlink-Ceck",
        disallow: "/",
      },
      {
        userAgent: "backlink-check",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
    ],
    sitemap: "/sitemap.xml",
  };
}
