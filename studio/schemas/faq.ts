import { defineType, defineField } from "sanity";

/**
 * A grouped FAQ document. `slot` decides where the group is rendered.
 */
export const faqGroup = defineType({
  name: "faqGroup",
  title: "FAQ group",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Group title (internal)", type: "string" }),
    defineField({
      name: "slot",
      title: "Where it appears",
      type: "string",
      options: {
        list: [
          { title: "Home / Courses page", value: "home" },
          { title: "Consulting page", value: "consulting" },
          { title: "Student Hub", value: "studentHub" },
          { title: "Course detail (per-course)", value: "course" },
        ],
      },
    }),
    defineField({
      name: "items",
      title: "Q & A entries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", title: "Question", type: "string" },
            { name: "a", title: "Answer", type: "text", rows: 4 },
          ],
        },
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "slot" } },
});
