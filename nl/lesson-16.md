---
layout: "lesson"
lang: "nl"
title: "Documentatie raadplegen en hulp krijgen"
description: "Deze les toont de belangrijkste bronnen van documentatie voor LaTeX-gerelateerde software en pakketten, en hoe je hulp kan zoeken als je vastloopt."
toc-anchor-text: "Hulp & documentatie"
toc-description: "Hulp en documentatie raadplegen."
---

# Documentatie raadplegen en hulp krijgen

<span class="summary">Deze les toont de belangrijkste bronnen van documentatie voor LaTeX-gerelateerde software en pakketten, en hoe je hulp kan zoeken als je vastloopt.</span>

Er zijn verschillende manieren om de documentatie van een pakket of klasse te raadplegen.

## `texdoc`

Als je een TeX-distributie hebt geïnstalleerd (_bijv._, TeX Live of MiKTeX) en daarbij ook de documentatie hebt geïnstalleerd, dan kan je de lokaal opgeslagen documentatie openen met het opdrachtregelprogramma `texdoc`. Door

`texdoc` < _pkt_ >

uit te voeren, open je de documentatie van het pakket `<pkt>`.
De tool zoekt naar beschikbare documentatie en opent wat volgens hem het beste overeenkomt met je zoekterm.
Je kan een lijst krijgen van alle mogelijke resultaten en er één uitkiezen met:

`texdoc -l` < _pkt_ >

## texdoc.org

Dit is een [website](https://texdoc.org/) die gelijkaardig werkt als het hulpprogramma `texdoc`.
Je kan zoeken naar beschikbare documentatie net zoals je zou doen met `texdoc -l` en dan kiezen uit de resultaten.

## CTAN

[CTAN](https://www.ctan.org) is het Comprehensive TeX Archive Network.
De meeste LaTeX-pakketten worden daar gepubliceerd.
Je kan op de site zoeken naar een pakket om de documentatie te bekijken.
Meestal zijn de pakketten te vinden op `ctan.org/pkg/<pakket-naam>` en kan je daar de README en documentatie van het pakket openen.

## Boeken over LaTeX

Er zijn meerdere boeken beschikbaar die je kunnen helpen om meer over LaTeX te leren.
Als beginner kan je veel baat hebben bij een gestructureerde beginnersgids, omdat die vaak veel meer detail biedt dan wat we hier behandelen.
Je wil misschien ook toegang hebben tot een referentie met meer uitleg en aanbevelingen.

Het LaTeX-team heeft [een lijst met boeken](https://www.latex-project.org/help/books/), grotendeels geschreven door leden.
De bekendste zijn [Lamports officiële gids](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838) en de uitgebreide [LaTeX Companion 3e editie](https://www.informit.com/store/latex-companion-parts-i-ii-3rd-edition-9780138166489).

Andere boeken gericht op het leren van LaTeX zijn:

- [_Guide to LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) door Helmut Kopka en Patrick Daly: beschikbaar als e-boek
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) door Nicola Talbot: gratis e-boek of goedkope papieren versie
- [_Using LaTeX to write a PhD thesis_](https://www.dickimaw-books.com/latex/thesis/) door Nicola Talbot: gratis e-boek of goedkope papieren versie
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide) door Stefan Kottwitz: beschikbaar als e-boek en ook gedrukt
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) door Marc van Dongen: beschikbaar als e-boek en ook gedrukt

## Hulp krijgen

Er zijn diverse online fora voor het stellen van LaTeX-vragen;
het meest populair is tegenwoordig [TeX - LaTeX StackExchange](https://tex.stackexchange.com).
Wanneer je een vraag stelt, is het het beste om eerst een duidelijk voorbeeld te maken: een zogeheten 'minimal working example' (MWE).
Dit betekent niet dat de code werkt (je stelt immers een vraag!), maar wel dat je je best hebt gedaan om het voorbeeld duidelijk, op zichzelf staand en zo klein mogelijk te maken.
Dat laatste betekent: alleen genoeg inhoud om het probleem te tonen.

### Hoe maak je een minimal working example (MWE)

Hoe maak je een MWE?
Meestal is het het makkelijkst om te beginnen met

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text
\end{document}
```

en regel voor regel toe te voegen tot je het probleem kan laten zien.
Je kan ook proberen je echte bestand 'in te korten', maar dat kan veel tijd kosten.

<p 
  class="hint">Als je meer tekst nodig hebt om bijvoorbeeld pagina-afbrekingen te tonen, dan kan je het pakket <code>lipsum</code> gebruiken om nep-paragrafen te genereren en zo je testbestand toch klein te houden.</p>

### Logbestand

Eén ding dat je zeker nodig hebt, is je logbestand;
dit wordt elke keer aangemaakt door LaTeX wanneer je het uitvoert, en heeft dezelfde naam als je invoerbestand maar eindigt op `.log`.

<p class="hint">
  Afhankelijk van je bureaubladinterface moet je mogelijk 'bestandsnaamextensies tonen' inschakelen om het juiste bestand te vinden.</p>

In het logbestand kan je altijd de volledige foutmeldingen terugvinden.
De foutmeldingen van LaTeX proberen behulpzaam te zijn, maar ze zijn niet zoals je gewend bent van tekstverwerkers.

<p class="hint">
  Sommige tekstbewerkers maken het moeilijk om de volledige fouttekst te zien, wat belangrijke details kan verbergen.</p>

Als je een probleem hebt, zullen ervaren LaTeX-gebruikers vaak vragen om een kopie van je logbestand.

### Verder gaan

Tot slot bieden we een [galerij met kleine voorbeelden](./extra-01) die een reeks onderwerpen laten zien die niet in deze inleiding behandeld zijn, en LaTeX-pakketten die in die gebieden gebruikt worden.
