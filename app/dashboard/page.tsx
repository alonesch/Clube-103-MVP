"use client";

import { useState } from 'react';
import { Header } from '@/modules/dashboard/components/Header';
import { Sidebar } from '@/modules/dashboard/components/Sidebar';
import { ContentGrid } from '@/modules/dashboard/components/ContentGrid';

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Header */}
      <Header 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Layout principal */}
      <div className="flex pt-16">
        {/* Sidebar Desktop + Mobile Drawer */}
        <Sidebar 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Conteúdo Principal */}
        <main className="flex-1 p-6 lg:p-8 lg:ml-[220px]">
          <div className="max-w-7xl mx-auto">
            <h1 className="mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Meus Conteúdos
            </h1>
            <ContentGrid />
          </div>
        </main>
      </div>

      {/* Overlay para mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
