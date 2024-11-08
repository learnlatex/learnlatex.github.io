---
layout: "lesson"
lang: "zh"
title: "逻辑结构"
description: "本课展示了一些基本的格式化命令，并将其与使用分节命令和列表的语义格式化进行比较。"
toc-anchor-text: "逻辑结构"
toc-description: "结构和视觉呈现。"
---

# 逻辑结构

<span
  class="summary">本课展示了一些基本的格式化命令，并将其与使用分节命令和列表的语义格式化进行比较。</span>

LaTeX提供了专注于文档逻辑结构的方法，以及直接设置外观的能力。大多数情况下，使用专注于结构的方法要好得多，因为这样可以在需要时轻松重用或更改外观。

## 结构和视觉呈现

我们将从一个例子开始，对比LaTeX中最常见的逻辑标记命令之一`\emph`与简单地将某些内容斜体化（在印刷中，这通常是强调的方式）。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\begin{document}
一些含有 \emph{强调 和\emph{嵌套} 的内容}。

一些含有 \textit{斜体 和\textit{嵌套} 的内容}。
\end{document}
```

您可能猜到`\textit`是一个将文本斜体化的命令，但它_总是_将内容斜体化，因此不适用于嵌套材料。看看`\emph`如何知道嵌套。还有一些地方，强调与斜体不同；例如，在演示中，颜色通常是更好的选择。使用逻辑标记，我们不必担心文档正文中的细节。

我们将在[后面的课程](lesson-11)中查看手动格式化，但目前我们将`\textbf`添加到我们知道的命令中：它使文本加粗。

## 分节命令

您可能使用过文字处理器，在那里大多数人通过输入标题文本然后简单地将其变大和加粗，并在其后跟一个新行来开始一个部分。在LaTeX中，使用逻辑标记实际上比手动格式化更容易；我们可以使用`\section`命令。这可以处理字体更改、垂直空间等，并在整个文档中保持输出一致。

```latex
% !TEX program=xelatex

% 临时patch，否则使用中文标点，TexLive.net会编译错误
\ExplSyntaxOn
\clist_map_inline:nn { fp, int, dim, skip, muskip }
  {
    \cs_generate_variant:cn { #1_set:Nn }  { NV }
    \cs_generate_variant:cn { #1_gset:Nn } { NV }
  }
\ExplSyntaxOff

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\begin{document}
你好！

这是你的第一份文档。

\section{第一节}

第一小节内容

第一小节第二段

\subsection{第一小节}

小节内容

\section{第二节}

第二节内容

\end{document}
```

为了演示中文使用，我们使用了`ctexart`文档类，LaTeX对节和小节进行编号，并以粗体显示标题。我们将在[下一课](lesson-05)中考虑更改设计。

LaTeX可以将文档划分为多个级别

- `\chapter`（但我们需要`\documentclass{book}`或`\documentclass{report}`来实现），对应中文的“章”。
- `\section`，对应中文的“节”。
- `\subsection`，对应中文的“小节”。
- `\subsubsection`，对应中文的“小小节”。

我们可以进一步划分：下一个“下一级”是`\paragraph`，但几乎总是太多“细节”在部分中。（是的，`\paragraph`是一个分节命令，而不是开始新段落的方法！）

您可能想知道文档的标题。有一些特殊命令用于此，但并非所有文档都使用它们，因此我们在[额外课程](more-04)中介绍了这一点。

## 列表

您最常需要逻辑标记的另一个地方是编写列表。
LaTeX中内置了两种常见类型的列表。

```latex
% !TEX program=xelatex

% 临时patch，否则使用中文标点，TexLive.net会编译错误
\ExplSyntaxOn
\clist_map_inline:nn { fp, int, dim, skip, muskip }
  {
    \cs_generate_variant:cn { #1_set:Nn }  { NV }
    \cs_generate_variant:cn { #1_gset:Nn } { NV }
  }
\ExplSyntaxOff

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\begin{document}

有序列表
\begin{enumerate}
  \item 一个条目
  \item 另一个条目
  \item 第三个条目
\end{enumerate}

无序列表
\begin{itemize}
  \item 一个条目
  \item 另一个条目
  \item 第三个条目
\end{itemize}

\end{document}
```

请注意，我们使用`\item`来开始每个条目，并且每种类型的列表使用的标记是自动添加的。

## 练习

尝试使用不同的分节级别。尝试使用`\documentclass{report}`而不是`\documentclass{article}`并添加`\chapter`命令。它们看起来如何？尝试使用`\paragraph`和（甚至）`\subparagraph`来查看它们的工作方式：默认情况下，它们_不_添加编号。

制作一些列表，并在一个列表中嵌套另一个列表。数字或标记的格式如何变化？使用标准LaTeX，您最多可以嵌套四级列表，但超过四个嵌套列表往往是一个不好的信号！
