# Your first LaTeX document

In your editor open a new file `first.tex`. 
Enter the text as it is written below, or you can 
copy and paste from here.
```
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}

\begin{document}
Hey world!

This is a first document.
\end{document}
```
Save the file.
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






## What you've got

The first document shows the basics.
LaTeX documents are  a mixture of text and commands. 
The commands start with a backslash
and sometimes have arguments in curly braces
(or sometimes optional arguments in square brackets).
Then you get an output PDF by telling LaTeX to process your file.

Every LaTeX document has a `\begin{document}` and a matching
`\end{document}`.
Between these two is the *document body*, where your content goes.
Here the body has two paragraphs (in LaTeX you separate paragraphs
with a blank line).
Before the `\begin{document}` is the *document preamble*,
which has code to set up the document layout.

LaTeX has other `\begin{...}` and `\end{...}` pairs; these are
called *environments*.
You must match them, so that for every `\begin{x}` there is an `\end{x}`.
You must also nest them, so that if you have
`\begin{x}  ... \begin{y}` then you must have
`\end{y}  ... \end{x}`.

One thing that may not be clear is the `article`.
This is a document *class*.
It sets the document up with margins, fonts, etc.
For instance, LaTeX articles have no chapters, and so the top-level
unit is `\section{..}`.
To get chapters you would instead declare `\documentclass{book}`.

After having declared a class, in the preamble
we can modify the document in small ways by bringing in some
*packages*, such as `amsmath`.
For a taste of that,
we can change the margins with a new third line.

```
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}
\usepackage[margin=1in]{geometry}

\begin{document}
Hey world!

This is a first document.
\end{document}
```





## Get math

People interested in LaTeX often want to include mathematics.
The `amsmath` package provides lots of commands developed
by the American Mathematical Society.

Edit the document to say this.
```
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}

\begin{document}
Hey world!

This is a first document, \( a^2+b^2 = f_0^2 \).
\end{document}
```

Write mathematics in the middle of text by putting it inside `\( ... \)`
(you can also put it inside `$...$`).
Make superscripts as in `a^2`, and make subscripts as in `f_0`.
You must put any mathematical material at all inside
the markers, so you would write `The number \( m \) is odd`.

For a mathematics showcase, edit the document to say this.

```
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}

\begin{document}
Hey world!

This is a first document, \( a^2+b^2 = f_0^2 \).

Solve the following recurrence for \( n,k\geq 0 \):
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for \( n,k>0 \).}
\end{align*}

Elementary calculus suffices to evaluate \( C \) if we are clever enough
to look at the double integral
\begin{equation*}
  C^2
  =\int_{-\infty}^{+\infty} e^{-x^2} \mathrm{d}x
   \int_{-\infty}^{+\infty} e^{-y^2} \mathrm{d}y\;.
\end{equation*}

Therefore
\begin{equation}
a\equiv b\pmod{m}
\qquad\Longleftrightarrow\qquad
a\equiv b \pmod{p^{m_p}}\quad\text{for all \( p \)}  
\end{equation}
if the prime factorization of \( m \) is $\prod_p p^{m_p}$.
\end{document}
```

There is a lot to see here.
Some are: the command `\binom{n}{k}` produces a binomial coefficient.
The `\int` gives an integral, `\quad` produces some space,
and `\pmod{p}` produces the modulus notation using parentheses.

This also shows environments for mathematics.
The `align*` environment that makes the equations line up on the
ampersands, the `&` symbols.
Both the `equation` and `equation*` environments give displayed equations,
but the former will have a numbering tag while the
latter will not.

The `amssymb` package gives you access to the AMS's symbols. 
For instance, get a blackboard boldface Z for the integers
with `$\mathbb{Z}$`.
(The `amsthm` package gives you access to theorem environments,
but those go beyond the scope of this document.)






## Sections

LaTeX is very different than a word processor, which 
moves the text around as you type it.  
Here you describe what you want and 
later, separately, LaTeX does the placement.

We will next tell LaTeX to make a section.
We don't tell it to start with text in boldface and a larger size, we just ask
for a section.
The system handles the font changes, vertical space, etc.

Edit the file to say this.
```
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}

\begin{document}
Hey world!

This is a first document, \( a^2+b^2 = f_0^2 \).

% ================
\section{Title of the first section}

Solve the following recurrence for \( n,k\geq 0 \):
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for \( n,k>0 \).}
\end{align*}

\subsection{Subsection of the first section}

Elementary calculus suffices to evaluate \( C \) if we are clever enough
to look at the double integral
\begin{equation*}
  C^2
  =\int_{-\infty}^{+\infty} e^{-x^2} \mathrm{d}x
   \int_{-\infty}^{+\infty} e^{-y^2} \mathrm{d}y\;.
\end{equation*}

% ================
\section{Second section}

Therefore
\begin{equation}
a\equiv b\pmod{m}
\qquad\Longleftrightarrow\qquad
a\equiv b \pmod{p^{m_p}}\quad\text{for all \( p \)}  
\end{equation}
if the prime factorization of \( m \) is $\prod_p p^{m_p}$.
\end{document}
```

