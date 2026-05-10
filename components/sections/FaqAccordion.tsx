"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { FaqEntry } from "@/content/faq";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { cn } from "@/lib/cn";

interface Props {
  items: FaqEntry[];
  tone?: "light" | "dark";
  title?: string;
  eyebrow?: string;
  description?: string;
}

export function FaqAccordion({
  items,
  tone = "dark",
  title = "Questions, answered.",
  eyebrow = "FAQ",
  description,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        "py-16 md:py-24",
        isDark ? "surface-dark" : "surface-light"
      )}
    >
      <Container size="narrow">
        <FadeInUp className="text-center">
          <Eyebrow tone={isDark ? "dark" : "light"}>{eyebrow}</Eyebrow>
          <h2
            className={cn(
              "mt-4 text-display-md md:text-display-lg text-balance",
              isDark ? "text-text-on-dark" : "text-text-on-light"
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-4 leading-relaxed",
                isDark ? "text-muted-dark" : "text-muted-light"
              )}
            >
              {description}
            </p>
          ) : null}
        </FadeInUp>

        <div className="mt-12 divide-y border-y" style={{
          borderColor: isDark ? "rgba(255,255,255,0.08)" : "var(--color-border-light)"
        }}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-0"
                style={{ borderTopColor: isDark ? "rgba(255,255,255,0.08)" : "var(--color-border-light)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={cn(
                    "flex w-full items-center justify-between gap-6 py-5 text-left transition-colors",
                    isDark ? "text-text-on-dark hover:text-accent" : "text-text-on-light hover:text-accent-strong"
                  )}
                >
                  <span className="text-base md:text-lg font-medium">{item.q}</span>
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-200",
                      isDark ? "border-white/15" : "border-border-light",
                      isOpen ? "rotate-45" : "rotate-0"
                    )}
                  >
                    <Plus size={16} aria-hidden />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className={cn(
                          "pb-6 pr-12 text-sm md:text-base leading-relaxed",
                          isDark ? "text-muted-dark" : "text-muted-light"
                        )}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
