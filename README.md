# DeVa Design System - Technical Specification

DeVa Design System のための技術仕様・ドキュメント用Webサイトです。

## ディレクトリ構成

```text
├── public/
│   └── assets/           # 静的アセット
│       ├── brand/        # ロゴ・ブランド素材
│       ├── fonts/        # Webフォント
│       ├── icons/        # SVGアイコン等
│       └── images/       # 各種画像
├── src/
│   ├── app/              # App Router のルート、レイアウト、グローバルCSS
│   ├── components/
│   │   ├── docs/         # サイトシェル、ホーム、コンポーネント仕様画面
│   │   └── ui/           # 再利用可能なデザインシステムUI
│   ├── content/
│   │   └── specs/        # 仕様プレビュー用のデータ
│   ├── styles/           # グローバルスタイル・デザイントークン連携
│   └── tokens/           # デザイントークン定義 (Colors, Spacing, Typography等)
```

各仕様画面は `src/components/docs/` に分割し、プレビューの状態は各画面の中で管理します。共通ナビゲーションとサイト枠は `DesignSystemApp.tsx`、ナビゲーション項目とその型は `navigation.ts` にまとめています。共有UIの見た目は `src/components/ui/`、背景などのプレビュー選択肢は `src/content/specs/` で管理します。

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。
