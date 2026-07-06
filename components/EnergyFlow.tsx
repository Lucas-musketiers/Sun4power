"use client";

import { useEffect, useState } from "react";

/**
 * Live energiestroom — een dashboard-kaart die de Energiemanager nabootst.
 * Toont opwek → hub → huis/batterij met een animerende gestippelde stroom
 * (SVG stroke-dashoffset via de `animate-flow` keyframe) en lichtjes
 * fluctuerende "live" waarden.
 *
 * De iconen zijn als pure inline-SVG getekend (geen geneste <svg>),
 * zodat er geen hydration-mismatch ontstaat. De flow-animatie respecteert
 * prefers-reduced-motion via de globale reduced-motion regel in globals.css.
 */
export default function EnergyFlow() {
  const [opwek, setOpwek] = useState(4.2);
  const [verbruik, setVerbruik] = useState(1.8);
  const [batterij, setBatterij] = useState(82);
  const [tijd, setTijd] = useState("14:32");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const rnd = (min: number, max: number) =>
      Math.round((min + Math.random() * (max - min)) * 10) / 10;

    const id = setInterval(() => {
      setOpwek(rnd(3.6, 5.4));
      setVerbruik(rnd(1.3, 2.6));
      setBatterij((b) =>
        Math.min(99, Math.max(64, b + (Math.random() > 0.5 ? 1 : -1)))
      );
      const now = new Date();
      setTijd(
        `${String(now.getHours()).padStart(2, "0")}:${String(
          now.getMinutes()
        ).padStart(2, "0")}`
      );
    }, 2200);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-navy-700 bg-navy-800/70 p-5 shadow-card backdrop-blur-sm sm:p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Live energiestroom
          </p>
          <p className="text-sm font-semibold text-ink">Vandaag, {tijd}</p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-navy-900/80 px-3 py-1.5 text-xs font-semibold text-ink">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-green-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          Live data
        </span>
      </div>

      {/* SVG flow-diagram: zon → hub → huis / batterij */}
      <svg
        viewBox="0 0 520 240"
        className="w-full"
        role="img"
        aria-label="Live energiestroom van zonnepanelen via de Energiemanager naar huis en batterij"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD166" />
            <stop offset="100%" stopColor="#FF8C42" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* zachte glow achter de zon */}
        <circle cx="68" cy="120" r="70" fill="url(#sunGlow)" />

        {/* statische geleiders */}
        <path d="M108 120 H214" fill="none" stroke="#1A3D5C" strokeWidth="7" strokeLinecap="round" />
        <path d="M300 104 C 352 84, 384 74, 418 70" fill="none" stroke="#1A3D5C" strokeWidth="7" strokeLinecap="round" />
        <path d="M300 136 C 352 156, 384 166, 420 172" fill="none" stroke="#1A3D5C" strokeWidth="7" strokeLinecap="round" />

        {/* animerende gestippelde stroom (stroke-dashoffset) */}
        <path
          className="animate-flow"
          d="M108 120 H214"
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="9 13"
        />
        <path
          className="animate-flow"
          d="M300 104 C 352 84, 384 74, 418 70"
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="9 13"
        />
        <path
          className="animate-flow"
          d="M300 136 C 352 156, 384 166, 420 172"
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="9 13"
        />

        {/* Zon-node */}
        <circle cx="68" cy="120" r="40" fill="#FF8C42" />
        <SunIcon cx={68} cy={120} />

        {/* Hub / Energiemanager-node */}
        <circle cx="260" cy="120" r="46" fill="#0A1628" stroke="#FF8C42" strokeWidth="2" />
        <ChipIcon cx={260} cy={120} />

        {/* Huis-node */}
        <circle cx="452" cy="66" r="34" fill="#0A1628" stroke="#1A3D5C" strokeWidth="2" />
        <HouseIcon cx={452} cy={66} />

        {/* Batterij-node */}
        <circle cx="452" cy="176" r="32" fill="#0A1628" stroke="#1A3D5C" strokeWidth="2" />
        <BatteryIcon cx={452} cy={176} />

        {/* Live labels op de stroom */}
        <text x="160" y="106" textAnchor="middle" className="fill-solar" fontSize="13" fontWeight="700">
          {fmt(opwek)} kW
        </text>
        <text x="372" y="52" textAnchor="middle" className="fill-ink" fontSize="12" fontWeight="700">
          {fmt(verbruik)} kW
        </text>
        <text x="374" y="200" textAnchor="middle" className="fill-solar" fontSize="12" fontWeight="700">
          {batterij}%
        </text>

        {/* Node-bijschriften */}
        <text x="68" y="182" textAnchor="middle" className="fill-muted" fontSize="12" fontWeight="600">
          Zon
        </text>
        <text x="260" y="186" textAnchor="middle" className="fill-muted" fontSize="12" fontWeight="600">
          Beheer
        </text>
        <text x="452" y="118" textAnchor="middle" className="fill-muted" fontSize="12" fontWeight="600">
          Huis
        </text>
        <text x="452" y="226" textAnchor="middle" className="fill-muted" fontSize="12" fontWeight="600">
          Batterij
        </text>
      </svg>

      {/* Live mini-stats */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <Stat label="Opwek" value={`${fmt(opwek)} kW`} accent />
        <Stat label="Verbruik" value={`${fmt(verbruik)} kW`} />
        <Stat label="Batterij" value={`${batterij}%`} accent />
      </div>
    </div>
  );
}

