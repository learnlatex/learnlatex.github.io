---
layout: "lesson"
lang: "zh-hans"
title: "获取文档和寻求帮助"
description: "本课展示了 LaTeX 相关软件和宏包的主要文档来源，以及当你遇到困难时如何寻求帮助。"
toc-anchor-text: "帮助与文档"
toc-description: "获取帮助和文档。"
---

# 获取文档和寻求帮助

<span
  class="summary">本课展示了 LaTeX 相关软件和宏包的主要文档来源，以及当你遇到困难时如何寻求帮助。</span>

有几种方式可以访问宏包或文档类的文档。

## `texdoc`

如果你已经安装了 TeX 发行版（如 TeX Live 或 MiKTeX），并且在安装时包含了文档，你可以使用`texdoc`命令行工具访问本地保存的文档。使用：

`texdoc` < _pkg_ >

将打开宏包`<pkg>`的文档。该工具会搜索可用的文档，并打开它认为最接近你搜索词的结果。你可以使用以下命令列出并选择所有可行的结果：

`texdoc -l` < _pkg_ >

## texdoc.org

这是一个[网站](https://texdoc.org/)，其工作方式类似于`texdoc`工具。你可以像使用`texdoc -l`那样搜索他们提供的文档，然后从结果中选择。

## CTAN

[CTAN](https://www.ctan.org)是综合 TeX 档案网络（Comprehensive TeX Archive Network）。大多数 LaTeX 宏包都发布在这里。你可以在网站上搜索宏包来访问其文档。通常宏包保存在`ctan.org/pkg/<pkg-name>`中，你可以在那里访问CTAN上存储的宏包的README和文档。

## LaTeX 相关书籍

有几本可以帮助你学习更多关于 LaTeX 的书籍。作为初学者，你会从结构化的入门指南中获益良多，因为这些指南可以提供比我们在这里介绍的更多细节。你可能还想要一个更详细的参考手册。

LaTeX 团队维护了一个[书籍列表](https://www.latex-project.org/help/books/)，其中大部分是由团队成员编写的。最著名的是 [Lamport 的官方指南](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)和全面的 [LaTeX Companion 第3版](https://www.informit.com/store/latex-companion-parts-i-ii-3rd-edition-9780138166489)。

其他面向学习 LaTeX 的书籍包括：

- [_Guide to LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) 作者：Helmut Kopka和Patrick Daly：提供电子书版本
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) 作者：Nicola Talbot：提供免费电子书或低价印刷版本
- [_Using LaTeX to write a PhD thesis_](https://www.dickimaw-books.com/latex/thesis/) 作者：Nicola Talbot：提供免费电子书或低价印刷版本
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide) 作者：Stefan Kottwitz：提供电子书和印刷版本
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) 作者：Marc van Dongen：提供电子书和印刷版本

## 获取帮助

有多个在线论坛可以询问 LaTeX 问题；也许现今最受欢迎的是 [TeX - LaTeX StackExchange](https://tex.stackexchange.com)。每当你提问时，最好先把示例弄清楚：通常被称为"最小工作示例"（MWE）。这并不意味着代码能工作（否则你就不会提问了！），而是说你已尽最大努力使其清晰、自包含且最小化。后者意味着只包含足够展示问题的内容。

### 如何创建最小工作示例（MWE）

如何构建 MWE？通常最简单的是从：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}
文本
\end{document}
```

开始，然后一行一行地添加内容，直到展示出问题。你也可以尝试"缩减"你的实际文件，但这可能是一个很长的过程。

<p 
  class="hint">如果你需要更多文本来展示分页和其他效果，可以使用`lipsum`或者`zhlipsum`等宏包生成无意义的段落文本，同时保持测试文件较小。</p>

### 日志文件

每次运行 LaTeX 时都会创建一个日志文件，它与你的输入文件同名但扩展名为`.log`。

<p 
  class="hint">根据你的桌面界面，你可能需要"显示扩展名"才能确定是哪个文件。</p>

在日志文件中，你总是可以看到完整的错误消息。LaTeX 的错误消息试图提供帮助，但它们不像文字处理器中的消息那样。

<p 
  class="hint">一些编辑器也使得很难看到错误的"完整"文本，这可能隐藏了关键细节。</p>

如果你遇到问题，LaTeX 专家通常会要求一份你的日志文件副本。

### 更进一步

最后，我们提供了一个[示例集](./extra-01)，展示了本入门教程未涵盖的不同主题领域，以及这些领域中的不同 LaTeX 宏包。
