---
title: "Mathematics"
---

## Math mode

You can mark up mathematics in LaTeX in a logical way in what is known as
'math mode'. In math mode, spaces are ignored and the correct spacing between
characters is (almost always) applied. There are two forms of math mode: inline
and display.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A sentence with inline mathematics: $y = mx + c$.
A second sentence with inline mathematics: $5^{2}=3^{2}+4^{2}$.


A second paragraph containing display math.
\[
  y = mx + c
\]
See how the paragraph continues after the display.
\end{document}
```

You may see 'LaTeX-like' mathematical input in other places, for example
the MathJax system for placing equations in web pages. These systems often
accept slight variations on LaTeX's syntax as they do not actually use LaTeX
'behind the scenes'. Our examples are all 'correct' LaTeX, so if you see
something different in another context, it might be because the example is not
really using LaTeX.

## Inline math mode and mathematical notation

As you can see above, inline math mode is marked using a pair of dollar
symbols (`$...$`). It is also possible to use the notation `\( ... \)`.
Simple expressions are entered without any special markup, and you'll see
that the math is spaced out nicely and has letters in italic.

Inline math mode restricts vertical size of the expression so that as
far as possible the formula does not disturb the linespacing of the
paragraph.

Note that _all_ mathematics should be marked up as math, even if it is
a single character  use `... $2$ ...`   not `... 2 ...` otherwise, for
example, when you need a negative number and need math to get a minus
sign the `... $-2$ ...` may use math digits which may not be the same
font as the text digits (depending on the document class).
Conversely
beware of math mode constructs appearing in plain text copied from
elsewhere such as  monetary values using `$` or filenames using `_` (which
may be marked up as `\$` and `\_` respectively).

We can easily add superscripts and subscripts; these are marked using `^` and
`_`, respectively.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Superscripts $a^{b}$ and subscripts $a_{b}$.
\end{document}
```

(You might see examples where simple super- and subscripts are entered without
braces, but that is not the official syntax and can go wrong; always use
braces.)

There are a _lot_ of specialist math mode commands. Some of them are quite
easy, for example `\sin` and `\log` for sine and logarithm or `\theta` for the
Greek letter.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some mathematics: $y = 2 \sin \theta^{2}$.
\end{document}
```

We cannot cover all the standard LaTeX math mode commands here, but there are
many online resources listing the standard set. You can look up commands for
math mode symbols using the
[Detexify](https://detexify.kirelabs.org/classify.html) tool.


## Display mathematics

You can use exactly the same commands for display math mode as for
inline work. Display math mode is set centered by default and is meant
for larger equations that are 'part of a paragraph'. Note that
display math environments do not allow a paragraph to end within the
mathematics, so you may not have blank lines within the source of the
display.

The paragraph should always be started _before_ the display so do not
leave a blank line before the display math environment. If you need
several lines of mathematics, do not use consecutive display math
environments (this produces inconsistent spacing); use one of the
multi-line display environments such as `align` from the `amsmath`
package described later.

It's particularly useful for integrations, for example:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A paragraph about a larger equation
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Notice here how sub-/superscript notation is used to set the limits on the
integration.

We've added one piece of manual spacing here: `\,` makes a thin space before the
`dx`, which we need so it does not look like a product.

You often want a numbered equation, which is created using the `equation`
environment. Let's try the same example again:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A paragraph about a larger equation
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

The equation number is incremented automatically and may be a simple
number as in this example or may be prefixed by section number, so
(2.5) for the 5th equation in section 2. The details of the formatting
are set up by the document class and not described here.


## The `amsmath` package

Mathematical notation is very rich, and this means that the tools built
into the LaTeX kernel can't cover everything. The `amsmath` package
extends the core support to cover a lot more ideas.
The [`amsmath` User Guide](http://texdoc.net/pkg/amsmath)
contains many more examples than we can show in this lesson.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Solve the following recurrence for $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

The `align*` environment makes the equations line up on the ampersands, the `&`
symbols, just like a table. Notice how we've used `\quad` to insert a bit of
space, and `\text` to put some normal text inside math mode. We've also used
another math mode command, `\binom`, for a binomial.

Notice that here we used `align*`, and the equation didn't come out numbered.
Most math environments number the equations by default, and the starred variant
(with a `*`) disables numbering.

The package also has several other convenient environments, for
example for matrices.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
AMS matrices.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```


## Fonts in math mode

Unlike normal text, font changes in math mode often convey very specific meaning.
They are therefore often written explicitly. There are a set of commands you need
here:

- `\mathrm`: roman (upright)
- `\mathit`: italic spaced as 'text'
- `\mathbf`: boldface
- `\mathsf`: sans serif
- `\mathtt`: monospaced (typewriter)
- `\mathbb`: double-struck (blackboard bold) (provided by the `amsfonts` package)

Each of these takes Latin letters as an argument, so for example we might
write a matrix as

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
The matrix $\mathbf{M}$.
\end{document}
```

Note that the default math italic separates letters so that they may
be used to denote a product of variables. Use `\mathit` to make a word italic.

The `\math..` font commands use fonts specified for math
use. Sometimes you need to embed a word that is part of the outer
sentence structure and needs the current text font, for that you can
use `\text{...}` (which is provided by the `amsmath` package) or
specific font styles such as `\textrm{..}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}

$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```


If you need to make other
symbols bold, [see the extra details](more-10).

## Exercises

Try out some basic math mode work: take the examples and switch between
inline and display math modes. Can you see what effect this has.

Try adding other Greek letters, both lower- and uppercase. You should be
able to guess the names.

Experiment with the font changing commands: what happens when you try to
nest them?

Displayed math is centered by default; try adding the document class
option `[fleqn]` (flush
left equation) option to some of the above examples to see a different
layout. Similarly equation numbers are usually on the
right. Experiment with adding the `[leqno]` (left equation numbers)
document class option.
