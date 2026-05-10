import type { Metadata } from "next";
import { site } from "@/content/site";

interface BuildMetadataInput {
  title: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  noindex = false,
  ogImage = "/og/default.svg",
}: BuildMetadataInput): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
  };
}
