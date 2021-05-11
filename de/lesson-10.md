---
layout: "lesson"
lang: "de"
title: "Mathematik"
description: "Diese Lektion präsentiert LaTeXs Mathematikmodus und zeigt, wie Formeln in einer Zeile und als alleinstehende Gleichung eingefügt werden können, die Erweiterungen des amsmath Pakets und wie die Schriftarten im Mathematikmodus gewechselt werden können."
toc-anchor-text: "Mathematik"
toc-description: "Mathematikmodus und mathematische Notation"
---

# Mathematik

<span
  class="summary">Diese Lektion präsentiert LaTeXs Mathematikmodus und zeigt, wie Formeln in einer Zeile und als alleinstehende Gleichung eingefügt werden können, die Erweiterungen des amsmath Pakets und wie die Schriftarten im Mathematikmodus gewechselt werden können.</span>

Komplexe mathematische Ausdrücke zu setzen ist eine der größten Stärken LaTeXs.
Formeln können mit logischen Auszeichnungen im sogenannten Mathematikmodus
eingegeben werden.

## Mathematikmodus

Im Mathematikmodus werden Leerzeichen ignoriert und die korrekten Abstände
zwischen Zeichen (fast immer) automatisch eingefügt.

Es gibt zwei Formen des Mathematikmodus:

* im Text/in der Zeile (inline)
* als alleinstehende Gleichung (display)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\begin{document}
Ein Satz mit Mathematik im Text: $y = mx + c$.
Ein zweiter Satz mit Mathematik in der Zeile: $5^{2}=3^{2}+4^{2}$.

Ein zweiter Absatz mit alleinstehender Gleichung.
\[
  y = mx + c
\]
Man beachte, dass der Absatz nach der Gleichung fortgeführt wird.
\end{document}
```

Die LaTeX-typische Eingabe von mathematischen Ausdrücken kann auch andernorts
beobachtet werden, bspw. in MathJax für den Satz von Gleichungen in Webseiten.
Solche andere Systeme verwenden oft LaTeXs Syntax mit kleinen Abweichungen, da
sie nicht wirklich LaTeX verwenden.

<p
  class="hint">Unsere Beispiele verwenden alle <i>korrekten</i> LaTeX-Code.
  Falls an anderer Stelle abweichender Code gefunden wird, könnte es daran
  liegen, dass dieses andere Beispiel nicht tatsächlich LaTeX verwendet.</p>

### Mathematikmodus im Text und mathematische Notation

Wie oben bereits gesehen, wird der Inline-Mathematikmodus durch zwei
Dollarsymbole begrenzt (`$...$`). Es ist auch möglich, die Notation `\(...\)` zu
nutzen. Einfache Ausdrücke können ohne spezielle Auszeichnungen eingegeben
werden und die Ausgabe wird in kursiven Zeichen mit guten Abständen erfolgen.

Im Mathematikmodus im Text wird die vertikale Größe von Ausdrücken klein
gehalten, damit soweit möglich Formeln die Zeilenabstände eines Absatzes nicht
beeinflussen.

_Sämtliche_ mathematische Zeichen sollten als Mathematik ausgezeichnet werden,
selbst wenn es sich nur um ein einzelnes Zeichen handelt. Verwende `... $2$ ...`
und nicht `... 2 ...`, wenn sonst eine negative Zahl benötigt und deshalb
`... $-2$ ...` eingegeben wird, könnten für die Ziffern unterschiedliche
Schriften verwendet werden (abhängig von den genutzten Schriften und der
Dokumentenklasse). Es sollte auch darauf geachtet werden, nicht versehentlich
Ausdrücke mit Konstrukten des Mathematikmodus aus anderen Quellen direkt zu
kopieren, bspw. Texte in denen Geldbeträge mit `$` oder Dateinamen mit `_`
vorkommen (die im Text mit `\$` und `\_` eingegeben werden können).

Hoch- und tiefgestellte Ausdrücke können einfach hinzugefügt werden; diese
werden mit `^` und `_` ausgezeichnet.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Hochgestellter Exponent $a^{b}$ und tiefgestellter Index $a_{b}$.
\end{document}
```

