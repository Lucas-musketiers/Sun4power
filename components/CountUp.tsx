"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  /** Eindwaarde van de telling */
  end: number;
  /** Duur in milliseconden */
  duration?: number;
  /** Aantal decimalen */
  decimals?: number;
  /** Tekst voor het getal (bv. "€ ") */
  prefix?: string;
  /** Tekst na het getal (bv. " kWh") */
  suffix?: string;
  /** Duizendtalscheidingsteken (NL gebruikt punt) */
  separator?: string;
  className?: string;
}

/**
 * Telt op van 0 naar `end` zodra het element in beeld komt.
 * Gebruikt een easing-curve (easeOutExpo) voor een vloeiende afremming.
 */
export default function CountUp({
  end,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ".",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Respecteer reduced-motion: toon direct de eindwaarde
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(end);
      return;
    }

    let raf = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(end * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const formatted = formatNumber(value, decimals, separator);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

function formatNumber(value: number, decimals: number, separator: string) {
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return decPart ? `${withSep},${decPart}` : withSep;
}
