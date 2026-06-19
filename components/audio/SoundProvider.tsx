"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

type SoundName = "hover" | "click" | "toggle" | "success";

type Ctx = {
  muted: boolean;
  toggleMuted: () => void;
  setMuted: (v: boolean) => void;
  play: (name: SoundName) => void;
};

const SoundContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ui-sound-muted";

const presets: Record<SoundName, { freq: number; type: OscillatorType; dur: number; gain: number; sweep?: number }> = {
  hover: { freq: 1200, type: "sine", dur: 0.06, gain: 0.012 },
  click: { freq: 540, type: "triangle", dur: 0.08, gain: 0.04, sweep: 360 },
  toggle: { freq: 660, type: "sine", dur: 0.12, gain: 0.04, sweep: 880 },
  success: { freq: 880, type: "sine", dur: 0.18, gain: 0.04, sweep: 1320 },
};

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMutedState] = useState<boolean>(true); // default muted — autoplay-friendly
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setMutedState(stored === "1");
  }, []);

  const setMuted = useCallback((v: boolean) => {
    setMutedState(v);
    try {
      window.localStorage.setItem(STORAGE_KEY, v ? "1" : "0");
    } catch {}
  }, []);

  const toggleMuted = useCallback(() => setMuted(!muted), [muted, setMuted]);

  const getCtx = useCallback((): AudioContext | null => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const AC =
        (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return null;
      ctxRef.current = new AC();
    }
    return ctxRef.current;
  }, []);

  const play = useCallback(
    (name: SoundName) => {
      if (muted) return;
      const ctx = getCtx();
      if (!ctx) return;
      // Resume after user gesture (Chrome autoplay policy)
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      const p = presets[name];
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = p.type;
      osc.frequency.setValueAtTime(p.freq, now);
      if (p.sweep) osc.frequency.exponentialRampToValueAtTime(p.sweep, now + p.dur);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(p.gain, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + p.dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + p.dur + 0.02);
    },
    [getCtx, muted],
  );

  const value = useMemo<Ctx>(() => ({ muted, toggleMuted, setMuted, play }), [muted, toggleMuted, setMuted, play]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useUiSound(): Ctx {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    // Safe fallback so components can render outside the provider in tests/SSR
    return { muted: true, toggleMuted: () => {}, setMuted: () => {}, play: () => {} };
  }
  return ctx;
}
