---
title: "Dealing with errors"
---


Unlike a typical word processing system, LaTeX has an Edit/Run/View cycle
closer to working with programming language compilers, and as in programming
users may make errors in their input and so need to deal with error messages
reported by the system.

This page gives examples of several common errors.

Each error example has some discussion about the form of the error
message.

It may be instructive to try the examples but also use the
edit features to try to fix the documents and test that you can
resolve the errors.

## pdflatex not found

A common first error that people see when starting is:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

on windows or

```
bash: pdflatex: command not found
```
{: .noedit :}

on linux.

This is
not a TeX error but an operating system error saying that TeX is not
installed or not found.  A common mistake is to install an _editor_
such a TeXworks or TeXShop but without installing a TeX system such as
TeX Live or MikTeX.

## Anatomy of a {{ site.tex }} error message
<div class="highlight">
<pre>
\documentclass{article}

\newcommand\mycommand{<span style="color:red">\textbold</span>{hmmm}}

\begin{document}

My command is used here \mycommand.

\end{document}
</pre>
</div>

This produces a multi-line message in the log file.

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.7 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

* The first line, marked with `!` gives the general nature of the error (undefined command in this case).
* The second pair of lines show the line that TeX was processing, with a line break marking the point
  that TeX had reached. The undefined command is the last token read so the last word before the line break
  `\textbold` here. After the line break are the remaining tokens `{hmmm}` that have possibly been read as
  an argument but have not yet been executed by TeX.
* There may in general be some additional lines at this point, showing more context of the error message,
* The final line starts with `l.` followed by a line number, and then the line in the source file where the
  error is detected.

* The final line is a `?`.  If using TeX interactively it is possible to
  enter instructions to TeX at this point, but most editors and online
  systems run TeX in a mode that does not stop at errors but will
  scroll past this and try to process the rest of the document. Typing
  `s` to the prompt will instruct TeX to carry on in this mode if you
  are working interactively.


Note here that TeX does not see the error at the point that
the definition is made; and in fact if `\mycommand` is defined but not
used, no error would be raised. So although the error is reported on
line 7, the "real" error is in the definition on line 3, so it is
important to see the whole error message.

Beware that some editors show one line "summaries" of the error log.
This can be particularly misleading if shown as

`line 7: undefined command: ...\mycommand`

as it makes it appear that `\mycommand` is not defined.


## Mismatched braces


<div class="highlight">
<pre>
\documentclass{article}

\usepackage[leqno<span style="color:red">}</span>{amsmath}

\begin{document}

\end{document}
</pre>
</div>

Here the error is a mismatched `}` used to end the optional
argument. The closing brace causes LaTeX's option parsing
to fail and you get an internal and not that helpful error: 

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

While the error description is unhelpful; the following two
lines do accurately display the location of the error by the use of
the linebreak showing how far TeX had read:

```
l.3 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


## Missing files

<div class="highlight">
<pre>
\documentclass{article}

\usepackage{<span style="color:red">amsmathz</span>}

\begin{document}

\end{document}
</pre>
</div>

This produces the error

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Note the same error may be caused by two different causes; a simple
typo as here, which may be corrected by fixing the package name, or
that the file really is missing and needs to be installed on the
current system.

## Blank lines in display math

<div class="highlight">
<pre>
\documentclass{article}

\begin{document}

Some text
\begin{equation}
<span style="background-color:red">      </span>
  1=2
<span style="background-color:red">      </span>
\end{equation}

\end{document}
</pre>
</div>

Produces the slightly mysterious error

```
! Missing $ inserted.
```
{: .noedit :}

But the fix is simple, blank lines are not allowed in math
environments and should be deleted.

## Exercise

Attempt to fix the errors in the supplied examples.

Produce small documents with different errors and note the form of the error messages.
