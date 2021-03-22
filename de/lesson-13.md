---
layout: "lesson"
lang: "de"
title: "Längere Dokumente strukturieren"
description: "Diese Lektion zeigt, wie LaTeX erlaubt, die Quellen auf kleinere, einfacher zu handhabende Dateien aufzuteilen, und wie dies das Erstellen langer Dokumente vereinfacht und beschleunigt."
toc-anchor-text: "Quellen strukturieren"
toc-description: "Quellen auf kontrollierte Weise aufteilen"
---

# Längere Dokumente strukturieren

<script>
runlatex.preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

<span
  class="summary">Diese Lektion zeigt, wie LaTeX erlaubt, die Quellen auf kleinere, einfacher zu handhabende Dateien aufzuteilen, und wie dies das Erstellen langer Dokumente vereinfacht und beschleunigt.</span>

Beim Erstellen längerer Dokumente ist es nützlich, die Quellen auf mehrere
Dateien aufzuteilen. Beispielsweise ist es üblich, eine Hauptdatei zu verwalten
und eine weitere Quelldatei je Kapitel (für ein Buch oder eine Abschlussarbeit)
bzw. je Abschnitt (für längere Artikel) anzulegen.

## Quellen strukturieren

LaTeX erlaubt uns, die Quellen auf kontrollierte Weise aufzuteilen. Hierfür
existieren zwei wichtige Befehle, `\input` und `\include`. Durch `\input` können
wir eine Datei einbinden, wie als wäre der Inhalt an dieser Stelle eingegeben,
es funktioniert also für (fast) alles. Der `\include` Befehl funktioniert nur
für Kapitel, er beginnt immer eine neue Seite und passt einige Interna an. Er
bietet aber einen großen Vorteil: durch ihn können wir auswählen, welche Kapitel
eingebunden werden, man kann also an einem Teil des Dokuments arbeiten, ohne das
gesamte Dokument setzen zu müssen.

Ein langes Dokument könnte also folgendermaßen aufgebaut sein:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{Ein Beispielbuch}
\author{Max Mustermann \and Erika Musterfrau}

\IfFileExists{\jobname.run.xml}
{
\includeonly{
  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Bearbeite zu Beginn das gesamte Dokument,
% um alle .aux Hilfsdateien zu erzeugen
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% =========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

Wir werden die unterschiedlichen Aspekte dieses Beispiels unten behandeln (und
die verschiedenen Unterdateien befinden sich am Ende dieser Seite).

## `\input` verwenden

Der `\input` Befehl ist für Teile eines langen Dokuments nützlich, die _keine_
einzelnen Kapitel sind. Im Beispiel haben wir ihn verwendet, um Titel- und
Rückseite einzubinden, wodurch die Hauptdatei kurz und verständlich gehalten
wird, außerdem können diese Seiten so in anderen Projekten wiederverwendet
werden. Des weiteren haben wir `\input` genutzt, um die Abschnitte, die keine
eigenen Kapitel sind, am Anfang des Buches einzubinden, wie etwa das Vorwort.

## `\include` und `\includeonly` verwenden

Der `\include` Befehl eignet sich für Kapitel, weshalb er für jedes vollständige
Kapitel genutzt wurde; er beginnt immer eine neue Seite. Wir haben außerdem mit
`\includeonly` in einer durch Kommata getrennten Liste festgelegt, welche
Kapitel wirklich gesetzt werden. Durch die Nutzung von `\includeonly` kann die
benötigte Zeit zum Setzen des Dokuments reduziert werden, indem eine selektive
Ausgabe erzeugt wird, bspw. zum Korrekturlesen. Hauptvorteil von `\includeonly`
ist, dass LaTeX die Informationen für Querverweise aus den `.aux` Dateien der
anderen Abschnitte lesen und verwenden kann.

## Ein Inhaltsverzeichnis erzeugen

Durch `\tableofcontents` werden die Angaben der Gliederungsbefehle wie
`\chapter` und `\section` verwendet, um ein Inhaltsverzeichnis zu erzeugen. Es
wird eine eigene Hilfsdatei mit Erweiterung `.toc` angelegt, es werden also zwei
LaTeX-Läufe benötigt, um die Informationen verwenden zu können. Der Inhalt wird
automatisch erzeugt. Es existieren ähnliche Befehle für Abbildungs- und
Tabellenverzeichnis namens `\listoffigures` und `\listoftables`, die die
Informationen der `\caption`-Befehle aus den Gleitumgebungen und die
Dateierweiterungen `.lof` und `.lot` verwenden.

## Das Dokument in Teile aufteilen

Die `\frontmatter`, `\mainmatter` und `\backmatter` Befehle beeinflussen die
Formatierungen. Beispielsweise werden durch `\frontmatter` die Seiten römisch
nummeriert. Der `\appendix` Befehl ändert die Kapitelnummerierung zu `A`, `B`,
usw., weshalb für das erste Kapitel nach `\appendix` im Kopf `Appendix A`
verwendet wird.

## Übung

Experimentiere mit der Grundstruktur des Beispieldokuments. Füge Einträge zu
`\includeonly` hinzu oder entferne andere, um die Auswirkungen zu sehen.

Füge Gleitumgebungen hinzu und erzeuge ein Abbildungs- und ein
Tabellenverzeichnis. Falls eine lokale Installation verwendet wird, wie viele
LaTeX-Läufe werden benötigt? (Die Onlinesysteme führen die zusätzlichen Läufe
automatisiert aus, weshalb die benötigten Läufe nicht ersichtlich sind.)

----

#### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```
<!-- {% endraw %} -->

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Vorwort}
Ein interessantes Vorwort. Siehe \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Einleitung}
Der Text des ersten Kapitels.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Irgendwas}
Der Text des zweiten Kapitels.
```
<!-- {% endraw %} -->

#### append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Anhang}
Der Text des ersten Anhangs.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
Die Titelseite
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
Für \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
Die Rückseite
\end{center}
```
<!-- {% endraw %} -->

----
