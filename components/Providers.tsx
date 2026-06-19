"use client";

import { LocaleProvider } from "./i18n/LocaleProvider";
import { SoundProvider } from "./audio/SoundProvider";
import { Intro } from "./Intro";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <SoundProvider>
        <Intro />
        {children}
      </SoundProvider>
    </LocaleProvider>
  );
}
