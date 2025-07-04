"use client";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import Image from "next/image";

// Add SVG icon components for each tab
const GeneralIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M18 4a1 1 0 1 0-2 0v1H4a1 1 0 0 0 0 2h12v1a1 1 0 1 0 2 0V7h2a1 1 0 1 0 0-2h-2V4ZM4 11a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h12a1 1 0 1 0 0-2H8v-1a1 1 0 0 0-2 0v1H4Zm-1 7a1 1 0 0 1 1-1h12v-1a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1-1-1Z"/></g></svg>
);
const ProductContentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048" className="mr-2"><path fill="currentColor" d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"/></svg>
);
const CXAutomationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2"><path fill="currentColor" d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047a9.005 9.005 0 0 1 5.9 8.181a.75.75 0 1 1-1.499.044a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.5-.045a9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0Z"/></svg>
);
const ProductForecastingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" className="mr-2"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 5.5a5 5 0 0 1 4.802 6.399A2 2 0 1 1 16.5 15.5h-11a3 3 0 1 1 .1-5.998A5.002 5.002 0 0 1 10.5 5.5z"/></svg>
);
const AnalyticsOverviewIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2"><path fill="none" stroke="currentColor" strokeWidth="2" d="M20 7c1.25 1.67 2 3.75 2 6c0 5.52-4.48 10-10 10S2 18.52 2 13S6.48 3 12 3m0-2v12l9.6-7.2C19.41 2.89 15.92 1 12 1Z"/></svg>
);

const moduleTabs = [
  { key: "general", labelKey: "general_settings", icon: <GeneralIcon /> },
  { key: "product-content", labelKey: "product_content_creator", icon: <ProductContentIcon /> },
  { key: "cx-automation", labelKey: "cx_automation_engine", icon: <CXAutomationIcon /> },
  { key: "product-forecasting", labelKey: "product_forecasting", icon: <ProductForecastingIcon /> },
  { key: "analytics-overview", labelKey: "analytics_overview", icon: <AnalyticsOverviewIcon /> },
];



