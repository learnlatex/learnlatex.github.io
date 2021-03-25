---
layout: "lesson"
lang: "de"
title: "Mehr zu: Längere Dokumente strukturieren"
description: "Diese Lektion zeigt, wie ein Index erzeugt und das imakeidx Paket für die Automatisierung hiervon verwendet wird."
toc-anchor-text: "Mehr zu: Längere Dokumente strukturieren"
---

## Einen Index erzeugen

Abhängig davon, was für ein Dokument erzeugt wird, mag ein Index von Vorteil
sein. Der Vorgang ähnelt dem, ein Literaturverzeichnis zu erzeugen, und
verwendet auch eine Hilfsdatei. Glücklicherweise ist der Vorgang durch das
`imakeidx` Paket automatisiert. LaTeX benötigt drei Instruktionen:

- der `\makeindex` Befehl, der die Indexerstellung ermöglicht
- der `\index` Befehl, der Indexeinträge kennzeichnet
- der `\printindex` Befehl, der den Index ausgibt

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{imakeidx}
\makeindex
\begin{document}
Etwas Text über Foo\index{Foo}.
Mehr text\index{baz!bar}.
Noch mehr Text\index{alpha@$\alhpa$}.
Mehr Text über einen anderen Aspekt von baz\index{baz!wibble}.

\clearpage
Erneut etwas Text über Foo\index{Foo} auf einer anderen Seite.
Noch mehr Text\index{beta@$\beta$}.
Immernoch mehr Text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

Hier wurden zwei Möglichkeiten zur Indizierung gezeigt: Unterteilungen durch `!`
und vom Sortiertext abweichende Ausgabe ducrh `@`. Indexe bieten einige
Anpassungsmöglichkeiten; experimentiere mit dem Beispiel, um dei Funktionsweise
zu verstehen.
