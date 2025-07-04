"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import { LanguageContext, ThemeContext } from "./layout";
import React from "react";
import { supabase } from '../utils/supabaseClient';

function RocketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
    </svg>
  );
}



function ArrowCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="w-6 h-6">
      <path d="M7 4.5a3 3 0 0 0-2.567 4.554a3.001 3.001 0 0 0 0 5.893M7 4.5a2.5 2.5 0 0 1 5 0v15a2.5 2.5 0 0 1-5 0a3 3 0 0 1-2.567-4.553M7 4.5c0 .818.393 1.544 1 2m-3.567 8.447A3 3 0 0 1 6 13.67m11 5.83a3 3 0 0 0 2.567-4.553a3.001 3.001 0 0 0 0-5.893M17 19.5a2.5 2.5 0 0 1-5 0v-15a2.5 2.5 0 0 1 5 0a3 3 0 0 1 2.567 4.554M17 19.5c0-.818-.393-1.544-1-2m3.567-8.446A3 3 0 0 1 18 10.329" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className="w-6 h-6"><path fill="currentColor" d="M1408 512h512v512h-128V731l-576 575l-256-256l-704 705v37h1664v128H128V128h128v1445l704-703l256 256l485-486h-293V512z"/></svg>
  );
}

function CustomerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  );
}

function InsightsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" className="w-6 h-6"><path fill="currentColor" d="M19.504 43.152h16.969c.797 0 1.289-.492 1.289-1.289v-3.75c0-5.672 8.25-9.328 8.25-19.453C46.012 7.996 38.793.871 27.988.871c-10.804 0-18 7.125-18 17.79c0 10.124 8.227 13.78 8.227 19.452v3.75c0 .797.515 1.29 1.289 1.29m2.203-4.992c0-6.89-8.18-10.57-8.18-19.476c0-8.579 5.79-14.274 14.461-14.274c8.672 0 14.485 5.695 14.485 14.274c0 8.906-8.203 12.586-8.203 19.476v1.453H21.707Zm-1.336 11.32h15.235c1.195 0 2.156-.984 2.156-2.203c0-1.218-.961-2.203-2.157-2.203H20.371c-1.195 0-2.156.985-2.156 2.203c0 1.22.96 2.203 2.156 2.203m7.617 5.649c3.235 0 5.508-1.477 5.742-3.75H22.246c.211 2.273 2.484 3.75 5.742 3.75"/></svg>
  );
}

function SupportIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M11 17.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"/><path fill="currentColor" fillRule="evenodd" d="M8 2a2.25 2.25 0 0 0-2.25 2.25v15.5A2.25 2.25 0 0 0 8 22h8a2.25 2.25 0 0 0 2.25-2.25V4.25A2.25 2.25 0 0 0 16 2zm-.75 2.25A.75.75 0 0 1 8 3.5h8a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75z" clipRule="evenodd"/></svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="w-6 h-6"><path fill="currentColor" fillRule="evenodd" d="M33 13.924C33 6.893 27.594 1 20.51 1S8 6.897 8 13.93C8 16.25 8.324 18 9.423 20h-.021l10.695 20.621c.402.551.824-.032.824-.032C20.56 41.13 31.616 20 31.616 20h-.009C32.695 18 33 16.246 33 13.924zm-18.249-.396c0-3.317 2.579-6.004 5.759-6.004c3.179 0 5.76 2.687 5.76 6.004s-2.581 6.005-5.76 6.005c-3.18 0-5.759-2.687-5.759-6.005z"/></svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-6 h-6"><path fill="currentColor" d="M262.2 37c37.4 51.6 82.002 118.197 133.602 199.598c13 22 11 48.4-5.8 79.4c-6.4 13-22.6 42.6-48.4 89.2c28.4 40 71.6 89.2 129.8 147.2s106.602 101.4 145.2 129.8c46.401-27.2 76.201-43.8 89.201-50.399c16.8-9 33-13.6 48.4-13.6c11.6 0 22 2.6 31 7.8c59.4 36.2 126.601 80.8 201.4 133.6c14.2 10.4 22.2 24.601 24.2 42.601c2 18.2-3.599 37.4-16.399 58.2c-6.4 9-16.8 22.2-31 39.8c-14.201 17.4-35.601 39.4-64.002 65.8s-51.6 39.802-69.8 39.802h-2c-136.6-5.4-305-107.801-504.4-307.201c-199.6-199.6-302-367.8-307.2-504.6c0-18 13.2-41.6 39.8-70.8c26.4-29 48.2-50 64.799-63c16.8-12.8 31-23.2 42.6-31c14.2-10.4 30.4-15.4 48.4-15.4c22.2 0 38.8 7.8 50.6 23.2zm-63.998 40.598c-27.2 19.4-52.603 41.198-76.603 64.998c-23.8 24-37.8 41.6-41.6 53.2c5.2 120.2 101 273.2 287.6 459.2c186.6 186 340 282.2 460 288.6c10.4-3.8 27.4-18 51.4-42.6s45.6-50.399 64.8-77.399c3.8-5.2 5.2-9.6 3.8-13.6c-77.4-54.2-142-97.4-193.8-129.801c-5.2 0-11.6 2-19.4 5.8c-11.6 6.4-40.6 22.6-87.2 48.4l-33 19.4l-33-21.4c-42.6-29.6-94.199-75.6-154.999-137.6c-60.6-60.6-105.8-112.4-135.6-155l-23.2-31l19.4-34.799c25.8-46.4 42-75.6 48.4-87.2c3.8-7.8 5.8-14.2 5.8-19.4c-46-73.401-88.599-138-127.398-193.6h-2c-5 0-9.6 1.4-13.4 3.8z"/></svg>
  );
}

