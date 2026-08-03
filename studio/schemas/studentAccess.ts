import { defineType, defineField } from "sanity";

/**
 * Manual enrollment record - the source of truth for who can open which
 * modules in the /learn portal.
 *
 * Flow:
 * 1. Student pays outside the website (bank transfer, invoice).
 * 2. Alish confirms payment to Mursal.
 * 3. Mursal creates or updates a `studentAccess` document with the
 *    student's email, the course, and the allowed module slugs.
 * 4. On the next request, the portal sees the update automatically.
 */
export const studentAccess = defineType({
  name: "studentAccess",
  title: "Student access (enrollment)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Student name", type: "string" }),
    defineField({
      name: "email",
      title: "Student email",
      type: "string",
      validation: (rule) =>
        rule.required().email().warning("Enter the exact email the student uses to sign in."),
    }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "learningCourse" }],
    }),
    defineField({
      name: "allowedModules",
      title: "Allowed module slugs",
      type: "array",
      of: [{ type: "string" }],
      description:
        "The slug of each module the student has paid for. Only these will be openable inside the portal.",
    }),
    defineField({
      name: "status",
      title: "Access status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Paused", value: "paused" },
          { title: "Expired", value: "expired" },
        ],
      },
      initialValue: "active",
    }),
    defineField({
      name: "notes",
      title: "Notes / payment reference",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "accessStart", title: "Access start date", type: "date" }),
    defineField({
      name: "accessEnd",
      title: "Access end date (optional)",
      type: "date",
    }),
  ],
  preview: {
    select: { title: "email", subtitle: "status" },
  },
});
