"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import { container, fadeUp, easeOutExpo } from "./motion";
import { Button } from "./ui/Button";
import { heroStats } from "./data";
import { useLocale } from "./i18n/LocaleProvider";
import { useUiSound } from "./audio/SoundProvider";
import { HeroScene } from "./3d/HeroScene";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const { t } = useLocale();
  const { play } = useUiSound();

  const statLabels = [t.hero.stats.users, t.hero.stats.orders, t.hero.stats.apps];

  return (
    <section ref={ref} id="top" className="relative isolate px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28 lg:px-10 lg:pt-40 lg:pb-32">
      <HeroScene />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl">
        <motion.div variants={container(0.1, 0.05)} initial="hidden" animate="show" className="flex flex-col items-start">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:mt-7 sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            <span className="gradient-text">{t.hero.nameLine1}</span>
            <br />
            <span className="gradient-text">{t.hero.nameLine2}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:mt-7 sm:text-lg md:text-xl">
            {t.hero.subtitle.lead} <span className="text-white">{t.hero.subtitle.arch}</span> {t.hero.subtitle.and}{" "}
            <span className="text-white">{t.hero.subtitle.bloc}</span>. <span className="text-accent">{t.hero.subtitle.product}</span>{" "}
            {t.hero.subtitle.tail}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-accent" />
              {t.hero.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={14} className="text-accent" />
              {t.hero.yearsTag}
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex w-full flex-wrap items-stretch gap-3 sm:mt-10 sm:w-auto sm:items-center [&>a]:flex-1 [&>a]:min-w-[140px] sm:[&>a]:flex-initial">
            <Button href="#projects" variant="primary" onMouseEnter={() => play("hover")} onClick={() => play("click")}>
              {t.hero.cta.projects}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/cv.pdf" variant="secondary" download onMouseEnter={() => play("hover")} onClick={() => play("click")}>
              <Download size={15} />
              {t.hero.cta.cv}
            </Button>
            <Button href="#contact" variant="ghost" onMouseEnter={() => play("hover")} onClick={() => play("click")}>
              {t.hero.cta.contact}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: easeOutExpo }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:mt-20 sm:grid-cols-3"
        >
          {heroStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={statLabels[i]} className="group relative bg-bg/60 px-5 py-6 transition-colors hover:bg-white/[0.02] sm:px-6 sm:py-7">
                <div className="flex items-center gap-2 text-muted">
                  <Icon size={14} className="text-accent" />
                  <span className="text-[11px] font-medium uppercase tracking-wider sm:text-xs">{statLabels[i]}</span>
                </div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">{stat.value}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
