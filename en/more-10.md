---
title: More on: Math(s)
---

You may be interested in LaTeX because it is the standard for
writing mathematics.
We will use the `amsmath` package, developed
by the American Mathematical Society.

Edit the document to say this.
```tex
\documentclass{book}
\usepackage{amsmath,amssymb,amsthm}

\begin{document}
Hey world!

This is displacement,
\( d(t) = v_0\cdot t\sin\theta - gt^2/2 \).


\chapter{Mathematical showcase}

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

Look first at the part before the chapter.
Write mathematics in the middle of text by putting it inside `\( ... \)`
(you can also put it inside `$ ... $`).
You must put any mathematical material at all inside
those markers, so for instance you would write `The number \( m \) is odd`.
Make subscripts as in `v_0` and make subscripts as in `t^2`.

Inside the chapter we are showing off so there is a lot to see.
Some things are: the command `\binom{n}{k}` produces a binomial coefficient.
The `\int` gives an integral, `\quad` produces some space,
and `\pmod{p}` produces the modulus notation using parentheses.

Others: put more than one thing in a superscript or subscript as
in `e^{-x^2}`, put text inside a mathematics area with `\text{...}`,
and you can put both a superscript and a subscript on the same
symbol, as we've done with the `int`.

This also shows environments for mathematics.
The `align*` environment makes the equations line up on the
ampersands, the `&` symbols.
Both `equation` and `equation*` give displayed equations,
but the former has a numbering tag while the
latter does not.

Back to the file's second line.
The `amssymb` package gives you access to the AMS's symbols.
For instance, get a blackboard boldface Z for the integers
with `$\mathbb{Z}$`.
The `amsthm` package gives you theorem environments,
but those go beyond the scope of this document.
