import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Creative Brains. Tell us what you're building — we'll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-6">Work with us</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl">
            Let&apos;s make something worth talking about.
          </h1>
          <p className="mt-8 text-xl text-brand-muted max-w-xl leading-relaxed">
            Tell us about your project. We&apos;ll respond within 24 hours.
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
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="section-label block mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="section-label block mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@acme.com"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="section-label block mb-2"
                >
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  <option>Brand Strategy</option>
                  <option>Identity &amp; Design</option>
                  <option>Copywriting &amp; Content</option>
                  <option>Digital &amp; Web</option>
                  <option>Campaigns</option>
                  <option>Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="section-label block mb-2"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What are you building? What's the goal? Any deadline or budget in mind?"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-4"
              >
                Send message
              </button>

              <p className="text-xs text-brand-muted text-center">
                We respond within 24 hours on business days.
              </p>
            </form>

            {/* Sidebar info */}
            <div className="space-y-10">
              <div>
                <p className="section-label mb-4">What happens next</p>
                <ol className="space-y-4">
                  {[
                    "We review your brief within 24 hours.",
                    "We schedule a free 30-minute discovery call.",
                    "We share a tailored proposal with scope, timeline, and investment.",
                    "We kick off. Fast.",
                  ].map((step, i) => (
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
                <p className="section-label mb-4">Good to know</p>
                <ul className="space-y-3">
                  {[
                    "The first conversation is free.",
                    "The first idea is on us.",
                    "No retainers required to start.",
                    "Pricing is transparent from day one.",
                  ].map((item) => (
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
