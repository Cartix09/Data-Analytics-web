export const site = {
  name: "ANLYTICS",
  tagline: "Data analytics & insights — taught and shipped.",
  description:
    "Practical analytics education and reporting consulting. Power BI, SQL, and Python training built around real reporting work — and dashboards built by practitioners who do this every day.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anlytics.com",
  email: "hello@anlytics.com",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/anlytics/consultation",
  founder: {
    name: "Alish Niftaliyev",
    role: "Senior Data Analyst, Procter & Gamble · PL-300 Instructor & Mentor",
    linkedin: "https://www.linkedin.com/in/alish-niftaliyev",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/anlytics",
    youtube: "https://youtube.com/@anlytics",
    x: "https://x.com/anlytics",
  },
} as const;

export type Site = typeof site;
