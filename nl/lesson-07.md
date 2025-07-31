---
layout: "lesson"
lang: "nl"
title: "Afbeeldingen invoegen en schikken"
description: "Deze les laat zien hoe je externe afbeeldingsbestanden kan invoegen in je document, hoe je hun uitzicht kan aanpassen, en hoe je ze automatisch naar de juiste plek in de PDF kan laten zweven."
toc-anchor-text: "Afbeeldingen gebruiken"
toc-description: "Uitzicht en positionering van afbeeldingen."
---

# Afbeeldingen invoegen en schikken

<span
  class="summary">Deze les laat zien hoe je externe afbeeldingsbestanden kan invoegen in je document, hoe je hun uitzicht kan aanpassen, en hoe je ze automatisch kan laten schikken of zweven.</span>

Om afbeeldingen van buiten LaTeX toe te voegen, gebruik je het `graphicx`-pakket dat het commando `\includegraphics` aan LaTeX toevoegt.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{graphicx}

\begin{document}
Deze afbeelding
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
is een geïmporteerde PDF.
\end{document}
```

Je kan EPS-, PNG-, JPG- en PDF-bestanden invoegen.
Als je meerdere versies van een afbeelding hebt, kan je bijvoorbeeld schrijven: `example-image.png`.
(Het `graphicx`-pakket probeert de extensie te raden als je er geen opgeeft.)

Je merkt dat we hier een nieuwe omgeving gebruiken, `center`, om de afbeelding horizontaal in het midden van de pagina te plaatsen. [Later](lesson-11) bespreken we meer over witruimte en positionering.

## Het uitzicht van afbeeldingen aanpassen

Het commando `\includegraphics` heeft veel opties om de grootte en vorm van de ingevoegde afbeelding aan te passen en bij te snijden.
Sommige hiervan worden vaak gebruikt en zijn daarom handig om te kennen.

Het meest voor de hand liggend is het instellen van de breedte (`width`) of de hoogte (`height`) van een afbeelding, vaak relatief ten opzichte van `\textwidth`, `\linewidth` of `\textheight`.
Het verschil tussen `\textwidth` en `\linewidth` is subtiel en het levert vaak hetzelfde resultaat op.
`\textwidth` is de breedte van het tekstblok op de fysieke pagina, terwijl `\linewidth` de _huidige_ breedte is, die lokaal anders kan zijn (het verschil is het duidelijkst bij de klasse-optie `twocolumn`).
LaTeX herschaalt de afbeelding automatisch zodat de beeldverhouding behouden blijft.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Wat tekst
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

Je kan afbeeldingen ook herschalen (`scale`), of roteren over een bepaalde hoek (`angle`).
Een andere optie is om een afbeelding bij te snijden (`clip` of `trim`).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Afbeeldingen laten zweven

Traditioneel in zetwerk, vooral bij technische documenten, kunnen afbeeldingen op een andere plek in het document terechtkomen.
Dit wordt een *float* genoemd.
Afbeeldingen worden normaal als floats ingevoegd zodat ze geen grote gaten op de pagina achterlaten.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{graphicx}
\usepackage{lipsum}  % genereert opvultekst

\begin{document}
\lipsum[1-4] % Een paar paragrafen als opvulling

Testlocatie.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Een voorbeeldafbeelding}
\end{figure}

\lipsum[6-10] % Een paar paragrafen als opvulling
\end{document}
```

Hier verplaatst LaTeX de afbeelding en het bijschrift weg van de tekst bij `Testlocatie` naar de bovenkant van de tweede pagina, omdat er geen ruimte is onderaan de eerste pagina.
De `ht` beïnvloedt waar LaTeX de float mag plaatsen;
deze twee letters betekenen dat hij ofwel op de plek in de bron (naast `Testlocatie`) ofwel bovenaan een pagina mag komen.
Je kan tot vier positioneringsvoorkeuren gebruiken:

- `h` 'Hier' (indien mogelijk)
- `t` Bovenaan de pagina
- `b` Onderaan de pagina
- `p` Een aparte pagina alleen voor floats

[Later](lesson-09) zullen we zien hoe je naar floats kan verwijzen vanuit je tekst.

Je zal waarschijnlijk merken dat we de afbeelding hier centreren met `\centering` in plaats van met de `center`-omgeving.
Binnen een float moet je `\centering` gebruiken als je inhoud horizontaal wil centreren;
dit voorkomt dat zowel de float als de `center`-omgeving extra verticale ruimte toevoegen.

## Oefeningen

Probeer een afbeelding in te voegen die je zelf hebt gemaakt, ter vervanging van de ‘standaard’-afbeeldingen die we in het voorbeeld gebruiken.

Verken wat je kan doen met de opties `height`, `width`, `angle` en `scale`.

Gebruik de `width`-optie om de grootte van een afbeelding relatief aan `\textwidth` in te stellen en een andere afbeelding relatief aan `\linewidth`.
Experimenteer met hoe ze zich gedragen met of zonder de `twocolumn`-optie.

Gebruik `lipsum` om een redelijk lang voorbeeld te maken, en probeer vervolgens floats te plaatsen met verschillende positioneringsvoorkeuren.
Hoe werken verschillende voorkeuren samen?
