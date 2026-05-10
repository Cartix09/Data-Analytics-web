import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, size = "default", className, ...rest }: Props) {
  const max =
    size === "narrow" ? "max-w-[760px]" : size === "wide" ? "max-w-[1320px]" : "max-w-[1200px]";
  return (
    <div className={cn("mx-auto w-full px-6 md:px-12 lg:px-16", max, className)} {...rest}>
      {children}
    </div>
  );
}
