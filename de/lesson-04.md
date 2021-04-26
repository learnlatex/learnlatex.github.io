---
layout: "lesson"
lang: "de"
title: "Logische Struktur"
description: "Diese Lektion zeigt die grundlegenden Formatierungsbefehle und vergleicht sie mit semantischer Formatierung mittels Gliederungsbefehlen und Listen"
toc-anchor-text: "Logische Struktur"
toc-description: "Logische Struktur und visuelle Präsentation"
---

# Logische Struktur

<span
  class="summary">Diese Lektion zeigt die grundlegenden Formatierungsbefehle und vergleicht sie mit semantischer Formatierung mittels Gliederungsbefehlen und Listen</span>

LaTeX stellt Mittel bereit, die erlauben, sich auf die logische Struktur eines
Dokuments zu konzentrieren, und solche, die direkt das Erscheinungsbild
bestimmen. Meist ist es besser, die Methoden zur Strukturierung zu verwenden, da
dies eine Wiederverwendung oder Anpassung des Layouts vereinfacht.

## Struktur und visuelle Präsentation

Wir beginnen mit einem Beispiel, das einen der am häufigsten verwendeten Befehle
zur logischen Auszeichnung in LaTeX, `\emph`, mit dem einfachen Setzen in
kursiver Schrift vergleicht. (Im Druck ist dies die übliche Form einer
Betonung.)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Ein wenig Text mit \emph{Hervorhebungen und \emph{geschachteltem} Inhalt}.

Ein wenig Text mit \textit{kursiver Schrift und \textit{geschachteltem} Inhalt}.
\end{document}
```

Man kann vielleicht erraten, dass `\textit` für kursive Schrift verwendet wird
(nach dem Englischen _italic_), es setzt den Text allerdings _immer_ kursiv,
funktioniert also nicht bei geschachtelter Verwendung. Man beachte, dass `\emph`
Verschachtelungen erkennt. Es gibt außerdem Stellen, in denen eine Hervorhebung
keiner kursiven Schrift entspricht; in Präsentationen ist bspw. Farbe eine
wesentlich geeignetere Option. Mit logischer Auszeichnung muss man sich
innerhalb des Textteils keine Gedanken zu derlei Feinheiten machen.

Einen Blick auf [manuelle Formatierung gibt es später](lesson-11), für den
Moment fügen wir aber `\textbf` noch der Liste bekannter Befehle hinzu: Es setzt
Text fett.

## Gliederungsbefehle

Wahrscheinlich haben Sie bereits eine Textverarbeitung verwendet, bei denen
viele Anwender einen Abschnittstitel einfügen, indem sie ihn einfach größer und
fett setzen und anschließend einen Zeilenumbruch einfügen. In LaTeX ist es
tatsächlich _einfacher_, logische Auszeichnungen zu verwenden als die
Formatierung manuell vorzunehmen; wir verwenden den `\section` Befehl. Dieser
übernimmt die Schrifteinstellungen, vertikale Abstände usw. und sorgt für
gleichbleibende Formatierung im gesamten Dokument.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Hallo Welt!

Dies ist ein frühes Dokument.

\section{Titel des ersten Abschnitts}

Text mit Inhalten des ersten Abschnitts

Zweiter Absatz.

\subsection{Unterabschnitt des ersten Abschnitts}

Text mit Inhalten dieses Unterabschnitts.

\section{Zweiter Abschnitt}

Text des zweiten Abschnitts.

\end{document}
```

Mit den Standardeinstellungen von `article` werden Abschnitte und
Unterabschnitte von LaTeX nummeriert und die Titel in Fettschrift ausgegeben.
[Im nächsten Abschnitt](lesson-05) werden wir uns mit Layoutveränderungen
auseinandersetzen.

LaTeX kann Dokument in mehreren Ebenen unterteilen

- `\chapter` (wofür `\documentclass{book}` oder `\documentclass{report}`
    benötigt würde)
- `\section`
- `\subsection`
- `\subsubsection`

Wir können noch weiter unterteilen: die nächstuntere Ebene wäre `\paragraph`,
was allerdings so gut wie immer eine zu feine Gliederung ergibt. (Ja,
`\paragraph` ist ein Gliederungsbefehl und dient _nicht_ zum Starten eines neuen
Absatzes!)

Man könnte sich nun fragen, wie der Dokumenttitel zustande kommt. Hierzu gibt es
weiter spezielle Befehle, die aber nicht von jedem Dokument verwendet werden,
weshalb sie [in der zugehörigen Lektion mit mehr Details behandelt
werden](more-04).

## Listen

Eine weitere häufig verwendete Struktur, für die logische Auszeichnung geschickt
ist, sind Listen. Zwei verbreitete Listentypen sind in LaTeX enthalten.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}

Geordnet
\begin{enumerate}
  \item Ein Eintrag
  \item Ein Weiterer
  \item Wahnsinn! Drei Einträge
\end{enumerate}

Ungeordnet
\begin{itemize}
  \item Ein Eintrag
  \item Ein Weiterer
  \item Wahnsinn! Drei Einträge
\end{itemize}

\end{document}
```

Wir verwenden `\item`, um jeden Eintrag anzuführen, und die Kennzeichnung der
einzelnen Listenart wird automatisch hinzugefügt.

## Übung

Experimentiere mit verschiedenen Gliederungsebenen. Versuche
`\documentclass{report}` anstelle von `\documentclass{article}` und `\chapter`
zu verwenden. Wie sehen diese aus? Probiere auch `\paragraph` und (sogar)
`\subparagraph` aus, um zu sehen wie sie funktionieren: standardmäßig verwenden
sie _keine_ Gliederungsnummer.

Erstelle einige Listen und verschachtele eine Liste in eine andere. Wie
verändert sich die Formatierung der Nummerierung und Kennzeichnungen? Mit den
Standardeinstellungen von LaTeX können nur vier Listenebenen verwendet werden,
aber mehr als vier verschachtelte Listen könnten auf eine schlechte Gliederung
hinweisen!
