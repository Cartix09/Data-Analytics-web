import { defineType, defineField } from "sanity";

export const learningModule = defineType({
  name: "learningModule",
  title: "Learning module",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 2 }),
    defineField({
      name: "lessons",
      title: "Lessons",
      type: "array",
      of: [{ type: "reference", to: [{ type: "lesson" }] }],
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});
