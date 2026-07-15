"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

interface Item {
  n: string;
  title: string;
  body: ReactNode;
}

const items: Item[] = [
  {
    n: "01",
    title: "Waar bevindt het zich?",
    body: (
      <>
        <p>
          Een energiemanager is meestal een klein, slim toestelletje (of een
          stukje software in een omvormer) dat fysiek in of vlakbij je
          elektriciteitskast (meterkast) wordt geïnstalleerd.
        </p>
        <p>Het is met een kabeltje rechtstreeks verbonden aan je digitale meter.</p>
        <p>
          Vanaf die centrale plek vormt het het digitale kruispunt tussen het
          elektriciteitsnet buiten, je zonnepanelen op het dak, en de grote
          stroomverbruikers in je huis (zoals de laadpaal, warmtepomp, boiler en
          eventueel een thuisbatterij).
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "Hoe regelt het de energie?",
    body: (
      <>
        <p>
          De energiemanager communiceert continu met je apparaten. Zodra hij
          merkt dat je zonnepanelen stroom produceren die je in huis niet direct
          gebruikt (bijvoorbeeld omdat de tv uit staat en de lampen niet
          branden), grijpt hij in.
        </p>
        <p>
          <span className="font-semibold text-ink">
            Sturen in plaats van verliezen:
          </span>{" "}
          in plaats van die stroom voor een lage prijs terug op het net te
          dumpen, stuurt de energiemanager een signaal naar een “slim” apparaat.
          Hij zegt bijvoorbeeld tegen je laadpaal: “Hé, er is nu 3000 Watt aan
          zonne-energie over, begin de auto maar op te laden.”
        </p>
        <p>
          <span className="font-semibold text-ink">Verdelen van de druk:</span>{" "}
          als je thuiskomt en tegelijk gaat koken op inductie, de oven aanzet én
          de auto inplugt, grijpt de energiemanager in om te voorkomen dat je
          stoppen doorslaan. Hij zet de laadpaal dan tijdelijk op pauze tot je
          klaar bent met koken.
        </p>
      </>
    ),
  },
  {
    n: "03",
    title: "Wanneer doet hij zijn werk?",
    body: (
      <>
        <p>
          <span className="font-semibold text-ink">
            24 uur per dag, 7 dagen per week, volledig automatisch.
          </span>{" "}
          Je hoeft zelf helemaal niets te doen. Het systeem reageert real-time.
        </p>
        <p>
          Breekt de zon ineens door de wolken? Binnen enkele seconden past de
          energiemanager zich aan en stuurt de stroom naar je batterij of boiler.
        </p>
        <p>
          Geavanceerde systemen kijken zelfs vooruit. Ze downloaden de
          weersvoorspelling of de stroomprijzen van morgen. Als de manager ‘weet’
          dat het in de namiddag hard gaat waaien of zonnig wordt (en stroom dan
          goedkoop is), wacht hij bewust met het opladen van je auto of
          warmtepomp tot dat specifieke moment.
        </p>
      </>
    ),
  },
  {
    n: "04",
    title: "Waarom zou je er een willen?",
    body: (
      <>
        <p>
          Dit is uiteindelijk de belangrijkste vraag, en het antwoord draait om
          comfort en geld besparen:
        </p>
        <p>
          <span className="font-semibold text-ink">
            Maximaal rendement van je panelen:
          </span>{" "}
          je haalt veel meer waarde uit je eigen zonnepanelen door de stroom zélf
          te gebruiken, in plaats van stroom te moeten aankopen wanneer de zon
          niet schijnt.
        </p>
        <p>
          <span className="font-semibold text-ink">
            Lagere netkosten (capaciteitstarief):
          </span>{" "}
          omdat het systeem ervoor zorgt dat zware apparaten niet allemaal
          tegelijk stroom van het net slurpen, hou je jouw verbruikspieken laag.
          In Vlaanderen betekent een lagere piek direct een lagere energiefactuur.
        </p>
        <p>
          <span className="font-semibold text-ink">Gemoedsrust:</span> je hoeft
          niet meer zelf naar de lucht te staren, op een app te kijken of timers
          in te stellen. Het systeem optimaliseert jouw portemonnee op de
          achtergrond zonder dat je hoeft in te leveren op comfort.
        </p>
      </>
    ),
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

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-navy-800 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="eyebrow text-sunset"
        >
          FAQ
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl"
        >
          De meest gestelde vragen
        </motion.h2>

        {/* Accordeon met de uitleg (zonder foto) */}
        <div className="mt-10 divide-y divide-navy-700">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.n}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  data-umami-event="Uitleg open"
                  data-umami-event-vraag={item.title}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className="text-sm font-bold text-sunset">{item.n}</span>
                  <span className="flex-1 text-lg font-semibold text-ink sm:text-xl">
                    {item.title}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-navy-700 text-sunset transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-sunset/10" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pb-6 pl-8 pr-2 text-[15px] leading-relaxed text-muted">
                        {item.body}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Afsluitende vraag → booking */}
          <a
            href="#boek"
            data-umami-event="Uitleg - Bespreek met Paul"
            className="mt-2 flex items-center gap-2 pt-6 font-semibold text-sunset transition-colors hover:text-solar"
          >
            Welke grote verbruikers heb jij (of plan je)? Bespreek het met Paul
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
