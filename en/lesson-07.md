---
title: Including graphics and making things 'float'
---

## Including graphics

To bring in graphics from outside LaTeX, use the `graphicx`
package, which adds the command `\includegraphics` to LaTeX.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{graphicx}

\begin{document}
This picture
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
is an imported PDF.
\end{document}
```
<!-- {% endraw %} -->

You can include EPS, PNG, JPG, and PDF files.
If you have more than one version of a graphic then you can write,
for instance, `example-image.png`. (The `graphcicx` package will try to
guess the extention if you do not give one.)
The `\includegraphics` command has [many options](more-07.html) to control
the size and shape of included images, and to trim down material.

## Making images float

Traditionally in typesetting, particularly with technical documents,
graphics may move to another spot in the document.
This is called a *float*. Images are normally included as floats so they do
not leave large gaps in the page.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{lipsum}  % produce dummmy text as filler

\begin{document}
\lipsum[1-4] % Just a few filler paragraphs

Test location.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Test image}\label{fig:example}
\end{figure}

\lipsum[6-10] % Just a few filler paragraphs
\end{document}
```
<!-- {% endraw %} -->

Here LaTeX moves the graphic and the caption
away from the `Test location` text to the top of the second page,
because there isn't room for it on the bottom of the first page.
The `ht` influences where LaTeX can place the float; these two
letters mean that it can go where it is in the source (next to
`Test location`) or to the top of a page.
