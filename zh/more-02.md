---
layout: "lesson"
lang: "zh"
title: "更多内容：使用LaTeX"
description: "本课提供了更多关于LaTeX是什么以及它运行的引擎的细节。"
toc-anchor-text: "更多内容：使用LaTeX"
---

对于我们的大多数示例，我们使用的不是一个叫做`latex`的程序，而是一个叫做`pdflatex`的程序。这是一个LaTeX相关程序家族中的一员，它们都是`latex`的"后代"。我们选择`pdflatex`是因为它可能是最广泛使用的系统，而且它可以直接生成PDF文件。

## 格式和引擎

如[前文](more-01)所述，LaTeX建立在一个叫做TeX的系统之上。我们把LaTeX称为一个"格式"：一组TeX能理解的宏（指令和命令）的集合。当您运行`pdflatex`时，您 _实际上_ 是在启动一个叫做"pdfTeX"的程序，并预加载了"LaTeX格式"。我们通常把pdfTeX称为一个_引擎_：一个能理解TeX指令的程序。

今天常用的有三种引擎：

- pdfTeX
- XeTeX
- LuaTeX

我们将在[后面](lesson-14)介绍XeTeX和LuaTeX：现在我们需要知道的主要是它们能够加载操作系统字体，而pdfTeX不能做到这一点。

如果您在日本，或者写很多日语内容，您可能还会遇到pTeX和upTeX。这些是专门用于垂直排版的引擎。LuaTeX也可以做很多这样的工作，但目前upTeX特别是仍然是日语最流行的系统。
