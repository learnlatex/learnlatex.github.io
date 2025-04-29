---
layout: "lesson"
lang: "ca"
title: "Incloure i posicionar imatges"
description: "Aquesta lliçó explica com pots incloure imatges externes en el teu document, com canviar la seva aparença, i com convertir-les en objectes flotants per tal d'optimitzar la seva ubicació en un pdf."
toc-anchor-text: "Utilitzar imatges"
toc-description: "Aparença i posicionament de les imatges."
---

# Incloure i posicionar imatges

<span
  class="summary">Aquesta lliçó explica com pots incloure imatges externes en el teu document, com canviar la seva aparença, i com convertir-les en objectes flotants per tal d'optimitzar la seva ubicació.</span>

Per importar gràfics i imatges a LaTeX hauràs d'utilitzar el paquet `graphicx`, que inclou la comanda `\includegraphics`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
Aquesta imatge
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
és un PDF importat.
\end{document}
```

Pots incloure fitxers EPS, PNG, JPG i PDF. Si tens més d'una extensió per a la imatge que vols incloure hauràs de posar l'extensió obligatòriament. Si només tens una versió del fitxer, per exemple `example-image.png`, no cal posar l'extensió, com en l'exemple que acabem de veure.

Hauràs vist que hem utilitzat una nova variable, `center`, per tal de posicionar la imatge centrada a la pàgina. [Més endavant](lesson-11), parlarem més sobre espaiat i posicionament.

## Alterar l'aparença d'una imatge

La comanda `\includegraphics` té múltiples opcions per controlar la mida i la forma de les imatges incloses, i fins i tot retallar-les. Algunes d'elles s'utilitzen molt, anem a veure-les.

El més obvi que podem fer sobre una imatge és definir l'`amplada` i l'`altura` d'una imatge, que moltes vegades es defineix en relació al `\textwidth` o `\linewidth` i `\textheight` de la zona de text. La diferència entre `\textwidth` i `\linewidth` és subtil i moltes vegades el resultat és el mateix. `\textwidth` és l'amplada del bloc de text en la pàgina fixa, mentre que `\linewidth` és l'amplada _actual_, que pot ser localment diferent (el cas més obvi és quan utilitzem l'opció de tipus `twocolumn`). LaTeX escala automàticament la imatge de manera que la raó d'aspecte sigui correcta.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Una mica de text
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

També pots `escalar` les imatges, o rotar-les un determinat `angle`, o bé seleccionar-ne només una part.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Fer les imatges flotants

En la composició tipogràfica tradicional, i en particular en els documents tècnics,
les imatges es poden moure d'un lloc a un altre del document. En diem un *objecte flotant*. Les imatges normalment s'inclouen com a objectes flotants per tal d'evitar els espais en blanc en la pagina.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % produeix un text de farciment automàtic

\begin{document}
\lipsum[1-4] % Uns pocs paràgrafs de farciment

Test de posicionament.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Una imatge d'exemple}
\end{figure}

\lipsum[6-10] % Uns pocs paràgrafs de farciment
\end{document}
```

En aquest exemple, LaTeX mou la imatge i la llegenda de la imatge, des de la `Localització
test` fins la part alta del segon paràgraf, ja que no hi ha prou espai per la imatge al final de la pàgina. L'opció `ht` té l'efecte de modificar en quin lloc es posiciona aquesta imatge flotant; aquestes dues lletres signifiquen que la imatge anirà a la posició on està previst (`Localització test`) o en la part alta de la pàgina. Podem utilitzar fins a quatre especificadors de posició:

- `h` 'Aquí' ('Here') (si és possible)
- `t` Al capdamunt ('Top') de la pàgina
- `b` Al final ('Bottom') de la pàgina
- `p` Una pàgina dedicada només per als objectes flotants

[Més endavant](lesson-09), veurem com podem fer referències creuades a aquests objectes flotants
de manera que puguem citar-los en el text.

Hauràs notat que hem centrat la imatge utilitzant la comanda `\centering` enlloc de l'entorn `center`. A l'interior d'un objecte flotant utilitzarem `\centering` si vols centrar horitzontalment el seu contingut; això impedeix que tant l'objecte flotant com l'entorn `center` afegeixin un espai vertical extra.

## Exercicis

Mira d'incloure una imatge teva, en comptes de les que hem anat utilitzant en els exemples.

Explora què pots fer utilitzant les paraules clau `height`, `width`, `angle` i `scale`.

Utilitza `width` per definir la mida d'una imatge en relació a `\textwidth` i d'una altra imatge en relació a `\linewidth`. Mira com es comporten utilitzant o no l'opció `twocolumn`.

Utilitza `lipsum` per fer una demostració amb un text llarg, i prova de posicionar flotants utilitzant diferents especificadors de posició. Com es comporten les imatges amb els diferents especificadors?
