export const primaryNav = [
  { label: "Courses", href: "/courses" },
  { label: "Consulting", href: "/consulting" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  Courses: [
    { label: "All courses", href: "/courses" },
    { label: "Power BI Mastery (PL-300)", href: "/courses/power-bi-pl-300" },
    { label: "SQL for Analysts", href: "/courses" },
    { label: "Python for Analysts", href: "/courses" },
    { label: "Corporate training", href: "/consulting#corporate-training" },
  ],
  Consulting: [
    { label: "Dashboard builds", href: "/consulting#dashboard-builds" },
    { label: "Reporting automation", href: "/consulting#reporting-automation" },
    { label: "Analytics audit", href: "/consulting#analytics-audit" },
    { label: "Book a consultation", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Student login", href: "/login" },
  ],
  Resources: [
    { label: "The Analytics Journal", href: "/resources" },
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
  ],
} as const;
