---
layout: "lesson"
lang: "zh-hans"
title: "包含图片和定位"
description: "本课展示了如何在文档中包含外部图片文件，如何更改它们的外观，以及如何让它们在PDF中自动定位到合适的位置。"
toc-anchor-text: "使用图片"
toc-description: "图片的外观和定位。"
---

# 包含图片和定位

<span
  class="summary">本课展示了如何在文档中包含外部图片文件，如何更改它们的外观，以及如何让它们自动定位或浮动到合适的位置。</span>

要在 LaTeX 中引入外部图片，请使用`graphicx`宏包，它为LaTeX添加了`\includegraphics`命令。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
这张图片
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
是导入包含外部图片的PDF。
\end{document}
```

你可以包含EPS、PNG、JPG和PDF格式的文件。如果你有一个图片的多个版本，那么你可以写成`example-image.png`这样的形式。（如果你没有给出扩展名，`graphicx`宏包会尝试猜测扩展名。）

你会注意到我们在这里使用了一个新的环境`center`，用于将图片在页面上水平居中。[稍后](lesson-11)，我们将更多地讨论间距和定位。

## 修改图片外观

`\includegraphics`命令有许多选项来控制图片的大小和形状，以及裁剪掉不需要的部分。其中一些选项使用很多，所以值得了解。

最明显的设置是设置图片的`width`（宽度）或`height`（高度），这些通常相对于`\textwidth`或`\linewidth`以及`\textheight`来设置。`\textwidth`和`\linewidth`的区别很微妙，通常结果是相同的。`\textwidth`是物理页面上文本块的宽度，而`\linewidth`是_当前_宽度，这可能在局部上有所不同（这种差异在使用`twocolumn`类选项时最为明显）。LaTeX 会自动缩放图片以保持宽高比。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
一些文本
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

你还可以`scale`（缩放）图片，或者通过`angle`（角度）旋转它们。另一个你可能想要做的是`clip`（裁剪）和`trim`（修剪）图片。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## 让图片浮动

在排版中，特别是技术文档时，图片可能会移动到文档的其他位置。这称为 *浮动*。图片通常作为浮动体包含，这样它们不会在页面中留下大片空白。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{graphicx}
\usepackage{zhlipsum}  % 生成填充文本

\begin{document}
\zhlipsum*[1-5] % 几个填充段落

测试浮动位置
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{一个示例图片}
\end{figure}

\zhlipsum*[6-10] % 几个填充段落
\end{document}
```

这里LaTeX将图片和标题从`测试位置`文本处移到了第二页的顶部，因为第一页底部没有足够的空间。`ht`影响 LaTeX 可以放置浮动体的位置；这两个字母表示它可以放在源代码所在位置（在`测试位置`旁边）或页面顶部。你最多可以使用四个位置说明符：

- `h` "这里"（如果可能）
- `t` 页面顶部
- `b` 页面底部
- `p` 专门用于浮动体的页面

[稍后](lesson-09)，我们将看到如何交叉引用浮动体，这样你就可以在文本中指向它们。

你可能注意到我们在这里使用了`\centering`而不是`center`环境来居中图片。在浮动体内部，如果你想要水平居中内容，应该使用`\centering`；这可以避免浮动体和`center`环境都添加额外的垂直空间。

## 练习

尝试包含你创建的图片，替换我们在演示中使用的"标准"图片。

探索使用`height`、`width`、`angle`和`scale`键可以做什么。

使用`width`键将一个图片的大小设置为相对于`\textwidth`，另一个图片相对于`\linewidth`。尝试它们在有或没有`twocolumn`选项时的表现。

使用`lipsum`制作一个相当长的演示，然后尝试使用不同的位置说明符来放置浮动体。不同的说明符如何相互作用？（本文中的示例代码使用了另一个中文的占位字符生成包`zhlipsum`。）
