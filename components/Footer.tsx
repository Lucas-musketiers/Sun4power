/**
 * Minimale footer: drie gecentreerde regels met een subtiele
 * oranje → geel gradient-streep bovenaan.
 */
export default function Footer() {
  return (
    <footer className="bg-[#060D1A]">
      {/* Subtiele gradient-streep (oranje → geel), 2px */}
      <div className="h-[2px] w-full bg-gradient-to-r from-sunset to-solar" />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 py-12 text-center">
        <p className="text-2xl font-bold text-solar">Sun4Power</p>
        <p className="text-sm text-muted">
          Energieoptimalisatie door Paul, burgerlijk ingenieur
        </p>
        <p className="mt-2 text-sm text-muted">
          © 2026 Sun4Power ·{" "}
          <a
            href="mailto:paul@sun4power.be"
            className="transition-colors hover:text-ink"
          >
            paul@sun4power.be
          </a>
        </p>
      </div>
    </footer>
  );
}
