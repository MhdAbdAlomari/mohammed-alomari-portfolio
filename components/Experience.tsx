"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Section } from "./ui/Section";
import { container, fadeUp, viewportOnce } from "./motion";
import { experiences } from "./data";
import { useLocale } from "./i18n/LocaleProvider";
import { l } from "@/lib/i18n";

export function Experience() {
  const { t, locale } = useLocale();
  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title} subtitle={t.experience.subtitle}>
      <motion.ol
        variants={container(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative space-y-6"
      >
        <div
          aria-hidden
          className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-6"
        />

        {experiences.map((exp) => (
          <motion.li key={l(exp.company, "en")} variants={fadeUp} className="relative">
            <div className="flex gap-5 sm:gap-6">
              <div className="relative z-10 mt-1.5 shrink-0">
                <div className="grid size-10 place-items-center rounded-full border border-accent/40 bg-bg shadow-[0_0_0_4px_rgba(11,15,20,1)]">
                  <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_rgba(92,203,122,0.8)]" />
                </div>
              </div>

              <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {l(exp.role, locale)}
                    </h3>
                    <div className="mt-1 inline-flex items-center gap-2 text-sm text-accent">
                      <Briefcase size={14} />
                      {l(exp.company, locale)}
                    </div>
                  </div>
                  <div className="text-sm text-muted">
                    <div>{l(exp.period, locale)}</div>
                    <div className="mt-0.5 inline-flex items-center gap-1.5 text-muted-soft">
                      <MapPin size={12} />
                      {l(exp.location, locale)}
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70"
                      />
                      <span>{l(h, locale)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
