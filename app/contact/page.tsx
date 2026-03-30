"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-6">{c.tag}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            {c.hero}
          </h1>
          <p className="mt-8 text-xl text-brand-muted max-w-xl leading-relaxed">
            {c.subhero}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="section-label block mb-2"
                  >
                    {c.labelName}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={c.placeholderName}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="section-label block mb-2"
                  >
                    {c.labelCompany}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={c.placeholderCompany}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="section-label block mb-2"
                >
                  {c.labelEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={c.placeholderEmail}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="section-label block mb-2"
                >
                  {c.labelService}
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors bg-white"
                >
                  <option value="">{c.selectDefault}</option>
                  {c.serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="section-label block mb-2"
                >
                  {c.labelMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={c.placeholderMessage}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-4"
              >
                {c.submitButton}
              </button>

              <p className="text-xs text-brand-muted text-center">
                {c.submitNote}
              </p>
            </form>

            {/* Sidebar info */}
            <div className="space-y-10">
              <div>
                <p className="section-label mb-4">{c.whatNextLabel}</p>
                <ol className="space-y-4">
                  {c.whatNext.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="section-label mt-0.5 flex-shrink-0">
                        0{i + 1}
                      </span>
                      <p className="text-brand-muted">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <p className="section-label mb-4">{c.goodToKnowLabel}</p>
                <ul className="space-y-3">
                  {c.goodToKnow.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-brand-accent mt-0.5">→</span>
                      <span className="text-brand-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
