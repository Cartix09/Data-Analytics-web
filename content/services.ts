export interface Service {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  icon: "chart" | "gear" | "search" | "team";
}

export const services: Service[] = [
  {
    slug: "dashboard-builds",
    title: "Dashboard Builds",
    summary:
      "We design and ship Power BI dashboards built around the decision your leadership is actually trying to make.",
    outcomes: [
      "A dashboard that earns its place on the leadership screen.",
      "A clean semantic model your team can extend.",
      "Documentation your next analyst will thank you for.",
    ],
    deliverables: [
      "Discovery and decision-mapping workshop.",
      "Star-schema data model.",
      "Production dashboard with row-level security.",
      "Handover documentation and a 30-day support window.",
    ],
    icon: "chart",
  },
  {
    slug: "reporting-automation",
    title: "Reporting Automation",
    summary:
      "We turn manual, recurring reports into refresh-on-schedule pipelines — with the audit trail your finance and compliance teams need.",
    outcomes: [
      "Hours of weekly assembly time recovered.",
      "Reports that refresh on a schedule, not on a deadline.",
      "An audit trail your finance and compliance teams trust.",
    ],
    deliverables: [
      "Audit of the current reporting workflow.",
      "Automation built in Power BI, Power Automate, or Python — whichever fits.",
      "Scheduled refresh with credential and error handling.",
      "Operating runbook for your team.",
    ],
    icon: "gear",
  },
  {
    slug: "analytics-audit",
    title: "Analytics Audit",
    summary:
      "We map your reporting stack, find the leaks, and tell you what to fix first — before you spend on more tools.",
    outcomes: [
      "A clear map of your current reporting stack.",
      "A prioritized list of what to fix and what to retire.",
      "An honest answer on whether you need more tools or fewer.",
    ],
    deliverables: [
      "Stakeholder interviews and report inventory.",
      "Findings report with prioritized recommendations.",
      "Roadmap with effort, risk, and impact estimates.",
      "Optional follow-on engagement to execute.",
    ],
    icon: "search",
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    summary:
      "Power BI, SQL, and reporting workflows taught against your real data — on your schedule, with measurable team outcomes.",
    outcomes: [
      "A consistent analytics baseline across the team.",
      "Hands-on training mapped to your real datasets.",
      "Patterns and templates your team will reuse.",
    ],
    deliverables: [
      "Scoping call to align on curriculum.",
      "Custom workshop track (4 to 12 weeks).",
      "Team-shipped capstone deliverable.",
      "Optional ongoing office hours.",
    ],
    icon: "team",
  },
];

export const engagementModels = [
  {
    title: "Fixed-scope build",
    body: "A defined deliverable: one dashboard, one automated report, one audit. Clear scope, fixed price, fixed timeline.",
  },
  {
    title: "Retainer",
    body: "Ongoing analytics support for teams without a senior analyst in-house. Weekly priorities, monthly deliverables.",
  },
  {
    title: "Workshop / training engagement",
    body: "A structured Power BI, SQL, or reporting program for your team — taught against your real data.",
  },
];

export const stacks = [
  "Power BI",
  "SQL Server",
  "Postgres",
  "Snowflake",
  "BigQuery",
  "Excel",
  "Power Automate",
  "Python",
  "Azure",
];
