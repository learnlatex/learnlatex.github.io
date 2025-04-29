---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：格式：字型和間距"
description: "本課展示了如何抑制單個段落的縮排。"
toc-anchor-text: "更多內容：格式：字型和間距"
---

## 抑制單個段落的縮排

如果你想抑制單個段落的縮排，可以使用`\noindent`命令。
這種用法應該 _非常_ 少見；大多數時候，你應該讓 LaTeX 自動處理這個問題。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一個小段落，我們稍微填充一些內容以確保你能在這裡看到效果！

一個小段落，我們稍微填充一些內容以確保你能在這裡看到效果！

\noindent 一個小段落，我們稍微填充一些內容以確保你能在這裡看到效果！
\end{document}
```
