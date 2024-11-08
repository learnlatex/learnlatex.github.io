---
layout: "lesson"
lang: "zh"
title: "表格"
description: "本课展示了如何在LaTeX中创建表格，如何影响单元格的对齐，如何添加表格线条，以及如何合并单元格。"
toc-anchor-text: "LaTeX表格"
toc-description: "表格的基础知识。"
---

# 表格

<span
  class="summary">本课展示了如何在LaTeX中创建表格，如何影响单元格的对齐，如何添加表格线条，以及如何合并单元格。</span>

LaTeX中的表格使用`tabular`环境来创建。本课假设您已加载`array`宏包，它为LaTeX表格添加了更多功能。这个宏包之所以不是LaTeX内核的一部分，仅仅是出于历史原因。因此，请在导言区添加以下内容，我们就可以开始了：

```latex
\usepackage{array}
```
{: .noedit :}

要排版`tabular`环境，我们需要告诉LaTeX需要多少列以及它们应该如何对齐。这是通过一个必需的参数（通常被称为表格导言）来完成的，在这个参数中，您使用单字母名称（称为导言标记）来指定列。可用的列类型有：

<!-- don't line wrap this table, markdown seems to not support this -->

| 类型            | 描述                                                                                      |
| --------------- | :---------------------------------------------------------------------------------------- |
| `l`             | 左对齐列                                                                                  |
| `c`             | 居中对齐列                                                                                |
| `r`             | 右对齐列                                                                                  |
| `p{宽度}`       | 固定宽度为`宽度`的列；文本将自动换行并完全对齐                                            |
| `m{宽度}`       | 与`p`类似，但相对于行的其余部分垂直居中                                                   |
| `b{宽度}`       | 与`p`类似，但底部对齐                                                                     |
| `w{对齐}{宽度}` | 以固定`宽度`打印内容，如果内容过大则静默溢出。您可以使用`l`、`c`或`r`来选择水平对齐方式。 |
| `W{对齐}{宽度}` | 与`w`类似，但如果内容过宽，这将发出溢出框警告。                                           |

此外，还有一些其他可用的导言标记，它们不定义列但可能也很有用：

<!-- don't line wrap this table, markdown seems to not support this -->

| 类型              | 描述                                                                     |
| ----------------- | :----------------------------------------------------------------------- |
| `*{数量}{字符串}` | 在导言中重复`字符串` `数量`次。通过这种方式，您可以定义多个相同的列。    |
| `>{声明}`         | 在每个单元格内容之前将`声明`放在下一列中（这对于设置不同的字体等很有用） |
| `<{声明}`         | 在前一列的每个单元格内容之后放置`声明`                                   |
| <span>`           | `</span>                                                                 | 添加垂直线 |
| `@{声明}`         | 用`声明`替换列之间的空格                                                 |
| `!{声明}`         | 在现有空格的中心添加`声明`                                               |

这两个表格列出了LaTeX和`array`宏包提供的所有可用列类型。一些来自不同宏包的其他列类型在本课的[更多细节](more-08)中介绍。

列`l`、`c`和`r`的宽度将是其最宽单元格的自然宽度。每个列都必须声明，因此如果您想要三个居中对齐的列，您需要在表格导言中使用`ccc`。空格会被忽略，所以`c c c`是一样的。

在表格主体中，列使用`&`分隔，新行使用`\\`开始。

我们已经有了创建第一个表格所需的一切。在下面的代码中，`&`和`\\`是对齐的。这在LaTeX中不是必需的，但有助于阅读源代码。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  动物  & 食物  & 大小   \\
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
\end{tabular}
\end{document}
```

如果表格列包含大量文本，仅使用`l`、`c`和`r`会出现问题。看看下面的例子会发生什么：

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  动物 & 描述 \\
  狗   & 狗是犬属的成员，属于狼形犬科，是最广泛分布的陆地食肉动物。 \\
  猫   & 猫是一种小型食肉目家养动物。它是猫科中唯一的家养物种，通常被称为家猫，以区别于该科的野生成员。 \\
\end{tabular}
\end{document}
```

问题在于`l`类型列会以其自然宽度排版其内容，即使有页面边界也不会换行。要解决这个问题，您可以使用`p`列。这会将其内容作为段落排版，并指定宽度作为参数。将上面的结果与以下内容进行比较：

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  动物 & 描述 \\
  狗   & 狗是犬属的成员，属于狼形犬科，是最广泛分布的陆地食肉动物。 \\
  猫   & 猫是一种小型食肉目家养动物。它是猫科中唯一的家养物种，通常被称为家猫，以区别于该科的野生成员。 \\
