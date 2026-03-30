"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-6">{s.tag}</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl whitespace-pre-line">
            {s.hero}
          </h1>
          <p className="mt-8 text-xl text-brand-muted max-w-2xl leading-relaxed">
            {s.subhero}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-brand-surface">
        <div className="max-w-content mx-auto px-6">
          <div className="space-y-0">
            {s.services.map(({ number, title, oneliner, body, checklist }) => (
              <div
                key={number}
                className="grid md:grid-cols-2 gap-8 py-12 border-b border-brand-border group"
              >
                <div className="flex gap-6 items-start">
                  <span className="section-label mt-1 w-8 flex-shrink-0">
                    {number}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-brand-accent transition-colors">
                      {title}
                    </h2>
                    <p className="text-brand-muted font-medium text-sm">
                      {oneliner}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-brand-muted leading-relaxed mb-6 text-sm">
                    {body}
                  </p>
                  <ul className="space-y-2">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <span className="text-brand-accent flex-shrink-0">✓</span>
                        <span className="text-brand-black">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-4">{s.processLabel}</p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            {s.processHeadline}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {s.process.map(({ step, title, body }) => (
              <div key={step}>
                <p className="text-5xl font-extrabold text-brand-surface mb-6 select-none">
                  {step}
                </p>
                <h3 className="text-lg font-semibold mb-3 text-brand-black">
                  {title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-white"
        style={{ backgroundColor: "#E94560" }}
      >
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            {s.ctaHeadline}
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            {s.ctaBody}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-accent text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors duration-150"
          >
            {s.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
