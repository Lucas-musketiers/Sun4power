"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor-volgende radiale glow voor de hero.
 * Luistert naar mousemove en verplaatst een oranje highlight naar de cursor.
 * Bij prefers-reduced-motion blijft de glow statisch rechtsboven staan.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const parent = el.parentElement;
    if (!parent) return;

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.background = `radial-gradient(420px circle at ${x}px ${y}px, rgba(255,140,66,0.16), transparent 70%)`;
      });
    };

    parent.addEventListener("mousemove", handleMove);
    return () => {
      parent.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 transition-[background] duration-200"
    />
  );
}
