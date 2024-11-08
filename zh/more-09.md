---
layout: "lesson"
lang: "zh"
title: "更多内容：交叉引用"
description: "本课展示了如何通过加载hyperref宏包来制作交叉引用的链接。"
toc-anchor-text: "更多内容：交叉引用"
---

## 将交叉引用变成链接

您可以通过使用`hyperref`宏包将交叉引用变成超链接。在大多数情况下，`hyperref`应该在文档导言区中指定的任何其他宏包之后加载。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{简介}
一些令人兴奋的文本和一个引用~\ref{sec:next}。

\section{下一件事}
\label{sec:next}

更多文本。
\end{document}
```

我们选择让链接与普通文本颜色相同；试试删除`hidelinks`看看为什么！
