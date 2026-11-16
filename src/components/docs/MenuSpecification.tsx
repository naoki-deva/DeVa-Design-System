import { useState } from "react";
import { Menu, MenuGroup, MenuItem, MenuDivider } from "@/components/ui/Menu";
import { blurTokens, type BlurLevel } from "@/tokens/blur";
import { menuBgOptions } from "@/content/specs/componentOptions";

export default function MenuSpecification() {
  const [menuBgIndex, setMenuBgIndex] = useState(0);
  const [menuMode, setMenuMode] = useState<"dark" | "light" | "auto">("dark");
  const [menuBlurLevel, setMenuBlurLevel] = useState<BlurLevel>(4);
  const [menuShowDivider, setMenuShowDivider] = useState(true);
  const currentMenuBg = menuBgOptions[menuBgIndex];

  return (
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
  );
}
