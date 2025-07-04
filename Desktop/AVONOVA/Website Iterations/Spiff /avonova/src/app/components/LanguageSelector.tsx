"use client";
import { useContext } from "react";
import { LanguageContext } from "../layout";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function LanguageSelector() {
  const { lang, setLang } = useContext(LanguageContext);

  const handleLanguageChange = (languageCode: "en"|"es"|"fr"|"de"|"hi"|"ar"|"zh") => {
    setLang(languageCode);
  };

  return (
    <div className="relative">
      <select
        value={lang}
        onChange={(e) => handleLanguageChange(e.target.value as "en"|"es"|"fr"|"de"|"hi"|"ar"|"zh")}
        className="appearance-none bg-transparent border border-[var(--border)] rounded-lg px-3 py-2 pr-8 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="w-4 h-4 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
} 