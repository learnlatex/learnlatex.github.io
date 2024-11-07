---
layout: "lesson"
lang: "zh"
title: "引用和参考文献"
description: "本课展示了参考文献数据库的基础知识。学习如何建立自己的数据库以及如何使用两种主要的工作流程在文档中使用它们。"
toc-anchor-text: "引用和参考文献"
toc-description: "使用参考文献数据库。"
---

# 引用和参考文献

<script>
runlatex.preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<span
  class="summary">本课展示了参考文献数据库的基础知识。学习如何建立自己的数据库以及如何使用两种主要的工作流程在文档中使用它们。</span>

对于参考文献引用，虽然您可以直接在文档中包含参考源，但通常您会从一个或多个外部文件获取这些信息。这些文件是参考文献数据库，包含以处理友好的格式存储的信息。使用一个或多个参考文献数据库可以让您重复使用信息并避免手动格式化。

## 参考文献数据库

参考文献数据库通常被称为"BibTeX文件"，扩展名为`.bib`。它们包含一个或多个条目，每个条目对应一个参考文献，每个条目中有一系列字段。让我们看一个例子：

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->


这是一个文章条目和一本书的条目；这是最常见的类型。每个数据库条目类型都以`@`开头，如所示，所有信息都在一对大括号内。

除了被称为"键"的引用"名称"之外，各个字段都以键值格式给出：这只是一个标签，所以您可以使用任何您喜欢的内容，但在上面我们选择使用作者名加年份：这是一种常见的方法。

具体需要给出哪些字段取决于条目类型，但大多数都很明显。您可能注意到在`author`字段中，每个条目都用`and`分隔。这是_必需的_：输出格式需要知道哪个作者是哪个。您可能还注意到在文章标题中，一些条目用了额外的大括号；这些是为了防止改变大小写。

