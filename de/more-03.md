---
layout: "lesson"
lang: "de"
title: "Mehr zu: Grundlegende Struktur eines LaTeX-Dokuments"
description: "Diese Lektion zeigt weiter Details dazu, wie LaTeX ausgeführt wird und den Zeichen mit besonderer Bedeutung und wie diese im PDF ausgegeben werden können."
toc-anchor-text: "Mehr zu: Grundlegende Struktur eines LaTeX-Dokuments"
---

## LaTeX ausführen

Wie [bereits beschrieben](lesson-02) sind LaTeX-Dokument Klartext. Um dies zu
sehen, können Sie Ihr erstes Dokument in einem einfachen Texteditor, bspw.
Notepad auf Windows, öffnen. Sie sollten die gleichen Inhalte wie im
LaTeX-Editor sehen, bloß fehlen sämtliche Syntaxhervorhebungen.

Sie können Ihre Datei auch ohne den Editor in einem PDF setzen: dies bedeutet
die Verwendung der Kommandozeile/des Terminals. Wenn Sie damit nicht vertraut
sind, brauchen Sie sich keine Sorgen zu machen, sind Sie es aber, navigieren Sie
in das Verzeichnis, das Ihre `.tex` Quellen enthält, und führen sie

`pdflatex first`

oder

`pdflatex first.tex`

aus, um die PDF-Datei zu setzen. Die Dateierweiterung `.tex` ist optional: LaTeX
nimmt diese an, sollte keine andere Dateierweiterung angegeben werden.

## Besondere Zeichen

Wenn Sie eines der besonderen Zeichen eingeben wollen, reicht meist ein
Backslash vor diesem aus, `\{` erzeugt also das Symbol `{` in der Ausgabe. Es
gibt aber auch Fälle, in denen längere Befehle benötigt werden:

| Symbol | Kurzer Befehl <br><small>(Mathe und Text)</small> | Langer Befehl <br><small>(nur in Text)</small> |
| --- | --- | --- |
| `{`    | `\{`          | `\textbraceleft`  |
| `}`    | `\}`          | `\textbraceright` |
| `$`    | `\$`          | `\textdollar`     |
| `%`    | `\%`          |                   |
| `&`    | `\&`          |                   |
| `#`    | `\#`          |                   |
| `_`    | `\_`          | `\textunderscore` |
| ``\``  |               | `\textbackslash`  |
| `^`    |               | `\textasciicircum`|
| `~`    |               | `\textasciitilde` |

Für die letzten drei Symbole existiert kein kurzer Befehl, da `\\` für einen
Zeilenumbruch verwendet wird, `\~` und `\^`, um die Akzente Tilde und Zirkumflex 
zu setzen, wenn ausschließlich ASCII-Zeichen für die Eingabe verwendet werden.
