---
layout: "lesson"
lang: "nl"
title: "Meer over: Opmaak: lettertypes en tussenruimtes"
description: "Deze les laat zien hoe je de inspringing van een alinea kan onderdrukken."
toc-anchor-text: "Meer over: Opmaak: lettertypes en tussenruimtes"
---

## Inspringing van een enkele alinea onderdrukken

Als je de inspringing van slechts één alinea wil onderdrukken, kan je `\noindent` gebruiken.  
Dit zou je _zeer_ zelden moeten doen; meestal kan je dit het best aan LaTeX overlaten.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Een korte alinea die we iets hebben uitgebreid 
zodat je het effect goed kan zien!

Een korte alinea die we iets hebben uitgebreid 
zodat je het effect goed kan zien!

\noindent Een korte alinea die we iets hebben uitgebreid
zodat je het effect goed kan zien!
\end{document}
```
