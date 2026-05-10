"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";

const Schema = z.object({
  email: z.string().email("Enter a valid email address."),
});
type FormValues = z.infer<typeof Schema>;

interface Props {
  tone?: "dark" | "light";
  compact?: boolean;
  heading?: string;
  description?: string;
}

export function NewsletterInline({
  tone = "light",
  compact = false,
  heading = "The Analytics Journal",
  description = "One practical breakdown every week — dashboards, DAX, SQL, and the reporting habits that hold up at work.",
}: Props) {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      setDone(true);
      reset();
    } finally {
      setSubmitting(false);
    }
  };

  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "w-full",
        compact ? "" : isDark ? "rounded-xl border border-white/10 bg-white/[0.02] p-8" : "rounded-xl border border-border-light bg-white p-8"
      )}
    >
      {!compact ? (
        <div className="mb-6">
          <h3
            className={cn(
              "text-2xl font-semibold",
              isDark ? "text-text-on-dark" : "text-text-on-light"
            )}
          >
            {heading}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              isDark ? "text-muted-dark" : "text-muted-light"
            )}
          >
            {description}
          </p>
        </div>
      ) : null}

      {done ? (
        <p
          className={cn(
            "flex items-center gap-2 text-sm",
            isDark ? "text-text-on-dark" : "text-text-on-light"
          )}
          role="status"
        >
          <Check size={16} aria-hidden className="text-accent" />
          You&rsquo;re on the list. The next issue is on its way.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-2 sm:flex-row">
            <label htmlFor={compact ? "footer-email" : "newsletter-email"} className="sr-only">
              Email
            </label>
            <input
              id={compact ? "footer-email" : "newsletter-email"}
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className={cn(
                "h-12 flex-1 rounded-md border px-4 text-base transition-colors",
                isDark
                  ? "bg-white/5 text-text-on-dark border-white/15 placeholder:text-muted-dark/70"
                  : "bg-white text-text-on-light border-border-light placeholder:text-muted-light/70",
                "focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none",
                errors.email && "border-danger focus:border-danger focus:ring-danger/20"
              )}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "newsletter-email-error" : undefined}
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-text-on-light hover:bg-accent-strong hover:text-white transition-colors disabled:opacity-60"
            >
              Subscribe
              <ArrowRight size={14} aria-hidden />
            </button>
          </div>
          <p
            className={cn(
              "mt-3 text-xs",
              isDark ? "text-muted-dark" : "text-muted-light"
            )}
            id={errors.email ? "newsletter-email-error" : undefined}
            aria-live="polite"
          >
            {errors.email?.message ?? "No spam. Unsubscribe in one click."}
          </p>
        </form>
      )}
    </div>
  );
}
