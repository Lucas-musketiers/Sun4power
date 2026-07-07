"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  BatteryCharging,
  Activity,
  ShieldCheck,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  fact: string;
  body: string;
}

const pillars: Pillar[] = [
  {
    icon: Sun,
    title: "Elke zonnestraal benutten",
    fact: "Gebruik je eigen zonnestroom direct in plaats van 'm goedkoop aan het net te verkopen.",
    body: "De stroom die je zélf opwekt en direct verbruikt, is de enige écht gratis stroom. Zonder energiemanager stroomt een groot deel ongebruikt weg naar het net, waarna je 's avonds dure stroom terugkoopt. De Energiemanager herkent het overschot overdag en buffert het direct in je elektrische auto of warmwaterboiler — zo betalen je panelen zichzelf veel sneller terug.",
  },
  {
    icon: BatteryCharging,
    title: "Thuisbatterij slimmer",
    fact: "Slimme laadcycli halen meer bruikbare stroom uit dezelfde batterij.",
    body: "Een batterij is een flinke investering. De Energiemanager laadt en ontlaadt niet ‘blind’, maar speelt perfect in op het ritme van jouw woning. Door de laadcycli slim en automatisch te sturen met uitsluitend je eigen zonne-energie, haal je veel meer bruikbare stroom uit je batterij en versnel je de terugverdientijd aanzienlijk.",
  },
  {
    icon: Activity,
    title: "Pieken afvlakken",
    fact: "Lagere verbruikspieken betekent structureel lagere netkosten (capaciteitstarief).",
    body: "In Vlaanderen wordt een deel van de netkosten berekend op je hoogste verbruikspiek. De Energiemanager doet aan peak shaving: hij zorgt dat zware toestellen niet allemaal tegelijk op volle toeren van het net draaien. Elke piek die op de achtergrond wordt afgevlakt, is een directe en structurele besparing op je vaste kosten.",
  },
  {
    icon: ShieldCheck,
    title: "Minder slijtage",
    fact: "Gecontroleerde sturing = minder slijtage en een langere levensduur.",
    body: "Doordat het systeem de stroomstromen geleidelijk verdeelt en onverwachte pieken voorkomt, hoeven je apparaten (zoals de omvormer en de batterij) minder vaak tot het uiterste te gaan. Een gecontroleerd aangestuurde batterij verslijt trager en gaat langer mee — dat verhoogt je uiteindelijke rendement.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Terugverdientijd() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-navy-800 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="eyebrow text-sunset"
            >
              Terugverdientijd
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl"
            >
              Hoe betaalt de Energiemanager zichzelf terug?
            </motion.h2>
          </div>

          {/* Statement-stat */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-navy-700 bg-navy-900 p-6 lg:justify-self-end"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              Gemiddelde besparing
            </p>
            <p className="mt-1 text-4xl font-bold text-solar sm:text-5xl">
              €500 – €2000
            </p>
            <p className="mt-1 text-sm text-muted">per jaar, volledig automatisch</p>
          </motion.div>
        </div>

        {/* Korte kernfeiten */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-navy-700 bg-navy-900 p-6"
            >
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-sunset shadow-cta">
                <pillar.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.fact}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Meer info-knop → volledige uitleg */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-2 rounded-full border border-sunset px-6 py-3 font-semibold text-sunset transition-colors duration-200 hover:bg-sunset hover:text-navy-900"
          >
            {open ? "Minder info" : "Meer info"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {pillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-2xl border border-navy-700 bg-navy-900 p-7"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sunset/15">
                        <pillar.icon
                          className="h-5 w-5 text-sunset"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-ink">
                          {pillar.title}
                        </h4>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted">
                          {pillar.body}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
