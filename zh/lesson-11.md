---
layout: "lesson"
lang: "zh"
title: "字体和间距"
description: "本课展示了如何更改文档中的间距元素以及如何在LaTeX源代码中添加显式的格式化指令。"
toc-anchor-text: "字体和间距"
toc-description: "文本格式化的视觉呈现。"
---

# 字体和间距

<span
  class="summary">本课展示了如何更改文档中的间距元素以及如何在LaTeX源代码中添加显式的格式化指令。</span>

我们已经看到，在输入中的空行会在LaTeX中生成新段落。这表现为段落会以缩进开始。

## 段落间距

一种常见的样式是段落之间不缩进，而是在段落之间添加"空行"。我们可以使用`parskip`宏包来实现这一点。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\usepackage[parfill]{parskip}
\usepackage{zhlipsum} % 仅用于生成填充文本
\begin{document}
\zhlipsum
\end{document}
```

## 强制换行

大多数情况下，您不应该在LaTeX中强制换行：您几乎肯定是想要一个新段落或者使用`parskip`（如我们刚才看到的）在段落之间添加"空行"。

有_少数_地方您需要使用`\\`来开始新行而不开始新段落：

- 在表格行末尾
- 在`center`环境内
- 在诗歌中（`verse`环境）

几乎总是，如果您不在这些特殊的地方，您就_不应该_使用`\\`。

## 添加显式空格

我们可以使用`\,`插入一个细空格（约为正常厚度的一半）。在数学模式中，还有其他命令：`\.`、`\:`和`\;`，以及一个用于负空格的命令：`\!`。

很少情况下，例如在创建标题页时，您可能需要添加显式的水平或垂直空格。我们可以使用`\hspace`和`\vspace`来实现。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
一些文本 \hspace{1cm} 更多文本。

\vspace{10cm}

更多的文本。
\end{document}
```

## 显式文本格式化

我们在[第3课](lesson-03)中写到，大多数情况下逻辑结构是更好的选择。但有时您想要让文本变为粗体、斜体、等宽等。有两种类型的命令用于此：一种用于短文本片段，另一种用于"运行"的材料。

对于短文本片段，我们使用`\textbf`、`\textit`、`\textrm`、`\textsf`、`\texttt`和`\textsc`。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
让我们玩玩字体：\textbf{粗体}、\textit{斜体}、\textrm{罗马体}、
\textsf{无衬线体}、\texttt{等宽体}和\textsc{小型大写}。
\end{document}
```

对于运行文本，我们使用改变字体设置的命令；这里的命令例如是`\bfseries`和`\itshape`。因为这些命令不会"停止"，我们需要将它们放在一个_组_中，以防止它们影响整个文档。LaTeX环境是组，表格单元格也是，或者我们可以使用`{...}`来创建一个显式的组。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
正常文本。

{\itshape

这段文本是斜体的。

这段也是：效果不限于一个段落。

}
\end{document}
```

我们可以用类似的方式设置字体大小；这些命令都是持续性的。字体大小是相对的：`\huge`、`\large`、`\normalsize`、`\small`和`\footnotesize`是常见的。重要的是要在改变字体大小回来之前结束段落；看看我们这里如何添加一个显式的`\par`（段落结束）。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}
正常文本。

\begin{center}
{\itshape\large 一些文本\par}
正常文本
{\bfseries\small 更小的文本\par}
\end{center}

\end{document}
```

## 练习

尝试手动格式化：创建一个`titlepage`环境并尝试插入不同的空格和字体更改。当我们组合字体更改时会发生什么？这与数学模式相比如何？

如果您更改一个大段落的字体大小（尝试用`\tiny`然后用`\huge`）但在关闭组之前不发出最后的`\par`会发生什么？
