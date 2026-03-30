"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* Page Hero — surface-alt bg per spec */}
      <section className="pt-32 pb-24 bg-brand-surface">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-6">{a.tag}</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl text-brand-black">
            {a.hero}
          </h1>
          <p className="mt-8 text-xl text-brand-muted max-w-2xl leading-relaxed">
            {a.subhero}
          </p>
        </div>
      </section>

      {/* Mission + Values — 2-col */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div>
              <p className="section-label mb-6">{a.missionLabel}</p>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                {a.missionHeadline}
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                {a.missionBody1}
              </p>
              <p className="text-brand-muted leading-relaxed">
                {a.missionBody2}
              </p>
            </div>

            {/* Values grid */}
            <div>
              <p className="section-label mb-6">{a.valuesLabel}</p>
              <div className="grid grid-cols-2 gap-6">
                {a.values.map(({ title, body }) => (
                  <div key={title}>
                    <div className="w-6 h-0.5 bg-brand-accent mb-4" />
                    <h3 className="text-sm font-semibold mb-2 text-brand-black">
                      {title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-12">{a.teamLabel}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {a.team.map(({ initials, name, title }) => (
              <div key={name} className="group">
                <div className="aspect-square bg-brand-accent rounded-md mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {initials}
                  </span>
                </div>
                <p className="font-semibold text-sm text-brand-black">{name}</p>
                <p className="text-brand-muted text-sm">{title}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-muted italic">
            {a.teamBiosNote}
          </p>
        </div>
      </section>

      {/* Impact Stats Bar */}
      <section className="py-16 bg-brand-black text-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {a.stats.map(({ number, label }) => (
              <div key={label}>
                <p className="text-4xl md:text-5xl font-extrabold text-brand-accent mb-2">
                  {number}
                </p>
                <p className="text-white/60 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-brand-black">
            {a.ctaHeadline}
          </h2>
          <p className="text-brand-muted mb-8 max-w-lg mx-auto">
            {a.ctaBody}
          </p>
          <Link href="/contact" className="btn-secondary">
            {a.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
