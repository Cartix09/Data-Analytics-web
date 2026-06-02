import type { StructureResolver } from "sanity/structure";

/**
 * Custom Studio sidebar:
 * - Singletons (Site settings, Homepage, Student Hub) are pinned at the top
 *   and shown as a single editable form instead of a list view.
 * - The rest of the document types fall into the default sidebar list.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("ANLYTICS Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Homepage")
        .id("homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem()
        .title("Student Hub")
        .id("studentHub")
        .child(S.document().schemaType("studentHub").documentId("studentHub")),
      S.divider(),
      S.documentTypeListItem("course").title("Courses"),
      S.documentTypeListItem("service").title("Consulting services"),
      S.documentTypeListItem("faqGroup").title("FAQ groups"),
      S.documentTypeListItem("resourcePost").title("Resources / blog posts"),
      S.documentTypeListItem("translation").title("UI translations"),
    ]);
