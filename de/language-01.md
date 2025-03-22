---
layout: "lesson"
lang: "de"
title: "Besonderheiten für die deutsche Sprache"
description: "In dieser Lektion wird auf Besonderheiten der Erstellung deutscher Texte eingegangen."
next: "extra-01"
toc-anchor-text: "LaTeX auf Deutsch"
toc-description: "Besonderheiten für die deutsche Sprache."
---

# Besonderheiten für die deutsche Sprache

<span
    class="summary">In dieser Lektion wird auf Besonderheiten der Erstellung deutscher Texte eingegangen.</span>

TeX und LaTeX wurden ursprünglich für die englische Sprache entwickelt, was man
an vielen Voreinstellungen erkennt. Um viele Einstellungen auf Deutsch
umzuschalten, kann das `babel`-Paket, wie in [einer früheren
Lektion](lesson-06) gezeigt, verwendet werden. Wichtig ist hier die
Verwendung der Option `ngerman` für die _neue_ Rechtschreibung. Durch das Paket
werden die Regeln zur Silbentrennung angepasst, außerdem werden bestimmte
Dokumentbestandteile automatisch ins Deutsche übersetzt, wie etwa
"Inhaltsverzeichnis", "Abbildungsverzeichnis" usw.

Damit die Silbentrennung in `pdflatex` auch in Wörtern mit Umlauten
funktioniert, muss unbedingt das Paket `fontenc` mit der Option `T1` verwendet
werden. Wichtig: in `xelatex` und `lualatex` sollte `fontenc` nicht geladen werden, das es für 8-bit Engines entwickelt wurde!
Das Font-Encoding in den Unicode-Engines `xelatex` und `lualatex` ist immer `TU` und sollte nicht verändert werden. Mit diesem Encoding funktioniert die Silbentrennung korrekt.

Für deutsche Anführungszeichen empfiehlt sich das sehr flexible Paket
[`csquotes`](https://texdoc.org/pkg/csquotes), das sich ebenfalls an die
gewählte Dokumentsprache anpasst. Hierdurch werden mittels semantischer
Auszeichnung Anführungszeichen in den Text eingefügt.

```latex
\documentclass[ngerman]{article}

\usepackage[T1]{fontenc}
\usepackage{babel}
\usepackage{csquotes}

\begin{document}
\enquote{Dies ist ein toller deutscher Text}, sagte der Lehrer, \enquote{Umlaute
würden ihm allerdings noch gut tun!}

Hier ein noch einiges Füllmaterial, das dazu dienen soll, die Zeile zu
verlängern, um einen Umbruch in einem Wort, das einen Umlaut enthält, zu
erhalten.
\end{document}
```

Man beachte, dass `ngerman` als globale Option verwendet wurde, damit alle
Pakete, die die Option kennen, diese verwenden.

Probiere, was passiert, wenn die `fontenc` Zeile entfernt wird.

----

Neben den Standardklassen (wie sie in den Beispielen auf dieser Seite verwendet
werden) empfiehlt sich die Verwendung der Klassen aus KOMA-Script, die eine
ausführliche deutschsprachige [Dokumentation](https://texdoc.org/pkg/scrguide)
besitzen und die Regeln der deutschen Typografie gut umsetzen.
