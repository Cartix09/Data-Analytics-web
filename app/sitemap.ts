import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Only include routes that have live pages in Phase 1.
// Additional course detail pages will be added as their pages ship.
const liveRoutes = [
  "/",
  "/courses",
  "/courses/power-bi-pl-300",
  "/consulting",
  "/about",
  "/resources",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return liveRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : path.startsWith("/courses/") ? 0.85 : 0.7,
  }));
}
