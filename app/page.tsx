import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Brains — Brands That Mean Business",
  description:
    "Creative Brains is a full-service creative studio — strategy, design, copy, and tech — built for businesses that can't afford to wait.",
};

const proofPoints = [
  {
    title: "Strategic Thinking",
    body: "Every project starts with why, not what. We dig into your market, audience, and goals before a single pixel moves.",
  },
  {
    title: "Bold Creative",
    body: "Design and copy that cuts through the noise. We build brands people remember and digital experiences they actually use.",
  },
  {
    title: "Built to Ship",
    body: "Fast turnaround without compromising quality. Lean processes and AI-assisted workflows mean you get more, faster.",
  },
];

const services = [
  "Brand Strategy",
  "Identity & Design",
  "Copywriting & Content",
  "Digital & Web",
  "Campaigns",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 bg-brand-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <p className="section-label mb-6">Creative Studio</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Brands that
              <br />
              mean business.
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl mb-12 leading-relaxed">
              We are a full-service creative studio — strategy, design, copy,
              and tech — built for businesses that can&apos;t afford to wait.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <Link href="/services" className="btn-secondary">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-12">How we work</p>
          <div className="grid md:grid-cols-3 gap-8">
            {proofPoints.map(({ title, body }) => (
              <div key={title} className="bg-brand-white p-8 border border-gray-100">
                <div className="w-8 h-0.5 bg-brand-accent mb-6" />
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-brand-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-6">One team. Every discipline.</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                From brand strategy to live website — we cover the full creative
                spectrum.
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                So you don&apos;t have to coordinate across five agencies.
              </p>
              <Link href="/services" className="btn-primary">
                Tell us what you&apos;re building
              </Link>
            </div>
            <div className="space-y-0">
              {services.map((service, i) => (
                <div
                  key={service}
                  className="flex items-center justify-between py-5 border-b border-gray-100 group"
                >
                  <span className="font-medium group-hover:text-brand-accent transition-colors">
                    {service}
                  </span>
                  <span className="text-brand-muted text-sm">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-black text-brand-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build something worth talking about?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            The first conversation is free. The first idea is on us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-white text-brand-black text-sm font-medium tracking-wide hover:bg-brand-accent hover:text-brand-white transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
