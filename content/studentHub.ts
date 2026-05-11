/**
 * Student Hub content.
 *
 * Edit this file to update the Google Classroom link, Teams meeting links,
 * weekly session schedule, and course materials shown on /login.
 *
 * Phase 2 plan: replace this static content with a Sanity-backed CMS or a
 * proper authenticated admin area so Alish and Mursal can edit it without
 * a code deploy. See README → "Student Hub" for details.
 */

export interface TeamsSession {
  /** Display label, e.g. "Saturday 12:00". */
  day: string;
  /** Short label, e.g. "Weekly live session". */
  label: string;
  /** Microsoft Teams meeting URL. Replace with the real link. */
  url: string;
}

export interface Material {
  title: string;
  description: string;
  /** Where the resource lives — Drive, Notion, Google Doc, etc. */
  url: string;
  /** Optional category tag shown on the card. */
  tag?: string;
}

export const studentHub = {
  /** Google Classroom URL. Replace `#` with the real class link. */
  googleClassroomUrl: "#",

  /**
   * Weekly live sessions on Microsoft Teams.
   * Replace each `url` with the real Teams meeting link from your calendar.
   */
  teamsSessions: [
    {
      day: "Saturday 12:00",
      label: "Weekly live session",
      url: "#",
    },
    {
      day: "Sunday 12:00",
      label: "Weekly live session",
      url: "#",
    },
    {
      day: "Tuesday 19:00",
      label: "Weekly live session",
      url: "#",
    },
  ] satisfies TeamsSession[],

  /**
   * Availability slots offered on the "Tell us when you are available"
   * form. The order here is the order rendered on the page.
   */
  availabilitySlots: [
    "Monday evening",
    "Tuesday evening",
    "Wednesday evening",
    "Thursday evening",
    "Friday evening",
    "Saturday 12:00",
    "Sunday 12:00",
  ],

  /**
   * Course materials. Replace each `url` with the real Drive / Notion /
   * shared-doc link. The `tag` is optional.
   */
  materials: [
    {
      title: "Power BI setup guide",
      description:
        "Install Power BI Desktop the right way, sign in, and connect your first sample dataset.",
      url: "#",
      tag: "Setup",
    },
    {
      title: "PL-300 study checklist",
      description:
        "Every PL-300 exam objective mapped to a practical skill — and where in the course you build it.",
      url: "#",
      tag: "Exam prep",
    },
    {
      title: "Dashboard design checklist",
      description:
        "Layout, hierarchy, density, and the small choices that turn a report into a decision tool.",
      url: "#",
      tag: "Design",
    },
  ] satisfies Material[],
} as const;
