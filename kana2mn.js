import * as Kana from "https://code4fukui.github.io/mojikiban/Kana.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetch("mongolian_table.csv");
const KANA = `アイウエオ
カキクケコ
サシスセソ
タチツテト
ナニヌネノ
ハヒフヘホ
マミムメモ
ヤ　ユ　ヨ
ラリルレロ
ワ　ヲ　ン
ガギグゲゴ
ザジズゼゾ
ダヂヅデド
バビブベボ
パピプペポ`;
const kana2mn1 = (c) => {
  const n = KANA.indexOf(c);
  if (n < 0) return c;
  const mo = n % 6;
  const ch = Math.floor(n / 6);
  return data[ch + 1][mo + 1];
};

export const kana2mn = (kana) => {
  kana = Kana.hira2kata(kana);
  const res = [];
  for (const c of kana) {
    if (c == "　" || c == "\n" || c == "\r") {
      res.push(c);
      continue;
    }
    const n = KANA.indexOf(c);
    if (n < 0) {
      res.push(c);
      continue;
    }
    const mn = kana2mn1(c);
    res.push(mn);
  }
  return res.join("");
};
