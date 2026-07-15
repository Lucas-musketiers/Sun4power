"use client";

import { motion } from "framer-motion";

// Zelfde boekingslink als de booking-sectie. Pas aan indien nodig.
const BOOKING_URL = "https://bit.ly/sun4power-booking";

/**
 * Altijd zichtbare boekingsknop, vastgepind rechtsboven (Gemini-tip 2).
 * Verschijnt met een korte fade meteen na het laden en blijft in beeld
 * terwijl de bezoeker scrolt. Linkt direct naar het boekingssysteem.
 */
export default function StickyCTA() {
  return (
    <motion.a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-umami-event="Sticky CTA - Plan gratis gesprek"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="fixed right-4 top-4 z-[80] inline-flex items-center gap-2 rounded-full bg-sunset px-4 py-2.5 text-sm font-semibold text-navy-900 shadow-cta transition-colors duration-200 hover:bg-sunset-deep sm:right-5 sm:top-5 sm:px-5 sm:py-3"
    >
      Plan gratis gesprek →
    </motion.a>
  );
}
