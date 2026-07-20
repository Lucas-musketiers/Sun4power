import Image from "next/image";
import { Check } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ReviewVideo from "@/components/ReviewVideo";

const bullets = [
  {
    label: "Bewezen rendement:",
    text: "een gemiddelde besparing van € 500 tot € 2000+ per jaar.",
  },
  {
    label: "Lagere netkosten:",
    text: "vlak je stroompieken af en bespaar structureel op je capaciteitstarief.",
  },
  {
    label: "Volledig automatisch:",
    text: "één keer installeren, daarna regelt de manager elke kilowattuur optimaal.",
  },
];

function DevicePhoto({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 50%, rgba(255,140,66,0.14), transparent 75%)",
        }}
      />
      <Image
        src="/energiemanager.png"
        alt="De Sun4Power Energiemanager"
        width={963}
        height={557}
        className="relative z-10 mx-auto w-full max-w-[280px] drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)] sm:max-w-sm lg:mx-0"
      />
      <figcaption className="mt-3 text-center text-sm text-muted lg:text-left">
        Dit is de Energiemanager — het slimme brein achter jouw energie.
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main
      id="main"
      className="relative flex min-h-screen flex-col overflow-hidden bg-navy-900"
    >
      {/* Subtiele radiale glow rechtsboven */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,140,66,0.10), transparent 70%)",
        }}
      />

      {/* Logo linksboven */}
      <a href="#main" aria-label="Sun4Power" className="absolute left-6 top-6 z-20">
        <Image
          src="/logo.png"
          alt="Sun4Power logo"
          width={52}
          height={52}
          priority
          className="h-12 w-auto"
        />
      </a>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pb-10 pt-20 lg:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* LINKS — hero + voordelen */}
          <div>
            <div className="mb-3 text-lg font-bold tracking-tight">
              <span className="text-solar">Sun</span>
              <span className="text-sunset">4</span>
              <span className="text-solar">Power</span>
            </div>

            <h1
              className="font-bold leading-[1.08] tracking-tight text-ink"
              style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
            >
              Jouw slimme energie-oplossing vanaf{" "}
              <span className="whitespace-nowrap text-solar">€ 875,-</span>
            </h1>

            <p className="mt-3 text-lg font-semibold text-ink sm:text-xl">
              Binnen <span className="text-sunset">1 jaar</span> volledig
              terugverdiend door de Energiemanager.
            </p>

            <p className="mt-4 max-w-md text-muted">
              Laat de Energiemanager het zware werk doen. Dit slimme systeem
              optimaliseert je zonnestroom en batterij volautomatisch.
            </p>

            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b.label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sunset">
                    <Check
                      className="h-4 w-4 text-navy-900"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  <p className="text-[15px] leading-relaxed">
                    <span className="font-semibold text-ink">{b.label}</span>{" "}
                    <span className="text-muted">{b.text}</span>
                  </p>
                </li>
              ))}
            </ul>

            {/* Videoreview — op desktop tussen de voordelen en het formulier */}
            <ReviewVideo className="mt-7 hidden lg:block" />

            {/* Productfoto — op desktop bij de tekst */}
            <DevicePhoto className="mt-8 hidden lg:block" />
          </div>

          {/* RECHTS — contactformulier */}
          <div
            className="rounded-2xl border-2 border-sunset bg-navy-800/60 p-6 sm:p-8"
            style={{ boxShadow: "0 20px 60px -20px rgba(255,140,66,0.4)" }}
          >
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Klaar om te besparen?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Laat je gegevens achter en Paul neemt vrijblijvend contact met je op
              voor persoonlijk advies.
            </p>

            <ContactForm />

            <p className="mt-4 text-center text-xs text-muted">
              ✓ Gratis&nbsp;&nbsp; ✓ 100% vrijblijvend&nbsp;&nbsp; ✓ Advies binnen 24u
            </p>
          </div>

          {/* Op mobiel ná het formulier, zodat het formulier hoog blijft */}
          <ReviewVideo className="mt-2 lg:hidden" />
          <DevicePhoto className="mt-2 lg:hidden" />
        </div>
      </div>
    </main>
  );
}
