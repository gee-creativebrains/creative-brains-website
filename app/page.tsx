"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      {/* Hero — pure black */}
      <section
        className="min-h-screen flex items-center pt-16"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div className="max-w-content mx-auto px-6 py-24 w-full">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-8">
              {h.tag}
            </p>
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[9.5rem] font-extrabold tracking-[-0.03em] leading-[0.95] mb-10 text-white whitespace-pre-line">
              {h.hero}
            </h1>
            <p className="text-lg text-white/60 max-w-xl mb-12 leading-relaxed">
              {h.subhero}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary btn-lg">
                {h.ctaPrimary}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white/80 text-sm font-medium hover:border-white/50 hover:text-white transition-colors duration-150"
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

      {/* Selected Work */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label text-white/40 mb-12">{h.worksLabel}</p>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                client: "Zentra",
                service: "Brand Strategy + Identity",
                bg: "#1A1A1A",
                accent: "#E94560",
                desc: "Full brand system for a B2B SaaS platform — from positioning to design language.",
              },
              {
                client: "Loopline",
                service: "Digital & Web",
                bg: "#111111",
                accent: "#E94560",
                desc: "Performance-first marketing site. Shipped in 3 weeks. Lighthouse 100 across all metrics.",
              },
              {
                client: "Vorto",
                service: "Copywriting + Campaigns",
                bg: "#161616",
                accent: "#E94560",
                desc: "Launch campaign copy and content strategy. Conversion rate doubled in 60 days.",
              },
            ].map(({ client, service, bg, accent, desc }) => (
              <div
                key={client}
                className="group relative overflow-hidden"
                style={{ backgroundColor: bg }}
              >
                <div className="aspect-[4/3] p-8 flex flex-col justify-between">
                  <div
                    className="w-10 h-10 rounded-sm mb-auto"
                    style={{ backgroundColor: accent, opacity: 0.15 }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: accent }}
                    >
                      {service}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {client}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              {h.worksCta}
            </Link>
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
