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
    checklist: [
      "Market & audience research",
      "Positioning and messaging framework",
      "Brand story and narrative",
      "Competitive differentiation",
    ],
  },
  {
    number: "02",
    title: "Identity & Design",
    oneliner: "Visual systems that are unmistakably you",
    body: "Logo, typography, colour system, motion, and every touchpoint in between. We build design systems that scale — not just a pretty logo for the launch deck.",
    checklist: [
      "Logo and brand mark",
      "Typography and colour system",
      "Component and UI design",
      "Brand guidelines",
    ],
  },
  {
    number: "03",
    title: "Copywriting & Content",
    oneliner: "Words that work — for humans and algorithms",
    body: "From brand narratives and taglines to long-form articles and UX copy. We write with clarity, edge, and purpose — always anchored in your audience's language.",
    checklist: [
      "Brand voice and tone guide",
      "Website and UX copy",
      "Content strategy",
      "Long-form and campaign copy",
    ],
  },
  {
    number: "04",
    title: "Digital & Web",
    oneliner: "Websites built to perform, not just impress",
    body: "Fast, accessible, and beautifully designed websites. We use modern stacks (Next.js, Tailwind, headless CMS) to ship sites that score on Lighthouse and convert in the real world.",
    checklist: [
      "Next.js / React development",
      "Performance-first engineering",
      "Accessibility (WCAG 2.1 AA)",
      "Vercel / headless CMS deployment",
    ],
  },
  {
    number: "05",
    title: "Campaigns",
    oneliner: "Full-funnel ideas from concept to conversion",
    body: "Launch campaigns, brand activations, and always-on content programmes. We concept, produce, and optimise across channels — social, paid, email, OOH.",
    checklist: [
      "Campaign concept and creative",
      "Social and paid creative",
      "Email programmes",
      "Measurement and optimisation",
    ],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Brief & Discovery",
    body: "We review your brief, ask the right questions, and align on goals, audience, and success metrics.",
  },
  {
    step: "02",
    title: "Strategy & Concept",
    body: "We develop the creative strategy and concept — the why behind every design, word, and build decision.",
  },
  {
    step: "03",
    title: "Build & Deliver",
    body: "We execute, iterate, and ship. No surprises. Transparent process and fast turnaround.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-6">What we do</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
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
      <section className="py-16 bg-brand-surface">
        <div className="max-w-content mx-auto px-6">
          <div className="space-y-0">
            {services.map(({ number, title, oneliner, body, checklist }) => (
              <div
                key={title}
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
          <p className="section-label mb-4">The process</p>
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, body }) => (
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
            Tell us what you&apos;re building.
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            The first conversation is free. The first idea is on us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-accent text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors duration-150"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
