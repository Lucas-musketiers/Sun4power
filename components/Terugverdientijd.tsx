"use client";

import { motion } from "framer-motion";
import {
  Sun,
  BatteryCharging,
  Activity,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  body: string;
}

const pillars: Pillar[] = [
  {
    icon: Sun,
    title: "Elke zonnestraal maximaal benutten",
    body: "De stroom die je zélf opwekt en direct verbruikt, is de enige écht gratis stroom. Zonder energiemanager stroomt een groot deel ongebruikt weg naar het net, waarna je 's avonds dure stroom terugkoopt. De Energiemanager herkent het overschot overdag en buffert het direct in je elektrische auto of warmwaterboiler — zo betalen je panelen zichzelf veel sneller terug.",
  },
  {
    icon: BatteryCharging,
    title: "De thuisbatterij slimmer inzetten",
    body: "Een batterij is een flinke investering. De Energiemanager laadt en ontlaadt niet ‘blind’, maar speelt perfect in op het ritme van jouw woning. Door de laadcycli slim en automatisch te sturen met uitsluitend je eigen zonne-energie, haal je veel meer bruikbare stroom uit je batterij en versnel je de terugverdientijd aanzienlijk.",
  },
  {
    icon: Activity,
    title: "Pieken afvlakken (capaciteitstarief)",
    body: "In Vlaanderen wordt een deel van de netkosten berekend op je hoogste verbruikspiek. De Energiemanager doet aan peak shaving: hij zorgt dat zware toestellen niet allemaal tegelijk op volle toeren van het net draaien. Elke piek die op de achtergrond wordt afgevlakt, is een directe en structurele besparing op je vaste kosten.",
  },
  {
    icon: ShieldCheck,
    title: "Minder slijtage, langere levensduur",
    body: "Doordat het systeem de stroomstromen geleidelijk verdeelt en onverwachte pieken voorkomt, hoeven je apparaten (zoals de omvormer en de batterij) minder vaak tot het uiterste te gaan. Een gecontroleerd aangestuurde batterij verslijt trager en gaat langer mee — dat verhoogt je uiteindelijke rendement.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Terugverdientijd() {
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="group rounded-2xl border border-navy-700 bg-navy-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sunset"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sunset shadow-cta">
                  <pillar.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
