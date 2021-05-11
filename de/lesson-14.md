---
layout: "lesson"
lang: "de"
title: "Schriften auswählen und Unicodeprogramme verwenden"
description: "Diese Lektion erklärt, wie LaTeX Unicode interpretiert und wie sich das auf die Eingabe und die verwendeten Schriftarten auswirkt. Lerne über Unicode und OpenType-Schriftenunterstützung."
toc-anchor-text: "Schriften & Unicodeengines"
toc-description: "Schriften auswählen und Dateikodierung"
---

# Schriften auswählen und Unicodeprogramme verwenden
<span
    class="summary">Diese Lektion erklärt, wie LaTeX Unicode interpretiert und wie sich das auf die Eingabe und die verwendeten Schriftarten auswirkt. Lerne über Unicode und OpenType-Schriftenunterstützung.</span>

Als die verbreitete Nutzung von TeX und LaTeX begann, unterstützten sie ohne
weiter Anpassungen größtenteils nur europäische Sprachen, obwohl es auch
grundlegende Unterstützung für andere Alphabete wie das griechische oder
russische gab.

## Akzente und Akzentbuchstaben

Ursprünglich wurden Akzente und Akzentbuchstaben durch Steuerzeichen oder Macros
wie `\c{c}` für ‘ç’ und `\'e` für ‘é’ eingegeben. Während Manche weiterhin
solche Eingabemethoden verwenden, da sie mitunter einfacher zu tippen sind,
wollen Andere die Tasten auf ihrer Tastatur zur Eingabe verwenden.

Bevor Unicode Verbreitung fand, unterstützte LaTeX bereits einige Arten der
*Dateikodierung*, die Texte verschiedener Sprachen direkt unterstützten &ndash;
so können französische Anwender mit der `latin1` Kodierung "`déjà vu`"
schreiben, was LaTeX intern in die entsprechenden Befehle zur korrekten Ausgabe
umwandelt.

Diese Herangehensweise wird heute bei Verwendung der `pdflatex` Engine immer
noch verwendet. Standardmäßig wird angenommen, dass alle Dateien in Unicode
(UTF-8 Kodierung) vorliegen. Obwohl diese Engine auf 8-bit Schriften beschränkt
ist, sind so die meisten europäischen Sprachen unterstützt.

## Schriftauswahl

Die Schriftauswahl mit `pdflatex` verwendet das robuste LaTeX
Schriftauswahlsystem und heutzutage sind viele Schriften in den
Standard-LaTeX-Installationen bereits enthalten. Beispielsweise sind die TeX
Gyre Schriften eine Auswahl von Schriften hoher Qualität, die auf verbreiteten
Schriften wie Times, Helvetica, Palatino und anderen basieren. Um diese
Schriften zu verwenden, lädt man einfach das entsprechende Paket. Für eine
Times-ähnlich Schrift verwendet TeX Gyre den Namen Termes:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

Für `pdflatex` sind die meisten Schriften durch solche Pakete verfügbar. Man
kann einen Blick auf [den
LaTeX-Schriftenkatalog](https://www.tug.org/FontCatalogue/) oder die [CTAN-Seite
des 'Font' Themas](https://www.ctan.org/topic/font) für verschiedene
Möglichkeiten werfen. Man kann auch im Internet nach der erwünschten Schrift
und einem `pdflatex`-kompatiblen Paket suchen. Für viele proprietäre Schriften
existieren geeignete Klone, die für die meisten Anforderungen ähnlich genug
aussehen.

## Die Unicode-Ära

Da `pdflatex` auf 8-bit Dateikodierungen und 8-bit Schriften beschränkt ist,
kann es nicht nativ moderne OpenType-Schriften nutzen und einfach zwischen
Sprachen mit unterschiedlichen Alphabeten wechseln. Es gibt zwei
`pdflatex`-Alternativen, die nativ Unicode-Eingabe und moderne Schriften
unterstützen: XeTeX und LuaTeX. Für LaTeX werden diese typischerweise durch die
Programmaufrufe `xelatex` und `lualatex` genutzt.

In diesen Engines werden Schriften durch das `fontspec` Paket ausgewählt, was
für einfache Dokumente in etwa so aussehen könnte:
```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

Hierdurch wird die TeX Gyre Termes Schrift, wie im `pdflatex` Beispiel oben,
gewählt. Dieser Ansatz funktioniert für *jede* OpenType-Schrift. Manche
Schriftpakete, die Schriften für `pdflatex` bereitstellen, unterstützen auch
`xelatex` und `lualatex`. Durch `fontspec` kann jedoch jede auf dem Computer
installierte Schrift ausgewählt werden.

[Der LaTeX-Schriftenkatalog](https://www.tug.org/FontCatalogue/) listet auch
verfügbare Schriften im OpenType-Format, kann also generell als Nachschlagewerk
für Schriften genutzt werden, genau wie die bereits erwähnte
[CTAN-Seite](https://www.ctan.org/topic/font).

Nachdem man eine Schrift ausgewählt hat, kann die Eingabe direkt in normalem
Unicode erfolgen. Hier ein Beispiel, das lateinische und griechische Buchstaben
und einige CJK-Ideogramme:

```latex
% !TEX xelatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p
    class="hint">Beim Wechsel zwischen Sprachen ist es normalerweise
    erforderlich, auch Einstellungen wie die Silbentrennung anzupassen. Sowohl
    das <code>babel</code> als auch das <code>polyglossia</code> Paket bieten
    robuste Funktionen hierzu.</p>
