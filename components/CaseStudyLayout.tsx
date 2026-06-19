"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Image as ImageIcon, Layers, Lightbulb, Sparkles } from "lucide-react";
import Link from "next/link";
import { getProject } from "./data";
import { Tag } from "./ui/Tag";
import { PhoneFrame } from "./ui/PhoneFrame";
import { ScreenshotGallery } from "./ui/ScreenshotGallery";
import { container, fadeUp, viewportOnce } from "./motion";
import { useLocale } from "./i18n/LocaleProvider";
import { l } from "@/lib/i18n";

export function CaseStudyLayout({ slug }: { slug: string }) {
  const project = getProject(slug);
  const { t, locale } = useLocale();
  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <article className="relative">
      {/* hero */}
      <section className="relative isolate px-5 pt-28 pb-12 sm:px-8 sm:pt-36 sm:pb-16 lg:px-10 lg:pt-40">
        <div className="mx-auto w-full max-w-5xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            {t.caseStudy.back}
          </Link>

          <motion.div
            variants={container(0.1)}
            initial="hidden"
            animate="show"
            className="mt-8 grid gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12"
          >
            <div>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {l(project.tagline, locale)}
                </div>
                <span className="text-xs text-muted-soft">{l(project.year, locale)}</span>
                <span className="text-xs text-muted-soft">·</span>
                <span className="text-xs text-muted-soft">{l(project.role, locale)}</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-balance text-3xl font-semibold tracking-tight gradient-text sm:text-5xl lg:text-6xl"
              >
                {l(project.title, locale)}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
              >
                {l(project.description, locale)}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </motion.div>
            </div>

            {project.cover && (
              <motion.div variants={fadeUp} className="flex justify-center lg:justify-end">
                <PhoneFrame
                  src={project.cover.src}
                  alt={l(project.cover.alt, locale)}
                  priority
                  sizes="(min-width: 1024px) 240px, 50vw"
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* results strip */}
      <section className="px-5 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-4"
          >
            {cs.results.map((r) => (
              <div key={l(r.label, "en")} className="bg-bg/60 px-4 py-5 sm:px-5 sm:py-6">
                <div className="text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
                  {l(r.value, locale)}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-soft sm:text-[11px]">
                  {l(r.label, locale)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* overview */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-5xl">
          <Block
            eyebrow={t.caseStudy.overview.eyebrow}
            title={t.caseStudy.overview.title}
            body={l(cs.overview, locale)}
          />
        </div>
      </section>

      {/* challenge / solution */}
      <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto grid w-full max-w-5xl gap-8 sm:gap-10 lg:grid-cols-2">
          <Block
            eyebrow={t.caseStudy.challenge.eyebrow}
            title={t.caseStudy.challenge.title}
            body={l(cs.problem, locale)}
          />
          <Block
            eyebrow={t.caseStudy.solution.eyebrow}
            title={t.caseStudy.solution.title}
            body={l(cs.solution, locale)}
          />
        </div>
      </section>

      {/* architecture */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            variants={container(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="text-balance text-2xl font-semibold tracking-tight gradient-text sm:text-3xl lg:text-4xl"
            >
              {t.caseStudy.architecture.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-muted">
              {t.caseStudy.architecture.subtitle}
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {cs.architecture.map((a) => (
                <motion.div
                  key={l(a.title, "en")}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/30"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <h3 className="text-base font-semibold tracking-tight text-white">
                      {l(a.title, locale)}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{l(a.body, locale)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* tech stack */}
      <section className="px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            variants={container(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <Layers size={16} className="text-accent" />
              <h2 className="text-base font-semibold tracking-tight text-white">
                {t.caseStudy.techStack}
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* key features */}
      {cs.keyFeatures.length > 0 && (
        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-5xl">
            <motion.div
              variants={container(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.h2
                variants={fadeUp}
                className="text-balance text-2xl font-semibold tracking-tight gradient-text sm:text-3xl lg:text-4xl"
              >
                {t.caseStudy.keyFeatures.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-muted">
                {t.caseStudy.keyFeatures.subtitle}
              </motion.p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {cs.keyFeatures.map((f) => (
                  <motion.div
                    key={l(f.title, "en")}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-accent/30"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-accent" />
                      <h3 className="text-base font-semibold tracking-tight text-white">
                        {l(f.title, locale)}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{l(f.body, locale)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* screenshots */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="text-balance text-2xl font-semibold tracking-tight gradient-text sm:text-3xl lg:text-4xl"
          >
            {t.caseStudy.screenshots.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="mt-3 max-w-xl text-sm text-muted"
          >
            {cs.screenshots.length > 0 ? t.caseStudy.screenshots.hint : t.caseStudy.screenshots.soonBody}
          </motion.p>

          <div className="mt-10">
            {cs.screenshots.length > 0 ? (
              <ScreenshotGallery screenshots={cs.screenshots} />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-white/[0.08] bg-white/[0.015] px-6 py-16 text-center"
              >
                <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent">
                  <ImageIcon size={20} />
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight text-white">
                    {t.caseStudy.screenshots.soonTitle}
                  </div>
                  <p className="mt-1 text-sm text-muted-soft max-w-md">
                    {t.caseStudy.screenshots.soonBody}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* lessons learned */}
      {cs.lessonsLearned.length > 0 && (
        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-5xl">
            <motion.div
              variants={container(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2">
                <Lightbulb size={16} className="text-accent" />
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {t.caseStudy.lessons.eyebrow}
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-balance text-2xl font-semibold tracking-tight gradient-text sm:text-3xl lg:text-4xl"
              >
                {t.caseStudy.lessons.title}
              </motion.h2>

              <ul className="mt-10 space-y-3">
                {cs.lessonsLearned.map((lesson, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-relaxed text-muted"
                  >
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{l(lesson, locale)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-card p-6 sm:p-8 lg:p-12">
            <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-accent/20 blur-[120px]" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-balance text-2xl font-semibold tracking-tight gradient-text sm:text-3xl lg:text-4xl">
                  {t.caseStudy.cta.title}
                </h2>
                <p className="mt-3 max-w-xl text-muted">{t.caseStudy.cta.subtitle}</p>
              </div>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(48,153,73,0.65)] transition-colors hover:bg-primary-strong"
              >
                {t.caseStudy.cta.button}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function Block({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7 }}
    >
      <div className="text-xs font-medium uppercase tracking-wider text-accent">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
    </motion.div>
  );
}
