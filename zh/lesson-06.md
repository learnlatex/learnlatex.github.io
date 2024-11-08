---
layout: "lesson"
lang: "zh"
title: "通过宏包和定义扩展LaTeX功能"
description: "本课展示了如何通过使用不同的宏包来扩展LaTeX以满足您的需求并进一步更改其布局，还展示了如何定义自己的命令。"
toc-anchor-text: "扩展LaTeX"
toc-description: "使用宏包和定义。"
---

# 扩展LaTeX

<span
  class="summary">本课展示了如何通过使用不同的宏包来扩展LaTeX以满足您的需求并进一步更改其布局，还展示了如何定义自己的命令。</span>

在声明了文档类之后，在导言区中您可以通过添加一个或多个*宏包*来修改LaTeX的功能。这些宏包可以：

- 改变LaTeX某些部分的工作方式
- 为LaTeX添加新命令
- 改变文档设计

## 改变LaTeX的工作方式

LaTeX的"内核"（LaTeX的核心部分）在用户自定义方面相当有限，因此一些附加宏包处理了一些非常常见的需求。首先是改变LaTeX如何处理特定语言的排版（断字、标点、引号、本地化等）。不同的语言有不同的规则，所以告诉LaTeX使用哪种语言很重要。这由`babel`宏包处理。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}

% 加载babel宏包，并选择语言，中文无须加载
%\usepackage[french]{babel}

\usepackage[width = 6cm]{geometry} % 为了在这里强制断字

\begin{document}

这是一些填充文字，用来演示LaTeX如何断字处理材料，并且能够给我们至少一个断字点。
这是一些填充文字，用来演示LaTeX如何断字处理材料，并且能够给我们至少一个断字点。

\end{document}
```

如果您在编写西文文档时遇到断字问题，请尝试使用`babel`宏包。

<p class="hint">您可以将文件内容改为西文，并尝试取消注释那行（显然有误导性的）加载`babel`的行，看看效果。（默认的断字规则是美式英语。）</p>

`babel`宏包除了断字之外还做了很多工作，这取决于所涉及的语言；如果您需要更多细节，我们提供了[更多信息](more-06)。

## 改变设计

能够独立于文档类调整某些设计方面是很有用的。最明显的一个是页边距。我们刚才在上面的例子中使用了`geometry`宏包，但让我们现在专门讨论页边距。

```latex
% !TEX program=lualatex

% 请注意，为了演示\chapter命令，我们使用ctexbook文档类
\documentclass[UTF8]{ctexbook} 
\usepackage[margin=1in]{geometry}

\begin{document}
嗨，世界！

这是一个第一个文档。


% ================
\chapter{第一章}
第一章的介绍。


\section{第一节的标题}
第一节中的材料文本

第二段。

\subsection{第一节的小节}

小节中的材料文本。


% ================
\section{第二节}

第二节的文本。

\end{document}
```

您可以将上述代码中对`geometry`宏包引用注释掉，比较注释前后的效果。

`geometry`宏包除了可以调整文档的页边距，还可以修改页眉和页脚的高度、宽度、位置等。

## 添加新功能

LaTeX的优势之一是您可以从成千上万的宏包中选择，包括用于写数学文本的宏包、用于超链接的宏包、用于复杂颜色处理的宏包等。我们将在后面的课程中看到一些更常见的宏包。

## 定义命令

有时您需要特定于文档的命令，可能是一些在可用宏包中找不到的功能，或者只是一个用于输入多次使用的常见表达式的命令。

以下示例展示了一个用于以特定样式输出关键词的命令。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}

% 定义一个命令\kw，用于输出加粗的斜体文字
\newcommand\kw[1]{\textbf{\itshape #1}}

\begin{document}

关于\kw{苹果}和\kw{橙子}的一些内容。

\end{document}
```

在定义中，`[1]`表示参数的数量（这里是一个），`#1`表示提供的第一个参数（这个例子中是`苹果`或`橙子`）。您最多可以有九个参数，但通常最好只有一个参数，或者有时根本没有参数。

定义命令不仅可以减少编写文档所需的输入，还有助于分离样式信息。如果决定使用不同的样式来表示关键词，不必编辑整个文档，只需要更改定义即可。这里我们加载`xcolor`宏包来提供颜色，并在格式化中使用蓝色代替粗体。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\usepackage{xcolor}

% 定义一个命令\kw，用于输出加粗的斜体文字，并着色为蓝色
\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

关于\kw{苹果}和\kw{橙子}的一些内容。

\end{document}
```

注意，定义太多命令或定义多参数的命令可能会使文档源代码更难理解，因为它使用了不熟悉的语法。定义特定于文档的命令的能力应该谨慎使用。

## 练习

尝试用其他欧洲语言编写一些文本，看看`babel`如何影响断字：您可能可以在网上找到一些文本，并猜测正确的选项。

尝试更改`geometry`示例中的页边距。您可以使用逗号分隔列表分别设置`top`、`bottom`、`left`和`right`边距。

尝试加载`lipsum`宏包，然后在文档中添加命令`\lipsum`。您能猜到为什么这个宏包对制作示例很有用吗？

尝试更改`\kw`的定义以获得不同的样式。
