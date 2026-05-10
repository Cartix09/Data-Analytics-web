"use client";

import { cn } from "@/lib/cn";

interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  className?: string;
}

export function RadioChipGroup({ name, options, value, onChange, className }: Props) {
  return (
    <div role="radiogroup" aria-label={name} className={cn("flex flex-wrap gap-2", className)}>
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150 ease-out-soft",
              active
                ? "bg-text-on-light text-text-on-dark border-text-on-light"
                : "bg-white text-text-on-light border-border-light hover:border-text-on-light/40"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
