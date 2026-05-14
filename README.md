# kana2mn

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A tool for converting Japanese hiragana and katakana to Mongolian Cyrillic script.

## Demo

**[https://code4fukui.github.io/kana2mn/](https://code4fukui.github.io/kana2mn/)**

Type Japanese kana into the top input field, and the Mongolian Cyrillic conversion will appear in the field below.

## Features

-   Converts hiragana and katakana to Mongolian Cyrillic on a character-by-character basis (e.g., `こんにちは` → `коннитиха`).
-   Supports standard gojūon, voiced consonants (dakuten), p-sounds (handakuten), and the final `ん`.
-   Non-kana characters (like Kanji, punctuation, and unsupported kana) are passed through unchanged.
-   Lightweight, dependency-free JavaScript module.

## Limitations

This tool performs a direct, one-to-one character mapping and does not handle phonetic combinations:

-   **No Digraph Support (Yōon):** Compound kana like `きゃ`, `しゅ`, `ちょ` are not handled correctly. They are converted character by character (e.g., `きゃ` becomes `киャ`).
-   **No Gemination Support (Sokuon):** The small `っ` is not supported.

## Usage

### As a JavaScript Module

Import the `kana2mn` function and pass it a string. It handles both hiragana and katakana.

```javascript
import { kana2mn } from "./kana2mn.js";

// Hiragana example
console.log(kana2mn("ふくの")); // Output: "хукуно"

// Katakana example
console.log(kana2mn("サシスセソ")); // Output: "сасисусесо"

// Mixed with unsupported characters
console.log(kana2mn("福茶")); // Output: "福ти"
```

### Dependencies

The conversion logic relies on the following external modules:

-   [Kana.js](https://code4fukui.github.io/mojikiban/Kana.js) for hiragana-to-katakana conversion.
-   [CSV.js](https://js.sabae.cc/CSV.js) to parse the conversion table.

## Conversion Logic

The conversion is based on a simple lookup table defined in [`mongolian_table.csv`](mongolian_table.csv). The script first converts all input hiragana to katakana and then looks up each katakana character in the table to find its Cyrillic equivalent.

## License

MIT License - see [LICENSE](LICENSE).