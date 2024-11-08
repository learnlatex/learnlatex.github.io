---
layout: "lesson"
lang: "zh"
title: "数学"
description: "本课介绍了LaTeX的数学模式以及如何输入行内和显示公式，amsmath宏包提供的扩展功能，以及如何在数学模式中更改字体。"
toc-anchor-text: "数学"
toc-description: "数学模式和数学符号。"
---

# 数学

<span
  class="summary">本课介绍了LaTeX的数学模式以及如何输入行内和显示公式，amsmath宏包提供的扩展功能，以及如何在数学模式中更改字体。</span>

排版复杂的数学公式是LaTeX最强大的功能之一。您可以在所谓的"数学模式"中以逻辑方式标记数学内容。

## 数学模式

在数学模式中，空格会被忽略，并且会自动应用正确的字符间距（几乎总是正确的）。

数学模式有两种形式：

* 行内模式
* 显示模式

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
一个包含行内数学公式的句子：$y = mx + c$。
另一个包含行内数学公式的句子：$5^{2}=3^{2}+4^{2}$。

第二段包含显示数学公式。
\[
  y = mx + c
\]
看看段落如何在显示公式后继续。
\end{document}
```

您可能会在其他地方看到"类LaTeX"的数学输入，例如在网页上使用MathJax系统来放置公式。这些系统通常接受LaTeX语法的轻微变体，因为它们实际上并没有在"后台"使用LaTeX。

<p
  class="hint">我们的示例都是<i>正确的</i>LaTeX。如果您在其他上下文中看到不同的内容，可能是因为该示例实际上并没有使用LaTeX。</p>

### 行内数学模式和数学符号

如上所示，行内数学模式用一对美元符号（`$...$`）标记。也可以使用`\( ... \)`符号。简单的表达式无需任何特殊标记就可以输入，您会看到数学内容被适当地排版，并且字母以斜体显示。

行内数学模式会限制公式的垂直大小，以尽可能不影响段落的行距。

注意，_所有_数学内容都应该标记为数学，即使是单个字符：使用`... $2$ ...`而不是`... 2 ...`。否则，例如，当您需要负数并需要数学来获得减号时，`... $-2$ ...`可能会使用与文本数字不同的数学字体（这取决于文档类）。相反，要注意从其他地方复制的文本中出现的数学结构，如使用`$`的货币值或文件名中使用的`_`（可以分别标记为`\$`和`\_`）。

我们可以轻松添加上标和下标；这些用`^`和`_`标记。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
上标 $a^{b}$ 和下标 $a_{b}$。
\end{document}
```

（您可能会看到简单的上下标不使用大括号的例子，但这不是官方语法，可能会出错；始终使用大括号。）

有_很多_专门的数学模式命令。其中一些相当简单，例如`\sin`和`\log`分别表示正弦和对数，或者`\theta`表示希腊字母。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
一些数学：$y = 2 \sin \theta^{2}$。
\end{document}
```

我们不能在这里介绍所有标准的LaTeX数学模式命令，但有许多在线资源列出了标准集合。您可以使用[Detexify](https://detexify.kirelabs.org/classify.html)工具查找数学模式符号的命令。

### 显示数学

您可以在显示数学模式中使用与行内工作完全相同的命令。显示数学模式默认居中，用于较大的公式，这些公式是"段落的一部分"。注意，显示数学环境不允许段落在数学内部结束，因此您不能在源代码中有空行。

段落应该总是在显示之前_开始_，所以不要在显示数学环境之前留空行。如果您需要多行数学内容，不要使用连续的显示数学环境（这会产生不一致的间距）；而是使用`amsmath`宏包提供的多行显示环境之一，我们稍后会介绍。

它对于积分特别有用，例如：

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
一个关于较大公式的段落
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

注意这里如何使用下标和上标符号来设置积分限。

我们在这里添加了一个手动间距：`\,`在`dx`之前创建一个细空格。
微分算子的格式有所不同：一些出版商使用直立的"d"，而其他人使用斜体的"_d_"。一种编写源代码的方法是创建一个可以根据需要调整的命令`\diff`，
[例如](http://www.tug.org/TUGboat/tb41-1/tb127gregorio-math.pdf)
```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\newcommand{\diff}{\mathop{}\!d}            % 斜体
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % 直立
\begin{document}
一个关于较大公式的段落
\[
\int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]
\end{document}
```

您经常需要一个带编号的公式，这可以使用`equation`环境创建。让我们用同样的例子试试：

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
一个关于较大公式的段落
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

公式编号会自动递增，可以是简单的数字，如本例所示，也可以带有节号前缀，如第2节的第5个公式为(2.5)。具体的格式由文档类设置，这里不详细介绍。

## `amsmath`宏包

数学符号非常丰富，这意味着LaTeX内核提供的工具不能涵盖所有内容。`amsmath`宏包扩展了核心支持，涵盖了更多的想法。[`amsmath`用户指南](http://texdoc.org/pkg/amsmath)包含了比我们在这里能展示的更多示例。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\usepackage{amsmath}

\begin{document}
对于$n,k\geq 0$，求解以下递推关系：
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{对于 $n$，$k>0$。}
\end{align*}
\end{document}
```

`align*`环境使公式在`&`符号处对齐，就像表格一样。注意我们如何使用`\quad`插入一些空格，以及`\text`在数学模式中插入一些普通文本。我们还使用了另一个数学模式命令`\binom`来表示二项式系数。

注意这里我们使用了`align*`，公式没有编号。大多数数学环境默认会给公式编号，带星号的变体（带`*`）则禁用编号。

该宏包还有几个其他方便的环境，例如用于矩阵的环境。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\usepackage{amsmath}
\begin{document}
AMS矩阵。
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

## 数学模式中的字体

与普通文本不同，数学模式中的字体变化通常传达非常特定的含义。因此，它们通常被显式写出。有一组您需要的命令：

- `\mathrm`：罗马体（直立）
- `\mathit`：像"文本"那样间距的斜体
- `\mathbf`：粗体
- `\mathsf`：无衬线体
- `\mathtt`：等宽（打字机）字体
- `\mathbb`：双线（黑板粗体）（由`amsfonts`宏包提供）

这些都以拉丁字母为参数，所以例如我们可以这样写一个矩阵：

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
矩阵$\mathbf{M}$。
\end{document}
```

注意，默认的数学斜体会分隔字母，以便它们可以用来表示变量的乘积。使用`\mathit`来使单词斜体。

`\math..`字体命令使用为数学使用而指定的字体。有时您需要插入一个属于外部句子结构的词，需要当前的文本字体，为此您可以使用`\text{...}`（由`amsmath`宏包提供）或特定的字体样式如`\textrm{..}`。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\usepackage{amsmath}
\begin{document}

$\text{坏用法 } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{坏用法 } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```

如果您需要使其他符号变为粗体，[请参见更多细节](more-10)。

## 练习

尝试一些基本的数学模式工作：取示例并在行内和显示数学模式之间切换。您能看出这有什么效果吗？

尝试添加其他希腊字母，包括大小写。您应该能够猜出它们的名称。

尝试字体更改命令：当您尝试嵌套它们时会发生什么？

显示数学默认居中；尝试添加文档类选项`[fleqn]`（左对齐公式）到上面的一些示例，看看不同的布局。同样，公式编号通常在右边。尝试添加`[leqno]`（左边公式编号）文档类选项。