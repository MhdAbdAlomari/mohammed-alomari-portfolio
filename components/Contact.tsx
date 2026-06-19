"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useLocale } from "./i18n/LocaleProvider";
import { Section } from "./ui/Section";
import { container, fadeUp, viewportOnce } from "./motion";

const GithubIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.42c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.48.1-3.1 0 0 .98-.32 3.2 1.18a11.04 11.04 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.62.23 2.8.12 3.1.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const LinkedinIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const RECIPIENT = "mohamed.alomari.dev@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/${RECIPIENT}`;

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: RECIPIENT,
    href: `mailto:${RECIPIENT}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/m-alomari",
    href: "https://www.linkedin.com/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "M-Abdulrhman-Alomari",
    href: "https://github.com/M-Abdulrhman-Alomari",
  },
];

export function Contact() {
  const { t } = useLocale();

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle}>
      <motion.div
        variants={container(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 lg:grid-cols-[1fr_1.1fr]"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-accent/30 hover:bg-white/[0.035]"
              >
                <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent transition-transform group-hover:scale-105">
                  <Icon width={18} height={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-soft">
                    {c.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm text-white transition-colors group-hover:text-accent">
                    {c.value}
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>

        <motion.form
          variants={fadeUp}
          action={FORM_ENDPOINT}
          method="POST"
          className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 lg:p-8"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/15 blur-3xl" />

          {/* FormSubmit hidden config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

          <div className="relative grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.contact.name} id="name" name="name" placeholder={t.contact.placeholders.name} required />
              <Field label={t.contact.email} id="email" name="email" type="email" placeholder={t.contact.placeholders.email} required />
            </div>
            <FieldTextArea label={t.contact.message} id="message" name="message" placeholder={t.contact.placeholders.message} required />

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(48,153,73,0.65)] transition-colors hover:bg-primary-strong"
            >
              {t.contact.send}
              <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </Section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ label, id, name, type = "text", placeholder, required }: FieldProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-soft">
        {label}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white placeholder:text-muted-soft outline-none transition-colors focus:border-accent/60 focus:bg-bg/80"
      />
    </label>
  );
}

type TextAreaProps = {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

function FieldTextArea({ label, id, name, placeholder, required }: TextAreaProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-soft">
        {label}
      </span>
      <textarea
        id={id}
        name={name}
        rows={5}
        placeholder={placeholder}
        required={required}
        className="w-full resize-none rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white placeholder:text-muted-soft outline-none transition-colors focus:border-accent/60 focus:bg-bg/80"
      />
    </label>
  );
}
