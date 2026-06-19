"use client";

import { useEffect, useRef } from "react";

export function BackgroundFX() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onPointerMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${cx - 320}px, ${cy - 320}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(48,153,73,0.18),transparent_70%)]" />
      <div className="absolute -left-40 top-[20vh] size-[40rem] rounded-full bg-accent/20 blur-[140px] animate-float-slow" />
      <div className="absolute -right-40 top-[60vh] size-[36rem] rounded-full bg-primary/20 blur-[140px] animate-float-slower" />

      {/* mouse spotlight */}
      <div
        ref={spotlightRef}
        className="absolute left-0 top-0 size-[640px] rounded-full opacity-60 mix-blend-screen will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, rgba(92,203,122,0.18), rgba(92,203,122,0) 70%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-bg via-bg/80 to-transparent" />
    </div>
  );
}
