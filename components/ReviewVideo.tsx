"use client";

import { Star } from "lucide-react";

/**
 * Videoreview van een klant. Laadt pas bij afspelen (preload="none") met een
 * poster-afbeelding, zodat de pagina snel blijft. Registreert een Umami-event
 * zodra de bezoeker de video start.
 */
export default function ReviewVideo({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-sunset/50 bg-sunset/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sunset">
        <Star className="h-3.5 w-3.5 fill-sunset" aria-hidden="true" />
        Videoreview van een klant
      </span>

      <video
        controls
        preload="none"
        playsInline
        poster="/review-poster.jpg"
        onPlay={() => window.umami?.track("Videoreview afgespeeld")}
        data-umami-event="Videoreview - klik"
        className="mt-3 aspect-square w-full max-w-[340px] rounded-2xl border-2 border-sunset/60 bg-navy-900 object-cover shadow-[0_18px_40px_-15px_rgba(0,0,0,0.6)] sm:max-w-sm"
      >
        <source src="/review-video.mp4" type="video/mp4" />
        Je browser ondersteunt deze video niet.
      </video>

      <figcaption className="mt-3 max-w-sm text-sm text-muted">
        Een klant vertelt zelf over zijn ervaring met de Energiemanager.
      </figcaption>
    </figure>
  );
}
