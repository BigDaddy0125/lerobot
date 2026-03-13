# lerobot
## GitHub Pages

This repository is configured for GitHub Pages project-site deployment:

`https://bigdaddy0125.github.io/lerobot/`

Setup on GitHub:

1. Open `Settings > Pages`
2. Set `Source` to `GitHub Actions`
3. Push to `main` and wait for the `Deploy GitHub Pages` workflow to finish

Notes:

- Production builds use the `/lerobot/` base path automatically
- Local development still runs from `/` with `npm run dev`

石竹株式会社の「遠隔支援ロボット・機械腕開発」事業向け公式サイトです。

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

- `src/content/`: サイト文案とメタ情報
- `src/sections/`: ページ各セクションの描画
- `src/styles/`: デザイントークンとレイアウト
- `src/utils/`: メニュー、SEO、スクロール演出
- `scripts/`: 資料抽出用スクリプト
- `public/`: 静的アセット

## Notes

- 本サイトは Vite ベースの静的フロントエンドです。
- 企画・文案は `C:\work\lerobot` 配下の事業資料をもとに再構成しています。
