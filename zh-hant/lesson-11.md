---
layout: "lesson"
lang: "zh-hant"
title: "字型和間距"
description: "本課展示了如何更改檔案中的間距元素以及如何在 LaTeX 原始碼中新增顯式的格式化指令。"
toc-anchor-text: "字型和間距"
toc-description: "文字格式化的視覺呈現。"
---

# 字型和間距

<span
  class="summary">本課展示了如何更改檔案中的間距元素以及如何在 LaTeX 原始碼中新增顯式的格式化指令。</span>

我們已經看到，在輸入中的空行會在 LaTeX 中生成新段落。這表現為段落會以縮排開始。

## 段落間距

一種常見的樣式是段落之間不縮排，而是在段落之間新增"空行"。我們可以使用`parskip`宏包來實現這一點。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[parfill]{parskip}
\usepackage{zhlipsum} % 僅用於生成填充文字
\begin{document}
\zhlipsum
\end{document}
```

## 強制換行

大多數情況下，你不應該在 LaTeX 中強制換行：你幾乎肯定是想要一個新段落或者使用`parskip`（如我們剛才看到的）在段落之間新增"空行"。

有_少數_地方你需要使用`\\`來開始新行而不開始新段落：

- 在表格行末尾
- 在`center`環境內
- 在詩歌中（`verse`環境）

幾乎總是，如果你不在這些特殊的地方，你就_不應該_使用`\\`。

## 新增顯式空格

我們可以使用`\,`插入一個細空格（約為正常厚度的一半）。在數學模式中，還有其他命令：`\.`、`\:`和`\;`，以及一個用於負空格的命令：`\!`。

很少情況下，例如在建立標題頁時，你可能需要新增顯式的水平或垂直空格。我們可以使用`\hspace`和`\vspace`來實現。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一些文字 \hspace{1cm} 更多文字。

\vspace{10cm}

更多的文字。
\end{document}
```

## 顯式文字格式化

我們在[第3課](lesson-03)中寫到，大多數情況下邏輯結構是更好的選擇。但有時你想要讓文字變為粗體、斜體、等寬等。有兩種類型的命令用於此：一種用於短文字片段，另一種用於"執行"的材料。

對於短文字片段，我們使用`\textbf`、`\textit`、`\textrm`、`\textsf`、`\texttt`和`\textsc`。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
讓我們玩玩字型：\textbf{粗體}、\textit{斜體}、\textrm{羅馬體}、
\textsf{無襯線體}、\texttt{等寬體}和\textsc{小型大寫}。
\end{document}
```

對於執行文字，我們使用改變字型設定的命令；這裡的命令例如是`\bfseries`和`\itshape`。因為這些命令不會"停止"，我們需要將它們放在一個_組_中，以防止它們影響整個檔案。LaTeX 環境是組，表格單元格也是，或者我們可以使用`{...}`來建立一個顯式的組。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
正常文字。

{\itshape

這段文字是斜體的。

這段也是：效果不限於一個段落。

}
\end{document}
```

我們可以用類似的方式設定字型大小；這些命令都是持續性的。字型大小是相對的：`\huge`、`\large`、`\normalsize`、`\small`和`\footnotesize`是常見的。重要的是要在改變字型大小回來之前結束段落；看看我們這裡如何新增一個顯式的`\par`（段落結束）。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
正常文字。

\begin{center}
{\itshape\large 一些文字\par}
正常文字
{\bfseries\small 更小的文字\par}
\end{center}

\end{document}
```

## 練習

嘗試手動格式化：建立一個`titlepage`環境並嘗試插入不同的空格和字型更改。當我們組合字型更改時會發生什麼？這與數學模式相比如何？

如果你更改一個大段落的字型大小（嘗試用`\tiny`然後用`\huge`）但在關閉組之前不發出最後的`\par`會發生什麼？
