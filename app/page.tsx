import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

// Lazy load van de secties onder de vouw (Core Web Vitals).
const Terugverdientijd = dynamic(() => import("@/components/Terugverdientijd"), {
  loading: () => <div className="min-h-[60vh] bg-navy-800" />,
});
const Booking = dynamic(() => import("@/components/Booking"), {
  loading: () => <div className="min-h-[60vh] bg-navy-900" />,
});
const LiveEnergy = dynamic(() => import("@/components/LiveEnergy"), {
  loading: () => <div className="min-h-[50vh] bg-navy-900" />,
});
const ReviewsMarquee = dynamic(() => import("@/components/ReviewsMarquee"), {
  loading: () => <div className="min-h-[40vh] bg-navy-900" />,
});
const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => <div className="min-h-[60vh] bg-navy-800" />,
});

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="main">
        {/* 1. Persoonlijk verhaal + waarde-belofte (Gemini: binnen 10 sec) */}
        <Hero />
        {/* 2. Terugverdientijd */}
        <Terugverdientijd />
        {/* 3. Booking */}
        <Booking />
        {/* 4. Live energiestroom + auto-scrollende reviews */}
        <LiveEnergy />
        <ReviewsMarquee />
        {/* 5. Meest gestelde vragen */}
        <Faq />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
