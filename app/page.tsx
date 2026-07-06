import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

// Lazy load van de secties onder de vouw (Core Web Vitals).
const WatIsEnergiemanager = dynamic(
  () => import("@/components/WatIsEnergiemanager"),
  { loading: () => <div className="min-h-[60vh] bg-navy-800" /> }
);
const LiveEnergy = dynamic(() => import("@/components/LiveEnergy"), {
  loading: () => <div className="min-h-[50vh] bg-navy-900" />,
});
const ReviewsMarquee = dynamic(() => import("@/components/ReviewsMarquee"), {
  loading: () => <div className="min-h-[40vh] bg-navy-900" />,
});
const Terugverdientijd = dynamic(() => import("@/components/Terugverdientijd"), {
  loading: () => <div className="min-h-[60vh] bg-navy-800" />,
});
const Mission = dynamic(() => import("@/components/Mission"), {
  loading: () => <div className="min-h-[50vh] bg-navy-900" />,
});
const Booking = dynamic(() => import("@/components/Booking"), {
  loading: () => <div className="min-h-[60vh] bg-navy-900" />,
});

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="main">
        {/* 1. Persoonlijk verhaal */}
        <Hero />
        {/* 2. Wat is een Energiemanager? (reel + uitleg) */}
        <WatIsEnergiemanager />
        {/* 3. Live energiestroom + auto-scrollende reviews */}
        <LiveEnergy />
        <ReviewsMarquee />
        {/* 4. Terugverdientijd */}
        <Terugverdientijd />
        {/* 5. Missie */}
        <Mission />
        {/* 6. Booking */}
        <Booking />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
