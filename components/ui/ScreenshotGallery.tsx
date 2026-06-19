"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Screenshot } from "@/components/data";
import { container, fadeUp, viewportOnce } from "@/components/motion";
import { useUiSound } from "@/components/audio/SoundProvider";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { l } from "@/lib/i18n";
import { PhoneFrame } from "./PhoneFrame";
import { Lightbox } from "./Lightbox";

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const { play } = useUiSound();
  const { locale } = useLocale();

  if (!screenshots.length) return null;

  return (
    <>
      <motion.div
        variants={container(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {screenshots.map((s, i) => {
          const title = l(s.title, locale);
          return (
            <motion.button
              key={s.src}
              type="button"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              onClick={() => {
                play("click");
                setIndex(i);
              }}
              onMouseEnter={() => play("hover")}
              aria-label={title}
              className="group flex flex-col items-center text-center focus:outline-none"
            >
              <div className="transition-transform duration-500 group-hover:rotate-0 [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.03]">
                <PhoneFrame src={s.src} alt={l(s.alt, locale)} />
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium text-white">{title}</div>
                <div className="mt-1 text-xs text-muted-soft">{l(s.caption, locale)}</div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <Lightbox
        images={screenshots}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
