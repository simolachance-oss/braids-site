import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0400", surface: "#130800",
        gold: { DEFAULT: "#C9A227", light: "#E2BB47", dark: "#9A7A1A" },
        amber: { DEFAULT: "#D4700A", light: "#E88B2B" },
        cocoa: { DEFAULT: "#4A2000", light: "#7A4010", dark: "#2A0E00" },
        cream: { DEFAULT: "#FEF3E2", muted: "#D4C4A8" },
        rose: "#B5747A",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: { float: "float 6s ease-in-out infinite", shimmer: "shimmer 2s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
