"use client";

import { useTransition } from "react";
import { Globe } from "lucide-react";
import { setLocale } from "@/app/actions/locale";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

interface Props {
  current: Locale;
  tone?: "light" | "dark";
}

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "az", label: "AZ" },
];

export function LanguageSwitcher({ current, tone = "dark" }: Props) {
  const [pending, start] = useTransition();

  const onChange = (locale: Locale) => {
    if (locale === current) return;
    start(() => {
      void setLocale(locale);
    });
  };

  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border p-1",
        isDark ? "border-white/15 bg-white/[0.03]" : "border-border-light bg-white"
      )}
      aria-label="Language switcher"
    >
      <Globe
        size={14}
        aria-hidden
        className={cn("mx-1.5", isDark ? "text-muted-dark" : "text-muted-light")}
      />
      {options.map((opt) => {
        const active = opt.value === current;
        return (
          <button
            key={opt.value}
            type="button"
            disabled={pending}
            aria-pressed={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold tracking-wider transition-colors",
              active
                ? isDark
                  ? "bg-accent text-text-on-light"
                  : "bg-text-on-light text-text-on-dark"
                : isDark
                  ? "text-muted-dark hover:text-text-on-dark"
                  : "text-muted-light hover:text-text-on-light",
              pending && "opacity-60"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