(Manchmal sieht man Beispiele, in denen einzelne hoch- oder tiefgestellte
Symbole ohne geschweifte Klammern angegeben werden, dies ist jedoch nicht die
offizielle Syntax und kann zu falschen Ergebnissen führen; verwende immer
geschweifte Klammern)

Es gibt _viele_ spezielle Befehle für den Mathematikmodus. Manche davon sind
simpel, wie z.B. `\sin` und `\log` für den Sinus und Logarithmus oder `\theta`
für den griechischen Buchstaben.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Etwas Mathematik: $y = 2 \sin \theta^{2}$.
\end{document}
```

Wir können hier nicht sämtliche Mathematikbefehle, die LaTeX zur Verfügung
stellt, behandeln, es gibt aber diverse Quellen online, die diese auflisten.
Gezielt Befehle für mathematische Symbole können auf
[Detexify](https://detexify.kirelabs.org/classify.html) gesucht werden.


### Alleinstehende Gleichungen

Für den Display-Mathematikmodus können die gleichen Befehle wie für den Satz in
der Zeile verwendet werden. Alleinstehende Gleichungen werden standardmäßig
zentriert gesetzt und sind für größere Gleichungen gedacht, die Teil eines
Absatzes sind. Man beachte, dass es nicht erlaubt ist, einen Absatz innerhalb
der Gleichungsumgebungen zu beenden, weshalb dort auch keine Leerzeilen in den
Quellen auftauchen dürfen.

Ein Absatz sollte immer begonnen werden, _bevor_ alleinstehende Gleichungen
verwendet werden, man sollte also auch keine Leerzeilen direkt vor der
Gleichungsumgebung verwenden. Werden mehrere Zeilen von Gleichungen benötigt,
sollten nicht mehrere Gleichungsumgebungen hintereinander verwendet werden (dies
führt zu inkonsistenten Abständen); stattdessen sollten mehrzeilige Umgebungen
genutzt werden, wie bspw. `align` aus dem `amsmath` Paket, das später
beschrieben wird.

Besonders nützlich sind alleinstehende Gleichungen für Integrale:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Ein Absatz über eine größere Gleichung
\[
  \int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Hier werden die Auszeichnungen für Hoch- und Tiefstellen genutzt, um die Grenzen
des Integrals anzugeben.

Wir haben hier einen manuellen Abstand eingefügt: `\,` sorgt für einen kleinen
Abstand vor `dx`. Die Formatierung des Differentialoperators variiert: Manche
Herausgeber nutzen ein aufrechtes 'd', andere ein kursives '_d_'. Eine Lösung,
um die Anforderungen an den Differentialoperator flexibel zu erfüllen, ist das
Definieren und Verwenden eines Befehls `\diff`, der leicht angepasst werden
kann, [z.B. so](https://www.tug.org/TUGboat/tb41-1/tb127gregorio-math.pdf):

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\newcommand{\diff}{\mathop{}\!d}            % für kursiv
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % für aufrecht
\begin{document}
Ein Absatz über eine größere Gleichung
\[
  \int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]
\end{document}
```

Häufig benötigt man nummerierte Gleichungen, die mit der `equation` Umgebung
erzeugt werden. Mit dem gleichen Beispiel:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\newcommand{\diff}{\mathop{}\!d}            % für kursiv
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % für aufrecht
\begin{document}
Ein Absatz über eine größere Gleichung
\begin{equation}
  \int_{-\infty}^{+\infty} e^{-x^2} \diff x
\end{equation}
\end{document}
```

Die Gleichungsnummer wird automatisch inkrementiert und kann eine einfache
Ziffer sein (wie in diesem Beispiel) oder durch die Nummer des momentanen
Abschnitts ergänzt werden, also (2.5) für die fünfte Gleichung des zweiten
Abschnitts. Derlei Details der Formatierung werden durch die Dokumentenklasse
bestimmt und hier nicht weiter beschrieben.

## Das `amsmath` Paket

Mathematische Notation ist extrem vielseitig, woraus folgt, dass die in LaTeX
eingebauten Werkzeuge nicht alles abdecken können. Das `amsmath` Paket erweitert
den LaTeX-Kern und deckt so viele weitere Bereiche ab. Die
[`amsmath` Anleitung](https://texdoc.org/pkg/amsmath) enthält viel mehr
Beispiele als wir in dieser Lektion zeigen können.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{amsmath}

\begin{document}
Löse die folgende Rekursion für $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{für $n$, $k>0$.}
\end{align*}
\end{document}
```

