---
layout: "lesson"
lang: "ja"
title: "追加レッスン：フォントの選択と Unicode エンジンの利用"
description: "この追加レッスンでは Lua を使用する簡単な例を紹介します。"
toc-anchor-text: "追加レッスン：フォントの選択と Unicode エンジンの利用"
---

## Lua

LuaTeX エンジンは XeTeX と似た方法で OpenType フォントを利用できるほか、`fontspec` パッケージのほとんどの機能も XeTeX と同様に使用できます。

LuaTeX も TeX をさまざまな方向に拡張していますが、特筆すべきはスクリプト言語 Lua を組み込んでいることでしょう。Lua を用いると、より “主流の” プログラミング言語を用いたコーディングに慣れている人にとっては自然なスタイルでプログラミングを行うことができます。さらには、Lua コードの中からは TeX システムの内部処理にアクセスし、その挙動を Lua で記述したコードで置き換えることもできます。

Lua プログラミングに関してはこのチュートリアルの範囲外ですが、2πの値を計算する簡単な例を示しておきます。

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

