"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();
  // Placeholder values; in a real app, these would come from state or query params
  const tokenAmount = 100;
  const pricePerToken = 0.02;
  const price = (tokenAmount * pricePerToken).toFixed(2);
  const refillFrequency = "One-Time";

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-[var(--surface)] rounded-2xl shadow p-8 border border-[var(--border)]">
        <h1 className="text-2xl font-bold mb-4 text-center">Payment</h1>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[var(--text-secondary)]">Tokens</span>
            <span className="font-semibold text-[var(--primary)]">{tokenAmount}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[var(--text-secondary)]">Price</span>
            <span className="font-semibold text-green-600">${price}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[var(--text-secondary)]">Refill</span>
            <span className="font-semibold text-[var(--primary)]">{refillFrequency}</span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Payment Details</label>
          <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-4 text-center text-[var(--text-secondary)]">
            {/* Replace with real payment form */}
            Payment form coming soon
          </div>
        </div>
        <button className="w-full px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-semibold shadow hover:bg-[var(--primary-dark)] transition-colors text-base mb-3">Complete Purchase</button>
        <button
          className="w-full px-6 py-2 rounded-lg bg-[var(--background)] text-[var(--primary)] border border-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors text-base"
          onClick={() => router.push('/buy-credits')}
        >
          Back to Buy Credits
        </button>
      </div>
    </main>
  );
} 