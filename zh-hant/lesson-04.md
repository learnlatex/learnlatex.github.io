---
layout: "lesson"
lang: "zh-hant"
title: "邏輯結構"
description: "本課展示了一些基本的格式化命令，並將其與使用分節命令和列表的語義格式化進行比較。"
toc-anchor-text: "邏輯結構"
toc-description: "結構和視覺呈現。"
---

# 邏輯結構

<span
  class="summary">本課展示了一些基本的格式化命令，並將其與使用分節命令和列表的語義格式化進行比較。</span>

LaTeX 提供了專注於文件邏輯結構的方法，以及直接設定外觀的能力。大多數情況下，使用專注於結構的方法要好得多，因為這樣可以在需要時輕鬆重用或更改外觀。

## 結構和視覺呈現

我們將從一個例子開始，對比 LaTeX 中最常見的邏輯標記命令之一`\emph`與簡單地將某些內容斜體化（在印刷中，這通常是強調的方式）。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一些含有 \emph{強調 和\emph{巢狀} 的內容}。

一些含有 \textit{斜體 和\textit{巢狀} 的內容}。
\end{document}
```

你可能猜到`\textit`是一個將文字斜體化的命令，但它_總是_將內容斜體化，因此不適用於巢狀材料。看看`\emph`如何知道巢狀。還有一些地方，強調與斜體不同；例如，在演示中，顏色通常是更好的選擇。使用邏輯標記，我們不必擔心文件正文中的細節。

我們將在[後面的課程](lesson-11)中檢視手動格式化，但目前我們將`\textbf`新增到我們知道的命令中：它使文字加粗。

## 分節命令

你可能使用過文書處理器，在那裡大多數人通過輸入標題文字然後簡單地將其變大和加粗，並在其後跟一個新行來開始一個部分。在LaTeX中，使用邏輯標記實際上比手動格式化更容易；我們可以使用`\section`命令。這可以處理字型更改、垂直空間等，並在整個文件中保持輸出一致。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
你好！

這是你的第一份文件。

\section{第一節}

第一小節內容

第一小節第二段

\subsection{第一小節}

小節內容

\section{第二節}

第二節內容

\end{document}
```

為了演示中文使用，我們使用了`ctexart`文件類，LaTeX 對節和小節進行編號，並以粗體顯示標題。我們將在[下一課](lesson-05)中考慮更改設計。

LaTeX 可以將文件劃分為多個級別

- `\chapter`（但我們需要`\documentclass{book}`或`\documentclass{report}`來實現），對應中文的“章”。
- `\section`，對應中文的“節”。
- `\subsection`，對應中文的“小節”。
- `\subsubsection`，對應中文的“小小節”。

我們可以進一步劃分：下一個“下一級”是`\paragraph`，但幾乎總是太多“細節”在部分中。（是的，`\paragraph`是一個分節命令，而不是開始新段落的方法！）

你可能想知道文件的標題。有一些特殊命令用於此，但並非所有文件都使用它們，因此我們在[額外課程](more-04)中介紹了這一點。

## 列表

你最常需要邏輯標記的另一個地方是編寫列表。
LaTeX 中內建了兩種常見類型的列表。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

有序列表
\begin{enumerate}
  \item 一個條目
  \item 另一個條目
  \item 第三個條目
\end{enumerate}

無序列表
\begin{itemize}
  \item 一個條目
  \item 另一個條目
  \item 第三個條目
\end{itemize}

\end{document}
```

請注意，我們使用`\item`來開始每個條目，並且每種類型的列表使用的標記是自動新增的。

## 練習

嘗試使用不同的分節級別。嘗試使用`\documentclass{report}`而不是`\documentclass{article}`並新增`\chapter`命令。它們看起來如何？嘗試使用`\paragraph`和（甚至）`\subparagraph`來檢視它們的工作方式：預設情況下，它們_不_新增編號。

製作一些列表，並在一個列表中巢狀另一個列表。數字或標記的格式如何變化？使用標準 LaTeX，你最多可以巢狀四級列表，但超過四個巢狀列表往往是一個不好的訊號！
