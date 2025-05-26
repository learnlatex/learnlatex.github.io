---
layout: "lesson"
lang: "nl"
title: "Opmaak: lettertypen en afstand"
description: "Deze les laat zien hoe je de spatiëringselementen in een document wijzigt en expliciete opmaakinstructies aan de LaTeX-broncode toevoegt."
toc-anchor-text: "Lettertypen & afstand"
toc-description: "Tekstopmaak voor visuele presentatie."
---

# Opmaak: lettertypen en afstand

<span class="summary">Deze les laat zien hoe je de spatiëringselementen in een document wijzigt en expliciete opmaakinstructies aan de LaTeX-broncode toevoegt.</span>

We hebben al gezien dat een lege regel in je invoer in LaTeX een nieuwe alinea genereert. Dit resulteert in een alinea die begint met een inspringing.

## Alinea-afstand

Een veelgebruikte stijl is om géén inspringing te gebruiken bij nieuwe alinea’s, maar in plaats daarvan een witregel tussen alinea’s te plaatsen.
Dit kan met het `parskip`-pakket.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Alleen voor opvultekst
\begin{document}
\lipsum
\end{document}
```

## Een nieuwe regel forceren

Meestal moet je geen nieuwe regel forceren in LaTeX: je wil vrijwel altijd een nieuwe alinea of gebruik maken van `parskip`, zoals we net zagen, om een witregel tussen alinea’s te krijgen.

Er zijn _enkele_ situaties waarin je `\\` gebruikt om een nieuwe regel te starten zonder een nieuwe alinea te beginnen:

- Aan het einde van rijen in een tabel
- Binnen de `center`-omgeving
- In poëzie (de `verse`-omgeving)

Bijna altijd geldt: als je niet in een van die specifieke gevallen zit, gebruik dan _geen_ `\\`.

## Expliciet witruimte toevoegen

We kunnen een smalle spatie invoegen (ongeveer de helft van een normale spatie) met `\,`.
In wiskundemodus zijn er ook andere commando’s: `\.`, `\:` en `\;`, plus een negatieve spatie: `\!`.

Heel af en toe, bijvoorbeeld bij het maken van een titelpagina, wil je expliciete horizontale of verticale ruimte toevoegen.
Daarvoor gebruiken we `\hspace` en `\vspace`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Wat tekst \hspace{1cm} nog meer tekst.

\vspace{10cm}

Nog meer tekst.
\end{document}
```

## Expliciete tekstopmaak

We schreven [in les 3](lesson-03) dat je logische structuur zou moeten verkiezen. 
Maar soms wil je tekst vet maken, cursief zetten of monospaced maken, enzovoort. 
Er zijn hiervoor twee soorten commando’s: voor korte stukken tekst en voor ‘doorlopende’ tekst.

Voor korte stukjes tekst gebruiken we `\textbf`, `\textit`, `\textrm`, `\textsf`, `\texttt` en `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Laten we wat plezier hebben met lettertypen:
\textbf{vet}, \textit{cursief}, \textrm{romeins}, \textsf{schreefloos}, \texttt{monospace} en \textsc{kleine hoofdletters}.
\end{document}
```

Voor doorlopende tekst gebruiken we commando’s die de lettertype-instelling wijzigen, zoals bijvoorbeeld `\bfseries` en `\itshape`. 
Omdat deze niet vanzelf ‘stoppen’, moeten we ze in een _groep_ plaatsen als we willen voorkomen dat ze op het hele document van toepassing zijn. 
LaTeX-omgevingen zijn groepen, net als tabelcellen, of je kan `{...}` gebruiken om expliciet een groep te maken.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Normale tekst.

{\itshape

Deze tekst is cursief.

Dit ook: het effect is niet beperkt tot één alinea.

}
\end{document}
```

We kunnen de lettergrootte op soortgelijke wijze instellen;
deze commando’s werken doorlopend.
De groottes die we instellen zijn relatief: `\huge`, `\large`, `\normalsize`, `\small` en `\footnotesize` komen vaak voor.
Het is belangrijk om een alinea af te sluiten vóórdat je de lettergrootte weer verandert;
let op het gebruik van `\par` (alinea-einde) hieronder.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Normale tekst.

\begin{center}
{\itshape\large Wat tekst\par}
Normale tekst
{\bfseries\small Veel kleinere tekst\par}
\end{center}

\end{document}
```

## Oefeningen

Experimenteer met handmatige opmaak: maak een `titlepage`-omgeving aan en probeer verschillende spaties en lettertypewijzigingen in te voegen.
Wat gebeurt er als we lettertypeveranderingen combineren?
Hoe verhoudt dit zich tot de wiskundemodus?

Wat gebeurt er als je de lettergrootte van een grote alinea wijzigt (probeer met `\tiny` en daarna met `\huge`), maar geen afsluitende `\par` gebruikt voordat je de groep afsluit?
