"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Workflow, Zap } from "lucide-react";
import { Section } from "./ui/Section";
import { container, fadeUp, viewportOnce } from "./motion";
import { useLocale } from "./i18n/LocaleProvider";

export function About() {
  const { t } = useLocale();
  const pillars = [
    { icon: Layers, ...t.about.pillars.clean },
    { icon: Workflow, ...t.about.pillars.bloc },
    { icon: ShieldCheck, ...t.about.pillars.prod },
    { icon: Zap, ...t.about.pillars.ui },
  ];

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.subtitle}>
      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.t}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/30 hover:bg-white/[0.035]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.b}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
