---
layout: "lesson"
lang: "ca"
title: "Més sobre: Incloure i posicionar gràfics"
description: "Aquesta lliçó explica els detalls de quina manera hauríem d'anomenar i guardar les imatges per ser utilitzades a LaTeX, i com pots fer els teus propis gràfics dins de LaTeX."
toc-anchor-text: "Més sobre: Incloure i posicionar gràfics"
---

## Anomenar els fitxers de gràfics

LaTeX funciona en molts sistemes operatius, així que hem de donar importància al nom dels fitxers. El més fiable és anomenar les imatges de forma senzilla, particularment sense espais. Per exemple, si vols organitzar els teus fitxers i guardar totes les imatges en un subdirectori, alguna cosa com `\includegraphics[width=30pt]{pix/mom.png}` és correcte i compatible amb futures versions.

Els espais en els noms de fitxer sempre han estat problemàtics, però en general podem dir que està suportat. De totes maneres, si experimentes problemes, el primer que hauries de fer és eliminar els espais en blanc en el nom del fitxer.

El suport als accents en el nom del fitxer és variable; en alguns sistemes és problemàtic, particularment a Windows. El més fiable serà sempre utilitzar només caràcters ASCII.

## Guardar imatges i gràfics en un subdirectori

Un procediment habitual de preparar els fitxers font és posar tots els gràfics i imatges en un subdirectori. Aleshores pots incloure la ruta relativa, com hem fet més amunt; fixa't que el caràcter `/` s'utilitza per separar les parts d'una ruta, _fins i tot a Windows_.

Si tens molts gràfics, pots preparar el subdirectori amb anterioritat. Això es pot fer amb `\graphicspath`, que utilitza claus per a cada subdirectori. Per exemple, per incloure tant els subdirectoris `figs` com `pics`, farem:

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

Fixa't que els fem acabar amb una `/`.

## Generar gràfics

Com hem comentat, LaTeX utilitza gràfics de molts tipus, incloent gràfics generats per software científic. Quan ho facis, segurament voldràs guardar-los com a PDF, doncs aquest és un format escalable. Si vols crear un bitmap, procura que sigui d'alta resolució. Pots utilitzar alguna aplicació de gràfics que inclou 'macros' per a LaTeX com [Inkscape](https://inkscape.org/). Una alternativa que a més permet dibuixar amb 3 dimensions és [Asymptote](https://www.ctan.org/pkg/asymptote). Tots dos produeixen fitxers de sortida que es poden incloure en els teus documents.

També pots crear gràfics com ara dibuixos que estan especialment adaptats per a LaTeX, amb molt bona precisió, i també equacions i etiquetes que s'ajusten al document. Pots incloure gràfics directament dins del document, que és convenient tot i el cost de tenir documents més complexos que requereixen més recursos, utilitzant [Ti*k*Z](https://ctan.org/pkg/pgf). Una alternativa és [PSTricks](https://ctan.org/pkg/pstricks-base).

## Situar objectes flotants

A LaTeX, situar objectes flotants és complex. El cas més habitual és que en el document de sortida la imatge estigui situada en el mateix lloc on l'hem definit en el codi font. El paquet `float` ens ho farà bé.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % text de farciment
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Una imatge d'exemple}
\end{figure}
\lipsum[8-15]
\end{document}
```

Fixa't que l'opció `H` posa la imatge 'estrictament aquí, `Here`'. De totes maneres no es recomana utilitzar `H` perquè pot crear trossos llargs d'espais en blanc en el document.

## Altres tipus d'objectes flotants

Veurem [aviat](lesson-08) que podem posar taules en objectes flotants; aniran a l'interior d'un entorn `table`. Tanmateix, no hem de posar els gràfics en l'entorn `figure` o taules en l'entorn `table`; això tan sols és un conveni.

Pots tenir altres tipus d'entorn d'objectes flotants; cada tipus s'insereix independentment. Pots fer-ho utilitzant el paquet [`trivfloat`](https://ctan.org/pkg/trivfloat). Això proporciona una comanda, `\trivfloat`, que permet altres tipus d'objectes flotants.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % text de farciment
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Una imatge d'exemple}
\end{image}
\end{document}
```
