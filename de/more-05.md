---
layout: "lesson"
lang: "de"
title: "Mehr zu: Design anpassen mit Klassen"
description: "Diese Lektion informiert über spezialisiertere Dokumentklassen für LaTeX."
toc-anchor-text: "Mehr zu: Design anpassen mit Klassen"
---

## Zeitschriftspezifische Klassen

Viele akademische Journale bieten LaTeX-Klassen für Einreichungen an. Diese
setzen typischerweise ein der fertigen Zeitschrift ähnliches Layout um, wobei
dies natürlich von den verwendeten Schriften und ähnlichem abhängt. Sollte eine
Klasse angeboten werden, wird diese typischerweise direkt von der Redaktion
bereitgestellt, die auch Angaben zum Funktionsumfang machen sollte. Viele dieser
Klassen sind auch auf [CTAN](https://ctan.org) oder in den TeX-Distributionen
verfügbar.

## Klassen für Präsentationen

Ein Anwendungsgebiet, dass eine Sonderbehandlung verdient, sind Präsentationen.
Die `slides` Klasse wurde für gedruckte Folien entworfen und bietet keine
Funktionen für Bildschirmpräsentationen. Zwei verbreitete Klassen wurden genau
hierfür entwickelt: `beamer` und `powerdot`. Da `beamer` die wahrscheinlich
verbreitetere der beiden ist, hier ein Beispiel in `beamer`:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}

\begin{frame}
  \frametitle{Eine erste Folie}
  Etwas Text
\end{frame}

\begin{frame}
  \frametitle{Eine zweite Folie}
  Anderer Text
  \begin{itemize}
    \item<1-> Erstes Element
    \item<2-> Zweites Element
  \end{itemize}
\end{frame}

\end{document}
```

Das Beispiel zeigt zwei wichtige Ideen. Erstens unterteilt `beamer` das Dokument
in Folien (im Englischen _frames_), die weiter in Overlays (im Englischen oft
_slides_, im PDF Seiten) unterteilt werden. Zweitens fügt `beamer` der normalen
LaTeX-Syntax eine Spezifikation hinzu, die Teile eines Frames Stück für Stück
zeigen. Extrem nützlich, aber zu kompliziert an dieser Stelle: [Dieser
Blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/) geht
gut hierauf ein.

## Eine Klasse für Bilder

Manchmal ergibt es sich, dass man ein Bild in LaTeX erzeugen möchte (etwa weil
es viel Text enthält). In der Regel will man dann nichts weiter auf der Seite
als die Inhalte. Einfach lässt sich das mit der [`standalone`](https://ctan.org/pkg/standalone)
Klasse erreichen, die automatisch die Seitengröße an die Inhalte anpasst.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Ein einfaches Dokument: Das wird eine ziemlich kleine Box!
\end{document}
```
