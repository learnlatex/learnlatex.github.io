---
layout: "lesson"
lang: "de"
title: "Mehr zu: Abbildungen einbinden und positionieren"
description: "Diese Lektion zeigt weitere Details, wie Grafikdateien benannt und gespeichert werden sollten, um sie in LaTeX einzubinden, und wie aus LaTeX heraus eigene Grafiken erzeugt werden können."
toc-anchor-text: "Mehr zu: Abbildungen einbinden und positionieren"
---

## Grafikdateien benennen

LaTeX unterstützt viele verschiedene Plattformen, weshalb einige
Überlegungen zu Dateinamen gemacht werden sollten. Am besten ist es,
einfache Dateinamen zu verwenden und keine Leerzeichen zu verwenden. Wenn man
alle Grafikdateien bspw. in einem Unterordner ablegt, sind Aufrufe wie
`\includegraphics[width=30pt]{bilder/mama.png}` Plattform unabhängig und werden
auch in der Zukunft noch funktionieren.

Leerzeichen in Dateinamen waren früher problematisch, werden heute aber
üblicherweise unterstützt. Dennoch sollte, wenn es zu Fehlern beim Einbinden von
Bildern kommt, der erste Schritt sein, Leerzeichen aus Dateinamen zu entfernen.

Umlaute und Akzentbuchstaben können problematisch sein; auf manchen Systemen
kommt es zu Problemen, häufig auf Windows. Versuchen Sie bei Problemen mit
Akzentbuchstaben in Dateinamen, sich auf ASCII zu beschränken.

## Grafikdateien in einem Unterordner speichern

Eine verbreitete Ordnerstruktur zum Ablegen der Quelldateien ist es, alle
Grafikdateien in einem Unterordner abzulegen. Die Dateien können mit einem
relativen Pfad eingebunden werden (wie oben gezeigt). Man beachte, dass auch auf
Windows `/` verwendet wird, um Ordner in Dateipfaden zu trennen.

Werden viele Grafiken verwendet, hilft es, den Unterordner im Voraus anzugeben.
Dies kann mit dem Befehl `\graphicspath` erreicht werden, der für jeden
Unterordner einen Eintrag in geschweiften Klammern erwartet. Um die Ordner
`Bilder` und `Abbildungen` zu verwenden, erfolgt folgender Aufruf:

<!-- {% raw %} -->
```latex
\graphicspath{{Bilder/}{Abbildungen/}}
```
<!-- {% endraw %} -->

Man beachte die abschließenden `/` in diesen Ordnerangaben.

## Grafiken erzeugen

Wie bereits erwähnt unterstützt LaTeX Grafiken in vielen gängigen Formaten, auch
solche, die mit wissenschaftlicher Software erstellt wurden. Wenn Grafiken
erzeugt werden, sollte man diese nach Möglichkeit als PDF speichern, da sich
PDFs skalieren lassen. Wenn Bitmaps erzeugt werden müssen, sollte auf
ausreichende Auflösung geachtet werden. Mit [Inkscape](https://inkscape.org/)
können grafisch Bilder erzeugt werden, in denen auch LaTeX genutzt werden kann.
Eine Alternative, die auch dreidimensionale Koordinaten unterstützt, ist
[Asymptote](https://www.ctan.org/pkg/asymptote). Beide erzeugen Ausgabedateien,
die in ein LaTeX-Dokument eingebunden werden können.

Man kann auch Grafiken, die sich hierfür eignen mit hoher Präzision und Marken
und Gleichungen, die sich optisch in den Rest des Dokuments einfügen, in LaTeX
erzeugen. Dies kann direkt mit [Ti*k*Z](https://ctan.org/pkg/pgf) direkt im
Dokument erfolgen, was komfortabel ist, allerdings auch mehr Ressource für das
Dokument benötigt. Eine Alternative zu Ti*k*Z ist
[PSTricks](https://ctan.org/pkg/pstricks-base).

## Gleitumgebungen platzieren

LaTeXs Platzierung von Gleitumgebungen ist komplex. Die häufigste Anfrage ist,
die Abbildungen genau dort zu platzieren, wo sie in den Quellen verwendet
werden. Das `float` Paket unterstützt genau das.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{graphicx}
\usepackage{lipsum}  % Blindtext
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Ein Beispielbild}
\end{figure}
\lipsum[8-15]
\end{document}
```

`float` fügt die Platzierung `H` hinzu, die bedeutet 'genau hier'. Häufig ist
die Verwendung von `H` allerdings problematisch, da sie zu großen Lücken im
Dokument führen kann.

## Andere Arten von Gleitumgebungen

In [Kürze](lesson-08) werden wir sehen, dass man auch Tabellen als
Gleitumgebungen platzieren kann; hierfür wird die `table` Umgebung verwendet.
Allerdings muss man nicht Grafiken in einer `figure` und Tabellen in einer
`table` Umgebung verwenden, das ist nur eine Konvention.

Manchmal werden auch andere Arten von Gleitumgebungen benötigt, jede Art wird
unabhängig von den anderen platziert. Dies kann mit dem
[`trivfloat`](https://ctan.org/pkg/trivfloat) Paket erreicht werden. Es
definiert einen Befehl, um neue Gleitumgebungsarten zu erstellen.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{graphicx}
\usepackage{lipsum}  % Blindtext
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Ein Beispielbild}
\end{image}
\end{document}
```
