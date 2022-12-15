---
layout: "lesson"
lang: "it"
title: "Selezione dei font e uso dei motori Unicode"
description: "Questa lezione descrive come LaTeX interpreta un input in Unicode e come questo influenza ciò che scrivi e i font che adoperi. Inoltre, dà informazioni su Unicode e sul supporto ai font OpenType."
toc-anchor-text: "Font e motori Unicode"
toc-description: "Selezione dei font e della codifica del file."
---

# Font e motori Unicode

<span
  class="summary">Questa lezione descrive come LaTeX interpreta un input in Unicode e come questo influenza ciò che scrivi e i font che adoperi. Inoltre, dà informazioni su Unicode e sul supporto ai font OpenType.</span>

Quando TeX e LaTeX hanno incominciato a essere adoperati su larga scala, 
erano in grado di gestire solo lingue europee (scritte con l'alfabeto
latino, cioè) sebbene esistesse una certa capacità di adoperare altri 
alfabeti come il greco e il russo.

## Accenti e lettere accentate

All'inizio, gli accenti e le lettere accentate si digitavano con 
sequenze di controllo o macro, come `\c{c}` per ‘ç’ e `\'e` per ‘é’.
Mentre alcune persone continuano a usare questi metodi di input 
perché possono essere più facili da digitare, altri volevano 
poter adoperare i tasti delle loro tastiere per inserire direttamente 
tali simboli.

Prima di Unicode, LaTeX forniva il supporto per molti tipi di *codifica 
del file* che permettevano di scrivere nativamente un testo in varie 
lingue – per esempio, selezionando la codifica `latin1`, gli utenti 
francesi potevano scrivere ‘`déjà vu`’ e LaTeX traduceva internamente 
le lettere accentate nei comandi TeX per produrre l'output corretto.

Questo approccio è ancora in uso nel moderno LaTeX quando si sceglie 
il motore `pdflatex`. Per impostazione predefinita, si presume che 
tutti i file siano Unicode (codifica UTF-8) se non diversamente 
specificato. Sebbene questo motore sia limitato ai caratteri a 8-bit, 
la maggior parte delle lingue europee può essere supportata.

## Selezione dei font

La selezione dei font font con `pdflatex` si appoggia al robusto 
schema di selezione dei font di LaTeX e oggi una distribuzione 
standard di LateX contiene numerosi caratteri pronti per l'uso. 
Per esempio, i caratteri TeX Gyre sono una suite di font di 
alta qualità basati su font di uso comune con cui la maggior parte 
delle persone ha familiarità: Times, Helvetica, Palatino e altri. 
Caricarli è semplice quanto caricare un pacchetto con il nome 
appropriato. Per un clone del Times, il nome di TeX Gyre è Termes:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

For `pdflatex`, most fonts are accessible through packages.  You can have a look
at [The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) or the
[CTAN page on the ‘Font’ topic](https://www.ctan.org/topic/font) to see some
options.  You can also search on the Internet for the font you want, and look
for a `pdflatex`-compatible package version.  If you want to use a proprietary
font, you can search for a suitable clone, which for most applications is
similar enough to the original.

## L'era Unicode

As `pdflatex` is limited to 8-bit file encodings and 8-bit fonts, it cannot
natively use modern OpenType fonts and easily switch between multiple languages
that use different alphabets (or scripts, to use the technical term). There are
two replacements for pdfTeX that natively use Unicode input and modern fonts:
XeTeX and LuaTeX. For LaTeX, these are typically invoked in your editor using
the engines `xelatex` and `lualatex` respectively.

In these engines, font selection is performed by the `fontspec` package, and for
simple documents can look as easy as:
```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

This selects the TeX Gyre Termes font, as in the `pdflatex` example above.
Notably, this approach works for *any* OpenType font.  Some fonts available for
`pdflatex` are also available to `xelatex` and `lualatex` through their
respective packages as well, or by loading any font you have installed on your
computer by using `fontspec` as shown above.

[The LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/) also shows fonts
with OpenType formats available, so you can use that as a resource for looking
up fonts, as well as the [CTAN page](https://www.ctan.org/topic/font) mentioned
earlier.

Having selected a font, input can now be typed directly in plain Unicode into a 
source document. Here is an example showing some Latin and Greek letters as 
well as some CJK ideographs:

```latex
% !TEX xelatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p 
  class="hint">When switching between languages it is usually important to also change things like hyphenation patterns and so on, and the <code>babel</code> and <code>polyglossia</code> packages both provide robust features to do this.</p>
