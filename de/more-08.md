---
layout: "lesson"
lang: "de"
title: "Mehr zu: Tabellen"
description: "Diese Lektion zeigt weitere Möglichkeiten, Tabellen anzupassen, indem Spalten gestaltet und Abstände und Linien verändert werden, sowie weitere Pakete, die Tabellenfunktionalitäten erweitern."
toc-anchor-text: "Mehr zu: Tabellen"
---

## Die anderen Präambeltokens

Da die [Hauptlektion](lesson-08) nicht alle verfügbaren Präambeltokens
vorgestellt hat, werden hier noch weitere Beispiele gezeigt. Ein erneuter Blick
auf die Tabellen am Anfang der Lektion mit der Übersicht über die verfügbaren
Präambeltokens bietet sich hier an. Die kurze Beschreibung dort sollte
ausreichen, um die Spaltentypen `m`, `b`, `w` und `W` anhand der Typen `l`, `c`,
`r` und `p` zu verstehen. Falls nicht, sollten Sie jetzt ein wenig mit diesen
experimentieren. Was noch fehlt sind die durchaus nützlichen Präambeltokens `>`,
`<`, `@`, `!` und `|`.

### Eine Spalte gestalten

Da `>` und `<` verwendet werden können, Dinge vor und nach den Inhalten einer
Zelle in einer Spalte zu platzieren, können dort auch weitere Befehle, die das
Aussehen eine Spalte verändern, verwendet werden. Möchte man zum Beispiel die
erste Spalte kursiv setzen und einen Doppelpunkt hinter dieser ausgeben, kann
das Folgende genutzt werden:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
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

`\itshape` setzt den folgenden Text kursiv, die Auswirkungen werden aber durch
die Tabellenzelle 'begrenzt'. Manuelle Schriftformatierung werden wir [in
einigen Lektionen](lesson-11) behandeln.

Vielleicht möchte man nicht, dass die erste Zelle der Spalte betroffen ist, da
es sich um die Kopfzeile handelt. Hier kann `\multicolumn` genutzt werden.
Bedenke, der Befehl kann genutzt werden, um die Ausrichtung einer einzelnen
Zelle zu verändern.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Tier} & Nahrung & Größe  \\
  \midrule
  Hund   & Fleisch & mittel \\
  Pferd  & Heu     & groß   \\
  Frosch & Fliegen & klein  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Den Abstand zwischen zwei Spalten beeinflussen

Normalerweise umgibt LaTeX jede Spalte auf beiden Seiten mit ein wenig Abstand,
um sie zu trennen. Dieser Abstand wird durch die Länge `\tabcolsep` definiert.
Da jede Spalte beidseitig umgeben wird, wird der Abstand eines `\tabcolsep` an
beiden äußeren Rändern der Tabelle erhalten und zwischen zwei Spalten
`2\tabcolsep` &ndash; einer von jeder Spalte. Die Abstände können durch
`\setlength` beeinflusst werden:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\setlength\tabcolsep{1cm}

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

Dieser Abstand kann mittels `@` durch willkürliches Material ersetzt werden.
Hierdurch wird der Abstand zwischen zwei Spalten oder am äußeren Rand entfernt
und stattdessen zwischen den Spalten das eingefügt, was als Argument angegeben
wird:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Tier   & Nahrung & Größe  \\
  Hund   & Fleisch & mittel \\
  Pferd  & Heu     & groß   \\
  Frosch & Fliegen & klein  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(Wir werden `\hspace` [in Kürze](lesson-11) wiedersehen; vielleicht kann man
erraten, dass hierdurch horizontaler Abstand eingefügt wird.)

Der `!` Präambeltoken bewirkt Ähnliches. Der Unterschied ist, dass der Inhalt
des Argument in der Mitte des Abstands zwischen Spalten _hinzugefügt_ wird.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Tier   & Nahrung & Größe  \\
  Hund   & Fleisch & mittel \\
  Pferd  & Heu     & groß   \\
  Frosch & Fliegen & klein  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Senkrechte Linien

Manchmal muss man senkrechte Linien verwenden.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Tier   & Nahrung & Größe  \\[2pt]
  Hund   & Fleisch & mittel \\
  Pferd  & Heu     & groß   \\
  Frosch & Fliegen & klein  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Man kann sehen, dass `|` ähnlich zu `!{decl}` funktioniert; eine senkrechte
Linie wird zwischen den Spalten eingefügt und lässt den Abstand bestehen. Es
gibt allerdings einen großen Nachteil; senkrechte Linien funktionieren nicht in
zusammenarbeit mit den horizontalen Linien von `booktabs`. Hier können die
Standardlinien von LaTeX helfen, es sind `\hline` (entspricht `\toprule`,
`\midrule` und `\bottomrule`) und `\cline` (das sich wie `\cmidrule` einsetzen
lässt). Wie bereits gezeigt, überspannen senkrechte Linien den Abstand, der im
optionalen Argument von `\\` angegeben wird.

## `booktabs` Linien anpassen

