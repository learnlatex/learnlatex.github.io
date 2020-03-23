# Your first LaTeX document

In your editor open a new file `first.tex`. 
Enter the text as it is written below, or you can 
copy and paste from here.
```
\documentclass{article}
\usepackage{amsmath,amsthm,amssymb}

\begin{document}
Hey world!
Remember that \( e^{i\pi}+1=0 \).
\end{document}
```
Save that file.
Compile it, that is, turn it into a PDF document.
(If you have errors, see the subsection below.)
View the output `first.pdf` with
whatever program you prefer for PDF viewing.
Looks great; congratulations!



## Handling errors

Errors happen.
Check that you have entered the file lines exactly.
Sometimes seemingly small input changes give large changes in the
result, including causing a document to not work.
If you are stuck, try erasing the document and copying it fresh from the
lines above.

If your invocation of LaTeX ends with a question mark then you can get out by
typing `x` and `Enter`.

LaTeX's error messages can be hard to understand.
If you know someone with some experience, of course that's great.
If not, try putting the error message into a search engine; lots
of people have seen this error before and you'll find the answer there.






## What you are looking at

The first document shows the basics.
LaTeX documents are  a mixture of text and commands. 
The commands start with a backslash
and sometimes have arguments in curly braces
(or sometimes optional arguments in square brackets).
Then you get an output PDF by telling LaTeX to process your file.

Every LaTeX document has a `\begin{document}` and a matching
`\end{document}`.
Inside these two is the *document body*, where your content goes.
The part before the `\begin{document}` is the *document preamble*,
which has code to set up the document layout.

LaTeX has other `\begin{name}` and `\end{name}` pairs; these are
called *environments*.

One thing that may not be clear is the `article`.
This is a document *class*.
It sets the document up with margins, fonts, etc.
For instance, in an article there are no chapters and so the top-level
unit is `\section{..}`.
After having declared a class, in the preamble
we can modify the document in small ways by bringing in some
*packages*, such as `amsmath`.

Here we are not exploring all
of the options but 
for a taste of what kinds of modifications are possible,
you can change the margins with a new third line.

```
\documentclass{article}
\usepackage{amsmath,amsthm,amssymb}
\usepackage[margin=1in]{geometry}

\begin{document}
Hey world!
Remember that \( e^{i\pi}+1=0 \).
\end{document}
```

Another package is `amsmath`, which provides lots of commands developed
by the American Mathematical Society for showing mathematical text.




## Get more out: sections

Notice that LaTeX is very different than a word processor.
A word processor moves the text around as you type it.  
Here you describe what you want and 
later, separately, LaTeX does the placement.
For instance, in the next document we 
tell LaTeX to make a section.
We don't tell it to start with text in boldface and a larger size, we just ask
for a section.
The system handles the font changes, vertical space, etc.

Edit the file to say this.

```
\documentclass{article}
\usepackage{amsmath,amsthm,amssymb}

\usepackage{lipsum}  % package to generate filler text
\begin{document}
Some initial text.

\section{Title of the first section}
\lipsum[1]

\subsection{Subsection of the first section}
\lipsum[2-3]

\subsection{Another subsection}
\lipsum[4-5]  

\section{Second section}
\lipsum[6]

\subsection{First subsection of the second section}
\lipsum[7]
\end{document}
```

Notice the fourth line's `% package to generate filler text`.
The percent sign marks the rest of the line as a comment.

LaTeX automatically numbers the sections and subsections.
How to modify their look is beyond this this document but the point is that
the system does a lot of the work for you.




## Cross references

Change the document to this.

```
\documentclass{article}
\usepackage{amsmath,amsthm,amssymb}

\usepackage{lipsum}  % filler text
\begin{document}
This is some preamble text that you enter yourself.

\section{Text for the first section}
\lipsum[1]

\subsection{Text for a subsection of the first section}
\label{subsec:labelone}
\lipsum[2-3]

\subsection{Another subsection of the first section}
\label{subsec:labeltwo}
\lipsum[4-5]

\section{The second section}
\lipsum[6]

Refer again to Subsection~\ref{subsec:labelone}.
Note also the discussion on page~\pageref{subsec:labeltwo}

\subsection{Title of the first subsection of the second section}
\lipsum[7]
\end{document}
```

