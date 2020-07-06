---
title: "More on: Dealing with errors"
---

## Errors reported at ends of environments.

Some environments (notably `amsmath` alignments and `tabularx` tables)
Scan the whole envionment body before processing the content. This means that
any error within the environment is reported on the last line. However as seen in the
main lesson, TeX's display of the error context should still pinpoint the error location.

<div class="highlight">
<pre>
\documentclass{article}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= <span style="color:red">\frak</span>{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
</pre>
</div>

Here the error will be reported on line 11

```
l.11 \end{align}
```
{: .noedit :}

Although the real error is on line 9 as shown by the context lines:


```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Spurious errors due to earlier errors.

When calling LaTeX interactively from the command line it is possible
to stop the processing at the  first error with `x`, edite the document
and re-run. However if you scroll past the error or use an editor or
online system that does this for you then TeX will try to recover,
however this may lead to several more errors being reported.

So do not be too concerned about the _number_ of errors reported and
always concentrate on fixing the first reported error.


<div class="highlight">
<pre>
\documentclass{article}

\begin{document}
Text<span style="color:red">_</span>word  $\alpha + \beta$.

More text.
\end{document}
</pre>
</div>

The error here is the underscore `_` which should be entered as `\_`.

TeX does report this correctly with the _first_ error message

```
! Missing $ inserted.
<inserted text> 
                $
l.4 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

However if you scroll past the `?` prompt then TeX recovers by adding
a `$` so the `_` is seen in math mode as a subscript. The math mode
then continues until the `$` which ends math, so the following
`\alpha` is seen in text mode generating another error

```
! Missing $ inserted.
<inserted text> 
                $
l.4 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}

