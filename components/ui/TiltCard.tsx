"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { clsx } from "./clsx";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
  intensity?: number;
};

export function TiltCard({
  children,
  className,
  glare = true,
  intensity = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const sx = useSpring(rx, { stiffness: 220, damping: 22, mass: 0.4 });
  const sy = useSpring(ry, { stiffness: 220, damping: 22, mass: 0.4 });

  const glareStyle = useMotionTemplate`radial-gradient(360px circle at ${mx}% ${my}%, rgba(92,203,122,0.18), transparent 60%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * intensity * 2);
    rx.set(-(py - 0.5) * intensity * 2);
    mx.set(px * 100);
    my.set(py * 100);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        rotateX: sx,
        rotateY: sy,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={clsx("relative will-change-transform", className)}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: glareStyle }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [.group:hover_&]:opacity-100"
        />
      )}
    </motion.div>
  );
}
