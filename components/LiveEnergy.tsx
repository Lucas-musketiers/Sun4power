"use client";

import { motion } from "framer-motion";
import EnergyFlow from "./EnergyFlow";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function LiveEnergy() {
  return (
    <section className="bg-navy-900 pt-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="eyebrow text-sunset"
        >
          Live energiestroom
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-ink sm:text-5xl"
        >
          Zie je energie in realtime.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-4 max-w-xl text-lg text-muted"
        >
          De Energiemanager toont exact wat je opwekt, verbruikt en opslaat —
          zodat je elke kilowattuur op het juiste moment inzet.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12"
        >
          <EnergyFlow />
        </motion.div>
      </div>
    </section>
  );
}
