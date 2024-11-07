---
layout: "lesson"
lang: "zh"
title: "更多内容：使用文档类来影响设计"
description: "本课提供了更多关于LaTeX专门文档类的信息。"
toc-anchor-text: "更多内容：使用文档类来影响设计"
---

## 期刊专用的文档类

许多学术期刊都提供了用于投稿的LaTeX文档类。这些文档类通常会设置与最终期刊相似的排版布局，尽管这也取决于字体使用等因素。如果有文档类可用，通常是由编辑部直接提供的，他们应该提供相应的使用说明。许多这样的文档类也可以在[CTAN](https://ctan.org)上找到，并包含在标准的TeX发行版中。

## 用于演示文稿的文档类

创建演示文稿需要很多特殊处理。`slides`文档类是为制作"传统的"印刷幻灯片而编写的，它并不支持屏幕演示。为了实现这一点，已经开发了两个广泛使用的文档类：`beamer`和`powerdot`。由于`beamer`可能是更常用的一个，我们将给您一个它如何工作的示例：

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

\documentclass{ctexbeamer}
\usepackage{xeCJK}
\begin{document}

\begin{frame}
  \frametitle{第一张幻灯片}
  一些文本
\end{frame}

\begin{frame}
  \frametitle{第二张幻灯片}
  不同的文本
  \begin{itemize}
    \item<1-> 第一项
    \item<2-> 第二项
  \end{itemize}
\end{frame}

\end{document}
```

这展示了两个重要的概念。首先，`beamer`将文档分为帧（frames）（为了处理中文，我们使用了`ctexbeamer`这个文档类），每个帧可能会产生多个幻灯片（页面）。其次，`beamer`扩展了正常的LaTeX语法，允许源文件的部分内容"逐步显示"。这很强大，但比我们在这里能介绍的更复杂：更多信息请查看[这篇博文](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/)。

## 用于图像的文档类

有时候您需要使用LaTeX制作一个图像（可能包含大量文本），而您只想要内容本身，不要页面上的其他任何东西。使用[`standalone`](https://ctan.org/pkg/standalone)文档类最容易做到这一点。它会自动将页面大小设置为围绕打印的内容。

```latex
\documentclass{standalone}
\usepackage{xeCJK}
\begin{document}
一个简单的文档：这将是一个很小的盒子！
\end{document}
```
