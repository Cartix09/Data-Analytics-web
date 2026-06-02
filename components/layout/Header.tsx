"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { primaryNav } from "@/content/nav";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary } from "@/content/i18n/en";
import type { Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

/**
 * Every public page on this site renders a dark hero at the top
 * (Hero on `/`, PageHero everywhere else). The header therefore starts
 * as dark+transparent over the hero and transitions to a solid white
 * surface once the user scrolls past it.
 */
export function Header({ dict, locale }: Props) {
  const t = dict.nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // "dark" = transparent over the dark hero, white text + light logo.
  // "light" = solid white surface, black text + dark logo.
  const isDark = !scrolled;

  // Translate the nav labels by mapping href -> dictionary key.
  const navLabels: Record<string, string> = {
    "/courses": t.courses,
    "/consulting": t.consulting,
    "/resources": t.resources,
    "/about": t.about,
    "/contact": t.contact,
  };

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skipToContent}
      </a>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-colors duration-200",
          isDark
            ? "bg-base/70 backdrop-blur-md border-b border-white/10"
            : "bg-white/90 backdrop-blur-md border-b border-border-light"
        )}
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-16">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-6">
            <Logo variant={isDark ? "light" : "dark"} />

            <nav
              aria-label="Primary"
              className={cn(
                "hidden lg:flex items-center gap-8 text-sm font-medium",
                isDark ? "text-text-on-dark" : "text-text-on-light"
              )}
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isDark ? "hover:text-accent" : "hover:text-accent-strong"
                  )}
                >
                  {navLabels[item.href] ?? item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:inline-flex">
                <LanguageSwitcher current={locale} tone={isDark ? "dark" : "light"} />
              </div>
              <Link
                href="/login"
                className={cn(
                  "hidden lg:inline-flex text-sm font-medium transition-colors px-3 py-2",
                  isDark
                    ? "text-text-on-dark hover:text-accent"
                    : "text-text-on-light hover:text-accent-strong"
                )}
              >
                {t.studentLogin}
              </Link>
              <Button
                href={site.bookingUrl || "/contact"}
                external={!!site.bookingUrl}
                size="sm"
                className="hidden md:inline-flex"
              >
                {t.bookConsultation}
              </Button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className={cn(
                  "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border",
                  isDark
                    ? "border-white/20 text-text-on-dark"
                    : "border-border-light text-text-on-light"
                )}
              >
                <Menu size={20} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileNavDrawer open={open} onClose={() => setOpen(false)} dict={dict} locale={locale} />
    </>
  );
}
