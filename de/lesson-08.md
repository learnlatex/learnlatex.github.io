---
layout: "lesson"
lang: "de"
title: "Tabellen"
description: "Diese Lektion zeigt, wie Tabellen in LaTeX erstellt werden, die Spaltenausrichtung verändert wird, Linien hinzugefügt und Zellen verbunden werden."
toc-anchor-text: "LaTeX Tabellen"
toc-description: "Tabellengrundlagen"
---

# Tabellen

<span
  class="summary">Diese Lektion zeigt, wie Tabellen in LaTeX erstellt werden, die Spaltenausrichtung verändert wird, Linien hinzugefügt und Zellen verbunden werden.</span>

Tabellen werden in LaTeX mit der `tabular` Umgebung gesetzt. Diese Lektion setzt
die Verwendung des Pakets `array` voraus, das LaTeXs Funktionsumfang für
Tabellen erweitert und ausschließlich aus historischen Gründen nicht im
LaTeX-Kern integriert ist. Platziere also das Folgende in deiner Präambel und
wir können starten:

```latex
\usepackage{array}
```
{: .noedit :}

Um Tabellen mit der `tabular` Umgebung zu setzen, müssen wir LaTeX mitteilen,
wie viele Spalten benötigt werden und wie diese auszurichten sind. Hierzu werden
in einem obligatorischen Argument &ndash; häufig Tabellenpräambel genannt
&ndash; der `tabular` Umgebung einzelne Spalten durch aus nur einem Buchstaben
bestehenden Namen, den sogenannten Präambeltokens, definiert. Die verfügbaren
Spaltentypen sind:

<!-- don't line wrap this table, markdown seems to not support this -->

| Typ        | Beschreibung |
| ---        |:-- |
| `l`        | linksbündige Spalte |
| `c`        | zentrierte Spalte |
| `r`        | rechtsbündige Spalte |
| `p{breite}` | eine Spalte der festen Breite `breite`; der Text wird automatisch umgebrochen und im Blocksatz ausgegeben |
| `m{breite}` | wie `p`, allerdings mit vertikaler Zentrierung zur übrigen Zeile |
| `b{breite}` | wie `p`, aber an der Unterkante ausgerichtet |
| `w{ausrichtung}{breite}` | gibt den Inhalt der festen Breite `breite` aus, bei zu großem Inhalt überlappt der Inhalt die Spaltenbreite. Die horizontale Ausrichtung kann aus `l`, `c` und `r` ausgewählt werden. |
| `W{ausrichtung}{breite}` | wie `w`, es wird allerdings eine Warnung ausgegeben, wenn der Inhalt breiter als `breite` sein sollte. |

Zusätzlich sind noch weitere Präambeltokens verfügbar, die zwar keine Spalte
definieren, aber dennoch nützlich sein könnten:

<!-- don't line wrap this table, markdown seems to not support this -->

| Typ  | Beschreibung |
| ---  | :-- |
| `*{num}{string}` | wiederholt `string` `num`-mal in der Präambel. Hierdurch können mehrere identische Spalten definiert werden. |
| `>{decl}` | hierdurch wird `decl` vor den Inhalten jeder Zelle in der nachfolgenden Spalte platziert (bspw. nützlich, um eine andere Schriftart in dieser Spalte zu verwenden) |
| `<{decl}` | hierdurch wird `decl` nach den Inhalten jeder Zelle in der vorigen Spalte platziert |
| <span>`|`</span>  | fügt eine senkrechte Linie an dieser Stelle ein |
| `@{decl}` | ersetzt den Abstand zwischen zwei Spalten durch `decl` |
| `!{decl}` | fügt `decl` in der Mitte des Abstands zwischen zwei Spalten ein |

Diese zwei Tabellen listen alle Spaltentypen und Präambeltokens von LaTeX und
dem `array` Paket auf. Einige weitere Spaltentypen von unterschiedlichen Paketen
werden in der [Seite mit weiteren Details](more-08) vorgestellt.

Die Spalten `l`, `c` und `r` haben die natürliche Breite der breitesten Zelle
dieser Spalte. Jede Spalte muss deklariert werden, wenn also drei zentrierte
Spalten benötigt werden, verwendet man `ccc` in der Tabellenpräambel.
Leerzeichen werden ignoriert, `c c c` wäre also identisch.

Innerhalb der Tabelle werden Spalten durch ein Und-Zeichen `&` getrennt und neue
Zeilen mit `\\` begonnen.