Alle Linienbefehle aus `booktabs` sowie `\addlinespace` unterstützen ein
optionales Argument in eckigen Klammern, das die Linienbreite angibt. Außerdem
kann auch das Kürzen der Linien in `\cmidrule` durch eckige Klammern hinter `r`
und `l` beeinflusst werden.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Tier   & Nahrung & Größe  \\ \midrule[1pt]
  Hund   & Fleisch & mittel \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  Pferd  & Heu     & groß   \\
  Frosch & Fliegen & klein  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Numerische Ausrichtung in Spalten

Die Ausrichtung von Zahlen in einer Tabelle kann durch den Spaltentyp `S` des
Pakets `siunitx` vorgenommen werden.

Ein einfaches Beispiel mit zwei ausgerichteten Spalten wäre:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{booktabs}
\usepackage{siunitx}

\begin{document}
\begin{tabular}{SS}
\toprule
{Werte} &  {Weitere Werte} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```

Man beachte, dass nicht-numerische Zellen "geschützt" werden müssen, indem sie
in geschweiften Klammern angegeben werden.

Das `siunitx` Paket bietet viele Möglichkeiten, Zahlen auf verschiedene Weisen
zu formatieren; siehe die [Paketdokumentation](https://texdoc.org/pkg/siunitx).

## Die Gesamttabellenbreite angeben

Die Breite einer `tabular` Umgebung wird automatisch aufgrund der Inhalte der
Tabelle bestimmt. Es gibt zwei Mechanismen, die Gesamtbreite zu bestimmen.

Die Tabellenbreite durch die nachfolgenden Mechanismen festzulegen (notfalls
durch Verwendung einer anderen Schriftgröße wie `\small`), ist fast immer der
Skalierung einer Tabelle mit `\resizebox` oder ähnlichen Befehlen vorzuziehen,
da letztere zu inkonsistenten Schriften und Linienbreiten führen.

### `tabular*`

Die `tabular*` Umgebung erwartet ein zusätzliches _Breiten_-Argument das die
Gesamtbreite der Tabelle vorgibt. Streckbare Abstände müssen der Tabelle durch
den Befehl `\extracolsep` hinzugefügt werden. Dieser Abstand ab diesem Punkt in
der Tabellenpräambel zwischen allen Spalten verwendet. Fast immer verwendet man
ihn mit `\fill`, einem speziellen Abstand, der so stark wie nötig gestreckt
wird.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

Die `tabularx` Umgebung, die vom gleichnamigen Paket bereitgestellt wird, hat
die gleiche Syntax wie `tabular*`, allerdings wird anstatt dem Abstand zwischen
Spalten die Breite der Spalten durch den neuen Spaltentyp `X` angepasst. Dies
entspricht der Verwendung von `p{...}` mit automatisch gewählter Breite.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

Anders als die bisher behandelten Umgebungen muss `tabularx` die Tabellen
mehrfach setzen, um die richtigen Breiten festzustellen. Dies führt zu mehreren
Einschränkungen der Umgebung, siehe die
[Paketdokumentation](https://texdoc.org/pkg/tabularx).

## Mehrseitige Tabellen

Eine `tabular` Umgebung resultiert in einer nicht umbrechbaren Box, muss also
klein genug sein, um auf eine Seite zu passen, und wird oft in der Gleitumgebung
`table` verwendet.

Verschiedene Pakete stellen Varianten ähnlicher Syntax bereit, die
Seitenumbrüche erlauben. Wir zeigen hier das `longtable` Paket:


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}

\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{A Long Table}\\
Linke Seite & Rechte Seite \\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Eintrag & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
Ein breiterer Eintrag & b\\  
\end{longtable}
\end{document}
```

`longtable` verwendet die gleichen Spaltenbreiten über alle Seiten der Tabelle
hinweg; um dies zu erreichen werden allerdings mehrere LaTeX-Läufe benötigt,
damit breitere Einträge auf späteren Seiten die Spaltenbreiten auf allen Seiten
beeinflussen können.

## Tabellennotizen

Relativ häufig werden Fußnotenmarkierungen in Tabellen benötigt, um auf Notizen
unter der Tabelle zu verweisen. Das `threeparttable` Paket vereinfacht das
Markup solcher Tabellen und bewirkt, dass die Fußnoten in der gleichen Breite
wie die Tabelle gesetzt werden. Für alle Details sei auf die
[Paketdokumentation](https://texdoc.org/pkg/threeparttable) verwiesen, ein
einfaches Beispiel sei allerdings hier gezeigt.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{threeparttable}

\begin{document}
\begin{table}
\begin{threeparttable}
   \caption{An Example}
   \begin{tabular}{ll}
    An entry & 42\tnote{1}\\
    Another entry & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] the first note.
   \item [2] the second note.
   \end{tablenotes}
