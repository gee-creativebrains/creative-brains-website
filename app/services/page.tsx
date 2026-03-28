import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From brand strategy to live website, we cover the full creative spectrum — so you don't have to coordinate across five agencies.",
};

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    oneliner: "Define who you are and why it matters",
    body: "We start with research, competitive mapping, and positioning work to build a brand strategy that holds up — in market, in pitch decks, and on billboards. Strategy is the foundation. Everything else follows.",
  },
  {
    number: "02",
    title: "Identity & Design",
    oneliner: "Visual systems that are unmistakably you",
    body: "Logo, typography, colour system, motion, and every touchpoint in between. We build design systems that scale — not just a pretty logo for the launch deck.",
  },
  {
    number: "03",
    title: "Copywriting & Content",
    oneliner: "Words that work — for humans and algorithms",
    body: "From brand narratives and taglines to long-form articles and UX copy. We write with clarity, edge, and purpose — always anchored in your audience's language.",
  },
  {
    number: "04",
    title: "Digital & Web",
    oneliner: "Websites built to perform, not just impress",
    body: "Fast, accessible, and beautifully designed websites. We use modern stacks (Next.js, Tailwind, headless CMS) to ship sites that score on Lighthouse and convert in the real world.",
  },
  {
    number: "05",
    title: "Campaigns",
    oneliner: "Full-funnel ideas from concept to conversion",
    body: "Launch campaigns, brand activations, and always-on content programmes. We concept, produce, and optimise across channels — social, paid, email, OOH.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-6">What we do</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            One team.
            <br />
            Every discipline.
          </h1>
          <p className="mt-8 text-xl text-brand-muted max-w-2xl leading-relaxed">
            From brand strategy to live website, we cover the full creative
            spectrum — so you don&apos;t have to coordinate across five agencies.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-0">
            {services.map(({ number, title, oneliner, body }) => (
              <div
                key={title}
                className="grid md:grid-cols-2 gap-8 py-12 border-b border-gray-200 group"
              >
                <div className="flex gap-6 items-start">
                  <span className="section-label mt-1 w-8 flex-shrink-0">
                    {number}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-brand-accent transition-colors">
                      {title}
                    </h2>
                    <p className="text-brand-muted font-medium">{oneliner}</p>
                  </div>
                </div>
                <p className="text-brand-muted leading-relaxed md:pt-1">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Tell us what you&apos;re building.
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            The first conversation is free. The first idea is on us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-white text-brand-black text-sm font-medium tracking-wide hover:bg-brand-accent hover:text-brand-white transition-colors duration-200"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
