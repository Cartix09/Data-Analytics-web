import { defineType, defineField } from "sanity";

/**
 * Singleton — homepage hero + consulting preview + learn/hire split copy.
 */
export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "h1", title: "H1 / Headline", type: "string" },
        { name: "subhead", title: "Subhead", type: "text", rows: 3 },
        { name: "primaryCta", title: "Primary CTA label", type: "string" },
        { name: "secondaryCta", title: "Secondary CTA label", type: "string" },
        { name: "microTrust", title: "Micro-trust line", type: "string" },
      ],
    }),
    defineField({
      name: "learnHire",
      title: "Learn / Hire split",
      type: "object",
      fields: [
        { name: "b2bEyebrow", type: "string", title: "B2B card eyebrow" },
        { name: "b2bTitle", type: "string", title: "B2B card title" },
        { name: "b2bBody", type: "text", title: "B2B card body", rows: 3 },
        { name: "b2bCta", type: "string", title: "B2B card CTA" },
        { name: "learnEyebrow", type: "string", title: "Learn card eyebrow" },
        { name: "learnTitle", type: "string", title: "Learn card title" },
        { name: "learnBody", type: "text", title: "Learn card body", rows: 3 },
        { name: "learnCta", type: "string", title: "Learn card CTA" },
      ],
    }),
    defineField({
      name: "consulting",
      title: "Consulting preview",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "seeAll", title: "See all link label", type: "string" },
        { name: "primaryCta", title: "Primary CTA label", type: "string" },
      ],
    }),
    defineField({
      name: "finalCta",
      title: "Final CTA band",
      type: "object",
      fields: [
        { name: "consultingTitle", title: "Consulting card title", type: "text", rows: 2 },
        { name: "consultingCta", title: "Consulting CTA label", type: "string" },
        { name: "coursesTitle", title: "Courses card title", type: "text", rows: 2 },
        { name: "coursesCta", title: "Courses CTA label", type: "string" },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
