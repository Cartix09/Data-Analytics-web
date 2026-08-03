export interface ResourceCategory {
  slug: string;
  label: string;
  description: string;
}

export const resourceCategories: ResourceCategory[] = [
  { slug: "power-bi", label: "Power BI", description: "Modeling, DAX, dashboards." },
  { slug: "sql", label: "SQL", description: "Queries, joins, validation." },
  { slug: "python", label: "Python", description: "pandas, automation, glue." },
  { slug: "design", label: "Dashboard Design", description: "Layout, hierarchy, density." },
  { slug: "automation", label: "Automation", description: "Refresh, schedules, pipelines." },
  { slug: "career", label: "Career", description: "PL-300, portfolios, interviews." },
];

export interface PostCard {
  title: string;
  category: string;
  description: string;
  status: "published" | "coming-soon";
  href: string;
}

// Phase 1 placeholder - honest "coming soon" cards. Replace with real posts later.
export const upcomingPosts: PostCard[] = [
  {
    title: "A practical guide to the PL-300 exam (the parts that matter at work)",
    category: "Career",
    description:
      "An honest walk-through of the exam, where it overlaps with real reporting work, and where it doesn't.",
    status: "coming-soon",
    href: "/resources",
  },
  {
    title: "DAX measures that don't break: a pattern library",
    category: "Power BI",
    description:
      "The handful of DAX patterns that hold up under filter context, time intelligence, and edge cases.",
    status: "coming-soon",
    href: "/resources",
  },
  {
    title: "From manual Monday: a reporting automation walkthrough",
    category: "Automation",
    description:
      "A real before/after - turning a recurring weekly report into a refresh-on-schedule pipeline.",
    status: "coming-soon",
    href: "/resources",
  },
  {
    title: "Star schemas for analysts who'd rather not think about them",
    category: "Power BI",
    description:
      "A short, practical primer on fact tables, dimension tables, and the pitfalls of flat data.",
    status: "coming-soon",
    href: "/resources",
  },
  {
    title: "SQL window functions: the four you'll actually use",
    category: "SQL",
    description:
      "ROW_NUMBER, RANK, LAG, and SUM OVER - the window patterns that earn their keep in analyst work.",
    status: "coming-soon",
    href: "/resources",
  },
  {
    title: "Designing dashboards for the decision, not the demo",
    category: "Dashboard Design",
    description:
      "A short framework for layout, hierarchy, and density when the audience is a busy executive.",
    status: "coming-soon",
    href: "/resources",
  },
];
