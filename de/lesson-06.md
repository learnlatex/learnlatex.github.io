---
layout: "lesson"
lang: "de"
title: "LaTeX mit Paketen und Definitionen erweitern"
description: "Diese Lektion zeigt, wie LaTeX den eigenen Bedürfnissen entsprechend erweitert und im Layout angepasst werden kann, indem verschiedene Pakete geladen werden, und wie eigene Befehle definiert werden können."
toc-anchor-text: "LaTeX erweitern"
toc-description: "Pakete und Definitionen verwenden"
---

# LaTeX mit Paketen und Definitionen erweitern

<span
  class="summary">Diese Lektion zeigt, wie LaTeX den eigenen Bedürfnissen entsprechend erweitert und im Layout angepasst werden kann, indem verschiedene Pakete geladen werden, und wie eigene Befehle definiert werden können.</span>

Nach der Wahl der Dokumentklasse können LaTeXs Funktionen in der Präambel durch
das Laden eines oder mehrerer _Pakete_ modifiziert werden. Diese können

- verändern, wie Teile LaTeXs funktionieren,
- neue Befehle zu LaTeX hinzufügen und
- das Design des Dokuments verändern.

## LaTeXs Abläufe beeinflussen

Der LaTeX-_Kernel_ (LaTeXs Kern mit Grundfunktionen) ist im Bereich
Nutzeranpassungen stark eingeschränkt und so wurden Erweiterungspakete
geschrieben, die häufig gestellte Anforderungen umsetzen. Eine dieser
Anforderung ist sprachabhängiger Satz (Silbentrennung, Interpunktion,
Zitierungen, Lokalisierung, usw.). Verschiedene Sprachen haben unterschiedliche
Regeln, weshalb es wichtig ist, LaTeX zu verraten, welche Sprache benutzt wird.
Das wird durch das Paket `babel` erledigt.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[ngerman]{babel} % ngerman für Regeln der neuen Rechtschreibung

\usepackage[width = 6cm]{geometry} % Um Silbentrennung zu erzwingen

\begin{document}
Dies ist eine Menge inhaltlosen Textes, der verdeutlichen wird, wie
LaTeX Dinge trennt, und wenigstens eine Silbentrennung beinhalten wird.
Dies ist eine Menge inhaltlosen Textes, der verdeutlichen wird, wie
LaTeX Dinge trennt, und wenigstens eine Silbentrennung beinhalten wird.

\end{document}
```

Versuche, die Zeile, in der `babel` geladen wird, zu verwenden, und beachte die
Änderungen. (Standardmäßig werden die Silbentrennungsregeln des US-Englischen
verwendet.)

Das `babel` Paket bietet über Silbentrennung hinaus noch Einiges mehr, abhängig
davon, welche Sprache verwendet wird; wir zeigen [weitere Details](more-06),
sollten Sie diese benötigen.

## Das Design anpassen

Es ist nützlich, einige Designaspekte unabhängig von der verwendeten
Dokumentklasse anpassen zu können. Seitenränder anzupassen, ist sicherlich eine
der häufig benötigten Änderungen. Im vorigen Beispiel haben wir bereits das
`geometry` Paket verwendet, hier aber ein Beispiel, das sich explizit mit
Seitenrändern auseinandersetzt.

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=2.54cm]{geometry}
\usepackage[ngerman]{babel}

\begin{document}
Hallo Welt!

Dies ist ein erstes Dokument.

% ====================
\chapter{Kapitel Eins}
Einleitung des ersten Kapitels.


\section{Titel des ersten Abschnitts}
Inhalt des ersten Abschnitts

Zweiter Absatz.

\subsection{Unterabschnitt des ersten Abschnitts}

Inhalt des Unterabschnitts.


% ====================
\section{Zweiter Abschnitt}

Inhalt des zweiten Abschnitts.

\end{document}
```

Im Vergleich zum Dokument ohne `geometry` sollten die Auswirkungen deutlich
erkennbar sein.

## Neue Funktionalität hinzufügen

Die Möglichkeit, aus tausenden Paketen auswählen zu können, ist eine von LaTeXs
Stärken. Das schließt Pakete für mathematische Texte, Hyperlinks, die Verwendung
von Farben und viele weitere ein. Wir werden weitere Pakete in späteren
Lektionen vorstellen.

## Befehle definieren

Manchmal wird ein Befehl für ein bestimmtes Dokument benötigt, entweder weil
eine Funktion, die von keinem Paket unterstützt wird, benötigt wird oder ein
Ausdruck, der häufig eingegeben wird, soll in einem Befehl hinterlegt werden.

Das nächste Beispiel definiert einen Befehl, der Schlagworte mit der gewünschten
Formatierung ausgibt.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\newcommand\kw[1]{\textbf{\itshape #1}}

\begin{document}

Irgendwas über \kw{Äpfel} und \kw{Orangen}.

\end{document}
```

In der Definition steht `[1]` für die Anzahl der Argumente (hier eins) und `#1`
verwendet das erste übergebene Argument (`Äpfel` und `Orangen` im Beispiel).
Eine Definition kann bis zu neun Argumente verwenden, in der Regel ist es aber
besser, nur ein oder gar kein Argument zu verwenden.

Befehle zu definieren reduziert nicht nur den Tippaufwand für die Erstellung
eines Dokuments. Es trennt auch die Formatierungsinformationen vom Inhalt. Wird
entschieden, Schlagworte anders zu formatieren, muss nur die Definition in der
Präambel geändert werden und nicht der gesamte Textteil überarbeitet. In diesem
Beispiel verwenden wir `xcolor`, das Farben bereitstellt, und setzen die
Schlagworte in blau anstelle von fett.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\usepackage{xcolor}

\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

Irgendwas über \kw{Äpfel} und \kw{Orangen}.

\end{document}
```

Man beachte, dass zu viele benutzerdefinierte Befehle oder Befehle mit zu vielen
Argumenten das Lesen und Verstehen der Dokumentquellen aufgrund der ungewohnten
Syntax erschwert. Die Möglichkeit, dokumentenspezifische Befehle zu erstellen,
sollte mit Bedacht verwendet werden.

## Übung

Probiere aus, Texte in verschiedenen europäischen Sprachen zu schreiben, und
beobachte, wie `babel` die Silbentrennung beeinflusst; wahrscheinlich lassen
sich Texte im Internet finden und die richtigen Einstellungen für `babel`
erraten.

Verändere die Seitenränder im `geometry` Beispiel. Die Ränder lassen sich mit
`top`, `bottom`, `left` und `right` in einer durch Kommata getrennten Liste
individuell anpassen.

Lade das `lipsum` Paket und verwende den Befehl `\lipsum` im Textteil. Können
Sie erraten, warum dieses Paket für die Erstellung von Beispielen nützlich ist?

Experimentiere mit der Definition von `\kw` für verschiedene Stile.
