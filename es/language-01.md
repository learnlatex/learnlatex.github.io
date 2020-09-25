---
title: "Especificaciones de idioma en español"
next: "extra-01"
---

## Adaptaciones básicas para escribir un texto en español

LaTeX fue diseñado inicialmente para su uso en inglés. Por ello será
necesario añadir algunos cambios para que LaTeX tenga en cuenta el uso del
español en la composición tipográfica (separación silábica, espacios necesarios después de ciertos
símbolos) y en la estructura del documento (por ejemplo utilizar el término "Capítulo"
en lugar de "Chapter" al utilizar el comando `\chapter`; o el término "Índice" en lugar
de "Table of contents" al utilizar el comando `\tableofcontents`).
Todo ello puede, solucionarse fácilmente utilizando el paquete babel:


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[spanish]{babel}
\begin{document}
Some text
\end{document}
```

Puede igualmente utilizarlo de la forma siguiente:

```latex
\documentclass[spanish]{article}
\usepackage[T1]{fontenc}
\usepackage{babel}
\begin{document}
Some text
\end{document}
```

De esta forma la opción de idioma español se aplicará no sólo al paquete `babel`,
sino también al conjunto de paquetes que haya cargado y que pueden disponer
de un opción específica para el idioma español. 

