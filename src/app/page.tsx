"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GradientButton } from "@/components/ui/GradientButton";
import { colorPresets, ColorPresetKey } from "@/tokens/colors";
import { blurTokens, BlurLevel } from "@/tokens/blur";

// プレビュー用背景オプション
const backgroundOptions = [
  {
    id: "spec-bg",
    name: "仕様原本 (東京夜景 & 富士山)",
    type: "image",
    src: "/assets/images/spec-gradient-button.jpg",
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
    id: "gradient-deep",
    name: "Deep Aurora",
    type: "gradient",
    style: "linear-gradient(135deg, #09090b 0%, #2e1065 50%, #4c1d95 100%)",
    suggestedVariant: "purple" as ColorPresetKey,
  },
  {
    id: "urban-lights",
    name: "Urban Night Grid",
    type: "grid",
    style: "radial-gradient(#ffffff20 1px, transparent 1px)",
    suggestedVariant: "indigo" as ColorPresetKey,
  },
];

export default function HomePage() {
  const [selectedBg, setSelectedBg] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ColorPresetKey>("sky");
  const [blurLevel, setBlurLevel] = useState<BlurLevel>(4); // 強度4
  const [buttonText, setButtonText] = useState("BUTTON");
  const [buttonSize, setButtonSize] = useState<"sm" | "md" | "lg">("md");

  const currentBg = backgroundOptions[selectedBg];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* サイトヘッダー (DeVa Glassmorphism Style) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
            <span className="text-white font-medium cursor-pointer">仕様 (Specs)</span>
            <span className="hover:text-neutral-200 transition-colors cursor-pointer">
              デザイントークン
            </span>
            <span className="hover:text-neutral-200 transition-colors cursor-pointer">
              コンポーネント
            </span>
            <span className="hover:text-neutral-200 transition-colors cursor-pointer">
              ガイドライン
            </span>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* タイトルセクション */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-sky-400 bg-sky-950/40 border border-sky-800/50 px-3 py-1 rounded-full">
            <span>Component Specification</span>
            <span className="text-neutral-500">•</span>
            <span>Core UI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Gradient Button
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
            背景環境と調和しながら存在感を際立たせる DeVa のシグネチャーボタンコンポーネント。
            外縁から中心に向かって透明度が高まる放射グラデーションと、強度4の背景ブラーによって、
            すりガラス越しに背景が溶け込む独特の空気感を演出します。
          </p>
        </div>

        {/* インタラクティブ・プレビューステージ */}
        <section className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              Interactive Sandbox Preview
            </h2>
            <div className="text-xs text-neutral-400 font-mono">
              Blur: {blurTokens[blurLevel]} (強度{blurLevel}) / Color: {colorPresets[selectedVariant].label}
            </div>
          </div>

          {/* プレビュービューポート */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[460px] md:min-h-[540px] flex items-center justify-center p-8 bg-neutral-900">
            {/* 背景レンダリング */}
            {currentBg.type === "image" && currentBg.src ? (
              <div className="absolute inset-0 z-0">
                <Image
                  src={currentBg.src}
                  alt="Specification Background"
                  fill
                  className="object-cover object-top scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ) : currentBg.type === "gradient" && currentBg.style ? (
              <div
                className="absolute inset-0 z-0 transition-all duration-700"
                style={{ background: currentBg.style }}
              />
            ) : (
              <div
                className="absolute inset-0 z-0 bg-neutral-950 transition-all duration-700"
                style={{
                  backgroundImage: currentBg.style,
                  backgroundSize: "24px 24px",
                }}
              />
            )}

            {/* ボタン本体 */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <GradientButton
                variant={selectedVariant}
                blurLevel={blurLevel}
                size={buttonSize}
              >
                {buttonText}
              </GradientButton>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/10 shadow-lg">
                Previewing: {buttonSize.toUpperCase()} • Blur {blurLevel} ({blurTokens[blurLevel]})
              </span>
            </div>
          </div>

          {/* コントロールパネル (DeVa Glass Style) */}
          <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. 背景切り替え */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                1. プレビュー背景
              </label>
              <div className="space-y-1.5">
                {backgroundOptions.map((bg, idx) => (
                  <button
                    key={bg.id}
                    onClick={() => {
                      setSelectedBg(idx);
                      setSelectedVariant(bg.suggestedVariant);
                    }}
                    className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-all flex items-center justify-between border ${
                      selectedBg === idx
                        ? "bg-sky-500/20 border-sky-400 text-white font-medium"
                        : "bg-white/5 border-transparent text-neutral-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="truncate">{bg.name}</span>
                    {selectedBg === idx && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. カラーバリエーション */}
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
                      onClick={() => setSelectedVariant(key)}
                      className={`text-xs px-2.5 py-2 rounded-lg border transition-all flex items-center gap-2 ${
                        selectedVariant === key
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

            {/* 3. ブラー強度 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                  3. Background Blur
                </label>
                <span className="text-xs font-mono text-sky-400">
                  強度 {blurLevel} ({blurTokens[blurLevel]})
                  {blurLevel === 4 && " ★標準"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={blurLevel}
                onChange={(e) => setBlurLevel(Number(e.target.value) as BlurLevel)}
                className="w-full accent-sky-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>1 (4px)</span>
                <span className="text-sky-400 font-bold">4 (16px)</span>
                <span>6 (32px)</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                ※ DeVa 仕様書では「強度4 (16px)」を標準として定義。
              </p>
            </div>

            {/* 4. サイズとテキスト */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block">
                4. サイズ & テキスト
              </label>
              <div className="flex gap-2">
                {(["sm", "md", "lg"] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setButtonSize(sz)}
                    className={`flex-1 py-1.5 rounded-lg text-xs uppercase font-mono border transition-all ${
                      buttonSize === sz
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
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
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
              技術仕様の詳細 (Technical Specification)
            </h2>
            <p className="text-neutral-400 mt-1">
              DeVa Design System における Gradient Button の3つの核となるルール
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ルール1 */}
            <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-white">強度4の Background Blur</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                すりガラスの奥に潜む都市や自然の光景を滑らかに抽象化するため、
                <code className="text-sky-300 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                  backdrop-filter: blur(16px)
                </code>
                （強度4）を標準適用。背後のノイズを抑制しつつ、高い透明感を維持します。
              </p>
            </div>

            {/* ルール2 */}
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

            {/* ルール3 */}
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

        {/* 仕様書の原本画像との比較 */}
        <section className="space-y-6">
          <div className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              仕様書原本 (Design Reference)
            </h2>
            <p className="text-neutral-400 mt-1">
              提供されたデザイン言語の定義画像
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black">
              <Image
                src="/assets/images/spec-gradient-button.jpg"
                alt="DeVa Design System Gradient Button Specification Document"
                width={1003}
                height={1024}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-xl font-bold text-white">
                DeVa Design System Gradient Button 要件
              </h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 font-bold">✔</span>
                  <span>
                    <strong className="text-white">形状:</strong> 柔らかな曲線のピル形状（カプセル型 / rounded-full）。
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 font-bold">✔</span>
                  <span>
                    <strong className="text-white">背景ブラー:</strong> 強度4（16px相当）の backdrop blur を設定し、背景のディテールを美しくぼかす。
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 font-bold">✔</span>
                  <span>
                    <strong className="text-white">グラデーション構造:</strong> 外縁から内側中心に向かって色の濃度が減衰する放射状（Radial）グラデーション。
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 mt-1 font-bold">✔</span>
                  <span>
                    <strong className="text-white">カラーマッピング:</strong> 強調したいカラー、または背景画像で最も使われているキーカラーを反映。
                  </span>
                </li>
              </ul>

              <div className="pt-4">
                <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                  実装コードのインポート
                </h4>
                <pre className="mt-2 p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs text-sky-300 overflow-x-auto">
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
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-white/10 py-10 mt-20 text-center text-xs text-neutral-500">
        <p>DeVa Design System • Technical Documentation &amp; Specification</p>
      </footer>
    </div>
  );
}
