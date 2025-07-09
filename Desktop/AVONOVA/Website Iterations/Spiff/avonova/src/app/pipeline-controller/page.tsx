"use client";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import Image from "next/image";

// Tab icons
const BuildIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M7.276 1.053a.5.5 0 0 1 .448 0l6 3a.5.5 0 0 1 0 .894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1 0-.894zM2.618 4.5L7.5 6.941L12.382 4.5L7.5 2.059z"/><path fill="currentColor" d="M1.053 7.276a.5.5 0 0 1 .67-.223L7.5 9.94l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/><path fill="currentColor" d="M1.724 10.053a.5.5 0 1 0-.448.894l6 3a.5.5 0 0 0 .448 0l6-3a.5.5 0 1 0-.448-.894L7.5 12.94l-5.776-2.888z"/></svg>
);
const PromoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M6.4 4.882v4.436l7.6 2.073V2.809L6.4 4.882Zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.072A1 1 0 0 0 15 11.391V2.809a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965v4.436Z"/><path d="M3.456 9.3H5.5V4.9H3.453a3.422 3.422 0 0 0 .003 4.4Zm2.044 1a1 1 0 0 0 1-1V4.9a1 1 0 0 0-1-1H3.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.555.555 0 0 0 .405.176H5.5Z"/><path d="m7.269 10.87l-2.51-.28l-.978 3.91h2.636l.852-3.63Zm-2.4-1.273a1 1 0 0 0-1.081.75l-.977 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.772l.852-3.63a1 1 0 0 0-.864-1.223l-2.51-.278Zm13.747-6.374a.5.5 0 0 1-.139.693l-1.5 1a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139ZM16.2 7.1a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5Zm.117 2.23a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.765l-1.38-1.16a.5.5 0 0 1-.062-.704Z"/></g></svg>
);
const ConvertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 4H4v2l6 6v8.5l4-2.5v-6l6-6V4z"/></svg>
);
const RetainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M12.75 8a4.5 4.5 0 0 1-8.61 1.834l-1.391.565A6.001 6.001 0 0 0 14.25 8A6 6 0 0 0 3.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0 1 12.75 8z" clip-rule="evenodd"/></svg>
);
const AnalysisIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1408 512h512v512h-128V731l-576 575l-256-256l-704 705v37h1664v128H128V128h128v1445l704-703l256 256l485-486h-293V512z"/></svg>
);

// Health status icons
const HealthGoodIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024" className="text-green-500"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/></svg>
);
const HealthOkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="text-yellow-500"><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 7.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
);
const HealthBadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-orange-500"><path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm8.036-4.024a.751.751 0 0 0-1.042.018a.751.751 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275a.749.749 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275a.749.749 0 0 0-.734.215L12 10.939Z"/></svg>
);
const HealthUrgentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-red-500"><path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1Zm1 6a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V7Zm0 9.5a1 1 0 1 0-2 0v.5a1 1 0 1 0 2 0v-.5Z" clip-rule="evenodd"/></svg>
);

// Section icons
const SummaryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 4.5c-.441 0-1.039-.004-1.998-.005a1 1 0 0 0-.995.881l-.007.12v10.997a1 1 0 0 0 1 1l10 .006a1 1 0 0 0 .994-.882l.006-.117v-11a1 1 0 0 0-1-1h-2"/><path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zm-2 5h5m-5 2h7m-7 2h3m-3 2h6"/></g></svg>
);
const ImpactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 1536"><path fill="currentColor" d="M640 768v512H384V768h256zm384-512v1024H768V256h256zm1024 1152v128H0V0h128v1408h1920zm-640-896v768h-256V512h256zm384-384v1152h-256V128h256z"/></svg>
);
const RecommendationsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13.216 1.956a.79.79 0 0 0-1.431 0l-.582 1.247l-1.247.582a.79.79 0 0 0 0 1.43l1.247.582l.582 1.247a.79.79 0 0 0 1.43 0l.582-1.247l1.247-.582a.79.79 0 0 0 0-1.43l-1.247-.582zm-1.14 1.739l.424-.908l.424.908a.8.8 0 0 0 .381.381l.908.424l-.908.424a.8.8 0 0 0-.381.381l-.424.908l-.424-.908a.8.8 0 0 0-.381-.381l-.908-.424l.908-.424a.8.8 0 0 0 .381-.381M5.232 4.989a.847.847 0 0 1 1.536 0l.714 1.53l1.529.713a.847.847 0 0 1 0 1.536l-1.53.714l-.713 1.529a.847.847 0 0 1-1.536 0l-.714-1.53l-1.529-.713a.847.847 0 0 1 0-1.536l1.53-.714zm.768.72l-.599 1.283a.85.85 0 0 1-.41.41L3.709 8l1.284.599c.18.084.325.23.41.41L6 10.291l.599-1.284a.85.85 0 0 1 .41-.41L8.291 8l-1.284-.599a.85.85 0 0 1-.409-.41zm12.232 5.28a.847.847 0 0 1 1.536 0l.714 1.53l1.529.713a.847.847 0 0 1 0 1.536l-1.53.714l-.713 1.529a.847.847 0 0 1-1.536 0l-.714-1.53l-1.529-.713a.847.847 0 0 1 0-1.536l1.53-.714zm1.777 2.412a.85.85 0 0 1-.41-.41L19 11.709l-.599 1.284a.85.85 0 0 1-.41.41L16.709 14l1.284.599c.18.084.325.23.41.41L19 16.291l.599-1.284a.85.85 0 0 1 .41-.41L21.292 14zM8.882 11.928l3.533-3.533a.75.75 0 0 1 .518-.22l.012.75l-.012-.75h.033a2 2 0 0 1 .197.015c.118.015.275.045.458.103c.367.117.832.349 1.28.797s.68.913.797 1.28a2.6 2.6 0 0 1 .117.606l.001.05v.031l-.75-.01l.75.011a.75.75 0 0 1-.22.519L5.014 22.16a.75.75 0 0 1-.518.22l-.012-.75l.012.75h-.033a1.4 1.4 0 0 1-.197-.015a2.6 2.6 0 0 1-.458-.103a3.2 3.2 0 0 1-1.28-.797a3.2 3.2 0 0 1-.797-1.28a2.6 2.6 0 0 1-.117-.606l-.002-.05v-.031l.75.01l-.75-.011a.75.75 0 0 1 .22-.519l7.035-7.034zm.778 1.343l-6.49 6.49c.058.167.175.4.417.643c.243.242.476.36.643.418l6.49-6.49a1.7 1.7 0 0 0-.415-.646a1.7 1.7 0 0 0-.645-.415m3.538-3.538l-2.421 2.421c.193.121.392.276.588.472c.197.196.351.395.472.589l2.421-2.421a1.7 1.7 0 0 0-.418-.643a1.7 1.7 0 0 0-.642-.418"/></svg>
);

