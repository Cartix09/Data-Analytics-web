import { Calendar, Mail } from "lucide-react";
import { site } from "@/content/site";

export function BookingEmbed() {
  const url = site.bookingUrl;
  const hasUrl = !!url && url.startsWith("http");

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
          <p className="text-sm text-muted-light">
            Calendar embed is not configured yet. In the meantime, email us and we&rsquo;ll book a slot manually.
          </p>
          <a
            href="mailto:hello@anlytics.com"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-text-on-light hover:bg-accent-strong hover:text-white transition-colors"
          >
            <Mail size={14} aria-hidden /> Email hello@anlytics.com
          </a>
        </div>
      )}
    </div>
  );
}
