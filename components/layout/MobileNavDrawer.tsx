"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { primaryNav } from "@/content/nav";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/i18n/en";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface Props {
  open: boolean;
  onClose: () => void;
  dict: Dictionary;
  locale: Locale;
}

export function MobileNavDrawer({ open, onClose, dict, locale }: Props) {
  const t = dict.nav;
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const navLabels: Record<string, string> = {
    "/courses": t.courses,
    "/consulting": t.consulting,
    "/resources": t.resources,
    "/about": t.about,
    "/contact": t.contact,
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
          className="fixed inset-0 z-50 lg:hidden surface-dark"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col h-full">
            <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
              <Logo variant="light" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-text-on-dark"
              >
                <X size={20} aria-hidden />
              </button>
            </div>
            <nav
              aria-label="Mobile primary"
              className="flex-1 overflow-y-auto px-6 py-10"
            >
              <ul className="space-y-2">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 text-2xl font-semibold text-text-on-dark hover:text-accent transition-colors"
                    >
                      {navLabels[item.href] ?? item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/login"
                    onClick={onClose}
                    className="block py-3 text-2xl font-semibold text-muted-dark hover:text-accent transition-colors"
                  >
                    {t.studentLogin}
                  </Link>
                </li>
              </ul>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-dark">
                  {dict.footer.language}
                </span>
                <LanguageSwitcher current={locale} tone="dark" />
              </div>
            </nav>
            <div className="px-6 pb-10 space-y-3 border-t border-white/10 pt-6">
              <Button
                href={site.bookingUrl || "/contact"}
                external={!!site.bookingUrl}
                className="w-full"
              >
                {t.bookConsultation}
              </Button>
              <Button href="/courses" variant="secondary-dark" className="w-full">
                {dict.hero.secondaryCta}
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
