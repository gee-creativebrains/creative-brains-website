import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-brand-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-brand-black"
            >
              Creative Brains
            </Link>
            <p className="mt-2 text-sm text-brand-muted max-w-xs">
              Full-service creative studio. Strategy, design, copy, and tech
              under one roof.
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div>
              <p className="section-label mb-3">Company</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-brand-muted hover:text-brand-black transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-brand-muted hover:text-brand-black transition-colors"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="section-label mb-3">Get in touch</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-brand-muted hover:text-brand-black transition-colors"
                  >
                    Start a project
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} Creative Brains. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
