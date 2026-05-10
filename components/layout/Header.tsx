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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-200",
          scrolled
            ? "bg-base/85 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1320px] px-6 md:px-12 lg:px-16">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-6">
            <Logo variant="light" />

            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center gap-8 text-sm font-medium text-text-on-dark/85"
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/login"
                className="hidden md:inline-flex text-sm font-medium text-text-on-dark/85 hover:text-accent transition-colors px-3 py-2"
              >
                Student login
              </Link>
              <Button href={site.bookingUrl} external size="sm" className="hidden md:inline-flex">
                Book a consultation
              </Button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-text-on-dark"
              >
                <Menu size={20} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileNavDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
