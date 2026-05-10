import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props {
  children: ReactNode;
  tone?: "light" | "dark" | "accent";
  className?: string;
}

export function Chip({ children, tone = "light", className }: Props) {
  const styles =
    tone === "dark"
      ? "bg-white/5 text-text-on-dark border-white/15"
      : tone === "accent"
        ? "bg-accent/10 text-accent-strong border-accent/30"
        : "bg-white text-text-on-light border-border-light";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        styles,
        className
      )}
    >
      {children}
    </span>
  );
}
