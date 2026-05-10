import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
  children?: ReactNode;
  align?: "left" | "center";
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
  children,
  align = "left",
}: Props) {
  const isDark = tone === "dark";
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-28 lg:pt-36 pb-12 md:pb-16",
        isDark ? "surface-dark" : "surface-light"
      )}
    >
      {isDark ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-pattern opacity-30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
          />
        </>
      ) : null}
      <Container>
        <div
          className={cn(
            align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
          )}
        >
          {eyebrow ? <Eyebrow tone={isDark ? "dark" : "light"}>{eyebrow}</Eyebrow> : null}
          <h1
            className={cn(
              "mt-4 text-display-md md:text-display-lg text-balance",
              isDark ? "text-text-on-dark" : "text-text-on-light"
            )}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                "mt-5 max-w-2xl text-base md:text-lg leading-relaxed",
                align === "center" ? "mx-auto" : "",
                isDark ? "text-muted-dark" : "text-muted-light"
              )}
            >
              {subtitle}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
