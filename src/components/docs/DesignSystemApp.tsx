"use client";

import { useState } from "react";
import { OverlaySidebar, OverlaySidebarGroup, OverlaySidebarItem } from "@/components/ui/OverlaySidebar";
import HomeView from "./HomeView";
import MenuSpecification from "./MenuSpecification";
import ButtonSpecification from "./ButtonSpecification";
import GradientButtonSpecification from "./GradientButtonSpecification";
import OverlaySidebarSpecification from "./OverlaySidebarSpecification";
import { navigationItems, type SectionKey } from "./navigation";

export default function DesignSystemApp() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigateTo = (section: SectionKey) => setActiveSection(section);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-sky-500/30 selection:text-sky-200">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-start gap-4 px-6">
          <button type="button" onClick={() => setSidebarOpen(true)} aria-expanded={sidebarOpen} aria-controls="deva-overlay-navigation" aria-label="ナビゲーションを開く" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90 backdrop-blur-xl transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 text-sm font-bold text-white shadow-[0_0_20px_rgba(56,189,248,0.5)]">DV</div>
            <div>
              <span className="text-base font-bold tracking-tight text-white">DeVa Design System</span>
              <span className="ml-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-mono text-xs text-sky-400">v0.1.0-alpha</span>
            </div>
          </div>
        </div>
      </header>

      <OverlaySidebar id="deva-overlay-navigation" open={sidebarOpen} onClose={() => setSidebarOpen(false)} title="DeVa Design System ナビゲーション">
        <p className="mb-3 px-4 font-mono text-xs uppercase tracking-widest text-white/55">Pages &amp; Components</p>
        <OverlaySidebarGroup>
          {navigationItems.map(({ key, label }) => (
            <OverlaySidebarItem key={key} selected={activeSection === key} onClick={() => { navigateTo(key); setSidebarOpen(false); }}>
              {label}
            </OverlaySidebarItem>
          ))}
        </OverlaySidebarGroup>
      </OverlaySidebar>

      <main className="mx-auto max-w-7xl space-y-16 px-6 py-12">
        {activeSection === "home" && <HomeView onNavigate={navigateTo} onOpenSidebar={() => setSidebarOpen(true)} />}
        {activeSection === "menu" && <MenuSpecification />}
        {activeSection === "standard" && <ButtonSpecification />}
        {activeSection === "gradient" && <GradientButtonSpecification />}
        {activeSection === "sidebar" && <OverlaySidebarSpecification onOpenSidebar={() => setSidebarOpen(true)} />}
      </main>

      <footer className="mt-20 border-t border-white/10 py-10 text-center text-xs text-neutral-500">
        <p>DeVa Design System • Technical Documentation &amp; Specification</p>
      </footer>
    </div>
  );
}
