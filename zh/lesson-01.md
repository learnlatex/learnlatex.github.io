---
layout: "lesson"
lang: "zh"
title: "LaTeX是什么以及它如何工作"
description: "本课解释了LaTeX的基本概念以及它与常见文字处理器（如Microsoft Word或LibreOffice Writer）的不同之处。"
toc-anchor-text: "LaTeX基础"
toc-description: "LaTeX是什么以及它如何工作。"
---

# LaTeX基础

<span
  class="summary">本课解释了LaTeX的基本概念以及它与常见文字处理器（如Microsoft Word或LibreOffice Writer）的不同之处。</span>

与常见的文字处理器（如Microsoft Word或LibreOffice Writer）不同，LaTeX通常不提供所见即所得（WYSIWYG）。使用LaTeX时，您需要将纯文本与标记结合使用。这些标记告诉LaTeX文本中某些元素的逻辑意义，类似于HTML的工作方式。

例如，HTML文档中的`<h2>`元素表示一个新章节。LaTeX也有一个命令用于此目的；在这里您可以使用`\section`命令。

## LaTeX工作流程

因为LaTeX文件不是文档本身，而是关于文档各部分应该是什么的指令，您通常不会直接将LaTeX文件发送给他人。相反，在编写完LaTeX源文件后，您需要使用LaTeX（通常使用一个名为`pdflatex`的程序）来生成PDF文件。然后，您将这个PDF文件发送给他人。

不同的人对这个过程有不同的描述。由于使用LaTeX有点像编程，它通常被称为“编译”文档，尽管“排版”更为准确。

## 多次运行LaTeX

对于简单的文件，您只需排版一次即可获得完整的PDF。但一旦您开始添加更复杂的内容，如交叉引用、引用、图形和目录，您可能需要多次运行LaTeX。我们会告诉您何时需要这样做。

## LaTeX或pdfLaTeX或其他

在[下一课](lesson-02)中，我们将看到LaTeX不是一个单一的程序。为了简化，我们将专注于一个特定的LaTeX程序pdfLaTeX（本课程的中文版使用XeLaTeX以活得更好的中文支持，但是pdfLaTeX仍然是最常用的LaTeX程序）来创建您的PDF。我们将在课程后面讨论其他程序以及为什么您可能想要使用它们。
