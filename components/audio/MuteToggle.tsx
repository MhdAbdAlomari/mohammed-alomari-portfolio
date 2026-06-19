"use client";

import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useUiSound } from "./SoundProvider";
import { useLocale } from "../i18n/LocaleProvider";

export function MuteToggle() {
  const { muted, toggleMuted, play } = useUiSound();
  const { t } = useLocale();

  return (
    <motion.button
      type="button"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => {
        toggleMuted();
        // Play after unmuting so the user hears confirmation
        if (muted) setTimeout(() => play("toggle"), 30);
      }}
      aria-label={muted ? t.audio.unmute : t.audio.mute}
      aria-pressed={!muted}
      title={muted ? t.audio.unmute : t.audio.mute}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
    >
      {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
    </motion.button>
  );
}
