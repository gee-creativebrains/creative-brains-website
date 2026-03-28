"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-brand-black hover:text-brand-accent transition-colors"
        >
          Creative Brains
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href || pathname === href + "/"
                  ? "text-brand-accent"
                  : "text-brand-black hover:text-brand-accent"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary text-xs py-2 px-4">
          Start a project
        </Link>
      </div>
    </header>
  );
}