// Module icons
const ProductGeneratorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 16h6m-3-3v6m2-9V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M16.5 9.4L7.55 4.24"/><path d="M3.29 7L12 12l8.71-5M12 22V12"/></g></svg>
);
const ForecastingEngineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 56 56"><path fill="currentColor" d="M36.06 17.837c.868 0 1.601-.752 1.601-1.6V12.07c0-.887-.733-1.6-1.6-1.6c-.887 0-1.62.713-1.62 1.6v4.166c0 .848.733 1.6 1.62 1.6M24.858 21.54c.636.636 1.697.617 2.294 0c.58-.617.598-1.62 0-2.237l-2.988-2.97a1.583 1.583 0 0 0-2.237 0a1.606 1.606 0 0 0 0 2.256Zm20.113 0c.598.617 1.639.636 2.275 0l2.931-2.95a1.606 1.606 0 0 0 0-2.257a1.583 1.583 0 0 0-2.237 0l-2.97 2.97c-.616.617-.597 1.62 0 2.237M8.176 49.405h20.865c5.573 0 9.893-4.223 9.893-9.661v-.155c3.895-1.272 6.653-4.86 6.653-9.14a9.501 9.501 0 0 0-9.526-9.546a9.486 9.486 0 0 0-9.102 6.653c-2.314-2.642-5.554-4.184-9.218-4.184c-6.383 0-11.724 4.936-12.36 11.28C2.16 35.656 0 38.433 0 41.943c0 4.339 3.259 7.463 8.176 7.463M36.061 23.72c3.76 0 6.691 2.95 6.691 6.73c0 2.892-1.735 5.322-4.281 6.306c-1.234-3.684-4.724-6.268-9.121-6.538c.116-3.663 3.027-6.498 6.71-6.498M8.098 46.32c-3.278 0-5.014-1.89-5.014-4.3c0-2.044 1.196-3.857 4.03-4.609c.926-.25 1.274-.655 1.35-1.639c.444-5.4 4.455-9.295 9.276-9.295c3.741 0 6.653 2.064 8.446 5.65c.405.83.887 1.119 1.87 1.119c4.976 0 7.792 3.008 7.792 6.595c0 3.587-2.932 6.48-6.75 6.48Zm42.154-14.27h4.166c.867 0 1.581-.713 1.581-1.6a1.59 1.59 0 0 0-1.581-1.582h-4.166c-.867 0-1.6.714-1.6 1.582c0 .887.733 1.6 1.6 1.6M47.94 44.603c.617.617 1.62.598 2.237-.02c.618-.616.618-1.638 0-2.236l-2.97-2.95c-.616-.598-1.62-.618-2.236 0a1.607 1.607 0 0 0 0 2.256Z"/></svg>
);
const PageBuilderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3.987A2 2 0 0 1 2 19V5zm2 4h16V5H4v4zm4 2H4v8h4v-8zm2 8h10v-8H10v8z"/></svg>
);
const CompetitorIntelligenceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M30 14h-2A10.011 10.011 0 0 0 18 4V2a12.014 12.014 0 0 1 12 12Z"/><path fill="currentColor" d="M26 14h-2a6.007 6.007 0 0 0-6-6V6a8.01 8.01 0 0 1 8 8zM16 28v-3.04a9.912 9.912 0 0 0 7.318-2.208a1.848 1.848 0 0 0 .678-1.334a1.8 1.8 0 0 0-.524-1.36L18.414 15L21 12.414L19.586 11L17 13.586l-5.058-5.059a1.815 1.815 0 0 0-1.36-.523a1.845 1.845 0 0 0-1.334.679a9.957 9.957 0 0 0-.513 11.95L6.28 28H2v2h28v-2zm-5.32-17.906L21.906 21.32A8.001 8.001 0 0 1 10.68 10.094zM14 28H8.387l1.876-5.627A9.99 9.99 0 0 0 14 24.543z"/></svg>
);
const BundleCreatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"/></svg>
);
const AdGeneratorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M6.4 4.882v4.436l7.6 2.073V2.809L6.4 4.882Zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.072A1 1 0 0 0 15 11.391V2.809a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965v4.436Z"/><path d="M3.456 9.3H5.5V4.9H3.453a3.422 3.422 0 0 0 .003 4.4Zm2.044 1a1 1 0 0 0 1-1V4.9a1 1 0 0 0-1-1H3.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.555.555 0 0 0 .405.176H5.5Z"/><path d="m7.269 10.87l-2.51-.28l-.978 3.91h2.636l.852-3.63Zm-2.4-1.273a1 1 0 0 0-1.081.75l-.977 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.772l.852-3.63a1 1 0 0 0-.864-1.223l-2.51-.278Zm13.747-6.374a.5.5 0 0 1-.139.693l-1.5 1a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139ZM16.2 7.1a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5Zm.117 2.23a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.765l-1.38-1.16a.5.5 0 0 1-.062-.704Z"/></g></svg>
);
const TrendTargetingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7"/><path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z"/></g></svg>
);
const SeoContentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M1025.02 512c0-272.016-213.663-495.104-482.319-511.023c-5.536-.608-11.088-1.009-16.72-1.009c-1.664 0-3.328.176-4.992.224c-2.992-.048-5.968-.224-8.992-.224C229.117-.032-1.026 229.664-1.026 512s230.144 512.032 513.023 512.032c3.024 0 6-.176 9.008-.24c1.664.064 3.328.24 4.992.24c5.632 0 11.184-.4 16.72-1.009c268.64-15.92 482.304-238.976 482.303-511.023zm-95.451 164.832c-17.632-5.12-61.92-16.24-140.064-25.392c6.464-44.192 10-90.896 10-139.44c0-38.256-2.208-75.343-6.288-111.008c99.008-11.824 142.384-26.72 145.296-27.745l-11.92-33.584c22.24 53.088 34.56 111.296 34.56 172.336c0 58.193-11.28 113.761-31.583 164.833zM285.488 512.001c0-35.808 2.37-70.77 6.705-104.401c51.888 4.08 113.936 7.088 186.863 7.792v222.064c-70.992.688-131.664 3.568-182.688 7.473c-7.04-42.193-10.88-86.88-10.88-132.928zM542.945 68.223c78.464 22.736 145.648 131.695 175.744 276.111c-48.368 3.856-106.624 6.673-175.744 7.33V68.223zm-63.886.783V351.63c-68.368-.688-126.88-3.473-176.063-7.232C333.7 201.79 401.428 93.646 479.059 69.006zm0 632.223l.001 253.743c-72.4-22.976-136.192-118.575-169.36-247.023c47.76-3.504 104.096-6.063 169.359-6.72zm63.888 254.543l-.001-254.56c65.952.623 122.064 3.28 169.217 6.928c-32.608 130.128-96 226.416-169.216 247.632zm-.001-318.32l.001-222.032c73.311-.688 134.991-3.776 186.191-8a844.922 844.922 0 0 1 6.496 104.592c0 46.128-3.712 90.864-10.528 133.12c-50.416-4.08-110.8-7.008-182.16-7.68zm371.858-323.52c-9.664 3.008-50.063 14.48-131.023 24.032c-18.048-95.952-50.672-177.968-93.12-237.168C788.197 143.18 867.797 219.1 914.805 313.932zM358.82 90.589c-52.208 59.952-94.832 146.161-118.096 248.113c-72.48-7.856-115.921-17.089-133.312-21.281c50.72-104.64 141.04-186.752 251.408-226.832zM83.637 377.182c12.32 3.344 58.913 14.941 145.553 24.525a795.86 795.86 0 0 0-7.68 110.305c0 48.273 4.368 94.721 12.24 138.688c-74.4 8.033-120.16 17.649-140.688 22.609c-19.44-50.096-30.208-104.447-30.208-161.312c0-46.96 7.312-92.256 20.783-134.815zm37.457 355.166c23.264-4.944 64.912-12.464 126.592-18.928c24.288 89.712 63.792 165.616 111.136 219.968c-101.12-36.72-185.296-108.752-237.728-201.04zM690.662 923.18c38.224-53.264 68.48-125.024 87.296-208.801c63.408 7.28 103.216 15.792 123.296 20.864c-48.016 83.072-121.855 149.393-210.592 187.937z"/></svg>
);
const EmailSocialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29 9v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m26 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m26 0l-11.862 8.212a2 2 0 0 1-2.276 0L3 9"/></svg>
);
const SocialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1m-4 5V3M9 6l3-3l3 3"/></svg>
);
const AbTestingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M21.786 20.698c-1.792-.237-2.912-1.33-4.358-2.886c-.697-.75-1.428-1.577-2.324-2.32c1.396-1.164 2.41-2.518 3.483-3.502c1.01-.92 1.9-1.52 3.2-1.688v2.574l7.555-4.363l-7.556-4.363v2.652c-3.34.266-5.45 2.378-6.934 4.013c-.82.896-1.537 1.692-2.212 2.192c-.685.5-1.227.73-2.013.742H2.812v3.5h7.814c.786.01 1.33.24 2.017.742c1.02.743 2.095 2.18 3.552 3.568c1.312 1.258 3.162 2.46 5.592 2.65v2.663l7.556-4.36l-7.556-4.36v2.545z"/></svg>
);
const TestimonialsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g id="evaMessageCircleOutline0"><g id="evaMessageCircleOutline1"><g id="evaMessageCircleOutline2" fill="currentColor"><circle cx="12" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="8" cy="12" r="1"/><path d="M19.07 4.93a10 10 0 0 0-16.28 11a1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09a10 10 0 0 0 11-16.28Zm.83 8.36a8 8 0 0 1-11 6.08a3.26 3.26 0 0 0-1.25-.26a3.43 3.43 0 0 0-.56.05l-2.82.57l.57-2.82a3.09 3.09 0 0 0-.21-1.81a8 8 0 0 1 6.08-11a8 8 0 0 1 9.19 9.19Z"/></g></g></g></svg>
);
const LandingOptimizerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96v3.15M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></g></svg>
);
const OfferStackerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m14.594 4l-.313.28l-11 11l-.685.72l.687.72l9 9l.72.686l.72-.687l11-11l.28-.315V4H14.594zm.844 2H23v7.563l-10 10L5.437 16l10-10zM26 7v2h1v8.156l-9.5 9.438l-1.25-1.25l-1.406 1.406l1.937 1.97l.72.686l.69-.687L28.72 18.31L29 18V7h-3zm-6 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"/></svg>
);
const FaqObjectionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455Zm-.692-2H16V4H3v10.385L4.763 13ZM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.546 19H9a1 1 0 0 1-1-1v-1Z"/></svg>
);
const CheckoutFlowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 6.5h12.5l-1.586 5.55a2 2 0 0 1-1.923 1.45h-6.7a2 2 0 0 1-1.989-1.78L4.5 4.5h-2"/><g fill="currentColor" transform="translate(2 4)"><circle cx="5" cy="12" r="1"/><circle cx="13" cy="12" r="1"/></g></g></svg>
);
const FulfillmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46L19.5 9.5M6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3M3 6v9h.76c.55-.61 1.35-1 2.24-1c.89 0 1.69.39 2.24 1H15V6H3m7 1l3.5 3.5L10 14v-2.5H5v-2h5V7Z"/></svg>
);
const OnboardingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zm0 472.6c-119.6 0-216.6-97-216.6-216.6S136.4 39.4 256 39.4s216.6 97 216.6 216.6s-97 216.6-216.6 216.6zm-137.8-78.8l187.1-88.6l88.6-187.1l-187.1 88.6l-88.6 187.1zm167.3-108.3l-118.2 59.1l59.1-118.2l59.1 59.1z"/></svg>
);
const SubscriptionLoyaltyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76ZM15 9l-6 6m0-6h.01M15 15h.01"/></svg>
);
const ChurnClvIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.351 5.307a1.166 1.166 0 0 0-1.1-.778h-.903a1.041 1.041 0 0 0-.223 2.059l1.375.3a1.167 1.167 0 0 1-.25 2.307h-.777c-.508 0-.94-.324-1.1-.777m1.489-3.889V3.362m0 7V9.196m-4.864 4.302v-2.5h2.5"/><path d="M13.388 5.804a6.5 6.5 0 0 1-11.39 5.35M.612 8.196a6.5 6.5 0 0 1 11.39-5.35"/><path d="M12.002.502v2.5h-2.5"/></g></svg>
);
const FeedbackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a7.986 7.986 0 0 0-6.357 3.143L8 9.5H2v-6l2.219 2.219A9.982 9.982 0 0 1 12 2c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8Zm-8 8a8 8 0 0 0 14.357 4.857L16 14.5h6v6l-2.219-2.219A9.982 9.982 0 0 1 12 22C6.477 22 2 17.523 2 12h2Z"/></svg>
);

