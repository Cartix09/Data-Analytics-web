import Link from "next/link";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/content/nav";
import { site } from "@/content/site";
import { NewsletterInline } from "@/components/sections/NewsletterInline";
import { getDict, getLocale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function Footer() {
  const locale = await getLocale();
  const dict = getDict(locale);
  const t = dict.footer;
  const year = new Date().getFullYear();

  // Column headings come from the dictionary; link labels (course names,
  // service names) stay in their original form to avoid breaking deep links.
  const columnLabel: Record<string, string> = {
    Courses: t.courses,
    Consulting: t.consulting,
    Company: t.company,
    Resources: t.resources,
  };

  return (
    <footer className="surface-dark border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="space-y-6">
            <Logo variant="light" showTagline />
            <p className="max-w-sm text-sm text-muted-dark leading-relaxed">
              {site.tagline}
            </p>
            <NewsletterInline tone="dark" compact dict={dict} />
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-[0.18em] text-muted-dark mb-2">
                {t.language}
              </span>
              <LanguageSwitcher current={locale} tone="dark" />
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerNav).map(([heading, items]) => (
              <div key={heading}>
                <h3 className="text-eyebrow uppercase tracking-[0.18em] text-text-on-dark mb-4">
                  {columnLabel[heading] ?? heading}
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
            © {year} ANLYTICS. {t.rights} · {t.builtBy}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/legal/privacy"
              className="text-xs text-muted-dark hover:text-accent"
            >
              {t.privacy}
            </Link>
            <Link
              href="/legal/terms"
              className="text-xs text-muted-dark hover:text-accent"
            >
              {t.terms}
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
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-dark hover:text-accent transition-colors"
            >
              <Instagram size={18} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
