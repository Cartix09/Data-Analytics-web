"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  distance?: number;
}

/**
 * Hydration-safe entrance animation.
 *
 * On the server and on the first client render, we render a plain `div`
 * with no motion attributes - this guarantees the SSR HTML and the initial
 * client HTML match byte-for-byte. After mount we swap to `motion.div`,
 * which animates on viewport intersection.
 *
 * For above-the-fold content the swap is imperceptible because we transition
 * from final state (opacity 1, no transform) back into the motion lifecycle -
 * Framer Motion's `whileInView` only triggers when the element enters view,
 * so already-visible elements simply stay visible.
 */
export function FadeInUp({ children, delay = 0, distance = 16, className, ...rest }: Props) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={typeof className === "string" ? className : undefined}>
        {children}
      </div>
    );
  }

  if (reduce) {
    return (
      <motion.div className={className} {...rest}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
