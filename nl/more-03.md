---
layout: "lesson"
lang: "nl"
title: "Meer over: Basisstructuur van een LaTeX-document"
description: "Deze les geeft meer details over het uitvoeren van LaTeX, en de speciale tekens die het gebruikt en hoe je die in de uitvoer-PDF invoegt."
toc-anchor-text: "Meer over: Basisstructuur van een LaTeX-document"
---

## LaTeX uitvoeren

Zoals [eerder uitgelegd](lesson-02) zijn LaTeX-documenten simpelweg tekstbestanden. 
Om dit te zien, kan je je eerste document openen in een eenvoudige tekstbewerker, op Windows bijvoorbeeld met Kladblok.
Je zou dezelfde tekst moeten zien als in een speciale LaTeX-bewerker, maar zonder dat sleutelwoorden gemarkeerd staan.

Je kan ook naar PDF converteren zonder je tekstbewerker;
dit betekent dat je de opdrachtprompt of terminal gebruikt, dus maak je geen zorgen als je daar niet vertrouwd mee bent.
Als je dat *wel* bent, kan je naar de map navigeren waarin je `.tex`-bronbestand zich bevindt en het volgende uitvoeren:

`pdflatex first`

of

`pdflatex first.tex`

om je PDF te zetten.
Merk op dat de extensie `.tex` optioneel is:
LaTeX gaat ervan uit dat bestanden eindigen op `.tex`, tenzij je iets anders specificeert.

## Speciale tekens

Als je een speciaal teken moet typen, kan je er meestal gewoon een backslash voor plaatsen. 
Bijvoorbeeld, `\{` wordt gebruikt om letterlijk `{` weer te geven. 
In een paar gevallen moet je een langer commando gebruiken:

| Teken | Kort commando <br><small>(wiskunde en tekst)</small> | Lang commando <br><small>(alleen voor tekst)</small> |
| --- | --- | --- |
| `{`    | `\{`          | `\textbraceleft`  |
| `}`    | `\}`          | `\textbraceright` |
| `$`    | `\$`          | `\textdollar`     |
| `%`    | `\%`          |                   |
| `&`    | `\&`          |                   |
| `#`    | `\#`          |                   |
| `_`    | `\_`          | `\textunderscore` |
| ``\``  |               | `\textbackslash`  |
| `^`    |               | `\textasciicircum`|
| `~`    |               | `\textasciitilde` |

Voor de laatste drie tekens zijn er geen korte commando's beschikbaar omdat `\\` al gebruikt wordt om een regeleinde aan te geven, en `\~` en `\^` worden gebruikt om diakritische tekens met een tilde of accent circonflexe te produceren wanneer je enkel ASCII-tekens gebruikt.
