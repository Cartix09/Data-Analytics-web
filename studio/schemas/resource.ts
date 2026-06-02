import { defineType, defineField } from "sanity";

export const resourcePost = defineType({
  name: "resourcePost",
  title: "Resource / Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Power BI", value: "Power BI" },
          { title: "SQL", value: "SQL" },
          { title: "Python", value: "Python" },
          { title: "Dashboard Design", value: "Dashboard Design" },
          { title: "Automation", value: "Automation" },
          { title: "Career", value: "Career" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Coming soon", value: "coming-soon" },
          { title: "Published", value: "published" },
        ],
      },
      initialValue: "coming-soon",
    }),
    defineField({ name: "href", title: "Href / link", type: "string" }),
  ],
  preview: { select: { title: "title", subtitle: "category" } },
});
