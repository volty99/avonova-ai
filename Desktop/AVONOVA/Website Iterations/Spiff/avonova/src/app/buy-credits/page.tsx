"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/navigation";

// Utility for className merging
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BuyTokensPage() {
  const { t } = useTranslation();
  const [tokenAmount, setTokenAmount] = useState(10);
  const [paymentMethod, setPaymentMethod] = useState("One-Time");
  // Example price calculation: $0.02 per token
  const pricePerToken = 0.02;
  const minTokens = 10;
  const maxTokens = 15000;
  const step = 10;
  const price = (tokenAmount * pricePerToken).toFixed(2);
  const router = useRouter();

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-30 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-6 py-2" style={{minHeight: 48}}>
        <div className="flex items-baseline gap-3">
          <Image src="/FullAnanovaSw.svg" alt="Avonova Logo" width={74} height={22} className="h-5 w-auto" priority />
          <span className="text-lg text-[var(--text-secondary)] mx-2">|</span>
          <span className="text-base font-semibold text-[var(--text-primary)]">Buy Credits</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/pipeline-controller" className="px-3 py-1 rounded-md bg-[var(--background)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors border border-[var(--primary)] flex items-center gap-1 text-sm" title="Product Pipeline">
            <svg className="w-4 h-4 inline-block align-middle mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Product Pipeline
          </Link>
          <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-100 text-sm">tokens: 1,200</span>
        </div>
      </div>
      <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] px-4 py-8 pt-16">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-[var(--primary)] text-white rounded-lg text-lg mr-3">
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
              <div className="text-2xl font-bold mb-2 text-[var(--text-primary)]">${pkg.price}</div>
              <div className="text-3xl font-extrabold mb-2 text-[var(--text-primary)]">{pkg.tokens.toLocaleString()}</div>
              <div className="text-[var(--text-secondary)] mb-4">{t('tokens')}</div>
              <ul className="mb-6 space-y-1 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2"><span className="text-green-500">✔</span> <span>{Math.floor(pkg.tokens / 5)} {t('products')}</span></li>
                <li className="flex items-center gap-2"><span className="text-green-500">✔</span> <span>${(pkg.price / (pkg.tokens / 5)).toFixed(3)} {t('per_product')}</span></li>
                {pkg.bonus && <li className="flex items-center gap-2 text-green-600 font-semibold"><span>+{pkg.bonus} {t('bonus_tokens')}</span></li>}
                <li className="flex items-center gap-2"><span className="text-green-500">✔</span> <span>{t('never_expires')}</span></li>
              </ul>
              <button
                className="w-full py-2 rounded-lg font-semibold border transition-all duration-150 mt-auto bg-[var(--primary)] text-white border-[var(--primary)] shadow hover:bg-[var(--primary-dark)] cursor-pointer"
              >
                {t('buy_now')}
              </button>
            </div>
          ))}
        </div>
        {/* Custom Token Purchase & Adaptive Payment Side by Side */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-10 max-w-5xl mx-auto">
          {/* Only show Token Refill card, styled to match other cards */}
          <div className="flex-1 min-w-[280px] max-w-xl bg-[var(--surface)] rounded-2xl shadow p-8 border border-[var(--border)]">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 text-center">{t('token_refill', 'Token Refill')}</h2>
            <div className="flex flex-col items-center gap-4">
              <label className="font-semibold text-[var(--text-primary)]">{t('select_refill_frequency', 'Select Refill Frequency')}</label>
              <select
                value={paymentMethod}
                onChange={e => setPaymentMethod(e.target.value)}
                className="border border-[var(--border)] rounded px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                style={{ maxWidth: 240 }}
              >
                <option>{t('one_time', 'One-Time')}</option>
                <option>{t('weekly', 'Weekly')}</option>
                <option>{t('monthly', 'Monthly')}</option>
                <option>{t('on_demand', 'On Demand')}</option>
              </select>
              {/* Token amount dial/slider */}
              <div className="w-full flex flex-col items-center gap-2 mt-4">
                <label className="text-sm font-semibold text-[var(--text-primary)] mb-1">{t('tokens_per_refill', 'Tokens per refill')}</label>
                <input
                  type="range"
                  min={minTokens}
                  max={maxTokens}
                  step={step}
                  value={tokenAmount}
                  onChange={e => setTokenAmount(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 rounded-lg appearance-none cursor-pointer bg-blue-100"
                  style={{ maxWidth: 400 }}
                />
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-blue-700">{tokenAmount} {t('tokens')}</span>
                  <span className="text-[var(--text-secondary)]">|</span>
                  <span className="text-lg font-bold text-green-600">${(tokenAmount * pricePerToken).toFixed(2)}</span>
                </div>
                <div className="text-sm text-[var(--text-secondary)]">{t('cost_per_token')}: <span className="font-semibold text-blue-700">${pricePerToken.toFixed(2)}</span></div>
              </div>
              {/* Buy Now button */}
              <button
                className="px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-semibold shadow hover:bg-[var(--primary-dark)] transition-colors text-base mt-2 w-full"
                onClick={() => router.push('/payment')}
              >
                {t('buy_now')}
              </button>
              {/* Placeholder for refill UI */}
              <div className="w-full text-center text-[var(--text-secondary)] mt-4">
                ({t('token_refill_ui', 'Token refill UI coming soon')})
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 