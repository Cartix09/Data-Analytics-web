import { Calendar, Mail } from "lucide-react";
import { site } from "@/content/site";

/**
 * Cal.com / Calendly booking embed.
 *
 * The URL is read from `NEXT_PUBLIC_BOOKING_URL` via `site.bookingUrl`.
 * When it's missing, we render a helpful fallback pointing the visitor to
 * email — never a broken iframe.
 *
 * See README → "Cal.com booking setup" for how to configure this without
 * needing the Cal.com API.
 */
export function BookingEmbed() {
  const url = site.bookingUrl;
  const hasUrl = !!url && /^https?:\/\//.test(url);

  return (
    <div className="rounded-xl border border-border-light bg-white overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border-light px-6 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
          <Calendar size={18} aria-hidden />
        </div>
        <div>
          <p className="text-sm font-semibold">Book a 30-minute consultation</p>
          <p className="text-xs text-muted-light">Pick a slot. We confirm by email.</p>
        </div>
      </div>
      {hasUrl ? (
        <div className="aspect-[4/5] sm:aspect-[16/10] w-full">
          <iframe
            src={url}
            title="Book a consultation"
            className="h-full w-full"
            loading="lazy"
            allow="camera; microphone; fullscreen"
          />
        </div>
      ) : (
        <div className="p-8">
          <p className="text-sm text-muted-light leading-relaxed">
            Booking calendar is not configured yet. Add{" "}
            <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-light border border-border-light">
              NEXT_PUBLIC_BOOKING_URL
            </code>{" "}
            to <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-light border border-border-light">.env.local</code> or email us directly.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-text-on-light hover:bg-accent-strong hover:text-white transition-colors"
          >
            <Mail size={14} aria-hidden /> Email {site.email}
          </a>
        </div>
      )}
    </div>
  );
}
