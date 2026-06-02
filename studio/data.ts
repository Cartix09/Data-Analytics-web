/**
 * Sanity-backed data fetchers with TS-file fallbacks.
 *
 * Every getter:
 * 1. Queries Sanity if `NEXT_PUBLIC_SANITY_PROJECT_ID` is set.
 * 2. Falls back to the local `content/*.ts` value if the query is empty
 *    or fails. This means the site keeps rendering correctly even before
 *    a single document is published.
 */
import { safeFetch } from "./client";
import { site as siteFallback } from "@/content/site";
import { en as enDictFallback } from "@/content/i18n/en";
import { courses as coursesFallback } from "@/content/courses";
import { services as servicesFallback } from "@/content/services";
import { studentHub as studentHubFallback } from "@/content/studentHub";
import { homeFaq as homeFaqFallback, consultingFaq as consultingFaqFallback } from "@/content/faq";
import { upcomingPosts as resourcesFallback } from "@/content/resources";

export interface CmsSiteSettings {
  brandName?: string;
  tagline?: string;
  email?: string;
  bookingUrl?: string;
  social?: { linkedin?: string; youtube?: string; instagram?: string };
  footerCredit?: string;
}

export interface CmsHomepage {
  hero?: {
    eyebrow?: string;
    h1?: string;
    subhead?: string;
    primaryCta?: string;
    secondaryCta?: string;
    microTrust?: string;
  };
  learnHire?: {
    b2bEyebrow?: string;
    b2bTitle?: string;
    b2bBody?: string;
    b2bCta?: string;
    learnEyebrow?: string;
    learnTitle?: string;
    learnBody?: string;
    learnCta?: string;
  };
  consulting?: {
    eyebrow?: string;
    title?: string;
    body?: string;
    seeAll?: string;
    primaryCta?: string;
  };
  finalCta?: {
    consultingTitle?: string;
    consultingCta?: string;
    coursesTitle?: string;
    coursesCta?: string;
  };
}

/* ---------- Site settings ---------- */

export async function getSiteSettings() {
  const cms = await safeFetch<CmsSiteSettings>(
    `*[_type == "siteSettings"][0]`
  );
  return {
    brandName: cms?.brandName || siteFallback.name,
    tagline: cms?.tagline || siteFallback.tagline,
    email: cms?.email || siteFallback.email,
    bookingUrl: cms?.bookingUrl || siteFallback.bookingUrl,
    social: {
      linkedin: cms?.social?.linkedin || siteFallback.social.linkedin,
      youtube: cms?.social?.youtube || siteFallback.social.youtube,
      instagram: cms?.social?.instagram || siteFallback.social.instagram,
    },
    footerCredit:
      cms?.footerCredit ||
      "Built by Mursal Hajiyev and Alish Niftaliyev.",
  };
}

/* ---------- Homepage copy ---------- */

export async function getHomepage(): Promise<CmsHomepage> {
  return (
    (await safeFetch<CmsHomepage>(`*[_type == "homepage"][0]`)) ?? {}
  );
}

/* ---------- Courses ---------- */

export async function getCourses() {
  const cms = await safeFetch<typeof coursesFallback>(
    `*[_type == "course" && published == true] | order(_createdAt asc) {
      "slug": slug.current,
      title, eyebrow, outcome, level, format, audience, durationLabel,
      topics, heroH1, heroSubhead, outcomes, audienceFor, audienceNotFor,
      curriculum, faq, pricingNote, published, available
    }`
  );
  if (cms && cms.length > 0) return cms;
  return coursesFallback;
}

/* ---------- Consulting services ---------- */

export async function getServices() {
  const cms = await safeFetch<typeof servicesFallback>(
    `*[_type == "service"] | order(_createdAt asc) {
      "slug": slug.current, title, summary, icon, outcomes, deliverables
    }`
  );
  if (cms && cms.length > 0) return cms;
  return servicesFallback;
}

/* ---------- Student Hub ---------- */

export async function getStudentHub() {
  const cms = await safeFetch<typeof studentHubFallback>(
    `*[_type == "studentHub"][0] {
      googleClassroomUrl, teamsSessions, availabilitySlots, materials
    }`
  );
  if (!cms) return studentHubFallback;
  return {
    googleClassroomUrl:
      cms.googleClassroomUrl || studentHubFallback.googleClassroomUrl,
    teamsSessions:
      cms.teamsSessions?.length ? cms.teamsSessions : studentHubFallback.teamsSessions,
    availabilitySlots:
      cms.availabilitySlots?.length
        ? cms.availabilitySlots
        : studentHubFallback.availabilitySlots,
    materials: cms.materials?.length ? cms.materials : studentHubFallback.materials,
  };
}

/* ---------- FAQ ---------- */

export async function getFaqGroup(slot: "home" | "consulting" | "studentHub" | "course") {
  const cms = await safeFetch<{ items: { q: string; a: string }[] }>(
    `*[_type == "faqGroup" && slot == $slot][0] { items }`,
    { slot }
  );
  if (cms?.items?.length) return cms.items;
  if (slot === "consulting") return consultingFaqFallback;
  return homeFaqFallback;
}

/* ---------- Resources ---------- */

export async function getResources() {
  const cms = await safeFetch<typeof resourcesFallback>(
    `*[_type == "resourcePost"] | order(_createdAt asc) {
      title, category, description, status, href
    }`
  );
  if (cms && cms.length > 0) return cms;
  return resourcesFallback;
}

/* ---------- Translations ---------- */

type TranslationDoc = { key: string; en?: string; az?: string };

/**
 * Loads CMS-published translations and merges them on top of the TS dictionary.
 * Locale = "en" | "az". Missing CMS keys silently fall back to TS.
 */
export async function getMergedDictionary(locale: "en" | "az") {
  const fallback = enDictFallback; // shape-only; values overridden below
  const docs = await safeFetch<TranslationDoc[]>(
    `*[_type == "translation"] { key, en, az }`
  );
  if (!docs?.length) return null; // signal "no overrides"
  const overrides: Record<string, string> = {};
  for (const d of docs) {
    const v = locale === "az" ? d.az : d.en;
    if (d.key && v) overrides[d.key] = v;
  }
  return { overrides, fallback };
}
