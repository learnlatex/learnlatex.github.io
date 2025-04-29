---
layout: "lesson"
lang: "zh-hant"
title: "長文件結構"
description: "本課展示了如何將 LaTeX 原始檔分割成更小、更易管理的檔案，以及這如何使構建長文件更容易和更快速。"
toc-anchor-text: "原始檔結構"
toc-description: "以可控的方式分割原始檔。"
---

# 長文件結構

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span
  class="summary">本課展示了如何將 LaTeX 原始檔分割成更小、更易管理的檔案，以及這如何使構建長文件更容易和更快速。</span>

當你在寫一個較長的文件時，你可能想要將原始檔分割成多個檔案。例如，對於一本書或論文，通常會有一個"主"/"根"檔案，然後每章一個原始檔（對於書或論文），或每個重要章節一個原始檔（對於長文章）。

## 結構化原始檔

LaTeX 允許我們以可控的方式分割原始檔。有兩個重要的命令：`\input`和`\include`。我們可以使用`\input`讓一個檔案"就像它被輸入在這裡一樣"工作，所以它可以用於（基本上）任何材料。`\include`命令只能用於章節：它開始新的一頁並進行一些內部調整。但它有一個很大的優勢：它允許我們選擇性地包含章節，所以你可以處理文件的一部分而不是整個文件。

因此，一個較長的文件可能看起來像這樣：

<!-- pre0 {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexbook}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{一本示例書}
\author{約翰·多伊 \and 喬·布洛格斯}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% 初始時做一個完整的文件以生成
% 所有的輔助檔案
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

我們將在下面檢視這個檔案的各個方面。（各個支援檔案在本頁底部。）

## 使用`\input`

`\input`命令適用於不是獨立章節的長檔案的部分。在示例中，我們用它來分離出前封面和後封面，保持主檔案簡短明了，同時也意味著我們可以在另一個文件中重用這些封面。我們也用它來處理文件開頭的"非章節"部分：像前言這樣的內容。這同樣是為了幫助保持主檔案清晰。

## 使用`\include`和`\includeonly`

`\include`命令適用於章節，所以我們對每個完整的章節都使用了它；它總是開始新的一頁。我們已經使用`\includeonly`選擇了實際要排版的章節，如你所見，它接受一個逗號分隔的檔名列表。當你使用`\includeonly`時，你可以縮短排版時間並生成一個用於校對的"選擇性"PDF。此外，`\includeonly`的關鍵優勢是 LaTeX 將使用其他包含檔案的`.aux`檔案中的所有交叉引用資訊。

## 建立目錄

`\tableofcontents`命令使用章節命令中的資訊來填充目錄。它有自己的輔助檔案，副檔名為`.toc`，所以你可能需要執行 LaTeX 兩次來解析資訊。目錄是自動從章節標題生成的。還有類似的命令用於`\listoffigures`和`\listoftables`，它們分別從浮動環境的標題工作，並使用副檔名為`.lof`和`.lot`的檔案。

## 將文件分成部分

`\frontmatter`、`\mainmatter`和`\backmatter`命令影響格式。例如，`\frontmatter`將頁碼改為羅馬數字。`\appendix`命令將編號改為`A`、`B`等，所以例如在`\appendix`之後的第一章中，頁首顯示"附錄A"。

## 練習

嘗試演示文件的基本結構，嘗試新增和刪除`\includeonly`的條目，看看效果。

新增一些浮動體並生成圖表和表格列表。如果使用本地安裝的 LaTeX，你能看到需要多少次 LaTeX 執行嗎？（線上系統在"幕後"重新執行 LaTeX，所以額外需要的執行不那麼明顯。）

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```
<!-- {% endraw %} -->

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{前言}
前言文字。參見\cite{doody}。
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{引言}
第一章文字。
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{其他內容}
第二章文字。
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{附錄}
第一個附錄文字。
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
前封面
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
獻給 \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
版權所有 2020 learnlatex。
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
後封面
\end{center}
```
<!-- {% endraw %} -->

----
