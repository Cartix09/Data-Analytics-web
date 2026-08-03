import { defineType, defineField } from "sanity";

/** Singleton - the Student Hub page configuration. */
export const studentHub = defineType({
  name: "studentHub",
  title: "Student Hub",
  type: "document",
  fields: [
    defineField({
      name: "googleClassroomUrl",
      title: "Google Classroom URL",
      type: "url",
    }),
    defineField({
      name: "teamsSessions",
      title: "Microsoft Teams sessions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Day / time label", type: "string" },
            { name: "label", title: "Short label", type: "string" },
            { name: "url", title: "Teams meeting URL", type: "url" },
          ],
        },
      ],
    }),
    defineField({
      name: "availabilitySlots",
      title: "Availability slots",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "materials",
      title: "Course materials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            { name: "url", title: "Resource URL", type: "url" },
            { name: "tag", title: "Tag (optional)", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Student Hub" }) },
});
