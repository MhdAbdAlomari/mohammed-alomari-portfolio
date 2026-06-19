"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, dictionaries, locales, type Dictionary, type Locale, localeMeta } from "@/lib/i18n";

type Ctx = {
  locale: Locale;
  t: Dictionary;
  dir: "ltr" | "rtl";
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<Ctx | null>(null);

const COOKIE = "locale";

function readCookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|; )locale=([^;]+)/);
  const v = m?.[1];
  return v && (locales as readonly string[]).includes(v) ? (v as Locale) : null;
}

function writeCookieLocale(l: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE}=${l}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = readCookieLocale();
    if (stored) setLocaleState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const meta = localeMeta[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = meta.dir;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    writeCookieLocale(l);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((cur) => {
      const next = cur === "en" ? "ar" : "en";
      writeCookieLocale(next);
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, t: dictionaries[locale], dir: localeMeta[locale].dir, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider />");
  return ctx;
}
