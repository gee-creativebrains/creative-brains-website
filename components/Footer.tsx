import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white hover:text-brand-accent transition-colors"
            >
              Creative Brains
            </Link>
            <p className="mt-2 text-sm text-white/50 max-w-xs">
              Full-service creative studio. Strategy, design, copy, and tech
              under one roof.
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
                Company
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
                Get in touch
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Start a project
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Creative Brains. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
