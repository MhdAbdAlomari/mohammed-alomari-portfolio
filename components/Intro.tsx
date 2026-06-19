"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "./i18n/LocaleProvider";

const STORAGE_KEY = "intro-seen";

export function Intro() {
  const [show, show_] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const seen = window.sessionStorage.getItem(STORAGE_KEY);
    if (seen) return;
    show_(true);
    const timer = window.setTimeout(() => {
      show_(false);
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }, 2600);
    return () => window.clearTimeout(timer);
  }, []);

  function skip() {
    show_(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(48,153,73,0.25),transparent_70%)]"
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-accent to-primary shadow-[0_20px_60px_-20px_rgba(92,203,122,0.7)]"
            >
              <span className="font-mono text-3xl font-bold text-bg">M</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-balance text-3xl font-semibold tracking-tight gradient-text sm:text-4xl"
              >
                Mohammed Alomari
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-muted"
              >
                {t.intro.tagline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              className="mt-2 h-px w-32 origin-left bg-gradient-to-r from-accent/80 to-transparent"
            />
          </div>

          <button
            type="button"
            onClick={skip}
            className="absolute bottom-8 right-8 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            {t.intro.skip}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