const features = [
  {
    icon: <span className="inline-block bg-blue-100 text-blue-500 rounded-lg p-3"><BrainIcon /></span>,
    titleKey: "features_inventory_title",
    descKey: "features_inventory_desc",
    link: "#",
  },
  {
    icon: <span className="inline-block bg-blue-100 text-blue-500 rounded-lg p-3"><ChartIcon /></span>,
    titleKey: "features_analytics_title",
    descKey: "features_analytics_desc",
    link: "#",
  },
  {
    icon: <span className="inline-block bg-blue-100 text-blue-500 rounded-lg p-3"><CustomerIcon /></span>,
    titleKey: "features_customer_automation_title",
    descKey: "features_customer_automation_desc",
    link: "#",
  },
  {
    icon: <span className="inline-block bg-blue-100 text-blue-500 rounded-lg p-3"><ArrowCircleIcon /></span>,
    titleKey: "features_integrations_title",
    descKey: "features_integrations_desc",
    link: "#",
  },
  {
    icon: <span className="inline-block bg-blue-100 text-blue-500 rounded-lg p-3"><InsightsIcon /></span>,
    titleKey: "features_insights_title",
    descKey: "features_insights_desc",
    link: "#",
  },
  {
    icon: <span className="inline-block bg-blue-100 text-blue-500 rounded-lg p-3"><SupportIcon /></span>,
    titleKey: "features_support_title",
    descKey: "features_support_desc",
    link: "#",
  },
];



// Language data for flags and names
const LANGUAGES = [
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "pt", flag: "🇵🇹", name: "Português" },
  { code: "hi", flag: "🇮🇳", name: "हिन्दी" },
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
];

function DarkModeToggle() {
  const { dark, setDark } = useContext(ThemeContext);
  
  const handleToggle = () => {
    setDark(!dark);
  };
  
  return (
    <button
      onClick={handleToggle}
      className={`rounded-full border border-[var(--accent)] px-4 py-1 font-semibold text-[var(--accent)] shadow transition-colors text-sm ml-2 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-[var(--border-dark)] ${dark ? 'bg-[var(--surface-dark)]' : 'bg-white'}`}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? (
        // Sun SVG
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"/></svg>
      ) : (
        // Moon SVG
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M8.275 6.024a5.006 5.006 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954C6.667.986 2.597 3.88 1.677 8.206c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.55 8.55 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5.004 5.004 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94Zm-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584a7.627 7.627 0 0 1-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91Z" clipRule="evenodd"/></svg>
      )}
    </button>
  );
}

