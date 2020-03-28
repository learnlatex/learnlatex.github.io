---
title: Including graphics and making things 'float'
---

## Graphics and floats

To bring in graphics from outside LaTeX, use the `graphicx`
package

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{mwe}  % provide example images

\begin{document}
This picture
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
is an imported PDF.
\end{document}
```
<!-- {% endraw %} -->

You can include PNG, JPG, and PDF files.
If you have more than one version of a graphic then you can write,
for instance, `example-image.png`.
The `\includegraphics` command has [many options](more-07.html).

Traditionally in typesetting, particularly with technical documents,
graphics may move to another spot in the document.
This is called a *float*.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage{graphicx}
\usepackage{mwe}  % gives example images
\usepackage{lipsum}  % produce dummmy text as filler

\begin{document}
\lipsum[1-4]

Test location.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Test image}\label{fig:example}
\end{figure}

\lipsum[6-10]
\end{document}
```
<!-- {% endraw %} -->

Here LaTeX moves the graphic and the caption
away from the `Test location` text to the top of the second page,
because there isn't room for it on the bottom of the first page.
The `ht` influences where LaTeX can place the float; these two
letters mean that it can go where it is in the source (next to
``Test location`) or to the top of a page.


### More

You can read [more](more-07.html) on graphics and floats.