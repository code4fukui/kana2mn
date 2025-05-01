import { kana2mn } from "./kana2mn.js";
import * as t from "https://deno.land/std/testing/asserts.ts";

Deno.test("simple", () => {
  t.assertEquals(kana2mn("ア"), "а");
  t.assertEquals(kana2mn("あ"), "а");
  t.assertEquals(kana2mn("ク"), "ку");
  t.assertEquals(kana2mn("が"), "га");
  t.assertEquals(kana2mn("ん"), "н");
  t.assertEquals(kana2mn("ふくの"), "хукуно");
});
Deno.test("err", () => {
  t.assertEquals(kana2mn("きゃ"), "киャ");
  t.assertEquals(kana2mn("福"), "福");
});
