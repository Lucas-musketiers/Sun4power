"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Kleine oranje "Boek met Paul" pill rechtsonder.
 * Verschijnt na 50% scroll-voortgang en scrollt naar de booking-sectie.
 * Verborgen op mobiel (< 768px).
 */
export default function StickyCTA() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (value) => {
      setVisible(value > 0.5);
    });
  }, [scrollYProgress]);

  const scrollToBooking = () => {
    document.getElementById("boek")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToBooking}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-[80] hidden items-center gap-2 rounded-full bg-sunset px-5 py-3 font-semibold text-navy-900 shadow-cta transition-colors duration-200 hover:bg-sunset-deep md:inline-flex"
        >
          Boek met Paul ↓
        </motion.button>
      )}
    </AnimatePresence>
  );
}
