/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Statische export → genereert een `out/` map met platte HTML/CSS/JS
  // die op gewone (shared) webhosting geplaatst kan worden. Geen Node.js nodig.
  output: "export",

  // next/image beeldoptimalisatie vereist een Node.js-server; op statische
  // hosting bestaat die niet, dus we serveren de afbeeldingen ongewijzigd.
  images: {
    unoptimized: true,
  },

  // Elke route wordt een map met index.html (bv. /out/index.html).
  // Robuuster op shared hosting die geen extensieloze URL-rewrites doet.
  trailingSlash: true,
};

export default nextConfig;
