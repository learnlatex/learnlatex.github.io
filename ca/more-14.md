---
layout: "lesson"
lang: "ca"
title: "Més sobre: Seleccionar fonts i utilitzar motors Unicode"
description: "Aquesta lliçó explica un exemple bàsic en Lua per a usuaris que volen escriure codi Lua en el seu document."
toc-anchor-text: "Més sobre: Seleccionar fonts i utilitzar motors Unicode"
---




## Lua

El motor LuaTeX proporciona l'accés a fonts OpenType de manera similar a XeTeX, i la major part dels usos del paquet `fontspec` funcionen igual de bé que en altres motors.

LuaTeX també amplia TeX en altres aspectes, principalment incloent el llenguatge de guions de Lua. Això es pot utilitzar per programar d'una manera similar a com ho fan els programadors en els llenguatges de programació principals. També ofereix la possibilitat d'accedir a les entranyes del sistema TeX i modificar el seu comportament tot substituint codi escrit en Lua.

La programació amb Lua no està prevista en aquest curs, però un petit exemple de com podem calcular 2π es mostra a continuació.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```
