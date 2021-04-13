---
layout: "lesson"
lang: "de"
title: "Querverweise"
description: "Diese Lektion zeigt, wie auf nummerierte Elemente eines Dokuments, bspw. Abbildungen, Tabellen und Abschnitte, verwiesen werden kann." 
toc-anchor-text: "Querverweise"
toc-description: "Querverweise auf Abbildungen, Tabellen usw. erstellen"
---

# Querverweise

<span
  class="summary">Diese Lektion zeigt, wie auf nummerierte Elemente eines Dokuments, bspw. Abbildungen, Tabellen und Abschnitte, verwiesen werden kann.</span>

Wenn man längere Dokumente erstellt, wird es nötig, nummerierte Elemente wie
Abbildungen, Tabellen und Gleichungen zu referenzieren. LaTeX kann automatisch
die korrekten Nummern einfügen; wir müssen dies nur vorbereiten.

## Der `\label` und `\ref` Mechanismus

Damit LaTeX eine Stelle des Dokuments im Gedächtnis behält, muss man diese
kennzeichnen. An anderer Stelle kann dann ein Verweis eingefügt werden.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\begin{document}
Hallo Welt!

Dies ist ein erstes Dokument.

\section{Titel des ersten Abschnitts}

Inhalt des ersten Abschnitts.


\subsection{Unterabschnitt des ersten Abschnitts}
\label{subsec:labeleins}

Inhalt des ersten Unterabschnitts.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labelzwei}
\end{equation}

In Unterabschnitt~\ref{subsec:labeleins} ist Gleichung~\ref{eq:labelzwei}.
\end{document}
```

Hier wurden zwei `\label{...}` Befehle verwendet, einer nach dem ersten
Unterabschnitt und einer in der Gleichungsumgebung `equation`. Durch die
`\ref{...}` Befehle im letzten Satz wurden diese verwendet. Wenn LaTeX
ausgeführt wird, speichert es die notwendigen Informationen über `\label`s in
einer Hilfsdatei. Für `\label{subsec:labeleins}` weiß LaTeX, dass es in einem
Unterabschnitt verwendet wurde, und speichert die entsprechende Nummer. Für
`\label{eq:labelzwei}` weiß LaTeX, dass die zuletzt genutzte für `\label`
relevante Umgebung `equation` war, und speichert die Gleichungsnummer. Wenn der
Querverweis erstellt wird, bekommt LaTeX die Information aus der Hilfsdatei.

Die Namensteile `subsec:` und `eq:` werden von LaTeX nicht benötigt; LaTeX
behält im Gedächtnis, was zuletzt verwendet wurde. Aber für den Autoren helfen
diese Namensteile, sich zu erinnern, worauf entsprechendes Label zeigt.

Im Ausgabe-PDF kann man manchmal Querverweise sehen, die als zwei fettgesetzte
Fragezeichen erscheinen (**??**). Dies rührt daher, dass LaTeX beim ersten
Durchlauf die entsprechenden Informationen noch nicht in der Hilfsdatei
gespeichert wurde. Ein weiterer LaTeX-Lauf schafft hier Abhilfe und die Verweise
sollten funktionieren. (Häufig führt man LaTeX während des Schreibens mehrmals
aus, weshalb dieses Problem normalerweise nicht sonderlich stört oder auffällt.)

Man beachte die Verwendung der Tilde (`~`) vor `\ref`. Ein Zeilenumbruch
zwischen `Unterabschnitt` oder auch `Gleichung` und der Nummer ist unerwünscht.
Die Tilde bedeutet in LaTeX ein Leerzeichen, an dem kein Zeilenumbruch
stattfindet.

## Wo `\label` verwendet wird

Der Befehl `\label` referenziert immer das zuletzt verwendete nummerierte
Element: Ein Abschnitt, eine Gleichung, eine Gleitumgebung usw. Das bedeutet,
dass `\label` immer _nach_ dem zu referenzierenden Objekt verwendet wird. Bei
der Verwendung von Gleitumgebungen muss `\label` _nach_ (oder noch besser, im
Argument von) `\caption` und innerhalb der Gleitumgebung verwendet werden.

## Übung

Versuche, nummerierte Objekte (Abschnitte, Unterabschnitte, Aufzählungen) zum
Dokument hinzuzufügen, und finde heraus, wie viele LaTeX-Läufe notwendig sind,
damit `\label` und `\ref` funktionieren.

Füge Gleitumgebungen hinzu und probiere aus, was passiert wenn `\label` _vor_
`\caption` verwendet wird; ist das Ergebnis vorhersehbar?

Was passiert, wenn ein `\label` für eine Gleichung _nach_ `\end{equation}`
platziert wird?