LaTeX numbers the sections and subsections and includes the
titles in boldface.
How to modify their look is beyond this this document but the point is that
the system does a lot of the work for you.

Notice the line before the sections starting with
a percent sign, `%`.
The percent sign marks the rest of the line as a comment
so that LaTeX ignores the equal signs.
(It is only here as an example,
but you might put that to help find the sections
while you are editing.)




## Cross references and contents

We'll add structure to the document.
Change it to this.
```
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}

\title{Hey world!}
\author{Stephen Maturin}

\begin{document}
\maketitle
\tableofcontents
\newpage
This is a first document, \( a^2+b^2 = f_0^2 \).

% ================
\section{Title of the first section}

Solve the following recurrence for \( n,k\geq 0 \):
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for \( n,k>0 \).}
\end{align*}

\subsection{Subsection of the first section}

Elementary calculus suffices to evaluate \( C \) if we are clever enough
to look at the double integral
\begin{equation*}
  C^2
  =\int_{-\infty}^{+\infty} e^{-x^2} \mathrm{d}x
   \int_{-\infty}^{+\infty} e^{-y^2} \mathrm{d}y\;.
\end{equation*}

% ================
\section{Second section}
\label{sec:labelone}

Therefore
\begin{equation}
a\equiv b\pmod{m}
\qquad\Longleftrightarrow\qquad
a\equiv b \pmod{p^{m_p}}\quad\text{for all \( p \)}
\label{eq:labeltwo}
\end{equation}
if the prime factorization of \( m \) is $\prod_p p^{m_p}$.

In Section~\ref{sec:labelone} is equation~\ref{eq:labeltwo}.
\end{document}
```

There are two `\label{...}` commands, one after the second `\section{...}`
and above `\end{equation}`.
They are associated with the last sentence's `\ref{...}` commands
When you run LaTeX, it saves label information to an auxiliary file.
For `\label{sec:labelone}` LaTeX knows that it is now in a section and
so it saves the section number.
For `\label{eq:labeltwo}` LaTeX knows that the most recent environment
of interest is an equation so it saves the information for the equation.
When you ask for the reference, LaTeX gets it from the file.

Because of the auxiliary file mechanism, 
the first time that you compile a document the label may have not
yet been saved.
In the output PDF the reference will show as boldface double question marks,
**??**.
Run LaTeX one more time, and you'll be all set.
(In practice, while writing a real document
you will run LaTeX a number of times anyway, so this is not an issue.)

Notice the twiddles, the `~` characters before the references.
You don't want a line break between `Subsection` and its number, or
between `equation` and its number.
Putting in a twiddle means LaTeX won't break the line there.

The other thing we added is a title and table of contents.
In the preamble, the `\title{...}` and `\author{...}` commands store the
information, and after the `\begin{document}` the `\maketitle`
cause LaTeX to put that information into the output.

The `\tableofcontents` command uses the section and subsection information
to populate the table.
Because it uses its own auxiliary file, here also you may need to run
LaTeX twice to resolve the information.





## Citations

Finally, edit the file to say this. 

```
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}

\title{Hey world!}
\author{Stephen Maturin}

\begin{document}
\maketitle
\tableofcontents
\newpage
This is a first document, \( a^2+b^2 = f_0^2 \).
The mathematics is taken from \cite{ConcreteMath}.

% ================
\section{Title of the first section}

Solve the following recurrence for \( n,k\geq 0 \):
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for \( n,k>0 \).}
\end{align*}

\subsection{Subsection of the first section}

Elementary calculus suffices to evaluate \( C \) if we are clever enough
to look at the double integral
\begin{equation*}
  C^2
  =\int_{-\infty}^{+\infty} e^{-x^2} \mathrm{d}x
   \int_{-\infty}^{+\infty} e^{-y^2} \mathrm{d}y\;.
\end{equation*}

% ================
\section{Second section}
\label{sec:labelone}

Therefore
\begin{equation}
a\equiv b\pmod{m}
\qquad\Longleftrightarrow\qquad
a\equiv b \pmod{p^{m_p}}\quad\text{for all \( p \)}
\label{eq:labeltwo}
\end{equation}
if the prime factorization of \( m \) is $\prod_p p^{m_p}$.

In Section~\ref{sec:labelone} is equation~\ref{eq:labeltwo}.

\begin{thebibliography}{9}
\bib item{ConcreteMath}
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
