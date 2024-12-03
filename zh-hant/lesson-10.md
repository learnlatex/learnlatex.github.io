---
layout: "lesson"
lang: "zh-hant"
title: "數學"
description: "本課介紹了 LaTeX 的數學模式以及如何輸入行內和顯示公式，amsmath 宏包提供的擴充套件功能，以及如何在數學模式中更改字型。"
toc-anchor-text: "數學"
toc-description: "數學模式和數學符號。"
---

# 數學

<span
  class="summary">本課介紹了 LaTeX 的數學模式以及如何輸入行內和顯示公式，`amsmath`宏包提供的擴充套件功能，以及如何在數學模式中更改字型。</span>

排版複雜的數學公式是 LaTeX 最強大的功能之一。你可以在所謂的"數學模式"中以邏輯方式標記數學內容。

## 數學模式

在數學模式中，空格會被忽略，並且會自動應用正確的字元間距（幾乎總是正確的）。

數學模式有兩種形式：

* 行內模式
* 顯示模式

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一個包含行內數學公式的句子：$y = mx + c$。
另一個包含行內數學公式的句子：$5^{2}=3^{2}+4^{2}$。

第二段包含顯示數學公式。
\[
  y = mx + c
\]
看看段落如何在顯示公式後繼續。
\end{document}
```

你可能會在其他地方看到"類 LaTeX"的數學輸入，例如在網頁上使用MathJax系統來放置公式。這些系統通常接受 LaTeX 語法的輕微變體，因為它們實際上並沒有在"後臺"使用 LaTeX。

<p
  class="hint">我們的示例都是<i>正確的</i> LaTeX。如果你在其他上下文中看到不同的內容，可能是因為該示例實際上並沒有使用 LaTeX。</p>

### 行內數學模式和數學符號

如上所示，行內數學模式用一對美元符號（`$...$`）標記。也可以使用`\( ... \)`符號。簡單的表示式無需任何特殊標記就可以輸入，你會看到數學內容被適當地排版，並且字母以斜體顯示。

行內數學模式會限制公式的垂直大小，以儘可能不影響段落的行距。

注意，_所有_數學內容都應該標記為數學，即使是單個字元：使用`... $2$ ...`而不是`... 2 ...`。否則，例如，當你需要負數並需要數學來獲得減號時，`... $-2$ ...`可能會使用與文字數字不同的數學字型（這取決於文件類）。相反，要注意從其他地方複製的文字中出現的數學結構，如使用`$`的貨幣值或檔名中使用的`_`（可以分別標記為`\$`和`\_`）。

我們可以輕鬆新增上標和下標；這些用`^`和`_`標記。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
上標 $a^{b}$ 和下標 $a_{b}$。
\end{document}
```

（你可能會看到簡單的上下標不使用大括號的例子，但這不是官方語法，可能會出錯；最佳實踐是始終使用大括號。）

有 _很多_ 專門的數學模式命令。其中一些相當簡單，例如`\sin`和`\log`分別表示正弦和對數，或者`\theta`表示希臘字母。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一些數學：$y = 2 \sin \theta^{2}$。
\end{document}
```

我們不能在這裡介紹所有標準的 LaTeX 數學模式命令，但有許多線上資源列出了標準集合。你可以使用 [Detexify](https://detexify.kirelabs.org/classify.html)工具查詢數學模式符號的命令。

### 顯示數學

你可以在顯示數學模式中使用與行內工作完全相同的命令。顯示數學模式預設居中，用於較大的公式，這些公式是"段落的一部分"。注意，顯示數學環境不允許段落在數學內部結束，因此你不能在原始碼中有空行。

段落應該總是在顯示之前 _開始_，所以不要在顯示數學環境之前留空行。如果你需要多行數學內容，不要使用連續的顯示數學環境（這會產生不一致的間距）；而是使用`amsmath`宏包提供的多行顯示環境之一，我們稍後會介紹。

它對於積分特別有用，例如：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一個關於較大公式的段落
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

注意這裡如何使用下標和上標符號來設定積分限。

我們在這裡新增了一個手動間距：`\,`在`dx`之前建立一個細空格。
微分運算元的格式有所不同：一些出版商使用直立的"d"，而其他人使用斜體的"_d_"。一種編寫原始碼的方法是建立一個可以根據需要調整的命令`\diff`，
[例子](http://www.tug.org/TUGboat/tb41-1/tb127gregorio-math.pdf)

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\newcommand{\diff}{\mathop{}\!d}            % 斜體
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % 直立
\begin{document}
一個關於較大公式的段落
\[
\int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]
\end{document}
```

