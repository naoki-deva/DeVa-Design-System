import { blurTokens } from "@/tokens/blur";

interface OverlaySidebarSpecificationProps {
  onOpenSidebar: () => void;
}

export default function OverlaySidebarSpecification({ onOpenSidebar }: OverlaySidebarSpecificationProps) {
  return (
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
                        <button type="button" onClick={() => onOpenSidebar()} className="rounded-full border border-white/25 bg-white/15 px-5 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-xl transition hover:bg-white/25">サイドバーを開く</button>
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
  );
}
