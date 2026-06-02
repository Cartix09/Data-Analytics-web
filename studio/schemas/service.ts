import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Consulting service",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
    }),
    defineField({ name: "title", title: "Service title", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Chart", value: "chart" },
          { title: "Gear", value: "gear" },
          { title: "Search", value: "search" },
          { title: "Team", value: "team" },
        ],
      },
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: { select: { title: "title", subtitle: "icon" } },
});
