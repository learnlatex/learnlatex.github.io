---
layout: "lesson"
lang: "de"
title: "Literaturverzeichnis und Verweise"
description: "Diese Lektion zeigt die Grundlagen von Literaturdatenbanken. Lerne, wie eigene Datenbanken aufgebaut und im Dokument durch einen der zwei verbreitetsten Prozesse genutzt werden."
toc-anchor-text: "Literaturverzeichnis und Verweise"
toc-description: "Mit Literaturdatenbanken arbeiten."
---

# Literaturverzeichnis und Verweise

<script>
runlatex.preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<span
  class="summary">Diese Lektion zeigt die Grundlagen von Literaturdatenbanken. Lerne, wie eigene Datenbanken aufgebaut und im Dokument durch einen der zwei verbreitetsten Prozesse genutzt werden.</span>

Für Literaturverzeichnisse könnten die Quellen direkt ins Dokument eingefügt
werden, meist werden aber die entsprechenden Informationen aus einer oder mehr
Dateien bezogen. Diese Dateien sind Literaturdatenbanken, die die Informationen
in einem computerlesbaren Format beinhalten. Eine oder mehrere
Literaturdatenbanken zu verwenden erspart manuelle Formatierung und ermöglicht
einfaches Wiederverwenden der Informationen.

## Literaturdatenbanken

Literaturdatenbanken werden normalerweise als "BibTeX-Dateien" bezeichnet und
haben die Dateierweiterung `.bib`. Sie beinhalten einen oder mehrere Einträge,
einen für jede Quelle, und jeder Eintrag besteht aus einer Reihe an Feldern.
Hier ein Beispiel:

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->

Das waren zwei Einträge, einer für einen Artikel und einer für ein Buch; die
wahrscheinlich häufigsten Typen. Jeder Datenbankeintrag beginnt mit `@` und
sämtliche Information ist in einem Paar geschweifter Klammern enthalten.

Die verschiedenen Felder werden in einem Schlüssel-Wert-Format angegeben, mit
Ausnahme des sogenannten "key" ("Schlüssel"): dem Namen der Quelle. Der Name
kann beliebig gewählt werden (es handelt sich nur um ein Label), aber im
Beispiel wurde der Name des Erstautors und die Jahreszahl verwendet, eine häufig
genutzte Konvention.

Die anzugebenden Felder sind vom Eintragstyp abhängig, viele sollten aber
selbstverständlich sein. Im Feld `author` werden die einzelnen Einträge durch
`and` getrennt. Das ist _essentiell_: bei der _Ausgabe_ muss bekannt sein,
welcher Autor wohin gehört. Außerdem sind Teile des Artikeltitels in
zusätzlichen geschweiften Klammern; sie verhindern Änderungen der Groß- und
Kleinschreibung.

