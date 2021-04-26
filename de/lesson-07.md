---
layout: "lesson"
lang: "de"
title: "Abbildungen einbinden und positionieren"
description: "Diese Lektion zeigt, wie externe Grafikdateien ins Dokument eingebunden werden, deren Erscheinung verändert wird und wie diese automatisch an die richtige Stelle im PDF gleiten."
toc-anchor-text: "Abbildungen verwenden"
toc-description: "Aussehen, Abstände und Platzierungen."
---

# Abbildungen und Positionierung

<span
  class="summary">Diese Lektion zeigt, wie externe Grafikdateien ins Dokument eingebunden werden, deren Erscheinung verändert wird und wie diese automatisch an die richtige Stelle im PDF gleiten.</span>

Um externe Grafiken einzubinden, verwendet man das `graphicx` Paket, welches den
Befehl `\includegraphics` zu LaTeX hinzufügt.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{graphicx}

\begin{document}
Dieses Bild
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
ist ein importiertes PDF.
\end{document}
```

EPS, PNG, JPG und PDF Dateien können eingebunden werden. Wenn mehrere Versionen
einer Grafik vorhanden sind, können Sie bspw. `example-image.png` verwenden.
(Das `graphicx` Paket versucht die richtige Dateierweiterung zu raten, wenn
keine angegeben wird.)

Man beachte, dass wir eine neue Umgebung (`center`) für dieses Beispiel nutzen,
um das Bild auf der Seite horizontal zentriert zu platzieren.
[Später](lesson-11) werden wir mehr auf Abstände und Platzierung eingehen.

## Erscheinung von Grafiken verändern

Der `\includegraphics` Befehl hat viele Optionen, um Größe und Form der Grafiken
zu kontrollieren und sie zuzuschneiden. Manche davon werden häufig benötigt, es
lohnt sich also, diese hier zu behandeln.

Die wahrscheinlich häufigste Anpassung betrifft die Größe, die mit `width` und
`height` angepasst werden kann und häufig relativ zur Größe des Satzspiegels mit
`\textwidth` oder `\linewidth` und `\textheight` angegeben wird. Der Unterschied
zwischen `\textwidth` und `\linewidth` ist eine Feinheit, das Ergebnis häufig
das selbe. `\textwidth` ist die Breite des Satzspiegels, während `\linewidth`
die _momentane_ Breite einer Zeile ist, was sich lokal voneinander unterscheiden
kann (am auffälligsten ist der Unterschied bei Verwendung der globalen option
`twocolumn`). LaTeX wird das Bild unverzerrt skalieren, wenn nur `width` oder
`height` verwendet wird.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Etwas Text
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

Bilder können auch skaliert (`scale`) oder rotiert (`angle`) werden. Eine andere
manchmal benötigte Modifikation ist das Zuschneiden (`clip` und `trim`) eines
Bildes.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Abbildungen gleiten lassen

Traditioneller Weise können beim Textsatz Bilder an eine andere Stelle des
Dokuments versetzt werden, was gerade bei technischen Dokumenten häufig der Fall
ist. Dies wird *Gleitumgebung* (Englisch: *float*) genannt. Abbildungen werden
in der Regel als Gleitumgebung eingebunden, damit keine größeren Lücken im Text
entstehen.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{graphicx}
\usepackage{lipsum} % Blindtext erzeugen

\begin{document}
\lipsum[1-4] % einige Absätze Blindtext

Testposition
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Ein Beispielbild}
\end{figure}

\lipsum[6-10] % einige Absätze Blindtext
\end{document}
```

LaTeX verschiebt die Abbildung und Bildunterschrift weg vom `Testposition`-Text
zum Anfang der zweiten Seite, da am Ende der ersten Seite nicht ausreichend
Platz ist. Die Option `ht` gibt an, wo LaTeX die Gleitumgebung platzieren darf;
`ht` erlaubt die gleiche Position wie in den Quellen oder der Anfang einer
Seite. Bis zu vier Positionsspezifikationen können verwendet werden:

- `h` 'Hier' (falls möglich)
- `t` Anfang einer Seite (*T*op)
- `b` Ende einer Seite (*B*ottom)
- `p` Eine extra Seite nur für Gleitumgebungen (*P*age)

[Später](lesson-09) werden wir Querverweise für Gleitumgebungen behandeln, um
diese im Text zu referenzieren.

Sie haben sicherlich bemerkt, dass wir `\centering` anstelle der `center`
Umgebung verwendet haben. In einer Gleitumgebung sollte `\centering` zur
horizontalen Zentrierung verwendet werden, wodurch verhindert wird, dass sowohl
die Gleitumgebung als auch `center` vertikale Abstände hinzufügen.

## Übung

Versuche ein eigenes Bild anstelle der Beispielbilder in den Demonstrationen zu
verwenden.

Probiere aus, was mit den `height`, `width`, `angle` und `scale` Schlüsseln
erreicht werden kann.

Verwende die `width` Option, um ein Bild relativ zu `\textwidth` und ein
weiteres relativ zu `\linewidth` zu setzen. Erprobe, wie sie sich mit und ohne
die globale Option `twocolumn` verhalten.

Verwende `lipsum` um einen längeren Text zu erzeugen und versuche
Gleitumgebungen mit unterschiedlichen Positionsspezifikationen zu platzieren.
Wie wirken verschiedene Spezifikationen zusammen?
