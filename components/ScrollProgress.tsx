"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Dunne oranje voortgangsbalk bovenaan de pagina.
 * Vervangt de (afwezige) navigatie als visuele scroll-indicator.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-sunset"
    />
  );
}
