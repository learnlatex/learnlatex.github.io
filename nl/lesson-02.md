---
layout: "lesson"
lang: "nl"
title: "Werken met LaTeX"
description: "Deze les legt uit wat een TeX-systeem is en welke de meest gangbare zijn. Er wordt een overzicht gegeven van tekstbewerkers die vaak met LaTeX gebruikt worden, en van online systemen met geïntegreerde LaTeX-bewerkers."
toc-anchor-text: "Werken met LaTeX"
toc-description: "TeX-systemen en LaTeX-tekstbewerkers."
---

# Werken met LaTeX

<span
  class="summary">Deze les legt uit wat een TeX-systeem is en welke het meest gangbaar zijn. Er wordt een overzicht gegeven van tekstbewerkers die vaak voor LaTeX gebruikt worden, en van online systemen met geïntegreerde LaTeX-bewerkers.</span>

In tegenstelling tot veel computerprogramma's is LaTeX niet slechts een enkele toepassing die ‘alles in één’ bevat. 
In plaats daarvan zijn er verscheidene programma's die samenwerken.
Twee zaken die je echt nodig hebt:

- Een _TeX-systeem_
- Een tekstbewerker (vaak specifiek voor LaTeX)

## LaTeX-systemen

Om te werken met LaTeX is het cruciaal te beschikken over een TeX-systeem. 
Dit is een verzameling van achtergrondprogramma’s en bestanden die nodig zijn om LaTeX te laten werken, maar meestal gebruik je deze niet rechtstreeks.

Er zijn tegenwoordig twee grote TeX-systemen beschikbaar:
[MiKTeX](https://miktex.org/) en [TeX Live](https://tug.org/texlive). 
Beide zijn beschikbaar voor Windows, macOS en Linux.
MiKTeX heeft een sterke achtergrond op Windows;
op macOS wordt TeX Live gebundeld in een grotere verzameling, namelijk [MacTeX](http://www.tug.org/mactex/).
Er zijn [voordelen bij elk systeem](https://tex.stackexchange.com/questions/20036), en je kan ook [extra advies van het LaTeX-project](https://www.latex-project.org/get/) bekijken.

Aangezien TeX Live beschikbaar is op alle gangbare platformen en enkele prestatievoordelen biedt, raden we aan om TeX Live te kiezen als je niet zeker weet welk systeem je moet installeren.

## Tekstbewerkers

LaTeX-bestanden zijn gewone tekstbestanden, dus je kan ze met elke tekstbewerker bewerken.
Toch is het handiger om een tekstbewerker te gebruiken die speciaal voor LaTeX is ontworpen. 
Deze bieden functies zoals éénklik-compilatie van je bestanden, ingebouwde PDF-viewers en syntaxisaccentuering. 
Een erg handige functie in moderne LaTeX-bewerkers is SyncTeX: de mogelijkheid om op je broncode te klikken en direct naar de bijbehorende plek in de PDF te springen, of andersom.

Er zijn veel meer LaTeX-bewerkers dan we hier kunnen opsommen: 
er is een [uitgebreide lijst op StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Een basistekstbewerker, [TeXworks](https://tug.org/texworks), is inbegrepen in TeX Live en MiKTeX op Windows en Linux, en [TeXShop](https://pages.uoregon.edu/koch/texshop/) is inbegrepen in MacTeX.

<p 
  class="hint">Welke tekstbewerker je ook kiest, we raden aan om deze <i>na</i> je TeX-systeem te installeren, zodat hij het TeX-systeem kan 'vinden' en zich correct kan instellen.</p>

## Online werken

Er zijn verschillende krachtige online platformen waarmee je het installeren van een TeX-systeem en LaTeX-bewerker helemaal kan vermijden. 
Op deze websites kan je je bestanden bewerken in de browser, waarna LaTeX op de achtergrond wordt uitgevoerd en de gegenereerde PDF wordt weergegeven.

Sommige van deze sites combineren LaTeX met functies die lijken op die van een tekstverwerker, terwijl andere zich juist richten op het tonen van de LaTeX-code en daarmee meer lijken op een lokale installatie.

Er zijn systemen die je LaTeX laten draaien zonder dat je hoeft in te loggen, en wij gebruiken er daar één van, [TeXLive.net](https://texlive.net).
Dit laat je toe te om de voorbeelden die we geven te bewerken en te testen. 
Voor uitgebreidere documenten vereisen de beste online systemen meestal dat je je registreert voordat je ze gebruikt. 
Daardoor kan je je werk opslaan, maar dit helpt ook overbelasting van de websites te voorkomen. 
We hebben links toegevoegd waarmee je onze voorbeelden kan bewerken via [Overleaf](https://www.overleaf.com), een van de grootste online LaTeX-platformen. 
Er zijn natuurlijk ook andere: [Papeeria](https://papeeria.com/) is een voorbeeld.

## Samenwerken met anderen

Als je van plan bent je LaTeX-bestanden te versturen naar partijen die ze verwerken, zoals uitgevers, conferentieverantwoordelijken of preprintservers
(zoals arXiv), controleer dan welke eisen ze stellen of welke beperkingen ze opleggen.

## Oefening

Zorg dat je een lokale LaTeX-installatie hebt geïnstalleerd _of_ een account hebt aangemaakt bij een online LaTeX-dienst. 
Als je lokaal werkt, dan moet je ook een tekstbewerkers kiezen: 
wij raden aan om te beginnen met TeXworks of TeXShop (zie hierboven), en daarna eventueel andere tekstbewerkers te proberen zodra je weet hoe _jij_ het liefst met LaTeX werkt.

Je kan [al onze andere oefeningen gewoon in je browser uitvoeren](help.md), maar we willen je ook helpen om met echte documenten aan de slag te gaan, dus dit is een goed moment om jezelf daarop voor te bereiden.
