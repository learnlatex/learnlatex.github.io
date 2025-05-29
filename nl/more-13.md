---
layout: "lesson"
lang: "nl"
title: "Meer over: Langere documenten structureren" 
description: "Deze les laat zien hoe je een index maakt en hoe je het imakeidx-pakket gebruikt om het proces te automatiseren."
toc-anchor-text: "Meer over: Langere documenten structureren"
---

## Een index maken

Afhankelijk van het type document dat je schrijft, wil je misschien een index toevoegen.
Dit lijkt een beetje op het maken van een bibliografie, omdat het gebruikmaakt van hulpbestanden.
Gelukkig wordt dit allemaal geautomatiseerd door het `imakeidx`-pakket.
We hebben drie instructies nodig voor LaTeX:

- Het `\makeindex`-commando, waarmee het maken van een index mogelijk wordt
- Het `\index`-commando, waarmee indexvermeldingen worden gemarkeerd
- Het `\printindex`-commando, dat de index afdrukt

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{imakeidx}
\makeindex
\begin{document}
Wat tekst over Foo\index{foo}.
Meer tekst\index{baz!bar}.
Nog meer tekst\index{alpha@$\alpha$}.
Meer tekst over een ander deel van baz\index{baz!wibble}.

\clearpage
Opnieuw wat tekst over Foo\index{foo}, nu op een andere pagina.
Nog meer tekst\index{beta@$\beta$}.
Nog meer tekst\index{gamma@$\gamma$}.
\printindex
\end{document}
```

We hebben hier twee mogelijkheden van indices laten zien: onderverdelingen met behulp van `!`, en het afdrukken van iets anders dan de 'sorteertekst' van een indexvermelding met `@`.
Je kan een index helemaal naar je eigen smaak aanpassen;
probeer het voorbeeld uit en kijk hoe het werkt.
