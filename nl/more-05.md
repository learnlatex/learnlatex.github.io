---
layout: "lesson"
lang: "nl"
title: "Meer over: Documentklassen gebruiken om het uitzicht te beïnvloeden"
description: "Deze les geeft informatie over meer gespecialiseerde documentklassen voor LaTeX."
toc-anchor-text: "Meer over: Documentklassen gebruiken om het uitzicht te beïnvloeden"
---

## Tijdschrift-specifieke klassen

Veel academische tijdschriften bieden LaTeX-klassen aan voor inzendingen.
Deze stellen doorgaans de lay-out in om te lijken op die van het uiteindelijke tijdschrift, hoewel dat ook afhangt van het gebruik van lettertypes, enzovoort.
Als er een klasse beschikbaar is, wordt deze meestal rechtstreeks geleverd door de redactie die daarbij de nodige uitleg hoort te geven over de beschikbare functies.
Veel van deze klassen zijn ook beschikbaar op [CTAN](https://ctan.org) en in standaard TeX-distributies.

## Klassen voor presentaties

Een niche die speciale behandeling vereist, is het maken van presentaties.
De `slides`-klasse werd geschreven voor het maken van ‘klassieke’ gedrukte dia’s en biedt geen speciale ondersteuning voor geprojecteerde presentaties.
Twee klassen zijn hier wel voor ontwikkeld en worden veel gebruikt: `beamer` en `powerdot`.
Aangezien `beamer` waarschijnlijk de meest gebruikte is, geven we hier een voorbeeld van hoe die werkt:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}

\begin{frame}
  \frametitle{Een eerste `frame}
  Wat tekst
\end{frame}

\begin{frame}
  \frametitle{Een tweede frame}
  Andere tekst
  \begin{itemize}
    \item<1-> Eerste item
    \item<2-> Tweede item
  \end{itemize}
\end{frame}

\end{document}
```

Dit laat twee belangrijke ideeën zien.
Ten eerste deelt `beamer` een document op in frames, waarvan elk meer dan één dia kan vormen.
Ten tweede voegt `beamer` extra functionaliteit toe aan de normale LaTeX-syntaxis om delen van de broncode ‘stapsgewijs’ te laten verschijnen.
Dit is krachtig maar complexer dan we hier kunnen behandelen:
lees [dit blogartikel](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) voor meer informatie.

## Een klasse voor afbeeldingen

Soms wil je een afbeelding maken met behulp van LaTeX (en die mogelijk veel tekst bevat).
Vaak wil je niets anders dan de inhoud zelf op de 'pagina'.
Dat kan je het makkelijkst doen met de [`standalone`](https://ctan.org/pkg/standalone)-klasse.
Deze stelt automatisch het formaat van de pagina in om enkel de inhoud te omvatten.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Een eenvoudig document: dit zal een zeer klein vakje zijn!
\end{document}
```
