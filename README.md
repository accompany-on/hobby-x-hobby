# HOBBY✖️ HOBBY

### 趣味を繋ぐアプリ

同じ趣味を持った人と繋がりたい、
自分に合う趣味を気軽にを見つけたい人に向けたアプリです。

趣味に関するタグ付きの投稿を閲覧できて、
自分の趣味に関連する新しい趣味を見つけることができます。

## 主な機能

- ログイン
- 投稿表示
  - 趣味タグ
  - 本文
  - 画像
  - ユーザー名
  - 投稿時刻
- 投稿作成
- タグによる投稿のソート

## 構成

```sh
.
├── client
│   ├── dist
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── README.md
│   ├── src
│   └── vite.config.js
├── README.md
└── server
    ├── db
    ├── knexfile.js
    ├── package-lock.json
    ├── package.json
    ├── public
    └── src
```

## 使用技術

- javascript
- React
- node.js
- vite
- express
- postgres

## セットアップ手順

データベースの構築

```sh
psql
CREATE DATABASE hobbyxhobby;
\q
```

.env ファイルの作成（

```sh
cp .env
```

.env ファイルに必要な環境変数を設定

```sh
DB_USER=postgres
DB_NAME=hobbyxhobby
```

依存関係のインストール/ビルド/マイグレーション/シード

```sh
cd server
npm run build
```

## 将来の計画

- タグ検索機能
- チャット
- 評価・コメント機能
- 閲覧数表示
