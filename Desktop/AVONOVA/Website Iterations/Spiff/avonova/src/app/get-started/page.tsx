"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useTranslation } from 'react-i18next';

const steps = [
  { id: 1, title: 'account_setup', subtitle: 'account_setup_sub' },
  { id: 2, title: 'store_integration', subtitle: 'store_integration_sub' },
  { id: 3, title: 'ai_configuration', subtitle: 'ai_configuration_sub' },
  { id: 4, title: 'dashboard', subtitle: 'dashboard_sub' },
];

const platforms = ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Square", "Other"];
const storeTypes = ["Fashion & Apparel", "Electronics", "Home & Garden", "Health & Beauty", "Sports & Outdoor", "Other"];

// SVG components for progress bar (same size)
function EmptyCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-8 h-8"><circle cx="12" cy="12" r="10" stroke="#d1d5db" strokeWidth={1.2} fill="none"/></svg>
  );
}

export default function GetStartedPage() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
    platform: "",
    storeType: "",
    monthlyRevenue: "",
    features: {
      inventory: false,
      analytics: false,
      customerService: false,
      marketing: false,
    },
  });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };
  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: { ...prev.features, [feature]: checked },
    }));
  };
  const validateCurrentStep = () => {
    const errors: string[] = [];
    
    switch (currentStep) {
      case 1:
        if (!formData.firstName) errors.push(t('first_name_required'));
        if (!formData.lastName) errors.push(t('last_name_required'));
        if (!formData.email) errors.push(t('email_required'));
        if (!formData.password) errors.push(t('password_required'));
        if (!formData.company) errors.push(t('company_required'));
        break;
      case 2:
        if (!formData.platform) errors.push(t('select_platform'));
        if (!formData.storeType) errors.push(t('select_store_type'));
        if (!formData.monthlyRevenue) errors.push(t('monthly_revenue_required'));
        break;
      default:
        break;
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };
  
  const nextStep = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      setCurrentStep((s) => Math.min(s + 1, 4));
    }
  };
  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep((s) => Math.max(s - 1, 1));
    setValidationErrors([]); // Clear errors when going back
  };

  useEffect(() => {
    if (currentStep === 4) {
      const timeout = setTimeout(() => {
        router.push("/pipeline-controller");
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, router]);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center">
      {/* Back to Home button at the top left */}
      <div className="w-full flex items-center justify-start px-8 pt-8 pb-2 absolute top-0 left-0">
        <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--primary)] flex items-center gap-1 text-sm font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          {t('back_to_home')}
        </Link>
      </div>
      <div className="w-full max-w-md relative">
        {/* More space above progress bar */}
        <div className="h-10" />
        {/* Progress bar and steps */}
        <div className="flex items-center justify-center mb-8 mt-2">
          <div className="flex items-center justify-center mx-auto" style={{width: 'fit-content'}}>
            {steps.map((step, idx) => {
              const isCompleted = currentStep > idx + 1;
              const isCurrent = currentStep === idx + 1;
              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center min-w-[160px]">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center mb-2 relative">
                      {isCompleted ? (
                        <span className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10.5L9 14.5L15 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                      ) : isCurrent ? (
                        <span className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center font-bold text-white text-base">{idx + 1}</span>
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center bg-[var(--border)] rounded-full">
                          <EmptyCircleIcon />
                          <span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 font-bold text-base text-[var(--text-secondary)]">{idx + 1}</span>
                        </span>
                      )}
                    </span>
                    <span className={`font-semibold text-base ${isCurrent ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)]'}`}>{t(step.title)}</span>
                    <span className="text-xs text-[var(--text-secondary)] mt-1 whitespace-normal max-w-[160px] text-center">{t(step.subtitle)}</span>
                  </div>
                  {idx !== steps.length - 1 && (
                    <span key={`line-${idx}`} className="flex-shrink-0 px-6 flex items-center justify-center">
                      <svg width="60" height="4" viewBox="0 0 60 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="1" width="60" height="2" rx="1" fill={currentStep > idx + 1 ? 'var(--primary)' : 'var(--border)'} />
                      </svg>
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        {/* Signup panel styled like login */}
        <div className="bg-white rounded shadow p-8 border border-[var(--border)] relative">
          <h1 className="text-2xl font-bold mb-2 text-center text-[var(--text-primary)]">{currentStep === 1 ? t('create_your_account') : t(steps[currentStep - 1].title)}</h1>
          <p className="text-[var(--text-secondary)] text-center mb-6 text-base">{currentStep === 1 ? t('get_started_subtitle') : t(steps[currentStep - 1].subtitle)}</p>
          <form onSubmit={nextStep} className="flex flex-col gap-4">
            {currentStep === 1 && (
              <>
                <div className="flex gap-2">
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--primary)] outline-none transition-colors mb-4" placeholder={t('first_name')} value={formData.firstName} onChange={e => handleInputChange("firstName", e.target.value)} />
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--primary)] outline-none transition-colors mb-4" placeholder={t('last_name')} value={formData.lastName} onChange={e => handleInputChange("lastName", e.target.value)} />
                </div>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--primary)] outline-none transition-colors mb-4" placeholder={t('email')} value={formData.email} onChange={e => handleInputChange("email", e.target.value)} />
                <input type="password" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--primary)] outline-none transition-colors mb-4" placeholder={t('password')} value={formData.password} onChange={e => handleInputChange("password", e.target.value)} />
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--primary)] outline-none transition-colors mb-4" placeholder={t('company')} value={formData.company} onChange={e => handleInputChange("company", e.target.value)} />
              </>
            )}
            {currentStep === 2 && (
              <>
                <select className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--primary)] outline-none transition-colors mb-4" value={formData.platform} onChange={e => handleInputChange("platform", e.target.value)}>
                  <option value="">Select Platform</option>
                  {platforms.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <select className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--primary)] outline-none transition-colors mb-4" value={formData.storeType} onChange={e => handleInputChange("storeType", e.target.value)}>
                  <option value="">Select Store Type</option>
                  {storeTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] focus:border-[var(--primary)] outline-none transition-colors mb-4" placeholder="Monthly Revenue" value={formData.monthlyRevenue} onChange={e => handleInputChange("monthlyRevenue", e.target.value)} />
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="font-semibold mb-2 text-[var(--text-primary)]">Select Features to Enable:</div>
                <label className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <input type="checkbox" checked={formData.features.inventory} onChange={e => handleFeatureChange("inventory", e.target.checked)} /> Inventory Management
                </label>
                <label className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <input type="checkbox" checked={formData.features.analytics} onChange={e => handleFeatureChange("analytics", e.target.checked)} /> Analytics & Reporting
                </label>
                <label className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <input type="checkbox" checked={formData.features.customerService} onChange={e => handleFeatureChange("customerService", e.target.checked)} /> Customer Service Automation
                </label>
                <label className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <input type="checkbox" checked={formData.features.marketing} onChange={e => handleFeatureChange("marketing", e.target.checked)} /> Email Marketing
                </label>
              </>
            )}
            {/* Restore Back/Next and login link except on final step */}
            {currentStep < 4 && (
              <>
                <div className="flex justify-between mt-4">
                  <button 
                    type="button" 
                    onClick={prevStep} 
                    disabled={currentStep === 1} 
                    className="btn-secondary rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t('back')}
                  </button>
                  <button 
                    type="submit" 
                    className="btn-primary rounded-full font-semibold"
                    disabled={loading}
                  >
                    {loading ? 'Signing up...' : t('next')}
                  </button>
                </div>
                <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
                  {t('already_have_account')} <a href="/login" className="text-[var(--primary)] font-medium hover:underline dark:text-[var(--primary)]">{t('login')}</a>
                </div>
              </>
            )}
            {/* On final step, show only pipeline controller link */}
            {currentStep === 4 && (
              <div className="flex flex-col items-center justify-center min-h-[180px]">
                <Link href="/pipeline-controller" className="bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors text-lg block">{t('go_to_dashboard')}</Link>
              </div>
            )}
            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
          </form>
        </div>
        {/* Error box absolutely positioned to the right of the panel */}
        {validationErrors.length > 0 && (
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 z-50">
            <div className="bg-blue-50 border border-[var(--primary)] rounded-lg p-4 min-w-[260px] max-w-xs shadow-lg">
              <div className="text-[var(--primary)] font-medium mb-1">{t('please_fix_errors')}</div>
              <ul className="text-[var(--primary)] text-sm space-y-1">
                {validationErrors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}