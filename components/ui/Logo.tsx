import Link from "next/link";
import { cn } from "@/lib/cn";

interface Props {
  variant?: "light" | "dark";
  href?: string | null;
  className?: string;
  showTagline?: boolean;
}

export function Logo({ variant = "light", href = "/", className, showTagline = false }: Props) {
  const stroke = variant === "light" ? "#FAFAFA" : "#0A0A0B";
  const text = variant === "light" ? "text-text-on-dark" : "text-text-on-light";
  const muted = variant === "light" ? "text-muted-dark" : "text-muted-light";

  const inner = (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <span
        aria-hidden
        className="inline-flex h-9 w-9 items-center justify-center rounded-md"
        style={{ background: stroke + "12" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
          <path d="M5 16l4-5 3.2 3.5L18 7" />
          <path d="M14 7h4v4" />
          <path d="M6 18.5h2v.5H6z" fill={stroke} stroke="none" />
          <path d="M9 17h2v2H9z" fill={stroke} stroke="none" />
          <path d="M12 15.5h2v3.5h-2z" fill={stroke} stroke="none" />
          <path d="M15 13.5h2v5.5h-2z" fill={stroke} stroke="none" />
        </svg>
      </span>
      <span className={cn("flex flex-col leading-none", text)}>
        <span className="text-[15px] font-bold tracking-[0.16em]">ANLYTICS</span>
        {showTagline ? (
          <span className={cn("mt-1 text-[9px] font-semibold tracking-[0.22em]", muted)}>
            DATA ANALYTICS &amp; INSIGHTS
          </span>
        ) : null}
      </span>
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} aria-label="ANLYTICS — home" className="inline-flex">
      {inner}
    </Link>
  );
}
