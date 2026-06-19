"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";
import { TiltCard } from "./ui/TiltCard";
import { PhoneFrame } from "./ui/PhoneFrame";
import { PhoneMockup } from "./ui/PhoneMockup";
import { container, fadeUp, viewportOnce } from "./motion";
import { projects } from "./data";
import { clsx } from "./ui/clsx";
import { useLocale } from "./i18n/LocaleProvider";
import { l, type Locale } from "@/lib/i18n";

export function Projects() {
  const hero = projects.find((p) => p.hero);
  const rest = projects.filter((p) => !p.hero);
  const { t } = useLocale();

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle}>
      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5"
      >
        {hero && <HeroProjectCard project={hero} />}
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function HeroProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon;
  const { t, locale } = useLocale();
  return (
    <motion.div variants={fadeUp}>
      <TiltCard intensity={4} className="group rounded-3xl">
        <article className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-card">
          <div
            className={clsx(
              "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80",
              project.accent,
            )}
          />
          <div className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-accent/20 blur-[120px]" />

          <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:p-10">
            <div style={{ transform: "translateZ(30px)" }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <Star size={12} className="fill-accent" /> {t.projects.featured} · {l(project.tagline, locale)}
              </div>
              <h3 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {l(project.title, locale)}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                {l(project.description, locale)}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(48,153,73,0.65)] transition-colors hover:bg-primary-strong"
                >
                  {t.projects.viewCaseStudy}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </Link>
                <span className="text-xs text-muted-soft">{l(project.year, locale)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-6" style={{ transform: "translateZ(50px)" }}>
              {project.cover ? (
                <PhoneFrame
                  src={project.cover.src}
                  alt={l(project.cover.alt, locale)}
                  priority
                  sizes="(min-width: 1024px) 240px, 50vw"
                  className="rotate-[-2deg] transition-transform duration-700 group-hover:rotate-0"
                />
              ) : (
                <PhoneMockup
                  icon={Icon}
                  title={l(project.title, locale)}
                  tagline={l(project.tagline, locale)}
                  className="rotate-[-2deg] transition-transform duration-700 group-hover:rotate-0"
                />
              )}
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                {project.metrics?.map((m) => (
                  <div key={l(m.label, "en" as Locale)} className="bg-bg/40 px-2 py-3 text-center sm:px-3 sm:py-4">
                    <div className="text-lg font-semibold tracking-tight text-white sm:text-xl lg:text-2xl">
                      {l(m.value, locale)}
                    </div>
                    <div className="mt-1 text-[9px] font-medium uppercase tracking-wider text-muted-soft sm:text-[10px]">
                      {l(m.label, locale)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon;
  const { t, locale } = useLocale();
  return (
    <motion.div variants={fadeUp}>
      <TiltCard intensity={6} className="group h-full rounded-2xl">
        <Link
          href={`/projects/${project.slug}`}
          className="relative block h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-card transition-colors hover:border-accent/30"
        >
          <div
            className={clsx(
              "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              project.accent,
            )}
          />

          <div
            className="relative flex items-end justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent px-6 pt-10"
            style={{ transform: "translateZ(40px)" }}
          >
            {project.cover ? (
              <PhoneFrame
                src={project.cover.src}
                alt={l(project.cover.alt, locale)}
                sizes="(min-width: 768px) 30vw, 60vw"
                className="-mb-12 w-[160px] sm:w-[180px]"
              />
            ) : (
              <PhoneMockup
                icon={Icon}
                title={l(project.title, locale)}
                tagline={l(project.tagline, locale)}
                className="-mb-12 scale-[0.85]"
              />
            )}
          </div>

          <div className="relative p-6 pt-16" style={{ transform: "translateZ(20px)" }}>
            <div className="flex items-start justify-between gap-4">
              <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                <Icon size={18} />
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-soft transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </div>

            <div className="mt-5">
              <div className="text-xs font-medium uppercase tracking-wider text-accent">
                {l(project.tagline, locale)}
              </div>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-white">
                {l(project.title, locale)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {l(project.description, locale)}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 5).map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
              {t.projects.viewCaseStudyShort}
              <ArrowUpRight size={12} />
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
