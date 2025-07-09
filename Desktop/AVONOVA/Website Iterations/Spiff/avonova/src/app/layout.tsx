"use client";
import "./globals.css";
import { createContext, useEffect, useState } from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// LanguageContext for language selection
export const LanguageContext = createContext<{
  lang: "en"|"es"|"fr"|"de"|"pt"|"hi"|"ar"|"zh",
  setLang: (l: "en"|"es"|"fr"|"de"|"pt"|"hi"|"ar"|"zh") => void,
}>({
  lang: "en",
  setLang: () => {},
});

export const ThemeContext = createContext<{
  dark: boolean;
  setDark: (value: boolean) => void;
}>({
  dark: false,
  setDark: () => {},
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<"en"|"es"|"fr"|"de"|"pt"|"hi"|"ar"|"zh">("en");
  const [mounted, setMounted] = useState(false);

  // Load theme and language from localStorage or system
  useEffect(() => {
    setMounted(true);
    
    // Load dark mode preference
    const storedDark = localStorage.getItem("theme-dark");
    if (storedDark !== null) {
      const shouldBeDark = storedDark === "true";
      setDark(shouldBeDark);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
    
    // Load language preference
    const storedLang = localStorage.getItem("lang");
    if (storedLang && ["en", "es", "fr", "de", "pt", "hi", "ar", "zh"].includes(storedLang)) {
      setLang(storedLang as "en"|"es"|"fr"|"de"|"pt"|"hi"|"ar"|"zh");
    }
  }, []);

  // Persist theme and language
  useEffect(() => { localStorage.setItem("theme-dark", String(dark)); }, [dark]);
  useEffect(() => { localStorage.setItem("lang", lang); i18n.changeLanguage(lang); }, [lang]);

  // Set dark class on html
  useEffect(() => {
    if (!mounted) return; // Don't set classes until mounted to prevent hydration mismatch
    
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark, mounted]);

  // Force update on mount to ensure correct state
  useEffect(() => {
    if (mounted) {
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mounted, dark]);

  return (
    <html lang={lang}>
      <body className="antialiased">
        <ThemeContext.Provider value={{ dark, setDark }}>
          <LanguageContext.Provider value={{ lang, setLang }}>
            <I18nextProvider i18n={i18n}>
              {children}
            </I18nextProvider>
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
