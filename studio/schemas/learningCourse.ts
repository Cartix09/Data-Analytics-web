import { defineType, defineField } from "sanity";

export const learningCourse = defineType({
  name: "learningCourse",
  title: "Learning course (portal)",
  type: "document",
  description:
    "Content for the /learn portal. This is separate from the marketing `course` type - it holds the modules, lessons, and video URLs students access after enrolling.",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [{ type: "reference", to: [{ type: "learningModule" }] }],
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});
