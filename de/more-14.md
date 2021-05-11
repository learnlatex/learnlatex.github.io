---
layout: "lesson"
lang: "de"
title: "Mehr zu: Schriften auswählen und Unicodeprogramme verwenden"
description: "Diese Lektion zeigt ein einfaches Beispiel in Lua für Nutzer, die Luaprogrammierung in ihren Dokumenten verwenden wolle."
toc-anchor-text: "Mehr zu: Schriften auswählen und Unicodeprogramme verwenden"
---

## Lua

Die LuaTeX-Engine bietet die Möglichkeit, OpenType-Schriften ähnlich wie in
XeTeX zu verwenden, und die Nutzung von `fontspec` funktioniert in der Regel in
beiden Engines gleichgut.

LuaTeX erweitert TeX auch auf andere Weise, insbesondere durch die Skriptsprache
Lua. Dies kann für Programmieraufgaben genutzt werden, gerade für diejenigen,
die eher an "Mainstream"-Programmiersprachen gewohnt sind. Es bietet außerdem
die Möglichkeit, auf innere Abläufe von TeX zuzugreifen und das Verhalten durch
neuen Lua-Code zu beeinflussen.

Luaprogrammierung ist nicht Teil dieses Kurses, ein einfaches Beispiel zur
Berechnung von 2π wird hier dennoch gezeigt.

```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```
