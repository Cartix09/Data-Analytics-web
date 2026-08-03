"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const Schema = z.object({
  name: z.string().min(2, "Tell us your name."),
  email: z.string().email("Enter a valid email address."),
  availability: z.array(z.string()).min(1, "Pick at least one slot that works."),
  note: z.string().optional(),
});
type FormValues = z.infer<typeof Schema>;

interface Props {
  slots: readonly string[];
}

export function AvailabilityForm({ slots }: Props) {
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
    defaultValues: { name: "", email: "", availability: [], note: "" },
  });

  const selected = watch("availability") ?? [];

  const toggle = (slot: string) => {
    const next = selected.includes(slot)
      ? selected.filter((s) => s !== slot)
      : [...selected, slot];
    setValue("availability", next, { shouldValidate: true });
  };

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await fetch("/api/availability", {
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
      <div className="rounded-xl border border-border-light bg-white p-6 md:p-8" role="status">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
          <Check size={18} aria-hidden />
        </div>
        <h3 className="mt-4 text-lg font-semibold">Thanks - got it.</h3>
        <p className="mt-2 text-sm text-muted-light">
          We&rsquo;ll use your availability when we schedule the next live session block.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="avail-name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <Input
            id="avail-name"
            placeholder="Your full name"
            invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-danger">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="avail-email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <Input
            id="avail-email"
            type="email"
            placeholder="you@email.com"
            invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm font-medium">
          When are you generally free?
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {slots.map((slot) => {
            const isSelected = selected.includes(slot);
            return (
              <button
                type="button"
                key={slot}
                aria-pressed={isSelected}
                onClick={() => toggle(slot)}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-md border px-4 py-3 text-left text-sm font-medium transition-all duration-150 ease-out-soft",
                  isSelected
                    ? "border-accent bg-accent/10 text-accent-strong"
                    : "border-border-light bg-white text-text-on-light hover:border-text-on-light/30"
                )}
              >
                <span>{slot}</span>
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded border",
                    isSelected
                      ? "bg-accent border-accent text-text-on-light"
                      : "border-border-light"
                  )}
                  aria-hidden
                >
                  {isSelected ? <Check size={12} /> : null}
                </span>
              </button>
            );
          })}
        </div>
        {errors.availability ? (
          <p className="mt-2 text-xs text-danger">{errors.availability.message}</p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor="avail-note" className="mb-2 block text-sm font-medium">
          Anything else? <span className="font-normal text-muted-light">(optional)</span>
        </label>
        <Textarea
          id="avail-note"
          placeholder="Time zone, scheduling constraints, conflicts, etc."
          {...register("note")}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-light">
          We use this to choose live session times that work for most students.
        </p>
        <Button type="submit" disabled={submitting}>
          Send availability
        </Button>
      </div>
    </form>
  );
}
