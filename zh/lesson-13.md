---
layout: "lesson"
lang: "zh"
title: "长文档结构"
description: "本课展示了如何将LaTeX源文件分割成更小、更易管理的文件，以及这如何使构建长文档更容易和更快速。"
toc-anchor-text: "源文件结构"
toc-description: "以可控的方式分割源文件。"
---

# 长文档结构

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span
  class="summary">本课展示了如何将LaTeX源文件分割成更小、更易管理的文件，以及这如何使构建长文档更容易和更快速。</span>

当您在写一个较长的文档时，您可能想要将源文件分割成多个文件。例如，对于一本书或论文，通常会有一个"主"/"根"文件，然后每章一个源文件（对于书或论文），或每个重要章节一个源文件（对于长文章）。

## 结构化源文件

LaTeX允许我们以可控的方式分割源文件。有两个重要的命令：`\input`和`\include`。我们可以使用`\input`让一个文件"就像它被输入在这里一样"工作，所以它可以用于（基本上）任何材料。`\include`命令只能用于章节：它开始新的一页并进行一些内部调整。但它有一个很大的优势：它允许我们选择性地包含章节，所以您可以处理文档的一部分而不是整个文档。

因此，一个较长的文档可能看起来像这样：

<!-- pre0 {% raw %} -->
```latex
% !TEX program=xelatex

% 临时patch，否则使用中文标点，TexLive.net会编译错误
\ExplSyntaxOn
\clist_map_inline:nn { fp, int, dim, skip, muskip }
  {
    \cs_generate_variant:cn { #1_set:Nn }  { NV }
    \cs_generate_variant:cn { #1_gset:Nn } { NV }
  }
\ExplSyntaxOff

\documentclass[UTF8]{ctexart}
\usepackage{xeCJK}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{一本示例书}
\author{约翰·多伊 \and 乔·布洛格斯}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% 初始时做一个完整的文档以生成
% 所有的辅助文件
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

我们将在下面查看这个文件的各个方面。（各个支持文件在本页底部。）

## 使用`\input`

`\input`命令适用于不是独立章节的长文件的部分。在示例中，我们用它来分离出前封面和后封面，保持主文件简短明了，同时也意味着我们可以在另一个文档中重用这些封面。我们也用它来处理文档开头的"非章节"部分：像前言这样的内容。这同样是为了帮助保持主文件清晰。

## 使用`\include`和`\includeonly`

`\include`命令适用于章节，所以我们对每个完整的章节都使用了它；它总是开始新的一页。我们已经使用`\includeonly`选择了实际要排版的章节，如您所见，它接受一个逗号分隔的文件名列表。当您使用`\includeonly`时，您可以缩短排版时间并生成一个用于校对的"选择性"PDF。此外，`\includeonly`的关键优势是LaTeX将使用其他包含文件的`.aux`文件中的所有交叉引用信息。

## 创建目录

`\tableofcontents`命令使用章节命令中的信息来填充目录。它有自己的辅助文件，扩展名为`.toc`，所以您可能需要运行LaTeX两次来解析信息。目录是自动从章节标题生成的。还有类似的命令用于`\listoffigures`和`\listoftables`，它们分别从浮动环境的标题工作，并使用扩展名为`.lof`和`.lot`的文件。

## 将文档分成部分

`\frontmatter`、`\mainmatter`和`\backmatter`命令影响格式。例如，`\frontmatter`将页码改为罗马数字。`\appendix`命令将编号改为`A`、`B`等，所以例如在`\appendix`之后的第一章中，页眉显示"附录A"。

## 练习

尝试演示文档的基本结构，尝试添加和删除`\includeonly`的条目，看看效果。

添加一些浮动体并生成图表和表格列表。如果使用本地安装的LaTeX，您能看到需要多少次LaTeX运行吗？（在线系统在"幕后"重新运行LaTeX，所以额外需要的运行不那么明显。）

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```
<!-- {% endraw %} -->

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{前言}
前言文本。参见\cite{doody}。
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{引言}
第一章文本。
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{其他内容}
第二章文本。
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{附录}
第一个附录文本。
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
前封面
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
献给 \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
版权所有 2020 learnlatex。
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
后封面
\end{center}
```
<!-- {% endraw %} -->

----
