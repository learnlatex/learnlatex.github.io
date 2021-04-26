---
layout: "lesson"
lang: "ca"
title: "Més sobre: Treballar amb LaTeX"
description: "Aquesta lliçó explica amb més detall què és LaTeX i el motor sobre el que funciona."
toc-anchor-text: "Més sobre: Treballar amb LaTeX"
---

En la majoria dels nostres exemple, no utilitzem un programa anomenat `latex` sinó un altre anomenat `pdflatex`. Aquest només és un dels diferents programes relacionats, tots ells 'hereus' de `latex`. Hem escollit `pdflatex` perquè segurament és el sistema més utilitzat i ens proporciona fitxers PDF.

## Formats i motors

Com hem explicat [abans](more-01), LaTeX es construeix sobre un sistema anomenat TeX. Diem que LaTeX és un 'format': una col·lecció de macros (instruccions i comandes) que TeX entén. Quan executem `pdflatex`, de fet estem executant una aplicació anomenada 'pdfTeX' amb un 'format LaTeX' precarregat. Normalment direm que pdfTeX és un _motor_: un programa que entén les instruccions de TeX.

Avui dia hi ha tres motors disponibles:

- pdfTeX
- XeTeX
- LuaTeX

Parlarem sobre [XeTeX i LuaTeX més endavant](lesson-14): la principal cosa que hem de saber ara és que tenen la capacitat de carregar les fonts del sistema operatiu, mentre que pdfTeX no ho pot fer.

Si ets del Japó, o escrius en japonès, segurament t'hauràs trobat amb pTeX i upTeX. Aquests són motors específics per a la tipografia vertical. LuaTeX també pot fer-ho, però per ara upTeX, en particular, és el sistema més popular per al japonès.
