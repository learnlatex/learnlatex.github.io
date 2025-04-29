---
layout: "lesson"
lang: "zh-hant"
title: "更多內容：數學"
description: "本課展示了更多`amsmath`對齊環境、如何使數學符號加粗、數學擴充套件宏包`mathtools`，以及在數學中使用 Unicode 輸入。"
toc-anchor-text: "更多內容：數學"
---

## 更多`amsmath`對齊

除了主課程中展示的`align*`環境外，`amsmath`還有幾個其他的數學顯示結構，特別是`gather`用於不需要對齊的多行顯示，以及`multline`用於將較大的單個表示式分成多行，將第一行左對齊，最後一行右對齊。在所有情況下，帶`*`的形式預設省略方程編號。

```latex
% !TEX program=lualatex

\documentclass{ctexart}


\usepackage{amsmath}

\begin{document}

Gather環境
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline環境
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### 數學對齊中的列

`amsmath`的對齊環境設計為每對列的第一列右對齊，第二列左對齊。這允許顯示多個方程，每個方程都圍繞其關係符號對齊。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{amsmath}
\begin{document}
對齊的方程
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

此外，還有以`ed`結尾的顯示環境變體，用於在更大的顯示中製作子項。
例如，`aligned`和`gathered`分別是`align`和`gather`的變體。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned`接受類似於`tabular`的位置可選參數。
這在對齊內聯數學公式的頂行時經常有用；
比較下面示例中列表中的項目。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## 數學加粗
標準 LaTeX 有兩種方法使數學符號加粗。要使整個表示式加粗，在進入表示式前使用`\boldmath`。命令`\mathbf`也可用於將單個字母或單詞設定為直立粗體羅馬字型。

```latex
% !TEX program=lualatex

\documentclass{ctexart}


\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % 錯誤使用\mathbf
\end{document}
```

如果你想在普通權重表示式中訪問粗體符號（就像`\boldmath`使用的那樣），可以使用`bm`宏包中的命令`\bm`。注意`\bm`也適用於`=`和希臘字母等符號。（注意在上面的示例中，`\mathbf`對`\pi`沒有效果。）

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## Mathtools
`mathtools`宏包載入`amsmath`並新增了一些額外功能，比如`amsmath`矩陣環境的變體，允許指定列對齊方式。
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

## Unicode數學

如[第14課](lesson-14)所述，有一些變體 TeX 引擎使用 OpenType 字型。預設情況下，這些引擎仍然使用經典的 TeX 數學字型，但你可以使用`unicode-math`宏包來使用 OpenType 數學字型。這個宏包的細節超出了本課程的範圍，我們建議你參考[宏包文件](https://texdoc.org/pkg/unicode-math)。
但是，我們在這裡給出一個小示例。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

一二三
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicode 數學字母數字符號
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
