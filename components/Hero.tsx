"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CursorGlow from "./CursorGlow";
import CountUp from "./CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pills = [
  { label: "700+ huishoudens", className: "border-solar/60 text-solar" },
  { label: "Burgerlijk ingenieur", className: "border-navy-700 text-ink" },
  { label: "Vrijblijvend advies", className: "border-sunset/60 text-sunset" },
];

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("boek")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-900">
      {/* Cursor-volgende glow (mousemove → radiale highlight) */}
      <CursorGlow />

      {/* Logo linksboven */}
      <a
        href="#main"
        aria-label="Sun4Power"
        className="absolute left-6 top-6 z-20 flex items-center gap-2.5"
      >
        <Image
          src="/logo.png"
          alt="Sun4Power logo"
          width={56}
          height={56}
          priority
          className="h-14 w-auto"
        />
      </a>

      {/* Subtiele statische radiale glow rechtsboven, 8% opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 z-0 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,140,66,0.08), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* LINKS — persoonlijk verhaal */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-5 text-2xl font-bold tracking-tight"
          >
            <span className="text-solar">Sun</span>
            <span className="text-sunset">4</span>
            <span className="text-solar">Power</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-bold leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(40px, 11vw, 80px)" }}
          >
            Energiefanaat
            <br />
            in hart en nieren.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-[520px] text-lg leading-relaxed text-ink"
          >
            Nadat ik mijn opleiding burgerlijk ingenieur afrondde, ben ik
            gepassioneerd geraakt door energieoptimalisatie. Met Sun4Power hebben
            we zo al{" "}
            <CountUp end={700} className="font-bold text-solar" /> huishoudens
            kunnen helpen besparen.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9"
          >
            <button
              type="button"
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2 rounded-full bg-sunset px-7 py-4 font-semibold text-navy-900 shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-sunset-deep hover:shadow-cta-hover"
            >
              Boek vrijblijvend advies met Paul ↓
            </button>
          </motion.div>
        </div>

        {/* RECHTS — portret + floating stat-pills */}
        <div className="flex flex-col items-center lg:items-end">
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div
              className="relative h-[260px] w-[260px] overflow-hidden rounded-full border-2 border-sunset"
              style={{ boxShadow: "0 0 60px -10px rgba(255,140,66,0.5)" }}
            >
              <Image
                src="/paul.jpg"
                alt="Paul, oprichter Sun4Power"
                fill
                priority
                sizes="260px"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted">
              Paul — Burgerlijk ingenieur · Sun4Power
            </p>
          </motion.div>

          {/* Drie floating stat-pills, staggered fade-in */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-end">
            {pills.map((pill, i) => (
              <motion.span
                key={pill.label}
                custom={4 + i}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className={`rounded-full border bg-navy-800/40 px-4 py-2 text-sm font-semibold backdrop-blur ${pill.className}`}
              >
                {pill.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
