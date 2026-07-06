import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1628", // primair donkerblauw (hero achtergrond)
          800: "#0F2D4A", // middenblauw (kaarten, nav)
          700: "#1A3D5C", // lichtblauw accent (borders, hover)
          950: "#060D1A", // footer (iets donkerder dan hero)
        },
        sunset: {
          DEFAULT: "#FF8C42", // sunset oranje (CTA)
          deep: "#E06520", // deep oranje (hover)
        },
        solar: "#FFD166", // modern geel (stats, accenten, badges)
        ink: "#F0F4FF", // wit tekst
        muted: "#7A98B8", // muted tekst
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.15em",
      },
      boxShadow: {
        cta: "0 10px 30px -10px rgba(255, 140, 66, 0.55)",
        "cta-hover": "0 14px 40px -8px rgba(255, 140, 66, 0.7)",
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        flow: {
          to: { strokeDashoffset: "-100" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        flow: "flow 1.5s linear infinite",
        "pulse-dot": "pulseDot 1.6s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
