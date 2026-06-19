import { clsx } from "./clsx";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
