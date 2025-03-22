---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：使用 LaTeX"
description: "本課提供了更多關於 LaTeX 是什麼以及它執行的引擎的細節。"
toc-anchor-text: "更多內容：使用 LaTeX"
---

對於我們的大多數示例，我們使用的不是一個叫做`latex`的程式，而是一個叫做`pdflatex`的程式。這是一個 LaTeX 相關程式家族中的一員，它們都是`latex`的"後代"。我們選擇`pdflatex`是因為它可能是最廣泛使用的系統，而且它可以直接生成PDF檔案。

## 格式和引擎

如[前文](more-01)所述，LaTeX 建立在一個叫做 TeX 的系統之上。我們把 LaTeX 稱為一個"格式"：一組 TeX 能理解的宏（指令和命令）的集合。當你執行`pdflatex`時，你 _實際上_ 是在啟動一個叫做 "pdfTeX" 的程式，並預載入了 "LaTeX 格式"。我們通常把 pdfTeX 稱為一個 _引擎_：一個能理解 TeX 指令的程式。

今天常用的有三種引擎：

- pdfTeX
- XeTeX
- LuaTeX

我們將在[後面](lesson-14)介紹 XeTeX 和 LuaTeX：現在我們需要知道的主要是它們能夠載入作業系統字型，而 pdfTeX 不能做到這一點。

如果你在日本，或者寫很多日語內容，你可能還會遇到 pTeX 和 upTeX。這些是專門用於垂直排版的引擎。LuaTeX 也可以做很多這樣的工作，但目前 upTeX 仍然是日語最流行的系統。
