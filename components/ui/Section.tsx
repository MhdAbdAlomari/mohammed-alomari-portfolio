import { clsx } from "./clsx";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32 scroll-mt-24",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 max-w-2xl sm:mb-14">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
                <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:mt-5 sm:text-4xl lg:text-5xl gradient-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-balance text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
