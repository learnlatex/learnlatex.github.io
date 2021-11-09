---
layout: "lesson"
lang: "lt"
title: "Daugiau apie nuorodas"
description: "Ši pamoka parodo, kaip aktyvuojasi nuorodos, kai pajungiamas paketas hyperref."
toc-anchor-text: "Daugiau apie nuorodas"
---

## Nuorodų aktyvavimas

Tekstines nuorodas į kitus dokumento elementus galite padaryti aktyviomis
(per kurias galima nušokti į nurodytą elementą) naudodami `hyperref` paketą.
Kad gerai veiktų, `hiperref` turėtų būti įkeliamas po visų kitų dokumentų
preambulėje nurodytų paketų.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introduction}
Some exciting text with a reference~\ref{sec:next}.

\section{Next thing}
\label{sec:next}

More text here.
\end{document}
```

Mes nusprendėme padaryti nuorodas tokios pačios spalvos kaip įprastas
tekstas; pabandykite pašalinti `hidelinks`, kad suprasti kodėl!
