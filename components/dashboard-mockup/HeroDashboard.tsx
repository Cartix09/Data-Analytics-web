import { KpiTile } from "./parts/KpiTile";
import { ChartLine } from "./parts/ChartLine";
import { Slicer } from "./parts/Slicer";
import { MatrixVisual } from "./parts/MatrixVisual";

export function HeroDashboard() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[28px] bg-accent/10 blur-3xl opacity-60"
      />
      <div
        role="img"
        aria-label="Mockup of a Power BI sales performance dashboard"
        className="relative rounded-2xl border border-white/10 bg-elevated/95 backdrop-blur shadow-accent overflow-hidden"
      >
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-[11px] font-medium text-muted-dark">
              Sales Performance - Q4
            </span>
          </div>
          <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-muted-dark">
            Last 12 months
          </span>
        </div>

        {/* body */}
        <div className="p-4 space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-4 gap-2.5">
            <KpiTile label="Revenue" value="$1.24M" delta="+12.4%" pulse />
            <KpiTile label="Conversion" value="3.8%" delta="+0.6 pp" />
            <KpiTile label="AOV" value="$284" delta="+4.1%" />
            <KpiTile label="Active Accts" value="1,872" delta="+8.0%" />
          </div>

          {/* chart + side */}
          <div className="grid grid-cols-[1fr_140px] gap-3">
            <div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted-dark">
                  Revenue trend
                </span>
                <span className="text-[10px] text-accent">▲ on plan</span>
              </div>
              <ChartLine />
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.02] p-3 flex flex-col gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted-dark">
                  Slicers
                </span>
                <div className="mt-2">
                  <Slicer chips={["Region", "Channel", "Period"]} />
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted-dark">
                  By region
                </span>
                <div className="mt-2">
                  <MatrixVisual />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
