export interface MethodologyStep {
  number: string;
  title: string;
  body: string;
}

export const methodology: MethodologyStep[] = [
  {
    number: "01",
    title: "Audit",
    body: "We map the data, the reports, and the decisions they're meant to support. We name what's broken before we build.",
  },
  {
    number: "02",
    title: "Model",
    body: "We design the semantic layer first — clean star schemas, well-named measures, a single source of truth.",
  },
  {
    number: "03",
    title: "Build",
    body: "We build dashboards around the decision, not the data. Visuals serve the question, not the tool.",
  },
  {
    number: "04",
    title: "Automate",
    body: "We wire reporting to refresh on its own — so analysts spend their time on analysis, not assembly.",
  },
];
