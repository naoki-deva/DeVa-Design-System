import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { blurTokens, type BlurLevel } from "@/tokens/blur";
import { standardButtonBgOptions } from "@/content/specs/componentOptions";

export default function ButtonSpecification() {
  const [stdBgIndex, setStdBgIndex] = useState(0);
  const [stdBordered, setStdBordered] = useState(false);
  const [stdBlurLevel, setStdBlurLevel] = useState<BlurLevel>(4);
  const [stdButtonText, setStdButtonText] = useState("BUTTON");
  const [stdButtonSize, setStdButtonSize] = useState<"sm" | "md" | "lg">("md");
  const currentStdBg = standardButtonBgOptions[stdBgIndex];

  return (
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
  );
}
