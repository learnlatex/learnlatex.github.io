---
layout: "lesson"
lang: "zh"
title: "使用文档类来影响设计"
description: "本课解释了什么是文档类以及它如何影响文档布局，并列出了在TeX发行版中可以找到的主要文档类。"
toc-anchor-text: "文档类"
toc-description: "设置一般文档布局。"
---

# 文档类

<span
  class="summary">本课解释了什么是文档类以及它如何影响文档布局和设计。它列出了在TeX发行版中可以找到的主要文档类。</span>

您可能已经注意到，到目前为止我们创建的所有LaTeX文档都以`\documentclass`行开始，而且
`\documentclass{article}`是最常见的选择。（我们在[上一课](lesson-04)中需要
`\documentclass{report}`来尝试`\chapter`命令。）这行是所有LaTeX文档都必需的，而且几乎总是应该是文档中的第一个命令。

**注意**：在本课程中，我们将使用`ctexart`类来创建包含中文的文档，这是一个中文文档类，可以自动处理中文的排版问题。

## 文档类的作用

文档类设置文档的整体布局，例如：

- 设计：页边距、字体、间距等
- 是否可以使用章节
- 标题是否应该在单独的页面上

文档类也可以更普遍地添加新命令；这在特殊情况下尤其如此，比如创建演示幻灯片。

文档类行也可以设置_全局选项_：应用于整个文档的内容。这些选项在方括号中给出：
`\documentclass[<选项>]{<名称>}`。这种语法，即在方括号中首先给出可选信息，在许多LaTeX命令中都使用。

## 基础文档类

LaTeX自带一组标准文档类，它们的外观相似但有一些变化：

- `article`  
  没有章节的短文档
- `report`  
  有章节的较长文档，单面打印
- `book`  
  有章节的较长文档，双面打印，带前言和后记（例如索引）
- `letter`  
  没有分节的信件
- `slides`  
  用于演示（请参见下文）
- `beamer`  
  用于制作幻灯片

这些类都有自己的选项，可以用来调整布局和功能。`article`、`report`和`book`类有非常相似的可用命令，正如我们已经看到的。

与之相对，CTex包提供了一些中文文档类：

- `ctexart`  
  适用于中文文章的文档类
- `ctexrep`  
  适用于中文报告的文档类
- `ctexbook`  
  适用于中文书籍的文档类
- `ctexbeamer`  
  适用于中文幻灯片的文档类

如果某种标准文档类未发现对应的`ctex`版本，可以在文档类定义后添加`ctex`包来调用中文文档类。引用格式为：

```latex
\documentclass[UTF8]{<标准文档类名>}
\usepackage{ctex}
```

选择不同的文档类，可能会有一些可用命令与环境的细微差别。例如，当写信时，可用的命令有点不同：

```latex
% !TEX program=lualatex

\documentclass[UTF8]{letter}
\usepackage{ctex}
\begin{document}

\begin{letter}{某某地址\\某某街道\\某某城市}

\opening{亲爱的先生或女士，}

信件正文在这里

\closing{此致，}

\end{letter}

\end{document}
```

看看如何使用`\\`来分隔地址的行；我们将在[稍后](lesson-11)讨论换行。另外请注意`letter`类如何为每封信创建一个新的环境并有专门的命令。

标准的`article`、`report`和`book`类接受`10pt`、`11pt`和`12pt`选项来改变字体大小，以及`twocolumn`选项来使文档成为双栏。

## 功能丰富的类

核心类非常稳定，但这也意味着它们在设计和可用命令范围方面都相当保守。随着时间的推移，一些更强大的类被编写出来，让您无需手动操作就可以改变设计（我们将在[稍后](lesson-11)提到）。

美国数学学会提供标准类的变体（`amsart`、`amsbook`），设计风格更传统，更接近数学期刊出版物中使用的风格。

两个最大和最流行的"扩展"类是KOMA-Script包和memoir类。KOMA-Script提供了一组与标准类"平行"的类：`scrartcl`、`scrreprt`、`scrbook`和`scrlttr2`，而memoir类则是一个单一的类，最像是`book`的扩展。

这些扩展类有很多定制钩子，我们将在练习中探索一些。您可能想知道我们如何了解它们提供的钩子；我们将在[后面的课程](lesson-16)中介绍这一点，但您总是可以提前了解！

## 演示文稿

`slides`类是为制作20世纪80年代中期的物理幻灯片而开发的，因此没有任何功能来创建基于PDF的交互式演示文稿。有现代的类可以做到这一点：它们相对于一般的LaTeX文档来说比较特殊，所以我们在[补充信息](more-05)中介绍了它们。

## 练习

探索如何在标准类、KOMA包和`memoir`之间更改文档类如何影响文档的外观。

```latex
% !TEX program=lualatex

\documentclass[UTF8]{ctexart}
\begin{document}

\section{简介}

这是一个示例文档，带有一些虚拟文本\footnote{和一个脚注}。这段文字相当长，
因为我们可能想看看让文档成为双栏的效果。

\end{document}
```

添加类选项`twocolumn`，看看布局如何变化。

将`\section`改为`\chapter`，找出使用`scrreprt`类时以下类选项有什么效果：

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