\end{threeparttable}
\end{table}
\end{document}
```

## Schmale Spalten setzen

Die voreingestellten Einstellungen zu Zeilenumbrüchen nehmen lange Zeilen an, um
Zeilenumbrüche flexibel wählen zu können. Im folgenden Beispiel werden einige
mögliche Ansätze gezeigt, wie in schmalen Spalten gute Ergebnisse erzielt werden
können. In der ersten Tabelle werden die Zwischenwortabstände gestreckt und TeX
warnt vor "Underfull lines" (zu kurzen Zeilen). Durch `\raggedright` werden
solche Probleme häufig behoben, es könnte allerdings zu ausgefranst aussehen.
Der Befehl `\RaggedRight` des `ragged2e` Pakets bietet einen Kompromiss; Zeilen
können im Flattersatz gesetzt werden, und Silbentrennung wird, wo benötigt,
verwendet.

Man beachte die Verwendung von `\arraybackslash`, welche die Definition von `\\`
zurücksetzt, damit Tabellenzeilen beendet werden können.

Eine weitere Alternative wird in der vierten Tabelle gezeigt, in der eine
kleinere Schrift verwendet wird, wodurch die Zeilen im Verhältnis zum
Schriftgrad weniger schmal sind.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{ragged2e}

\begin{document}
\begin{table}
  \begin{tabular}[t]{lp{3cm}}
    Eins & Ein langer Text in einem schmalen Absatz mit weiterem Beispieltext.\\
    Zwei & Ein anderer langer Text in einem schmalen Absatz mit einigen schwer
           silbentrennbaren Wörtern.
  \end{tabular}%
  \begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
    Eins & Ein langer Text in einem schmalen Absatz mit weiterem Beispieltext.\\
    Zwei & Ein anderer langer Text in einem schmalen Absatz mit einigen schwer
           silbentrennbaren Wörtern.
  \end{tabular}%
  \begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
    Eins & Ein langer Text in einem schmalen Absatz mit weiterem Beispieltext.\\
    Zwei & Ein anderer langer Text in einem schmalen Absatz mit einigen schwer
           silbentrennbaren Wörtern.
  \end{tabular}%

  \footnotesize
  \begin{tabular}[t]{lp{3cm}}
    Eins & Ein langer Text in einem schmalen Absatz mit weiterem Beispieltext.\\
    Zwei & Ein anderer langer Text in einem schmalen Absatz mit einigen schwer
           silbentrennbaren Wörtern.
  \end{tabular}%
\end{table}
\end{document}
```

## Neue Spaltentypen definieren

Wie bereits in der [Hauptlektion](lesson-08) gezeigt, erlaubt das `array` Paket
Konstrukte wie `>{\bfseries}c`, um eine fettgesetzte zentrierte Spalte zu
verwenden. Oft ist es komfortabel einen neuen Spaltentyp zu definieren, um
solche Konstrukte zusammenzufassen, bspw. erlaubt

```latex
\newcolumntype{B}{>{\bfseries}c}
```
die Verwendung von `B` in der Tabellenpräambel für eine fettgesetzte zentrierte
Spalte.

## Vertikale Tricks

Anstatt eine Zelle über mehrere Zeilen zu spannen, ist es häufig besser, eine
Zeile zu verwenden, in der manche Zellen vertikal durch verschachtelte `tabular`
Umgebungen in mehrere Zeilen aufgeteilt werden.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Der Inhalt & ist & hier \\
  Der Inhalt & ist & hier \\
  Der Inhalt & ist & hier \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Die vertikale Ausrichtung kann durch ein optionales Argument der `tabular`
Umgebung bestimmt werden; unterstützt werden `t`, `c` oder `b` für oben,
zentriert oder unten ausgerichtet, verwendet wird es wie folgt:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Der Inhalt & ist & hier \\
  Der Inhalt & ist & hier \\
  Der Inhalt & ist & hier \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Zeilenabstände in Tabellen

In der Hauptlektion haben wir bereits `\addlinespace` aus dem `booktabs` Paket
demonstriert, um zusätzlichen Abstand zwischen zwei Zeilen einzufügen.

Es gibt zwei allgemeinere Parameter, die Zeilenabstände bestimmen,
`\arraystretch` und `\extrarowheight` (letzterer stammt aus dem `array` Paket).

```latex
\renewcommand\arraystretch{1.5}
```

wird den Zeilendurchschuss um 50% erhöhen.

Häufig, gerade bei Verwendung von `\hline`, ist es besser, die Höhe einer Zeile
zu verändern, ohne die Tiefe (die Länge unterhalb der Grundlinie) zu erhöhen.
Das folgende Beispiel zeigt die Verwendung von `\extrarowheight`.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{array}

\begin{document}
\begin{center}
  \begin{tabular}{cc}
    \hline
    Quadrat & $x^2$\\
    \hline
    Kubik   & $x^3$\\
    \hline
  \end{tabular}
\end{center}

\begin{center}
  \setlength\extrarowheight{2pt}
  \begin{tabular}{cc}
    \hline
    Quadrat & $x^2$\\
    \hline
    Kubik   & $x^3$\\
    \hline
  \end{tabular}
\end{center}
\end{document}
```
