"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, X } from "lucide-react";

interface Review {
  teaser: string;
  full: string;
  name: string;
  city: string;
}

const reviews: Review[] = [
  {
    teaser:
      "In 2 dagen al €20 bespaard — de Energiemanager laadt onze wagen nu automatisch met zonne-overschot.",
    full: "We hadden het nooit verwacht: in amper 2 dagen zagen we al €20 besparing. De Energiemanager merkt overdag dat onze panelen meer opwekken dan we in huis verbruiken en stuurt dat overschot rechtstreeks naar de laadpaal. Vroeger ging die stroom voor een habbekrats naar het net, nu rijdt onze auto op zo goed als gratis zonne-energie.",
    name: "Familie Janssens",
    city: "Antwerpen",
  },
  {
    teaser:
      "Onze warmtepomp en boiler draaien nu net wanneer de zon schijnt. Alles automatisch.",
    full: "Paul nam echt de tijd om alles rustig uit te leggen en de installatie was zo gebeurd. Sindsdien schakelt de Energiemanager onze warmtepomp en boiler precies in op het moment dat de panelen overschot produceren. We doen er zelf niets voor en zien de besparing elke maand terug op onze factuur.",
    name: "Lieve & Tom",
    city: "Gent",
  },
  {
    teaser:
      "Eindelijk een dashboard waar ik wijs uit raak — ik zie live wat er met mijn stroom gebeurt.",
    full: "Ik ben absoluut geen techneut, maar dit dashboard snap ik meteen. Ik zie realtime hoeveel de panelen opwekken, wat het huis verbruikt en wat er naar de batterij gaat. Ik weet nu exact wanneer ik best de wasmachine of de vaatwas aanzet.",
    name: "Marc D.",
    city: "Hasselt",
  },
  {
    teaser:
      "Onze thuisbatterij wordt nu slim aangestuurd — veel meer rendement uit dezelfde batterij.",
    full: "De batterij laadde en ontlaadde vroeger een beetje ‘blind’. Nu stuurt de Energiemanager de laadcycli op basis van onze eigen zonne-energie en de weersvoorspelling. We halen merkbaar meer bruikbare stroom uit exact dezelfde batterij, en de terugverdientijd gaat een pak sneller.",
    name: "Sofie V.",
    city: "Brugge",
  },
  {
    teaser:
      "Onze verbruikspieken zijn gehalveerd — dat scheelt direct op het capaciteitstarief.",
    full: "Als we thuiskwamen sloeg alles tegelijk aan: koken, oven én de auto opladen. De Energiemanager vlakt die pieken nu af door toestellen even te temporiseren. Onze piek ligt veel lager, en dankzij het capaciteitstarief betalen we daardoor structureel minder netkosten.",
    name: "Koen & Els",
    city: "Leuven",
  },
  {
    teaser:
      "24/7 automatisch geoptimaliseerd. Ik hoef zelf nergens meer naar om te kijken.",
    full: "Het mooiste is dat ik er zelf niets meer voor moet doen. Geen timers instellen, geen app in de gaten houden. De Energiemanager optimaliseert dag en nacht op de achtergrond en houdt zelfs rekening met de weersvoorspelling en de stroomprijzen. Puur gemoedsrust.",
    name: "Dirk M.",
    city: "Kortrijk",
  },
];

function ReviewCard({
  review,
  onOpen,
}: {
  review: Review;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      data-umami-event="Review geopend"
      data-umami-event-naam={`${review.name}, ${review.city}`}
      className="flex h-full w-[300px] shrink-0 flex-col rounded-2xl border border-navy-700 bg-navy-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-sunset sm:w-[340px]"
    >
      <Quote className="mb-4 h-8 w-8 text-sunset" strokeWidth={2.5} aria-hidden="true" />
      <p className="flex-1 text-[15px] italic leading-relaxed text-ink">
        “{review.teaser}”
      </p>
      <span className="mt-5 font-semibold text-muted">
        — {review.name}, {review.city}
      </span>
      <span className="mt-3 text-sm font-semibold text-sunset">Lees verder →</span>
    </button>
  );
}

export default function ReviewsMarquee() {
  const [active, setActive] = useState<Review | null>(null);

  // Sluiten met Escape
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="bg-navy-900 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow text-sunset">Reviews</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Wat klanten zeggen over de Energiemanager
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Klik op een review om het volledige verhaal te lezen.
        </p>
      </div>

      {/* Marquee-band: schuift automatisch naar links, pauzeert bij hover.
          Bij reduced-motion valt hij terug op handmatig scrollen. */}
      <div className="marquee-mask group mt-12 overflow-x-auto motion-reduce:overflow-x-scroll">
        <div className="flex w-max animate-marquee gap-6 px-6 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard
              key={`${review.name}-${i}`}
              review={review}
              onOpen={() => setActive(review)}
            />
          ))}
        </div>
      </div>

      {/* Modal met de volledige review */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/80 p-6 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActive(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`Review van ${active.name}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border-2 border-sunset bg-navy-900 p-8 sm:p-10"
              style={{ boxShadow: "0 30px 80px -20px rgba(255,140,66,0.4)" }}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Sluiten"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-navy-700 text-muted transition-colors hover:border-sunset hover:text-sunset"
              >
                <X className="h-4 w-4" />
              </button>

              <Quote className="mb-5 h-10 w-10 text-sunset" strokeWidth={2.5} aria-hidden="true" />
              <blockquote className="text-lg italic leading-relaxed text-ink">
                “{active.full}”
              </blockquote>
              <figcaption className="mt-6 font-semibold text-muted">
                — {active.name}, {active.city}
              </figcaption>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