When you run LaTeX, it saves the cross referenced information to an
auxillary file, and it looks in that file to resolve those references.
Consequently, 
the first time that you compile a document the label has not yet been saved
(and in the PDF they show as boldface double question marks **??**).
But after you compile it a second time these references will all be resolved.
(In practice, in writing a real document
you will run LaTeX a number of times anyway, so these will just 
resolve themselves.)

Notice the twiddles, the two `~` characters near the bottom of the file.
You don't want a line break between `Subsection` and its number, or
between `page` and its number.
Putting in a twiddle means LaTeX won't break the line there.


## Footnotes, table of contents, etc.

Next edit the file to say this. 

```
\documentclass{article}
\usepackage{amsmath,amsthm,amssymb}

\usepackage{lipsum}

\title{Test document}
\author{Stephen Maturin \\ \url{smaturin@example.com}}
\date{1958-Oct-12}
\begin{document}
\maketitle
\tableofcontents
\newpage

Some initial text.\footnote{First footnote.}\footnote{Second footnote.}

\section{Title of the first section}
\lipsum[1]

\subsection{Subsection of the first section}
\lipsum[2-3]
See \cite{ConcreteMath}.

\subsection{Another subsection of the first section}
\lipsum[4-5]

\section{Second section}
\lipsum[6]

\subsection{Title of the first subsection of the second section}
\lipsum[7]

\begin{thebibliography}{9}
\bibitem{ConcreteMath}
Ronald L. Graham, Donald E. Knuth, and Oren Patashnik, 
\textit{Concrete Mathematics}, 
Addison-Wesley, Reading, MA, 1995.
\end{thebibliography}
\end{document}
```

As earlier, you may need to compile the document 
twice to resolve cross-references.
(In the `\begin{thebibliography}{9}` line, 
the `9` tells LaTeX that
no reference is wider than the digit 9.)  



## Get math

Many people interested in LaTeX want to include mathematics.

Edit the document to say this.
(The examples below are from *Concrete Mathematics* by Graham, Knuth,
and Patashnik.)
```
\documentclass{article}
\usepackage{amsmath,amsthm,amssymb}

\begin{document}
There are $\binom{2n+1}{n}$ sequences with $n$ occurrences of 
$-1$ and $n+1$ occurrences of $+1$, and Raney's lemma
tells us that exactly $1/(2n+1)$ of these sequences have all
partial sums positive.

Elementary calculus suffices to evaluate $C$ if we are clever enough
to look at the double integral
\begin{equation*}
  C^2
  =\int_{-\infty}^{+\infty} e^{-x^2} \mathrm{d}x
   \int_{-\infty}^{+\infty} e^{-y^2} \mathrm{d}y\;.
\end{equation*}

Solve the following recurrence for $n,k\geq 0$:
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n,k>0$.}
\end{align*}

Therefore
\begin{equation}
a\equiv b\pmod{m}
\qquad\Longleftrightarrow\qquad
a\equiv b \pmod{p^{m_p}}\quad\text{for all $p$}  
\end{equation}
if the prime factorization of $m$ is $\prod_p p^{m_p}$.
\end{document}
```

The `\usepackage{amsmath,...}` line brings in package that 
gives us access to commands and environments developed by
the American Mathematical Society.
One example is the `align*` environment that makes the equations line up.

You can have these displayed equations numbered, as with the
`equation` environment, or not, as with the
`equation*` environment.

The same `\usepackage` command also gives you access to the AMS's symbols. 
Thus, we get a blackboard boldface Z with `$\mathbb{Z}$`.
(The `amsthm` package gives you access to theorem environments,
but those go beyond the scope of this document.)
