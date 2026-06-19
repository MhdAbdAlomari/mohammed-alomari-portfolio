"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { Screenshot } from "@/components/data";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { l } from "@/lib/i18n";

type LightboxProps = {
  images: Screenshot[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { locale } = useLocale();
  const open = index !== null;

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, prev, next, onClose]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={l(current.title, locale)}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg/85 backdrop-blur-xl"
          onClick={onClose}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-accent/40 hover:text-accent"
          >
            <X size={18} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-accent/40 hover:text-accent sm:left-6 sm:size-11"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-accent/40 hover:text-accent sm:right-6 sm:size-11"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-[88vh] w-full max-w-md flex-col items-center px-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[9/19] w-full max-w-[280px] overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-[#1A2230] to-[#0E141C] p-1.5 shadow-[0_60px_140px_-40px_rgba(0,0,0,0.9)] sm:max-w-[340px]">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80" />
              <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-bg">
                <Image
                  src={current.src}
                  alt={l(current.alt, locale)}
                  fill
                  sizes="340px"
                  priority
                  className="object-cover object-top"
                  draggable={false}
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <div className="text-sm font-medium text-white">{l(current.title, locale)}</div>
              <div className="mt-1 text-xs text-muted-soft">{l(current.caption, locale)}</div>
              {images.length > 1 && (
                <div className="mt-2 text-[11px] text-muted-soft tabular-nums">
                  {(index ?? 0) + 1} / {images.length}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