你經常需要一個帶編號的公式，這可以使用`equation`環境建立。讓我們用同樣的例子試試：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
一個關於較大公式的段落
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

公式編號會自動遞增，可以是簡單的數字，如本例所示，也可以帶有節號字首，如第2節的第5個公式為(2.5)。具體的格式由文件類設定，這裡不詳細介紹。

## `amsmath`宏包

數學符號非常豐富，這意味著 LaTeX 核心提供的工具不能涵蓋所有內容。`amsmath`宏包擴充套件了核心支援，涵蓋了更多的想法。[`amsmath`使用者指南](http://texdoc.org/pkg/amsmath)包含了比我們在這裡能展示的更多示例。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmath}

\begin{document}
對於$n,k\geq 0$，求解以下遞推關係：
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{對於 $n$，$k>0$。}
\end{align*}
\end{document}
```

`align*`環境使公式在`&`符號處對齊，就像表格一樣。注意我們如何使用`\quad`插入一些空格，以及`\text`在數學模式中插入一些普通文字。我們還使用了另一個數學模式命令`\binom`來表示二項式係數。

注意這裡我們使用了`align*`，公式沒有編號。大多數數學環境預設會給公式編號，帶星號的變體（帶`*`）則禁用編號。

該宏包還有幾個其他方便的環境，例如用於矩陣的環境。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmath}
\begin{document}
AMS矩陣。
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

## 數學模式中的字型

與普通文字不同，數學模式中的字型變化通常傳達非常特定的含義。因此，它們通常被顯式寫出。有一組你需要的命令：

- `\mathrm`：羅馬體（直立）
- `\mathit`：像"文字"那樣間距的斜體
- `\mathbf`：粗體
- `\mathsf`：無襯線體
- `\mathtt`：等寬（打字機）字型
- `\mathbb`：雙線（黑板粗體）（由`amsfonts`宏包提供）

這些都以拉丁字母為參數，所以例如我們可以這樣寫一個矩陣：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
矩陣$\mathbf{M}$。
\end{document}
```

注意，預設的數學斜體會分隔字母，以便它們可以用來表示變數的乘積。使用`\mathit`來使字母斜體。

`\math..`字型命令使用為數學使用而指定的字型。有時你需要插入一個屬於外部句子結構的詞，需要當前的文字字型，為此你可以使用`\text{...}`（由`amsmath`宏包提供）或特定的字型樣式如`\textrm{..}`。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmath}
\begin{document}

$\text{壞用法 } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{壞用法 } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```

如果你需要使其他符號變為粗體，[請參見更多細節](more-10)。

## 練習

嘗試一些基本的數學模式工作：取示例並在行內和顯示數學模式之間切換。你能看出這有什麼效果嗎？

嘗試新增其他希臘字母，包括大小寫。你應該能夠猜出它們的名稱。

嘗試字型更改命令：當你嘗試巢狀它們時會發生什麼？

顯示數學預設居中；嘗試新增文件類選項`[fleqn]`（左對齊公式）到上面的一些示例，看看不同的佈局。同樣，公式編號通常在右邊。嘗試新增`[leqno]`（左邊公式編號）文件類選項。