// Actions SVG icon for Run button
const ActionsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M232.4 114.49L88.32 26.35a16 16 0 0 0-16.2-.3A15.86 15.86 0 0 0 64 39.87v176.26A15.94 15.94 0 0 0 80 232a16.07 16.07 0 0 0 8.36-2.35l144.04-88.14a15.81 15.81 0 0 0 0-27ZM80 215.94V40l143.83 88Z"/></svg>
);

// Export SVG icon
const ExportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42ZM21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Z"/></svg>
);

const mainTabs = [
  { key: "build", label: "Build", icon: <BuildIcon />, color: "blue" },
  { key: "promote", label: "Promote", icon: <PromoteIcon />, color: "blue" },
  { key: "convert", label: "Convert", icon: <ConvertIcon />, color: "blue" },
  { key: "retain", label: "Retain", icon: <RetainIcon />, color: "blue" },
  { key: "analysis", label: "Analytics", icon: <AnalysisIcon />, color: "blue" },
];

// Tab data with 5-section format
const tabData = {
  build: {
    summary: {
      phase: "BUILD",
      health: "86%",
      healthStatus: "🟡",
      keyWins: [
        "Forecast accuracy +9%",
        "Bundle test improved AOV by 12%",
        "New product launch cycle reduced by 3 days",
        "Inventory turnover up 18%"
      ],
      nextAction: "Rebuild Pricing Model for new SKUs"
    },
    modules: [
      {
        id: "product-generator",
        name: "Product Generator",
        status: "🟢 Healthy",
        lastRun: "3 days ago",
        nextRun: "In 2 days",
        topOutput: "Smart Cooling Mug",
        description: "Generate product ideas, names, and categories"
      },
      {
        id: "forecasting-pricing",
        name: "Forecasting Engine",
        status: "🟡 Needs refresh",
        lastRun: "1 day ago",
        nextRun: "In 2 days",
        topOutput: "Accuracy dropped 4% in last 7 days",
        description: "Product demand predictions, pricing models"
      },
      {
        id: "page-builder",
        name: "Page Builder",
        status: "🟢 Healthy",
        lastRun: "2 days ago",
        nextRun: "—",
        topOutput: "Generated 8 new product pages",
        description: "Auto-generate product pages, landing pages, specs"
      },
      {
        id: "competitor-intelligence",
        name: "Competitor Intelligence",
        status: "🔴 Broken",
        lastRun: "5 days ago",
        topOutput: "Connection failed",
        description: "ASIN scraper, spy tools, trend matchers"
      },
      {
        id: "bundle-creator",
        name: "Bundle Creator",
        status: "🟢 Healthy",
        lastRun: "1 week ago",
        nextRun: "—",
        topOutput: "Created 3 high-performing bundles",
        description: "Smart upsell or cross-sell packages"
      }
    ],
    insights: [
      "This product page has high traffic but low conversions → Improve CTA",
      "Competitor XYZ raised their price → Opportunity to retarget at lower cost",
      "Run SEO Blog Generator — forecasted keyword volume spike for 'mini projector'"
    ],
    suggestedPipelines: [
      {
        name: "New Product Launch Stack",
        sequence: ["Product Generator", "Forecast", "Page Builder", "Ad Generator"]
      },
      {
        name: "Holiday Bundle Strategy",
        sequence: ["Bundle Creator", "Upsell", "Landing Page", "Promo Email"]
      }
    ],
    impact: {
      productsCreated: 12,
      avgForecastAccuracy: "92%",
      activeBundles: 4,
      topPerformer: "Wireless Sleep Mask (+19% AOV)"
    }
  },
  promote: {
    summary: {
      phase: "PROMOTE",
      health: "92%",
      healthStatus: "🟢",
      keyWins: [
        "Ad CTR improved by 15%",
        "Organic traffic up 23%"
      ],
      nextAction: "Scale winning ad campaigns"
    },
    modules: [
      {
        id: "ad-generators",
        name: "Ad Generators",
        status: "🟢 Healthy",
        lastRun: "1 day ago",
        nextRun: "—",
        topOutput: "Generated 12 high-converting ads",
        description: "Meta/TikTok/Google ad copy + visuals"
      },
      {
        id: "trend-targeting",
        name: "Trend Targeting",
        status: "🟡 Needs refresh",
        lastRun: "2 days ago",
        nextRun: "—",
        topOutput: "Found 3 trending keywords",
        description: "AI product-trend matcher"
      },
      {
        id: "seo-content",
        name: "SEO Content",
        status: "🟢 Healthy",
        lastRun: "4 days ago",
        nextRun: "—",
        topOutput: "Published 5 blog posts",
        description: "Blog generator, YouTube script generator"
      },
      {
        id: "email-social",
        name: "Email & Social Posts",
        status: "🟢 Healthy",
        lastRun: "1 day ago",
        nextRun: "—",
        topOutput: "Sent 3 email campaigns",
        description: "Email campaigns, tweets, Insta captions"
      },
      {
        id: "ab-testing",
        name: "A/B Testing Tools",
        status: "🟡 Needs refresh",
        lastRun: "3 days ago",
        nextRun: "—",
        topOutput: "Test completed, winner identified",
        description: "Headline or visual testing modules"
      }
    ],
    insights: [
      "Video ads performing 40% better than static → Focus on video content",
      "Instagram Stories have highest engagement → Increase Stories frequency",
      "Email open rates dropped 8% → Test new subject lines"
    ],
    suggestedPipelines: [
      {
        name: "Viral Content Strategy",
        sequence: ["Trend Targeting", "Content Generator", "Social Scheduler", "Engagement Tracker"]
      },
      {
        name: "Multi-Channel Campaign",
        sequence: ["Ad Generator", "Email Campaign", "Social Posts", "Analytics"]
      }
    ],
    impact: {
      totalImpressions: "2.4M",
      avgCTR: "3.2%",
      organicTraffic: "+23%",
      topPerformer: "Fitness Tracker Video (+45% CTR)"
    }
  },
  convert: {
    summary: {
      phase: "CONVERT",
      health: "78%",
      healthStatus: "🟡",
      keyWins: [
        "Landing page conversions +18%",
        "Checkout completion rate improved"
      ],
      nextAction: "Optimize checkout flow for mobile"
    },
    modules: [
      {
        id: "testimonials-reviews",
        name: "Testimonials & Reviews",
        status: "🟢 Healthy",
        lastRun: "2 days ago",
        nextRun: "—",
        topOutput: "Generated 25 customer reviews",
        description: "Real/fake generator or uploader"
      },
      {
        id: "landing-optimizer",
        name: "Landing Page Optimizer",
        status: "🟢 Healthy",
        lastRun: "1 day ago",
        nextRun: "—",
        topOutput: "Optimized 3 landing pages",
        description: "CTA testing, heatmap analysis"
      },
      {
        id: "offer-stacker",
        name: "Offer Stacker",
        status: "🟡 Needs refresh",
        lastRun: "3 days ago",
        nextRun: "—",
        topOutput: "Created 5 offer combinations",
        description: "Bonuses, timers, bundle tools"
      },
      {
        id: "faq-objection",
        name: "FAQ + Objection Handling",
        status: "🟠 Outdated",
        lastRun: "5 days ago",
        nextRun: "—",
        topOutput: "Response rate dropped 12%",
        description: "Chatbot builder, FAQ gen"
      },
      {
        id: "checkout-flow",
        name: "Checkout Flow",
        status: "🔴 Broken",
        lastRun: "1 week ago",
        nextRun: "—",
        topOutput: "Payment gateway error",
        description: "Funnel builder or integration guide"
      }
    ],
    insights: [
      "Mobile checkout abandonment is 35% higher → Optimize mobile experience",
      "Free shipping threshold increases AOV by 22% → Test new thresholds",
      "Guest checkout conversions up 18% → Simplify guest flow"
    ],
    suggestedPipelines: [
      {
        name: "Conversion Optimization Stack",
        sequence: ["Landing Optimizer", "A/B Testing", "Checkout Flow", "Analytics"]
      },
      {
        name: "Trust Building Flow",
        sequence: ["Review Generator", "Trust Badges", "FAQ Builder", "Social Proof"]
      }
    ],
    impact: {
      conversionRate: "3.8%",
      avgOrderValue: "$89.50",
      checkoutCompletion: "67%",
      topPerformer: "Product Page A (+24% conversions)"
    }
  },
  retain: {
    summary: {
      phase: "RETAIN",
      health: "85%",
      healthStatus: "🟡",
      keyWins: [
        "Customer lifetime value +14%",
        "Retention rate improved 8%"
      ],
      nextAction: "Implement personalized loyalty program"
    },
    modules: [
      {
        id: "fulfillment-tools",
        name: "Fulfillment Tools",
        status: "🟢 Healthy",
        lastRun: "1 day ago",
        nextRun: "—",
        topOutput: "Tracked 45 orders",
        description: "Order tracking templates, delivery checklists"
      },
      {
        id: "onboarding-flows",
        name: "Onboarding Flows",
        status: "🟢 Healthy",
        lastRun: "2 days ago",
        nextRun: "—",
        topOutput: "Onboarded 23 new customers",
        description: "Welcome emails, tutorials"
      },
      {
        id: "subscription-loyalty",
        name: "Subscription & Loyalty",
        status: "🟡 Needs refresh",
        lastRun: "4 days ago",
        nextRun: "—",
        topOutput: "Loyalty program engagement up",
        description: "Auto-renewal flows, referral tools"
      },
      {
        id: "churn-clv",
        name: "Churn & CLV Models",
        status: "🟠 Outdated",
        lastRun: "3 days ago",
        nextRun: "—",
        topOutput: "Prediction accuracy dropped 6%",
        description: "Who's likely to cancel or buy again"
      },
      {
        id: "feedback-collectors",
        name: "Feedback Collectors",
        status: "🔴 Broken",
        lastRun: "1 week ago",
        nextRun: "—",
        topOutput: "Survey system offline",
        description: "Review prompts, surveys, auto-analyze tools"
      }
    ],
    insights: [
      "Customers who engage with loyalty program have 3x higher retention → Expand program",
      "First-time buyers need more support → Enhance onboarding",
      "Subscription cancellations peak on day 30 → Add retention touchpoint"
    ],
    suggestedPipelines: [
      {
        name: "Customer Success Flow",
        sequence: ["Onboarding", "Support", "Feedback", "Loyalty"]
      },
      {
        name: "Retention Optimization",
        sequence: ["Churn Prediction", "Personalized Offers", "Loyalty Rewards", "Re-engagement"]
      }
    ],
    impact: {
      retentionRate: "78%",
      avgLifetimeValue: "$245",
      loyaltyEngagement: "62%",
      topPerformer: "Welcome Series (+31% activation)"
    }
  },
  analysis: {
    summary: {
      phase: "ANALYSIS",
      health: "-",
      healthStatus: "",
      keyWins: [],
      nextAction: "-"
    },
    modules: [
    ],
    insights: ["Analysis features coming soon."],
    suggestedPipelines: [],
    impact: { topPerformer: "-" }
  }
};

