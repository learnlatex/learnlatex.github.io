---
layout: "lesson"
lang: "ca"
title: "Més sobre: Estructurar documents llargs"
description: "Aquesta lliçó explica com fer un índex, i com utilitzar el paquet imakeidx per tal d'automatitzar aquest procés."
toc-anchor-text: "Més sobre: Estructurar documents llargs"
---

## Fer un índex

Depenent del tipus de document que estàs escrivint, voldràs incloure un índex. És una mica similar a fer una bibliografia, doncs utilitza fitxers auxiliars. Sortosament, el procés està totalment automatitzat amb el paquet `imakeidx`. Per implementar-lo a LaTeX necessitem tres instruccions:

- La comanda `\makeindex`, que possibilita la creació de l'índex
- La comanda `\index`, que posa una marca en les entrades de l'índex
- La comanda `\printindex`, que imprimeix l'índex

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Una mica de text sobre Foo\index{foo}.
More text\index{baz!bar}.
Encara més text\index{alpha@$\alpha$}.
Encara més text sobre una part diferent de baz\index{baz!wibble}.

\clearpage
Una mica de text sobre Foo\index{foo} altre cop, en una pàgina diferent.
Encara més text\index{beta@$\beta$}.
Encara més text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

Acabem de veure dues possibilitats d'indexació: la subdivisió utilitzant `!`, i la impressió d'un índex utilitzant `@`. Hi ha moltes possibilitats de personalització d'un índex; prova l'exemple i mira com funciona.
