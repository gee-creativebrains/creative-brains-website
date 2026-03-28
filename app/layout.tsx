import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
