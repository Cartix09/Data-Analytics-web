"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Send } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { RadioChipGroup } from "@/components/ui/RadioChipGroup";

const intents = [
  { value: "course", label: "Course question" },
  { value: "consulting", label: "Consulting inquiry" },
  { value: "corporate", label: "Corporate training" },
  { value: "other", label: "Other" },
];

const Schema = z.object({
  intent: z.enum(["course", "consulting", "corporate", "other"]),
  name: z.string().min(2, "Tell us your name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().optional(),
  message: z.string().min(10, "A sentence or two helps us reply well."),
});
type FormValues = z.infer<typeof Schema>;

export function ContactForm() {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      intent: "course",
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const intent = watch("intent");

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
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
        <h3 className="mt-4 text-xl font-semibold">Message received.</h3>
        <p className="mt-2 text-muted-light">
          We&rsquo;ll reply within one business day. If your inquiry is time-sensitive, you can also email{" "}
          <a className="underline hover:text-accent-strong" href="mailto:hello@anlytics.com">
            hello@anlytics.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <label className="mb-3 block text-sm font-medium">What&rsquo;s this about?</label>
        <RadioChipGroup
          name="intent"
          options={intents}
          value={intent}
          onChange={(v) => setValue("intent", v as FormValues["intent"])}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            placeholder="Your full name"
            invalid={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-danger" aria-live="polite">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            invalid={!!errors.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-danger" aria-live="polite">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium">
          Company <span className="font-normal text-muted-light">(optional)</span>
        </label>
        <Input id="company" placeholder="Where you work" {...register("company")} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          placeholder={
            intent === "consulting"
              ? "What you're trying to fix or build, current stack, and timeline."
              : intent === "corporate"
                ? "Team size, current tools, and what good looks like."
                : intent === "course"
                  ? "Where you are now, where you'd like to be, and any course questions."
                  : "Tell us what's on your mind."
          }
          invalid={!!errors.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-danger" aria-live="polite">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-light">We reply within one business day.</p>
        <Button type="submit" disabled={submitting}>
          <Send size={14} aria-hidden /> Send message
        </Button>
      </div>
    </form>
  );
}
