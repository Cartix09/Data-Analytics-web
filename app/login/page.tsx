"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Lock, Check } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const Schema = z.object({
  email: z.string().email("Enter a valid email address."),
});
type FormValues = z.infer<typeof Schema>;

export default function LoginPlaceholderPage() {
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
        body: JSON.stringify({ email: values.email, source: "login-waitlist" }),
      });
      setDone(true);
      reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="surface-dark min-h-screen flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-30"
      />
      <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="mb-12">
          <Logo variant="light" />
        </div>
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent">
            <Lock size={20} aria-hidden />
          </div>
          <h1 className="mt-6 text-2xl md:text-3xl font-semibold text-text-on-dark">
            Student portal launching soon.
          </h1>
          <p className="mt-3 text-muted-dark leading-relaxed">
            The ANLYTICS student portal opens with the first Power BI Mastery cohort. Enter your email and we&rsquo;ll let you know the moment it&rsquo;s live.
          </p>
          {done ? (
            <p className="mt-8 flex items-center gap-2 text-sm text-text-on-dark" role="status">
              <Check size={16} aria-hidden className="text-accent" />
              You&rsquo;re on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-3">
              <label htmlFor="login-email" className="sr-only">
                Email
              </label>
              <Input
                id="login-email"
                tone="dark"
                type="email"
                placeholder="your@email.com"
                invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email ? (
                <p className="text-xs text-danger">{errors.email.message}</p>
              ) : null}
              <Button type="submit" disabled={submitting} className="w-full">
                Notify me
              </Button>
            </form>
          )}
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm text-muted-dark">
              Already enrolled?{" "}
              <a
                href="mailto:hello@anlytics.com"
                className="text-accent hover:underline"
              >
                Email us
              </a>{" "}
              and we&rsquo;ll get you what you need.
            </p>
            <Link
              href="/courses"
              className="mt-4 inline-block text-sm font-medium text-accent hover:text-text-on-dark transition-colors"
            >
              ← Browse courses
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
