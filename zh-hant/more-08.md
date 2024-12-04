---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：表格"
description: "本課展示了更多自定義表格的方法，包括列的樣式設定、間距和規則的更改，以及提供不同表格擴充套件功能的其他宏包。"
toc-anchor-text: "更多內容：表格"
---

## 其他導言區內容

由於課程沒有涵蓋所有可用的導言區標記，這裡用示例解釋了其他一些標記。你可能想重新檢視課程開始時的表格，以了解可用內容的概覽。那裡提供的簡短描述應該足以讓你在理解了`l`、`c`、`r`和`p`之後理解不同的列類型`m`、`b`、`w`和`W`的作用。如果不明白，你可以嘗試做些實驗。還缺少的是其他有用的導言區標記`>`、`<`、`@`、`!`和`|`。

### 設定列的樣式

由於`>`和`<`可以用來在列的單元格內容前後新增內容，你可以使用它們來新增影響列外觀的命令。例如，如果你想要將第一列設為斜體並在其後新增冒號，可以這樣做：

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  動物 & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  馬    & 乾草  & 大     \\
  青蛙  & 蒼蠅  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\itshape`使所有後續文字變為斜體，但其效果被"限制"在表格單元格內。我們將在[幾節課後](lesson-11)學習手動字型格式設定。

你可能不希望第一個單元格受到影響，因為它是表頭。這裡可以使用`\multicolumn`。記住它可以用來改變單個單元格的對齊方式，如下所示。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{動物} & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  馬    & 乾草  & 大     \\
  青蛙  & 蒼蠅  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### 操作列間距

通常 LaTeX 會在每列兩側新增一些空白以使其看起來平衡並分隔它們。這個空白的大小由長度`\tabcolsep`定義。由於每列兩側都有填充，你在表格兩端各得到一個`\tabcolsep`，在兩列之間得到`2\tabcolsep` &mdash; 每列各貢獻一個。你可以使用`\setlength`調整這個空白到任何長度：

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  動物 & 食物  & 大小   \\
  狗   & 肉    & 中等   \\
  馬   & 乾草  & 大     \\
  青蛙 & 蒼蠅  & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

你可以使用`@`將這個空白改為任意內容。這將移除兩列之間或表格兩端的填充，並在你指定為參數的列之間放置任何內容：

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  動物 & 食物  & 大小   \\
  狗   & 肉    & 中等   \\
  馬   & 乾草  & 大     \\
  青蛙 & 蒼蠅  & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

（我們很快就會再次看到`\hspace`[](lesson-11)；你可能猜到它新增了一個水平空白。）

`!`導言區標記做的事情很相似。不同的是，它將其參數 _新增_ 到兩列之間空白的中心。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  動物 & 食物  & 大小   \\
  狗   & 肉    & 中等   \\
  馬   & 乾草  & 大     \\
  青蛙 & 蒼蠅  & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### 豎線

有時你不得不使用豎線。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  動物 & 食物  & 大小   \\[2pt]
  狗   & 肉    & 中等   \\
  馬   & 乾草  & 大     \\
  青蛙 & 蒼蠅  & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

你可能注意到`|`的行為很像`!{decl}`；它在保持填充不變的情況下在兩列之間新增豎線。但這有一個很大的缺點：豎線與`booktabs`提供的水平線不相容。你可以使用 LaTeX 提供的水平線；這些是`\hline`（對應於`\toprule`、`\midrule`和`\bottomrule`）和`\cline`（其行為類似於`\cmidrule`）。如上所示，豎線會跨越`\\`可選參數中指定的任何空白。

## 自定義`booktabs`線

所有`booktabs`線和`\addlinespace`都支援一個可選參數，用於指定線的粗細。此外，`\cmidrule`提供的修剪可以通過在`r`或`l`後的花括號中指定長度來自定義。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  動物 & 食物  & 大小   \\ \midrule[1pt]
  狗   & 肉    & 中等   \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  馬   & 乾草  & 大     \\
  青蛙 & 蒼蠅  & 小     \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## 列中的數字對齊

表格中數字的對齊可以通過`siunitx`宏包提供的列類型`S`來處理。

一個帶有兩個對齊數字列的簡單示例是：

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{值} &  {更多值} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```

注意任何非數字的單元格必須用花括號"保護"。

