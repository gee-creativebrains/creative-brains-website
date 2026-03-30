import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Brains — Brands That Mean Business",
  description:
    "Creative Brains is a full-service creative studio — strategy, design, copy, and tech — built for businesses that can't afford to wait.",
};

const features = [
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
  {
    title: "One Brief",
    body: "Strategy, design, copy, and tech under one roof. No translation loss between disciplines — just coherent creative.",
  },
  {
    title: "Honest Craft",
    body: "We don't overpromise. We show you what we can do, then we do it. Quality of work over quality of pitch.",
  },
  {
    title: "Outcomes First",
    body: "Beautiful work that doesn't perform is just decoration. We anchor every brief in business goals without sacrificing craft.",
  },
];

const services = [
  "Brand Strategy",
  "Identity & Design",
  "Copywriting & Content",
  "Digital & Web",
  "Campaigns",
];

const testimonials = [
  {
    quote:
      "Creative Brains delivered a brand identity that we're genuinely proud of. Fast, focused, and no nonsense.",
    name: "Sarah K.",
    title: "Founder",
    company: "Zentra",
  },
  {
    quote:
      "They think strategically and execute beautifully. Rare combination. We shipped our site in three weeks.",
    name: "Marcus T.",
    title: "CEO",
    company: "Loopline",
  },
  {
    quote:
      "The copy alone doubled our conversion rate. These people understand audiences.",
    name: "Lena R.",
    title: "Head of Marketing",
    company: "Vorto",
  },
];

export default function HomePage() {
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
              Creative Studio
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 text-white">
              Brands that
              <br />
              mean business.
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-12 leading-relaxed">
              We are a full-service creative studio — strategy, design, copy,
              and tech — built for businesses that can&apos;t afford to wait.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary btn-lg">
                Start a project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white text-sm font-medium rounded-sm hover:border-white/60 transition-colors duration-150"
              >
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features — 6 cards */}
      <section className="bg-white py-24">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-4">How we work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-xl">
            From brief to launch — we cover the full creative spectrum.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map(({ title, body }) => (
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
              <p className="section-label mb-6">One team. Every discipline.</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                So you don&apos;t have to coordinate across five agencies.
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                Brand strategy to live website — under one roof, one brief, zero
                translation loss.
              </p>
              <Link href="/services" className="btn-primary">
                Tell us what you&apos;re building
              </Link>
            </div>
            <div className="space-y-0">
              {services.map((service, i) => (
                <div
                  key={service}
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
          <p className="section-label mb-12">What clients say</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, title, company }) => (
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
            Ready to build something worth talking about?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            The first conversation is free. The first idea is on us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-accent text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors duration-150"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
