import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import ScrollDepth from "@/components/ScrollDepth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  // Basis-URL voor absolute links (o.a. de og:image voor social sharing).
  // Pas dit aan als het definitieve domein anders blijkt te zijn.
  metadataBase: new URL("https://uwenergiemanager.be"),
  title: "Paul · Energiemanager voor zonnepaneeleigenaren · Sun4Power",
  description:
    "Burgerlijk ingenieur Paul helpt al 700+ huishoudens besparen met de Energiemanager. Boek vrijblijvend advies.",
  keywords: [
    "Sun4Power",
    "Paul",
    "energiemanager",
    "energieoptimalisatie",
    "zonnepanelen",
    "burgerlijk ingenieur",
    "vrijblijvend advies",
  ],
  authors: [{ name: "Paul — Sun4Power" }],
  openGraph: {
    title: "Paul · Energiemanager voor zonnepaneeleigenaren · Sun4Power",
    description:
      "Burgerlijk ingenieur Paul helpt al 700+ huishoudens besparen met de Energiemanager. Boek vrijblijvend advies.",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sun4Power — Energiemanager" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={poppins.variable}>
      <body className="bg-navy-900 text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-sunset focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-900"
        >
          Naar hoofdinhoud
        </a>
        {children}
        <Analytics />
        <ScrollDepth />
      </body>
    </html>
  );
}
