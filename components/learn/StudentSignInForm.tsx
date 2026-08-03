"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LogIn } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { signInAsStudent } from "@/app/actions/student";

const Schema = z.object({
  email: z.string().email("Enter the email you used at enrollment."),
});
type FormValues = z.infer<typeof Schema>;

export function StudentSignInForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: FormValues) => {
    setError(null);
    start(async () => {
      const res = await signInAsStudent(values.email);
      if (!res.ok) setError(res.error ?? "Sign-in failed.");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
      <label htmlFor="learn-email" className="sr-only">
        Email
      </label>
      <Input
        id="learn-email"
        tone="dark"
        type="email"
        placeholder="you@email.com"
        invalid={!!errors.email}
        {...register("email")}
      />
      {errors.email ? <p className="text-xs text-danger">{errors.email.message}</p> : null}
      {error ? <p className="text-xs text-danger">{error}</p> : null}
      <Button type="submit" disabled={pending} className="w-full">
        <LogIn size={14} aria-hidden /> Enter learning portal
      </Button>
    </form>
  );
}
