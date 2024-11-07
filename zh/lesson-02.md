---
layout: "lesson"
lang: "zh"
title: "使用LaTeX"
description: "本课解释了什么是TeX系统以及最常见的系统有哪些，列出了一些通常与LaTeX一起使用的文本编辑器，以及集成编辑器的在线系统。"
toc-anchor-text: "使用LaTeX"
toc-description: "TeX系统和LaTeX文本编辑器。"
---

# 使用LaTeX

<span
  class="summary">本课解释了什么是TeX系统以及最常见的系统有哪些，列出了一些通常与LaTeX一起使用的文本编辑器，以及集成编辑器的在线系统。</span>

与许多计算机程序不同，LaTeX不是一个包含“所有内容”的单一应用程序。相反，有多个程序协同工作。我们可以将其分为两个您实际需要的部分：

- 一个 _TeX系统_
- 一个文本编辑器（通常是专门为LaTeX设计的）

## LaTeX系统

使用LaTeX的核心是拥有一个可用的TeX系统。TeX系统是一组“幕后”程序和文件，它们是使LaTeX正常工作的必要条件，但大多数时候您不会直接“运行”它。

目前有两个主要的TeX系统，[MiKTeX](https://miktex.org/)和[TeX Live](https://tug.org/texlive)。它们都可以在Windows、macOS和Linux上使用。MiKTeX在Windows上有很强的背景；在macOS上，TeX Live被捆绑到一个更大的集合中，称为[MacTeX](http://www.tug.org/mactex/)。每个系统都有其[优点](https://tex.stackexchange.com/questions/20036)，您可能想查看[LaTeX项目的更多建议](https://www.latex-project.org/get/)。

由于TeX Live在所有常见平台上都可用，并且具有一些性能优势，我们建议如果您不确定要安装哪个系统，请选择TeX Live。

## 编辑器

LaTeX文件只是纯文本，因此可以用任何文本编辑器编辑。然而，使用专门为LaTeX设计的编辑器最为方便，因为它们提供了一键编译文件、内置PDF查看器和语法高亮等功能。所有现代LaTeX编辑器中一个非常有用的功能是SyncTeX：可以点击源文件直接跳转到PDF，或反向跳转。

LaTeX编辑器比我们在这里列出的要多得多：在[StackExchange上有一个全面的列表](https://tex.stackexchange.com/questions/339/latex-editors-ides)。一个基本的编辑器，[TeXworks](https://tug.org/texworks)，在Windows和Linux上的TeX Live和MiKTeX中都包含了，[TeXShop](https://pages.uoregon.edu/koch/texshop/)则包含在MacTeX中。（我个人比较喜欢使用另一个优秀的编辑器 [TexStudio](https://www.texstudio.org/)。）

<p 
  class="hint">无论您选择哪个编辑器，我们建议您在安装TeX系统<i>之后</i>安装它，以便编辑器可以“找到”TeX系统并正确设置。</p>

## 在线工作

有几个强大的在线网站可以让您避免安装TeX系统和LaTeX编辑器的需要。这些网站通过让您在网页中编辑文件，然后在后台运行LaTeX，并显示生成的PDF。

其中一些网站将LaTeX与类似于文字处理器的功能结合在一起，而另一些则更专注于让您查看LaTeX代码，因此更接近于本地安装。

有些系统允许您在不登录的情况下运行LaTeX，我们使用其中一个，[TeXLive.net](https://texlive.net)，让您编辑和测试我们提供的示例。对于更完整的工作，最好的在线系统要求您在使用前注册。这可以让您保存工作，也有助于网站不被过载。我们已经设置了链接，您可以使用[Overleaf](https://www.overleaf.com)编辑我们的示例，这是LaTeX在线的主要网站之一。当然还有其他的：[Papeeria](https://papeeria.com/)就是一个例子。

## 与他人合作

如果您计划将LaTeX源文件发送到处理它们的目的地，例如出版商、会议组织者或预印本服务器（例如arXiv），您应该检查他们施加的限制。

## 练习

为自己设置一个本地LaTeX安装_或_一个在线LaTeX服务的账户。如果您使用本地安装，您还需要选择一个编辑器：我们建议从TeXworks， TexStuio 或TeXShop（见上文）开始，然后在您了解自己如何最好地使用LaTeX后再查看其他编辑器。

您将能够[在浏览器中运行我们所有的其他练习](help.md)，但我们希望帮助您使用真实的文档，因此现在是让自己准备好的好时机。
