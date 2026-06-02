import { defineType, defineField } from "sanity";

/**
 * Singleton document — there is only one Site Settings entry.
 * Edit brand name, tagline, email, social URLs, booking URL, and footer credit.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", title: "Brand name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "email", title: "Contact email", type: "string" }),
    defineField({
      name: "bookingUrl",
      title: "Booking URL (Cal.com / Calendly)",
      type: "url",
    }),
    defineField({
      name: "social",
      title: "Social links",
      type: "object",
      fields: [
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
      ],
    }),
    defineField({
      name: "footerCredit",
      title: "Footer credit (Built by …)",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "brandName" },
    prepare: ({ title }) => ({ title: title ?? "Site settings" }),
  },
});
