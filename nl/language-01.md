---
layout: "lesson"
lang: "nl"
title: "LaTeX in het Nederlands"
description: "Deze les gaat dieper in op de bijzonderheden waarop je moet letten wanneer je Nederlandstalige teksten zet met LaTeX."
next: "extra-01"
toc-anchor-text: "Taalinstellingen voor het Nederlands"
toc-description: "Tekstopmaak met LaTeX in het Nederlands."
---

# Taalinstellingen voor het Nederlands

<span
  class="summary">Deze les gaat dieper in op de bijzonderheden waarop je moet letten wanneer je Nederlandstalige teksten zet met LaTeX.</span>

LaTeX werd oorspronkelijk geschreven voor gebruik in het (Amerikaans) Engels.
Om naar het Nederlands over te schakelen, kan het `babel`-pakket worden gebruikt.
Dit zal zorgen voor correcte woordafbrekingen en vertaalt ook automatisch verschillende tekstonderdelen, zoals "Contents" naar "Inhoudsopgave".

Voor het splitsen van woorden met accenten is het bij `pdflatex` noodzakelijk `fontenc` met de `T1`-optie te laden.
Ook zal dit ervoor zorgen dat je letters met accenten correct uit de PDF kan kopiëren.
Bij `xelatex` en `lualatex` hoef je dit pakket _niet_ te laden.

Je kan de taaloptie ook globaal instellen zoals hieronder gedaan wordt.

```latex
\documentclass[dutch]{article}
\usepackage[T1]{fontenc}
\usepackage{babel}
\begin{document}

\tableofcontents
	
\section{Voorbeeldsectie}
Hierna volgt een relatief lang Nederlands woord: de 
lagekostenluchtvaartmaatschappij. Deze zin dient enkel 
om de paragraaf nog wat op te vullen om de marges
duidelijk naar voren te laten komen. Hier staan wat 
woorden met accenten: überhaupt, café en Curaçao. Ten 
slotte nog enkele tekens: < > |.
\end{document}
```

## Oefeningen

Verwijder in het voorbeeld hierboven het `babel`-pakket en zoek de verschillen.

Kopieer woorden met accenten uit de PDF en plak deze vervolgens in de tekstbewerker.
Verwijder het `fontenc`-pakket en herhaal je knip-en-plakwerk.
Zie je een verschil?
Let ook goed op de laatste tekens in de tekst!
