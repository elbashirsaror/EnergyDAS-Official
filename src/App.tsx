/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Download, Check, FileArchive } from 'lucide-react';
import { ExactEnergyDasPage } from './components/ExactEnergyDasPage';

import { PortalDemoModal } from './components/PortalDemoModal';
import { StudioDemoModal } from './components/StudioDemoModal';
import { EngineeringQuoteModal } from './components/EngineeringQuoteModal';
import { NewsDetailModal } from './components/NewsDetailModal';
import { PartnerModal } from './components/PartnerModal';
import { ProductDetailModal } from './components/ProductDetailModal';

import { ProductCodeItem, NewsItem, PRODUCT_CATALOG } from './data/energyDasData';

export default function App() {
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [studioModalOpen, setStudioModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductCodeItem | null>(null);

  const handleOpenContactModal = () => {
    setQuoteModalOpen(true);
  };

  const handleSystemsSpecs = () => {
    setSelectedProduct(PRODUCT_CATALOG[0]);
  };

  return (
    /* <div className="min-h-screen bg-[#d2d6dc] text-slate-900 font-sans flex flex-col justify-center items-center p-0 sm:p-2 lg:p-4 selection:bg-blue-600 selection:text-white">
      {/* Direct Project ZIP Download Banner */}
      <div className="w-full max-w-[1360px] mb-2 px-3 py-1.5 rounded bg-slate-800 text-slate-200 text-xs flex flex-wrap items-center justify-between gap-2 shadow-md">
        <div className="flex items-center gap-2">
          <FileArchive className="h-4 w-4 text-cyan-400" />
          <span className="font-semibold text-white">Project Archive Ready:</span>
          <span className="text-slate-300 font-mono text-[11px]">energydas-landing-page.zip (Full Source Code & Assets)</span>
        </div>
        <a
          href="/energydas-landing-page.zip"
          download="energydas-landing-page.zip"
          className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1 rounded text-xs transition-colors shadow-sm cursor-pointer"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Click to Download ZIP</span>
        </a>
      </div>

      {/* The Exact energyDAS Home Page Container as depicted in the uploaded reference */}
      <ExactEnergyDasPage
        onOpenPortalModal={() => setPortalModalOpen(true)}
        onOpenPartnerModal={() => setPartnerModalOpen(true)}
        onOpenAuditModal={handleOpenContactModal}
        onOpenStudioModal={() => setStudioModalOpen(true)}
        onOpenSystemsSpecs={handleSystemsSpecs}
        onSelectNews={(news) => setSelectedNews(news)}
      />

      {/* Interactive Modals when User Explores the Page */}
      <PortalDemoModal
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
        onConsult={handleOpenContactModal}
      />

      <StudioDemoModal
        isOpen={studioModalOpen}
        onClose={() => setStudioModalOpen(false)}
        onConsult={handleOpenContactModal}
      />

      <EngineeringQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
        onConsult={handleOpenContactModal}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
        onContact={handleOpenContactModal}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={() => setQuoteModalOpen(true)}
      />
    </div>*/
  );
}