手动编辑`.bib`文件相当繁琐，所以大多数人使用专门的编辑器。[JabRef](https://www.jabref.org)被广泛使用，而且是跨平台的，但还有几个其他的界面可用。如果参考文献包含DOI（数字对象标识符），您可能想尝试[doi2bib](https://doi2bib.org)来轻松获取BibTeX条目。但请确保检查条目是否正确！

在这里，我们将使用上面的简短示例数据库进行演示：我们已经将其"保存"为`learnlatex.bib`。

## 从数据库传输信息

要将信息从数据库传输到文档中，需要三个步骤。首先，使用LaTeX编译文档，这会创建一个包含文档引用的参考文献列表的文件。第二，运行一个程序从参考文献数据库中提取信息，选择您使用的那些参考文献，并按顺序排列。最后，再次编译文档，这样LaTeX就可以使用这些信息来解析您的引用。通常需要至少编译两次才能解析所有引用。

对于第二步，有两个广泛使用的系统：BibTeX和Biber。Biber只能与LaTeX宏包`biblatex`一起使用，而BibTeX可以不使用任何宏包，或者与`natbib`一起使用。

不同的编辑器以不同的方式处理运行LaTeX之外的第二个工具。对于我们的在线示例，有一些"幕后"脚本可以一次完成所有操作。您的编辑器可能有一个"做事情"按钮，或者您可能需要在LaTeX运行之间手动选择运行BibTeX或Biber。

引用和参考文献的格式独立于您的BibTeX数据库，由所谓的"样式"设置。我们将看到这在BibTeX工作流程和`biblatex`中工作方式略有不同，但一般思路保持不变：我们可以选择引用的显示方式。

## 使用`natbib`的BibTeX工作流程

虽然可以在不加载任何宏包的情况下在LaTeX文档中插入引用，但这相当有限。相反，我们将使用`natbib`宏包，它允许我们创建不同类型的引用，并且有很多可用的样式。

我们输入的基本结构如下例所示：

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
\usepackage{natbib}

\begin{document}
数学展示来自\citet{Graham1995}，而
化学内容在\citet{Thomas2008}中。

一些括号引用：\citep{Graham1995}
然后\citep[p.~56]{Thomas2008}。

\citep[参见][pp.~45--48]{Graham1995}

一起引用\citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

您可以看到我们可以通过给出它们的键来引用数据库中的不同条目。`natbib`宏包同时提供了文本和括号引用样式，分别是`\citet`和`\citep`。参考文献样式由`\bibliographystyle`行选择；这里我们使用了`plainnat`样式。参考文献实际上是由`\bibliography`行插入的，它也选择要使用的数据库；这是一个逗号分隔的列表。

可以通过可选参数向引用添加页码引用。如果给出两个可选参数，第一个会出现在引用标签之前作为简短说明，第二个出现在标签之后作为页码引用。

上面的设置使用作者-年份样式，但我们可以使用数字引用。这是通过向`natbib`行添加`numbers`选项来完成的。

## `biblatex`工作流程

`biblatex`宏包的工作方式与`natbib`略有不同，因为我们在导言区选择数据库，但在文档正文中打印它。还有一些新的命令。

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
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % 参考文献信息文件

\begin{document}
数学展示来自\autocite{Graham1995}。

一些更复杂的引用：\parencite{Graham1995}或
\textcite{Thomas2008}或可能是\citetitle{Graham1995}。

\autocite[56]{Thomas2008}

\autocite[参见][45-48]{Graham1995}

一起引用\autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

注意`\addbibresource` _需要_ 完整的数据库文件名，而我们在`natbib`中使用`\bibliography`时省略了`.bib`。还要注意`biblatex`使用更长的命令名称，但这些都很容易猜到。

同样，可以在引用前后插入简短文本，使用可选参数。注意这里页码不需要加前缀`p.~`或`pp.~`，`biblatex`可以自动添加适当的前缀。

在`biblatex`中，参考文献样式是在加载宏包时选择的。这里我们使用了`authoryear`，但还有`numeric`样式和许多其他可用的样式。

## 在BibTeX工作流程和`biblatex`之间选择

尽管BibTeX工作流程和`biblatex`都通过BibTeX文件获取输入，并且可以产生在文档中结构上相似的输出，但它们使用完全不同的方式来产生这个结果。这意味着这两种方法之间存在一些差异，这可能帮助您选择哪种方法最适合您。

在BibTeX工作流程中，参考文献样式最终由一个`.bst`文件决定，您通过`\bibliographystyle`命令选择它。`biblatex`不使用`.bst`文件，使用了一个不同的系统。如果您使用的是一个带有`.bst`文件的模板，或者您的项目给了您一个`.bst`文件，您必须使用BibTeX工作流程，不能使用`biblatex`。

`biblatex`采用的不同方法意味着您可以直接从文档导言区使用基于LaTeX的命令修改参考文献和引用命令的输出。相比之下，BibTeX的`.bst`样式的修改通常需要处理这些外部文件，并且需要了解BibTeX编程语言。一般来说，`biblatex`被认为比BibTeX工作流程更容易定制。

在`biblatex`中，实现更复杂的引用样式通常更容易，它提供了更广泛的不同引用命令。它还提供更多上下文相关的功能。粗略地说，这对于在许多STEM学科中常见的样式来说不太有趣，但对于一些人文学科领域中更复杂的样式来说变得相关。

BibTeX只能正确排序US-ASCII字符，并依赖变通方法为非US-ASCII字符提供基于US-ASCII的排序。通过Biber，`biblatex`提供了完整的Unicode排序功能。因此，如果您想要以非ASCII/非英语顺序对参考文献进行排序，`biblatex`通常是更好的选择。

由于存在的时间比`biblatex`更长，BibTeX工作流程比`biblatex`更为成熟，这意味着许多出版商和期刊期望使用BibTeX工作流程生成的参考文献。这些出版商不能或通常不接受使用`biblatex`的投稿。

结论是：检查作者/投稿指南，如果您要投稿给期刊或出版商。如果您得到了一个`.bst`文件，您必须使用BibTeX工作流程。如果您需要一个相对简单的参考文献和引用样式，并且只需要基于英语US-ASCII的排序，BibTeX工作流程就足够了。如果您需要更复杂的引用样式，非英语排序，或者想要更容易访问引用和参考文献样式的自定义功能，您会想要研究使用`biblatex`。

## 练习

尝试`natbib`和`biblatex`的示例。对于`natbib`，您需要运行LaTeX、BibTeX、LaTeX、LaTeX；对于`biblatex`，是LaTeX、Biber、LaTeX。找出如何在您的编辑器中做到这一点，或者尝试Overleaf和TeXLive.net的自动化功能。

看看当您创建新的数据库条目和新的引用时会发生什么。添加一个不在数据库中的引用，看看它如何显示。尝试`natbib`的`numeric`选项和`biblatex`的`style=numeric`选项。
