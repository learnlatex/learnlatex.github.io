---
layout: "lesson"
lang: "de"
title: "Formatierung: Schriften und Abstände"
description: "Diese Lektion zeigt, wie Abstände einzelner Dokumentenelemente geändert und explizite Formatierungen in den LaTeX-Quellen angegeben werden können."
toc-anchor-text: "Schriften und Abstände"
toc-description: "Textformatierung für die optische Präsentation."
---

# Formatierung: Schriften und Abstände

<span
  class="summary">Diese Lektion zeigt, wie Abstände einzelner Dokumentenelemente geändert und explizite Formatierungen in den LaTeX-Quellen angegeben werden können.</span>

Wir haben bereits gesehen, dass eine Leerzeile in der Eingabe zu einem neuen
Absatz führt. Deutlich wird dies an der Einrückung eines neuen Absatzes.

## Absatzabstände

Ein häufiger Stil ist das Weglassen des Einrückung zu Beginn eines Absatzes und
stattdessen eine "Leerzeile" zwischen den Absätzen auszugeben. Dies kann mit dem
`parskip` Paket erreicht werden.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[latin]{babel} % lipsum erzeugt pseudolateinischen Text
\usepackage[parfill]{parskip}
\usepackage{lipsum} % nur für Blindtext
\begin{document}
\lipsum
\end{document}
```

## Zeilenumbrüche erzwingen

Meistens sollten Zeilenumbrüche in LaTeX nicht erzwungen werden: in den meisten
Fällen wird ein neuer Absatz gewünscht und sollte ein Abstand zwischen diesen
erwünscht sein, kann, wie bereits gesehen, `parskip` verwendet werden.

Es gibt einige _wenige_ Anlässe `\\` für den Beginn einer neuen Zeile ohne neuen
Absatz:

- Am Ende eine Tabellenzeile
- Innerhalb der `center` Umgebung
- In Dichtungen (der `verse` Umgebung)

Außerhalb dieser Umgebungen sollte fast immer auf `\\` _verzichtet_ werden.

## Explizite Abstände einfügen

Wir können ein schmales Leerzeichen (ungefähr der halben Breite) mit `\,`
einfügen. Im Mathematikmodus gibt es hierzu auch noch weitere Befehle: `\.`,
`\:` und `\;`, und für negative Abstände `\!`.

Sehr selten, etwa bei der Erstellung einer Titelseite, wird expliziter
horizontaler oder vertikaler Abstand benötigt. Hierzu können `\hspace` und
`\vspace` verwendet werden.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Etwas Text \hspace{1cm} mehr Text.

\vspace{10cm}

Noch mehr Text.
\end{document}
```

## Explizite Textformatierung

In [Lektion 3](lesson-03) haben wir geschrieben, dass in der Regel logische
Auszeichnungen zu bevorzugen sind. Manchmal soll Text aber fett, kursiv,
dicktengleich (mit einer Festbreitenschrift), etc. gesetzt werden. Hierzu gibt
es zwei verschiedene Typen von Befehlen, einen für kurze Textteile und einen für
Abschnitte.

Für kurze Teile nutzen wir `\textbf`, `\textit`, `\textrm`, `\textsf`, `\texttt`
und `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Hier ein wenig Spaß mit Schrift: \textbf{fett}, \textit{kursiv},
\textrm{Roman}, \textsf{serifenlos}, \texttt{dicktengleich} und
\textsc{Kapitälchen}.
\end{document}
```

Für längere Abschnitte nutzen wir Befehle, die die aktuelle
Schrifteneinstellungen ändern; Beispiele wären `\bfseries` und `\itshape`. Die
Auswirkungen enden nicht von allein, weshalb wir sie in einer _Gruppe_ verwenden
müssen, wenn wir nicht den Rest des Dokuments beeinflussen wollen.
LaTeX-Umgebungen bilden Gruppen, genau wie Tabellenzellen, wir können aber
auch `{...}` verwenden, um explizit eine Gruppe zu bilden.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Normaler Text.

{\itshape

Dieser Text ist kursiv.

Der hier auch: der Effekt wird nicht von einem Absatz beschränkt.

}
\end{document}
```

Die Schriftgröße kann ähnlich gesetzt werden; die Befehle arbeiten alle als
Schalter. Die Größe wird relativ zur voreingestellten Größe gesetzt: `\huge`,
`\large`, `\normalsize`, `\small` und `\footnotesize` sind verbreitet. Es ist
wichtig, den Absatz abzuschließen, _bevor_ die Schriftgröße zurückgesetzt wird;
beachte, dass wir einen expliziten `\par` (Absatzende) verwenden.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Normaler Text.

\begin{center}
{\itshape\large Etwas Text\par}
Normaler Text
{\bfseries\small viel kleinerer Text\par}
\end{center}

\end{document}
```

## Übung

Experimentiere mit manuelle Formatierung: erzeuge eine `titlepage` Umgebung und
versuche unterschiedliche Abstände und Schriften aus. Was passiert, wenn mehrere
Befehle zur Schriftänderung kombiniert werden? Funktioniert das genau wie im
Mathematikmodus?

Was passiert, wenn die Schriftgröße eines längeren Absatzes geändert wird
(versuche `\tiny` und anschließend `\huge`), ohne dass `\par` genutzt wird,
bevor die Gruppe geschlossen wird?
