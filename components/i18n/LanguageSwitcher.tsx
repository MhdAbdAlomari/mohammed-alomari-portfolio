"use client";

import { Languages } from "lucide-react";
import { motion } from "framer-motion";
import { useUiSound } from "@/components/audio/SoundProvider";
import { useLocale } from "./LocaleProvider";
import { localeMeta } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, toggleLocale } = useLocale();
  const { play } = useUiSound();
  const next = locale === "en" ? "ar" : "en";

  return (
    <motion.button
      type="button"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => {
        play("toggle");
        toggleLocale();
      }}
      aria-label={`Switch language to ${localeMeta[next].label}`}
      title={localeMeta[next].label}
      className={
        compact
          ? "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
          : "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
      }
    >
      <Languages size={13} />
      <span className="font-mono">{localeMeta[next].native}</span>
    </motion.button>
  );
}
