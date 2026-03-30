"use client";

import { createContext, useContext, useEffect, useState } from "react";
import translations, { Lang } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  t: (typeof translations)[Lang];
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getDefaultLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("cb-lang") as Lang | null;
  if (stored === "en" || stored === "de") return stored;
  return navigator.language.startsWith("de") ? "de" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(getDefaultLang());
  }, []);

  function toggleLang() {
    const next: Lang = lang === "en" ? "de" : "en";
    setLang(next);
    localStorage.setItem("cb-lang", next);
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
