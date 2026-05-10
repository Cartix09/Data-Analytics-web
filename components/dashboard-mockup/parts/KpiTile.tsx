import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface Props {
  label: string;
  value: string;
  delta: string;
  pulse?: boolean;
}

export function KpiTile({ label, value, delta, pulse = false }: Props) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-3 flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-[0.16em] text-muted-dark/80">
        {label}
      </span>
      <span className="text-lg font-semibold text-text-on-dark tabular-nums">{value}</span>
      <span
        className={cn(
          "inline-flex items-center gap-1 text-[11px] font-medium text-accent",
          pulse && "animate-pulse-soft"
        )}
      >
        <ArrowUpRight size={12} aria-hidden /> {delta}
      </span>
    </div>
  );
}
