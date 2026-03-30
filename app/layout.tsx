import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Creative Brains — Where Strategy Meets Creativity",
    template: "%s | Creative Brains",
  },
  description:
    "Creative Brains is a full-service creative studio combining strategy, design, copy, and tech for businesses that can't afford to wait.",
  keywords: [
    "creative agency",
    "brand strategy",
    "creative studio",
    "full-service creative",
    "design agency",
  ],
  openGraph: {
    type: "website",
    siteName: "Creative Brains",
    title: "Creative Brains — Where Strategy Meets Creativity",
    description:
      "Full-service creative studio: strategy, design, copy, and tech under one roof.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script
          defer
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
