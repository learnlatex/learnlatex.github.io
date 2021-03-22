---
layout: "lesson"
lang: "de"
title: "Mehr zu: Logische Struktur"
description: "Diese Lektion zeigt wie der Dokumenttitel gesetzt wird und wie Beschreibungslisten verwendet werden."
toc-anchor-text: "Mehr zu: Logische Struktur"
---

## Dokumenttitel

LaTeX stellt logische Auszeichnungen für den Titel eines Dokuments bereit: drei
Befehle, die die 'Metadaten' definieren, und einer, um sie zu nutzen.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
\author{E.~I.~N.~Anderer \and D.~Keinspeck}
\title{Dinge, die ich tat}
\date{1. April 2020}
\maketitle

Etwas normaler Text.
\end{document}
```

Wie man sehen kann, speichern die Befehle `\author`, `\title` und `\date`
Informationen und `\maketitle` nutzt diese. Mehrere Autoren können mit `\and`
getrennt werden. Die Befehle `\author`, `\title` und `\date` müssen vor
`\maketitle` verwendet werden. Im Beispiel haben wir sie im Textteil verwendet,
sie können aber auch in der Präambel genutzt werden, allerdings sind bei der
Verwendung von `babel` dessen Kurzbefehle in der Präambel noch nicht aktiv.

Das Design von `\maketitle` hängt von der verwendeten Dokumentenklasse ab (siehe
[Lektion 5](lesson-05)). Es gibt auch eine `titlepage`-Umgebung, die Sie
benutzen, wenn Sie ein eigenes Design verwenden wollen, dies geht aber für diese
Einführung zu weit. Wenn Sie Ihr eigenes Design verwenden wollen, können Sie
entweder mit einer anpassbaren Klasse beginnen, wie etwa `memoir`, oder als
Ausgangspunkt eine von LaTeXs Standardklassen, wie etwa `book`, verwenden.

## Beschreibungslisten

Zusätzlich zu den 'geordneten' und 'ungeordneten' Listenarten stellt LaTeX noch
eine weniger weit verbreitete zur Verfügung: beschreibende Listen.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}

\begin{description}
\item[Haushund:] ein Haustier. Seine wilde Stammform ist der Wolf, dem er als
  Unterart zugeordnet wird.
\item[Hauskatze:] ist die Haustierform der Falbkatze. Sie zählt zu den
  beliebtesten Heimtieren.
\end{description}

\end{document}
```

## Übung

Probiere einige verschiedene `\author`, `\title` und `\date` Informationen aus,
um `\maketitle` zu testen. Welche dieser Befehle _müssen_ verwendet werden?
Müssen die Befehle einen Autor, Titel oder ein Datum enthalten?

Erstelle einige Beschreibungslisten und verschachtele diese in anderen Listen
(geordneten, ungeordneten oder beschreibenden).
