"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { CurriculumWeek } from "@/content/courses";
import { cn } from "@/lib/cn";

interface Props {
  weeks: CurriculumWeek[];
}

export function CurriculumAccordion({ weeks }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="rounded-xl border border-border-light bg-white overflow-hidden">
      {weeks.map((w, i) => {
        const isOpen = open === i;
        return (
          <div key={w.week} className={i > 0 ? "border-t border-border-light" : ""}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-6 py-5 text-left hover:bg-light transition-colors"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-strong text-sm font-semibold">
                W{w.week}
              </span>
              <span className="flex-1">
                <span className="block text-base font-semibold">{w.title}</span>
              </span>
              <ChevronDown
                size={18}
                aria-hidden
                className={cn(
                  "text-muted-light transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="body"
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-[4.25rem] grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-light mb-2">
                        Learning goals
                      </p>
                      <ul className="space-y-1.5 text-sm text-text-on-light">
                        {w.goals.map((g) => (
                          <li key={g} className="leading-relaxed">— {g}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-light mb-2">
                        Deliverable
                      </p>
                      <p className="text-sm text-text-on-light leading-relaxed">{w.deliverable}</p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
