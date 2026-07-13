import Script from "next/script";

/**
 * Umami analytics — gratis, cookieloos (geen toestemmingsbanner nodig).
 *
 * ► Zo zet je het aan:
 *   1. Maak een gratis account op https://cloud.umami.is
 *   2. Voeg je website toe (domein: uwenergiemanager.be)
 *   3. Kopieer de "Website ID" (Settings → Websites) — een lange code
 *      zoals: 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d
 *   4. Plak die hieronder in UMAMI_WEBSITE_ID, build opnieuw en upload.
 *
 * Zolang hier de placeholder staat, wordt er niets geladen of gemeten.
 * Zelf-gehost? Pas dan ook UMAMI_SRC aan naar jouw eigen script-URL.
 */
const UMAMI_WEBSITE_ID = "ba235013-469f-4c17-87fa-4b7b4d22c3e4";
const UMAMI_SRC = "https://cloud.umami.is/script.js";

export default function Analytics() {
  if (!UMAMI_WEBSITE_ID || UMAMI_WEBSITE_ID.startsWith("PLAK")) {
    return null;
  }

  return (
    <Script
      src={UMAMI_SRC}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
