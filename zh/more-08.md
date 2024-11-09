---
layout: "lesson"
lang: "zh"
title: "更多内容：表格"
description: "本课展示了更多自定义表格的方法，包括列的样式设置、间距和规则的更改，以及提供不同表格扩展功能的其他宏包。"
toc-anchor-text: "更多内容：表格"
---

## 其他导言区内容

由于课程没有涵盖所有可用的导言区标记，这里用示例解释了其他一些标记。您可能想重新查看课程开始时的表格，以了解可用内容的概览。那里提供的简短描述应该足以让您在理解了`l`、`c`、`r`和`p`之后理解不同的列类型`m`、`b`、`w`和`W`的作用。如果不明白，您可以尝试做些实验。还缺少的是其他有用的导言区标记`>`、`<`、`@`、`!`和`|`。

### 设置列的样式

由于`>`和`<`可以用来在列的单元格内容前后添加内容，您可以使用它们来添加影响列外观的命令。例如，如果您想要将第一列设为斜体并在其后添加冒号，可以这样做：

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  动物 & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\itshape`使所有后续文本变为斜体，但其效果被"限制"在表格单元格内。我们将在[几节课后](lesson-11)学习手动字体格式设置。

您可能不希望第一个单元格受到影响，因为它是表头。这里可以使用`\multicolumn`。记住它可以用来改变单个单元格的对齐方式，如下所示。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{动物} & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### 操作列间距

通常LaTeX会在每列两侧添加一些空白以使其看起来平衡并分隔它们。这个空白的大小由长度`\tabcolsep`定义。由于每列两侧都有填充，您在表格两端各得到一个`\tabcolsep`，在两列之间得到`2\tabcolsep` &mdash; 每列各贡献一个。您可以使用`\setlength`调整这个空白到任何长度：

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  动物 & 食物  & 大小   \\
  狗   & 肉    & 中等   \\
  马   & 干草  & 大     \\
  青蛙 & 苍蝇  & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

您可以使用`@`将这个空白改为任意内容。这将移除两列之间或表格两端的填充，并在您指定为参数的列之间放置任何内容：

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  动物 & 食物  & 大小   \\
  狗   & 肉    & 中等   \\
  马   & 干草  & 大     \\
  青蛙 & 苍蝇  & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

（我们很快就会再次看到`\hspace`[](lesson-11)；您可能猜到它添加了一个水平空白。）

`!`导言区标记做的事情很相似。不同的是，它将其参数 _添加_ 到两列之间空白的中心。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  动物 & 食物  & 大小   \\
  狗   & 肉    & 中等   \\
  马   & 干草  & 大     \\
  青蛙 & 苍蝇  & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### 垂直规则

有时您不得不使用垂直规则。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  动物 & 食物  & 大小   \\[2pt]
  狗   & 肉    & 中等   \\
  马   & 干草  & 大     \\
  青蛙 & 苍蝇  & 小     \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

您可能注意到`|`的行为很像`!{decl}`；它在保持填充不变的情况下在两列之间添加垂直规则。但这有一个很大的缺点：垂直规则与`booktabs`提供的水平规则不兼容。您可以使用LaTeX提供的水平规则；这些是`\hline`（对应于`\toprule`、`\midrule`和`\bottomrule`）和`\cline`（其行为类似于`\cmidrule`）。如上所示，垂直规则会跨越`\\`可选参数中指定的任何空白。

## 自定义`booktabs`规则

所有`booktabs`规则和`\addlinespace`都支持一个可选参数，用于指定规则的粗细。此外，`\cmidrule`提供的修剪可以通过在`r`或`l`后的花括号中指定长度来自定义。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  动物 & 食物  & 大小   \\ \midrule[1pt]
  狗   & 肉    & 中等   \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  马   & 干草  & 大     \\
  青蛙 & 苍蝇  & 小     \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## 列中的数字对齐

表格中数字的对齐可以通过`siunitx`宏包提供的列类型`S`来处理。

一个带有两个对齐数字列的简单示例是：

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

注意任何非数字的单元格必须用花括号"保护"。

`siunitx`宏包提供了许多用于以不同方式格式化数字的可能性；请参见[宏包文档](https://texdoc.org/pkg/siunitx)。

## 指定表格总宽度

`tabular`环境的宽度是根据表格内容自动确定的。有两种常用的机制来指定不同的总宽度。

注意，几乎总是最好按照下面的方式将表格格式化为指定宽度（如果需要，可能使用`\small`等字体大小），而不是使用`\resizebox`等命令来缩放表格，因为后者会产生不一致的字体大小和规则宽度。

### `tabular*`

`tabular*`环境需要一个额外的_宽度_参数，用于指定表格的总宽度。必须使用`\extracolsep`命令向表格添加可伸缩空白。这个空白会从该点开始添加到所有列之间。它几乎总是与`\fill`一起使用，这是一个特殊的空白，会伸缩到所需的大小。

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

`tabularx`环境（由同名宏包提供）的语法与`tabular*`类似，但不是调整列间空白，而是调整由新列类型`X`指定的列的宽度。这相当于为自动确定的宽度指定`p{...}`。

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

与这些课程中讨论的其他形式不同，`tabularx`需要多次排版表格来确定最终的设置。这意味着在使用该环境时有一些限制；请参见[宏包文档](https://texdoc.org/pkg/tabularx)。

## 多页表格

`tabular`形成一个不可分割的盒子，因此它必须足够小以适合一页，而且通常放在浮动的`table`环境中。

有几个宏包提供了类似语法的可以分页的变体。这里我们展示`longtable`宏包：

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{一个长表格}\\
左边 & 右边\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
条目 & b\\  
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
一个更宽的条目 & b\\  
\end{longtable}

\end{document}
```

