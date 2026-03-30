"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

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
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
                {t.footer.companyLabel}
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {t.nav.services}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
                {t.footer.getInTouchLabel}
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {t.footer.startProject}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Creative Brains. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
