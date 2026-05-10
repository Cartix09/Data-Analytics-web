import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "dark" | "elevated" | "light" | "white";

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  tone?: Tone;
  pattern?: boolean;
  spacing?: "default" | "tight" | "loose";
}

const tones: Record<Tone, string> = {
  dark: "surface-dark",
  elevated: "surface-elevated",
  light: "surface-light",
  white: "surface-white",
};

export function Section({
  children,
  tone = "light",
  pattern = false,
  spacing = "default",
  className,
  ...rest
}: Props) {
  const padding =
    spacing === "tight"
      ? "py-12 md:py-16"
      : spacing === "loose"
        ? "py-24 md:py-32"
        : "py-16 md:py-24";
  return (
    <section
      className={cn("relative w-full", tones[tone], padding, className)}
      {...rest}
    >
      {pattern ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-pattern opacity-60"
        />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}
