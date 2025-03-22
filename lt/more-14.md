---
layout: "lesson"
lang: "lt"
title: "Daugiau apie šriftus ir Unicode variklius"
description: "Ši pamoka parodo paprastą Lua panaudojimo pavyzdį tiems, kas nori panaudoti Lua programavimą savo dokumentuose"
toc-anchor-text: "Daugiau apie šriftus ir Unicode variklius"
---

## Lua

LuaTeX variklis suteikia galimybę naudoti OpenType šriftus panašiai kaip
XeTeX, ir daugumoje atvejų `fonspec` paketas vienodai gerai veikia su abiem
varikliais.

LuaTeX taip pat praplečia TeX kitais būdais, ypač įdėdamas Lua kalbos kodo
vykdymą.  Lua programavimu gali pasinaudoti žmonės, labiau įgudę naudoti
įprastas programavimo kalbas.  Tai taip pat įgalina pasiekti vidines TeX
sistemos duomenų struktūras ir jas modifikuoti Lua programomis, taip keičiant
ir TeX veikimą.

Šis kursas ne apie Lua programavimą, nors čia pateikiame paprastą 2π apskaičiavimo pavyzdį.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

