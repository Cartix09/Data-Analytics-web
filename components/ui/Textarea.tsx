import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  tone?: "light" | "dark";
  invalid?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { tone = "light", invalid, className, ...rest },
  ref
) {
  const surface =
    tone === "dark"
      ? "bg-white/5 text-text-on-dark border-white/15 placeholder:text-muted-dark/70"
      : "bg-white text-text-on-light border-border-light placeholder:text-muted-light/70";
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full min-h-[140px] rounded-md border p-4 text-base resize-y transition-colors",
        surface,
        "focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none",
        invalid && "border-danger focus:border-danger focus:ring-danger/20",
        className
      )}
      {...rest}
    />
  );
});