\end{tabular}
\end{document}
```

如果您的表格有许多相同类型的列，在导言中输入那么多列定义会很麻烦。您可以使用`*{num}{string}`来简化，它会重复`string` `num`次。所以`*{6}{c}`等同于`cccccc`。为了证明它确实有效，这里是本课的第一个表格，使用新学到的语法：

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  动物  & 食物  & 大小   \\
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
\end{tabular}
\end{document}
```

## 添加线条

在介绍线条之前，先提一个建议：线条在表格中应该谨慎使用，通常垂直线看起来不够专业。事实上，对于专业的表格，您不应该使用任何标准线条；相反，您应该熟悉`booktabs`宏包的功能，这就是为什么我们先在这里介绍它。为了完整性，标准线条在[更多信息](more-08)页面中展示。

`booktabs`提供了四种不同类型的线条。每个这些命令都必须作为行中的第一个内容使用，或紧跟在另一个线条之后。
三个线条命令是：`\toprule`、`\midrule`和`\bottomrule`。从它们的名称就可以清楚地知道它们的使用位置：

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  动物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

`booktabs`提供的第四个线条命令是`\cmidrule`。它可以用来绘制一条不跨越整个表格宽度的线条，而是只跨越指定的列范围。列范围作为数字范围输入：`{`_数字_`-`_数字_`}`。即使您只想为单个列绘制线条，也需要将其指定为范围（两个数字相同）。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  动物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  \cmidrule{1-2}
  马    & 干草  & 大     \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  青蛙  & 苍蝇  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

您可以使用`\cmidrule`的短版本，在任一端添加一个可选参数，括号中的`r`和`l`分别表示规则在**右**和**左**端缩短：

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  动物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  \cmidrule{1-2}
  马    & 干草  & 大     \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  青蛙  & 苍蝇  & 小     \\
  \bottomrule
\end{tabular}
\end{document}
```

您可能已经猜到，`r`和`l`分别表示规则在**右**和**左**端缩短。

有时，线条对于两行之间的分离来说可能过于分离，但为了更清楚地传达含义，您可以使用`\addlinespace`来插入一个小跳跃。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  动物 & 描述 \\
  \midrule
  狗   & 狗是犬属的成员，属于狼形犬科，是最广泛分布的陆地食肉动物。 \\
  \addlinespace
  猫   & 猫是一种小型食肉目家养动物。它是猫科中唯一的家养物种，通常被称为家猫，以区别于该科的野生成员。 \\
  \bottomrule
\end{tabular}
\end{document}
```

## 合并单元格

在LaTeX中，您可以使用`\multicolumn`命令来水平合并单元格。它必须作为单元格中的第一个内容使用。`\multicolumn`需要三个参数：

1. 应该合并的单元格数量
2. 合并单元格的对齐方式
3. 合并单元格的内容

对齐方式可以包含任何在`tabular`导言中合法的内容，但**只能包含单个列类型**。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  动物  & 食物  & 大小   \\
  \midrule
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
  fuath  & \multicolumn{2}{c}{未知} \\
  \bottomrule
\end{tabular}
\end{document}
```

您还可以使用`\multicolumn`在一个单元格上，以防止应用表格导言中为当前列定义的任何内容。以下内容使用这种方法来居中表格的标题行：

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{动物} & \multicolumn{1}{c}{食物} & \multicolumn{1}{c}{大小} \\
  \midrule
  狗    & 肉    & 中等   \\
  马    & 干草  & 大     \\
  青蛙  & 苍蝇  & 小     \\
  fuath  & \multicolumn{2}{c}{未知} \\
  \bottomrule
\end{tabular}
\end{document}
```

垂直合并单元格在LaTeX中不受支持。通常，只需留空单元格即可为读者提供正确的想法，而无需明确地使单元格跨越多行。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  组    & 动物  & 大小   \\
  \midrule
  草食动物 & 马    & 大     \\
          & 鹿    & 中等   \\
          & 兔子  & 小     \\
  \addlinespace
  肉食动物 & 狗    & 中等   \\
          & 猫    & 小     \\
          & 狮子  & 大     \\
  \addlinespace
  杂食动物 & 乌鸦  & 小     \\
          & 熊    & 大     \\
          & 猪    & 中等   \\
  \bottomrule
\end{tabular}
\end{document}
```

## 练习

使用简单的表格示例开始尝试表格。尝试使用`l`、`c`和`r`列类型进行不同的对齐。如果您在表格行中缺少项目会发生什么？如果您在表格行中添加太多项目会发生什么？尝试使用`\multicolumn`命令跨越多列。
