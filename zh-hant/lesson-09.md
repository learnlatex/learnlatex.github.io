---
layout: "lesson"
lang: "zh-hant"
title: "交叉引用"
description: "本課展示了如何在文件中引用編號的元素，如圖片、表格和章節。"
toc-anchor-text: "交叉引用"
toc-description: "引用圖片、表格等。"
---

# 交叉引用

<span
  class="summary">本課展示了如何在文件中引用編號的元素，如圖片、表格和章節。</span>

當你在寫長文件時，你會需要引用編號的元素，如圖片、表格或章節。幸運的是，LaTeX 可以自動新增正確的編號；我們只需要設定好一些事情。

## `\label`和`\ref`機制

要讓 LaTeX 記住文件中的某個位置，你需要給它一個標籤，然後在其他地方引用它。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
嗨，世界！

這是一個第一個文件。

\section{標題}

這是第一節的材料文字。


\subsection{第一節的小節}
\label{subsec:labelone}

第一小節的材料文字。
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

在小節~\ref{subsec:labelone}中有公式~\ref{eq:labeltwo}。
\end{document}
```

- 這裡有兩個`\label{...}`命令，一個在小節之後，一個在公式環境內。
- 它們與最後一句中的`\ref{...}`命令相關聯。
- 當你執行 LaTeX 時，它會將標籤的資訊儲存到輔助檔案中。
- 對於`\label{subsec:labelone}`，LaTeX 知道它現在在一個小節中，所以它儲存了小節的編號。
- 對於`\label{eq:labeltwo}`，LaTeX 知道最近感興趣的環境是一個公式，所以它儲存了該公式的資訊。
- 當你請求引用時，LaTeX 從輔助檔案中獲取資訊。
- `subsec:`和`eq:`不會被 LaTeX 使用；相反，它只是跟蹤它最近處理的內容。但當你在寫作時，這些幫助你記住標籤的含義。

- 你可能會看到引用在PDF輸出中顯示為粗體雙問號，**??**。這是因為由於使用輔助檔案的工作方式，第一次編譯文件時標籤尚未儲存。再執行一次 LaTeX 就可以了。（通常在寫作時你會多次執行 LaTeX，所以在實踐中這不是一個問題。）

- 注意引用前的波浪號（`~`）字元。
你不希望在"小節"和其編號之間，或"公式"和其編號之間出現換行。使用波浪號意味著 LaTeX 不會在那裡斷行。

## `\label`的位置

`\label`命令總是引用前一個編號的實體：一個節、一個公式、一個浮動體等。這意味著`\label`總是要放在你想要引用的東西_之後_。特別是，當你建立浮動體時，`\label`必須放在_後面_（或最好放在）`\caption`命令之內，但在浮動環境內。

## 練習

嘗試在測試文件中新增新的編號部分（節、小節、列舉列表），看看需要多少次執行才能讓`\label`命令正常工作。

新增一些浮動體，看看當你把`\label`放在`\caption`_之前_而不是之後時會發生什麼；你能預測結果嗎？

如果你把一個公式的`\label`放在`\end{equation}`_之後_會發生什麼？