export default function PipelineControllerPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("build");
  const [activeFilter, setActiveFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("30d");

  const getTabColor = (tabKey: string) => {
    const tab = mainTabs.find(t => t.key === tabKey);
    return tab?.color || "gray";
  };

  const getHealthIcon = (status: string) => {
    if (status.includes('🟢')) return <HealthGoodIcon />;
    if (status.includes('🟡')) return <HealthOkIcon />;
    if (status.includes('🟠')) return <HealthBadIcon />;
    if (status.includes('🔴')) return <HealthUrgentIcon />;
    return <HealthOkIcon />;
  };

  const getModuleIcon = (moduleId: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'product-generator': <ProductGeneratorIcon />,
      'forecasting-pricing': <ForecastingEngineIcon />,
      'page-builder': <PageBuilderIcon />,
      'competitor-intelligence': <CompetitorIntelligenceIcon />,
      'bundle-creator': <BundleCreatorIcon />,
      'ad-generators': <AdGeneratorsIcon />,
      'trend-targeting': <TrendTargetingIcon />,
      'seo-content': <SeoContentIcon />,
      'email-social': <EmailSocialIcon />,
      'ab-testing': <AbTestingIcon />,
      'testimonials-reviews': <TestimonialsIcon />,
      'landing-optimizer': <LandingOptimizerIcon />,
      'offer-stacker': <OfferStackerIcon />,
      'faq-objection': <FaqObjectionIcon />,
      'checkout-flow': <CheckoutFlowIcon />,
      'fulfillment-tools': <FulfillmentIcon />,
      'onboarding-flows': <OnboardingIcon />,
      'subscription-loyalty': <SubscriptionLoyaltyIcon />,
      'churn-clv': <ChurnClvIcon />,
      'feedback-collectors': <FeedbackIcon />
    };
    return iconMap[moduleId] || <ProductGeneratorIcon />;
  };

  const currentTabData = tabData[activeTab as keyof typeof tabData];

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "modules", label: "Modules" },
    { value: "analytics", label: "Analytics" },
    { value: "insights", label: "Insights" },
    { value: "pipelines", label: "Pipelines" },
    { value: "impact", label: "Impact" }
  ];

  const shouldShowSection = (section: string) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "modules" && section === "modules") return true;
    if (activeFilter === "analytics" && (section === "summary" || section === "smartRecommendations")) return true;
    if (activeFilter === "insights" && section === "insights") return true;
    if (activeFilter === "pipelines" && section === "suggestedPipelines") return true;
    if (activeFilter === "impact" && section === "summary") return true;
    return false;
  };

  // Analytics data
  const analyticsData = {
    smartRecommendations: [
      "Bundle your top 2 products — they're often bought together"
    ],
    marketing: [
      "Try TikTok ads for trending products"
    ],
    operations: [
      "Optimize inventory for Q3"
    ]
  };
  const smartTabs = [
    { key: 'general', label: 'General', data: analyticsData.smartRecommendations },
    { key: 'marketing', label: 'Marketing', data: analyticsData.marketing },
    { key: 'operations', label: 'Operations', data: analyticsData.operations }
  ];
  const [activeSmartTab, setActiveSmartTab] = useState('general');

  // Inline ProductGeneratorTabs for use inside the Product Generator module card
  function ProductGeneratorTabs() {
    const [activeTab, setActiveTab] = useState<'general' | 'action'>('general');
    return (
      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeTab === 'general' ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--background)]' : 'border-transparent text-[var(--text-secondary)] bg-transparent hover:text-[var(--primary)]'}`}
            onClick={() => setActiveTab('general')}
          >
            General Configuration
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeTab === 'action' ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--background)]' : 'border-transparent text-[var(--text-secondary)] bg-transparent hover:text-[var(--primary)]'}`}
            onClick={() => setActiveTab('action')}
          >
            Action Configurations
          </button>
        </div>
        <div className="p-4 border border-[var(--border)] rounded-b-lg bg-[var(--background)]">
          {activeTab === 'general' && (
            <div>
              {/* General Configuration content goes here */}
              <p className="text-[var(--text-secondary)]">General configuration options for the Product Generator will appear here.</p>
            </div>
          )}
          {activeTab === 'action' && (
            <div>
              {/* Action Configurations content goes here */}
              <p className="text-[var(--text-secondary)]">Action configuration options for the Product Generator will appear here.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] px-0">
      {/* Header */}
      <div className="w-full bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-8 py-4" style={{minHeight: 72}}>
        <div className="flex items-baseline gap-4">
          <Link href="/">
            <Image src="/FullAnanovaSw.svg" alt="Avonova Logo" width={74} height={22} className="h-5 w-auto" priority />
          </Link>
          <span className="text-xl text-[var(--text-secondary)] mx-3">|</span>
          <span className="text-lg font-semibold text-[var(--text-primary)]">Pipeline Controller</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/buy-credits" className="px-3 py-1 rounded-lg bg-[var(--surface)] dark:bg-gray-800 text-[var(--text-primary)] dark:text-white font-semibold hover:bg-[var(--border)] dark:hover:bg-gray-700 transition-colors border border-[var(--border)] flex items-center gap-1 text-sm" title={t('buy_credits')}>
            <span className="w-4 h-4 inline-block align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" className="w-4 h-4"><g><path d="M37.972 27.975A12.931 12.931 0 0 0 40 21c0-7.18-5.82-13-13-13c-2.567 0-4.96.744-6.975 2.027a16.953 16.953 0 0 0-3.954.698a15.069 15.069 0 0 1 3.326-2.658A14.93 14.93 0 0 1 26.95 6H27c8.284 0 15 6.716 15 15c0 .135-.002.269-.005.403l-.002.048a14.921 14.921 0 0 1-2.06 7.152a15.065 15.065 0 0 1-2.658 3.326c.381-1.263.62-2.587.697-3.954Z"/><path fillRule="evenodd" d="M25.772 22.667A4.001 4.001 0 0 0 22 20v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 20 34v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666ZM20 22a2 2 0 1 0 0 4v-4Zm2 10a2 2 0 1 0 0-4v4Z" clipRule="evenodd"/><path fillRule="evenodd" d="M36 27c0 8.284-6.716 15-15 15c-8.284 0-15-6.716-15-15c0-8.284 6.716-15 15-15c8.284 0 15 6.716 15 15Zm-2 0c0 7.18-5.82 13-13 13S8 34.18 8 27s5.82-13 13-13s13 5.82 13 15Z" clipRule="evenodd"/></g></svg>
            </span>
            {t('buy_credits')}
          </Link>
          <Link href="/settings" className="px-3 py-1 rounded-lg bg-[var(--surface)] dark:bg-gray-800 text-[var(--text-primary)] dark:text-white font-semibold hover:bg-[var(--border)] dark:hover:bg-gray-700 transition-colors border border-[var(--border)] flex items-center gap-1 text-sm" title={t('settings')}>
            <span className="w-4 h-4 inline-block align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" fill="none" className="w-4 h-4"><g stroke="currentColor" strokeWidth=".933" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"><path d="M7.5.5c.351 0 .697.026 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447c.221.396.395.822.514 1.27l1.53.533a7.066 7.066 0 0 1-.017 1.948l-1.539.508a5.567 5.567 0 0 1-.536 1.26l.704 1.46a7.041 7.041 0 0 1-1.389 1.365l-1.447-.73a5.507 5.507 0 0 1-1.27.514l-.533 1.53a7.066 7.066 0 0 1-1.948-.017l-.508-1.539a5.567 5.567 0 0 1-1.26-.536l-1.46.704a7.041 7.041 0 0 1-1.365-1.389l.73-1.447a5.565 5.565 0 0 1-.514-1.27l-1.53-.534a7.066 7.066 0 0 1 .017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7.041 7.041 0 0 1 1.389-1.365l1.447.73a5.507 5.507 0 0 1 1.27-.514l.534-1.53A7.06 7.06 0 0 1 7.5.5z"/><circle cx="7.5" cy="7.5" r="3"/></g></svg>
            </span>
            {t('settings')}
          </Link>
          <button className="px-3 py-1 rounded-lg bg-[var(--surface)] dark:bg-gray-800 text-[var(--text-primary)] dark:text-white font-semibold hover:bg-[var(--border)] dark:hover:bg-gray-700 transition-colors border border-[var(--border)] flex items-center gap-1 text-sm" title={t('refresh')}>
            <span className="w-4 h-4 inline-block align-middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M511.28 0C255.472 0 47.36 208.126 47.36 463.934c0 240.448 185.296 441.536 423.568 462.096l-91.856 46.56c-11.344 6.223-18.096 20.223-11.376 31.279l3.248 8.4c6.752 11.056 21.376 14.976 32.687 8.783l153.312-78.496c.193-.128.4-.095.593-.223l10.288-5.632c5.68-3.12 9.44-8.224 10.943-13.903c1.569-5.68.85-12-2.527-17.504l-6.096-10c-.095-.193-.288-.32-.4-.496L475.055 746.83c-6.72-11.056-21.311-14.976-32.687-8.784l-7.44 5.184c-11.344 6.192-12.096 22.192-5.376 33.217l55.872 86.672c-.304-.016-.576-.128-.865-.144c-209.28-13.727-373.2-189.039-373.2-399.039C111.36 243.408 290.767 64 511.28 64c220.544 0 400.96 179.408 400.96 399.937c0 126.976-58.32 243.6-160 319.968c-14.127 10.624-16.975 30.689-6.367 44.817c10.624 14.16 30.689 16.976 44.817 6.368c117.936-88.592 185.567-223.872 185.567-371.152C976.24 208.129 767.105 0 511.28 0z"/></svg>
            </span>
            {t('refresh')}
          </button>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-2">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] dark:text-white mb-1">Pipeline Controller</h1>
        <p className="text-[var(--text-secondary)] dark:text-gray-300 text-lg mb-6">Monitor, optimize, and launch tools that power your business.</p>
      </div>

      {/* Main Tab Navigation */}
      <div className="w-full flex justify-center bg-[var(--background)] border-b border-[var(--border)] shadow-sm">
        <div className="flex gap-2 w-full max-w-5xl mx-auto py-4 justify-center px-4">
          {mainTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`group relative flex flex-row items-center justify-center gap-2 px-4 py-2 min-w-[160px] max-w-[320px] focus:outline-none transition-all duration-200 rounded-xl font-semibold text-base border-2 whitespace-nowrap
                ${activeTab === tab.key
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md'
                  : 'bg-white dark:bg-[#23262f] text-[var(--primary)] dark:text-white border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'}
              `}
              style={{ minWidth: 0 }}
            >
              <span className={`flex items-center justify-center text-2xl transition-all duration-200 ${activeTab === tab.key ? 'text-white' : 'text-[var(--primary)] dark:text-white group-hover:text-white'}`}>{tab.icon}</span>
              <span className="text-base font-semibold tracking-wide whitespace-nowrap dark:text-white">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-semibold text-[var(--text-primary)]">Filter:</label>
          <select 
            value={activeFilter} 
            onChange={(e) => setActiveFilter(e.target.value)}
            className="px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] dark:bg-[#23262f] text-[var(--text-primary)] dark:text-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label className="text-sm font-semibold text-[var(--text-primary)] ml-4">Time Range:</label>
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] dark:bg-[#23262f] text-[var(--text-primary)] dark:text-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>

      {/* Content below the tab bars */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 🧠 Summary Panel & Smart Recommendations (Side by Side) - All Tabs */}
        {(activeTab === "build" || activeTab === "promote" || activeTab === "convert" || activeTab === "retain") && (
          <div className="flex gap-8 mb-10">
            {/* Summary Panel */}
            <div className="bg-[var(--surface)] rounded-2xl shadow p-10 border border-[var(--border)] w-[600px] h-[400px] flex flex-col justify-between">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[var(--primary)]"><SummaryIcon /></span>
                Summary Panel
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                {/* Left column: Metrics based on tab */}
                <div className="space-y-6">
                  <div>
                    <div className="text-base text-[var(--text-secondary)] mb-1">
                      {activeTab === "build" && "Avg Forecast Accuracy"}
                      {activeTab === "promote" && "Total Impressions"}
                      {activeTab === "convert" && "Conversion Rate"}
                      {activeTab === "retain" && "Retention Rate"}
                    </div>
                    <div className="text-3xl font-extrabold text-[var(--text-primary)]">
                      {activeTab === "build" && "92%"}
                      {activeTab === "promote" && "2.4M"}
                      {activeTab === "convert" && "3.8%"}
                      {activeTab === "retain" && "78%"}
                    </div>
                  </div>
                  <div>
                    <div className="text-base text-[var(--text-secondary)] mb-2">Top Performers</div>
                    <ul className="list-disc pl-6 space-y-1 text-base text-[var(--text-primary)] max-h-[180px] overflow-y-auto">
                      {Array.isArray(currentTabData.impact.topPerformer)
                        ? currentTabData.impact.topPerformer.map((perf, idx) => <li key={idx}>{perf}</li>)
                        : <li>{currentTabData.impact.topPerformer}</li>
                      }
                    </ul>
                  </div>
                </div>
                {/* Right column: Overall Health & Key Wins */}
                <div className="space-y-6">
                  <div>
                    <div className="text-base text-[var(--text-secondary)] mb-1">Overall Health</div>
                    <div className="text-3xl font-extrabold text-[var(--text-primary)] flex items-center gap-3">
                      {getHealthIcon(currentTabData.summary.healthStatus)}
                      {currentTabData.summary.health}
                    </div>
                  </div>
                  <div>
                    <div className="text-base text-[var(--text-secondary)] mb-2">Key Wins</div>
                    <ul className="list-disc pl-6 space-y-1 text-base text-[var(--text-primary)] max-h-[180px] overflow-y-auto">
                      {currentTabData.summary.keyWins.map((win, idx) => (
                        <li key={idx}>{win}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Recommendations with Tabs */}
            <div className="bg-[var(--surface)] rounded-2xl shadow p-10 border border-[var(--border)] w-[600px] h-[400px] flex flex-col">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[var(--primary)]"><RecommendationsIcon /></span>
                Smart Recommendations
              </h2>
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                {smartTabs.map(tab => (
                  <button
                    key={tab.key}
                    className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${activeSmartTab === tab.key ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--background)]' : 'border-transparent text-[var(--text-secondary)] bg-transparent hover:text-[var(--primary)]'}`}
                    onClick={() => setActiveSmartTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* Tab Content - only show up to 5 recommendations, no scroll */}
              <div>
                {(smartTabs.find(tab => tab.key === activeSmartTab)?.data.slice(0, 5) || []).map((recommendation, index) => (
                  <div key={index} className="bg-[var(--background)] rounded-lg p-4 border border-[var(--border)] hover:border-[var(--primary)] transition-colors mb-3">
                    <div className="flex items-start gap-3">
                      <div className="text-[var(--primary)] text-lg">
                        {/* New lightbulb SVG icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 4a5.25 5.25 0 0 0-3.049 9.525c.455.325.799.862.799 1.5v1.725c0 .138.112.25.25.25h4a.25.25 0 0 0 .25-.25v-1.726c0-.637.344-1.174.799-1.5A5.25 5.25 0 0 0 12 4M5.25 9.25a6.75 6.75 0 1 1 10.67 5.495c-.126.09-.17.202-.17.28v1.725A1.75 1.75 0 0 1 14 18.5h-4a1.75 1.75 0 0 1-1.75-1.75v-1.726c0-.077-.044-.189-.17-.279A6.743 6.743 0 0 1 5.25 9.25m3 11.5A.75.75 0 0 1 9 20h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[var(--text-primary)] text-base">{recommendation}</p>
                      </div>
                      <button className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors text-sm font-semibold">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 📊 General Analytics Tab - Analysis Tab Only */}
        {activeTab === "analysis" && (
          <div className="mb-8">
            {/* New Summary Panel for Analysis Tab */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[var(--primary)]">3.8%</span>
                <span className="text-sm text-[var(--text-secondary)] mt-2">Overall CVR</span>
              </div>
              <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[var(--primary)]">+12%</span>
                <span className="text-sm text-[var(--text-secondary)] mt-2">Weekly Growth</span>
              </div>
              <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[var(--primary)]">4.2/5</span>
                <span className="text-sm text-[var(--text-secondary)] mt-2">Avg Feedback</span>
              </div>
              <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[var(--primary)]">Landing Optimizer</span>
                <span className="text-sm text-[var(--text-secondary)] mt-2">Top Tool</span>
              </div>
            </div>

            {/* Actionable Insights Sidebar/Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z"/></svg>
                </span>
                Actionable Insights
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[var(--text-primary)]">
                  <span className="text-green-500">●</span> Landing Optimizer improved CVR by 18% — try running it on your top 3 pages
                </li>
                <li className="flex items-center gap-2 text-[var(--text-primary)]">
                  <span className="text-yellow-500">●</span> Email open rates dropped 8% — test new subject lines
                </li>
                <li className="flex items-center gap-2 text-[var(--text-primary)]">
                  <span className="text-blue-500">●</span> Video ads performing 40% better than static — focus on video content
                </li>
              </ul>
            </div>

            {/* Chart Placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-[var(--background)] rounded-lg p-4 border border-[var(--border)] flex flex-col items-center justify-center h-64">
                <span className="text-[var(--primary)] font-bold mb-2">Trends Chart</span>
                <span className="text-[var(--text-secondary)]">[Line/Bar Chart Placeholder]</span>
              </div>
              <div className="bg-[var(--background)] rounded-lg p-4 border border-[var(--border)] flex flex-col items-center justify-center h-64">
                <span className="text-[var(--primary)] font-bold mb-2">Audience Breakdown</span>
                <span className="text-[var(--text-secondary)]">[Pie/Donut Chart Placeholder]</span>
              </div>
              <div className="bg-[var(--background)] rounded-lg p-4 border border-[var(--border)] flex flex-col items-center justify-center h-64">
                <span className="text-[var(--primary)] font-bold mb-2">Tool Usage</span>
                <span className="text-[var(--text-secondary)]">[Bar Chart Placeholder]</span>
              </div>
            </div>

            {/* Filters and Export/Share */}
            <div className="flex items-center gap-4 mb-8">
              <label className="text-sm font-semibold text-[var(--text-primary)]">Time Range:</label>
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] dark:bg-[#23262f] text-[var(--text-primary)] dark:text-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="custom">Custom</option>
              </select>
              <button className="ml-auto px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors flex items-center gap-2">
                <ExportIcon />
                Export/Share
              </button>
            </div>

            {/* Collapsible Panels for Analytics Sections */}
            <div className="space-y-4">
              {/* User Actions */}
              <details className="bg-[var(--background)] rounded-lg border border-[var(--border)] p-4" open>
                <summary className="font-semibold text-[var(--primary)] cursor-pointer">User Actions</summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Total Actions</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Total number of actions performed">1,247</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Actions Today</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Number of actions performed today">89</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Avg per Session</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Average actions per session">12.3</span>
                  </div>
                </div>
              </details>
              {/* Tool Usage */}
              <details className="bg-[var(--background)] rounded-lg border border-[var(--border)] p-4">
                <summary className="font-semibold text-[var(--primary)] cursor-pointer">Tool Usage</summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Product Generator</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Number of Product Generator runs">156 runs</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Ad Generators</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Number of Ad Generators runs">89 runs</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Landing Optimizer</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Number of Landing Optimizer runs">67 runs</span>
                  </div>
                </div>
              </details>
              {/* Output Quality */}
              <details className="bg-[var(--background)] rounded-lg border border-[var(--border)] p-4">
                <summary className="font-semibold text-[var(--primary)] cursor-pointer">Output Quality</summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Avg Quality Score</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Average output quality score">8.7/10</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">High Quality (8+)</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Percentage of outputs rated 8+">78%</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Needs Revision</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Percentage of outputs needing revision">22%</span>
                  </div>
                </div>
              </details>
              {/* Audience Insights */}
              <details className="bg-[var(--background)] rounded-lg border border-[var(--border)] p-4">
                <summary className="font-semibold text-[var(--primary)] cursor-pointer">Audience Insights</summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Total Audiences</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Total number of audiences">24</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Active Audiences</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Number of active audiences">18</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Avg Performance</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Average audience performance score">7.2/10</span>
                  </div>
                </div>
              </details>
              {/* Performance Trends */}
              <details className="bg-[var(--background)] rounded-lg border border-[var(--border)] p-4">
                <summary className="font-semibold text-[var(--primary)] cursor-pointer">Performance Trends</summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Weekly Growth</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Weekly growth percentage">+12%</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Monthly Growth</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Monthly growth percentage">+28%</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[var(--text-secondary)]">Peak Usage Time</span>
                    <span className="text-[var(--text-primary)] font-semibold" title="Most active usage time">2-4 PM</span>
                  </div>
                </div>
              </details>
              {/* Personalization Placeholder */}
              <div className="bg-[var(--background)] rounded-lg border border-[var(--border)] p-4 flex items-center gap-4">
                <span className="text-[var(--primary)] font-semibold">Personalize your dashboard:</span>
                <span className="text-[var(--text-secondary)]">[Pin/rearrange metrics coming soon]</span>
              </div>
            </div>
          </div>
        )}

        {/* ⚙️ 2. Modules Section (Moved to Top) */}
        {shouldShowSection("modules") && activeTab !== "analysis" && (
          <>
            {/* Debug info - remove this later */}
            <div className="mb-4 p-2 bg-yellow-100 text-[var(--text-primary)] text-xs">
              Debug: activeFilter={activeFilter}, shouldShowSection("modules")={shouldShowSection("modules")}, modules.length={currentTabData.modules?.length || 0}
            </div>
          </>
        ) && (
          <div className="bg-[var(--surface)] rounded-xl shadow p-6 border border-[var(--border)] mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-[var(--primary)]">
                {/* Pipelines SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16 9v2H8V9h2V8H4v2H2V2h2v2h8a2 2 0 0 1 2 2v3h2m-6 6v3a2 2 0 0 0 2 2h8v2h2v-8h-2v2h-6v-1h2v-2H8v2h2Z"/></svg>
              </span>
              Pipelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTabData.modules && currentTabData.modules.length > 0 ? (
                currentTabData.modules.map((module) => (
                <div key={module.id} className="bg-[var(--background)] rounded-lg p-4 border border-[var(--border)]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        <span className="text-[var(--primary)]">{getModuleIcon(module.id)}</span>
                        {module.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">{module.description}</p>
                    </div>
                    <Link href={`/pipeline/${module.id}`} className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
                      </svg>
                    </Link>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--text-secondary)]">Status:</span>
                      <span className="text-[var(--text-primary)] flex items-center gap-2">
                        {getHealthIcon(module.status)}
                        {module.status.replace(/[🟢🟡🟠🔴]/g, '').trim()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--text-secondary)]">Last run:</span>
                      <span className="text-[var(--text-primary)]">{module.lastRun}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--text-secondary)]">Next run:</span>
                      <span className="text-[var(--text-primary)]">{module.nextRun || '—'}</span>
                    </div>
                  </div>

                  {/* Product Generator: Remove tab UI for General Configuration and Action Configurations from the module card */}
                  {/* (Tabs will be added to the module's own page instead) */}

                  {/* Single Run button at the bottom */}
                  <button className="w-full px-3 py-2 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors text-center text-sm mt-2 flex items-center justify-center gap-2">
                    <ActionsIcon />
                    Run
                  </button>
                </div>
              ))
              ) : (
                <div className="col-span-full text-center py-8 text-[var(--text-secondary)]">
                  No modules found for this phase.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}