import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  tone?: "light" | "dark";
  invalid?: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { tone = "light", invalid, className, ...rest },
  ref
) {
  const surface =
    tone === "dark"
      ? "bg-white/5 text-text-on-dark border-white/15 placeholder:text-muted-dark/70"
      : "bg-white text-text-on-light border-border-light placeholder:text-muted-light/70";
  return (
    <input
      ref={ref}
      className={cn(
        "w-full h-12 rounded-md border px-4 text-base transition-colors",
        surface,
        "focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none",
        invalid && "border-danger focus:border-danger focus:ring-danger/20",
        className
      )}
      {...rest}
    />
  );
});
