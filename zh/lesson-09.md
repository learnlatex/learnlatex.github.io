---
layout: "lesson"
lang: "zh"
title: "交叉引用"
description: "本课展示了如何在文档中引用编号的元素，如图片、表格和章节。"
toc-anchor-text: "交叉引用"
toc-description: "引用图片、表格等。"
---

# 交叉引用

<span
  class="summary">本课展示了如何在文档中引用编号的元素，如图片、表格和章节。</span>

当您在写长文档时，您会需要引用编号的元素，如图片、表格或章节。幸运的是，LaTeX可以自动添加正确的编号；我们只需要设置好一些事情。

## `\label`和`\ref`机制

要让LaTeX记住文档中的某个位置，您需要给它一个标签，然后在其他地方引用它。

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
嗨，世界！

这是一个第一个文档。

\section{标题}

这是第一节的材料文本。


\subsection{第一节的小节}
\label{subsec:labelone}

第一小节的材料文本。
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

在小节~\ref{subsec:labelone}中有公式~\ref{eq:labeltwo}。
\end{document}
```

- 这里有两个`\label{...}`命令，一个在小节之后，一个在公式环境内。
- 它们与最后一句中的`\ref{...}`命令相关联。
- 当您运行LaTeX时，它会将标签的信息保存到辅助文件中。
- 对于`\label{subsec:labelone}`，LaTeX知道它现在在一个小节中，所以它保存了小节的编号。
- 对于`\label{eq:labeltwo}`，LaTeX知道最近感兴趣的环境是一个公式，所以它保存了该公式的信息。
- 当您请求引用时，LaTeX从辅助文件中获取信息。
- `subsec:`和`eq:`不会被LaTeX使用；相反，它只是跟踪它最近处理的内容。但当您在写作时，这些帮助您记住标签的含义。

- 您可能会看到引用在PDF输出中显示为粗体双问号，**??**。这是因为由于使用辅助文件的工作方式，第一次编译文档时标签尚未保存。再运行一次LaTeX就可以了。（通常在写作时您会多次运行LaTeX，所以在实践中这不是一个问题。）

- 注意引用前的波浪号（`~`）字符。
您不希望在"小节"和其编号之间，或"公式"和其编号之间出现换行。使用波浪号意味着LaTeX不会在那里断行。

## `\label`的位置

`\label`命令总是引用前一个编号的实体：一个节、一个公式、一个浮动体等。这意味着`\label`总是要放在您想要引用的东西_之后_。特别是，当您创建浮动体时，`\label`必须放在_后面_（或最好放在）`\caption`命令之内，但在浮动环境内。

## 练习

尝试在测试文档中添加新的编号部分（节、小节、枚举列表），看看需要多少次运行才能让`\label`命令正常工作。

添加一些浮动体，看看当您把`\label`放在`\caption`_之前_而不是之后时会发生什么；您能预测结果吗？

如果您把一个公式的`\label`放在`\end{equation}`_之后_会发生什么？
