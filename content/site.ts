export const site = {
  name: "ANLYTICS",
  tagline: "Data analytics & insights — taught and shipped.",
  description:
    "Practical analytics education and reporting consulting. Power BI, SQL, and Python training built around real reporting work — and dashboards built by practitioners who do this every day.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anlytics.com",
  email: "hello@anlytics.com",
  // Set NEXT_PUBLIC_BOOKING_URL in .env.local to your Cal.com (or Calendly)
  // event link. When empty, the BookingEmbed falls back to a helpful message.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  founder: {
    name: "Alish Niftaliyev",
    role: "Senior Data Analyst, Procter & Gamble · PL-300 Instructor & Mentor",
    linkedin: "https://www.linkedin.com/in/alishniftaliyev/",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/alishniftaliyev/",
    youtube: "https://www.youtube.com/@AlishNiftaliyev",
    instagram: "https://instagram.com/alishniftaliyev",
  },
} as const;

export type Site = typeof site;
