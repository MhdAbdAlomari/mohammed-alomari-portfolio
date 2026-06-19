"use client";

import { motion } from "framer-motion";
import { Eye, TrendingUp, Users, Timer } from "lucide-react";
import { useMemo } from "react";
import { Section } from "@/components/ui/Section";
import { container, fadeUp, viewportOnce } from "@/components/motion";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { formatDuration, type SiteStats } from "@/lib/analytics";

export function Dashboard({ stats }: { stats: SiteStats }) {
  const { t, locale } = useLocale();
  const nf = useMemo(() => new Intl.NumberFormat(locale === "ar" ? "ar" : "en-US"), [locale]);

  const max = Math.max(...stats.daily.map((d) => d.views));

  return (
    <Section id="dashboard" eyebrow={t.dashboard.last7Days} title={t.dashboard.title} subtitle={t.dashboard.subtitle}>
      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5"
      >
        {/* KPIs */}
        <motion.div variants={fadeUp} className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-3">
          <Kpi icon={Users} label={t.dashboard.visitors} value={nf.format(stats.uniqueVisitors)} />
          <Kpi icon={Eye} label={t.dashboard.pageViews} value={nf.format(stats.pageViews)} />
          <Kpi icon={Timer} label={t.dashboard.avgSession} value={formatDuration(stats.avgSessionSeconds)} />
        </motion.div>

        {/* Chart */}
        <motion.div variants={fadeUp} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-2 text-sm text-muted sm:mb-6">
            <TrendingUp size={14} className="text-accent" />
            {t.dashboard.last7Days}
          </div>
          <div className="flex h-36 items-end gap-1.5 sm:h-40 sm:gap-3">
            {stats.daily.map((d) => {
              const h = Math.max(8, Math.round((d.views / max) * 100));
              return (
                <div key={d.date} className="group flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="relative w-full overflow-hidden rounded-md" style={{ height: `${h}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-accent/80 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-x-0 top-0 h-px bg-accent" />
                  </div>
                  <div className="truncate w-full text-center text-[10px] tabular-nums text-muted-soft">
                    {new Date(d.date).toLocaleDateString(locale === "ar" ? "ar" : "en", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid gap-5 md:grid-cols-2">
          <List title={t.dashboard.topProjects} items={stats.topProjects.map((p) => ({ label: p.title, value: nf.format(p.views) }))} />
          <List title={t.dashboard.topPages} items={stats.topPages.map((p) => ({ label: p.path, value: nf.format(p.views) }))} />
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Kpi({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="bg-bg/60 p-5 sm:p-6">
      <div className="flex items-center gap-2 text-muted">
        <Icon size={14} className="text-accent" />
        <span className="text-[11px] font-medium uppercase tracking-wider sm:text-xs">{label}</span>
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl tabular-nums">{value}</div>
    </div>
  );
}

function List({ title, items }: { title: string; items: { label: string; value: string }[] }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6">
      <h3 className="text-sm font-semibold tracking-tight text-white">{title}</h3>
      <ul className="mt-4 divide-y divide-white/[0.04]">
        {items.map((it) => (
          <li key={it.label} className="flex items-center justify-between gap-3 py-3 sm:gap-4">
            <span className="min-w-0 truncate text-sm text-muted">{it.label}</span>
            <span className="shrink-0 text-sm font-medium tabular-nums text-white">{it.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
