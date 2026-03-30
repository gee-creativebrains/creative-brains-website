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
  {
    title: "One team, zero handoffs",
    body: "The people who think are the people who build. Strategy and execution in the same room means sharper ideas, faster.",
  },
];

const stats = [
  { number: "5+", label: "Years in business" },
  { number: "80+", label: "Projects shipped" },
  { number: "40+", label: "Happy clients" },
  { number: "100%", label: "On-time delivery" },
];

const team = [
  { initials: "CB", name: "Creative Director", title: "Strategy & Vision" },
  { initials: "DS", name: "Design Lead", title: "Identity & UI" },
  { initials: "CW", name: "Copy Lead", title: "Brand Voice & Content" },
  { initials: "TL", name: "Tech Lead", title: "Web & Digital" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero — surface-alt bg per spec */}
      <section className="pt-32 pb-24 bg-brand-surface">
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-6">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl text-brand-black">
            The team that thinks and does.
          </h1>
          <p className="mt-8 text-xl text-brand-muted max-w-2xl leading-relaxed">
            We built Creative Brains because the best creative work happens when
            strategy and execution are never separated.
          </p>
        </div>
      </section>

      {/* Mission + Values — 2-col */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div>
              <p className="section-label mb-6">Our Mission</p>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Creative work with no translation loss.
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                Most agencies split strategy from creativity. Strategists write
                decks. Creatives execute. The handoff is where ideas die.
              </p>
              <p className="text-brand-muted leading-relaxed">
                At Creative Brains, the people who think are the people who
                build. That&apos;s what makes the work sharper — and the process
                faster. One team. One brief. Zero translation loss.
              </p>
            </div>

            {/* Values grid */}
            <div>
              <p className="section-label mb-6">Our Values</p>
              <div className="grid grid-cols-2 gap-6">
                {values.map(({ title, body }) => (
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
          <p className="section-label mb-12">Meet the brains</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map(({ initials, name, title }) => (
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
            Individual bios and photos coming soon.
          </p>
        </div>
      </section>

      {/* Impact Stats Bar */}
      <section className="py-16 bg-brand-black text-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ number, label }) => (
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
            Want to work with us?
          </h2>
          <p className="text-brand-muted mb-8 max-w-lg mx-auto">
            Tell us about your project. We&apos;ll respond within 24 hours.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
