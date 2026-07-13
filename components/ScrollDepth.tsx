"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

/**
 * Meet hoe ver bezoekers scrollen en stuurt mijlpaal-events naar Umami
 * (Scroll 25% / 50% / 75% / 100%). Elke mijlpaal wordt max. één keer per
 * bezoek verstuurd. Geen extra scripts of cookies.
 */
export default function ScrollDepth() {
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const fired = new Set<number>();
    let ticking = false;

    const check = () => {
      ticking = false;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;

      for (const m of milestones) {
        if (pct >= m && !fired.has(m)) {
          // Alleen markeren als het event echt verstuurd is (umami geladen).
          if (window.umami) {
            window.umami.track(`Scroll ${m}%`);
            fired.add(m);
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
