---
lang: "en"
title: "Including graphics and making things 'float'"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "Using graphics"
toc-description: "Appearance, spacing and positioning."
---

## Including graphics

To bring in graphics from outside LaTeX, use the `graphicx`
package, which adds the command `\includegraphics` to LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
This picture
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
is an imported PDF.
\end{document}
```

You can include EPS, PNG, JPG, and PDF files.
If you have more than one version of a graphic then you can write,
for instance, `example-image.png`. (The `graphicx` package will try to
guess the extension if you do not give one.)

You'll notice we've used a new environment here, `center`, to place the image
horizontally centered on the page. [A bit later](lesson-11), we'll talk more
about spacing and positioning.

## Altering graphic appearance

The `\includegraphics` command has many options to control
the size and shape of the included images and to trim down material. Some of
these are used a lot, so they are worth being aware of.

The most obvious thing to set is the `width` or the `height` of an
image, which are often given relative to the `\textwidth` and
`\textheight`. LaTeX will automatically scale the image so that the aspect
ratio stays correct.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Some text
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

You can also `scale` images, or rotate them by an `angle`. The other thing you
might want to do is to `clip` and `trim` an image.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Making images float

Traditionally in typesetting, particularly with technical documents,
graphics may move to another spot in the document.
This is called a *float*. Images are normally included as floats so they do
not leave large gaps in the page.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % produce dummy text as filler

\begin{document}
\lipsum[1-4] % Just a few filler paragraphs

Test location.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{An example image}
\end{figure}

\lipsum[6-10] % Just a few filler paragraphs
\end{document}
```

Here LaTeX moves the graphic and the caption
away from the `Test location` text to the top of the second page,
because there isn't room for it on the bottom of the first page.
The `ht` influences where LaTeX can place the float; these two
letters mean that it can go where it is in the source (next to
`Test location`) or to the top of a page. You can use up to four position
specifiers

- `h` 'Here' (if possible)
- `t` Top of the page
- `b` Bottom of the page
- `p` A dedicated page only for floats

[Later](lesson-09), we will see how to cross-reference floats so you can point
to them from your text.

You'll probably spot that we've centered the image here using `\centering`
rather than the `center` environment. Inside a float, you should use
`\centering` if you want to horizontally center content; this avoids both
the float and `center` environment adding extra vertical space.

## Exercises

Try including an image you have created, replacing the 'standard' ones we have
used in the demonstration.

Explore what you can do using the `height`, `width`, `angle` and `scale` keys.

Use `lipsum` to make a reasonably long demonstration, then try out placing
floats using the different position specifiers. How do different
specifiers interact?
