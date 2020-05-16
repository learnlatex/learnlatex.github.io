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
\begin{document}
A sentence with inline mathematics: $y = mx + c$.

A second paragraph containing display maths
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
Simple text is entered without any special markup, and you'll see that it's
spaced out nicely and has letters in italic: this is normal for mathematics.

We can easily add superscripts and subscripts: these are marked using `^` and
`_`, respectively.

```latex
\documentclass{article}
\begin{document}
Superscripts $a^{b}$ and subscripts $a_{b}$.
\end{document}
```

(You might see examples where simple super- and subscripts are entered without
braces, but that is not the official syntax and can go wrong: always use
braces.)

There are a _lot_ of specialist math mode symbol commands. Some of them are quite
easy, for example `\sin` and `\log` for sine and logarithm or `\theta` for the
Greek letter.

```latex
\documentclass{article}
\begin{document}
Some symbols: $y = 2 \sin \theta^{2}$.
\end{document}
```

We cannot cover all the standard LaTeX math mode commands here, but there are
many online resources listing the standard set. You can look up math mode
symbols using the great
[Detexify](https://personaljournal.ca/paulsutton/detexify) tool.

## Display mathematics

You can use exactly the same commands for display math mode as for inline
work. Display math mode is set centered and is meant to be 'part of a paragraph'
where the equation is larger. It's particularly useful for integrations, for
example:

```latex
\documentclass{article}
\begin{document}
A paragraph about a larger equation
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Notice here how sub-/superscript notation is used to set the limits on the
integration.

You often want a numbered equation, which is created using the `equation`
environment. Let's try the same example again:

```latex
\documentclass{article}
\begin{document}
A paragraph about a larger equation
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

We've added one piece of manual spacing here: `\,` makes a thin space before the
`dx`, which we need so it does not look like a product.

## The `amsmath` package

Mathematical notation is very rich, and this means that the tools built
into the LaTeX kernel can't cover everything. The `amsmath` package
extends the core support to cover a lot more ideas.

```latex
\documentclass{article}
\usepackage{amsmath}

\begin{document}
Solve the following recurrence for $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1
  \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

The `align*` environment makes the equations line up on the ampersands, the `&`
symbols, just like a table. Notice how we've used `\quad` to insert a bit of
space, and `\text` to put some normal text inside math mode. We've also used
another math mode command, `\binom`, for a binomial.

## Fonts in math mode

Unlike normal text, font changes in math mode often convey very specific meaning.
They are therefore often written explicitly. There are a set of commands you need
here:

- `\mathrm`: roman (upright)
- `\mathit`: italic spaced as 'text'
- `\mathbf`: boldface
- `\mathsf`: sanserif
- `\mathtt`: monospaced (typewriter)
- `\mathbb`: double-stuck ('blackboard bold')

Each of these takes Latin letters as an argument, so for example we might
write a matrix as

```latex
\documentclass{article}
\begin{document}
The matrix $\mathbf{M}$.
\end{document}
```

If you need to make other symbols bold, [see the extra details](more-10).

## Exercises

Try out some basic math mode work: take the examples and switch between
inline and display math modes. Can you see what effect this has.

Try adding other Greek letters, both lower- and uppercase: you should be
able to guess the names.

Experiment with the font changing commands: what happens when you try to
nest them?