`siunitx`宏包提供了許多用於以不同方式格式化數字的可能性；請參見[宏包文件](https://texdoc.org/pkg/siunitx)。

## 指定表格總寬度

`tabular`環境的寬度是根據表格內容自動確定的。有兩種常用的機制來指定不同的總寬度。

注意，幾乎總是最好按照下面的方式將表格格式化為指定寬度（如果需要，可能使用`\small`等字型大小），而不是使用`\resizebox`等命令來縮放表格，因為後者會產生不一致的字型大小和線寬。

### `tabular*`

`tabular*`環境需要一個額外的 _寬度_ 參數，用於指定表格的總寬度。必須使用`\extracolsep`命令向表格新增可伸縮空白。這個空白會從該點開始新增到所有列之間。它幾乎總是與`\fill`一起使用，這是一個特殊的空白，會伸縮到所需的大小。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

`tabularx`環境（由同名宏包提供）的語法與`tabular*`類似，但不是調整列間空白，而是調整由新列類型`X`指定的列的寬度。這相當於為自動確定的寬度指定`p{...}`。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

與這些課程中討論的其他形式不同，`tabularx`需要多次排版表格來確定最終的設定。這意味著在使用該環境時有一些限制；請參見[宏包文件](https://texdoc.org/pkg/tabularx)。

## 多頁表格

`tabular`形成一個不可分割的盒子，因此它必須足夠小以適合一頁，而且通常放在浮動的`table`環境中。

有幾個宏包提供了類似語法的可以分頁的變體。這裡我們展示`longtable`宏包：

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{一個長表格}\\
左邊 & 右邊\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
條目 & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
一個更寬的條目 & b\\  
\end{longtable}

\end{document}
```

`longtable`的顯著特點是它在所有頁面上保持列寬一致；然而，為了實現這一點，它可能需要執行 LaTeX 多次，這樣後面遇到的寬條目就可以影響前面頁面上的列寬。

## 表格註釋

在表格中需要腳註樣的標記來引用表格下方的註釋是很常見的。`threeparttable`宏包簡化了這種表格的標記，它會將註釋設定在與表格相同寬度的塊中。有關完整細節，請參見[宏包文件](https://texdoc.org/pkg/threeparttable)，但這裡我們給出一個簡單的示例。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{一個示例}
   \begin{tabular}{ll}
   \hline
    一個條目 & 42\tnote{1}\\
    另一個條目 & 24\tnote{2}\\
    \hline
   \end{tabular}
   \begin{tablenotes}
   \item [1] 第一個註釋。
   \item [2] 第二個註釋。
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## 在窄列中排版

預設的斷行設定假設相對較長的行，以在選擇斷行位置時提供一些靈活性。以下示例展示了一些可能的方法。第一個表格顯示了詞間距被拉伸，TeX 警告Underfull 行。使用`\raggedright`通常可以避免這個問題，但可能會讓一些行"太參差不齊"。`ragged2e`宏包中的`\RaggedRight`命令是一個折衷方案；它允許一些行長的參差不齊，但也會在必要時進行連字，如第三個表格所示。

注意這裡使用了`\arraybackslash`，它重置了`\\`的定義，使其結束表格行。

另一種技術，如第四個表格所示，是使用較小的字型，這樣列相對於文字大小就不那麼窄了。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
一 & 在窄段落中設定的長文字，還有一些示例文字。\\
二 & 在窄段落中設定的不同長文字，還有一些難以連字的詞。
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
一 & 在窄段落中設定的長文字，還有一些示例文字。\\
二 & 在窄段落中設定的不同長文字，還有一些難以連字的詞。
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
一 & 在窄段落中設定的長文字，還有一些示例文字。\\
二 & 在窄段落中設定的不同長文字，還有一些難以連字的詞。
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
一 & 在窄段落中設定的長文字，還有一些示例文字。\\
二 & 在窄段落中設定的不同長文字，還有一些難以連字的詞。
\end{tabular}

\end{table}

\end{document}
```

## 定義新的列類型

如[主課程](lesson-08)中所示，`array`宏包允許像`>{\bfseries}c`這樣的結構來表示粗體居中列。定義一個新的列類型來封裝這種用法通常很方便，例如

```latex
\newcolumntype{B}{>{\bfseries}c}
```
這樣就可以在表格導言區中使用`B`來指定一個粗體居中列。


## 垂直技巧

通常，與其讓一個單元格跨越多行，不如在一個單元格中使用巢狀的`tabular`環境來垂直分割一些單元格。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  測試 & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  內容 & 在 & 這裡 \\
  內容 & 在 & 這裡 \\
  內容 & 在 & 這裡 \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

注意你可以通過`tabular`的可選參數控制垂直對齊；它支援使用`t`、`c`或`b`分別表示頂部、居中或底部對齊，使用方式如下：

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  測試 & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  內容 & 在 & 這裡 \\
  內容 & 在 & 這裡 \\
  內容 & 在 & 這裡 \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## 表格中的行間距

在主課程中我們演示了`\addlinespace`從`booktabs`宏包，它對於在特定行之間新增額外空間很有用。

有兩個一般參數控制行間距，`\arraystretch`和`\extrarowheight`（後者來自`array`宏包）。

```latex
\renewcommand\arraystretch{1.5}
```

將增加基線間距50%。


通常，尤其是在使用`\hline`時，最好只是增加行的高度，而不增加它們在基線以下的深度。以下示例演示了`\extrarowheight`參數。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
