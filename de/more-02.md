---
layout: "lesson"
lang: "de"
title: "Mehr zu: Mit LaTeX arbeiten"
description: "Diese Lektion enthält mehr Details zu LaTeX und den TeX-Engines"
toc-anchor-text: "Mehr zu: Mit LaTeX arbeiten"
---

Für die meisten unserer Beispiele verwenden wir kein Programm namens `latex`,
sondern `pdflatex`. Das ist eines aus einer Gruppe von ähnlichen Programmen, die
von `latex` 'abstammen'. Wir haben uns für `pdflatex` entschieden, da es das
wahrscheinlich am weitesten verbreitete System ist und direkt PDFs erzeugt.

## Formate und Engines

Wie [bereits beschrieben](more-01) baut LaTeX auf dem System TeX auf. LaTeX ist
ein sogenanntes 'Format': eine Makrosammlung (Instruktionen und Befehle), die
TeX versteht. Wenn `pdflatex` ausgeführt wird, startet man _tatsächlich_ ein
Programm namens 'pdfTeX' mit dem Format 'LaTeX'. Programme wie pdfTeX, die
TeX-Befehle verstehen, nennen wir 'Engine'.

Heute werden hauptsächlich diese drei Engines genutzt:

- pdfTeX
- XeTeX
- LuaTeX

[XeTeX und LuaTeX](lesson-14) werden wir später abdecken: für den Augenblick
reicht es, wenn wir wissen, dass die beiden Engines die Systemschriften des
Betriebssystems verwenden können, was pdfTeX nicht kann.

Wer viel auf Japanisch schreibt, könnte über die Engines pTeX und upTeX
stolpern. Diese sind spezialisiert auf vertikalen Schriftsatz. Auch LuaTeX
unterstützt einige dieser Funktionen, dennoch ist momentan besonders upTeX die
verbreitetste Engine für Japanisch.
