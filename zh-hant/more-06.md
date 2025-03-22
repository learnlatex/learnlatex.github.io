---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：使用宏包和定義擴充套件 LaTeX"
description: "本課提供了更多關於宏包載入的細節，展示了用於語言選擇的`babel`宏包，並提供了更多關於自定義命令的細節。"
toc-anchor-text: "更多內容：使用宏包和定義擴充套件 LaTeX"
---

## 載入多個宏包

`\usepackage`命令可以接受一個用逗號分隔的宏包列表，所以你可以一次性載入多個宏包：例如`\usepackage{color,graphicx}`。如果你要給宏包傳遞選項，這些選項會應用到列表中的每個宏包。如果宏包是分開載入的，註釋掉其中一些會更容易。因此我們會堅持每個宏包單獨一行載入。

## `babel`宏包

我們在[主課程](lesson-06)中展示了`babel`宏包作為選擇不同連字規則的方式。它做的遠不止這些，具體取決於使用的語言。例如，在德語中，它提供了一些用於建立"軟"連字元的快捷方式，還提供了一種不需要德語鍵盤就能快速輸入變音符號的方法。注意`\tableofcontents`（目錄）命令通常生成的 "Table of Contents" 標題也會被改為德語的 Inhaltsverzeichnis。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[ngerman]{babel} % 注意選項名稱是'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

其他語言設定會做一些設計上的改變：例如，在傳統的法語排版中，某些標點符號（如`:`）前會有空格，如果你使用`french`選項載入`babel`，這個空格會被自動新增。

## 全局選項

有時，你希望一個選項對所有載入的宏包都可用。這可以通過在`\documentclass`行上給出選項來實現：每個宏包都能"看到"這個選項列表。所以要將文件的語言傳遞給所有宏包，我們可以使用：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## 更多定義

`\newcommand`允許命令最多有九個參數，其中第一個可以是可選的。

如果我們以主課程中的示例為例，我們可以讓顏色成為可選的，預設為藍色。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

關於\kw{蘋果}和\kw[red]{橙子}的一些內容。

\end{document}
```

可選參數用`[]`括起來，如果省略，則使用定義中指定的預設值。

## `\NewDocumentCommand`

從2020年10月的 LaTeX 釋出版本開始，提供了一個擴充套件的定義系統。在較舊的 LaTeX 釋出版本中，這個系統通過`xparse`宏包提供，為了相容性，我們在這裡使用這個宏包。

我們可以重複上面的示例，但使用`\NewDocumentCommand`

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{xparse} % 僅在較舊的LaTeX版本中需要
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

關於\kw{蘋果}和\kw[red]{橙子}的一些內容。

\end{document}
```

與`\newcommand`的相同點：`\NewDocumentCommand`接受要定義的命令（`\kw`）和定義主體，使用`#1`到`#9`表示參數，但是參數的指定方式不同。

與`\newcommand`的不同點：`\newcommand`只給出參數的數量，可選地為第一個參數提供預設值，而`\NewDocumentCommand`中每個參數都用一個字母指定，所以一個兩參數的命令會用`{mm}`而不是`[2]`來指定。這稍微更冗長一些，但允許定義更多形式的命令。這裡我們只給出這個簡單的例子，其中第一個參數是可選的，預設為藍色（`O{blue}`），第二個參數是強制的（`m`）。
