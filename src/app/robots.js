export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: "https://oslim-portfolio.vercel.app/sitemap.xml",
  };
}
