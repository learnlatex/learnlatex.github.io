---
layout: "lesson"
lang: "de"
title: "Dokumentation und Hilfe finden"
description: "Diese Lektion zeigt die wichtigsten Quellen für Dokumentation von LaTeX-zugehöriger Software und Paketen und wie Hilfe bei Schwierigkeiten gefunden werden kann."
toc-anchor-text: "Hilfe & Dokumentation"
toc-description: "Dokumentation und Hilfe finden"
---

# Dokumentation und Hilfe finden

<span
    class="summary">Diese Lektion zeigt die wichtigsten Quellen für Dokumentation von LaTeX-zugehöriger Software und Paketen und wie Hilfe bei Schwierigkeiten gefunden werden kann.</span>

Es gibt verschiedene Methoden, um auf die Dokumentation von Paketen und Klassen
zuzugreifen.

## `texdoc`

Wenn eine TeX Distribution wurde (z.B. TeX Live oder MiKTeX) inklusive der
Dokumentation installiert wurde, kann auf diese lokal gespeicherte Dokumentation
mit dem `texdoc` Befehl auf der Kommandozeile zugegriffen werden:

`texdoc` < _pkg_ >

wird die Dokumentation des Pakets `<pkg>` öffnen. Das Hilfsprogramm wird die
verfügbare Dokumentation durchsuchen und das öffnen, was dem Suchbegriff am
nächsten kommt. Aus allen in Frage kommenden Treffern kann ausgewählt werden
durch:

`texdoc -l` < _pkg_ >

## texdoc.org

Dies ist eine [Webseite](https://texdoc.org/), die ähnlich zum `texdoc`
Hilfsprogramm funktioniert. Man kann nach Dokumentation, die dort verfügbar ist,
genau wie mit `texdoc -l` suchen und aus den Ergebnissen wählen.

## CTAN

[CTAN](https://www.ctan.org) ist das Comprehensive-TeX-Archive-Network. Die
meisten LaTeX-Pakete werden hier veröffentlicht. Man kann die Seite nach Paketen
durchsuchen und auf die Dokumentation zugreifen. Normalerweise werden die Pakete
in `ctan.org/pkg/<pkg-name>` abgelegt, wo auf die README und Dokumentation
zugegriffen werden kann.

## Bücher über LaTeX

Erhältlich sind verschiedene Bücher, in denen Hilfe und mehr Informationen zu
LaTeX gefunden werden kann. Als Anfänger kann man viel aus einer strukturierten
Einführung lernen, diese nennen mehr Details als wir hier abdecken. Vielleicht
ist eine Liste mit mehr Details und Empfehlungen hilfreich.

Das LaTeX-Team hat [eine Liste an
Büchern](https://www.latex-project.org/help/books/), die hauptsächlich von
Teammitgliedern geschrieben wurden. Erwähnt werden sollte [Lamports offizielle
Anleitung](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)
und der umfassende
[LaTeX Companion](https://www.informit.com/store/latex-companion-9780201362992).

Andere Bücher zum Lernen von LaTeX wären

- [_Guide to
  LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) von Helmut
  Kopka und Patrick Daly: verfügbar als e-Book
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/)
  von Nicola Talbot: verfügbar als kostenloses e-Book oder günstige Printausgabe
- [_Using LaTeX to write a PhD
  thesis_](https://www.dickimaw-books.com/latex/thesis/) von
  Nicola Talbot: verfügbar als kostenloses e-Book oder günstige Printausgabe
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)
  von Stefan Kottwitz: verfügbar als e-Book and Printausgabe
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) von
  Marc van Dongen: verfügbar als e-Book und Printausgabe

## Hilfe finden

Es existieren verschiedene Forums online, in denen LaTeX-Fragen gestellt werden
können; das heute vielleicht bekannteste ist [TeX - LaTeX
StackExchange](https://tex.stackexchange.com). Wenn eine Frage gestellt wird,
ist es normalerweise das Beste, ein gutes Beispiel zu erstellen: etwas, das als
vollständiges Minimalbeispiel bezeichnet wird (im Englischen "minimal working
example", MWE). Das Beispiel muss nicht funktionieren (sonst wäre ja keine Frage
nötig), sondern sollte möglichst verständlich, in sich geschlossen und minimal
sein. Das bedeutet, es sollte genau so viel beinhalten, als dass das Problem
ersichtlich ist, und nicht mehr.

### Wie man ein vollständiges Minimalbeispiel erstellt

Wie erstellt man ein MWE? Am einfachsten ist, man beginnt in etwa so:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Text
\end{document}
```

und fügt Zeile um Zeile hinzu, bis das Problem auftaucht. Man kann auch
versuchen, sein echtes Dokument zu einem MWE zu kürzen, was aber lange dauern
kann.

<p
    class="hint">Wird mehr Text benötigt, um bspw. Seitenumbrüche oder andere Effekte zu zeigen, können Pakete wie <code>lipsum</code> genutzt werden, um Blindtextabsätze bei gleichzeitig kurzer Quelldatei zu erzeugen.</p>

### Logdatei

Eines, was man bereithalten sollte, ist die Logdatei. Sie wird von LaTeX bei
jedem Lauf erzeugt und erhält den gleichen Namen wie die Quelldatei mit der
Dateierweiterung `.log`

<p
    class="hint">Abhängig von der Desktopumgebung kann es erforderlich sein "Dateierweiterungen anzuzeigen", um zu erkennen, welches die Logdatei ist.</p>

In der Logdatei kann immer die vollständige Fehlermeldung betrachtet werden.
LaTeXs Fehlermeldungen versuchen, hilfreich zu sein, sind aber nicht
vergleichbar mit denen eines Textverarbeitungsprogramms.

<p
    class="hint">Manche Editoren erschweren es auch, die vollständige Fehlermeldung zu sehen, was bedeutende Einzelheiten verschleiern kann.</p>

Bei Problemen fragen LaTeX-Experten oft nach einer Kopie der Logdatei.

## Nächste Schritte

Abschließend bieten wir noch eine [Gallerie kleiner Beispiele](./extra-01), die
eine Auswahl an unterschiedlichen Fachbereichen, die nicht in dieser Einführung
abgedeckt wurden, und verschiedene LaTeX-Pakete aus diesen Bereichen zeigt.
