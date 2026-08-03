/**
 * English dictionary - default locale.
 *
 * Keep keys in sync with `content/i18n/az.ts`. Each new translated string
 * should be added to BOTH files; the type lives here and `az.ts` extends it.
 *
 * Product/brand tokens (Power BI, SQL, Python, PL-300, ANLYTICS) stay in
 * their original form across all locales.
 */
// Note: type is intentionally widened (no `as const`) so other locales can
// supply their own string values for the same keys.
const enDict = {
  meta: {
    localeName: "English",
    localeShort: "EN",
  },
  nav: {
    courses: "Courses",
    consulting: "Consulting",
    resources: "Resources",
    about: "About",
    contact: "Contact",
    studentLogin: "Student login",
    bookConsultation: "Book a consultation",
    skipToContent: "Skip to main content",
  },
  hero: {
    eyebrow: "Data analytics · Power BI · Consulting",
    h1: "Turn your data into decisions your business actually acts on.",
    subhead:
      "We build dashboards, automate reporting, and run analytics audits for teams, and train the professionals who will own that work tomorrow. Power BI, SQL, and Python, taught with real workplace reporting in mind.",
    primaryCta: "Work with our team",
    secondaryCta: "Explore courses",
    microTrust:
      "Led by Alish Niftaliyev - Expert Data Analyst at Procter & Gamble · PL-300 Instructor & Mentor.",
  },
  learnHire: {
    b2bEyebrow: "For teams · B2B",
    b2bTitle: "Dashboards, reporting, and analytics for your team.",
    b2bBody:
      "We build the dashboards leadership keeps on-screen, automate the reports that eat your team's Mondays, and train the analysts who'll own that work after we leave.",
    b2bCta: "Book a consultation for your team",
    learnEyebrow: "For professionals · Learn",
    learnTitle: "Become the analyst your team relies on.",
    learnBody:
      "Cohort and self-paced programs in Power BI, SQL, and Python - built around the reporting work analysts actually do at companies that take data seriously.",
    learnCta: "See all courses",
  },
  consultingPreview: {
    eyebrow: "For teams · Consulting",
    title: "Dashboards, automation, and training built around your team.",
    body:
      "Engagements designed for finance, ops, and analytics leaders who need decisions backed by data their team can trust - and own.",
    seeAll: "See all services",
    primaryCta: "Book a consultation for your team",
  },
  methodology: {
    eyebrow: "Methodology",
    title: "Audit. Model. Build. Automate.",
    body:
      "The same four-step approach we follow on every consulting engagement is the spine of every course we teach.",
  },
  courseCard: {
    viewCourse: "View course",
    notifyMe: "Notify me",
    comingSoon: "Coming soon",
    weeks: "weeks",
    weeksSelfPaced: "weeks · self-paced",
    workshop: "workshop",
    customWeeks: "Custom - 4 to 12 weeks",
  },
  resourcesPage: {
    pageTitle: "The Analytics Journal.",
    pageSubtitle:
      "Practical breakdowns, templates, and notes from the work - without the buzzwords. The Journal opens with the first published issue. Subscribe and we'll send it the day it ships.",
    comingUpEyebrow: "Coming up",
    comingUpTitle: "First issues in the pipeline.",
    comingUpBody:
      "We're writing the kind of posts we wish we'd had earlier in our careers. Subscribe and you'll get them as they publish - no clickbait, no stuffing.",
    comingSoon: "Coming soon",
  },
  faqSection: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
  },
  finalCta: {
    consultingTitle: "Need dashboards, reporting automation, or analytics training for your team?",
    consultingCta: "Book a consultation for your team",
    coursesTitle: "Become the analyst your team relies on.",
    coursesCta: "Apply to a course",
  },
  courseFilters: {
    all: "All",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    cohort: "Cohort",
    selfPaced: "Self-paced",
    forTeams: "For teams",
    emptyTitle: "No programs match this filter yet.",
    emptyBody:
      "Talk to us about a custom training path - we scope corporate programs around your team's real data and workflows.",
    emptyCta: "Book a consultation",
  },
  contact: {
    pageTitle: "Tell us what your team is trying to figure out.",
    pageSubtitle:
      "Whether you're scoping a dashboard build, automating recurring reports, training your analytics team, or picking the right course for yourself - the same inbox reads them all. We reply within one business day.",
    intent: {
      consulting: "Consulting inquiry",
      corporate: "Corporate training",
      course: "Course question",
      other: "Other",
    },
    labels: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      send: "Send message",
      whatAbout: "What's this about?",
      sla: "We reply within one business day.",
    },
  },
  studentHub: {
    pageTitle: "Welcome to the ANLYTICS Student Hub.",
    pageSubtitle:
      "A simple home for course materials, live sessions, and availability - while the full ANLYTICS portal is being built. Bookmark this page.",
    classroomHeading: "Course materials and assignments.",
    classroomBody:
      "Course materials and assignments are shared through Google Classroom while the ANLYTICS portal is being built.",
    classroomCta: "Open Google Classroom",
    teamsHeading: "Join the weekly live sessions.",
    teamsBody:
      "All live sessions run on Microsoft Teams. Add the links to your calendar - recordings are posted in Google Classroom afterwards.",
    teamsCta: "Join Teams meeting",
    teamsComingSoon: "Link coming soon",
    availabilityHeading: "Tell us when you are available.",
    availabilityBody:
      "We use this to choose live session times that work for most students. Pick every slot you'd realistically join - you can update it any time by submitting again.",
    availabilitySend: "Send availability",
    materialsHeading: "Everything you need to get started - and stay on track.",
    materialsBody:
      "Resources curated for the current cohort. New materials are added as we cover them.",
    materialsCta: "Open material",
  },
  footer: {
    courses: "Courses",
    consulting: "Consulting",
    company: "Company",
    resources: "Resources",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    builtBy: "Built by Mursal Hajiyev and Alish Niftaliyev.",
    newsletterHeading: "The Analytics Journal",
    newsletterBody:
      "One practical breakdown every week - dashboards, DAX, SQL, and the reporting habits that hold up at work.",
    subscribe: "Subscribe",
    noSpam: "No spam. Unsubscribe in one click.",
    language: "Language",
  },
};

export type Dictionary = typeof enDict;
export const en: Dictionary = enDict;
