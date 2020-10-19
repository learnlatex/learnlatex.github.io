---
lang: "en"
title: "Formatting: fonts and spacing"
---

## Paragraph spacing

We have already seen that a blank line in your input will generate a new
paragraph in LaTeX. This shows up as the paragraph will start with an
indent.
One common style is to have no indents for paragraphs, but instead
to have a 'blank line' between them. We can achieve that using the `parskip`
package.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Just for some filler text
\begin{document}
\lipsum
\end{document}
```

## Forcing a new line

Most of the time, you should not force a new line in LaTeX: you almost
certainly want a new paragraph or to use `parskip`, as we've just seen,
to put a 'blank line' between paragraphs.

There are a _few_ places where you use `\\` to start a new line without
starting a new paragraph

- At the end of table rows
- Inside the `center` environment
- In poetry (the `verse` environment)

Almost always, if you are not in one of those special places, you should
_not_ use `\\`.

## Adding explicit space

We can insert a thin space (about half the normal thickness) using
`\,`. In math mode, there are also other commands: `\.`, `\:` and `\;`,
and one for a negative space: `\!`.

Very rarely, for example when creating a title page, you might need to
add explicit horizontal or vertical space. We can use `\hspace` and `\vspace`
for that.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some text \hspace{1cm} more text.

\vspace{10cm}

Even more text.
\end{document}
```

## Explicit text formatting

We saw [a while ago](lesson-03) that most of the time logical structure is
preferable. But sometimes you want to make text bold, or italic, or monospaced,
etc. There are two types of command for this: ones for short pieces of text,
and ones for 'running' material.

For short bits of text, we use `\textbf`, `\textit`, `\textrm`, `\textsf`,
`\texttt` and `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Let's have some font fun: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced} and \textsc{small caps}.
\end{document}
```

For running text, we use commands that alter the font setup; the commands
here are for example `\bfseries` and `\itshape`. Because these don't 'stop',
we need to place them in a _group_ if we want to prevent them from applying to
the whole document. LaTeX environments are groups, as are table cells,
or we can use `{...}` to make an explicit group.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

{\itshape

This text is italic.

So it this: the effect is not limited to a paragraph.

}
\end{document}
```

We can set font size in a similar way; these commands all work on an ongoing
basis. The sizes we set are relative: `\huge`, `\large`, `\normalsize`,
`\small` and `\footnotesize` are common. It's important to finish a paragraph
_before_ changing the font size back; see how we add an explicit `\par`
(paragraph break) here.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

\begin{center}
{\itshape\large Some text\par}
Normal text
{\bfseries\small Much smaller text\par}
\end{center}

\end{document}
```

## Exercises

Experiment with manual formatting: create a `titlepage` environment and
try inserting different spaces and font changes. What happens when we
combine font changes? How does this compare to math mode?

What happens if you change the font size of a large paragraph (try with
`\tiny` then with `\huge`) but don't issue a final `\par` before closing
the group?
