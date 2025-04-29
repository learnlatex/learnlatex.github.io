---
layout: "lesson"
lang: "zh-hant"
title: "使用文件類來影響設計"
description: "本課解釋了什麼是文件類以及它如何影響文件佈局，並列出了在TeX發行版中可以找到的主要文件類。"
toc-anchor-text: "文件類"
toc-description: "設定一般文件佈局。"
---

# 文件類

<span
  class="summary">本課解釋了什麼是文件類以及它如何影響文件佈局和設計。它列出了在 TeX 發行版中可以找到的主要文件類。</span>

你可能已經注意到，到目前為止我們建立的所有 LaTeX 文件都以`\documentclass`行開始，而且
`\documentclass{article}`是最常見的選擇。（我們在[上一課](lesson-04)中需要
`\documentclass{report}`來嘗試`\chapter`命令。）這行是所有 LaTeX 文件都必需的，而且幾乎總是應該是文件中的第一個命令。

**注意**：在本課程中，我們將使用`ctexart`類來建立包含中文的文件，這是一箇中文文件類，可以自動處理中文的排版問題。

## 文件類的作用

文件類設定文件的整體佈局，例如：

- 設計：頁邊距、字型、間距等
- 是否可以使用章節
- 標題是否應該在單獨的頁面上

文件類也可以更普遍地新增新命令；這在特殊情況下尤其如此，比如建立演示幻燈片。

文件類行也可以設定_全局選項_：應用於整個文件的內容。這些選項在方括號中給出：
`\documentclass[<選項>]{<名稱>}`。這種語法，即在方括號中首先給出可選資訊，在許多 LaTeX 命令中都使用。

## 基礎文件類

LaTeX 自帶一組標準文件類，它們的外觀相似但有一些變化：

- `article`  
  沒有章節的短文件
- `report`  
  有章節的較長文件，單面列印
- `book`  
  有章節的較長文件，雙面列印，帶前言和後記（例如索引）
- `letter`  
  沒有分節的信件
- `slides`  
  用於演示（請參見下文）
- `beamer`  
  用於製作幻燈片

這些類都有自己的選項，可以用來調整佈局和功能。`article`、`report`和`book`類有非常相似的可用命令，正如我們已經看到的。

與之相對，CTex包提供了一些中文文件類：

- `ctexart`  
  適用於中文文章的文件類
- `ctexrep`  
  適用於中文報告的文件類
- `ctexbook`  
  適用於中文書籍的文件類
- `ctexbeamer`  
  適用於中文幻燈片的文件類

如果某種標準文件類未發現對應的`ctex`版本，可以在文件類定義後新增`ctex`包來呼叫中文文件類。引用格式為：

```latex
\documentclass{<標準文件類名>}
\usepackage{ctex}
```
{: .norun :}

選擇不同的文件類，可能會有一些可用命令與環境的細微差別。例如，當寫信時，可用的命令有點不同：

```latex
% !TEX program=lualatex

\documentclass{letter}
\usepackage{ctex}
\begin{document}

\begin{letter}{某某地址\\某某街道\\某某城市}

\opening{親愛的先生或女士，}

信件正文在這裡

\closing{此致，}

\end{letter}

\end{document}
```

看看如何使用`\\`來分隔地址的行；我們將在[稍後](lesson-11)討論換行。另外請注意`letter`類如何為每封信建立一個新的環境並有專門的命令。

標準的`article`、`report`和`book`類接受`10pt`、`11pt`和`12pt`選項來改變字型大小，以及`twocolumn`選項來使文件成為雙欄。

## 功能豐富的類

核心類非常穩定，但這也意味著它們在設計和可用命令範圍方面都相當保守。隨著時間的推移，一些更強大的類被編寫出來，讓你無需手動操作就可以改變設計（我們將在[稍後](lesson-11)提到）。

美國數學學會提供標準類的變體（`amsart`、`amsbook`），設計風格更傳統，更接近數學期刊出版物中使用的風格。

兩個最大和最流行的"擴充套件"類是KOMA-Script包和memoir類。KOMA-Script提供了一組與標準類"平行"的類：`scrartcl`、`scrreprt`、`scrbook`和`scrlttr2`，而memoir類則是一個單一的類，最像是`book`的擴充套件。

這些擴充套件類有很多定製鉤子，我們將在練習中探索一些。你可能想知道我們如何了解它們提供的鉤子；我們將在[後面的課程](lesson-16)中介紹這一點，但你總是可以提前了解！

## 簡報

`slides`類是為製作20世紀80年代中期的物理幻燈片而開發的，因此沒有任何功能來建立基於PDF的互動式簡報。有現代的類可以做到這一點：它們相對於一般的 LaTeX 文件來說比較特殊，所以我們在[補充資訊](more-05)中介紹了它們。

## 練習

探索如何在標準類、KOMA包和`memoir`之間更改文件類如何影響文件的外觀。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

\section{簡介}

這是一個示例文件，帶有一些虛擬文字\footnote{和一個腳註}。這段文字相當長，
因為我們可能想看看讓文件成為雙欄的效果。

\end{document}
```

新增類選項`twocolumn`，看看佈局如何變化。

將`\section`改為`\chapter`，找出使用`scrreprt`類時以下類選項有什麼效果：

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