Die `align*` Umgebung richtet die Gleichungen an den Und-Zeichen, also den `&`,
aus genau wie in einer Tabelle. Außerdem benutzen wir `\quad`, um einen Abstand
einzufügen, und `\text`, um normalen Text im Mathematikmodus zu setzen.
Zusätzlich haben wir noch einen weiteren Mathematikbefehle verwendet, `\binom`
setzt ein Binom.

Man beachte, dass wir hier `align*` verwendet haben und die Gleichung nicht
nummeriert wurde. Die meisten Mathematikumgebungen nummerieren die Gleichungen
standardmäßig und die gesternte Variante (mit einem `*`) unterdrückt die
Nummerierung.

Das Paket stellt noch weitere nützliche Umgebungen bereit, bspw. für Matrizen.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{amsmath}
\begin{document}
AMS Matrizes.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

## Schriften im Mathematikmodus

Anders als im normalen Text transportieren Schriftarten im Mathematikmodus
häufig spezielle Bedeutungen. Deshalb werden sie meist explizit verwendet. Es
gibt eine Reihe an Befehlen, die hier benötigt werden:

- `\mathrm`: aufrecht (nach dem englischen "roman")
- `\mathit`: kursiv mit Abständen wie im Text
- `\mathbf`: fett
- `\mathsf`: serifenlos
- `\mathtt`: Festbreitenschrift
- `\mathbb`: doppelt gestrichen (durch das `amsfonts` Paket bereitgestellt)

Jeder dieser Befehle nimmt lateinische Buchstaben als Argument, für eine Matrix
könnten wir also schreiben:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}
Die Matrix $\mathbf{M}$.
\end{document}
```

Die standardmäßige kursive Schrift im Mathematikmodus trennt die Buchstaben, so
dass ein Produkt von Variablen beschrieben wird. Um ein kursives Wort zu setzen,
verwendet man `\mathit`.

Die `\math..`-Schriftbefehle nutzen Schriften, die für die Nutzung im
Mathematikmodus gemacht sind. Manchmal benötigt man ein Wort, das Teil des
umgebenden Satzes ist und deshalb in der entsprechenden Textschrift gesetzt
werden soll. Hierfür gibt es den `\text{...}` Befehl (aus dem `amsmath` Paket)
oder man setzt spezifische Schriften wie `\textrm{...}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage{amsmath}
\begin{document}

$\text{schlechte Verwendung } Ding  \neq \mathit{Ding} \neq \mathrm{Ding} $

\textit{$\text{schlechte Verwendung } Ding \neq \mathit{Ding} \neq \mathrm{Ding} $}

\end{document}
```

Falls andere Zeichen fett gesetzt werden müssen, zeigen wir dies
[bei den weiteren Details](more-10).

## Übung

Experimentiere mit den Grundlagen des Mathematikmodus: Nimm die Beispiele und
wechsle zwischen alleinstehenden und im Text befindlichen Gleichungen. Was für
Auswirkungen hat das?

Versuche, griechische Buchstaben (kleine und große) zu verwenden. Die Namen sind
erratbar (aber an der englischen Aussprache angelehnt, `\mu`, `\nu` etc.).

Experimentiere mit den Befehlen für Schriftarten: Was passiert, wenn sie
verschachtelt werden?

Alleinstehende Gleichungen werden standardmäßig zentriert; was passiert mit der
globalen Option `[fleqn]` (Englisch: "flush left equation") in den
obigen Beispielen? Gleichungsnummern sind typischerweise rechts. Füge den
Beispielen die globale Option `[leqno]` hinzu (Englisch: "left equation
numbers").