Alles Nötige für eine erste Tabelle ist bereit. Im folgenden Codebeispiel wurden
`&` und `\\` untereinander ausgerichtet. Das ist in LaTeX nicht nötig, hilft
aber, die Quellen zu lesen.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Tier   & Nahrung & Größe  \\
  Hund   & Fleisch & mittel \\
  Pferd  & Heu     & groß   \\
  Frosch & Fliegen & klein  \\
\end{tabular}
\end{document}
```

<!-- {% endraw %} -->

Wenn eine Spalte viel Text enthält, wird es schwer, diese mit `l`, `c` oder `r`
richtig zu setzen. Beobachte, was in diesem Beispiel passiert:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Tier  & Beschreibung \\
  Hund  & Der Hund ist ein Mitglied der Gattung Canis, welche Teil der Familie
          Canidae ist, und das weitverbreitetste Landraubtier. \\
  Katze & Katzen sind eine domestizierte Art kleiner fleischfressender
          Säugetiere. Sie ist die einzige domestizierte Art der Familie Felidae
          und wird häufig als Hauskatze bezeichnet, um sie von den wildlebenden
          Mitglieder dieser Familie abzugrenzen. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Das Problem ist, dass die `l`-Spalten den Inhalt in einer einzigen Zeile mit der
natürlichen Breite ausgibt, auch wenn ein Seitenrand im Weg sein sollte. Um das
Problem zu beheben, kann man `p`-Spalten verwenden. Diese geben die Inhalte als
Absätze mit bestimmter Breite, die als Argument angegeben wird, aus und richten
sie vertikal am oberen Rand aus &ndash; was in der Regel erwünscht ist.
Vergleiche das Resultat von oben mit folgendem Beispiel:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Tier  & Beschreibung \\
  Hund  & Der Hund ist ein Mitglied der Gattung Canis, welche Teil der Familie
          Canidae ist, und das weitverbreitetste Landraubtier. \\
  Katze & Katzen sind eine domestizierte Art kleiner fleischfressender
          Säugetiere. Sie ist die einzige domestizierte Art der Familie Felidae
          und wird häufig als Hauskatze bezeichnet, um sie von den wildlebenden
          Mitglieder dieser Familie abzugrenzen. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Wenn die Tabelle mehrere Spalten gleichen Typs hat, ist es anstrengend so viele
Spaltendefinitionen in der Präambel aufzulisten. Man kann sich dies durch die
Verwendung von `*{num}{string}` vereinfachen, wodurch `string` `num`-mal
wiederholt wird. `*{6}{c}` ist also identisch zu `cccccc`. Um zu zeigen, dass
das wirklich funktioniert, ist hier die erste Tabelle mit dieser Syntax:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Tier   & Nahrung & Größe  \\
  Hund   & Fleisch & mittel \\
  Pferd  & Heu     & groß   \\
  Frosch & Fliegen & klein  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Linien hinzufügen

Ein kleiner Rat bevor wir uns mit Linien beschäftigen: Man sollte Linien in
Tabellen wirklich sparsam verwenden, außerdem sehen senkrechte Linien
unprofessionell aus. Tatsächlich sollte für professionelle Tabellen keine der
Standardlinien von LaTeX verwendet werden; stattdessen sollte man sich mit dem
Paket `booktabs` vertraut machen, weshalb wir dieses auch zuerst behandeln. Der
Vollständigkeit halber werden die Standardlinien im Abschnitt [mit mehr
Details](more-08) behandelt.

`booktabs` stellt vier verschiedene Linien bereit. Jeder dieser Befehle muss als
erstes in einer Zeile verwendet werden oder direkt nach einer anderen Linie.
Drei der vier Befehle sind: `\toprule`, `\midrule` und `\bottomrule`. Durch die
Namen sollte die vorgesehene Position ersichtlich werden:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Tier   & Nahrung & Größe  \\
  \midrule
  Hund   & Fleisch & mittel \\
  Pferd  & Heu     & groß   \\
  Frosch & Fliegen & klein  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Der vierte `booktabs` Linienbefehl ist `\cmidrule`. Hierdurch können Linien
gezogen werden, die nicht die gesamte Breite der Tabelle, sondern nur einen
Spaltenbereich überspannen. Der Spaltenbereich wird als Zahlenspanne angegeben:
`{`_Zahl_`-`_Zahl_`}`. Auch wenn die Linie nur für eine Spalte gezogen werden
soll, muss ein Bereich angegeben werden (mit zwei identischen Zahlen).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Tier   & Nahrung & Größe  \\
  \midrule
  Hund   & Fleisch & mittel \\
  \cmidrule{1-2}
  Pferd  & Heu     & groß   \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  Frosch & Fliegen & klein  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\cmidrule` hat eine weitere nützliche Funktion. Sie können durch ein optionales
