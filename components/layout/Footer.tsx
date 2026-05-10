import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/content/nav";
import { site } from "@/content/site";
import { NewsletterInline } from "@/components/sections/NewsletterInline";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-dark border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-6">
            <Logo variant="light" showTagline />
            <p className="max-w-sm text-sm text-muted-dark leading-relaxed">
              {site.tagline}
            </p>
            <NewsletterInline tone="dark" compact />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerNav).map(([heading, items]) => (
              <div key={heading}>
                <h3 className="text-eyebrow uppercase tracking-[0.18em] text-text-on-dark mb-4">
                  {heading}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item.label + item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-dark hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-dark">
            © {year} ANLYTICS. All rights reserved. · Built by Alish Niftaliyev.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/legal/privacy" className="text-xs text-muted-dark hover:text-accent">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-xs text-muted-dark hover:text-accent">
              Terms
            </Link>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-dark hover:text-accent transition-colors"
            >
              <Linkedin size={18} aria-hidden />
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-dark hover:text-accent transition-colors"
            >
              <Youtube size={18} aria-hidden />
            </a>
            <a
              href={site.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="text-muted-dark hover:text-accent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
