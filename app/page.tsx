"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      {/* Hero — dark gradient */}
      <section
        className="min-h-screen flex items-center pt-16"
        style={{
          background:
            "linear-gradient(135deg, #1A1A2E 0%, #16213E 60%, #0F3460 100%)",
        }}
      >
        <div className="max-w-content mx-auto px-6 py-24 w-full">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-6">
              {h.tag}
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 text-white whitespace-pre-line">
              {h.hero}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-12 leading-relaxed">
              {h.subhero}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary btn-lg">
                {h.ctaPrimary}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white text-sm font-medium rounded-sm hover:border-white/60 transition-colors duration-150"
              >
                {h.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features — 6 cards */}
      <section className="bg-white py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-4">{h.featuresLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-xl">
            {h.featuresHeadline}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {h.features.map(({ title, body }) => (
              <div key={title} className="card card-hover">
                <div className="w-8 h-0.5 bg-brand-accent mb-6" />
                <h3 className="text-lg font-semibold mb-3 text-brand-black">
                  {title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-sm">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-6">{h.servicesTeaserLabel}</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                {h.servicesTeaserHeadline}
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                {h.servicesTeaserBody}
              </p>
              <Link href="/services" className="btn-primary">
                {h.servicesTeaserCta}
              </Link>
            </div>
            <div className="space-y-0">
              {h.services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-5 border-b border-brand-border group"
                >
                  <span className="font-medium group-hover:text-brand-accent transition-colors">
                    {service}
                  </span>
                  <span className="text-brand-muted text-sm">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-12">{h.testimonialsLabel}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {h.testimonials.map(({ quote, name, title, company }) => (
              <div key={name} className="card-elevated card-hover">
                <p className="text-brand-black leading-relaxed mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-brand-muted text-sm">
                    {title}, {company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — accent bg per spec */}
      <section
        className="py-20 text-white"
        style={{ backgroundColor: "#E94560" }}
      >
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {h.ctaBannerHeadline}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            {h.ctaBannerBody}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-accent text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors duration-150"
          >
            {h.ctaBannerButton}
          </Link>
        </div>
      </section>
    </>
  );
}