export default function PipelineControllerPage() {
  const { t } = useTranslation();
  const [activeModule, setActiveModule] = useState(moduleTabs[0].key);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] px-0">
      {/* Header */}
      <div className="w-full bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-8 py-4" style={{minHeight: 72}}>
        <div className="flex items-baseline gap-4">
          <Link href="/">
            <Image src="/FullAnanovaSw.svg" alt="Avonova Logo" width={74} height={22} className="h-5 w-auto" priority />
          </Link>
          <span className="text-xl text-[var(--text-secondary)] mx-3">|</span>
          <span className="text-lg font-semibold text-[var(--text-primary)]">{t('pipeline_controller_title')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/buy-credits" className="px-3 py-1 rounded-md bg-[var(--surface)] text-[var(--text-primary)] font-semibold hover:bg-[var(--border)] transition-colors border border-[var(--border)] flex items-center gap-1 text-sm" title={t('buy_credits')}>
            <span className="w-4 h-4 inline-block align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-4 h-4"><g><path d="M37.972 27.975A12.931 12.931 0 0 0 40 21c0-7.18-5.82-13-13-13c-2.567 0-4.96.744-6.975 2.027a16.953 16.953 0 0 0-3.954.698a15.069 15.069 0 0 1 3.326-2.658A14.93 14.93 0 0 1 26.95 6H27c8.284 0 15 6.716 15 15c0 .135-.002.269-.005.403l-.002.048a14.921 14.921 0 0 1-2.06 7.152a15.065 15.065 0 0 1-2.658 3.326c.381-1.263.62-2.587.697-3.954Z"/><path fillRule="evenodd" d="M25.772 22.667A4.001 4.001 0 0 0 22 20v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 20 34v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666ZM20 22a2 2 0 1 0 0 4v-4Zm2 10a2 2 0 1 0 0-4v4Z" clipRule="evenodd"/><path fillRule="evenodd" d="M36 27c0 8.284-6.716 15-15 15c-8.284 0-15-6.716-15-15c0-8.284 6.716-15 15-15c8.284 0 15 6.716 15 15Zm-2 0c0 7.18-5.82 13-13 13S8 34.18 8 27s5.82-13 13-13s13 5.82 13 15Z" clipRule="evenodd"/></g></svg>
            </span>
            {t('buy_credits')}
          </Link>
          <Link href="/settings" className="px-3 py-1 rounded-md bg-[var(--surface)] text-[var(--text-primary)] font-semibold hover:bg-[var(--border)] transition-colors border border-[var(--border)] flex items-center gap-1 text-sm" title={t('settings')}>
            <span className="w-4 h-4 inline-block align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none" className="w-4 h-4"><g stroke="currentColor" strokeWidth=".933" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"><path d="M7.5.5c.351 0 .697.026 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447c.221.396.395.822.514 1.27l1.53.533a7.066 7.066 0 0 1-.017 1.948l-1.539.508a5.567 5.567 0 0 1-.536 1.26l.704 1.46a7.041 7.041 0 0 1-1.389 1.365l-1.447-.73a5.507 5.507 0 0 1-1.27.514l-.533 1.53a7.066 7.066 0 0 1-1.948-.017l-.508-1.539a5.567 5.567 0 0 1-1.26-.536l-1.46.704a7.041 7.041 0 0 1-1.365-1.389l.73-1.447a5.565 5.565 0 0 1-.514-1.27l-1.53-.534a7.066 7.066 0 0 1 .017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7.041 7.041 0 0 1 1.389-1.365l1.447.73a5.507 5.507 0 0 1 1.27-.514l.534-1.53A7.06 7.06 0 0 1 7.5.5z"/><circle cx="7.5" cy="7.5" r="3"/></g></svg>
            </span>
            {t('settings')}
          </Link>
          <button className="px-3 py-1 rounded-md bg-[var(--surface)] text-[var(--text-primary)] font-semibold hover:bg-[var(--border)] transition-colors border border-[var(--border)] flex items-center gap-1 text-sm" title={t('refresh')}>
            <span className="w-4 h-4 inline-block align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M511.28 0C255.472 0 47.36 208.126 47.36 463.934c0 240.448 185.296 441.536 423.568 462.096l-91.856 46.56c-11.344 6.223-18.096 20.223-11.376 31.279l3.248 8.4c6.752 11.056 21.376 14.976 32.687 8.783l153.312-78.496c.193-.128.4-.095.593-.223l10.288-5.632c5.68-3.12 9.44-8.224 10.943-13.903c1.569-5.68.85-12-2.527-17.504l-6.096-10c-.095-.193-.288-.32-.4-.496L475.055 746.83c-6.72-11.056-21.311-14.976-32.687-8.784l-7.44 5.184c-11.344 6.192-12.096 22.192-5.376 33.217l55.872 86.672c-.304-.016-.576-.128-.865-.144c-209.28-13.727-373.2-189.039-373.2-399.039C111.36 243.408 290.767 64 511.28 64c220.544 0 400.96 179.408 400.96 399.937c0 126.976-58.32 243.6-160 319.968c-14.127 10.624-16.975 30.689-6.367 44.817c10.624 14.16 30.689 16.976 44.817 6.368c117.936-88.592 185.567-223.872 185.567-371.152C976.24 208.129 767.105 0 511.28 0z"/></svg>
            </span>
            {t('refresh')}
          </button>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-2">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-1">{t('pipeline_controller_subtitle')}</h1>
        <p className="text-[var(--text-secondary)] text-lg mb-6">{t('pipeline_controller_desc')}</p>
      </div>



      {/* Secondary Module Tab Bar */}
      <div className="w-full flex justify-center bg-transparent border-b border-[var(--border)]">
        <div className="flex gap-2 w-full max-w-5xl px-2 py-2">
          {moduleTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveModule(tab.key)}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm flex items-center
                ${activeModule === tab.key ? "bg-[var(--accent-light)] text-[var(--accent)] border-b-2 border-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--surface)]"}`}
              style={{ minWidth: 0 }}
            >
              {tab.icon}
              {t(tab.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Content below the tab bars */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {activeModule === "general" && (
          <GeneralSettingsForm />
        )}
        {activeModule === "product-content" && (
          <ProductContentCreatorPage />
        )}
        {activeModule === "cx-automation" && (
          <CustomerAutomationPage />
        )}
        {activeModule === "product-forecasting" && (
          <ProductForecasting />
        )}
        {activeModule === "analytics-overview" && (
          <AnalyticsOverview />
        )}
      </div>
    </main>
  );
}

function GeneralSettingsForm() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([
    {
      categoryName: "",
      selection: "Count",
      count: "",
      outputFields: [
        { fieldName: "Specs", fieldType: "Smart", customFieldValue: "" }
      ],
      targetAudience: "",
      priceTier: "Mid-Range",
      customPrice: "",
      notes: ""
    }
  ]);

  // Add Category
  const addCategory = () => {
    setCategories([
      ...categories,
      {
        categoryName: "",
        selection: "Count",
        count: "",
        outputFields: [
          { fieldName: "Specs", fieldType: "Smart", customFieldValue: "" }
        ],
        targetAudience: "",
        priceTier: "Mid-Range",
        customPrice: "",
        notes: ""
      }
    ]);
  };

  // Remove Category
  const removeCategory = (catIdx: number) => {
    setCategories(categories.filter((_, idx) => idx !== catIdx));
  };

  // Add Output Field
  const addField = (catIdx: number) => {
    setCategories(categories.map((cat, idx) =>
      idx === catIdx
        ? {
            ...cat,
            outputFields: [
              ...cat.outputFields,
              { fieldName: "", fieldType: "Smart", customFieldValue: "" }
            ]
          }
        : cat
    ));
  };

  // Remove Output Field
  const removeField = (catIdx: number, fieldIdx: number) => {
    setCategories(categories.map((cat, idx) =>
      idx === catIdx
        ? {
            ...cat,
            outputFields: cat.outputFields.filter((_, fIdx) => fIdx !== fieldIdx)
          }
        : cat
    ));
  };

  // Update Category
  const updateCategory = (catIdx: number, key: string, value: string) => {
    setCategories(categories.map((cat, idx) =>
      idx === catIdx ? { ...cat, [key]: value } : cat
    ));
  };

  // Update Output Field
  const updateField = (catIdx: number, fieldIdx: number, key: string, value: string) => {
    setCategories(categories.map((cat, idx) =>
      idx === catIdx
        ? {
            ...cat,
            outputFields: cat.outputFields.map((field, fIdx) =>
              fIdx === fieldIdx ? { ...field, [key]: value } : field
            )
          }
        : cat
    ));
  };

  // Replace trashcan SVG with provided SVG
  const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.286 8.571L7.429 20h9.142l1.143-11.429M13.5 15.5v-5m-3 5v-5M4.571 6.286h4.572m0 0l.382-1.529a1 1 0 0 1 .97-.757h3.01a1 1 0 0 1 .97.757l.382 1.529m-5.714 0h5.714m0 0h4.572"/></svg>
  );

  return (
    <div className="flex flex-col items-center w-full bg-[var(--background)] text-[var(--text-primary)] min-h-screen py-10 px-2">
      <div className="w-full max-w-2xl bg-[var(--surface)] rounded-2xl shadow-lg border border-[var(--border)] p-8">
        <div className="flex items-center justify-between mb-4">
          <label className="font-semibold text-2xl text-[var(--text-primary)] block">{t('product_categories')}</label>
          <button type="button" className="ml-2 px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] text-sm font-medium shadow-sm hover:bg-[var(--border)] transition-colors" onClick={addCategory}>{t('add_category')}</button>
        </div>
        <div className="flex flex-col gap-0 mb-8">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className={`relative flex mb-8 group`}>
              {/* Cool vertical bar */}
              <div className="w-1.5 rounded-l-2xl bg-gradient-to-b from-[var(--accent-light)] to-[var(--accent-dark)] h-full absolute left-0 top-0 bottom-0 shadow-md" style={{minHeight: '100%', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px'}}></div>
              <div className={`bg-[var(--surface)] border border-[var(--border)] shadow-lg p-8 relative flex-1 rounded-2xl transition-all duration-200 group-hover:shadow-xl`} style={{marginLeft: '12px'}}>
                {/* Category Trashcan (not for first) */}
                {categories.length > 1 && catIdx > 0 && (
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-[var(--red)] hover:text-[var(--red-dark)] transition-colors p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--red-light)]"
                    onClick={() => removeCategory(catIdx)}
                    title={t('remove_category')}
                    aria-label={t('remove_category')}
                  >
                    <TrashIcon />
                  </button>
                )}
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <label className="text-base font-semibold text-[var(--text-primary)] mb-1 block">Category Name</label>
                    <input type="text" className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all placeholder-[var(--text-secondary)]" placeholder={t('category_name_placeholder')} value={cat.categoryName} onChange={e => updateCategory(catIdx, "categoryName", e.target.value)} />
                  </div>
                  <div className="w-36">
                    <label className="text-base font-semibold text-[var(--text-primary)] mb-1 block">Selection</label>
                    <select className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all" value={cat.selection} onChange={e => updateCategory(catIdx, "selection", e.target.value)}>
                      <option value="Count">{t('selection_count')}</option>
                      <option value="Usage %">{t('selection_usage')}</option>
                    </select>
                  </div>
                  <div className="w-24">
                    <label className="text-base font-semibold text-[var(--text-primary)] mb-1 block">#</label>
                    <input type="number" className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all placeholder-[var(--text-secondary)]" placeholder="#" value={cat.count} onChange={e => updateCategory(catIdx, "count", e.target.value)} />
                  </div>
                </div>
                {/* Output Fields */}
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-lg text-[var(--text-primary)]">{t('output_fields')}</span>
                  <button type="button" className="px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] text-xs font-medium shadow-sm hover:bg-[var(--border)] transition-colors" onClick={() => addField(catIdx)}>{t('add_field')}</button>
                </div>
                <div className="flex flex-col gap-3 mb-2">
                  {cat.outputFields.map((field, fieldIdx) => (
                    <div key={fieldIdx} className="flex flex-col sm:flex-row gap-4 items-end relative">
                      <div className="flex-1">
                        <label className="text-base font-semibold text-[var(--text-primary)] mb-1 block">Field Name</label>
                        <input type="text" className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all placeholder-[var(--text-secondary)]" placeholder={t('field_name_placeholder')} value={field.fieldName} onChange={e => updateField(catIdx, fieldIdx, "fieldName", e.target.value)} />
                      </div>
                      <div className="w-36">
                        <label className="text-base font-semibold text-[var(--text-primary)] mb-1 block">Type</label>
                        <select className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all" value={field.fieldType} onChange={e => updateField(catIdx, fieldIdx, "fieldType", e.target.value)}>
                          <option value="Smart">{t('type_smart')}</option>
                          <option value="Manual">{t('type_manual')}</option>
                          <option value="Custom">{t('type_custom')}</option>
                        </select>
                      </div>
                      {field.fieldType === "Custom" && (
                        <div className="flex-1">
                          <label className="text-base font-semibold text-[var(--text-primary)] mb-1 block">{t('custom_value')}</label>
                          <input type="text" className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all placeholder-[var(--text-secondary)]" placeholder={t('custom_value_placeholder')} value={field.customFieldValue} onChange={e => updateField(catIdx, fieldIdx, "customFieldValue", e.target.value)} />
                        </div>
                      )}
                      {/* Trashcan for fields except the first */}
                      {cat.outputFields.length > 1 && fieldIdx > 0 && (
                        <button
                          type="button"
                          className="absolute right-0 top-1 text-[var(--red)] hover:text-[var(--red-dark)] transition-colors p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--red-light)]"
                          onClick={() => removeField(catIdx, fieldIdx)}
                          title={t('remove_field')}
                          aria-label={t('remove_field')}
                        >
                          <TrashIcon />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-[var(--text-secondary)] mb-1 ml-1 font-medium"><b>{t('smart_preview')}</b> <span className="italic">{t('smart_preview_desc')}</span></div>
              </div>
            </div>
          ))}
        </div>
        {/* Target Audience */}
        <div className="mb-6 mt-10">
          <label className="font-semibold text-lg text-[var(--text-primary)] mb-1 block">{t('target_audience')}</label>
          <input type="text" className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all placeholder-[var(--text-secondary)]" placeholder={t('target_audience_placeholder')} value={categories[0].targetAudience} onChange={e => updateCategory(0, "targetAudience", e.target.value)} />
        </div>
        {/* Price Tier */}
        <div className="mb-6">
          <label className="font-semibold text-lg text-[var(--text-primary)] mb-1 block">{t('price_tier')}</label>
          <select className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all mb-2" value={categories[0].priceTier} onChange={e => updateCategory(0, "priceTier", e.target.value)}>
            <option value="Budget-Friendly">{t('price_tier_budget')}</option>
            <option value="Mid-Range">{t('price_tier_mid')}</option>
            <option value="Premium">{t('price_tier_premium')}</option>
            <option value="Custom">{t('price_tier_custom')}</option>
          </select>
          {categories[0].priceTier === "Custom" && (
            <input type="text" className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all placeholder-[var(--text-secondary)]" placeholder={t('custom_price_placeholder')} value={categories[0].customPrice} onChange={e => updateCategory(0, "customPrice", e.target.value)} />
          )}
          <div className="text-xs text-[var(--text-secondary)] mt-1 ml-1">{t('price_tier_desc')}</div>
        </div>
        {/* Additional Notes */}
        <div className="mb-2">
          <label className="font-semibold text-lg text-[var(--text-primary)] mb-1 block">{t('additional_notes')}</label>
          <input type="text" className="w-full border border-[var(--border)] rounded-lg px-4 py-2 text-base focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all placeholder-[var(--text-secondary)]" placeholder={t('additional_notes_placeholder')} value={categories[0].notes} onChange={e => updateCategory(0, "notes", e.target.value)} />
        </div>
      </div>
    </div>
  );
}

function AnalyticsOverview() {
  const [selectedSection, setSelectedSection] = useState("all");
  
  // Mock data for analytics
  const productPerformanceData = {
    totalAIGenerated: 247,
    revenueFromAI: 125000,
    bestPerforming: "Smart Fitness Tracker",
    lowPerforming: 12,
    salesOverTime: [
      { month: "Jan", ai: 15000, manual: 12000 },
      { month: "Feb", ai: 18000, manual: 14000 },
      { month: "Mar", ai: 22000, manual: 16000 },
      { month: "Apr", ai: 25000, manual: 18000 },
      { month: "May", ai: 28000, manual: 20000 },
      { month: "Jun", ai: 32000, manual: 22000 },
    ],
    topProducts: [
      { name: "Smart Fitness Tracker", revenue: 32000 },
      { name: "Wireless Earbuds", revenue: 28000 },
      { name: "Smart Watch", revenue: 25000 },
      { name: "Bluetooth Speaker", revenue: 22000 },
      { name: "Phone Case", revenue: 18000 },
    ],
    aiRevenuePercentage: 65
  };

  const contentEffectivenessData = {
    averageCTR: 3.2,
    bounceRate: 42,
    timeOnPage: 145,
    topAddToCart: "Smart Fitness Tracker",
    ctrByProduct: [
      { product: "Smart Fitness Tracker", ctr: 4.8 },
      { product: "Wireless Earbuds", ctr: 3.9 },
      { product: "Smart Watch", ctr: 3.2 },
      { product: "Bluetooth Speaker", ctr: 2.8 },
      { product: "Phone Case", ctr: 2.1 },
    ],
    contentPerformance: [
      { type: "Q&A", performance: 85 },
      { type: "Specs", performance: 72 },
      { type: "Description", performance: 68 },
    ]
  };

  const automationImpactData = {
    cartRecoveryRate: 23.5,
    welcomeEmailOpenRate: 67.8,
    chatbotSuccessRate: 89.2,
    abTestWinnerRate: 73.4,
    emailPerformance: [
      { type: "Welcome", opens: 67.8, clicks: 12.3 },
      { type: "Abandoned Cart", opens: 45.2, clicks: 18.7 },
      { type: "Promotional", opens: 34.1, clicks: 8.9 },
      { type: "Newsletter", opens: 28.5, clicks: 6.2 },
    ]
  };

  const forecastAccuracyData = {
    accuracyPercentage: 87.3,
    matchedForecasts: 156,
    flaggedFailures: 23,
    averageDeviation: 12.4,
    forecastVsActual: [
      { forecast: 1000, actual: 1050 },
      { forecast: 800, actual: 780 },
      { forecast: 1200, actual: 1180 },
      { forecast: 900, actual: 920 },
      { forecast: 1100, actual: 1080 },
    ]
  };

  const customerBehaviorData = {
    segments: [
      { name: "High Value", conversion: 8.9, returns: 2.1, ltv: 450 },
      { name: "Mid Value", conversion: 5.2, returns: 4.8, ltv: 180 },
      { name: "Low Value", conversion: 2.1, returns: 8.5, ltv: 65 },
      { name: "New Customers", conversion: 3.8, returns: 6.2, ltv: 95 },
    ]
  };

  return (
    <div className="space-y-8">
      {/* Section Selector */}
      <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Analytics Overview</h2>
          <select 
            value={selectedSection} 
            onChange={(e) => setSelectedSection(e.target.value)}
            className="px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)] transition-all"
          >
            <option value="all">All Sections</option>
            <option value="product-performance">📦 Product Performance</option>
            <option value="content-effectiveness">📊 Content Effectiveness</option>
            <option value="automation-impact">🤖 Automation Impact</option>
            <option value="forecast-accuracy">📈 Forecast Accuracy</option>
            <option value="customer-behavior">👤 Customer Behavior</option>
          </select>
        </div>
        <p className="text-[var(--text-secondary)] text-sm">
          Select a specific section to focus on, or view all analytics at once.
        </p>
      </div>

      {/* 1. Product Performance */}
      <div className={`bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] ${selectedSection !== "all" && selectedSection !== "product-performance" ? "hidden" : ""}`}>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">📦</span>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Product Performance</h2>
          <span className="text-[var(--text-secondary)]">How your generated products are doing</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-[var(--text-secondary)] mb-1">🛍️ Total AI-generated products live</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{productPerformanceData.totalAIGenerated}</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <div className="text-sm text-[var(--text-secondary)] mb-1">💰 Revenue from AI-generated products</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">${productPerformanceData.revenueFromAI.toLocaleString()}</div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="text-sm text-[var(--text-secondary)] mb-1">🏷️ Best-performing product</div>
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{productPerformanceData.bestPerforming}</div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <div className="text-sm text-[var(--text-secondary)] mb-1">⚠️ Low-performing products</div>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{productPerformanceData.lowPerforming}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
            <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Sales Over Time (AI vs Manual)</h3>
            <div className="space-y-2">
              {productPerformanceData.salesOverTime.slice(-3).map((data, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">{data.month}</span>
                  <div className="flex gap-4">
                    <span className="text-blue-600 dark:text-blue-400">AI: ${data.ai.toLocaleString()}</span>
                    <span className="text-[var(--text-secondary)]">Manual: ${data.manual.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
            <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Top 5 AI Products by Revenue</h3>
            <div className="space-y-2">
              {productPerformanceData.topProducts.map((product, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">{product.name}</span>
                  <span className="font-semibold text-[var(--text-primary)]">${product.revenue.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
            <h3 className="font-semibold mb-3 text-[var(--text-primary)]">AI Products Revenue Share</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{productPerformanceData.aiRevenuePercentage}%</div>
              <div className="text-sm text-[var(--text-secondary)]">of total store revenue</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Effectiveness */}
      <div className={`bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] ${selectedSection !== "all" && selectedSection !== "content-effectiveness" ? "hidden" : ""}`}>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">📊</span>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Content Effectiveness</h2>
          <span className="text-[var(--text-secondary)]">Is the AI content converting?</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-[var(--text-secondary)] mb-1">CTR from product listings</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{contentEffectivenessData.averageCTR}%</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <div className="text-sm text-[var(--text-secondary)] mb-1">Bounce rate / time on page</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{contentEffectivenessData.bounceRate}% / {contentEffectivenessData.timeOnPage}s</div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div className="text-sm text-[var(--text-secondary)] mb-1">Highest "Add to Cart" rates</div>
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{contentEffectivenessData.topAddToCart}</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="text-sm text-[var(--text-secondary)] mb-1">Content types performance</div>
            <div className="text-sm">
                             {contentEffectivenessData.contentPerformance.map((content, idx) => (
                 <div key={idx} className="flex justify-between">
                   <span className="text-[var(--text-secondary)]">{content.type}:</span>
                   <span className="font-semibold text-[var(--text-primary)]">{content.performance}%</span>
                 </div>
               ))}
             </div>
           </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
             <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Click-through Rate per Product</h3>
             <div className="space-y-2">
               {contentEffectivenessData.ctrByProduct.map((product, idx) => (
                 <div key={idx} className="flex justify-between text-sm">
                   <span className="text-[var(--text-secondary)]">{product.product}</span>
                   <span className="font-semibold text-[var(--text-primary)]">{product.ctr}%</span>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
             <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Content Type Performance</h3>
             <div className="space-y-2">
               {contentEffectivenessData.contentPerformance.map((content, idx) => (
                 <div key={idx} className="flex items-center gap-2">
                   <div className="w-24 text-sm text-[var(--text-secondary)]">{content.type}</div>
                   <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                     <div 
                       className="bg-blue-600 h-2 rounded-full" 
                       style={{ width: `${content.performance}%` }}
                     ></div>
                   </div>
                   <div className="w-12 text-sm font-semibold text-[var(--text-primary)]">{content.performance}%</div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>

             {/* 3. Automation Impact */}
      <div className={`bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] ${selectedSection !== "all" && selectedSection !== "automation-impact" ? "hidden" : ""}`}>
         <div className="flex items-center gap-2 mb-6">
           <span className="text-2xl">🤖</span>
           <h2 className="text-xl font-bold text-[var(--text-primary)]">Automation Impact</h2>
           <span className="text-[var(--text-secondary)]">How email flows, bots, etc. are performing</span>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
           <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
             <div className="text-sm text-[var(--text-secondary)] mb-1">Abandoned cart recovery rate</div>
             <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{automationImpactData.cartRecoveryRate}%</div>
           </div>
           <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
             <div className="text-sm text-[var(--text-secondary)] mb-1">Welcome email open/click rate</div>
             <div className="text-2xl font-bold text-green-600 dark:text-green-400">{automationImpactData.welcomeEmailOpenRate}% / 12.3%</div>
           </div>
           <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
             <div className="text-sm text-[var(--text-secondary)] mb-1">Chatbot resolution success rate</div>
             <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{automationImpactData.chatbotSuccessRate}%</div>
           </div>
           <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
             <div className="text-sm text-[var(--text-secondary)] mb-1">Campaign A/B test winner %</div>
             <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{automationImpactData.abTestWinnerRate}%</div>
           </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
             <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Email Campaign Performance</h3>
             <div className="space-y-3">
               {automationImpactData.emailPerformance.map((email, idx) => (
                 <div key={idx} className="flex justify-between items-center">
                   <span className="text-sm text-[var(--text-secondary)]">{email.type}</span>
                   <div className="flex gap-4 text-sm">
                     <span className="text-blue-600 dark:text-blue-400">Opens: {email.opens}%</span>
                     <span className="text-green-600 dark:text-green-400">Clicks: {email.clicks}%</span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
             <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Automation Funnel</h3>
             <div className="space-y-2 text-sm">
               <div className="flex justify-between">
                 <span className="text-[var(--text-secondary)]">Abandoned Carts</span>
                 <span className="font-semibold text-[var(--text-primary)]">1,247</span>
               </div>
               <div className="flex justify-between text-blue-600 dark:text-blue-400">
                 <span>→ Recovered</span>
                 <span className="font-semibold">293</span>
               </div>
               <div className="flex justify-between text-green-600 dark:text-green-400">
                 <span>→ Revenue Generated</span>
                 <span className="font-semibold">$18,450</span>
               </div>
             </div>
           </div>
         </div>
       </div>

             {/* 4. Forecast Accuracy */}
      <div className={`bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] ${selectedSection !== "all" && selectedSection !== "forecast-accuracy" ? "hidden" : ""}`}>
         <div className="flex items-center gap-2 mb-6">
           <span className="text-2xl">📈</span>
           <h2 className="text-xl font-bold text-[var(--text-primary)]">Forecast Accuracy</h2>
           <span className="text-[var(--text-secondary)]">Is your AI good at predicting success?</span>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
           <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
             <div className="text-sm text-[var(--text-secondary)] mb-1">% of products where forecast matched outcome</div>
             <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{forecastAccuracyData.accuracyPercentage}%</div>
           </div>
           <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
             <div className="text-sm text-[var(--text-secondary)] mb-1">Products where forecast flagged failure (and it was true)</div>
             <div className="text-2xl font-bold text-green-600 dark:text-green-400">{forecastAccuracyData.flaggedFailures}</div>
           </div>
           <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
             <div className="text-sm text-[var(--text-secondary)] mb-1">Average forecast vs actual sales</div>
             <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">±{forecastAccuracyData.averageDeviation}%</div>
           </div>
           <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
             <div className="text-sm text-[var(--text-secondary)] mb-1">Total matched forecasts</div>
             <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{forecastAccuracyData.matchedForecasts}</div>
           </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
             <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Forecast vs Actual (Sample)</h3>
             <div className="space-y-2">
               {forecastAccuracyData.forecastVsActual.map((data, idx) => (
                 <div key={idx} className="flex justify-between text-sm">
                   <span className="text-[var(--text-secondary)]">Forecast: {data.forecast}</span>
                   <span className="text-[var(--text-secondary)]">Actual: {data.actual}</span>
                   <span className={`font-semibold ${data.actual >= data.forecast ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                     {data.actual >= data.forecast ? '+' : ''}{Math.round((data.actual - data.forecast) / data.forecast * 100)}%
                   </span>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
             <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Forecast Accuracy Gauge</h3>
             <div className="text-center">
               <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{forecastAccuracyData.accuracyPercentage}%</div>
               <div className="text-sm text-[var(--text-secondary)]">Accuracy Rate</div>
               <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                 <div 
                   className="bg-blue-600 h-3 rounded-full" 
                   style={{ width: `${forecastAccuracyData.accuracyPercentage}%` }}
                 ></div>
               </div>
             </div>
           </div>
         </div>
       </div>

             {/* 5. Customer Behavior */}
      <div className={`bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] ${selectedSection !== "all" && selectedSection !== "customer-behavior" ? "hidden" : ""}`}>
         <div className="flex items-center gap-2 mb-6">
           <span className="text-2xl">👤</span>
           <h2 className="text-xl font-bold text-[var(--text-primary)]">Customer Behavior</h2>
           <span className="text-[var(--text-secondary)]">Useful if you're using your AI customer pipelines</span>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
             <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Segment Performance</h3>
             <div className="space-y-4">
               {customerBehaviorData.segments.map((segment, idx) => (
                 <div key={idx} className="border-b border-[var(--border)] pb-3 last:border-b-0">
                   <div className="flex justify-between items-center mb-2">
                     <span className="font-semibold text-[var(--text-primary)]">{segment.name}</span>
                     <span className="text-sm text-[var(--text-secondary)]">LTV: ${segment.ltv}</span>
                   </div>
                   <div className="flex gap-4 text-sm">
                     <span className="text-blue-600 dark:text-blue-400">Conv: {segment.conversion}%</span>
                     <span className="text-red-600 dark:text-red-400">Returns: {segment.returns}%</span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)]">
             <h3 className="font-semibold mb-3 text-[var(--text-primary)]">Audience Behavior Summary</h3>
             <div className="space-y-3 text-sm">
               <div className="flex justify-between">
                 <span className="text-[var(--text-secondary)]">High Value Customers</span>
                 <span className="font-semibold text-green-600 dark:text-green-400">Best Performance</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-[var(--text-secondary)]">Mid Value Customers</span>
                 <span className="font-semibold text-yellow-600 dark:text-yellow-400">Stable</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-[var(--text-secondary)]">Low Value Customers</span>
                 <span className="font-semibold text-red-600 dark:text-red-400">Needs Attention</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-[var(--text-secondary)]">New Customers</span>
                 <span className="font-semibold text-blue-600 dark:text-blue-400">Growing</span>
               </div>
             </div>
           </div>
         </div>
       </div>
           </div>
    );
  } 

