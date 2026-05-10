"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

export function StickyMobileCta() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 200);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 transition-transform duration-300 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={hidden}
    >
      <div className="m-3 grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-base/95 backdrop-blur p-2 shadow-card-dark">
        <Link
          href="/courses"
          className="flex h-12 items-center justify-center gap-2 rounded-md bg-white/5 text-text-on-dark text-sm font-medium hover:bg-white/10"
        >
          <GraduationCap size={16} aria-hidden /> Courses
        </Link>
        <Link
          href="/consulting"
          className="flex h-12 items-center justify-center gap-2 rounded-md bg-accent text-text-on-light text-sm font-semibold hover:bg-accent-strong hover:text-white"
        >
          <Briefcase size={16} aria-hidden /> Consulting
        </Link>
      </div>
    </div>
  );
}
