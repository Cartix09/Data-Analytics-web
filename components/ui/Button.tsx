import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary-dark" | "secondary-light" | "ghost-dark" | "ghost-light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap rounded-md transition-all duration-200 ease-out-soft active:scale-[0.98] focus-visible:outline-none disabled:opacity-40 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2.5 h-10",
  md: "text-sm px-6 py-3.5 h-12",
  lg: "text-base px-8 py-4 h-14",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-text-on-light hover:bg-accent-strong hover:text-white shadow-[0_4px_24px_-8px_rgba(34,211,238,0.4)]",
  "secondary-dark":
    "bg-transparent text-text-on-dark border border-white/30 hover:bg-white hover:text-text-on-light hover:border-white",
  "secondary-light":
    "bg-transparent text-text-on-light border border-text-on-light/20 hover:bg-text-on-light hover:text-text-on-dark hover:border-text-on-light",
  "ghost-dark":
    "bg-transparent text-text-on-dark hover:text-accent",
  "ghost-light":
    "bg-transparent text-text-on-light hover:text-accent-strong",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface ButtonProps extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface LinkProps extends CommonProps {
  href: string;
  external?: boolean;
}

export type AnyButtonProps = ButtonProps | LinkProps;

export const Button = forwardRef<HTMLButtonElement, AnyButtonProps>(function Button(
  props,
  ref
) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const isExternal = props.external || props.href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  // Strip non-DOM props before spreading on <button>. Includes optional
  // `href` / `external` that may have been passed when callers couldn't
  // confidently provide a URL — we still render a button in that case.
  const {
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    href: _href,
    external: _ext,
    ...rest
  } = props as ButtonProps & { href?: string; external?: boolean };
  return (
    <button ref={ref} className={classes} {...rest}>
      {children}
    </button>
  );
});
