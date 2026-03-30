import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#1A1A2E",
          white: "#FFFFFF",
          accent: "#E94560",
          "accent-hover": "#C73652",
          muted: "#6B6B80",
          surface: "#F5F5F7",
          border: "#E2E2E7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1A1A2E 0%, #16213E 60%, #0F3460 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
