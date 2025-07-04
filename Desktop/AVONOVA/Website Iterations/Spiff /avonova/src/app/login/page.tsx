"use client";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      router.push('/pipeline-controller');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="w-full flex items-center justify-start px-8 pt-8 pb-2">
        <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--accent)] flex items-center gap-1 text-sm font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          {t('back_to_home')}
        </Link>
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
        <div className="w-full max-w-md bg-[var(--surface)] rounded shadow p-8 border border-[var(--border)]">
          <h1 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">{t('welcome_back')}</h1>
          <p className="text-[var(--text-secondary)] mb-6">{t('login_subtitle')}</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="font-semibold text-[var(--text-primary)]">{t('email')}</span>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t('email_placeholder')} required className="border rounded px-3 py-2 border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-semibold text-[var(--text-primary)]">{t('password')}</span>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={t('password')} required className="border rounded px-3 py-2 border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]" />
            </label>
            <button type="submit" className="w-full bg-[var(--accent)] text-white px-4 py-2 rounded-full font-semibold hover:bg-[var(--accent-hover)] transition-colors text-center" disabled={loading}>{loading ? 'Logging in...' : t('login_button')}</button>
            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
          </form>
          {/* Social login placeholder */}
          <div className="mt-6 flex flex-col gap-2">
            <button disabled className="w-full border border-[var(--border)] text-[var(--text-secondary)] px-4 py-2 rounded font-semibold flex items-center justify-center gap-2 cursor-not-allowed">
              <span role="img" aria-label="Google">🔒</span> {t('sign_in_with_google')}
            </button>
            <button disabled className="w-full border border-[var(--border)] text-[var(--text-secondary)] px-4 py-2 rounded font-semibold flex items-center justify-center gap-2 cursor-not-allowed">
              <span role="img" aria-label="Apple">🍏</span> {t('sign_in_with_apple')}
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--text-secondary)]">
              {t('new_to_avonova')} 
              <Link href="/get-started" className="font-medium text-[var(--text-primary)] hover:underline">{t('create_account')}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 