// NavBar matching the original global nav bar
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);
  const { t } = useTranslation();
  const navLinks = [
    { name: t('home'), href: "#home" },
    { name: t('features'), href: "#features" },
    { name: t('about'), href: "#about" },
    { name: t('contact'), href: "#contact" },
  ];

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false); // close mobile menu if open
      }
    }
  };

  return (
    <nav className="w-full bg-[var(--background)] border-b border-[var(--border)] fixed top-0 left-0 z-30 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/FullAnanovaSw.svg" alt="Avonova Logo" width={120} height={32} className="h-8 w-auto" priority />
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => handleSmoothScroll(e, link.href)}
              className="font-medium transition-colors px-2 py-1 text-[var(--text-primary)] hover:text-[var(--accent)]"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Right Side: Language selector, Dark mode, Login, Sign Up */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <select
              value={lang}
              onChange={e => setLang(e.target.value as 'en'|'es'|'fr'|'de'|'hi'|'ar'|'zh')}
              className="btn-secondary rounded-full text-sm font-semibold"
            >
              <option value="" disabled hidden>🌐</option>
              {LANGUAGES.map(l => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.name}
                </option>
              ))}
            </select>
            <DarkModeToggle />
          </div>
          <Link href="/login" className="btn-primary rounded-full text-sm font-semibold">{t('login')}</Link>
          <Link href="/get-started" className="btn-primary rounded-full text-sm font-semibold">{t('signup')}</Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded text-[var(--text-primary)] hover:text-[var(--accent)] focus:outline-none"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--border)] shadow-lg px-4 pb-4 pt-2 flex flex-col gap-2 transition-colors duration-200 dark:bg-[var(--bg-dark)] dark:border-[var(--border-dark)]">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={e => handleSmoothScroll(e, link.href)}
              className="text-[var(--text-primary)] hover:text-[var(--accent)] font-medium transition-colors px-2 py-2 rounded dark:text-[var(--text-primary-dark)] dark:hover:text-[var(--accent-dark)]"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-2 mt-2 items-center">
            <div className="flex items-center gap-2">
              <span className="text-[var(--text-secondary)] dark:text-[var(--text-secondary-dark)]">Language:</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as 'en'|'es'|'fr'|'de'|'hi'|'ar'|'zh')}
                className="bg-[var(--surface)] dark:bg-[var(--surface-dark)] text-[var(--text-primary)] dark:text-[var(--text-primary-dark)] border border-[var(--border)] dark:border-[var(--border-dark)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.name}
                  </option>
                ))}
              </select>
            </div>
            <DarkModeToggle />
            <Link href="/login" className="btn-primary rounded-full text-sm font-semibold dark:bg-[var(--surface-dark)] dark:text-[var(--accent)] dark:hover:bg-[var(--border-dark)]">{t('login')}</Link>
            <Link href="/get-started" className="btn-primary rounded-full text-sm font-semibold">{t('signup')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function Home() {
  const { t } = useTranslation();

  // Test Supabase import
  console.log('Supabase client imported successfully');

  return (
    <>
      <NavBar />

      <main className="flex flex-col items-center w-full bg-[var(--background)] pt-16 transition-colors duration-200">
        {/* Hero Section */}
        <section id="home" className="w-full bg-gradient-hero text-[var(--text-primary)] pt-24 pb-16 transition-colors duration-200">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight text-[var(--text-primary)]">
              <span>{t('welcome')}</span> <span className="text-[var(--accent)]">Avonova</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8">{t('hero_description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started" className="btn-primary flex items-center gap-2 text-base">
                <RocketIcon /> {t('get_started')}
              </Link>
              <a href="#" className="btn-secondary flex items-center gap-2 text-base">
                <PlayIcon /> {t('watch_demo')}
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[var(--background)] w-full transition-colors duration-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold text-[var(--text-primary)] mb-2">{t('powerful_features')}</h2>
              <p className="text-lg text-[var(--text-secondary)]">{t('powerful_features_description')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-[var(--surface)] rounded-2xl shadow-sm p-8 flex flex-col items-start gap-4 border border-[var(--border)] transition-colors duration-200 text-[var(--text-primary)]">
                  <div className="flex items-center gap-2">
                    {React.cloneElement(f.icon, { className: 'inline-block bg-blue-100 text-blue-500 rounded-lg p-3' })}
                  </div>
                  <div className="text-lg font-bold text-[var(--text-primary)]">{t(f.titleKey)}</div>
                  <div className="text-[var(--text-secondary)] text-base flex-1">{t(f.descKey)}</div>
                  <a href={f.link} className="mt-2 text-[var(--accent)] font-medium flex items-center gap-1 hover:underline group hover:text-[var(--accent-hover)]">{t('learn_more')} <span className="text-lg group-hover:translate-x-1 transition-transform">→</span></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-hero w-full transition-colors duration-200">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" alt="Modern office workspace" width={600} height={400} className="rounded-xl shadow-lg w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--text-primary)] mb-4">{t('why_avonova')}</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6">{t('why_avonova_description')}</p>
              <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2">
                <li>{t('why_avonova_item1')}</li>
                <li>{t('why_avonova_item2')}</li>
                <li>{t('why_avonova_item3')}</li>
                <li>{t('why_avonova_item4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section id="contact" className="py-20 bg-[var(--background)] w-full transition-colors duration-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[var(--text-primary)] mb-2">{t('get_in_touch')}</h2>
              <p className="text-lg text-[var(--text-secondary)]">{t('get_in_touch_description')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <form className="bg-[var(--surface)] rounded-2xl shadow-lg p-8 flex flex-col gap-4 border border-[var(--border)] transition-colors duration-200">
                <div className="flex gap-4">
                  <input type="text" placeholder={t('first_name')} className="w-1/2 px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--accent)] outline-none transition-colors" required />
                  <input type="text" placeholder={t('last_name')} className="w-1/2 px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--accent)] outline-none transition-colors" required />
                </div>
                <input type="email" placeholder={t('email')} className="px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--accent)] outline-none transition-colors" required />
                <textarea placeholder={t('message')} className="px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--accent)] outline-none transition-colors" rows={5} required />
                <button type="submit" className="btn-primary w-full">{t('send_message')}</button>
              </form>
              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <LocationIcon />
                  <span className="text-[var(--text-secondary)]">123 Main St, New York, NY</span>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon />
                  <span className="text-[var(--text-secondary)]">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <EmailIcon />
                  <span className="text-[var(--text-secondary)]">info@avonova.com</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-[var(--text-primary)] mb-4">{t('follow_us')}</div>
                  <div className="flex gap-2">
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-100 text-blue-500 font-bold text-lg hover:bg-blue-200 transition-colors">T</a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-100 text-blue-500 font-bold text-lg hover:bg-blue-200 transition-colors">Li</a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-100 text-blue-500 font-bold text-lg hover:bg-blue-200 transition-colors">F</a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-100 text-blue-500 font-bold text-lg hover:bg-blue-200 transition-colors">I</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
