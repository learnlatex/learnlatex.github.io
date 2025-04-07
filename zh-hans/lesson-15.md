---
layout: "lesson"
lang: "zh-hans"
title: "处理错误"
description: "本课展示了 LaTeX 文档中的一些常见错误，它们的含义，以及如何解决它们。"
toc-anchor-text: "错误处理"
toc-description: "处理意外行为。"
---

# 处理错误

<span
  class="summary">本课展示了 LaTeX 文档中的一些常见错误，它们的含义，以及如何解决它们。</span>

与典型的文字处理系统不同，LaTeX 有一个类似于编程语言编译器的编辑/运行/查看循环，就像在编程中一样，用户可能会在输入中出错，因此需要处理系统报告的错误信息。

## 常见错误

本页给出了几个常见错误的示例。每个错误示例都有一些关于错误信息形式的讨论。

尝试这些示例可能会有所启发，同时也可以使用编辑功能来尝试修复文档并测试你是否能够解决这些错误。

### 找不到pdflatex

人们在开始时看到的一个常见错误，在 Windows 操作系统中，可能是：

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

而在Linux系统中，则可能是：

```
bash: pdflatex: command not found
```
{: .noedit :}

这不是 TeX 错误，而是操作系统错误，说明TeX没有安装或找不到。一个常见的错误是安装了一个 _编辑器_，如 TeXworks 或 TeXShop，但没有安装 TeX 系统，如 TeX Live 或 MiKTeX。

### TeX错误信息的剖析

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

这里使用自定义命令 \mycommand。

\end{document}
```

这会在日志文件中产生一个多行消息。

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 这里使用自定义命令 \mycommand
                                  .
? 
```
{: .noedit :}

* 第一行，以`!`标记，给出了错误的一般性质（未定义的命令）。
* 第二对行显示 TeX 正在处理的行，在 TeX 已经到达的点处有一个换行标记。未定义的命令是最后一个被读取的标记，所以是换行前的最后一个词，这里是`\textbold`。换行后是`{hmmm}`，这些标记可能已经作为参数被读取，但尚未被 TeX 执行。
* 在这一点上，可能会有一些额外的行显示错误消息的更多上下文。
* 最后一行以`l.`开头，后面是行号，然后是源文件中检测到错误的行。

* 最后一行是一个`?`。如果交互式使用 TeX，可以在这一点向 TeX 输入指令，但大多数编辑器和在线系统在错误时运行 TeX 的模式是不停止而是继续尝试处理剩余的文档。如果你在交互式工作，输入`s`到提示符会指示 TeX 以这种模式继续。

注意，TeX 并不在定义被创建的点看到错误；事实上，如果`\mycommand`被定义但未使用，就不会报错。所以虽然错误在第8行被报告，但"真正的"错误在第4行的定义中，因此看到完整的错误消息很重要。

要注意，一些编辑器显示错误日志的一行"摘要"。这可能特别具有误导性，如果显示为

`行 8: 未定义的命令: ...\mycommand`

因为它使得看起来像是`\mycommand`未定义。

### 不匹配的花括号

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

这里的错误是一个用于结束可选参数的不匹配的`}`。结束花括号导致 LaTeX 的选项解析失败，你得到一个内部的且不太有帮助的错误：

```
! \@fileswith@ptions 参数包含额外的 }.
```
{: .noedit :}

虽然错误描述不太有帮助，但接下来的两行通过使用换行准确地显示了错误的位置：

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}

### 缺失文件

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\usepackage{amsmathz}

\begin{document}

\end{document}
```

这会产生错误

```
! LaTeX 错误: 文件 `amsmathz.sty' 未找到.
```
{: .noedit :}

注意：同样的错误可能由两种不同的原因引起；这里是一个简单的拼写错误，可以通过修正宏包名称来纠正，或者文件确实缺失，需要在当前系统上安装。

### 显示数学中的空行

```latex
% !TEX program=lualatex

\documentclass{ctexart}
\begin{document}

一些文本
\begin{equation}

  1=2

\end{equation}

\end{document}
```

产生了一个有点神秘的错误

```
! 插入未知 $ .
```
{: .noedit :}

但修复很简单，数学环境中的空行是不允许的，应该删除。

## 练习

尝试修复提供的示例中的错误。

生成包含不同错误的文档，并注意错误信息的形式。

<script>
  window.addEventListener('load', function(){
  rlselectline('pre2',4);
  rlselectline('pre4',4);
  rlselectline('pre7',4);
  rlselectline('pre9',8);
  }, false);
</script>
