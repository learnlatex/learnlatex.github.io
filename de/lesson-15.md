---
layout: "lesson"
lang: "de"
title: "Mit Fehlern umgehen"
description: "Diese Lektion zeigt einige häufige Fehler in LaTeX-Dokumenten, was sie bedeuten und wie sie behoben werden können."
toc-anchor-text: "Fehlerbehebung"
toc-description: "Mit unerwartetem Verhalten umgehen"
---

# Mit Fehlern umgehen

<span
    class="summary">Diese Lektion zeigt einige häufige Fehler in LaTeX-Dokumenten, was sie bedeuten und wie sie behoben werden können.</span>

Anders als typische Textverarbeitungsprogramme weist LaTeX einen
Editieren/Ausführen/Betrachten-Zyklus ähnlich wie kompilierte
Programmiersprachen und ähnlich wie beim Programmieren können Nutzer fehlerhafte
Eingaben machen und deshalb mit Fehlermeldungen umgehen.

## Häufige Fehler

Diese Seite zeigt Beispiele einiger häufiger Fehler. Jedes Fehlerbeispiel wird
von einer Beschreibung der Fehlerform begleitet.

Es könnte sich als lehrreich erweisen, die Beispiele zu testen und anschließend
zu versuchen, die Fehler mittels des Editierfeatures zu beheben, auch um zu
testen, ob man mit den gezeigten Fehlern umgehen kann.

### pdflatex not found

Ein häufiger erster Fehler, den Anfänger zu Beginn sehen ist:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

auf Windows oder

```
bash: pdflatex: command not found
```
{: .noedit :}

auf Linux.

Dies ist kein TeX-Fehler, sondern eine Fehlermeldung des Betriebssystems, das
uns mitteilt, dass TeX nicht installiert ist oder gefunden werden kann. Ein
häufiger Fehler ist, einen _Editor_, wie etwa TeXworks oder TeXShop, ohne ein
TeX-System, wie etwa TeX Live oder MiKTeX, zu installieren.

### Anatomie einer TeX-Fehlermeldung

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

Mein Befehl wird hier verwendet \mycommand.

\end{document}
```

Hierdurch wird die mehrzeilige Meldung in der Logdatei ausgegeben:

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 Mein Befehl wird hier verwendet \mycommand
                                              .
? 
```
{: .noedit :}

* Die erste Zeile, durch `!` markiert, gibt die generelle Fehlerart an (in
  diesem Fall ein nicht definierter Befehl).
* Die zwei nächsten Zeilen zeigen die Zeile, die TeX gerade bearbeitet hat, mit
  einem Zeilenumbruch an der Stelle, die TeX noch erreicht hat. Der undefinierte
  Befehl ist der letzte Token, den TeX eingelesen hat, also das letzte Wort vor
  dem Zeilenumbruch (hier `\textbold`). Nach dem Zeilenumbruch folgen die Tokens
  `{hmmm}`, die eventuell als Argumente eingelesen aber von TeX noch nicht
  ausgeführt wurden.
* Allgemein könnten hier noch weitere Zeilen folgen, die mehr Kontext der
  Fehlermeldung angeben.
* Die letzte Zeile beginnt mit `l.` gefolgt von der Zeilennummer und der Zeile
  aus der Quelldatei, in der der Fehler gefunden wurde.

* Abschließend folgt ein `?`. Wenn TeX interaktiv verwendet wird, ist es an
  dieser Stelle möglich, TeX weitere Instruktionen zu geben. Die meisten
  Editoren und Onlinesysteme starten TeX allerdings in einem Modus, der bei
  Fehlern nicht stoppt, sondern versucht den Rest des Dokuments zu bearbeiten.
  Die Eingabe von `s` im interaktiven Modus bei dieser Aufforderung
  veranlasst TeX, in diesem zweiten Modus fortzufahren.

Man beachte, dass TeX den Fehler nicht während der Definition findet;
tatsächlich gäbe es keinen Fehler, wenn `\mycommand` nie verwendet würde. Also
ist der eigentliche Fehler bereits in der Definition, wird aber für Zeile 8
gemeldet. Deshalb ist es wichtig, die vollständige Fehlermeldung zu betrachten.

Vorsicht, manche Editoren zeigen nur einzeilige "Fehlerzusammenfassungen". Dies
kann besonders verwirrend sein, wenn beispielsweise

`line 8: undefined command: ...\mycommand`

gezeigt wird, da hierdurch der Eindruck vermittelt wird, `\mycommand` wäre nicht
definiert.

### Nicht zusammenpassende Klammern

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Hier liegt der Fehler in einer falsch zugeordneten `}`, die verwendet wurde, um
das optionale Argument zu beenden. Die schließende Klammer bewirkt einen Fehler
während LaTeXs Optionsparsing. Man bekommt einen internen und nicht sehr
hilfreichen Fehler:

```
! Argument of `\@fileswith@ptions has an extra }.
```
{: .noedit :}

Während die Fehlerbeschreibung nicht hilfreich ist, beschreiben die nächsten
zwei Zeilen durch den Zeilenumbruch, der anzeigt, wie weit TeX die Datei gelesen
hat, genau, wo der Fehler gefunden wurde:

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}

### Fehlende Dateien

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

Dies führt zum Fehler

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Derselbe Fehler kann durch zwei verschiedene Ursachen begründet werden, ein
Tippfehler wie hier, der einfach durch Korrektur des Dateinamens behoben wird,
oder das tatsächliche Fehlen der Datei, die auf dem aktuellen System noch
installiert werden muss.

### Leerzeilen in Matheumgebungen

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\begin{document}

Etwas Text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Verursacht den mysteriösen Fehler

```
! Missing $ inserted.
```
{: .noedit :}

Das Beheben ist einfach, Leerzeilen sind in Matheumgebungen nicht erlaubt und
sollten entfernt werden.

## Übung

Versuche, die gezeigten Fehler in den Beispielen zu beheben.

Erstelle kleine Dokumente mit verschiedenen Fehlern und beachte die Form der
Fehlermeldungen.

<script>
  window.addEventListener('load', function(){
  rlselectline('pre2',4);
  rlselectline('pre4',4);
  rlselectline('pre7',4);
  rlselectline('pre9',8);
  }, false);
</script>
