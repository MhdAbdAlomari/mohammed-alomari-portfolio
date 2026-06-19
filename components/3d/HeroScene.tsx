"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => null,
});

export function HeroScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion + skip on low-power devices
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const cores = navigator.hardwareConcurrency ?? 4;
    if (cores < 4) return;

    // Defer to next idle tick so it doesn't compete with first paint
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ??
      ((cb: () => void) => window.setTimeout(cb, 400));
    const cancelIdle =
      (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback ??
      ((id: number) => window.clearTimeout(id));

    const id = idle(() => setEnabled(true));
    return () => cancelIdle(id);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-[5] opacity-70"
      style={{ maskImage: "radial-gradient(60% 60% at 50% 40%, #000 30%, transparent 80%)" }}
    >
      <Scene />
    </div>
  );
}
