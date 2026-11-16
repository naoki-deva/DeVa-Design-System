import type { SectionKey } from "./navigation";

interface HomeViewProps {
  onNavigate: (section: SectionKey) => void;
  onOpenSidebar: () => void;
}

export default function HomeView({ onNavigate, onOpenSidebar }: HomeViewProps) {
  return (
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
            <button type="button" onClick={() => onOpenSidebar()} className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
              コンポーネントを見る <span aria-hidden="true">→</span>
            </button>
            <button type="button" onClick={() => onNavigate("sidebar")} className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-lg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">
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
          <button type="button" onClick={() => onOpenSidebar()} className="text-sm text-neutral-400 transition hover:text-white">すべて見る <span aria-hidden="true">→</span></button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {([
            ["menu", "Menu", "グループ化、区切り、色とブラーを備えたオーバーレイメニュー。", "01"],
            ["standard", "Button", "日常的な操作に使う、境界と素材を調整できる標準ボタン。", "02"],
            ["gradient", "Gradient Button", "背景色と調和するグラデーションボタン。", "03"],
            ["sidebar", "Overlay Sidebar", "すりガラスの浮遊パネルによるナビゲーション。", "04"],
          ] as const).map(([key, title, description, number]) => (
            <button key={key} type="button" onClick={() => onNavigate(key)} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">
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
          <button type="button" onClick={() => onNavigate("menu")} className="relative mt-6 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">仕様ページを開く <span aria-hidden="true">→</span></button>
        </article>
      </section>
    </div>
  );
}
