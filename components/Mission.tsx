"use client";

import { motion } from "framer-motion";
import { Zap, Battery, TrendingDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pillars = [
  { icon: Zap, label: "Realtime inzicht in je verbruik" },
  { icon: Battery, label: "Slimme aansturing van opslag" },
  { icon: TrendingDown, label: "Aantoonbare besparing per maand" },
];

export default function Mission() {
  return (
    <section className="bg-navy-900 py-32">
      <div className="mx-auto max-w-[760px] px-6 text-center">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="eyebrow text-sunset"
        >
          Mijn missie
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-4 text-[clamp(40px,6vw,56px)] font-bold leading-[1.1] text-ink"
        >
          En daarom doe ik
          <br />
          wat ik doe.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted"
        >
          Energie is te kostbaar om te verspillen — voor jouw portemonnee én voor
          de planeet. Met de Energiemanager geef ik jou de controle terug:
          realtime inzicht in wat je opwekt, verbruikt en kan opslaan. Geen
          technische jargon. Geen verkooppraat. Gewoon slimme keuzes die elke
          maand renderen.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sunset shadow-cta">
                <pillar.icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <p className="mt-4 max-w-[180px] font-semibold text-ink">
                {pillar.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
