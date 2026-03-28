import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "We built Creative Brains because the best creative work happens when strategy and execution are never separated.",
};

const values = [
  {
    title: "Honest craft over slick sales",
    body: "We don't overpromise. We show you what we can do, then we do it. Quality of work over quality of pitch.",
  },
  {
    title: "Speed as a creative discipline",
    body: "Fast doesn't mean rushed. It means lean processes, clear thinking, and a team that doesn't waste your time.",
  },
  {
    title: "Outcomes over aesthetics",
    body: "Beautiful work that doesn't perform is just decoration. We anchor every brief in business goals — without sacrificing craft.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-6">About us</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            The team that thinks and does.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed text-brand-black mb-6">
              Most agencies split strategy from creativity. Strategists write
              decks. Creatives execute. The handoff is where ideas die.
            </p>
            <p className="text-xl leading-relaxed text-brand-muted mb-6">
              At Creative Brains, the people who think are the people who
              build. That&apos;s what makes the work sharper — and the process
              faster.
            </p>
            <p className="text-xl leading-relaxed text-brand-muted">
              We built Creative Brains because the best creative work happens
              when strategy and execution are never separated. One team. One
              brief. Zero translation loss.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-label mb-12">How we work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ title, body }) => (
              <div key={title}>
                <div className="w-8 h-0.5 bg-brand-accent mb-6" />
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-brand-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — placeholder */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-12">Meet the brains</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-gray-200 mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                    Photo
                  </div>
                </div>
                <p className="font-semibold text-sm">Team Member {i}</p>
                <p className="text-brand-muted text-sm">Role</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-brand-muted italic">
            Team bios coming soon.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Let&apos;s make something worth talking about.
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Tell us about your project. We&apos;ll respond within 24 hours.
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
