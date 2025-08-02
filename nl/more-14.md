---
layout: "lesson"
lang: "nl"
title: "Meer over: Lettertypen selecteren en Unicode-engines gebruiken"
description: "Deze les toont een basisvoorbeeld in Lua voor gebruikers die Lua-code in hun document willen schrijven."
toc-anchor-text: "Meer over: Lettertypen selecteren en Unicode-engines gebruiken"
---

## Lua

De LuaTeX-engine biedt toegang tot OpenType-lettertypen op een vergelijkbare manier als XeTeX, en de meeste toepassingen van het `fontspec`-pakket werken even goed met beide engines.

LuaTeX breidt TeX ook op andere manieren uit, met name door de Lua-scripttaal te integreren.
Deze kan worden gebruikt om te programmeren in een stijl die meer vertrouwd is voor mensen die gewend zijn aan doorsnee programmeertalen.
Het biedt ook de mogelijkheid om toegang te krijgen tot de interne werking van het TeX-systeem en het gedrag aan te passen door nieuwe code in Lua te schrijven.

Programmeren in Lua wordt niet behandeld in deze cursus, maar hier is een eenvoudig voorbeeld om 2π te berekenen.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```
