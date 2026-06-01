import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/login", "/admin"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
