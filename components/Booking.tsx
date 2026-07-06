"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Pas deze URL later aan naar Pauls eigen boekingslink.
const BOOKING_URL = "https://bit.ly/sun4power-booking";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Booking() {
  return (
    <section id="boek" className="relative bg-navy-900">
      {/* Diagonale split: bovenste helft middenblauw, onderste donkerblauw */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1/2 bg-navy-800"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)" }}
      />
      {/* Oranje → geel verloop divider langs de schuine rand */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="bookingEdge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF8C42" />
              <stop offset="100%" stopColor="#FFD166" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="65"
            stroke="url(#bookingEdge)"
            strokeWidth="0.6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-[640px] rounded-[20px] border-2 border-sunset bg-navy-900 p-8 text-center sm:p-12"
          style={{ boxShadow: "0 30px 80px -20px rgba(255,140,66,0.4)" }}
        >
          {/* Ronde Paul-avatar met groene online-dot */}
          <div className="relative mx-auto h-20 w-20">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-sunset">
              <Image
                src="/paul.jpg"
                alt="Paul, oprichter Sun4Power"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-navy-900 bg-green-400" />
          </div>

          <h2 className="mt-6 text-[clamp(30px,5vw,42px)] font-bold leading-[1.1] text-ink">
            Boek hier met Paul
            <br />
            voor vrijblijvend advies.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-muted">
            Een gesprek van 20 minuten, online of telefonisch. Geen
            verplichtingen, geen verkooppraat — wel een eerlijk advies op maat
            van jouw situatie.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-sunset px-7 py-4 text-lg font-semibold text-navy-900 shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-sunset-deep hover:shadow-cta-hover"
          >
            Plan mijn gratis adviesgesprek →
          </a>

          <p className="mt-5 text-sm text-muted">
            ✓ Gratis&nbsp;&nbsp; ✓ 100% vrijblijvend&nbsp;&nbsp; ✓ Advies binnen
            24u
          </p>
        </motion.div>
      </div>
    </section>
  );
}
