import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="surface-dark min-h-screen flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-30"
      />
      <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-12">
          <Logo variant="light" />
        </div>
        <p className="text-eyebrow uppercase tracking-[0.18em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-display-md md:text-display-lg text-text-on-dark text-balance max-w-2xl">
          This dashboard hasn&rsquo;t been modeled yet.
        </h1>
        <p className="mt-6 max-w-md text-muted-dark leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist — or has moved. Head back home and try again.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-text-on-light hover:bg-accent-strong hover:text-white transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