`longtable`的显著特点是它在所有页面上保持列宽一致；然而，为了实现这一点，它可能需要运行LaTeX多次，这样后面遇到的宽条目就可以影响前面页面上的列宽。

## 表格注释

在表格中需要脚注样的标记来引用表格下方的注释是很常见的。`threeparttable`宏包简化了这种表格的标记，它会将注释设置在与表格相同宽度的块中。有关完整细节，请参见[宏包文档](https://texdoc.org/pkg/threeparttable)，但这里我们给出一个简单的示例。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{一个示例}
   \begin{tabular}{ll}
    一个条目 & 42\tnote{1}\\
    另一个条目 & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] 第一个注释。
   \item [2] 第二个注释。
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## 在窄列中排版

默认的断行设置假设相对较长的行，以在选择断行位置时提供一些灵活性。以下示例展示了一些可能的方法。第一个表格显示了词间距被拉伸，TeX警告Underfull行。使用`\raggedright`通常可以避免这个问题，但可能会让一些行"太参差不齐"。`ragged2e`宏包中的`\RaggedRight`命令是一个折衷方案；它允许一些行长的参差不齐，但也会在必要时进行连字，如第三个表格所示。

注意这里使用了`\arraybackslash`，它重置了`\\`的定义，使其结束表格行。

另一种技术，如第四个表格所示，是使用较小的字体，这样列相对于文本大小就不那么窄了。

```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
一 & 在窄段落中设置的长文本，还有一些示例文本。\\
二 & 在窄段落中设置的不同长文本，还有一些难以连字的词。
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
一 & 在窄段落中设置的长文本，还有一些示例文本。\\
二 & 在窄段落中设置的不同长文本，还有一些难以连字的词。
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
一 & 在窄段落中设置的长文本，还有一些示例文本。\\
二 & 在窄段落中设置的不同长文本，还有一些难以连字的词。
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
一 & 在窄段落中设置的长文本，还有一些示例文本。\\
二 & 在窄段落中设置的不同长文本，还有一些难以连字的词。
\end{tabular}

\end{table}

\end{document}
```

## 定义新的列类型

如[主课程](lesson-08)中所示，`array`宏包允许像`>{\bfseries}c`这样的结构来表示粗体居中列。定义一个新的列类型来封装这种用法通常很方便，例如

```latex
\newcolumntype{B}{>{\bfseries}c}
```
这样就可以在表格导言区中使用`B`来指定一个粗体居中列。


## 垂直技巧

通常，与其让一个单元格跨越多行，不如在一个单元格中使用嵌套的`tabular`环境来垂直分割一些单元格。

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  测试 & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  内容 & 在 & 这里 \\
  内容 & 在 & 这里 \\
  内容 & 在 & 这里 \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

注意您可以通过`tabular`的可选参数控制垂直对齐；它支持使用`t`、`c`或`b`分别表示顶部、居中或底部对齐，使用方式如下：

<!-- {% raw %} -->
```latex
% !TEX program=lualatex

\documentclass{ctexart}

\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  测试 & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  内容 & 在 & 这里 \\
  内容 & 在 & 这里 \\
  内容 & 在 & 这里 \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## 表格中的行间距

在主课程中我们演示了`\addlinespace`从`booktabs`宏包，它对于在特定行之间添加额外空间很有用。

有两个一般参数控制行间距，`\arraystretch`和`\extrarowheight`（后者来自`array`宏包）。

```latex
\renewcommand\arraystretch{1.5}
```

将增加基线间距50%。


通常，尤其是在使用`\hline`时，最好只是增加行的高度，而不增加它们在基线以下的深度。以下示例演示了`\extrarowheight`参数。

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
