import { KpiTile } from "./parts/KpiTile";
import { ChartLine } from "./parts/ChartLine";

export type ShowcaseVariant = "sales" | "ops" | "marketing";

interface Props {
  variant: ShowcaseVariant;
}

const config: Record<
  ShowcaseVariant,
  { title: string; kpis: { label: string; value: string; delta: string }[] }
> = {
  sales: {
    title: "Sales Performance",
    kpis: [
      { label: "Revenue", value: "$1.24M", delta: "+12.4%" },
      { label: "Pipeline", value: "$3.8M", delta: "+18%" },
      { label: "Win rate", value: "31%", delta: "+2 pp" },
    ],
  },
  ops: {
    title: "Operations KPI",
    kpis: [
      { label: "On-time %", value: "97.2%", delta: "+1.4 pp" },
      { label: "Lead time", value: "4.6 d", delta: "-0.8 d" },
      { label: "Backorders", value: "184", delta: "-22%" },
    ],
  },
  marketing: {
    title: "Marketing Funnel",
    kpis: [
      { label: "MQLs", value: "2,418", delta: "+9%" },
      { label: "CAC", value: "$184", delta: "-6%" },
      { label: "CTR", value: "3.4%", delta: "+0.4 pp" },
    ],
  },
};

export function ShowcaseDashboard({ variant }: Props) {
  const c = config[variant];
  return (
    <div className="rounded-xl border border-white/10 bg-elevated/95 overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span className="text-[10px] font-medium text-muted-dark">{c.title}</span>
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="p-3 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {c.kpis.map((k) => (
            <KpiTile key={k.label} {...k} />
          ))}
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.02] p-2">
          <ChartLine height={80} />
        </div>
      </div>
    </div>
  );
}
