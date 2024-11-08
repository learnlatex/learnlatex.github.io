---
layout: "lesson"
lang: "zh"
title: "更多内容：格式：字体和间距"
description: "本课展示了如何抑制单个段落的缩进。"
toc-anchor-text: "更多内容：格式：字体和间距"
---

## 抑制单个段落的缩进

如果您想抑制单个段落的缩进，可以使用`\noindent`命令。
这种用法应该 _非常_ 少见；大多数时候，您应该让LaTeX自动处理这个问题。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\begin{document}
一个小段落，我们稍微填充一些内容以确保您能在这里看到效果！

一个小段落，我们稍微填充一些内容以确保您能在这里看到效果！

\noindent 一个小段落，我们稍微填充一些内容以确保您能在这里看到效果！
\end{document}
```
