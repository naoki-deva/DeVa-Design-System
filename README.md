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
│   ├── app/              # Next.js App Router ルーティング
│   ├── components/       # UIコンポーネント
│   │   ├── docs/         # ドキュメント表示用コンポーネント
│   │   └── ui/           # デザインシステム共通UI
│   ├── content/
│   │   └── specs/        # 技術仕様・ドキュメントコンテンツ (MDX / Markdown等)
│   ├── styles/           # グローバルスタイル・デザイントークン連携
│   └── tokens/           # デザイントークン定義 (Colors, Spacing, Typography等)
```

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。
