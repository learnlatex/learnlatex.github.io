---
layout: "lesson"
lang: "ja"
title: "追加レッスン：フォントの選択とUnicodeエンジンの利用"
description: "この追加レッスンではLuaを使用する簡単な例を紹介します。"
toc-anchor-text: "追加レッスン：フォントの選択とUnicodeエンジンの利用"
---

## Lua

LuaTeXエンジンはXeTeXと似た方法でOpenTypeフォントを利用できるほか、`fontspec`パッケージのほとんどの機能もXeTeXと同様に使用できます。

LuaTeXもTeXをさまざまな方向に拡張していますが、特筆すべきはスクリプト言語Luaを組み込んでいることでしょう。Luaを用いると、より「主流の」プログラミング言語を用いたコーディングに慣れている人にとっては自然なスタイルでプログラミングを行うことができます。さらには、Luaコードの中からはTeXシステムの内部処理にアクセスし、その挙動をLuaで記述したコードで置き換えることもできます。

Luaプログラミングに関してはこのチュートリアルの範囲外ですが、2πの値を計算する簡単な例を示しておきます。

```latex
%!TEX program=lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