Argument in runden Klammern an beiden Enden gekürzt werden:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Tier   & Nahrung & Größe  \\
  \midrule
  Hund   & Fleisch & mittel \\
  \cmidrule{1-2}
  Pferd  & Heu     & groß   \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  Frosch & Fliegen & klein  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Sie könnten bereits erraten haben, dass `r` und `l` angeben, dass die Linie am
**r**echten oder **l**inken Ende gekürzt wird.

Manchmal wäre eine Linie eine zu deutliche Abgrenzung zweier Zeilen, aber um die
Tabelle übersichtlich zu gestalten, möchte man dennoch zwei Zeilen voneinander
abgrenzen. Hierzu kann `\addlinespace` verwendet werden, um einen kleinen
Abstand einzufügen.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Tier  & Beschreibung \\
  \midrule
  Hund  & Der Hund ist ein Mitglied der Gattung Canis, welche Teil der Familie
          Canidae ist, und das weitverbreitetste Landraubtier. \\
  \addlinespace
  Katze & Katzen sind eine domestizierte Art kleiner fleischfressender
          Säugetiere. Sie ist die einzige domestizierte Art der Familie Felidae
          und wird häufig als Hauskatze bezeichnet, um sie von den wildlebenden
          Mitglieder dieser Familie abzugrenzen. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Zellen zusammenfügen

In LaTeX können Zellen horizontal durch den Befehl `\multicolumn` verbunden
werden. Es muss der erste Inhalt einer Zelle sein. `\multicolumn` benötigt drei
Argumente:

1. Die Anzahl an Zellen, die zusammengeführt werden sollen
2. Die Ausrichtung der verbundenen Zelle
3. Der Inhalt der Zelle

Für die Ausrichtung kann alles verwendet werden, was in einer Tabellenpräambel
möglich wäre, allerdings _nur ein einzelner Spaltentyp_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Tier          & Nahrung & Größe  \\
  \midrule
  Hund          & Fleisch & mittel \\
  Pferd         & Heu     & groß   \\
  Frosch        & Fliegen & klein  \\
  Wolpertinger  & \multicolumn{2}{c}{unbekannt} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\multicolumn` kann auch für eine einzelne Zelle verwendet werden, um die
Definition einer Spalte aus der Tabellenpräambel zu umgehen. Im folgenden
Beispiel wird dies verwendet, um die Kopfzeile der Tabelle zu zentrieren:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Tier} & \multicolumn{1}{c}{Nahrung} & \multicolumn{1}{c}{Größe} \\
  \midrule
  Hund          & Fleisch & mittel \\
  Pferd         & Heu     & groß   \\
  Frosch        & Fliegen & klein  \\
  Wolpertinger  & \multicolumn{2}{c}{unbekannt} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Vertikal Zellen zusammenzufassen, wird von LaTeX nicht unterstützt.
Normalerweise reicht es aus, Zellen leer zu lassen, um dem Leser die richtige
Bedeutung zu vermitteln, ohne Zellen explizit über Zeilen hinweg
zusammenzufassen.

<!-- {% raw %} -->
```latex
\document{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Gruppe          & Tier    & Größe  \\
  \midrule
  Pflanzenfresser & Pferd   & groß   \\
                  & Reh     & mittel \\
                  & Hase    & klein  \\
  \addlinespace
  Fleischfresser  & Hund    & mittel \\
                  & Katze   & klein  \\
                  & Löwe    & groß   \\
  \addlinespace
  Allesfresser    & Krähe   & klein  \\
                  & Bär     & groß   \\
                  & Schwein & mittel \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Übung

Experimentiere vom einfachen Tabellenbeispiel ausgehend. Probiere
unterschiedliche Ausrichtungen mit den `l`, `c` und `r` Spaltentypen aus. Was
passiert, wenn zu wenige Zellen in einer Spalte verwendet werden? Was bei zu
vielen? Experimentiere mit `\multicolumn`, um mehrere Zellen in einer Spalte zu
verbinden.