Das Bearbeiten von `.bib`-Dateien ist eher anstrengend, weshalb viele spezielle
Editoren verwenden. [JabRef](https://www.jabref.org) ist ein solcher weit
verbreiteter, plattformübergreifender Editor, es gibt aber auch weitere. Falls
die jeweilige Quelle eine DOI (Digital Object Identifier) beinhaltet, könnte
[doi2bib](https://doi2bib.org) für das einfache Beziehen von BibTeX-Einträgen
durchaus interessant sein. Man sollte diese jedoch auf Richtigkeit überprüfen!

Hier verwenden wir die kurze Literaturdatenbank aus obigem Beispiel für weitere
Demonstrationen: wir haben sie als `learnlatex.bib` abgespeichert.

## Informationen aus der Literaturdatenbank übertragen

Um die Informationen in das eigene Dokument zu bekommen, gibt es drei Schritte.
Erstens: Setze das Dokument mit LaTeX, wodurch eine Datei mit einer Liste
der zitierten Quellen angelegt wird. Zweitens: Benutze ein Programm, das die
Informationen aus der Datenbank einliest, diejenigen Einträge, die zitiert
wurden, findet und anschließend sortiert. Drittens: Setze das Dokument erneut,
sodass LaTeX die Informationen verwenden und die entsprechenden Verweise
einfügen kann. Normalerweise werden wenigstens zwei LaTeX-Durchläufe benötigt.

Für den zweiten Schritt sind zwei Systeme weitverbreitet: BibTeX und Biber.
Biber wird nur in Kombination mit dem LaTeX-Paket `biblatex` verwendet, während
BibTeX entweder ganz ohne Pakete oder mit `natbib` verwendet wird.

Ein zweites Programm neben LaTeX auszuführen, wird von unterschiedlichen
Editoren auf unterschiedliche Weise unterstützt. Für unsere Online-Beispiele
werden Skripte im Hintergrund ausgeführt, um alles bei einem Durchlauf zu
erledigen. Der gewählte Editor kann eine ähnliche Funktion auf Knopfdruck haben
oder man muss BibTeX oder Biber manuell zwischen LaTeX-Läufen starten.

Das Format der Zitierungen und des Literaturverzeichnisses ist unabhängig von
der Literaturdatenbank und wird durch 'Stile' festgelegt. Wir werden noch sehen,
dass diese etwas unterschiedlich im BibTeX und im `biblatex` Prozess genutzt
werden, aber generell gilt, dass wir wählen können, wie Verweise gesetzt werden.

## Ablauf mit BibTeX und `natbib`

Während es möglich ist, Verweise in ein LaTeX-Dokument ohne weitere Pakete zu
integrieren, ist diese Herangehensweise einschränkend. Stattdessen verwenden wir
das `natbib` Paket, welches uns erlaubt, verschiedene Verweisarten zu erstellen
und viele Stile bereitstellt.

Die Grundstruktur der Eingabe wird in diesem Beispiel gezeigt.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{natbib}

\begin{document}
Die mathematischen Beispiele stammen aus \citet{Graham1995}, während etwas
Chemie in \citet{Thomas2008} abgedeckt wird.

Einige geklammerte Zitierungen: \citep{Graham1995} und dann
\citep[S.~56]{Thomas2008}.

\citep[Siehe][Seiten~45--48]{Graham1995}

Gemeinsam \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

Man kann sehen, dass die Datenbankeinträge durch die Angebe des jeweiligen
Schlüssels genutzt werden. Das `natbib` Paket bietet textuelle und geklammerte
Zitierstile, `\citet` und `\citep`. Der Literaturverzeichnisstil wird durch
`\bibliographystyle` gewählt; hier wurde `plainnat` genutzt. Das eigentliche
Verzeichnis wird durch den Aufruf `\bibliography` gesetzt, welches auch die
verwendete(n) Datenbank(en) auswählt (eine durch Kommata getrennte Liste).

Seitenzahlen können durch ein optionales Argument hinzugefügt werden. Werden
zwei optionale Argumente genutzt, wird das erste als Notiz vor dem Eintrag
und das zweite nachfolgend für Seitenzahlen genutzt.

Die Einstellungen nutzen einen Autor-Jahr-Stil, aber numerische Verweise sind
auch nutzbar. Dies wird erreicht, indem die `numbers` Option der `natbib` Zeile
hinzugefügt wird.

## Ablauf mit `biblatex`

Das Paket `biblatex` funktioniert etwas anders als `natbib`. Die Datenbanken
werden in der Präambel gewählt und im Textteil ausgegeben. Hierfür gibt es
einige neue Befehle.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib}

\begin{document}
Die mathematischen Beispiele stammen aus \autocite{Graham1995}.

Weitere Verweise: \parencite{Graham1995} oder \textcite{Thomas2008} oder sogar
\citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[Siehe][45-48]{Graham1995}

Gemeinsam \autocite{Graham1995,Thomas2008}

\printbibliography
\end{document}
```

Man beachte, dass `\addbibresource` den vollständigen Dateinamen _benötigt_,
während für `\bibliography` mit `natbib` die Endung `.bib` ausgelassen wurde.
Außerdem verwendet `biblatex` längere Befehlsnamen, die aber recht eingängig
sind.

Kurze Angaben können erneut durch optionale Argumente vor dem eigentlichen
Verweis eingefügt werden. Seitenzahlen müssen nicht mit `S.` oder ähnlichem
angeführt werden, `biblatex` fügt dies automatisch hinzu (abhängig von der
Dokumentensprache, siehe [Lektion 6](lesson-06)).

In `biblatex` wird der Zitierstil während des Ladens des Pakets ausgewählt. Hier
wurde `authoryear` verwendet, es gibt auch `numeric` und viele weitere Stile.

## Zwischen BibTeX und `biblatex` auswählen

Obwohl sowohl BibTeX als auch `biblatex` die Informationen aus einer
BibTeX-Datei erhalten und strukturell ähnliche Ausgaben im Dokument erzeugen,
nutzen sie völlig unterschiedliche interne Abläufe. Das führt zu Unterschieden
zwischen den beiden Methoden, die die Wahl nach dem besser geeigneten Werkzeug
erleichtern können.

Bei der Nutzung von BibTeX wird der Literaturverzeichnisstil letztlich durch
eine `.bst` Datei, die durch den `\bibliographystyle` Befehl ausgewählt wird,
entschieden. `biblatex` verwendet keine `.bst` Dateien, sondern ein anderes
System. Wenn eine Vorlage, die mit einer `.bst` Datei geliefert wurde, oder
extra für das Projekt eine solche erhalten wurde, muss BibTeX statt `biblatex`
verwendet werden.

Der Ansatz, der von `biblatex` genutzt wird, ermöglicht es, die Ausgabe der
Verweise und des Literaturverzeichnisses durch LaTeX-Befehle aus der Präambel
heraus zu bestimmen. Modifikationen an BibTeXs `.bst` Stilen erfordert hingegen
das Bearbeiten dieser externen Dateien und Kenntnisse der
BibTeX-Programmiersprache. Verallgemeinernd lässt sich sagen, dass `biblatex`
einfacher anzupassen ist.

In `biblatex` ist es generell einfacher, umfassende Zitierstile mit einer großen
Auswahl an Zitierbefehlen zu erstellen. Das Paket bietet auch mehr
kontextabhängige Funktionen. Grob gesagt sind solche Möglichkeiten für die Stile
vieler MINT-Fächer nicht notwendig, aber für die Anwendung komplexer Stile in
den Gesellschaftswissenschaften interessant.

BibTeX kann nur US-ASCII Zeichen korrekt sortieren und benötigt Behelfslösungen
für das Sortieren auf Basis von US-ASCII anderer Zeichen. Mit Biber bietet
`biblatex` volle Unterstützung für Unicode. Daher ist `biblatex` oft die bessere
Wahl, wenn nicht nach US-ASCII oder englischen Regeln sortiert werden soll.

Da BibTeX wesentlich länger im Umlauf ist als `biblatex`, ist es etablierter,
weshalb viele Herausgeber und Journale Literaturverzeichnisse entsprechend des
BibTeX-Ablaufs akzeptieren. Diese Herausgeber können oder werden keine
Einreichungen, die `biblatex` verwenden, akzeptieren.

Zusammenfassend lässt sich sagen: Überprüfe die Richtlinien für
Autoren/Einreichungen, wenn geplant ist, in einem Journal oder bei einem
Herausgeber zu veröffentlichen. Wird eine `.bst` Datei bereitgestellt, muss
BibTeX verwendet werden. Wenn einfache Literaturverzeichnisse und Verweise und
ausschließlich englische US-ASCII-Sortierung benötigt wird, reicht BibTeX aus.
Werden komplexere Stile, nicht-englische Sortierung oder einfachere
Anpassungsmöglichkeiten verlangt, ist `biblatex` die bessere Wahl.

## Übung

Versuche, sowohl das `natbib` als auch das `biblatex` Beispiel zu verwenden. Man
muss LaTeX, BibTeX, LaTeX, LaTeX bzw. für `biblatex` LaTeX, Biber, LaTeX,
LaTeX ausführen. Finde heraus, wie dies im gewählten Editor bewerkstelligt wird,
oder teste die Automatisierung in Overleaf oder LaTeX Online.

Teste, was passiert, wenn neue Datenbankeinträge und Verweise hinzugefügt
werden. Füge einen neuen Eintrag hinzu und finde heraus, wie er ausgegeben wird.
Experimentiere mit `natbib`s `numeric` und `biblatex`s `style=numeric` Option.
