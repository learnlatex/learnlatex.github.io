---
layout: "lesson"
lang: "it"
title: "Di più su: Adoperare le classi di documento per influire sull'aspetto della pagina"
description: "Questa lezione offre informazioni su classi di documento per LaTeX più specialistiche."
toc-anchor-text: "Di più su: Adoperare le classi di documento per influire sull'aspetto della pagina"
---

## Classi specifiche per riviste

Molte riviste accademiche forniscono agli autori classi 
LaTeX dedicate da adoperare per inviare i contributi. 
In genere, queste classi impostano l'aspetto del documento
in modo che sia simile a quello della rivista finale, 
sebbene la cosa dipenda dall'uso dei font, eccetera. 
Se è disponibile una classe, di solito viene fornita 
direttamente dalla redazione, che dovrebbe fornire 
anche dettagli appropriati e informazioni sulle sue 
caratteristiche. 
Molte di queste sono disponibili anche su [CTAN](https://ctan.org) 
e nelle distribuzioni standard di TeX.

## Classes for presentations

One area that needs a lot of special treatment is creating presentations. The `slides`
class was written for making 'classical' printed slides, and it does not
have any special support for on-screen presentations. Two classes
have been developed to do just that, and that are widely used:
`beamer` and `powerdot`. As `beamer` is probably the more common one, we will
give you an example of how it works:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}
  \frametitle{A first frame}
  Some text
\end{frame}

\begin{frame}
  \frametitle{A second frame}
  Different text
  \begin{itemize}
    \item<1-> First item
    \item<2-> Second item
  \end{itemize}
\end{frame}

\end{document}
```

This shows two important ideas. First, `beamer` divides a document into frames,
each of which can make more than one slide (page). Second, `beamer` adds to the
normal LaTeX syntax to allow parts of the source to appear 'a bit at a time'.
This is powerful but more complicated than we can cover here: take a look  at
[this blog
entry](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) for
more.

## A class for images

There are occasions when you need to make an image (which might be text-heavy)
using LaTeX. Often, you do not want anything other than the content itself on
the 'page'. That is easiest to do using the [`standalone`](https://ctan.org/pkg/standalone)
class. It automatically sets the size of the page to surround the printed content.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
A simple document: this will be a very small box!
\end{document}
```
