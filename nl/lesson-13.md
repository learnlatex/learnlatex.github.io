---
layout: "lesson"
lang: "nl"
title: "Langere documenten structureren"
description: "Deze les laat zien hoe LaTeX je in staat stelt om je bronbestanden op te splitsen in kleinere, beter beheersbare bestanden, en hoe dit het bouwen van een lang document eenvoudiger en sneller maakt."
toc-anchor-text: "Structureren van bronnen"
toc-description: "Bronnen gecontroleerd opdelen."
---

# Langere documenten structureren

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span class="summary">Deze les laat zien hoe LaTeX je in staat stelt om je bronbestanden op te splitsen in kleinere, beter beheersbare bestanden, en hoe dit het bouwen van een lang document eenvoudiger en sneller maakt.</span>

Wanneer je een langer document schrijft, wil je waarschijnlijk de broncode opdelen in meerdere bestanden.
Het is bijvoorbeeld heel gebruikelijk om één 'hoofdbestand' te hebben, en dan één bronbestand per hoofdstuk (voor een boek of proefschrift), of per belangrijk onderdeel (voor een lang artikel).

## Structureren van je bronbestanden

LaTeX stelt je in staat om bronnen op een gecontroleerde manier op te splitsen.
Er zijn twee belangrijke commando’s: `\input` en `\include`.
Met `\input` kan je een bestand invoegen alsof het op die plaats getypt is en het kan dus voor vrijwel alles worden gebruikt.
Het `\include`-commando is enkel bedoeld voor hoofdstukken: het begint op een nieuwe pagina en maakt interne aanpassingen.
Het heeft echter een groot voordeel: je kan selectief kiezen welke hoofdstukken je wil invoegen, zodat je aan een deel van je document kan werken in plaats van aan het geheel.

Een langer document zou er dus ongeveer als volgt uit kunnen zien:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{Een Voorbeeldboek}
\author{Jan Jansens \and Lies Liesens}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Maak eerst een volledig document om alle
% hulppagina's te genereren
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

We bekijken de verschillende aspecten van dit bestand hieronder.
(De bijbehorende ondersteunende bestanden staan aan het einde van deze pagina.)

## Het gebruik van `\input`

Het `\input`-commando is handig voor delen van een lang bestand die _geen_ aparte hoofdstukken zijn.
In het voorbeeld hebben we het gebruikt voor de voor- en achterkaft, zodat het hoofddocument kort en overzichtelijk blijft.
Ook kunnen we de kaftbestanden hergebruiken in een ander document.
We hebben het ook gebruikt voor de secties aan het begin van het boek die geen hoofdstuk zijn: zaken zoals het voorwoord.
Opnieuw helpt dit om het hoofddocument overzichtelijk te houden.

## Het gebruik van `\include` en `\includeonly`

Het `\include`-commando is ideaal voor hoofdstukken, dus we hebben het gebruikt voor elk volledig hoofdstuk;
het begint altijd op een nieuwe pagina.
We hebben met `\includeonly` geselecteerd welke hoofdstukken daadwerkelijk worden gezet.
Zoals je kan zien, gebruikt `\includeonly` een lijst van bestandsnamen, gescheiden door komma’s.
Door `\includeonly` te gebruiken, kan je het zetproces versnellen en een 'selectieve' PDF maken om te proeflezen.
Het belangrijkste voordeel is dat LaTeX wel alle kruisverwijzingen gebruikt uit de `.aux`-bestanden van andere hoofdstukken.

## Een inhoudsopgave maken

Het `\tableofcontents`-commando gebruikt de informatie uit de sectiecommando’s om de inhoudsopgave op te bouwen.
Hiervoor wordt een apart hulpbestand met de extensie `.toc` gebruikt, dus je moet LaTeX mogelijk twee keer draaien om alles correct weer te geven.
De inhoudsopgave wordt automatisch gegenereerd op basis van de sectietitels.
Er zijn soortgelijke commando’s voor `\listoffigures` en `\listoftables`, die werken met de onderschriften van afbeeldingen en tabellen en gebruiken de bestanden `.lof` en `.lot`.

## Het document opdelen

De commando’s `\frontmatter`, `\mainmatter` en `\backmatter` beïnvloeden de opmaak.
Zo schakelt `\frontmatter` over op Romeinse paginanummers.
Het commando `\appendix` verandert de nummering naar `A`, `B`, enz., dus bijvoorbeeld in het eerste hoofdstuk na `\appendix` zal de kop `Appendix A` luiden.

## Oefeningen

Experimenteer met de basisstructuur van het voorbeelddocument.
Probeer hoofdstukken toe te voegen en te verwijderen via `\includeonly` en kijk wat er gebeurt.

Voeg enkele floats toe en genereer een lijst van figuren en tabellen.
Als je een lokale LaTeX-installatie gebruikt, kan je dan zien hoe vaak LaTeX moet worden uitgevoerd?
(Online systemen draaien LaTeX "achter de schermen" opnieuw, waardoor dat minder opvalt.)

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```
<!-- {% endraw %} -->

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Voorwoord}
De tekst van het voorwoord. Zie \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Inleiding}
De tekst van het eerste hoofdstuk.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Iets Anders}
De tekst van het tweede hoofdstuk.
```
<!-- {% endraw %} -->

#### append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendix}
De tekst van de eerste appendix.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
De voorkaft
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
Voor \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
De achterkaft
\end{center}
```
<!-- {% endraw %} -->

----
