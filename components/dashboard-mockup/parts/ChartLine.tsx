"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  height?: number;
  animated?: boolean;
}

/**
 * Trend line chart used inside dashboard mockups.
 *
 * On server / first client render we emit a static SVG path (no motion
 * attributes), guaranteeing the SSR HTML matches the hydrated HTML.
 * After mount, we swap to `motion.path` so the line draws on viewport
 * intersection — without ever causing a hydration mismatch.
 */
export function ChartLine({ height = 140, animated = true }: Props) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = animated && !reduce && mounted;
  const path =
    "M 8 110 L 50 96 L 92 102 L 134 80 L 176 84 L 218 62 L 260 68 L 302 44 L 344 40 L 386 22";

  return (
    <svg
      viewBox="0 0 400 140"
      width="100%"
      height={height}
      className="overflow-visible"
      role="img"
      aria-label="Trend chart with upward direction"
    >
      <defs>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[30, 60, 90, 120].map((y) => (
        <line
          key={y}
          x1="0"
          x2="400"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      ))}
      <path d={`${path} L 386 140 L 8 140 Z`} fill="url(#chart-fill)" />
      {shouldAnimate ? (
        <motion.path
          d={path}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
      ) : (
        <path
          d={path}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {[
        [50, 96],
        [134, 80],
        [218, 62],
        [302, 44],
        [386, 22],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#22d3ee" />
      ))}
    </svg>
  );
}
