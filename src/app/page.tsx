"use client";

import React, { useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { Button } from "@/components/ui/Button";
import { Menu, MenuGroup, MenuItem, MenuDivider } from "@/components/ui/Menu";
import { OverlaySidebar, OverlaySidebarGroup, OverlaySidebarItem } from "@/components/ui/OverlaySidebar";
import { colorPresets, ColorPresetKey } from "@/tokens/colors";
import { blurTokens, BlurLevel } from "@/tokens/blur";

// 通常ボタン用の背景オプション
const standardButtonBgOptions = [
  {
    id: "scenic-dusk",
    name: "風景グラデーション (すりガラス確認用)",
    type: "gradient",
    style: "linear-gradient(180deg, #1e293b 0%, #334155 35%, #475569 60%, #fdba74 90%, #f97316 100%)",
    autoBorder: false,
  },
  {
    id: "pure-white",
    name: "白・単調な背景 (枠表示の推奨)",
    type: "solid",
    style: "#ffffff",
    autoBorder: true,
  },
  {
    id: "soft-gray",
    name: "ライトグレー単色背景",
    type: "solid",
    style: "#f4f4f5",
    autoBorder: true,
  },
  {
    id: "pure-black",
    name: "ダークプレーン背景",
    type: "solid",
    style: "#09090b",
    autoBorder: true,
  },
  {
    id: "aurora",
    name: "Deep Aurora",
    type: "gradient",
    style: "linear-gradient(135deg, #09090b 0%, #2e1065 50%, #4c1d95 100%)",
    autoBorder: false,
  },
];

// Gradient Button用の背景オプション
const gradientButtonBgOptions = [
  {
    id: "gradient-dusk",
    name: "Tokyo Twilight & Dusk",
    type: "gradient",
    style: "linear-gradient(180deg, #1e293b 0%, #334155 35%, #475569 60%, #fdba74 90%, #f97316 100%)",
    suggestedVariant: "sky" as ColorPresetKey,
  },
  {
    id: "gradient-sunset",
    name: "Sunset Twilight",
    type: "gradient",
    style: "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #e11d48 70%, #fb923c 100%)",
    suggestedVariant: "sunset" as ColorPresetKey,
  },
  {
    id: "gradient-cyber",
    name: "Cyber Neon",
    type: "gradient",
    style: "linear-gradient(135deg, #020617 0%, #064e3b 40%, #059669 70%, #10b981 100%)",
    suggestedVariant: "emerald" as ColorPresetKey,
  },
  {
    id: "urban-lights",
    name: "Urban Night Grid",
    type: "grid",
    style: "radial-gradient(#ffffff20 1px, transparent 1px)",
    suggestedVariant: "indigo" as ColorPresetKey,
  },
];

// Menu用の背景オプション
const menuBgOptions = [
  {
    id: "sunset-dusk",
    name: "Tokyo Twilight (黄昏・夜景風景)",
    type: "gradient",
    style: "linear-gradient(180deg, #1e293b 0%, #334155 35%, #475569 60%, #fdba74 90%, #f97316 100%)",
  },
  {
    id: "vibrant-sunset",
    name: "Sunset Twilight (夕焼け)",
    type: "gradient",
    style: "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #e11d48 70%, #fb923c 100%)",
  },
  {
    id: "deep-ocean",
    name: "Deep Ocean (濃紺)",
    type: "gradient",
    style: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
  },
  {
    id: "daylight-sky",
    name: "Daylight Sky (明るい昼空)",
    type: "gradient",
    style: "linear-gradient(180deg, #bae6fd 0%, #e0f2fe 60%, #ffffff 100%)",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"home" | "standard" | "gradient" | "menu" | "sidebar">("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 通常ボタンの状態
  const [stdBgIndex, setStdBgIndex] = useState(0);
  const [stdBordered, setStdBordered] = useState(false);
  const [stdBlurLevel, setStdBlurLevel] = useState<BlurLevel>(4);
  const [stdButtonText, setStdButtonText] = useState("BUTTON");
  const [stdButtonSize, setStdButtonSize] = useState<"sm" | "md" | "lg">("md");

  // Gradientボタンの状態
  const [gradBgIndex, setGradBgIndex] = useState(0);
  const [gradVariant, setGradVariant] = useState<ColorPresetKey>("sky");
  const [gradBlurLevel, setGradBlurLevel] = useState<BlurLevel>(4);
  const [gradButtonText, setGradButtonText] = useState("BUTTON");
  const [gradButtonSize, setGradButtonSize] = useState<"sm" | "md" | "lg">("md");

  // Menuの状態
  const [menuBgIndex, setMenuBgIndex] = useState(0);
  const [menuMode, setMenuMode] = useState<"dark" | "light" | "auto">("dark");
  const [menuBlurLevel, setMenuBlurLevel] = useState<BlurLevel>(4);
  const [menuShowDivider, setMenuShowDivider] = useState(true);

  const currentStdBg = standardButtonBgOptions[stdBgIndex];
  const currentGradBg = gradientButtonBgOptions[gradBgIndex];
  const currentMenuBg = menuBgOptions[menuBgIndex];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* サイトヘッダー (DeVa Glassmorphism Style) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-start gap-4">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-expanded={sidebarOpen}
            aria-controls="deva-overlay-navigation"
            aria-label="ナビゲーションを開く"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90 backdrop-blur-xl transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-white text-sm shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              DV
            </div>
            <div>
              <span className="font-bold tracking-tight text-white text-base">
                DeVa Design System
              </span>
              <span className="ml-2 text-xs text-sky-400 font-mono px-2 py-0.5 rounded-full border border-sky-500/30 bg-sky-500/10">
                v0.1.0-alpha
              </span>
            </div>
          </div>

        </div>
      </header>

      <OverlaySidebar id="deva-overlay-navigation" open={sidebarOpen} onClose={() => setSidebarOpen(false)} title="DeVa Design System ナビゲーション">
        <p className="mb-3 px-4 text-xs font-mono uppercase tracking-widest text-white/55">Components</p>
        <OverlaySidebarGroup>
          {([
            ["home", "Home"],
            ["menu", "Menu"],
            ["standard", "Button (通常)"],
            ["gradient", "Gradient Button"],
            ["sidebar", "Overlay Sidebar"],
          ] as const).map(([key, label]) => (
            <OverlaySidebarItem key={key} selected={activeTab === key} onClick={() => { setActiveTab(key); setSidebarOpen(false); }}>
              {label}
            </OverlaySidebarItem>
          ))}
        </OverlaySidebarGroup>
      </OverlaySidebar>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {activeTab === "home" && (
          <div className="space-y-16 animate-in fade-in duration-300">
            <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/60 px-7 py-12 shadow-2xl backdrop-blur-xl md:px-12 md:py-16">
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,#0ea5e933,transparent_42%),radial-gradient(ellipse_at_90%_90%,#6366f133,transparent_45%)]" />
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-sky-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" /> Design language • v0.1.0-alpha
                </div>
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">DeVa Design System</h1>
                <p className="max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
                  透明感のある素材、落ち着いた動き、明確な階層。DeVa のインターフェースを一貫して設計・実装するためのコンポーネントと技術仕様をまとめています。
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button type="button" onClick={() => setSidebarOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                    コンポーネントを見る <span aria-hidden="true">→</span>
                  </button>
                  <button type="button" onClick={() => setActiveTab("sidebar")} className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-lg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">
                    デザイン原則
                  </button>
                </div>
              </div>
              <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["Material", "Frosted glass"],
                  ["Surface", "Translucent"],
                  ["Motion", "Purposeful"],
                  ["System", "Composable"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/45">{label}</p>
                    <p className="mt-1 text-sm font-medium text-white/90">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-sky-400">Explore the system</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">コンポーネント仕様</h2>
                </div>
                <button type="button" onClick={() => setSidebarOpen(true)} className="text-sm text-neutral-400 transition hover:text-white">すべて見る <span aria-hidden="true">→</span></button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {([
                  ["menu", "Menu", "グループ化、区切り、色とブラーを備えたオーバーレイメニュー。", "01"],
                  ["standard", "Button", "日常的な操作に使う、境界と素材を調整できる標準ボタン。", "02"],
                  ["gradient", "Gradient Button", "背景色と調和するグラデーションボタン。", "03"],
                  ["sidebar", "Overlay Sidebar", "すりガラスの浮遊パネルによるナビゲーション。", "04"],
                ] as const).map(([key, title, description, number]) => (
                  <button key={key} type="button" onClick={() => setActiveTab(key)} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-xs font-mono text-sky-300">{number}</span>
                      <span className="text-white/35 transition group-hover:translate-x-1 group-hover:text-white/80" aria-hidden="true">↗</span>
                    </div>
                    <h3 className="mt-7 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 min-h-12 text-sm leading-relaxed text-neutral-400">{description}</p>
                  </button>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="rounded-3xl border border-white/10 bg-neutral-900/45 p-7 backdrop-blur-xl md:p-9">
                <p className="text-xs font-mono uppercase tracking-widest text-indigo-300">Foundations</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">素材から一貫性をつくる</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">DeVa の各コンポーネントは、共通のカラー・ブラー・タイポグラフィの基礎に沿って構成されます。実際の背景になじむ半透明レイヤーを使いながら、可読性と操作の明確さを保ちます。</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Color tokens", "Blur levels 1–6", "Frosted surfaces", "Accessible motion"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">{item}</span>)}
                </div>
              </article>
              <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-950/70 via-neutral-900/80 to-indigo-950/70 p-7 backdrop-blur-xl md:p-9">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
                <p className="relative text-xs font-mono uppercase tracking-widest text-sky-300">Start here</p>
                <h2 className="relative mt-3 text-2xl font-semibold text-white">仕様を確認する</h2>
                <p className="relative mt-3 text-sm leading-relaxed text-neutral-400">各コンポーネントのインタラクティブなプレビュー、実装例、推奨ルールを確認できます。</p>
                <button type="button" onClick={() => setActiveTab("menu")} className="relative mt-6 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">仕様ページを開く <span aria-hidden="true">→</span></button>
              </article>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* 1. Menu セクション */}
        {/* ============================================================== */}
        {activeTab === "menu" && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* タイトルセクション */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-sky-400 bg-sky-950/40 border border-sky-800/50 px-3 py-1 rounded-full">
                <span>Component Specification</span>
                <span className="text-neutral-500">•</span>
                <span>Navigation &amp; Overlay / Menu</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Menu
              </h1>
              <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
                DeVa Design System のオーバーレイ＆ナビゲーションメニュー。
                <strong>「すりガラス素材かつ色あり（ダークモードでは黒、ライトモードでは白）」</strong>を基調とし、
                <strong>Menu groups として項目をグループ化して divider を挿入</strong>できる構造を備えています。
              </p>
            </div>

            {/* インタラクティブ・プレビュー */}
            <section className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  Interactive Sandbox Preview
                </h2>
                <div className="text-xs text-neutral-400 font-mono">
                  Color Mode: {menuMode.toUpperCase()} (すりガラス素材かつ色あり) / Blur: {blurTokens[menuBlurLevel]}
                </div>
              </div>

              {/* ビューポート */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[460px] md:min-h-[500px] flex items-center justify-center p-6 bg-neutral-900 transition-all duration-500">
                {/* 背景 */}
                <div
                  className="absolute inset-0 z-0 transition-all duration-700"
                  style={{
                    background: currentMenuBg.style,
                  }}
                />

                {/* Menu 本体 (仕様画像の配置とアイテム構成を忠実に再現) */}
                <div className="relative z-10 flex flex-col items-center gap-5">
                  <Menu
                    mode={menuMode}
                    blurLevel={menuBlurLevel}
                    className="w-64"
                  >
                    {/* Menu Group 1 */}
                    <MenuGroup>
                      <MenuItem icon={<span className="text-base font-normal">+</span>}>
                        sample 1
                      </MenuItem>
                    </MenuGroup>

                    {/* Divider */}
                    {menuShowDivider && <MenuDivider />}

                    {/* Menu Group 2 */}
                    <MenuGroup>
                      <MenuItem icon={<span className="text-base font-normal">+</span>}>
                        sample 2
                      </MenuItem>
                      <MenuItem icon={<span className="text-base font-normal">+</span>}>
                        sample 2
                      </MenuItem>
                      <MenuItem icon={<span className="text-base font-normal">+</span>}>
                        sample 2
                      </MenuItem>
                      <MenuItem icon={<span className="text-base font-normal">+</span>}>
                        sample 2
                      </MenuItem>
                      <MenuItem icon={<span className="text-base font-normal">+</span>}>
                        sample 2
                      </MenuItem>
                    </MenuGroup>
                  </Menu>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/10 shadow-lg">
                    Mode: {menuMode === "dark" ? "黒すりガラス (Dark)" : menuMode === "light" ? "白すりガラス (Light)" : "Auto"} • Blur {menuBlurLevel} ({blurTokens[menuBlurLevel]})
                  </span>
                </div>
              </div>

              {/* コントロールパネル */}
              <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 1. 背景切り替え */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    1. プレビュー背景
                  </label>
                  <div className="space-y-1.5">
                    {menuBgOptions.map((bg, idx) => (
                      <button
                        key={bg.id}
                        onClick={() => {
                          setMenuBgIndex(idx);
                          if (bg.id === "daylight-sky") {
                            setMenuMode("light");
                          } else {
                            setMenuMode("dark");
                          }
                        }}
                        className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-all flex items-center justify-between border ${
                          menuBgIndex === idx
                            ? "bg-sky-500/20 border-sky-400 text-white font-medium"
                            : "bg-white/5 border-transparent text-neutral-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <span className="truncate">{bg.name}</span>
                        {menuBgIndex === idx && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. カラーモード (黒 / 白) */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    2. すりガラス色 (モード連動)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "dark" as const, label: "黒 (Dark)", bgClass: "bg-black" },
                      { id: "light" as const, label: "白 (Light)", bgClass: "bg-white text-black" },
                      { id: "auto" as const, label: "Auto", bgClass: "bg-neutral-800" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setMenuMode(m.id)}
                        className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                          menuMode === m.id
                            ? "border-sky-400 bg-sky-500/20 text-white font-bold"
                            : "border-white/5 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    ※ 仕様: すりガラス素材かつ色あり。<strong>ダークモードでは黒、ライトモードでは白</strong>を採用。
                  </p>
                </div>

                {/* 3. グループ & Divider */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    3. グループ &amp; Divider
                  </label>
                  <div className="p-4 rounded-xl bg-neutral-950/60 border border-white/10 space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-xs text-neutral-200 font-medium">
                        Divider（区切り線）
                      </span>
                      <input
                        type="checkbox"
                        checked={menuShowDivider}
                        onChange={(e) => setMenuShowDivider(e.target.checked)}
                        className="w-4 h-4 accent-sky-400 cursor-pointer"
                      />
                    </label>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      ※ 仕様: <strong>Menu groups としてグループ化し、divider を入れることが可能</strong>。
                    </p>
                  </div>
                </div>

                {/* 4. ブラー強度 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                      4. Background Blur
                    </label>
                    <span className="text-xs font-mono text-sky-400">
                      強度 {menuBlurLevel} ({blurTokens[menuBlurLevel]})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={menuBlurLevel}
                    onChange={(e) => setMenuBlurLevel(Number(e.target.value) as BlurLevel)}
                    className="w-full accent-sky-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>1 (4px)</span>
                    <span className="text-sky-400 font-bold">4 (16px)</span>
                    <span>6 (32px)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 技術仕様解説カード群 */}
            <section className="space-y-8">
              <div className="border-t border-white/10 pt-10">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Menu の技術仕様 (Specification Details)
                </h2>
                <p className="text-neutral-400 mt-1">
                  DeVa Design System における Menu コンポーネントの2大ルール
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ルール1 */}
                <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold font-mono">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-white">すりガラス素材かつ色あり（ダークは黒、ライトは白）</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    背後が透けるすりガラス素材（強度4のブラー）を基盤に、有色の透過レイヤーをブレンド。
                    <strong>ダークモードでは黒の半透明、ライトモードでは白の半透明</strong>を採用することで、
                    あらゆる背景写真やUIレイヤー上で文字の可読性とモダンな浮遊感を両立します。
                  </p>
                </div>

                {/* ルール2 */}
                <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold font-mono">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-white">Menu groups によるグループ化と Divider</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    関連するメニュー項目を
                    <code className="text-indigo-300 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded mx-1">
                      &lt;MenuGroup&gt;
                    </code>
                    で論理的にまとめ、グループ間に
                    <code className="text-indigo-300 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded mx-1">
                      &lt;MenuDivider&gt;
                    </code>
                    を挿入可能。機能や重要度に応じた階層化が自然に行えます。
                  </p>
                </div>
              </div>
            </section>

            {/* 実装コード */}
            <section className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white">コードでの使用方法</h3>
              <pre className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs text-sky-300 overflow-x-auto leading-relaxed">
{`import { Menu, MenuGroup, MenuItem, MenuDivider } from "@/components/ui/Menu";

<Menu mode="dark">
  {/* グループ 1 */}
  <MenuGroup>
    <MenuItem icon={<span className="text-lg">+</span>}>
      sample 1
    </MenuItem>
  </MenuGroup>

  {/* グループ区切り線 */}
  <MenuDivider />

  {/* グループ 2 */}
  <MenuGroup>
    <MenuItem icon={<span className="text-lg">+</span>}>
      sample 2
    </MenuItem>
    <MenuItem icon={<span className="text-lg">+</span>}>
      sample 2
    </MenuItem>
  </MenuGroup>
</Menu>`}
              </pre>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* 2. 通常ボタン (Button) セクション */}
        {/* ============================================================== */}
        {activeTab === "standard" && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* タイトルセクション */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-sky-400 bg-sky-950/40 border border-sky-800/50 px-3 py-1 rounded-full">
                <span>Component Specification</span>
                <span className="text-neutral-500">•</span>
                <span>Core UI / Standard</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Button
              </h1>
              <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
                DeVa Design System の基底となる標準ボタンコンポーネント。
                背後が透けて馴染む<strong>「すりガラス素材（Frosted Glass）」</strong>を採用し、
                <strong>白など単調な背景の場合は輪郭を保つために「枠（Border）」を表示</strong>するアダプティブな仕様を備えています。
              </p>
            </div>

            {/* インタラクティブ・プレビュー */}
            <section className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  Interactive Sandbox Preview
                </h2>
                <div className="text-xs text-neutral-400 font-mono">
                  Mode: {stdBordered ? "枠表示 (Bordered)" : "すりガラス素材 (Frosted Glass)"} / Blur: {blurTokens[stdBlurLevel]}
                </div>
              </div>

              {/* ビューポート */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[440px] md:min-h-[500px] flex items-center justify-center p-8 bg-neutral-900 transition-all duration-500">
                <div
                  className="absolute inset-0 z-0 transition-all duration-700"
                  style={{
                    background: currentStdBg.style,
                  }}
                />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <Button
                    bordered={stdBordered}
                    blurLevel={stdBlurLevel}
                    size={stdButtonSize}
                  >
                    {stdButtonText}
                  </Button>

                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border shadow-lg backdrop-blur-md ${
                      currentStdBg.type === "solid" && currentStdBg.style === "#ffffff"
                        ? "bg-black/80 text-white border-black/20"
                        : "bg-black/60 text-white/90 border-white/10"
                    }`}
                  >
                    {stdBordered ? "枠線表示 ON" : "すりガラス素材"} • {stdButtonSize.toUpperCase()} • Blur {stdBlurLevel}
                  </span>
                </div>
              </div>

              {/* コントロールパネル */}
              <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    1. プレビュー背景
                  </label>
                  <div className="space-y-1.5">
                    {standardButtonBgOptions.map((bg, idx) => (
                      <button
                        key={bg.id}
                        onClick={() => {
                          setStdBgIndex(idx);
                          if (bg.autoBorder) {
                            setStdBordered(true);
                          } else {
                            setStdBordered(false);
                          }
                        }}
                        className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-all flex items-center justify-between border ${
                          stdBgIndex === idx
                            ? "bg-sky-500/20 border-sky-400 text-white font-medium"
                            : "bg-white/5 border-transparent text-neutral-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <span className="truncate">{bg.name}</span>
                        {stdBgIndex === idx && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    2. 枠（Border）の表示
                  </label>
                  <div className="p-4 rounded-xl bg-neutral-950/60 border border-white/10 space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-xs text-neutral-200 font-medium">
                        枠線を表示する
                      </span>
                      <input
                        type="checkbox"
                        checked={stdBordered}
                        onChange={(e) => setStdBordered(e.target.checked)}
                        className="w-4 h-4 accent-sky-400 cursor-pointer"
                      />
                    </label>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      ※ 仕様: 白など単調な背景では、境界が溶け込んで見失われないよう<strong>枠線を表示</strong>します。
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                      3. Background Blur
                    </label>
                    <span className="text-xs font-mono text-sky-400">
                      強度 {stdBlurLevel} ({blurTokens[stdBlurLevel]})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={stdBlurLevel}
                    onChange={(e) => setStdBlurLevel(Number(e.target.value) as BlurLevel)}
                    className="w-full accent-sky-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>1 (4px)</span>
                    <span className="text-sky-400 font-bold">4 (16px)</span>
                    <span>6 (32px)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    4. サイズ & テキスト
                  </label>
                  <div className="flex gap-2">
                    {(["sm", "md", "lg"] as const).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setStdButtonSize(sz)}
                        className={`flex-1 py-1.5 rounded-lg text-xs uppercase font-mono border transition-all ${
                          stdButtonSize === sz
                            ? "border-sky-400 bg-sky-500/20 text-white font-bold"
                            : "border-white/5 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={stdButtonText}
                    onChange={(e) => setStdButtonText(e.target.value)}
                    placeholder="Button label"
                    className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>
            </section>

            {/* 技術仕様解説カード群 */}
            <section className="space-y-8">
              <div className="border-t border-white/10 pt-10">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  通常ボタンの技術仕様 (Specification Details)
                </h2>
                <p className="text-neutral-400 mt-1">
                  DeVa Design System における通常ボタン（Standard Button）の設計原則
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold font-mono">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-white">すりガラス素材 (Frosted Glass)</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    写真やグラデーションなどの豊かな背景上では、半透明の白色レイヤー（約20%〜30%）と背景ブラー（強度4 / 16px）を適用。
                    ボタン背後の情報や色彩を柔らかくぼかして透過させることで、空間との一体感を生み出します。
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold font-mono">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-white">白など単調な背景の場合は枠を表示</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    背後が単色白（#ffffff）やフラットな単調背景の場合、ブラーによる光学的差分が得られずボタンの認識性が低下します。
                    そのため、明示的な枠線（ボーダー）を表示し、ピル形状のクリッカブル領域を視覚的に確立します。
                  </p>
                </div>
              </div>
            </section>

            {/* 実装コード */}
            <section className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white">コードでの使用方法</h3>
              <pre className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs text-sky-300 overflow-x-auto leading-relaxed">
{`import { Button } from "@/components/ui/Button";

// 1. 通常のすりガラスボタン（写真・グラデーション背景向け）
<Button>
  BUTTON
</Button>

// 2. 白や単調な背景で枠線を表示する場合
<Button bordered>
  BUTTON
</Button>`}
              </pre>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* 3. Gradient Button セクション */}
        {/* ============================================================== */}
        {activeTab === "gradient" && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* タイトルセクション */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-sky-400 bg-sky-950/40 border border-sky-800/50 px-3 py-1 rounded-full">
                <span>Component Specification</span>
                <span className="text-neutral-500">•</span>
                <span>Signature UI / Gradient</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Gradient Button
              </h1>
              <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
                背景環境と調和しながら存在感を際立たせる DeVa のシグネチャーボタンコンポーネント。
                外縁から中心に向かって色の濃度が下がる放射グラデーションと、強度4の背景ブラーによって、
                すりガラス越しに背景が溶け込む独特の空気感を演出します。
              </p>
            </div>

            {/* インタラクティブ・プレビュー */}
            <section className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  Interactive Sandbox Preview
                </h2>
                <div className="text-xs text-neutral-400 font-mono">
                  Blur: {blurTokens[gradBlurLevel]} (強度{gradBlurLevel}) / Color: {colorPresets[gradVariant].label}
                </div>
              </div>

              {/* ビューポート */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[460px] md:min-h-[500px] flex items-center justify-center p-8 bg-neutral-900">
                {currentGradBg.type === "gradient" ? (
                  <div
                    className="absolute inset-0 z-0 transition-all duration-700"
                    style={{ background: currentGradBg.style }}
                  />
                ) : (
                  <div
                    className="absolute inset-0 z-0 bg-neutral-950 transition-all duration-700"
                    style={{
                      backgroundImage: currentGradBg.style,
                      backgroundSize: "24px 24px",
                    }}
                  />
                )}

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <GradientButton
                    variant={gradVariant}
                    blurLevel={gradBlurLevel}
                    size={gradButtonSize}
                  >
                    {gradButtonText}
                  </GradientButton>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/10 shadow-lg">
                    Previewing: {gradButtonSize.toUpperCase()} • Blur {gradBlurLevel} ({blurTokens[gradBlurLevel]})
                  </span>
                </div>
              </div>

              {/* コントロールパネル */}
              <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    1. プレビュー背景
                  </label>
                  <div className="space-y-1.5">
                    {gradientButtonBgOptions.map((bg, idx) => (
                      <button
                        key={bg.id}
                        onClick={() => {
                          setGradBgIndex(idx);
                          setGradVariant(bg.suggestedVariant);
                        }}
                        className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-all flex items-center justify-between border ${
                          gradBgIndex === idx
                            ? "bg-sky-500/20 border-sky-400 text-white font-medium"
                            : "bg-white/5 border-transparent text-neutral-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <span className="truncate">{bg.name}</span>
                        {gradBgIndex === idx && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    2. 反映色 (強調色 / 背景色)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(colorPresets) as ColorPresetKey[]).map((key) => {
                      const preset = colorPresets[key];
                      return (
                        <button
                          key={key}
                          onClick={() => setGradVariant(key)}
                          className={`text-xs px-2.5 py-2 rounded-lg border transition-all flex items-center gap-2 ${
                            gradVariant === key
                              ? "border-sky-400 bg-sky-500/20 text-white font-medium"
                              : "border-white/5 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                            style={{ backgroundColor: `rgb(${preset.rgb})` }}
                          />
                          <span className="truncate capitalize">{key}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                      3. Background Blur
                    </label>
                    <span className="text-xs font-mono text-sky-400">
                      強度 {gradBlurLevel} ({blurTokens[gradBlurLevel]})
                      {gradBlurLevel === 4 && " ★標準"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={gradBlurLevel}
                    onChange={(e) => setGradBlurLevel(Number(e.target.value) as BlurLevel)}
                    className="w-full accent-sky-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>1 (4px)</span>
                    <span className="text-sky-400 font-bold">4 (16px)</span>
                    <span>6 (32px)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                    4. サイズ & テキスト
                  </label>
                  <div className="flex gap-2">
                    {(["sm", "md", "lg"] as const).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setGradButtonSize(sz)}
                        className={`flex-1 py-1.5 rounded-lg text-xs uppercase font-mono border transition-all ${
                          gradButtonSize === sz
                            ? "border-sky-400 bg-sky-500/20 text-white font-bold"
                            : "border-white/5 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={gradButtonText}
                    onChange={(e) => setGradButtonText(e.target.value)}
                    placeholder="Button label"
                    className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>
            </section>

            {/* 技術仕様解説カード群 */}
            <section className="space-y-8">
              <div className="border-t border-white/10 pt-10">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Gradient Button の技術仕様 (Technical Specification)
                </h2>
                <p className="text-neutral-400 mt-1">
                  DeVa Design System における Gradient Button の3つの核となるルール
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold font-mono">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-white">強度4の Background Blur</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    すりガラスの奥に潜む背景を滑らかに抽象化するため、
                    <code className="text-sky-300 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                      backdrop-filter: blur(16px)
                    </code>
                    （強度4）を標準適用。背後のノイズを抑制しつつ、高い透明感を維持します。
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold font-mono">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-white">中心へ向かって薄くなるグラデーション</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    外周部は濃度約 75% で境界を際立たせ、中心に向かって約 8% まで濃度を落とす
                    <code className="text-indigo-300 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                      radial-gradient
                    </code>
                    を採用。ボタンの輪郭を保持しながら、文字の視認性と抜け感を最大化します。
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold font-mono">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-white">強調色・背景色との有機的連動</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    背景の中で最も優勢な色彩（空の青、夕日の橙、夜景の紫など）または画面上で強調したいプライマリカラーを抽出してボタンに反映。孤立せず、空間全体と共鳴するUIを実現します。
                  </p>
                </div>
              </div>
            </section>

            {/* 実装コード */}
            <section className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white">コードでの使用方法</h3>
              <pre className="p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs text-sky-300 overflow-x-auto leading-relaxed">
{`import { GradientButton } from "@/components/ui/GradientButton";

// 標準 (Sky Blue, 強度4 blur)
<GradientButton variant="sky" blurLevel={4}>
  BUTTON
</GradientButton>

// 背景色やカスタムカラーに合わせる場合
<GradientButton customRgb="115, 175, 255" blurLevel={4}>
  BUTTON
</GradientButton>`}
              </pre>
            </section>
          </div>
        )}

        {activeTab === "sidebar" && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-sky-400 bg-sky-950/40 border border-sky-800/50 px-3 py-1 rounded-full">
                <span>Component Specification</span><span className="text-neutral-500">•</span><span>Navigation / Overlay Sidebar</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Overlay Sidebar</h1>
              <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
                画面の上に重ねて表示する、半透明のすりガラス製サイドナビゲーションです。項目やグループは用途に合わせて組み立てられます。標準形は画像のような縦並びのメニューとし、必要に応じて iOS のサイドバーのようにグループを折り畳めます。
              </p>
            </div>

            <section className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-white">Interactive Preview</h2>
                <span className="text-xs font-mono text-neutral-400">Dark translucent surface • Blur {blurTokens[4]}</span>
              </div>
              <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,#0ea5e955,transparent_40%),radial-gradient(ellipse_at_80%_80%,#7c3aed66,transparent_45%),linear-gradient(135deg,#111827,#334155_55%,#f97316)]" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex min-h-[350px] items-center justify-center text-center">
                  <div className="space-y-4">
                    <p className="text-sm text-white/70">コンテンツの上に浮かぶナビゲーション</p>
                    <button type="button" onClick={() => setSidebarOpen(true)} className="rounded-full border border-white/25 bg-white/15 px-5 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-xl transition hover:bg-white/25">サイドバーを開く</button>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs text-white/80 backdrop-blur-lg">半透明 • すりガラス • 角丸</div>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="border-t border-white/10 pt-8 text-2xl font-bold text-white">技術仕様</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md">
                  <h3 className="mb-2 font-bold text-white">素材とレイヤー</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">背景を透過させる有色レイヤーと backdrop blur を組み合わせます。既定は暗色の半透明面、16px blur、細い明るい境界線、浮遊感のある影です。背景とのコントラストを確保し、文字や操作項目を明瞭に保ちます。</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md">
                  <h3 className="mb-2 font-bold text-white">構成と折り畳み</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">項目、見出し、区切り、補助情報は用途に応じて自由に組み立て可能です。階層が必要な場合は iOS のサイドバーと同様にグループを折り畳めます。標準および推奨パターンは、単純な縦並びメニューか、折り畳み可能なメニューです。複雑な操作パネルや独立したコンテンツ領域を詰め込む構成は推奨しません。</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md">
                  <h3 className="mb-2 font-bold text-white">表示と操作</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">サイドバーはコンテンツの上に重ね、背面には暗い scrim を置きます。外側のクリック、閉じるボタン、Escape キーで閉じられます。モバイルでも画面幅を超えず、選択中の項目を視覚と aria-current で示します。</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md">
                  <h3 className="mb-2 font-bold text-white">展開アニメーション</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">開くときは左からすっとスライドインしながら、横方向に伸びて所定幅へ収束します。transform-origin は左端、展開は 420ms の減速カーブを標準とします。閉じるときも左へ戻りながら縮みます。背面の scrim はサイドバーに追従してフェードし、OS の「視差効果を減らす」設定では動きを抑制します。</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md">
                  <h3 className="mb-2 font-bold text-white">起動位置とレスポンシブ</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">展開ボタンはサイトヘッダー左上に置き、片手でも見つけやすくします。狭い画面ではサイドバー幅を viewport 内に制限し、縦方向に項目をスクロールできます。開閉状態は呼び出し元が管理します。</p>
                </article>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl border border-white/10 bg-neutral-900/50 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white">コードでの使用方法</h2>
              <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/70 p-4 font-mono text-xs leading-relaxed text-sky-300">{`import { OverlaySidebar, OverlaySidebarGroup, OverlaySidebarItem } from "@/components/ui/OverlaySidebar";

<OverlaySidebar open={open} onClose={() => setOpen(false)} title="Main navigation">
  <OverlaySidebarGroup>
    <OverlaySidebarItem selected>Overview</OverlaySidebarItem>
    <OverlaySidebarItem>Components</OverlaySidebarItem>
  </OverlaySidebarGroup>
</OverlaySidebar>`}</pre>
            </section>
          </div>
        )}
      </main>

      {/* フッター */}
      <footer className="border-t border-white/10 py-10 mt-20 text-center text-xs text-neutral-500">
        <p>DeVa Design System • Technical Documentation &amp; Specification</p>
      </footer>
    </div>
  );
}
