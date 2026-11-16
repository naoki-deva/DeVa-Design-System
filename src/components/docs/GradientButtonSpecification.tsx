import { useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { blurTokens, type BlurLevel } from "@/tokens/blur";
import { colorPresets, type ColorPresetKey } from "@/tokens/colors";
import { gradientButtonBgOptions } from "@/content/specs/componentOptions";

export default function GradientButtonSpecification() {
  const [gradBgIndex, setGradBgIndex] = useState(0);
  const [gradVariant, setGradVariant] = useState<ColorPresetKey>("sky");
  const [gradBlurLevel, setGradBlurLevel] = useState<BlurLevel>(4);
  const [gradButtonText, setGradButtonText] = useState("BUTTON");
  const [gradButtonSize, setGradButtonSize] = useState<"sm" | "md" | "lg">("md");
  const currentGradBg = gradientButtonBgOptions[gradBgIndex];

  return (
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
  );
}
