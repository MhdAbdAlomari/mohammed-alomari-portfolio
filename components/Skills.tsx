"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { container, fadeUp, scaleIn, viewportOnce } from "./motion";
import { skillGroups } from "./data";
import { useLocale } from "./i18n/LocaleProvider";
import { l } from "@/lib/i18n";

export function Skills() {
  const { t, locale } = useLocale();
  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle}>
      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={l(group.title, "en")}
              variants={fadeUp}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {l(group.title, locale)}
                </h3>
              </div>

              <motion.ul
                variants={container(0.04)}
                className="mt-5 flex flex-wrap gap-1.5"
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={scaleIn}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-bg/60 px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
