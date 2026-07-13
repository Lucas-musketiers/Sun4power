"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Zelfde boekingslink als de booking-sectie. Pas aan indien nodig.
const BOOKING_URL = "https://bit.ly/sun4power-booking";

/**
 * Kleine oranje "Boek met Paul" pill rechtsonder.
 * Verschijnt 2 seconden na het laden van de pagina en linkt direct
 * naar het boekingssysteem (bitly). Zichtbaar op mobiel én desktop.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="Sticky CTA - Boek met Paul"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-[80] inline-flex items-center gap-2 rounded-full bg-sunset px-5 py-3 text-sm font-semibold text-navy-900 shadow-cta transition-colors duration-200 hover:bg-sunset-deep sm:text-base"
        >
          Boek met Paul →
        </motion.a>
      )}
    </AnimatePresence>
  );
}
