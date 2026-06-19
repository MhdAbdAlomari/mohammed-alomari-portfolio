"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { clsx } from "./clsx";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  variant?: Variant;
  href: string;
  children?: React.ReactNode;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight transition-colors duration-200 will-change-transform select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-strong shadow-[0_10px_40px_-10px_rgba(48,153,73,0.65)]",
  secondary:
    "border border-white/15 bg-white/[0.03] text-white hover:border-accent/60 hover:text-accent",
  ghost: "text-muted hover:text-white",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {children}
    </motion.a>
  );
}
