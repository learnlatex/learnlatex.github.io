---
title: More on: Using document classes to influence design
---

## Journal-specific classes

Many academic journals provide LaTeX classes for submissions. These typically
set up the layout to be similar to the final journal, although that does  depend
on font usage, etc. If there is a class available, it is normally provided
directly by the editorial office, who should give appropriate detail on what
features it has.

## Presentations classes

One area that needs a lot of specialism is creating presentations. The `slides`
class was written for making 'classical' printed slides, and it does not
have any special support for on-screen presentations. There are two classes
that have been developed to do just that, and that are widely used:
`beamer` and `powerdot`. As `beamer` is probably the more common one, we will
give you an example of how it works:

```latex
\documentclass{beamer}
\begin{document}

\begin{frame}{A first frame}
  Some text
\end{frame}

\begin{frame}{A second frame}
  Different text
  \begin{itemize}
    \item<1-> First item
    \item<2-> Second item
  \end{itemize}
\end{frame}

\end{document}
```

This shows two important ideas:. First, `beamer` divides a document into frames,
each of which can make more than one slide (page). Second, `beamer` adds to the
normal LaTeX syntax to allow parts of the source to appear 'a bit at a time'.
This is powerful but more complicated than we can cover here: take a look  at
[this blog
entry](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) for
more.
