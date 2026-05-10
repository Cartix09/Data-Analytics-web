"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const Schema = z.object({
  courseSlug: z.string(),
  name: z.string().min(2, "Tell us your name."),
  email: z.string().email("Enter a valid email address."),
  role: z.string().min(2, "Your current role helps us tailor the fit."),
  company: z.string().optional(),
  whyNow: z.string().min(10, "A sentence or two on why now is helpful."),
  timeZone: z.string().optional(),
  referral: z.string().optional(),
});
type FormValues = z.infer<typeof Schema>;

interface Props {
  courseSlug: string;
  courseTitle: string;
}

export function ApplicationForm({ courseSlug, courseTitle }: Props) {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      courseSlug,
      name: "",
      email: "",
      role: "",
      company: "",
      whyNow: "",
      timeZone: "",
      referral: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await fetch("/api/applications", {
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

  if (done) {
    return (
      <div className="rounded-xl border border-border-light bg-white p-8" role="status">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
          <Check size={20} aria-hidden />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Application received.</h3>
        <p className="mt-2 text-muted-light">
          You&rsquo;ll get an email within one business day with a link to schedule a short fit call. Thank you for applying to <strong>{courseTitle}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <input type="hidden" {...register("courseSlug")} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="app-name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <Input
            id="app-name"
            placeholder="Your full name"
            invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-danger">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="app-email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <Input
            id="app-email"
            type="email"
            placeholder="you@company.com"
            invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="app-role" className="mb-2 block text-sm font-medium">
            Current role
          </label>
          <Input
            id="app-role"
            placeholder="e.g., Financial Analyst"
            invalid={!!errors.role}
            {...register("role")}
          />
          {errors.role ? (
            <p className="mt-1 text-xs text-danger">{errors.role.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="app-company" className="mb-2 block text-sm font-medium">
            Company <span className="font-normal text-muted-light">(optional)</span>
          </label>
          <Input id="app-company" placeholder="Where you work" {...register("company")} />
        </div>
      </div>
      <div>
        <label htmlFor="app-why" className="mb-2 block text-sm font-medium">
          Why now?
        </label>
        <Textarea
          id="app-why"
          placeholder="What you're trying to learn, and why this cohort fits."
          invalid={!!errors.whyNow}
          {...register("whyNow")}
        />
        {errors.whyNow ? (
          <p className="mt-1 text-xs text-danger">{errors.whyNow.message}</p>
        ) : null}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="app-tz" className="mb-2 block text-sm font-medium">
            Time zone <span className="font-normal text-muted-light">(optional)</span>
          </label>
          <Input id="app-tz" placeholder="e.g., GMT+1" {...register("timeZone")} />
        </div>
        <div>
          <label htmlFor="app-ref" className="mb-2 block text-sm font-medium">
            How did you hear about us? <span className="font-normal text-muted-light">(optional)</span>
          </label>
          <Input id="app-ref" placeholder="LinkedIn, referral, search, etc." {...register("referral")} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted-light">
          We reply within one business day with next steps.
        </p>
        <Button type="submit" disabled={submitting}>
          Submit application
        </Button>
      </div>
    </form>
  );
}
