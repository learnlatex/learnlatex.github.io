---
layout: "lesson"
lang: "ca"
title: "Més sobre: Utilitzar els tipus de document per canviar el disseny"
description: "En aquesta lliçó s'explica els tipus de document de LaTeX més especialitzats."
toc-anchor-text: "Més sobre: Utilitzar els tipus de document per canviar el disseny"
---

## Tipus de document específics per a revistes

Moltes revistes acadèmiques proporcionen tipus de document de LaTeX per enviar els articles. Típicament, aquests tipus serveixen per configurar el disseny de manera que sigui similar a la revista final, encara que això dependrà de la font utilitzada, etc. Si hi ha un tipus de document disponible, aquest normalment serà facilitat per l'editorial, que s'encarregarà de documentar i proporcionar informació de totes les seves característiques. Molts d'ells també estan disponibles a [CTAN](https://ctan.org) i en les distribucions TeX estàndard.

## Tipus de document per a presentacions

Un tema que necessita un tractament especial, és el de la creació de presentacions. El tipus de
document `slides` va ser desenvolupat per crear les 'clàssiques' dispositives per imprimir, i no té cap suport per a presentacions digitals. Per fer-ho s'han desenvolupat dos tipus de document, i ambdós són àmpliament utilitzats: `beamer` i `powershot`. Com que `beamer` és probablement el més comú, et mostrem un exemple de com utilizar-lo:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}
  \frametitle{Un primer marc}
  Some text
\end{frame}

\begin{frame}
  \frametitle{Un segon mard}
  Different text
  \begin{itemize}
    \item<1-> Primer element
    \item<2-> Segon element
  \end{itemize}
\end{frame}

\end{document}
```

Aquest exemple ensenya dues importants idees. Primer, `beamer` divideix el document en frames, cadascun dels quals pot fer més d'una diapositiva (pàgina). Segon, `beamer` afegeix al LaTex de base una sintaxi, que permet que diferents parts del text apareguin 'de forma progressiva'. Això és potent, però també més complicat del que podem ensenyar-te aquí: pots mirar l'[article d'aquest blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) per obtenir més informació.

## Un tipus de document per a les imatges

Hi ha ocasions en què necessitaràs crear una imatge (que pot contenir un text dens) amb LaTeX. Sovint, és l'únic contingut que desitges mostrar en la 'pàgina'. Fer-ho és molt senzill fent ús del tipus de document [`standalone`](https://ctan.org/pkg/standalone). Configura automàticament el tamany de la pàgina per tal d'emmarcar el contingut a imprimir.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
Un document senzill: això serà una caixa molt petita!
\end{document}
```
