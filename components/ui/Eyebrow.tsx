import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props {
  children: ReactNode;
  tone?: "dark" | "light";
  bordered?: boolean;
  className?: string;
}

export function Eyebrow({ children, tone = "light", bordered = false, className }: Props) {
  const color = tone === "dark" ? "text-accent" : "text-accent-strong";
  return (
    <span
      className={cn(
        "inline-flex items-center text-eyebrow uppercase tracking-[0.18em]",
        color,
        bordered && "border border-current/30 px-3 py-1.5 rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
}
