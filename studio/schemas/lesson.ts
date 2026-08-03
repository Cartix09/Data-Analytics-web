import { defineType, defineField } from "sanity";

export const lesson = defineType({
  name: "lesson",
  title: "Lesson",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Video", value: "video" },
          { title: "Reading", value: "reading" },
          { title: "Worksheet", value: "worksheet" },
          { title: "Quiz", value: "quiz" },
          { title: "Project", value: "project" },
        ],
      },
      initialValue: "video",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description:
        "Private Vimeo, Mux playback URL, unlisted YouTube, or Google Drive preview link. Drive is convenient but least secure - links can be shared.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "estimatedMinutes",
      title: "Estimated minutes",
      type: "number",
    }),
    defineField({
      name: "materials",
      title: "Downloadable materials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "type" } },
});
