---
layout: "lesson"
lang: "zh-hant"
title: "通過宏包和定義擴充套件 LaTeX 功能"
description: "本課展示了如何通過使用不同的宏包來擴充套件 LaTeX 以滿足你的需求並進一步更改其佈局，還展示了如何定義自己的命令。"
toc-anchor-text: "擴充套件 LaTeX"
toc-description: "使用宏包和定義。"
---

# 擴充套件LaTeX

<span
  class="summary">本課展示了如何通過使用不同的宏包來擴充套件 LaTeX 以滿足你的需求並進一步更改其佈局，還展示了如何定義自己的命令。</span>

在聲明了文件類之後，在導言區中你可以通過新增一個或多個*宏包*來修改 LaTeX 的功能。這些宏包可以：

- 改變 LaTeX 某些部分的工作方式
- 為 LaTeX 新增新命令
- 改變文件設計

## 改變LaTeX的工作方式

LaTeX 的"核心"（LaTeX 的核心部分）在使用者自定義方面相當有限，因此一些附加宏包處理了一些非常常見的需求。首先是改變 LaTeX 如何處理特定語言的排版（斷字、標點、引號、本地化等）。不同的語言有不同的規則，所以告訴 LaTeX 使用哪種語言很重要。這由`babel`宏包處理。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

% 載入babel宏包，並選擇語言，中文無須載入
%\usepackage[french]{babel}

\usepackage[width = 6cm]{geometry} % 為了在這裡強制斷字

\begin{document}

這是一些填充文字，用來演示 LaTeX 如何斷字處理材料，並且能夠給我們至少一個斷字點。
這是一些填充文字，用來演示 LaTeX 如何斷字處理材料，並且能夠給我們至少一個斷字點。

\end{document}
```

如果你在編寫西文文件時遇到斷字問題，請嘗試使用`babel`宏包。

<p class="hint">你可以將檔案內容改為西文，並嘗試取消註釋那行（顯然有誤導性的）載入`babel`的行，看看效果。（預設的斷字規則是美式英語。）</p>

`babel`宏包除了斷字之外還做了很多工作，這取決於所涉及的語言；如果你需要更多細節，我們提供了[更多資訊](more-06)。

## 改變設計

能夠獨立於文件類調整某些設計方面是很有用的。最明顯的一個是頁邊距。我們剛才在上面的例子中使用了`geometry`宏包，但讓我們現在專門討論頁邊距。

```latex
% !TEX program=lualatex

% 請注意，為了演示\chapter命令，我們使用ctexbook文件類
\documentclass{ctexbook} 
\usepackage[margin=1in]{geometry}

\begin{document}
嗨，世界！

這是一個第一個文件。


% ================
\chapter{第一章}
第一章的介紹。


\section{第一節的標題}
第一節中的材料文字

第二段。

\subsection{第一節的小節}

小節中的材料文字。


% ================
\section{第二節}

第二節的文字。

\end{document}
```

你可以將上述程式碼中對`geometry`宏包引用註釋掉，比較註釋前後的效果。

`geometry`宏包除了可以調整文件的頁邊距，還可以修改頁首和頁尾的高度、寬度、位置等。

## 新增新功能

LaTeX 的優勢之一是你可以從成千上萬的宏包中選擇，包括用於寫數學文字的宏包、用於超連結的宏包、用於複雜顏色處理的宏包等。我們將在後面的課程中看到一些更常見的宏包。

## 定義命令

有時你需要特定於文件的命令，可能是一些在可用宏包中找不到的功能，或者只是一個用於輸入多次使用的常見表示式的命令。

以下示例展示了一個用於以特定樣式輸出關鍵詞的命令。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

% 定義一個命令\kw，用於輸出加粗的斜體文字
\newcommand\kw[1]{\textbf{\itshape #1}}

\begin{document}

關於\kw{蘋果}和\kw{橙子}的一些內容。

\end{document}
```

在定義中，`[1]`表示參數的數量（這裡是一個），`#1`表示提供的第一個參數（這個例子中是`蘋果`或`橙子`）。你最多可以有九個參數，但通常最好只有一個參數，或者有時根本沒有參數。

定義命令不僅可以減少編寫文件所需的輸入，還有助於分離樣式資訊。如果決定使用不同的樣式來表示關鍵詞，不必編輯整個文件，只需要更改定義即可。這裡我們載入`xcolor`宏包來提供顏色，並在格式化中使用藍色代替粗體。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{xcolor}

% 定義一個命令\kw，用於輸出加粗的斜體文字，並著色為藍色
\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

關於\kw{蘋果}和\kw{橙子}的一些內容。

\end{document}
```

注意，定義太多命令或定義多參數的命令可能會使文件原始碼更難理解，因為它使用了不熟悉的語法。定義特定於文件的命令的能力應該謹慎使用。

## 練習

嘗試用其他歐洲語言編寫一些文字，看看`babel`如何影響斷字：你可能可以在網上找到一些文字，並猜測正確的選項。

嘗試更改`geometry`示例中的頁邊距。你可以使用逗號分隔列表分別設定`top`、`bottom`、`left`和`right`邊距。

嘗試載入`lipsum`宏包，然後在文件中新增命令`\lipsum`。你能猜到為什麼這個宏包對製作示例很有用嗎？

嘗試更改`\kw`的定義以獲得不同的樣式。