function fmt(n: number) {
  return n.toFixed(1).replace(".", ",");
}

/* ---------- Inline SVG-iconen (pure paths, geen geneste <svg>) ---------- */

function SunIcon({ cx, cy }: { cx: number; cy: number }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <g stroke="#0A1628" strokeWidth="2.4" strokeLinecap="round">
      <circle cx={cx} cy={cy} r="9" fill="#0A1628" stroke="none" />
      {rays.map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <line
            key={a}
            x1={cx + Math.cos(rad) * 15}
            y1={cy + Math.sin(rad) * 15}
            x2={cx + Math.cos(rad) * 22}
            y2={cy + Math.sin(rad) * 22}
          />
        );
      })}
    </g>
  );
}

function ChipIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke="#FFD166" strokeWidth="2.2" strokeLinecap="round" fill="none">
      <rect x={cx - 13} y={cy - 13} width="26" height="26" rx="5" />
      <rect x={cx - 6} y={cy - 6} width="12" height="12" rx="2" fill="#0F2D4A" />
      {/* pinnen */}
      <line x1={cx - 6} y1={cy - 13} x2={cx - 6} y2={cy - 18} />
      <line x1={cx + 6} y1={cy - 13} x2={cx + 6} y2={cy - 18} />
      <line x1={cx - 6} y1={cy + 13} x2={cx - 6} y2={cy + 18} />
      <line x1={cx + 6} y1={cy + 13} x2={cx + 6} y2={cy + 18} />
      <line x1={cx - 13} y1={cy - 6} x2={cx - 18} y2={cy - 6} />
      <line x1={cx - 13} y1={cy + 6} x2={cx - 18} y2={cy + 6} />
      <line x1={cx + 13} y1={cy - 6} x2={cx + 18} y2={cy - 6} />
      <line x1={cx + 13} y1={cy + 6} x2={cx + 18} y2={cy + 6} />
    </g>
  );
}

function HouseIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke="#FFD166" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`M${cx - 15} ${cy - 1} L${cx} ${cy - 15} L${cx + 15} ${cy - 1}`} />
      <path d={`M${cx - 11} ${cy - 3} V${cy + 13} H${cx + 11} V${cy - 3}`} />
      <rect x={cx - 4} y={cy + 3} width="8" height="10" rx="1" />
    </g>
  );
}

function BatteryIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke="#FF8C42" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x={cx - 15} y={cy - 9} width="26" height="18" rx="3" />
      <line x1={cx + 14} y1={cy - 4} x2={cx + 14} y2={cy + 4} />
      <path d={`M${cx - 2} ${cy - 5} L${cx - 6} ${cy + 1} H${cx} L${cx - 4} ${cy + 6}`} />
    </g>
  );
}

function Stat({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-navy-700/60 bg-navy-900/60 px-3 py-2.5">
      <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
        {label}
      </p>
      <p
        className={`mt-0.5 text-base font-bold tabular-nums transition-colors ${
          accent ? "text-solar" : "text-ink"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
