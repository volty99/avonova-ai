"use client";
import { useContext, useState } from "react";
import { LanguageContext } from "../layout";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "es", name: "Español", flag: "🇪🇸", nativeName: "Español" },
  { code: "fr", name: "Français", flag: "🇫🇷", nativeName: "Français" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", nativeName: "Deutsch" },
  { code: "pt", name: "Português", flag: "🇵🇹", nativeName: "Português" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", nativeName: "हिन्दी" },
  { code: "ar", name: "العربية", flag: "🇸🇦", nativeName: "العربية" },
  { code: "zh", name: "中文", flag: "🇨🇳", nativeName: "中文" },
  { code: "ja", name: "日本語", flag: "🇯🇵", nativeName: "日本語" },
  { code: "ko", name: "한국어", flag: "🇰🇷", nativeName: "한국어" },
  { code: "it", name: "Italiano", flag: "🇮🇹", nativeName: "Italiano" },
  { code: "ru", name: "Русский", flag: "🇷🇺", nativeName: "Русский" },
];

export default function LanguageSelector() {
  const { lang, setLang } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (languageCode: string) => {
    setLang(languageCode as any);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(l => l.code === lang) || languages[0];

  return (
    <div className="relative">
      {/* Enhanced Language Selector */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[var(--surface)] to-[var(--background)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] hover:border-[var(--primary)] hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="font-medium text-sm">{currentLanguage.name}</span>
        <svg 
          className={`w-4 h-4 text-[var(--text-secondary)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Enhanced Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-sm">
          <div className="max-h-64 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gradient-to-r hover:from-[var(--primary)]/10 hover:to-transparent transition-all duration-200 ${
                  language.code === lang 
                    ? 'bg-gradient-to-r from-[var(--primary)]/10 to-transparent text-[var(--primary)] font-semibold' 
                    : 'text-[var(--text-primary)]'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{language.name}</span>
                  <span className="text-xs text-[var(--text-secondary)]">{language.nativeName}</span>
                </div>
                {language.code === lang && (
                  <svg className="w-4 h-4 ml-auto text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
      </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
} 