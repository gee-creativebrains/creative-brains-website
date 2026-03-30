"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // On home page: transparent until scrolled; on other pages: always solid
  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        solid
          ? "bg-white/95 backdrop-blur-sm border-b border-brand-border"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`text-lg font-semibold tracking-tight transition-colors ${
            solid ? "text-brand-black hover:text-brand-accent" : "text-white hover:text-brand-accent"
          }`}
        >
          Creative Brains
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href || pathname === href + "/"
                  ? "text-brand-accent"
                  : solid
                  ? "text-brand-black hover:text-brand-accent"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex btn-primary text-xs py-2 px-4"
          >
            Start a project
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className={`md:hidden p-2 ${solid ? "text-brand-black" : "text-white"}`}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-brand-black/95 flex flex-col p-8 gap-6">
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-white hover:text-brand-accent transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4 self-start"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
