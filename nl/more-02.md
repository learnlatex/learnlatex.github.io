---
layout: "lesson"
lang: "nl"
title: "Meer over: Werken met LaTeX"
description: "Deze les geeft meer details over wat LaTeX is en de engines waarmee het draait."
toc-anchor-text: "Meer over: Werken met LaTeX"
---

Voor de meeste van onze voorbeelden gebruiken we geen programma dat `latex` heet, maar in plaats daarvan een genaamd `pdflatex`.  
Dit is een van een reeks verwante programma’s, die allemaal ‘afstammelingen’ zijn van `latex`.  
We hebben gekozen voor `pdflatex` omdat dit waarschijnlijk het meest gebruikte systeem is en onmiddellijk PDF-bestanden genereert.

## Indelingen en engines

Zoals eerder [beschreven](more-01), is LaTeX gebouwd op een systeem dat TeX heet.  
We noemen LaTeX een ‘format’: een verzameling macro’s (instructies en commando’s) die TeX kan begrijpen.  
Wanneer je `pdflatex` uitvoert, start je _eigenlijk_ een programma genaamd ‘pdfTeX’ met een vooraf geladen ‘LaTeX-format’.  
We noemen pdfTeX meestal een _engine_: een programma dat TeX-instructies begrijpt.

Er zijn tegenwoordig drie veelgebruikte engines:

- pdfTeX  
- XeTeX  
- LuaTeX

We behandelen [XeTeX en LuaTeX later](lesson-14).  
Het belangrijkste dat je nu moet weten, is dat deze in staat zijn om lettertypen van het besturingssysteem te laden, terwijl pdfTeX dat niet kan.

Als je in Japan bent, of veel Japans schrijft, kan je ook pTeX en upTeX tegenkomen.  
Dit zijn gespecialiseerde engines om verticaal te zetten.  
LuaTeX kan dit ook in veel gevallen, maar op dit moment is upTeX nog steeds het populairste systeem voor Japans.
