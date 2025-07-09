"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";
import { useTranslation } from 'react-i18next';
import { LanguageContext, ThemeContext } from "../layout";

const TABS = [
  { key: "profile", label: "Profile", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047a9.005 9.005 0 0 1 5.9 8.181a.75.75 0 1 1-1.499.044a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.5-.045a9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0Z"/></svg>
  ) },
  { key: "notifications", label: "Notifications", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20.53 16.25c-.09 0-2.11-.36-2.11-6.25c0-4.16-2.42-6.75-6.42-6.75S5.58 5.84 5.58 10c0 6-2.09 6.25-2.08 6.25a.75.75 0 0 0 0 1.5h4.83a3.74 3.74 0 0 0 7.34 0h4.84a.75.75 0 0 0 0-1.5Zm-8.53 3a2.24 2.24 0 0 1-2.11-1.5h4.22a2.24 2.24 0 0 1-2.11 1.5Zm-6.24-3c.72-1.09 1.32-3 1.32-6.25S8.88 4.75 12 4.75s4.92 1.91 4.92 5.25s.6 5.16 1.32 6.25Z"/></svg>
  ) },
  { key: "security", label: "Security", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19.99 3.753a.5.5 0 0 0-.593-.387a9.106 9.106 0 0 1-7.11-1.454a.5.5 0 0 0-.574 0a9.107 9.107 0 0 1-7.11 1.454a.498.498 0 0 0-.603.49v8.018a9.131 9.131 0 0 0 3.799 7.407l3.91 2.804a.497.497 0 0 0 .582 0l3.91-2.804A9.131 9.131 0 0 0 20 11.874V3.855a.498.498 0 0 0-.01-.102zM19 11.874a8.129 8.129 0 0 1-3.38 6.595L12 21.063L8.38 18.47A8.13 8.13 0 0 1 5 11.874v-7.42a10.082 10.082 0 0 0 7-1.53a10.085 10.085 0 0 0 7 1.53v7.42z"/></svg>
  ) },
  { key: "api", label: "API & Webhook", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047a9.005 9.005 0 0 1 5.9 8.181a.75.75 0 1 1-1.499.044a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.5-.045a9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0Z"/></svg>
  ) },
];

