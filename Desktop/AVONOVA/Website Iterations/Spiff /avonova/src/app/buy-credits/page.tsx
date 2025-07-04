"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

// Utility for className merging
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BuyTokensPage() {
  const { t } = useTranslation();
  const [tokenAmount, setTokenAmount] = useState(10);
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  // Example price calculation: $0.02 per token
  const pricePerToken = 0.02;
  const minTokens = 10;
  const maxTokens = 15000;
  const step = 10;
  const price = (tokenAmount * pricePerToken).toFixed(2);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] px-4 py-8">
      {/* Header/Menu Bar */}
      <div className="w-full bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-8 py-4" style={{minHeight: 72}}>
        <div className="flex items-baseline gap-4">
          <Image src="/FullAnanovaSw.svg" alt="Avonova Logo" width={120} height={32} className="h-8 w-auto" priority />
          <span className="text-xl text-[var(--text-secondary)] mx-3">|</span>
          <span className="text-lg font-semibold text-[var(--text-primary)]">Buy Credits</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/pipeline-controller" className="px-3 py-1 rounded-md bg-[var(--surface)] text-[var(--text-primary)] font-semibold hover:bg-[var(--border)] transition-colors border border-[var(--border)] flex items-center gap-1 text-sm" title="Product Pipeline">
            <svg className="w-4 h-4 inline-block align-middle mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Product Pipeline
          </Link>
          <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100 text-sm">tokens: 1,200</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-[var(--accent)] text-white rounded-lg text-lg mr-3">
            💳
          </span>
          <div>
            <h1 className="text-2xl font-bold text-center">{t('buy_tokens')}</h1>
            <p className="text-sm text-[var(--text-secondary)] text-center">{t('purchase_tokens_desc')}</p>
          </div>
        </div>
        {/* Token Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { tokens: 625, price: 10, popular: true, bonus: 500 },
            { tokens: 1700, price: 25, bonus: 1000 },
            { tokens: 3750, price: 50, bonus: 2000 },
            { tokens: 8000, price: 100, bonus: 5000 },
          ].map((pkg) => (
            <div
              key={pkg.price}
              className={cn(
                "rounded-2xl shadow p-8 flex flex-col items-center border transition-all duration-150",
                pkg.popular ? "border-blue-500" : "border-[var(--border)]",
                "bg-[var(--surface)]"
              )}
            >
              <div className="text-2xl font-bold mb-2 text-[var(--text-primary)]">{pkg.price}</div>
              <div className="text-3xl font-extrabold mb-2 text-[var(--text-primary)]">{pkg.tokens.toLocaleString()}</div>
              <div className="text-[var(--text-secondary)] mb-4">tokens</div>
              <ul className="mb-6 space-y-1 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2"><span className="text-green-500">✔</span> <span>{t('products', { count: Math.floor(pkg.tokens / 5) })}</span></li>
                <li className="flex items-center gap-2"><span className="text-green-500">✔</span> <span>{t('per_product', { price: (pkg.price / (pkg.tokens / 5)).toFixed(3) })}</span></li>
                {pkg.bonus && <li className="flex items-center gap-2 text-green-600 font-semibold"><span>{t('bonus_tokens', { count: pkg.bonus })}</span></li>}
                <li className="flex items-center gap-2"><span className="text-green-500">✔</span> <span>{t('never_expires')}</span></li>
              </ul>
              <button
                disabled={pkg.popular}
                className={cn(
                  "w-full py-2 rounded-lg font-semibold border transition-all duration-150 cursor-not-allowed mt-auto",
                  pkg.popular ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow' : 'bg-[var(--surface)] text-[var(--accent)] border-[var(--accent)] hover:bg-blue-50'
                )}
              >
                {t('buy_now')}
              </button>
            </div>
          ))}
        </div>
        {/* Custom Token Purchase & Adaptive Payment Side by Side */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-10 max-w-5xl mx-auto">
          <div className="flex-1 min-w-[280px] max-w-xl bg-[var(--surface)] rounded-2xl shadow p-8 border border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2 text-center">{t('custom_token_purchase')}</h2>
            <p className="text-[var(--text-secondary)] text-center mb-6">{t('select_exact_tokens')}</p>
            <div className="flex flex-col items-center gap-6">
              <input
                type="range"
                min={minTokens}
                max={maxTokens}
                step={step}
                value={tokenAmount}
                onChange={e => setTokenAmount(Number(e.target.value))}
                className="w-full accent-blue-500 h-2 rounded-lg appearance-none cursor-pointer bg-blue-100"
                style={{ maxWidth: 500 }}
              />
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-blue-700">{t('tokens', { count: tokenAmount })}</span>
                <span className="text-[var(--text-secondary)]">|</span>
                <span className="text-lg font-bold text-green-600">${price}</span>
              </div>
              <div className="text-sm text-[var(--text-secondary)]">{t('cost_per_token')}: <span className="font-semibold text-blue-700">${pricePerToken.toFixed(2)}</span></div>
              <button className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold shadow hover:bg-[var(--accent-hover)] transition-colors text-base mt-2">{t('buy_now')}</button>
            </div>
          </div>
          <div className="flex-1 min-w-[280px] max-w-xl bg-[var(--surface)] rounded-2xl shadow p-8 border border-[var(--border)]">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 text-center">{t('adaptive_payment')}</h2>
            <div className="flex flex-col items-center gap-4">
              <label className="font-semibold text-[var(--text-primary)]">{t('select_payment_method')}</label>
              <select
                value={paymentMethod}
                onChange={e => setPaymentMethod(e.target.value)}
                className="border border-[var(--border)] rounded px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                style={{ maxWidth: 240 }}
              >
                <option>{t('credit_card')}</option>
                <option>{t('paypal')}</option>
                <option>{t('crypto')}</option>
              </select>
              <div className="w-full text-center text-[var(--text-secondary)] mt-4">
                {/* Placeholder for adaptive payment UI */}
                ({t('payment_ui_for')} <span className="font-semibold text-blue-700">{t(paymentMethod.toLowerCase().replace(' ', '_'))}</span> {t('coming_soon')})
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 