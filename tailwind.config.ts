import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "3rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        base: "var(--color-base)",
        elevated: "var(--color-elevated)",
        light: "var(--color-light)",
        "border-light": "var(--color-border-light)",
        "border-dark": "var(--color-border-dark)",
        "text-on-dark": "var(--color-text-on-dark)",
        "text-on-light": "var(--color-text-on-light)",
        "muted-dark": "var(--color-muted-dark)",
        "muted-light": "var(--color-muted-light)",
        accent: {
          DEFAULT: "var(--color-accent)",
          strong: "var(--color-accent-strong)",
          soft: "var(--color-accent-soft)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "600" }],
        "display-md": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg": ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.025em", fontWeight: "600" }],
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      boxShadow: {
        card: "0 12px 32px -12px rgba(0,0,0,0.18)",
        "card-dark": "0 12px 32px -12px rgba(0,0,0,0.6)",
        accent: "0 24px 64px -24px rgba(34,211,238,0.18)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        "draw-line": "draw-line 1.6s ease-out forwards",
        "pulse-soft": "pulse-soft 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
