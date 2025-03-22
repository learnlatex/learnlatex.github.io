---
layout: "lesson"
lang: "zh-hans"
title: "更多内容：包含图片和定位"
description: "本课提供了关于如何更好地命名和存储要在 LaTeX 中使用的图片文件的详细信息，以及如何在 LaTeX 中创建自己的图片。"
toc-anchor-text: "更多内容：包含图片和定位"
---

## 命名图片文件

LaTeX 可以在多种计算机平台上运行，因此文件名的命名需要一些考虑。最安全的做法是简单地命名你的图片，特别是避免使用空格。例如，如果你想通过将所有图片保存在子目录中来组织文件，那么像这样的写法： `\includegraphics[width=30pt]{pix/mom.png}` 是可移植且经得起未来考验的。

文件名中的空格传统上有些问题，但现在一般都支持了。然而，如果你的文件名中有空格，并且遇到了问题，你可以尝试先移除空格作为第一步解决方案。

变音符号的支持有些不稳定；在某些系统上，特别是 Windows 上，存在一些问题。如果你发现文件名中的变音符号有问题，请尝试只使用 ASCII 字符进行测试。

## 将图片存储在子目录中

将源文件组织的一个常见方式是把所有图片放入一个子目录。然后你可以在包含图片时加入相对路径，就像上面展示的那样；注意即使在 Windows 上，路径的各部分也是使用`/`字符分隔的。

如果你有很多图片，你可能想要预先设置子目录。这可以使用`\graphicspath`来完成，它需要为每个子目录提供一个带花括号的条目。例如，要同时包含`figs`和`pics`子目录，我们可以使用：

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

注意这些路径末尾的`/`是必需的。

## 生成图片

如前所述，LaTeX 可以轻松使用大多数来源的图片，包括科学软件生成的图表。如果可能的话，你可能想要保存为PDF格式，因为这是一种可缩放的格式。如果你需要创建位图，请尝试使用高分辨率。你可以使用 [Inkscape](https://inkscape.org/) 创建包含 LaTeX 片段的鼠标绘制的图形。另一个选择是 [Asymptote](https://www.ctan.org/pkg/asymptote)，它扩展这些绘图技术到三维空间。这两个软件都将其输出生成为文件，供你包含在文档中。

你也可以创建特别适合 LaTeX 的图形，这些图形具有很高的精确度，并且可以包含与文档匹配的公式和标签。你可以使用 [Ti*k*Z](https://ctan.org/pkg/pgf) 直接在文档中绘制图形，这很方便，尽管代价是文档更复杂且需求更多，或者使用 [PSTricks](https://ctan.org/pkg/pstricks-base)。

## 放置浮动体

LaTeX 的浮动体放置很复杂。最常见的要求是将图片放在输出中与它在输入中的位置完全相同的地方。`float`宏包可以做到这一点。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}
\usepackage{lipsum}  % 用于生成填充文本
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{示例图片}
\end{figure}
\lipsum[8-15]
\end{document}
```

注意`H`选项，它表示将图片"绝对放在这里"。然而，不建议使用`H`，因为它可能会在文档中产生大片空白区域。

## 其他类型的浮动体

我们将[很快](lesson-08)看到我们可以把表格放在浮动体中；它们会进入`table`环境。然而，我们不_必须_把图片放在`figure`环境中或把表格放在`table`环境中；这只是惯例。

你可能想要有其他类型的浮动环境；每种类型都是独立插入的。你可以使用[`trivfloat`](https://ctan.org/pkg/trivfloat)宏包来实现。这个宏包提供了一个单独的命令`\trivfloat`来创建新类型的浮动体。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}
\usepackage{lipsum}  % 用于生成填充文本
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{示例图片}
\end{image}
\end{document}
```
