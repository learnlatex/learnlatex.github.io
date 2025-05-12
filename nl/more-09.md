---
layout: "lesson"
lang: "nl"
title: "Meer over: Kruisverwijzingen"
description: "Deze les laat zien hoe je kruisverwijzingen kan omzetten in hyperlinks met het hyperref-pakket."
toc-anchor-text: "Meer over: Kruisverwijzingen"
---

## Kruisverwijzingen omzetten in links

Je kan je kruisverwijzingen omzetten in hyperlinks door het `hyperref`-pakket te laden.
In de meeste gevallen mag `hyperref` pas ná andere pakketten in de preambule van het document worden geladen.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Inleiding}
Wat spannende tekst met een verwijzing~\ref{sec:volgende}.

\section{Volgende onderdeel}
\label{sec:volgende}

Nog meer tekst hier.
\end{document}
```

We hebben ervoor gekozen om de links dezelfde kleur te geven als de normale tekst;
probeer `hidelinks` eens weg te laten om te zien waarom!
