import { defineType, defineField } from "sanity";

/**
 * Key/value UI string with English + Azerbaijani text.
 *
 * For Phase 2, this lets Alish edit a single string label in the browser
 * without touching `content/i18n/*.ts`. Components that opt into it will
 * call `getString(key)` and fall back to the TS dictionary when the key
 * isn't published.
 */
export const translation = defineType({
  name: "translation",
  title: "UI Translation",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Key (e.g. nav.courses, hero.h1)",
      type: "string",
      description:
        "Dot-namespaced path matching the structure of content/i18n/en.ts",
    }),
    defineField({ name: "en", title: "English", type: "text", rows: 2 }),
    defineField({ name: "az", title: "Azerbaijani (AZ)", type: "text", rows: 2 }),
    defineField({
      name: "context",
      title: "Where it appears (internal note)",
      type: "string",
    }),
  ],
  preview: { select: { title: "key", subtitle: "en" } },
});
