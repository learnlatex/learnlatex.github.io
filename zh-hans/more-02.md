---
layout: "lesson"
lang: "zh-hans"
title: "更多内容：使用 LaTeX"
description: "本课提供了更多关于 LaTeX 是什么以及它运行的引擎的细节。"
toc-anchor-text: "更多内容：使用 LaTeX"
---

对于我们的大多数示例，我们使用的不是一个叫做`latex`的程序，而是一个叫做`pdflatex`的程序。这是一个 LaTeX 相关程序家族中的一员，它们都是`latex`的"后代"。我们选择`pdflatex`是因为它可能是最广泛使用的系统，而且它可以直接生成PDF文件。

## 格式和引擎

如[前文](more-01)所述，LaTeX 建立在一个叫做 TeX 的系统之上。我们把 LaTeX 称为一个"格式"：一组 TeX 能理解的宏（指令和命令）的集合。当你运行`pdflatex`时，你 _实际上_ 是在启动一个叫做 "pdfTeX" 的程序，并预加载了 "LaTeX 格式"。我们通常把 pdfTeX 称为一个 _引擎_：一个能理解 TeX 指令的程序。

今天常用的有三种引擎：

- pdfTeX
- XeTeX
- LuaTeX

我们将在[后面](lesson-14)介绍 XeTeX 和 LuaTeX：现在我们需要知道的主要是它们能够加载操作系统字体，而 pdfTeX 不能做到这一点。

如果你在日本，或者写很多日语内容，你可能还会遇到 pTeX 和 upTeX。这些是专门用于垂直排版的引擎。LuaTeX 也可以做很多这样的工作，但目前 upTeX 仍然是日语最流行的系统。
