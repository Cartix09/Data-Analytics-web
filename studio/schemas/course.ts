import { defineType, defineField } from "sanity";

export const course = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
    }),
    defineField({ name: "title", title: "Course title", type: "string" }),
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "outcome", title: "Outcome (one-line promise)", type: "text", rows: 2 }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "Beginner" },
          { title: "Intermediate", value: "Intermediate" },
          { title: "Advanced", value: "Advanced" },
        ],
      },
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Cohort", value: "Cohort" },
          { title: "Self-paced", value: "Self-paced" },
          { title: "Hybrid", value: "Hybrid" },
        ],
      },
    }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      options: {
        list: [
          { title: "B2C — Professionals", value: "B2C" },
          { title: "B2B — Teams", value: "B2B" },
          { title: "Both", value: "Both" },
        ],
      },
    }),
    defineField({ name: "durationLabel", title: "Duration label", type: "string" }),
    defineField({
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "heroH1", title: "Detail page H1", type: "text", rows: 2 }),
    defineField({ name: "heroSubhead", title: "Detail page subhead", type: "text", rows: 3 }),
    defineField({
      name: "outcomes",
      title: "Outcomes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "audienceFor",
      title: "Who it's for",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "audienceNotFor",
      title: "Who it's not for",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "curriculum",
      title: "Curriculum (week-by-week)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "week", type: "number", title: "Week" },
            { name: "title", type: "string", title: "Title" },
            { name: "goals", type: "array", of: [{ type: "string" }], title: "Goals" },
            { name: "deliverable", type: "string", title: "Deliverable" },
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "Course FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", type: "string", title: "Question" },
            { name: "a", type: "text", title: "Answer", rows: 4 },
          ],
        },
      ],
    }),
    defineField({ name: "pricingNote", title: "Pricing note", type: "string" }),
    defineField({ name: "published", title: "Published", type: "boolean", initialValue: true }),
    defineField({
      name: "available",
      title: "Available (vs. coming soon)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "level" },
  },
});
