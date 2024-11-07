---
layout: "lesson"
lang: "zh"
title: "更多内容：数学"
description: "本课展示了更多amsmath对齐环境、如何使数学符号加粗、数学扩展宏包mathtools，以及在数学中使用Unicode输入。"
toc-anchor-text: "更多内容：数学"
---

## 更多`amsmath`对齐

除了主课程中展示的`align*`环境外，`amsmath`还有几个其他的数学显示结构，特别是`gather`用于不需要对齐的多行显示，以及`multline`用于将较大的单个表达式分成多行，将第一行左对齐，最后一行右对齐。在所有情况下，带`*`的形式默认省略方程编号。

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

\usepackage{amsmath}

\begin{document}

Gather环境
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline环境
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### 数学对齐中的列

`amsmath`的对齐环境设计为每对列的第一列右对齐，第二列左对齐。这允许显示多个方程，每个方程都围绕其关系符号对齐。

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
\usepackage{amsmath}
\begin{document}
对齐的方程
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

此外，还有以`ed`结尾的显示环境变体，用于在更大的显示中制作子项。
例如，`aligned`和`gathered`分别是`align`和`gather`的变体。

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
\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned`接受类似于`tabular`的位置可选参数。
这在对齐内联数学公式的顶行时经常有用；
比较下面示例中列表中的项目。

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
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## 数学加粗
标准LaTeX有两种方法使数学符号加粗。要使整个表达式加粗，在进入表达式前使用`\boldmath`。命令`\mathbf`也可用于将单个字母或单词设置为直立粗体罗马字体。

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

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % 错误使用\mathbf
\end{document}
```

如果您想在普通权重表达式中访问粗体符号（就像`\boldmath`使用的那样），可以使用`bm`宏包中的命令`\bm`。注意`\bm`也适用于`=`和希腊字母等符号。（注意在上面的示例中，`\mathbf`对`\pi`没有效果。）

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
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## Mathtools
`mathtools`宏包加载`amsmath`并添加了一些额外功能，比如`amsmath`矩阵环境的变体，允许指定列对齐方式。
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
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

## Unicode数学

如[第14课](lesson-14)所述，有一些变体TeX引擎使用OpenType字体。默认情况下，这些引擎仍然使用经典的TeX数学字体，但您可以使用`unicode-math`宏包来使用OpenType数学字体。这个宏包的细节超出了本课程的范围，我们建议您参考[宏包文档](https://texdoc.org/pkg/unicode-math)。
但是，我们在这里给出一个小示例。

```latex
% !TEX lualatex
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
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

一二三
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicode数学字母数字符号
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
