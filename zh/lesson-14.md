---
layout: "lesson"
lang: "zh"
title: "选择字体和使用Unicode引擎"
description: "本课介绍了LaTeX如何解释Unicode输入以及这如何影响您的输入内容和使用的字体。了解Unicode和OpenType字体支持。"
toc-anchor-text: "字体和Unicode引擎"
toc-description: "选择字体和文件编码。"
---

# 字体和Unicode引擎

<span
  class="summary">本课介绍了LaTeX如何解释Unicode输入以及这如何影响您的输入内容和使用的字体。了解Unicode和OpenType字体支持。</span>

当TeX和LaTeX最初开始被广泛使用时，它们基本上只能直接处理欧洲语言，尽管也有一些使用其他字母（如希腊语和俄语）的能力。

## 重音和带重音的字母

最初，重音和带重音的字母是使用控制序列或宏来输入的，比如`\c{c}`表示'ç'，`\'e`表示'é'。虽然有些人继续使用这些输入方法因为它们可能更容易输入，但其他人希望能够直接使用键盘上的键来输入这些符号。

在Unicode之前，LaTeX为许多类型的*文件编码*提供了支持，这些编码允许以本地方式编写各种语言的文本 — 例如，使用`latin1`编码，法语用户可以写'`déjà vu`'，LaTeX会在内部将带重音的字母转换为TeX命令以产生正确的输出。

这种方法在使用`pdflatex`引擎的现代LaTeX中仍在使用。默认情况下，所有文件都被假定为Unicode（UTF-8编码），除非另有指定。尽管这个引擎限于8位字体，但大多数欧洲语言都可以得到支持。

## 字体选择

使用`pdflatex`的字体选择使用了健壮的LaTeX字体选择方案，如今在标准LaTeX发行版中有许多可直接使用的字体。例如，TeX Gyre字体是一套基于大多数人熟悉的常见字体的高质量字体，如Times、Helvetica、Palatino等。要加载这些字体，只需加载一个具有适当名称的宏包。对于Times的替代品，TeX Gyre的名称是Termes：

```latex
\usepackage{tgtermes}
```
{: .noedit :}

对于`pdflatex`，大多数字体都可以通过宏包访问。您可以查看[LaTeX字体目录](https://www.tug.org/FontCatalogue/)或[CTAN上的'字体'主题](https://www.ctan.org/topic/font)来了解一些选项。您也可以在互联网上搜索您想要的字体，并寻找`pdflatex`兼容的宏包版本。如果您想使用专有字体，您可以搜索合适的克隆版本，对于大多数应用来说，这与原版足够相似。

## Unicode时代

由于`pdflatex`限于8位文件编码和8位字体，它不能原生使用现代OpenType字体，也不能轻松地在使用不同字母（或脚本，用技术术语来说）的多种语言之间切换。有两个替代pdfTeX的引擎，它们原生使用Unicode输入和现代字体：XeTeX和LuaTeX。对于LaTeX，这些通常在您的编辑器中分别使用`xelatex`和`lualatex`引擎来调用。

<p class="hint">例如，本教程的中文版本就指定XeLaTeX为编译引擎，并使用`xeCJK`宏包来支持中文。</p>

在这些引擎中，字体选择由`fontspec`宏包完成，对于简单的文档可以像这样简单：
```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

这选择了TeX Gyre Termes字体，就像在`pdflatex`示例中一样。值得注意的是，这种方法适用于_任何_OpenType字体。一些可用于`pdflatex`的字体也可以通过它们各自的宏包用于`xelatex`和`lualatex`，或者通过使用`fontspec`如上所示加载您计算机上安装的任何字体。

[LaTeX字体目录](https://www.tug.org/FontCatalogue/)也显示了有OpenType格式可用的字体，所以您可以用它作为查找字体的资源，以及前面提到的[CTAN页面](https://www.ctan.org/topic/font)。

选择字体后，现在可以直接在源文档中用纯Unicode输入文本。这里是一个示例，显示了一些拉丁字母和希腊字母以及一些CJK表意文字：

```latex
% !TEX program=lualatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p 
  class="hint">在切换语言时，通常也需要更改断字模式等内容，`babel`和`polyglossia`宏包都提供了强大的功能来做这些事情。</p>
