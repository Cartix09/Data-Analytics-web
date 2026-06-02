import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getDict, getLocale } from "@/lib/i18n";

interface Props {
  variant?: "split" | "single";
  primary?: { label: string; href: string; description: string };
  secondary?: { label: string; href: string; description: string };
}

export async function FinalCtaBand({
  variant = "split",
  primary,
  secondary,
}: Props) {
  const t = getDict(await getLocale()).finalCta;
  const resolvedPrimary = primary ?? {
    label: t.consultingCta,
    href: "/contact",
    description: t.consultingTitle,
  };
  const resolvedSecondary = secondary ?? {
    label: t.coursesCta,
    href: "/courses/power-bi-pl-300",
    description: t.coursesTitle,
  };
  return (
    <section className="surface-dark py-16 md:py-24 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[120px]"
      />
      <Container>
        {variant === "split" ? (
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 relative">
            <Link
              href={resolvedPrimary.href}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-8 md:p-12 transition-all duration-200 ease-out-soft hover:border-accent/40 hover:-translate-y-0.5"
            >
              <p className="text-display-md text-text-on-dark text-balance">
                {resolvedPrimary.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-accent font-medium">
                {resolvedPrimary.label}
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
            <Link
              href={resolvedSecondary.href}
              className="group flex flex-col justify-between rounded-xl border border-accent/40 bg-accent/[0.06] p-8 md:p-12 transition-all duration-200 ease-out-soft hover:border-accent hover:-translate-y-0.5"
            >
              <p className="text-display-md text-text-on-dark text-balance">
                {resolvedSecondary.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-accent font-semibold">
                {resolvedSecondary.label}
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto relative">
            <h2 className="text-display-md md:text-display-lg text-text-on-dark text-balance">
              {resolvedPrimary.description}
            </h2>
            <Link
              href={resolvedPrimary.href}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-semibold text-text-on-light hover:bg-accent-strong hover:text-white transition-colors"
            >
              {resolvedPrimary.label}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
