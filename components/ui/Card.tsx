import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tone?: "light" | "dark" | "white";
  hover?: boolean;
  children: ReactNode;
  padding?: "default" | "tight" | "loose";
}

export function Card({
  tone = "white",
  hover = false,
  children,
  padding = "default",
  className,
  ...rest
}: Props) {
  const surface =
    tone === "dark"
      ? "bg-elevated text-text-on-dark border-border-dark"
      : tone === "light"
        ? "bg-light text-text-on-light border-border-light"
        : "bg-white text-text-on-light border-border-light";

  const pad =
    padding === "tight"
      ? "p-6 md:p-7"
      : padding === "loose"
        ? "p-8 md:p-12"
        : "p-7 md:p-8";

  return (
    <div
      className={cn(
        "relative rounded-xl border transition-all duration-200 ease-out-soft",
        surface,
        pad,
        hover &&
          "hover:-translate-y-0.5 hover:shadow-card hover:border-accent/40",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
