"use client";

import { useLocale } from "./i18n/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5 text-sm text-muted">
          <span className="grid size-7 place-items-center rounded-md bg-gradient-to-br from-accent to-primary text-bg">
            <span className="font-mono text-xs font-bold">M</span>
          </span>
          <span>© {new Date().getFullYear()} Mohammed Abdulrhman Alomari</span>
        </div>
        <p className="text-center text-xs text-muted-soft sm:text-end">{t.footer.built}</p>
      </div>
    </footer>
  );
}
