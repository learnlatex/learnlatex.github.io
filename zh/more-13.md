---
layout: "lesson"
lang: "zh"
title: "更多内容：结构化长文档"
description: "本课提供了更多关于如何创建目录、使用PDF书签以及在文档中包含其他文件的信息。"
toc-anchor-text: "更多内容：结构化长文档"
---

## 创建索引

基于您所创建的文档长度，您可能需要创建索引。这类似于制作参考文献，因为它使用辅助文件。幸运的是，这都可以通过`imakeidx`包自动完成。我们需要以下三条指令来指导LaTeX：

- `\makeindex`指令，用于启用索引的创建
- `\index`指令，用于标记索引条目
- `\printindex`指令，用于打印索引


```latex
% !TEX program=xelatex

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{imakeidx}
\makeindex
\begin{document}
一些文字标记索引foo\index{foo}.
另一些文字标记索引baz\index{baz!bar}.
更多文字标记索引alpha\index{alpha@$\alpha$}.
标记索引baz的另一部分的其他文字\index{baz!wibble}.

\clearpage
另一页的文字标记索引foo\index{foo}
标记索引beta的其他文字\index{beta@$\beta$}.
标记索引gamma的其他文字\index{gamma@$\gamma$}.
\printindex
\end{document}
```

我们在这里展示了索引的两个特性：使用`!`进行分类细分，以及使用`@`打印与索引条目的"排序文本"不同的内容。索引有很多可以自定义的地方；试试这个示例，看看它是如何工作的。
