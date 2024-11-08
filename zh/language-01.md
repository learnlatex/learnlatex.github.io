---
layout: "lesson"
lang: "zh"
title: "中文的语言特性"
description: "本课展示了使用LaTeX进行中文排版的语言特性细节。重点在于字体选择和段落格式。"
next: "extra-01"
toc-anchor-text: "中文语言特性"
toc-description: "使用LaTeX进行中文排版。"
---

# 中文的语言特性

<span
  class="summary">本课展示了使用LaTeX进行中文排版的语言特性细节，重点在于字体选择和段落格式。</span>

## 字体选择

在中文排版中，字体选择是一个重要的方面。LaTeX提供了多种字体选项，可以通过`xeCJK`或`ctex`宏包来实现。

注意：

- xeCJK宏包是最常用的中文排版宏包，它提供了丰富的字体选项，包括中文字体、西文字体、数学字体等。
- ctex宏包是基于xeCJK宏包的扩展，它提供了更多的中文排版功能，包括字号、字体颜色、字体风格等。
- 下面第一行的注释指定编译引擎为xelatex，通知TexLive.net网站使用XeLaTeX引擎进行编译，可以更好的处理中文字符。

```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\begin{document}
这是一个中文示例。
\end{document}
```

## 段落格式

中文排版的段落格式与西文有所不同，通常不需要首行缩进。可以通过设置`parindent`参数来调整。

```latex
\setlength{\parindent}{0pt}
```

## 其他注意事项

在中文排版中，还需要注意标点符号的使用和行间距的设置。可以通过`xeCJK`宏包的选项进行调整。

```latex
\usepackage{xeCJK}
\setCJKmainfont{SimSun}
```

这些设置可以帮助您在LaTeX中实现高质量的中文排版。
