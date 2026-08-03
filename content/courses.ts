export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
export type CourseFormat = "Cohort" | "Self-paced" | "Hybrid";
export type CourseAudience = "B2C" | "B2B" | "Both";

export interface CurriculumWeek {
  week: number;
  title: string;
  goals: string[];
  deliverable: string;
}

export interface CourseFaq {
  q: string;
  a: string;
}

export interface Course {
  slug: string;
  title: string;
  eyebrow: string;
  outcome: string;
  level: CourseLevel;
  format: CourseFormat;
  audience: CourseAudience;
  durationLabel: string;
  topics: string[];
  heroH1: string;
  heroSubhead: string;
  outcomes: string[];
  audienceFor: string[];
  audienceNotFor: string[];
  curriculum: CurriculumWeek[];
  capstone: string;
  cadence: string[];
  prerequisites: string[];
  tools: string[];
  pricingNote: string;
  differentiators: { title: string; body: string }[];
  faq: CourseFaq[];
  published: boolean;
  available: boolean;
}

export const courses: Course[] = [
  {
    slug: "power-bi-pl-300",
    title: "Power BI Mastery",
    eyebrow: "Cohort + self-paced · PL-300 aligned",
    outcome:
      "Build dashboards that earn their place on the executive screen - and pass PL-300 along the way.",
    level: "Intermediate",
    format: "Cohort",
    audience: "Both",
    durationLabel: "8 weeks",
    topics: ["Power BI", "DAX", "Modeling", "Dashboards"],
    heroH1:
      "Power BI Mastery - Build dashboards that earn their place on the executive screen.",
    heroSubhead:
      "An 8-week program in Power BI modeling, DAX, and dashboard design - taught by a practitioner who builds production reporting at P&G. Aligned with the PL-300 exam, but designed for the work itself.",
    outcomes: [
      "Build a clean star schema from a messy export - and explain why it matters.",
      "Write DAX measures that don't break when filters or contexts change.",
      "Design dashboards that answer one specific business question, end to end.",
      "Connect Power BI to SQL sources and refresh on a schedule, with credentials handled correctly.",
      "Apply row-level security so the right people see the right slice of the data.",
      "Walk into the PL-300 exam knowing why each answer is the right one.",
    ],
    audienceFor: [
      "Analysts and BI developers who want a structured, practitioner-led path through Power BI.",
      "Working professionals preparing for the Microsoft PL-300 exam.",
      "Finance, ops, and supply professionals who want to own their reporting end-to-end.",
      "Career switchers building a portfolio with real datasets.",
    ],
    audienceNotFor: [
      "People looking for a quick certificate without doing the work.",
      "Engineers who want a deep-dive into Fabric data engineering - that's a different course.",
      "Teams who want pure Excel training with no modeling.",
    ],
    curriculum: [
      {
        week: 1,
        title: "Foundations & the analytics mindset",
        goals: [
          "Frame the business question before opening the tool.",
          "Map the data flow from source to dashboard.",
          "Set up a clean Power BI workspace.",
        ],
        deliverable: "A one-page brief for your capstone dashboard.",
      },
      {
        week: 2,
        title: "Data modeling & the star schema",
        goals: [
          "Design fact and dimension tables.",
          "Avoid the pitfalls of flat-table modeling.",
          "Build relationships that hold up under filters.",
        ],
        deliverable: "A modeled dataset ready for measures.",
      },
      {
        week: 3,
        title: "DAX in depth",
        goals: [
          "Master row context vs filter context.",
          "Write measures with CALCULATE confidently.",
          "Build time intelligence patterns that don't break.",
        ],
        deliverable: "A measures library scaffold.",
      },
      {
        week: 4,
        title: "Visual design for decisions",
        goals: [
          "Choose visuals that answer the question, not decorate it.",
          "Apply layout, hierarchy, and density rules.",
          "Build for the device the audience actually uses.",
        ],
        deliverable: "A dashboard mockup reviewed by peers.",
      },
      {
        week: 5,
        title: "Connecting to real data",
        goals: [
          "Connect to SQL Server, Postgres, and Excel sources.",
          "Set up scheduled refresh with managed credentials.",
          "Use parameters and dataflows to keep things tidy.",
        ],
        deliverable: "A live-refresh dashboard against a real source.",
      },
      {
        week: 6,
        title: "Row-level security & deployment",
        goals: [
          "Configure RLS for multi-tenant audiences.",
          "Publish to a workspace and assign roles.",
          "Document your model for the next analyst.",
        ],
        deliverable: "A deployed, secured report.",
      },
      {
        week: 7,
        title: "Capstone build",
        goals: [
          "Bring the model, measures, and visuals together.",
          "Iterate on a real business problem.",
          "Get review feedback from the instructor.",
        ],
        deliverable: "Your capstone Power BI dashboard.",
      },
      {
        week: 8,
        title: "PL-300 exam prep & next steps",
        goals: [
          "Map your skills to PL-300 exam objectives.",
          "Practice on PL-300-style questions.",
          "Plan your next 90 days as an analyst.",
        ],
        deliverable: "A study plan and a portfolio-ready dashboard.",
      },
    ],
    capstone:
      "A complete Power BI dashboard built on a real business dataset - modeled, measured, secured, and ready for a portfolio review.",
    cadence: [
      "Weekly live session with Alish (90 minutes).",
      "Async lessons released at the start of each week.",
      "Office hours every Friday for code review and Q&A.",
      "A private cohort space for discussion and peer review.",
      "All live sessions recorded and retained for the cohort.",
    ],
    prerequisites: [
      "Comfort with Excel formulas and pivot tables.",
      "Basic familiarity with business reporting concepts.",
      "A laptop running Power BI Desktop (Windows, or via VM on macOS).",
    ],
    tools: ["Power BI Desktop", "SQL (read-only access provided)", "Excel"],
    pricingNote: "Cohort pricing released at enrollment. Payment plans available.",
    differentiators: [
      {
        title: "Real datasets, not toy data.",
        body: "Every exercise is built on the kind of messy export you'll actually meet at work.",
      },
      {
        title: "Weekly review with the instructor.",
        body: "Your work is reviewed every week - not just at the end.",
      },
      {
        title: "Reporting automation included.",
        body: "Most PL-300 courses skip refresh, gateways, and scheduling. We don't.",
      },
      {
        title: "Designed for the job, not just the exam.",
        body: "The capstone is a portfolio piece - built to be shown to a hiring manager or your VP.",
      },
    ],
    faq: [
      {
        q: "Is this aligned with the PL-300 exam?",
        a: "Yes. The curriculum covers every PL-300 exam objective, and Week 8 is dedicated to exam preparation. The course is designed to teach the work first; PL-300 is the byproduct.",
      },
      {
        q: "Do I need prior Power BI experience?",
        a: "No. Comfort with Excel and a willingness to model data are enough. We start with foundations and move quickly into real modeling and DAX work.",
      },
      {
        q: "What if I miss a live session?",
        a: "All sessions are recorded and posted to the cohort space within 24 hours. Office hours are recorded as well.",
      },
      {
        q: "Can my employer reimburse the course?",
        a: "Yes. Once enrolled you'll receive an itemized invoice and a one-page program outline you can submit for reimbursement.",
      },
      {
        q: "Do I get a certificate?",
        a: "Yes. Completing the curriculum and submitting the capstone earns a verifiable ANLYTICS completion certificate.",
      },
      {
        q: "What hardware and software do I need?",
        a: "A laptop that runs Power BI Desktop (Windows native, or macOS with a Windows VM such as Parallels). 16GB RAM recommended for larger models.",
      },
      {
        q: "Is there a self-paced version?",
        a: "A self-paced version is on the roadmap. The cohort version runs first so the curriculum can be sharpened with live student feedback.",
      },
      {
        q: "What's the refund policy?",
        a: "Full refund within 14 days of cohort start if you've attended no more than the first live session. Details on the enrollment page.",
      },
    ],
    published: true,
    available: true,
  },
  {
    slug: "sql-for-analysts",
    title: "SQL for Analysts",
    eyebrow: "Self-paced",
    outcome:
      "Stop waiting on the data team. Pull, shape, and validate the data you need yourself.",
    level: "Beginner",
    format: "Self-paced",
    audience: "Both",
    durationLabel: "6 weeks · self-paced",
    topics: ["SQL", "Data modeling", "Analytics"],
    heroH1: "SQL for Analysts - Stop waiting on the data team.",
    heroSubhead:
      "A practical SQL course built around analyst workflows: pull, shape, validate, and ship the data you need without filing a ticket.",
    outcomes: [
      "Read and write SQL against real analytical schemas.",
      "Use joins, window functions, and CTEs without guessing.",
      "Validate the data you pull before you trust it.",
      "Translate ambiguous business questions into SQL.",
    ],
    audienceFor: [
      "Analysts who keep waiting on the data team.",
      "Power BI and Tableau users who want to own their queries.",
      "Operations and finance professionals who want self-service data access.",
    ],
    audienceNotFor: [
      "Database administrators looking for performance tuning deep-dives.",
      "Engineers building production data pipelines.",
    ],
    curriculum: [],
    capstone:
      "A self-built analytics query pack against a sample warehouse - joins, CTEs, window functions, validated end to end.",
    cadence: [
      "Self-paced lessons released in full at enrollment.",
      "Monthly group office hours with the instructor.",
      "Lifetime access to course materials.",
    ],
    prerequisites: ["Comfort with spreadsheets.", "No prior SQL required."],
    tools: ["Postgres or SQL Server (sandbox provided)"],
    pricingNote: "Self-paced pricing released at enrollment.",
    differentiators: [],
    faq: [],
    published: true,
    available: false,
  },
  {
    slug: "python-for-analysts",
    title: "Python for Analysts",
    eyebrow: "Self-paced",
    outcome:
      "Automate the work you keep doing twice - without becoming a software engineer.",
    level: "Intermediate",
    format: "Self-paced",
    audience: "Both",
    durationLabel: "6 weeks · self-paced",
    topics: ["Python", "Pandas", "Automation"],
    heroH1: "Python for Analysts - Automate the work you keep doing twice.",
    heroSubhead:
      "A focused Python course for analysts: pandas, scripts, scheduled jobs, and the right amount of engineering to make your reporting run itself.",
    outcomes: [
      "Read and write Python comfortably for data work.",
      "Use pandas to clean, reshape, and validate datasets.",
      "Schedule scripts that produce reports on their own.",
      "Connect Python to SQL, Excel, and Power BI sources.",
    ],
    audienceFor: [
      "Analysts who already use Excel and Power BI and want to automate the repetitive parts.",
      "Data analysts in transition toward analytics engineering.",
    ],
    audienceNotFor: [
      "Software engineers (you're past this).",
      "Beginners with no spreadsheet experience.",
    ],
    curriculum: [],
    capstone:
      "An end-to-end automation: a Python script that pulls from SQL, transforms with pandas, and ships a refreshed report on a schedule.",
    cadence: [
      "Self-paced lessons released in full at enrollment.",
      "Monthly group office hours with the instructor.",
    ],
    prerequisites: [
      "Comfort with Excel and basic data work.",
      "No prior Python required.",
    ],
    tools: ["Python 3", "pandas", "Jupyter / VS Code"],
    pricingNote: "Self-paced pricing released at enrollment.",
    differentiators: [],
    faq: [],
    published: true,
    available: false,
  },
  {
    slug: "dashboard-design-studio",
    title: "Dashboard Design Studio",
    eyebrow: "Workshop",
    outcome: "Dashboards designed for the decision, not the demo.",
    level: "Intermediate",
    format: "Cohort",
    audience: "Both",
    durationLabel: "3-week workshop",
    topics: ["Dashboard Design", "Visualization"],
    heroH1: "Dashboard Design Studio - designed for the decision, not the demo.",
    heroSubhead:
      "A focused workshop on dashboard layout, visual hierarchy, and the design choices that turn a report into a decision tool.",
    outcomes: [
      "Apply layout, hierarchy, and density rules confidently.",
      "Choose the right chart for the question.",
      "Critique and redesign existing dashboards.",
    ],
    audienceFor: [
      "Analysts who can build dashboards but want them to read better.",
      "BI developers who want to ship dashboards leadership actually uses.",
    ],
    audienceNotFor: [],
    curriculum: [],
    capstone: "A redesigned dashboard from your own work, reviewed in a final critique session.",
    cadence: ["Three weekly live workshops.", "Critique sessions with the instructor and peers."],
    prerequisites: ["Comfortable building basic Power BI or Tableau dashboards."],
    tools: ["Power BI or Tableau"],
    pricingNote: "Workshop pricing released at enrollment.",
    differentiators: [],
    faq: [],
    published: true,
    available: false,
  },
  {
    slug: "reporting-automation",
    title: "Reporting Automation",
    eyebrow: "Self-paced",
    outcome: "From the manual Monday report to a system that runs itself.",
    level: "Intermediate",
    format: "Self-paced",
    audience: "Both",
    durationLabel: "4 weeks · self-paced",
    topics: ["Automation", "Power BI", "Power Automate", "Python"],
    heroH1: "Reporting Automation - from manual Monday to a system that runs itself.",
    heroSubhead:
      "A practical course in turning recurring reports into refresh-on-schedule pipelines, with the audit trail your finance and compliance teams need.",
    outcomes: [
      "Identify the reports worth automating first.",
      "Wire Power BI, Power Automate, and Python where each earns its keep.",
      "Build a refresh schedule with proper credential and error handling.",
      "Document the pipeline so the next analyst can maintain it.",
    ],
    audienceFor: [
      "Analysts spending hours every week assembling the same report.",
      "Finance and ops teams who want their reporting to run itself.",
    ],
    audienceNotFor: ["Data engineers building production-grade ETL platforms."],
    curriculum: [],
    capstone: "An automated reporting pipeline shipped end to end, with documentation.",
    cadence: ["Self-paced lessons.", "Monthly office hours."],
    prerequisites: ["Comfort with Power BI or basic SQL."],
    tools: ["Power BI", "Power Automate", "Python (optional)"],
    pricingNote: "Self-paced pricing released at enrollment.",
    differentiators: [],
    faq: [],
    published: true,
    available: false,
  },
  {
    slug: "corporate-analytics-training",
    title: "Corporate Analytics Training",
    eyebrow: "For teams",
    outcome:
      "Upskill your team in the tools they already use, with curriculum mapped to your data.",
    level: "Beginner",
    format: "Hybrid",
    audience: "B2B",
    durationLabel: "Custom - 4 to 12 weeks",
    topics: ["Power BI", "SQL", "Reporting", "Workshops"],
    heroH1: "Corporate Analytics Training - built for your team, mapped to your data.",
    heroSubhead:
      "Power BI, SQL, and reporting workflows taught against your real data, on your schedule, with measurable team outcomes.",
    outcomes: [
      "A consistent analytics baseline across your team.",
      "Practical, hands-on training against your own datasets.",
      "Documented patterns your team can reuse after the program ends.",
    ],
    audienceFor: [
      "Heads of Data, Analytics, Finance, and Operations.",
      "BI managers building or scaling an analytics team.",
    ],
    audienceNotFor: ["Individual learners - see the public courses."],
    curriculum: [],
    capstone: "A team-shipped dashboard or reporting workflow, built against your real data.",
    cadence: [
      "Onsite, remote, or hybrid sessions.",
      "Cohort sized to your team.",
      "Custom curriculum scoped during a discovery call.",
    ],
    prerequisites: ["Discussed during scoping."],
    tools: ["Power BI", "SQL", "Excel", "Python (optional)"],
    pricingNote: "Scoped per engagement. Book a consultation to discuss.",
    differentiators: [],
    faq: [],
    published: true,
    available: true,
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function publishedCourses(): Course[] {
  return courses.filter((c) => c.published);
}

export function featuredCourses(): Course[] {
  return courses.filter((c) =>
    ["power-bi-pl-300", "sql-for-analysts", "reporting-automation"].includes(c.slug)
  );
}