function ProductForecasting() {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [filterDemand, setFilterDemand] = useState("all");
  const [filterRisk, setFilterRisk] = useState("all");

  // Mock product forecast data
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      sku: "WBH-001",
      price: 79.99,
      image: "/public/file.svg",
      demandScore: 92,
      risk: "Low",
      segment: "Tech Enthusiasts",
      forecast30: 120,
      forecast90: 340,
      status: "Safe",
      flag: "✅",
      details: {
        demandScore: 92,
        predictedUnits30: 120,
        predictedUnits90: 340,
        estimatedRevenue: 9500,
        seasonality: "🔥 Hot",
        riskScore: "Low",
        returnProbability: 4.2,
        riskFlag: false,
        reviewSentiment: 88,
        pros: ["Great sound", "Long battery", "Comfortable"],
        cons: ["Bulky case"],
        competitors: [
          { name: "Comp A", price: 89.99, rating: 4.2, reviews: 1247 },
          { name: "Comp B", price: 79.99, rating: 3.8, reviews: 892 },
          { name: "Comp C", price: 99.99, rating: 4.5, reviews: 2156 }
        ],
        stockLevel: 45,
        reorderThreshold: 10,
        lifecyclePhase: "Growing",
        supplierDelivery: 7.5,
        lateShipmentRate: 2.1,
        fulfillmentETA: "2-4 days",
        categoryAverage: "4-6 days",
        customerSegment: "Tech Enthusiasts",
        ltvRange: "$400-600",
        churnPrediction: "Low",
        gptFlag: "✅ Looks safe"
      }
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      sku: "EOC-205",
      price: 299.99,
      image: "/public/file.svg",
      demandScore: 68,
      risk: "Medium",
      segment: "Office Workers",
      forecast30: 40,
      forecast90: 110,
      status: "Needs Review",
      flag: "⚠️",
      details: {
        demandScore: 68,
        predictedUnits30: 40,
        predictedUnits90: 110,
        estimatedRevenue: 12000,
        seasonality: "💤 Flat",
        riskScore: "Medium",
        returnProbability: 9.8,
        riskFlag: true,
        reviewSentiment: 65,
        pros: ["Comfortable", "Adjustable"],
        cons: ["Expensive", "Heavy"],
        competitors: [
          { name: "Comp D", price: 249.99, rating: 4.0, reviews: 500 },
          { name: "Comp E", price: 329.99, rating: 4.3, reviews: 800 },
          { name: "Comp F", price: 299.99, rating: 4.1, reviews: 600 }
        ],
        stockLevel: 8,
        reorderThreshold: 3,
        lifecyclePhase: "Plateauing",
        supplierDelivery: 12.0,
        lateShipmentRate: 5.5,
        fulfillmentETA: "5-8 days",
        categoryAverage: "4-6 days",
        customerSegment: "Office Workers",
        ltvRange: "$800-1200",
        churnPrediction: "Medium",
        gptFlag: "⚠️ Needs review"
      }
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      sku: "SWB-350",
      price: 24.99,
      image: "/public/file.svg",
      demandScore: 55,
      risk: "High",
      segment: "Fitness Fans",
      forecast30: 30,
      forecast90: 80,
      status: "Flagged",
      flag: "❌",
      details: {
        demandScore: 55,
        predictedUnits30: 30,
        predictedUnits90: 80,
        estimatedRevenue: 2000,
        seasonality: "☃️ Off-Season",
        riskScore: "High",
        returnProbability: 18.2,
        riskFlag: true,
        reviewSentiment: 48,
        pros: ["Durable", "Keeps cold"],
        cons: ["Leaks sometimes", "Paint chips"],
        competitors: [
          { name: "Comp G", price: 19.99, rating: 3.9, reviews: 300 },
          { name: "Comp H", price: 29.99, rating: 4.2, reviews: 450 },
          { name: "Comp I", price: 24.99, rating: 4.0, reviews: 200 }
        ],
        stockLevel: 0,
        reorderThreshold: 10,
        lifecyclePhase: "Declining",
        supplierDelivery: 15.0,
        lateShipmentRate: 12.0,
        fulfillmentETA: "7-10 days",
        categoryAverage: "4-6 days",
        customerSegment: "Fitness Fans",
        ltvRange: "$100-200",
        churnPrediction: "High",
        gptFlag: "❌ Flagged: Do not list"
      }
    }
  ];

  // Summary card data
  const summary = [
    { icon: "📦", label: "Products Scored", value: products.length },
    { icon: "🔥", label: "High Demand", value: products.filter(p => p.demandScore >= 80).length },
    { icon: "⚠️", label: "High Risk", value: products.filter(p => p.risk === "High").length },
    { icon: "📊", label: "Avg. Forecast Score", value: Math.round(products.reduce((a, b) => a + b.demandScore, 0) / products.length) + "%" }
  ];

  // Filtered products
  const filtered = products.filter(p =>
    (search === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase())) &&
    (filterDemand === "all" || (filterDemand === "high" && p.demandScore >= 80) || (filterDemand === "medium" && p.demandScore >= 60 && p.demandScore < 80) || (filterDemand === "low" && p.demandScore < 60)) &&
    (filterRisk === "all" || p.risk.toLowerCase() === filterRisk)
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] px-0">
      {/* Subtitle */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-2">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-1">Product Forecasting</h1>
        <p className="text-[var(--text-secondary)] text-lg mb-6">AI-powered forecasting and diagnostics for your products</p>
      </div>

      {/* Summary Cards */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {summary.map((card, idx) => (
          <div key={idx} className="bg-[var(--surface)] rounded-xl shadow-sm p-5 flex flex-col items-center justify-center border border-[var(--border)]">
            <div className="text-2xl mb-1">{card.icon}</div>
            <div className="text-2xl font-bold text-[var(--accent)] mb-1">{card.value}</div>
            <div className="text-[var(--text-secondary)] text-sm font-medium text-center">{card.label}</div>
          </div>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search products or SKU..."
          className="w-full md:w-1/3 px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)]"
        />
        <div className="flex gap-2">
          <select
            value={filterDemand}
            onChange={e => setFilterDemand(e.target.value)}
            className="px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)]"
          >
            <option value="all">All Demand</option>
            <option value="high">High Demand</option>
            <option value="medium">Medium Demand</option>
            <option value="low">Low Demand</option>
          </select>
          <select
            value={filterRisk}
            onChange={e => setFilterRisk(e.target.value)}
            className="px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-light)]"
          >
            <option value="all">All Risk</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-dark)] transition-colors">Add Product</button>
        </div>
      </div>

      {/* Forecast Table */}
      <div className="max-w-5xl mx-auto px-4 bg-[var(--surface)] rounded-xl shadow border border-[var(--border)] overflow-x-auto">
        <table className="min-w-full divide-y divide-[var(--border)]">
          <thead>
            <tr className="text-left text-[var(--text-secondary)] text-sm">
              <th className="py-3 px-4 font-semibold">Product</th>
              <th className="py-3 px-4 font-semibold">SKU</th>
              <th className="py-3 px-4 font-semibold">Price</th>
              <th className="py-3 px-4 font-semibold">Demand</th>
              <th className="py-3 px-4 font-semibold">Risk</th>
              <th className="py-3 px-4 font-semibold">Segment</th>
              <th className="py-3 px-4 font-semibold">30d Units</th>
              <th className="py-3 px-4 font-semibold">90d Units</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Flag</th>
              <th className="py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {filtered.map(product => (
              <tr key={product.id} className="hover:bg-[var(--background)] cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <td className="py-3 px-4 flex items-center gap-2">
                  <img src={product.image} alt={product.name} className="w-8 h-8 rounded object-cover border border-[var(--border)]" />
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">{product.name}</div>
                    <div className="text-xs text-[var(--text-secondary)]">${product.price}</div>
                  </div>
                </td>
                <td className="py-3 px-4">{product.sku}</td>
                <td className="py-3 px-4">${product.price}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--accent)]">{product.demandScore}%</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className={`h-2 rounded-full ${product.demandScore >= 80 ? 'bg-green-500' : product.demandScore >= 60 ? 'bg-yellow-400' : 'bg-red-500'}`} style={{ width: `${product.demandScore}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${product.risk === 'High' ? 'bg-red-100 text-red-700' : product.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{product.risk}</span>
                </td>
                <td className="py-3 px-4">{product.segment}</td>
                <td className="py-3 px-4">{product.forecast30}</td>
                <td className="py-3 px-4">{product.forecast90}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${product.status === 'Safe' ? 'bg-green-100 text-green-700' : product.status === 'Needs Review' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{product.status}</span>
                </td>
                <td className="py-3 px-4 text-xl">{product.flag}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button className="px-2 py-1 rounded bg-[var(--accent)] text-white text-xs font-semibold hover:bg-[var(--accent-dark)]">View</button>
                  <button className="px-2 py-1 rounded bg-[var(--surface)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border)] hover:bg-[var(--border)]">Re-run</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={11} className="text-center text-[var(--text-secondary)] py-8">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Details Drawer/Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-[var(--surface)] rounded-xl shadow-lg border border-[var(--border)] max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-[var(--accent)] font-bold text-xl">×</button>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">{selectedProduct.name} <span className="text-lg text-[var(--text-secondary)]">({selectedProduct.sku})</span></h2>
            <div className="mb-4 text-[var(--text-secondary)]">${selectedProduct.price}</div>
            {/* Forecast Details Sections */}
            <div className="space-y-4">
              {/* Demand Forecasting */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">📈 Demand Forecasting</div>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700 font-bold">Demand: {selectedProduct.details.demandScore}%</div>
                  <div className="bg-green-50 p-3 rounded-lg text-green-700 font-bold">30d: {selectedProduct.details.predictedUnits30}</div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700 font-bold">90d: {selectedProduct.details.predictedUnits90}</div>
                  <div className="bg-purple-50 p-3 rounded-lg text-purple-700 font-bold">Seasonality: {selectedProduct.details.seasonality}</div>
                  <div className="bg-gray-50 p-3 rounded-lg text-gray-700 font-bold">Revenue: ${selectedProduct.details.estimatedRevenue.toLocaleString()}</div>
                </div>
              </div>
              {/* Risk/Return */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">⚠️ Risk / Return</div>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-red-50 p-3 rounded-lg text-red-700 font-bold">Risk: {selectedProduct.details.riskScore}</div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700 font-bold">Return Probability: {selectedProduct.details.returnProbability}%</div>
                  <div className={`p-3 rounded-lg font-bold ${selectedProduct.details.riskFlag ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{selectedProduct.details.riskFlag ? '⚠️ High Risk' : '✅ Safe'}</div>
                </div>
              </div>
              {/* Review Analyzer */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">🔍 Review Analyzer</div>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700 font-bold">Sentiment: {selectedProduct.details.reviewSentiment}%</div>
                  <div className="bg-green-50 p-3 rounded-lg text-green-700 font-bold">Pros: {selectedProduct.details.pros.join(', ')}</div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700 font-bold">Cons: {selectedProduct.details.cons.join(', ')}</div>
                </div>
              </div>
              {/* Competitor Spy */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">🔫 Competitor Spy</div>
                <div className="space-y-2">
                  {selectedProduct.details.competitors.map((c: any, idx: number) => (
                    <div key={idx} className="flex gap-4 items-center bg-gray-50 p-2 rounded-lg">
                      <span className="font-bold text-[var(--text-primary)]">{c.name}</span>
                      <span className="text-[var(--text-secondary)]">${c.price}</span>
                      <span className="text-yellow-700">{c.rating}⭐</span>
                      <span className="text-[var(--text-secondary)]">{c.reviews} reviews</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Stock Optimization */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">🧮 Stock Optimization</div>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700 font-bold">Stock: {selectedProduct.details.stockLevel}</div>
                  <div className="bg-green-50 p-3 rounded-lg text-green-700 font-bold">Reorder: {selectedProduct.details.reorderThreshold}</div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700 font-bold">Lifecycle: {selectedProduct.details.lifecyclePhase}</div>
                </div>
              </div>
              {/* Supplier Performance */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">⛓️ Supplier Performance</div>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700 font-bold">Delivery: {selectedProduct.details.supplierDelivery} days</div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700 font-bold">Late: {selectedProduct.details.lateShipmentRate}%</div>
                </div>
              </div>
              {/* Fulfillment ETA */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">⏱️ Fulfillment ETA</div>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700 font-bold">ETA: {selectedProduct.details.fulfillmentETA}</div>
                  <div className="bg-green-50 p-3 rounded-lg text-green-700 font-bold">Category Avg: {selectedProduct.details.categoryAverage}</div>
                </div>
              </div>
              {/* Customer Intelligence */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">🧠 Customer Intelligence</div>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-700 font-bold">Segment: {selectedProduct.details.customerSegment}</div>
                  <div className="bg-green-50 p-3 rounded-lg text-green-700 font-bold">LTV: {selectedProduct.details.ltvRange}</div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700 font-bold">Churn: {selectedProduct.details.churnPrediction}</div>
                </div>
              </div>
              {/* GPT Flag Checker */}
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">🛑 GPT Flag Checker</div>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-green-50 p-3 rounded-lg text-green-700 font-bold">{selectedProduct.details.gptFlag}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 

function CustomerAutomationPage() {
  // Mock state for controls
  const [segment, setSegment] = useState("All Customers");
  const [mode, setMode] = useState("welcome");
  const [preview, setPreview] = useState(false);
  const [automations, setAutomations] = useState({
    welcome: true,
    cart: true,
    chatbot: false,
    churn: true,
    ab: false,
    knowledge: true,
  });

  // Mock analytics
  const analytics = [
    { label: "Open Rate", value: "62%" },
    { label: "Click Rate", value: "28%" },
    { label: "Recovery Rate", value: "35%" },
    { label: "Chatbot Satisfaction", value: "4.7/5" },
    { label: "Churn Saves", value: "112" },
  ];

  // Automation cards config
  const cards = [
    {
      key: "welcome",
      icon: "📨",
      title: "Welcome Email Sequence",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label>Status:</label>
            <input type="checkbox" checked={automations.welcome} onChange={e => setAutomations(a => ({ ...a, welcome: e.target.checked }))} />
            <span className={automations.welcome ? "text-green-600" : "text-gray-400"}>{automations.welcome ? "On" : "Off"}</span>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Subject Line</label>
            <input className="w-full border rounded px-2 py-1" value="Welcome to Avonova!" readOnly />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Body</label>
            <textarea className="w-full border rounded px-2 py-1" rows={2} defaultValue={"Hi {{name}},\nThanks for joining!"} />
          </div>
          <div className="flex gap-2 items-center">
            <label>Delay:</label>
            <select className="border rounded px-2 py-1">
              <option>Send after 1 hour</option>
              <option>Send after 6 hours</option>
              <option>Send after 24 hours</option>
            </select>
          </div>
          <button className="mt-2 px-3 py-1 rounded bg-[var(--accent)] text-white text-sm">Preview</button>
        </div>
      )
    },
    {
      key: "cart",
      icon: "🛒",
      title: "Abandoned Cart Recovery",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label>Status:</label>
            <input type="checkbox" checked={automations.cart} onChange={e => setAutomations(a => ({ ...a, cart: e.target.checked }))} />
            <span className={automations.cart ? "text-green-600" : "text-gray-400"}>{automations.cart ? "On" : "Off"}</span>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Timing Steps</label>
            <div className="flex gap-2 text-xs">Email #1: 1 hr | #2: 12 hrs | #3: 24 hrs</div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Content</label>
            <textarea className="w-full border rounded px-2 py-1" rows={2} defaultValue={"You left something in your cart!"} />
          </div>
          <div className="flex gap-2 items-center">
            <label>Discount Logic:</label>
            <input className="border rounded px-2 py-1 w-24" value="10%" readOnly />
            <span className="text-xs">if cart &gt; $100</span>
          </div>
          <div className="flex gap-2 items-center">
            <label>Recovery Rate:</label>
            <span className="font-bold text-green-600">35% Recovered</span>
          </div>
          <button className="mt-2 px-3 py-1 rounded bg-[var(--accent)] text-white text-sm">A/B Test</button>
        </div>
      )
    },
    {
      key: "chatbot",
      icon: "💬",
      title: "AI Chatbot Assistant",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label>Status:</label>
            <input type="checkbox" checked={automations.chatbot} onChange={e => setAutomations(a => ({ ...a, chatbot: e.target.checked }))} />
            <span className={automations.chatbot ? "text-green-600" : "text-gray-400"}>{automations.chatbot ? "On" : "Off"}</span>
          </div>
          <div className="flex gap-2 items-center">
            <label>Channel:</label>
            <select className="border rounded px-2 py-1">
              <option>Website</option>
              <option>WhatsApp</option>
              <option>Email</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Training Source</label>
            <input className="w-full border rounded px-2 py-1" value="Knowledge Base" readOnly />
          </div>
          <div className="flex gap-2 items-center">
            <label>Tone:</label>
            <select className="border rounded px-2 py-1">
              <option>Friendly</option>
              <option>Formal</option>
              <option>Brand voice</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">GPT Prompt Override</label>
            <input className="w-full border rounded px-2 py-1" placeholder="Advanced only" />
          </div>
          <button className="mt-2 px-3 py-1 rounded bg-[var(--accent)] text-white text-sm">Preview</button>
        </div>
      )
    },
    {
      key: "churn",
      icon: "💔",
      title: "Churn Prevention Email Flow",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label>Status:</label>
            <input type="checkbox" checked={automations.churn} onChange={e => setAutomations(a => ({ ...a, churn: e.target.checked }))} />
            <span className={automations.churn ? "text-green-600" : "text-gray-400"}>{automations.churn ? "On" : "Off"}</span>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Trigger</label>
            <input className="w-full border rounded px-2 py-1" value="Customer inactive for 30 days" readOnly />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Subject</label>
            <input className="w-full border rounded px-2 py-1" value="We miss you 😢" readOnly />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Offer</label>
            <input className="w-full border rounded px-2 py-1" value="15% off" readOnly />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">CTA</label>
            <input className="w-full border rounded px-2 py-1" value="Come back for 15% off" readOnly />
          </div>
          <div className="flex gap-2 items-center">
            <label>Predicted Risk:</label>
            <span className="font-bold text-red-600">High</span>
          </div>
        </div>
      )
    },
    {
      key: "ab",
      icon: "🧪",
      title: "A/B Copy Tester",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label>Status:</label>
            <input type="checkbox" checked={automations.ab} onChange={e => setAutomations(a => ({ ...a, ab: e.target.checked }))} />
            <span className={automations.ab ? "text-green-600" : "text-gray-400"}>{automations.ab ? "On" : "Off"}</span>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Source</label>
            <select className="border rounded px-2 py-1">
              <option>Product Description</option>
              <option>Email</option>
              <option>Title</option>
            </select>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1">Variant A</label>
              <input className="w-full border rounded px-2 py-1" value="Welcome to Avonova!" readOnly />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1">Variant B</label>
              <input className="w-full border rounded px-2 py-1" value="Start your journey with us!" readOnly />
            </div>
          </div>
          <button className="mt-2 px-3 py-1 rounded bg-[var(--accent)] text-white text-sm">Launch Test</button>
          <div className="flex gap-2 items-center mt-2">
            <label>Winner Metric:</label>
            <select className="border rounded px-2 py-1">
              <option>Click Rate</option>
              <option>Sales</option>
              <option>Time on Page</option>
            </select>
          </div>
        </div>
      )
    },
    {
      key: "knowledge",
      icon: "📚",
      title: "Knowledge Base Sync",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label>Status:</label>
            <input type="checkbox" checked={automations.knowledge} onChange={e => setAutomations(a => ({ ...a, knowledge: e.target.checked }))} />
            <span className={automations.knowledge ? "text-green-600" : "text-gray-400"}>{automations.knowledge ? "On" : "Off"}</span>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Sync Source</label>
            <input className="w-full border rounded px-2 py-1" value="Shopify Product Pages" readOnly />
          </div>
          <div className="flex gap-2 items-center">
            <label>Last Sync:</label>
            <span className="text-xs text-[var(--text-secondary)]">2 hours ago</span>
          </div>
          <div className="flex gap-2 items-center">
            <label>Summarizer Style:</label>
            <select className="border rounded px-2 py-1">
              <option>Concise</option>
              <option>SEO-rich</option>
              <option>Support-oriented</option>
            </select>
          </div>
        </div>
      )
    },
  ];

  // Automation mode tabs
  const modes = [
    { key: "welcome", label: "Welcome" },
    { key: "cart", label: "Abandoned Cart" },
    { key: "churn", label: "Churn Prevention" },
    { key: "chatbot", label: "Chatbot" },
    { key: "ab", label: "A/B Tester" },
    { key: "knowledge", label: "Knowledge Sync" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold flex items-center gap-2">🤖 Customer Automation</h1>
          <div className="flex gap-2 items-center">
            <label className="font-semibold">Audience Segment:</label>
            <select className="border rounded px-2 py-1" value={segment} onChange={e => setSegment(e.target.value)}>
              <option>All Customers</option>
              <option>Gen Z</option>
              <option>Parents</option>
              <option>VIP</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1">
            {modes.map(m => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`px-3 py-1 rounded font-semibold text-sm border transition-colors ${mode === m.key ? "bg-[var(--accent)] text-white border-[var(--accent)]" : "bg-[var(--surface)] text-[var(--text-primary)] border-[var(--border)] hover:bg-[var(--border)]"}`}
              >
                {m.label}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 rounded bg-[var(--accent)] text-white font-bold flex items-center gap-2">🚀 Activate Automations</button>
          <label className="flex items-center gap-1 ml-2">
            <input type="checkbox" checked={preview} onChange={e => setPreview(e.target.checked)} />
            <span className="text-sm">Preview</span>
          </label>
        </div>
      </div>

      {/* Automation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {cards.map(card => (
          <div key={card.key} className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{card.icon}</span>
              <h2 className="text-lg font-bold">{card.title}</h2>
            </div>
            {card.content}
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button className="px-6 py-2 rounded bg-[var(--accent)] text-white font-bold">Launch All</button>
        <button className="px-6 py-2 rounded bg-[var(--surface)] text-[var(--text-primary)] font-bold border border-[var(--border)]">Save</button>
        <button className="px-6 py-2 rounded bg-[var(--surface)] text-[var(--text-primary)] font-bold border border-[var(--border)]">Preview All</button>
      </div>

      {/* Analytics Panel */}
      <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] max-w-3xl mx-auto">
        <h3 className="text-lg font-bold mb-4">Automation Analytics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {analytics.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[var(--accent)]">{stat.value}</span>
              <span className="text-[var(--text-secondary)] text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AIProductBuilderPage() {
  return (
    <div className="text-center text-[var(--text-secondary)] py-16 text-lg font-semibold">
      AI Product Builder UI coming soon...
    </div>
  );
}

function ProductContentCreatorPage() {
  // Mock state for form inputs
  const [productName, setProductName] = useState("Avonova Organic Face Cream");
  const [category, setCategory] = useState("Skincare");
  const [price, setPrice] = useState("29.99");
  const [description, setDescription] = useState("Revolutionary organic face cream with natural ingredients");
  const [keywords, setKeywords] = useState("organic, skincare, natural, anti-aging");
  const [generatedContent, setGeneratedContent] = useState({
    title: "Revolutionary Organic Face Cream - Natural Anti-Aging Solution",
    description: "Transform your skincare routine with our premium organic face cream. Formulated with natural ingredients that deeply nourish and rejuvenate your skin, leaving you with a radiant, youthful glow.",
    features: [
      "100% Organic Ingredients",
      "Anti-Aging Properties",
      "Suitable for All Skin Types",
      "Cruelty-Free & Vegan",
      "Dermatologist Tested"
    ],
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone",
      "Provides deep hydration",
      "Protects against environmental damage"
    ]
  });

  // Mock generated content sections
  const contentSections = [
    {
      title: "SEO Optimized Title",
      content: generatedContent.title,
      type: "title"
    },
    {
      title: "Product Description",
      content: generatedContent.description,
      type: "description"
    },
    {
      title: "Key Features",
      content: generatedContent.features.join("\n• "),
      type: "features"
    },
    {
      title: "Benefits",
      content: generatedContent.benefits.join("\n• "),
      type: "benefits"
    }
  ];

  // Mock listing enhancers
  const enhancers = [
    {
      title: "SEO Meta Description",
      content: "Discover the power of organic skincare with our revolutionary face cream. Natural ingredients, proven results. Shop now!",
      icon: "🔍"
    },
    {
      title: "Social Media Post",
      content: "🌟 Transform your skincare routine with our NEW organic face cream! Natural ingredients, amazing results. Link in bio! #OrganicSkincare #NaturalBeauty",
      icon: "📱"
    },
    {
      title: "Email Subject Line",
      content: "New: Organic Face Cream That Actually Works",
      icon: "📧"
    },
    {
      title: "Ad Copy",
      content: "Revolutionary organic face cream with natural anti-aging properties. See results in 2 weeks. Limited time offer!",
      icon: "📢"
    }
  ];

  const handleGenerate = () => {
    // Mock generation - in real app this would call AI API
    console.log("Generating content for:", productName);
  };

  const handleExport = (format: string) => {
    console.log(`Exporting as ${format}`);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">🤖 AI Product Builder</h1>
          <p className="text-[var(--text-secondary)]">Create compelling product content with AI assistance</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded bg-[var(--surface)] text-[var(--text-primary)] font-bold border border-[var(--border)]">
            Save Template
          </button>
          <button className="px-4 py-2 rounded bg-[var(--accent)] text-white font-bold">
            Generate All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Input Fields */}
        <div className="space-y-6">
          {/* Product Information */}
          <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)]">
            <h2 className="text-lg font-bold mb-4">Product Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Product Name</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter product name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option>Skincare</option>
                    <option>Haircare</option>
                    <option>Makeup</option>
                    <option>Fragrance</option>
                    <option>Bath & Body</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Price</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Brief Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  placeholder="Brief description of your product"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Keywords</label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  placeholder="organic, natural, anti-aging"
                />
              </div>
            </div>
          </div>

          {/* AI Generator Controls */}
          <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)]">
            <h2 className="text-lg font-bold mb-4">AI Generator</h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={handleGenerate}
                  className="flex-1 px-4 py-2 rounded bg-[var(--accent)] text-white font-bold"
                >
                  🚀 Generate Content
                </button>
                <button className="px-4 py-2 rounded bg-[var(--surface)] text-[var(--text-primary)] font-bold border border-[var(--border)]">
                  Preview
                </button>
              </div>
              <div className="flex gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Include SEO optimization</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Include social media</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Generated Content */}
        <div className="space-y-6">
          {/* Generated Content Preview */}
          <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)]">
            <h2 className="text-lg font-bold mb-4">Generated Content</h2>
            <div className="space-y-4">
              {contentSections.map((section, idx) => (
                <div key={idx} className="border-b border-[var(--border)] pb-4 last:border-b-0">
                  <h3 className="font-semibold mb-2">{section.title}</h3>
                  <div className="bg-[var(--background)] rounded p-3 text-sm">
                    {section.type === "features" || section.type === "benefits" ? (
                      <ul className="list-disc list-inside space-y-1">
                        {section.type === "features" ? generatedContent.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        )) : generatedContent.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Listing Enhancers */}
          <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)]">
            <h2 className="text-lg font-bold mb-4">Listing Enhancers</h2>
            <div className="space-y-4">
              {enhancers.map((enhancer, idx) => (
                <div key={idx} className="border border-[var(--border)] rounded p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{enhancer.icon}</span>
                    <h3 className="font-semibold text-sm">{enhancer.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{enhancer.content}</p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-xs px-2 py-1 rounded bg-[var(--accent)] text-white">
                      Copy
                    </button>
                    <button className="text-xs px-2 py-1 rounded bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)]">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Export Actions */}
      <div className="mt-8 bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)]">
        <h2 className="text-lg font-bold mb-4">Export Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleExport("shopify")}
            className="px-4 py-2 rounded bg-[var(--accent)] text-white font-bold"
          >
            Export to Shopify
          </button>
          <button
            onClick={() => handleExport("csv")}
            className="px-4 py-2 rounded bg-[var(--surface)] text-[var(--text-primary)] font-bold border border-[var(--border)]"
          >
            Export as CSV
          </button>
          <button
            onClick={() => handleExport("json")}
            className="px-4 py-2 rounded bg-[var(--surface)] text-[var(--text-primary)] font-bold border border-[var(--border)]"
          >
            Export as JSON
          </button>
          <button
            onClick={() => handleExport("copy")}
            className="px-4 py-2 rounded bg-[var(--surface)] text-[var(--text-primary)] font-bold border border-[var(--border)]"
          >
            Copy All Content
          </button>
        </div>
      </div>
    </div>
  );
}