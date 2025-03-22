---
layout: "lesson"
lang: "zh-hant"
title: "中文的語言特性"
description: "本課展示了使用LaTeX進行中文排版的語言特性細節。重點在於字型選擇和段落格式。"
next: "extra-01"
toc-anchor-text: "中文語言特性"
toc-description: "使用LaTeX進行中文排版。"
---

# 中文的語言特性

<span
  class="summary">本課展示了使用 LaTeX 進行中文排版的語言特性細節，重點在於字型選擇和段落格式。</span>

## 字型選擇

在中文排版中，字型選擇是一個重要的方面。LaTeX 提供了多種字型選項，可以通過`xeCJK`或`ctex`宏包來實現。

注意：

- xeCJK宏包是最常用的中文排版宏包，它提供了豐富的字型選項，包括中文字型、西文字型、數學字型等。
- ctex宏包是基於xeCJK宏包的擴充套件，它提供了更多的中文排版功能，包括字號、字型顏色、字型風格等。
- 下面第一行的註釋指定編譯引擎為xelatex，通知TexLive.net網站使用XeLaTeX引擎進行編譯，可以更好的處理中文字元。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
這是一箇中文示例。
\end{document}
```

## 段落格式

中文排版的段落格式與西文有所不同，通常不需要首行縮排。可以通過設定`parindent`參數來調整。

```latex
\setlength{\parindent}{0pt}
```

## 其他注意事項

在中文排版中，還需要注意標點符號的使用和行間距的設定。可以通過`xeCJK`宏包的選項進行調整。

```latex
\usepackage{xeCJK}
\setCJKmainfont{SimSun}
```

這些設定可以幫助你在 LaTeX 中實現高質量的中文排版。
