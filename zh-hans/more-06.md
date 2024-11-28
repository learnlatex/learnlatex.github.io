---
layout: "lesson"
lang: "zh-hans"
title: "更多内容：使用宏包和定义扩展 LaTeX"
description: "本课提供了更多关于宏包加载的细节，展示了用于语言选择的`babel`宏包，并提供了更多关于自定义命令的细节。"
toc-anchor-text: "更多内容：使用宏包和定义扩展 LaTeX"
---

## 加载多个宏包

`\usepackage`命令可以接受一个用逗号分隔的宏包列表，所以你可以一次性加载多个宏包：例如`\usepackage{color,graphicx}`。如果你要给宏包传递选项，这些选项会应用到列表中的每个宏包。如果宏包是分开加载的，注释掉其中一些会更容易。因此我们会坚持每个宏包单独一行加载。

## `babel`宏包

我们在[主课程](lesson-06)中展示了`babel`宏包作为选择不同连字规则的方式。它做的远不止这些，具体取决于使用的语言。例如，在德语中，它提供了一些用于创建"软"连字符的快捷方式，还提供了一种不需要德语键盘就能快速输入变音符号的方法。注意`\tableofcontents`（目录）命令通常生成的 "Table of Contents" 标题也会被改为德语的 Inhaltsverzeichnis。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[ngerman]{babel} % 注意选项名称是'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

其他语言设置会做一些设计上的改变：例如，在传统的法语排版中，某些标点符号（如`:`）前会有空格，如果你使用`french`选项加载`babel`，这个空格会被自动添加。

## 全局选项

有时，你希望一个选项对所有加载的宏包都可用。这可以通过在`\documentclass`行上给出选项来实现：每个宏包都能"看到"这个选项列表。所以要将文档的语言传递给所有宏包，我们可以使用：

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## 更多定义

`\newcommand`允许命令最多有九个参数，其中第一个可以是可选的。

如果我们以主课程中的示例为例，我们可以让颜色成为可选的，默认为蓝色。

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

关于\kw{苹果}和\kw[red]{橙子}的一些内容。

\end{document}
```

可选参数用`[]`括起来，如果省略，则使用定义中指定的默认值。

## `\NewDocumentCommand`

从2020年10月的 LaTeX 发布版本开始，提供了一个扩展的定义系统。在较旧的 LaTeX 发布版本中，这个系统通过`xparse`宏包提供，为了兼容性，我们在这里使用这个宏包。

我们可以重复上面的示例，但使用`\NewDocumentCommand`

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{xparse} % 仅在较旧的LaTeX版本中需要
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

关于\kw{苹果}和\kw[red]{橙子}的一些内容。

\end{document}
```

与`\newcommand`的相同点：`\NewDocumentCommand`接受要定义的命令（`\kw`）和定义主体，使用`#1`到`#9`表示参数，但是参数的指定方式不同。

与`\newcommand`的不同点：`\newcommand`只给出参数的数量，可选地为第一个参数提供默认值，而`\NewDocumentCommand`中每个参数都用一个字母指定，所以一个两参数的命令会用`{mm}`而不是`[2]`来指定。这稍微更冗长一些，但允许定义更多形式的命令。这里我们只给出这个简单的例子，其中第一个参数是可选的，默认为蓝色（`O{blue}`），第二个参数是强制的（`m`）。