export default function SettingsPage() {
  const { t } = useTranslation();
  const { lang, setLang } = useContext(LanguageContext);
  const { dark, setDark } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("profile");
  // Placeholder state for UI controls
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");

  // Language mapping for display
  const languageMap: Record<"en"|"es"|"fr"|"de"|"pt"|"hi"|"ar"|"zh", string> = {
    en: "English",
    es: "Spanish", 
    fr: "French",
    de: "German",
    pt: "Portuguese",
    hi: "Hindi",
    ar: "Arabic",
    zh: "Chinese"
  };

  // Theme mapping for display
  const themeMap = {
    false: "Light",
    true: "Dark"
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] px-0">
      {/* Header/Nav Bar */}
      <div className="w-full bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-8 py-4" style={{minHeight: 72}}>
        <div className="flex items-baseline gap-4">
          <Image src="/FullAnanovaSw.svg" alt="Avonova Logo" width={74} height={22} className="h-5 w-auto" priority />
          <span className="text-xl text-[var(--text-secondary)] mx-3">|</span>
          <span className="text-lg font-semibold text-[var(--text-primary)]">{t('settings')}</span>
        </div>
        <div className="flex items-center gap-2">
                      <Link href="/pipeline-controller" className="px-3 py-1 rounded-md bg-[var(--surface)] text-[var(--text-primary)] font-semibold hover:bg-[var(--border)] transition-colors border border-[var(--border)] flex items-center gap-1 text-sm" title="Product Pipeline">
              <svg className="w-4 h-4 inline-block align-middle mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              {t('pipeline')}
            </Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-1">{t('settings')}</h1>
        <p className="text-[var(--text-secondary)] mb-8">{t('settings_desc')}</p>
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[var(--border)]">
          {TABS.map(tab => (
                          <button
                key={tab.key}
                className={`px-5 py-2 rounded-t-lg font-medium flex items-center gap-2 focus:outline-none transition-colors ${activeTab === tab.key ? 'bg-[var(--surface)] border-x border-t border-[var(--border)] border-b-0 text-[var(--text-primary)]' : 'bg-[var(--background)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                style={{ marginBottom: activeTab === tab.key ? '-1px' : 0 }}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.icon}
                {tab.label}
              </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="bg-[var(--surface)] dark:bg-[var(--surface-dark)] rounded-xl shadow p-8 border border-[var(--border)] relative">
          {activeTab === "profile" && (
            <>
              <h2 className="text-xl font-bold mb-1">{t('profile_appearance')}</h2>
              <p className="text-[var(--text-secondary)] mb-6">{t('update_personal_info_dashboard')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-1">{t('first_name')}</label>
                  <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('first_name_placeholder')} value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('last_name')}</label>
                  <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('last_name_placeholder')} value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('email_address')}</label>
                  <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('email_placeholder')} value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('company')}</label>
                  <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('company_placeholder')} value={company} onChange={e => setCompany(e.target.value)} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('theme_display')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">{t('theme_preference')}</label>
                  <select 
                    className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" 
                    value={dark ? "Dark" : "Light"} 
                    onChange={e => setDark(e.target.value === "Dark")}
                  >
                    <option value="Light">{t('light')}</option>
                    <option value="Dark">{t('dark')}</option>
                  </select>
                </div>
                {/* Dark Mode Override removed */}
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium mb-1">{t('language')}</label>
                <select 
                  className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" 
                  value={languageMap[lang] || "English"} 
                  onChange={e => {
                    const languageCode = Object.keys(languageMap).find(key => languageMap[key as keyof typeof languageMap] === e.target.value);
                    if (languageCode) {
                      setLang(languageCode as "en"|"es"|"fr"|"de"|"pt"|"hi"|"ar"|"zh");
                    }
                  }}
                >
                  <option value="English">{t('english')}</option>
                  <option value="Spanish">{t('spanish')}</option>
                  <option value="French">{t('french')}</option>
                  <option value="German">{t('german')}</option>
                  <option value="Portuguese">{t('portuguese')}</option>
                  <option value="Hindi">{t('hindi')}</option>
                  <option value="Arabic">{t('arabic')}</option>
                  <option value="Chinese">{t('chinese')}</option>
                </select>
              </div>
            </>
          )}
          {activeTab === "notifications" && (
            <>
              <h2 className="text-xl font-bold mb-1">{t('notification_preferences')}</h2>
              <p className="text-[var(--text-secondary)] mb-6">{t('choose_notifications')}</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                  <div>
                    <div className="font-medium">{t('email_notifications')}</div>
                    <div className="text-[var(--text-secondary)] text-sm">{t('receive_important_updates')}</div>
                  </div>
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[var(--primary)] dark:bg-[var(--surface-dark)] dark:border-[var(--border-dark)] dark:checked:bg-[var(--primary)]" checked={emailNotifications} onChange={e => setEmailNotifications(e.target.checked)} />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                  <div>
                    <div className="font-medium">{t('push_notifications')}</div>
                    <div className="text-[var(--text-secondary)] text-sm">{t('get_real_time_alerts')}</div>
                  </div>
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[var(--primary)] dark:bg-[var(--surface-dark)] dark:border-[var(--border-dark)] dark:checked:bg-[var(--primary)]" checked={pushNotifications} onChange={e => setPushNotifications(e.target.checked)} />
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-light)]">
                  <div>
                    <div className="font-medium">{t('marketing_emails')}</div>
                    <div className="text-[var(--text-secondary)] text-sm">{t('receive_product_updates_tips')}</div>
                  </div>
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[var(--primary)] dark:bg-[var(--surface-dark)] dark:border-[var(--border-dark)] dark:checked:bg-[var(--primary)]" checked={marketingEmails} onChange={e => setMarketingEmails(e.target.checked)} />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <div className="font-medium">{t('security_alerts')}</div>
                    <div className="text-[var(--text-secondary)] text-sm">{t('important_security_account_notifications')}</div>
                  </div>
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-[var(--primary)] dark:bg-[var(--surface-dark)] dark:border-[var(--border-dark)] dark:checked:bg-[var(--primary)]" checked={securityAlerts} onChange={e => setSecurityAlerts(e.target.checked)} />
                </div>
              </div>
            </>
          )}
          {activeTab === "security" && (
            <>
              <h2 className="text-xl font-bold mb-1">{t('security_privacy')}</h2>
              <p className="text-[var(--text-secondary)] mb-6">{t('manage_account_security_data_privacy')}</p>
              <div className="space-y-4">
                <button className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] text-left font-medium bg-[var(--surface)] hover:bg-[var(--border)] transition">{t('change_password')}</button>
                <button className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] text-left font-medium bg-[var(--surface)] hover:bg-[var(--border)] transition">{t('enable_two_factor_authentication')}</button>
                <button className="w-full px-4 py-3 rounded-lg border border-[var(--border-light)] text-left font-medium bg-[var(--surface)] hover:bg-[var(--border)] transition">{t('download_my_data')}</button>
                <button className="w-full px-4 py-3 rounded-lg bg-[var(--red-500)] text-[var(--white)] font-semibold hover:bg-[var(--red-600)] transition">{t('reset_all_settings')}</button>
                <div className="text-center text-[var(--text-secondary)] text-sm">{t('reset_all_settings_desc')}</div>
              </div>
            </>
          )}
          {activeTab === "api" && (
            <>
              <h2 className="text-xl font-bold mb-1">{t('api_webhook_config')}</h2>
              <p className="text-[var(--text-secondary)] mb-6">{t('configure_webhook_api_integrations')}</p>
              {/* Webhook Section */}
              <div className="mb-8 border rounded-xl p-6 bg-[var(--purple-50)] border-[var(--purple-100)] dark:bg-[var(--surface-dark)] dark:border-[var(--border-dark)]">
                <div className="flex items-center gap-2 mb-4">
                  {/* Webhook SVG */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#a259f7" d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047a9.005 9.005 0 0 1 5.9 8.181a.75.75 0 1 1-1.499.044a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.5-.045a9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0Z"/></svg>
                  <span className="font-semibold text-lg">{t('webhook_config')}</span>
                </div>
                <label className="block text-sm font-medium mb-1">{t('webhook_api_url')} <span className="text-[var(--red-500)]">*</span></label>
                <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('webhook_url_placeholder')} value={webhookUrl} onChange={e => setWebhookUrl(e.target.value)} />
                <div className="text-xs text-[var(--text-secondary)] mb-4">{t('webhook_url_desc')}</div>
                <button className="w-full py-3 rounded-lg font-semibold text-[var(--white)] bg-[var(--purple-600)] hover:bg-[var(--purple-700)] transition mb-2">{t('save_webhook_url')}</button>
              </div>
              {/* API Categories Accordion */}
              <Accordion type="multiple" className="border rounded-xl bg-[var(--blue-50)] border-[var(--blue-100)] divide-y divide-[var(--blue-50)] dark:bg-[var(--surface-dark)] dark:border-[var(--border-dark)] dark:divide-[var(--gray-700)]">
                {/* 🛒 E-commerce Store APIs */}
                <AccordionItem value="ecommerce">
                  <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 dark:text-[var(--text-primary-dark)]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M7 18a2 2 0 1 0 4 0h2a2 2 0 1 0 4 0h1a1 1 0 0 0 0-2h-1.1l-1.34-6.68A2 2 0 0 0 13.6 8H6.21l-.94-4H2v2h2l3.6 7.59l-1.35 2.44A2 2 0 0 0 6 18h1Zm2.16-2l.84-1.5h5.24l1.1 5H7.42l1.74-3.5ZM6.16 4l.94 4h6.49a1 1 0 0 1 .98.8l1.34 6.68H8.53l-2.37-4.21L6.16 4Z"/></svg>
                    🛒 E-commerce Store APIs
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('shopify_admin_api')} <span className="text-[var(--green-500)]">({t('priority_1')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('shopify_admin_api_key_placeholder')} />
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('shopify_admin_api_secret_placeholder')} />
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('shopify_store_url_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('woocommerce_rest_api')} <span className="text-[var(--gray-400)]">({t('optional')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('woocommerce_consumer_key_placeholder')} />
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('woocommerce_consumer_secret_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('etsy_api')} <span className="text-[var(--gray-400)]">({t('handmade_small_brands')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('etsy_api_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('bigcommerce_api')} <span className="text-[var(--gray-400)]">({t('optional')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('bigcommerce_client_id_placeholder')} />
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('bigcommerce_access_token_placeholder')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('amazon_seller_api')} <span className="text-[var(--orange-500)]">({t('advanced')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('amazon_seller_api_key_placeholder')} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* 🧠 AI & Automation APIs */}
                <AccordionItem value="ai">
                  <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 dark:text-[var(--text-primary-dark)]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a259f7"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">AI</text></svg>
                    🧠 AI & Automation APIs
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('openai_api')} <span className="text-[var(--green-500)]">({t('gpt_4o_gpt_4_turbo')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('openai_api_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('octoparse_api')}</label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('octoparse_api_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('cloudinary_api_imgix')}</label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('cloudinary_imgix_api_key_placeholder')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('replicate_api')} <span className="text-[var(--gray-400)]">({t('optional')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('replicate_api_key_placeholder')} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* 📧 Email & Notification APIs */}
                <AccordionItem value="email">
                  <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 dark:text-[var(--text-primary-dark)]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" fill="#2563eb"/><path d="M4 7l8 6l8-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    📧 Email & Notification APIs
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('resend_api')} <span className="text-[var(--green-500)]">({t('recommended')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('resend_api_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('sendgrid_mailgun')} <span className="text-[var(--gray-400)]">({t('optional')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('sendgrid_mailgun_api_key_placeholder')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('twilio_api')} <span className="text-[var(--gray-400)]">({t('optional')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('twilio_api_key_placeholder')} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* 📊 User & Workspace Management APIs */}
                <AccordionItem value="user">
                  <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 dark:text-[var(--text-primary-dark)]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#a259f7"/><rect x="4" y="14" width="16" height="6" rx="3" fill="#2563eb"/></svg>
                    📊 User & Workspace Management APIs
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('supabase_auth_api')} <span className="text-[var(--green-500)]">({t('recommended')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('supabase_auth_api_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('supabase_database_api')}</label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('supabase_database_api_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('stripe_api')} <span className="text-[var(--green-500)]">({t('recommended')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('stripe_api_key_placeholder')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('clerk_auth0')} <span className="text-[var(--gray-400)]">({t('optional')})</span></label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('clerk_auth0_api_key_placeholder')} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* 📈 Optional Add-Ons */}
                <AccordionItem value="addons">
                  <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 dark:text-[var(--text-primary-dark)]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">+</text></svg>
                    📈 Optional Add-Ons
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('google_trends_api')}</label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('google_trends_api_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('serpapi')}</label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('serpapi_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('ipstack_geoip_api')}</label>
                      <input className="w-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] rounded px-3 py-2" placeholder={t('ipstack_geoip_api_key_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('deepl_google_translate_api')}</label>
                      <input className="w-full border border-[var(--border-light)] bg-[var(--surface-light)] text-[var(--text-secondary)] dark:bg-[var(--surface)] dark:border-[var(--border-dark)] dark:text-[var(--text-primary-dark)] rounded px-3 py-2" placeholder={t('deepl_google_translate_api_key_placeholder')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('zapier_make_com_api')}</label>
                      <input className="w-full border border-[var(--border-light)] bg-[var(--surface-light)] text-[var(--text-secondary)] dark:bg-[var(--surface)] dark:border-[var(--border-dark)] dark:text-[var(--text-primary-dark)] rounded px-3 py-2" placeholder={t('zapier_make_com_api_key_placeholder')} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* 🔐 Security, Rate-Limit & Webhooks */}
                <AccordionItem value="security">
                  <AccordionTrigger className="text-lg font-semibold flex items-center gap-2 dark:text-[var(--text-primary-dark)]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#a259f7"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                    🔐 Security, Rate-Limit & Webhooks
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('jwt_auth_middleware')}</label>
                      <input className="w-full border border-[var(--border-light)] bg-[var(--surface-light)] text-[var(--text-secondary)] dark:bg-[var(--surface)] dark:border-[var(--border-dark)] dark:text-[var(--text-primary-dark)] rounded px-3 py-2" placeholder={t('jwt_secret_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('vercel_edge_middleware_cloudflare_rules')}</label>
                      <input className="w-full border border-[var(--border-light)] bg-[var(--surface-light)] text-[var(--text-secondary)] dark:bg-[var(--surface)] dark:border-[var(--border-dark)] dark:text-[var(--text-primary-dark)] rounded px-3 py-2" placeholder={t('vercel_cloudflare_config_placeholder')} />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">{t('stripe_webhooks')} <span className="text-[var(--green-500)]">({t('recommended')})</span></label>
                      <input className="w-full border border-[var(--border-light)] bg-[var(--surface-light)] text-[var(--text-secondary)] dark:bg-[var(--surface)] dark:border-[var(--border-dark)] dark:text-[var(--text-primary-dark)] rounded px-3 py-2" placeholder={t('stripe_webhook_secret_placeholder')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t('retry_logic_webhook_queue')} <span className="text-[var(--gray-400)]">({t('optional')})</span></label>
                      <input className="w-full border border-[var(--border-light)] bg-[var(--surface-light)] text-[var(--text-secondary)] dark:bg-[var(--surface)] dark:border-[var(--border-dark)] dark:text-[var(--text-primary-dark)] rounded px-3 py-2" placeholder={t('retry_queue_config_placeholder')} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="pt-6">
                <button className="w-full py-3 rounded-lg font-semibold text-[var(--white)] bg-[var(--blue-600)] hover:bg-[var(--blue-700)] transition">{t('save_api_keys')}</button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
} 