---
layout: "lesson"
lang: "zh"
title: "更多内容：处理错误"
description: "本课展示了LaTeX中的一些更常见的错误，并解释了链式错误和静默错误。"
toc-anchor-text: "更多内容：处理错误"
---

## 在环境末尾报告的错误

某些环境（特别是`amsmath`的对齐环境和`tabularx`表格）在处理内容之前会扫描整个环境主体。这意味着环境内的任何错误都会在最后一行被报告。然而，如主课程所示，TeX显示的错误上下文仍然应该能够准确指出错误位置。

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

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

这里的错误将在第12行被报告

```
l.12 \end{align}
```
{: .noedit :}

尽管实际错误是在第10行，这可以从上下文行中看出：

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## 由早期错误引起的虚假错误

当从命令行交互式调用LaTeX时，可以在第一个错误处使用`x`停止处理，编辑文档并重新运行。但是，如果您滚动过错误提示，或使用自动执行此操作的编辑器或在线系统，TeX将尝试恢复；然而这可能会导致报告更多的错误。

因此，不要太在意报告的错误_数量_，始终专注于修复第一个报告的错误。

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
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

这里的错误是下划线`_`，它应该输入为`\_`。

TeX在_第一个_错误消息中正确地报告了这一点

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

然而，如果您滚动过`?`提示，TeX会通过添加一个`$`来恢复，这样`_`就会在数学模式中被视为下标。数学模式然后会继续到结束数学模式的`$`，因此后面的`\alpha`会在文本模式中被看到，从而产生另一个错误

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## 不触发错误提示的错误

某些错误，特别是直到文件末尾才被检测到的错误，不会生成错误提示，而只是在日志中给出警告。

如果您在TeXLive.net服务器上尝试这个示例，它默认会返回一个PDF；要在日志中查看错误消息，请添加`%!TeX log`。

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large some large text) normal size?

\end{document}
```

在这个示例中，字体大小更改错误地用`)`而不是`}`结束。这直到文件末尾才被检测到，当TeX检测到仍有一个未关闭的组时。它在这里报告了组被打开的行`{`。它无法检测到实际的错误，因为`)`被视为"普通文本"。

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
      if(editors['pre0'] != null) editors['pre0'].moveCursorTo(8, 15, false);
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5, false);
      if(editors['pre6'] != null) editors['pre6'].moveCursorTo(4, 30, false);
  }, false);
</script>
