# kana2mn

日本語のひらがなとカタカナをモンゴル語のキリル文字に変換するツールです。

## デモ

**[https://code4fukui.github.io/kana2mn/](https://code4fukui.github.io/kana2mn/)**

上部の入力フィールドに日本語の仮名を入力すると、下のフィールドにモンゴル語のキリル文字への変換結果が表示されます。

## 機能

-   ひらがなとカタカナを1文字ずつモンゴル語のキリル文字に変換します（例: `こんにちは` → `коннитиха`）。
-   標準的な五十音、濁音（濁点）、半濁音（半濁点）、および末尾の `ん` をサポートします。
-   仮名以外の文字（漢字、句読点、非対応の仮名など）は変換されず、そのまま出力されます。
-   軽量で依存関係のないJavaScriptモジュールです。

## 制限

このツールは1対1の直接的な文字マッピングを行うため、音声的な組み合わせは処理しません。

-   **拗音のサポートなし:** `きゃ`、`しゅ`、`ちょ` のような複合仮名は正しく処理されません。1文字ずつ変換されます（例: `きゃ` は `киャ` になります）。
-   **促音のサポートなし:** 小さい `っ` はサポートされていません。

## 使い方

### JavaScriptモジュールとして

`kana2mn` 関数をインポートし、文字列を渡します。ひらがなとカタカナの両方を処理できます。

```javascript
import { kana2mn } from "./kana2mn.js";

// Hiragana example
console.log(kana2mn("ふくの")); // Output: "хукуно"

// Katakana example
console.log(kana2mn("サシスセソ")); // Output: "сасисусесо"

// Mixed with unsupported characters
console.log(kana2mn("福茶")); // Output: "福ти"
```

### 依存関係

変換ロジックは以下の外部モジュールに依存しています。

-   [Kana.js](https://code4fukui.github.io/mojikiban/Kana.js) : ひらがなからカタカナへの変換に使用。
-   [CSV.js](https://js.sabae.cc/CSV.js) : 変換テーブルのパースに使用。

## 変換ロジック

変換は [`mongolian_table.csv`](mongolian_table.csv) に定義されたシンプルなルックアップテーブルに基づいています。スクリプトはまず入力されたすべてのひらがなをカタカナに変換し、次に各カタカナ文字をテーブルで検索して対応するキリル文字を見つけます。

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) を参照してください。
