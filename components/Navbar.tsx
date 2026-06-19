"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { clsx } from "./ui/clsx";
import { useLocale } from "./i18n/LocaleProvider";
import { LanguageSwitcher } from "./i18n/LanguageSwitcher";
import { MuteToggle } from "./audio/MuteToggle";
import { useUiSound } from "./audio/SoundProvider";

export function Navbar() {
  const { t } = useLocale();
  const { play } = useUiSound();
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 14]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.7]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#projects", label: t.nav.projects },
    { href: "/#skills", label: t.nav.skills },
    { href: "/blog", label: t.nav.writing },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{
          backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
          backgroundColor: `rgba(11, 15, 20, ${bgOpacity.get()})`,
          borderBottomColor: `rgba(255,255,255, ${borderOpacity.get()})`,
        }}
        className={clsx(
          "border-b transition-colors duration-300",
          scrolled ? "supports-[backdrop-filter]:bg-bg/60 backdrop-blur-xl border-white/[0.06]" : "border-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-2 px-5 sm:gap-3 sm:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-primary text-bg shadow-[0_8px_24px_-8px_rgba(92,203,122,0.6)] transition-transform group-hover:scale-105">
              <span className="font-mono text-sm font-bold">M</span>
            </span>
            <span className="font-medium tracking-tight">Alomari</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onMouseEnter={() => play("hover")}
                  onClick={() => play("click")}
                  className="relative rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher compact />
            <MuteToggle />
            <a
              href="/#contact"
              onMouseEnter={() => play("hover")}
              onClick={() => play("click")}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher compact />
            <MuteToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03]"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border-t border-white/[0.06] bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8 lg:px-10">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      play("click");
                      setOpen(false);
                    }}
                    className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-white/[0.04] hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
}
