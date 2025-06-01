---
layout: "lesson"
lang: "de"
title: "Grundlegende Struktur eines LaTeX-Dokuments"
description: "Diese Lektion zeigt sowohl die grundlegende Struktur eines LaTeX-Dokuments und wie es in eine PDF-Datei umgewandelt wird, als auch die wichtigsten Steuerzeichen zur Kontrolle von LaTeX."
toc-anchor-text: "Dokumentenstruktur"
toc-description: "Die grundlegende Struktur eines Dokuments"
---

# Grundlegende Struktur eines LaTeX-Dokuments

<span
  class="summary">Diese Lektion zeigt sowohl die grundlegende Struktur eines LaTeX-Dokuments und wie es in eine PDF-Datei umgewandelt wird, als auch die wichtigsten Steuerzeichen zur Kontrolle von LaTeX.</span>

Ihr erstes LaTeX-Dokument wird sehr einfach ausfallen: das Ziel ist, zu zeigen,
wie ein Dokument aussieht und wie es erfolgreich gesetzt wird. Außerdem ist es
die erste Gelegenheit, zu sehen, [wie die Beispiele auf `learnlatex.org`
funktionieren](help).

Wenn Sie eine lokale LaTeX-Installation verwenden, erstellen Sie eine neue Datei
namens `first.tex` in Ihrem Editor und kopieren Sie den folgenden Text in diese.

Falls ein Onlinesystem genutzt werden soll, klicken Sie  bei den Beispielen auf
'LaTeX Online' oder 'In Overleaf öffnen', um diese auszuprobieren!

<p
  class="hint">Wir schlagen vor, Sie probieren die Onlineoptionen aus, selbst wenn Sie LaTeX lokal installiert haben; dies ist eine gute Gelegenheit herauszufinden, wie die verschiedenen Varianten funktionieren.</p>

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\begin{document}
Hallo Welt!

Dies ist ein erstes Dokument.
\end{document}
```

Man beachte die Zeile, in der `\usepackage[ngerman]{babel}` genutzt wird. Diese
ist erforderlich, um LaTeX für die deutsche Sprache anzupassen. Siehe hierzu die
[eine spätere Lektion](more-06) oder die [speziell fürs Deutsche geschriebene
Lektion](language-01).

Speichern Sie die Datei und setzen Sie sie in ein PDF-Dokument; falls Sie eine
lokale LaTeX-Installation verwenden, hängt der dafür benötigte Knopf von Ihrer
Editorwahl ab. Sie sollten eine PDF-Datei mit den beiden Sätzen _und zusätzlich_
einer Seitenzahl erhalten; LaTeX fügt die Seitenzahl automatisch ein.

Die Datei `first.pdf` kann mit dem PDF-Viewer Ihrer Wahl geöffnet werden. Sieht
gut aus; herzlichen Glückwunsch!

## Fehlerbehebung

Fehler passieren.
Überprüfen Sie, ob jede Zeile korrekt wie oben gezeigt eingegeben wurde.
Manchmal führen scheinbar kleine Änderungen in der Eingabe zu großen Änderungen
im Ergebnis, bis hin zu nicht funktionierenden Dokumenten.
Falls Sie den Fehler nicht finden, versuchen Sie, das gesamte Dokument zu
löschen und erneut die Zeilen von oben zu kopieren.

Wenn ein LaTeX-Lauf mit einem Fragezeichen endet, können Sie ihn vollständig
beenden, indem Sie `x` und Anschließend `Enter` drücken.

LaTeXs Fehlermeldungen versuchen, hilfreich zu sein, aber sie entsprechen nicht
den Meldungen einer Textverarbeitung. Manche Editoren erschweren es, den
vollständigen Text einer Fehlermeldung zu sehen, wodurch Details verloren gehen.
LaTeX schreibt, was es gerade tut, immer in eine Logdatei; dies ist eine Datei
mit der Endung `.log`. Sie können die vollständigen Fehlermeldungen hier finden
und falls Sie ein Problem nicht selbst lösen können, fragen LaTeX-Experten
häufig nach einer Kopie Ihrer Logdatei.

<p
  class="hint">Wir werden noch ausführlicher auf die Fehlerbehebung in <a
  href="./lesson-15">Lektion 15</a> eingehen.</p>

## Was Sie bisher erreicht haben

Das erste Dokument zeigt die Grundlagen.
LaTeX-Dokumente sind eine Mischung aus Text und Befehlen.
Befehle starten mit einem Backslash
und haben manchmal Argumente in geschweiften Klammern
(oder eckigen Klammern bei optionalen Argumenten).
Anschließend erzeugen Sie die PDF-Ausgabe, indem Sie LaTeX die Datei setzen
lassen.

Jedes LaTeX-Dokument beinhaltet den Aufruf `\begin{document}` und das zugehörige
`\end{document}`.
Zwischen diesen befindet sich der _Textteil_ mit dem Inhalt des Dokuments.
Im Beispiel finden sich hier zwei Absätze (in LaTeX werden Absätze durch eine
oder mehrere leere Zeilen voneinander getrennt).
Vor `\begin{document}` steht die _Dokumentpräambel_
mit Code, der das Layout des Dokuments bestimmt.
Der Befehl `\usepackage` wird in einer [späteren Lektion](lesson-06) erklärt, er
wird in den meisten Beispielen auf dieser Seite genutzt, um die richtige
Fontkodierung einzustellen.

LaTeX hat andere `\begin{...}` and `\end{...}` Paare; sie werden _Umgebungen_
genannt.
Für jedes `\begin{x}` muss ein passendes `\end{x}` verwendet werden. Falls
Umgebungen verschachtelt werden, muss `\end{y} ... \end{x}` verwendet werden, um
`\begin{x} ... \begin{y}` zu entsprechen, die `\begin` und `\end` Instruktionen
müssen also in passender Reihenfolge aufgerufen werden.

Wir können Kommentare in einer LaTeX-Datei einfügen, indem wir diesen `%`
voranstellen; wir können damit die Struktur eines Dokuments verdeutlichen:

```
\documentclass[a4paper,12pt]{article} % Die Dokumentenklasse mit Optionen
% Select T1 font encoding: suitable for Western European Latin scripts
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
% Ein Kommentar in der Präambel
\begin{document}
% Dies ist ein Kommentar
Das ist   ein einfaches
Dokument\footnote{mit einer Fußnote}.

Hier ist ein neuer Absatz.
\end{document}
```

Man sieht erneut zwei Absätze; man beachte die Verwendung einer leeren Zeile
hierzu. Beachten Sie, dass mehrere aufeinander folgende Leerzeichen als eines
ausgegeben werden.

Manchmal benötigt man ein geschütztes Leerzeichen, das nicht in eine neue Zeile
umgebrochen werden kann: in LaTeX können wir `~` hierfür verwenden. Insbesondere
für Querverweise wird dies später im Kurs nützlich sein.

## Spezielle Zeichen

Sie haben vielleicht bemerkt, dass ``\``, `{` und `}` eine besondere Bedeutung
in LaTeX haben. Ein ``\`` startet eine Instruktion für LaTeX, einen _Befehl_.
Die geschweiften Klammern `{` und `}` werden genutzt um _obligatorische
Argumente_ auszuzeichnen: von Befehlen benötigte Informationen.

Es gibt weiter Zeichen mit besonderer Bedeutung: z.B. haben wir gesehen, dass
`~` ein geschütztes Leerzeichen ist. Nahezu alle diese Zeichen sind _sehr_
selten in normalem Text, weshalb sie für besondere Bedeutungen ausgewählt
worden. Falls Sie eines dieser besonderen Zeichen in Ihrem Text benötigen, haben
wir [Informationen hierzu in der Seite mit weiteren Details](more-03)
zusammengestellt.

## Übung

Experimentiere online mit den Texten und Satzsystemen; klicke auf die
Schaltfläche, um die Inhalte zu setzen, führe anschließend Änderungen innerhalb
der Webseite aus und setze die Inhalte erneut.

Versuche, Text zum ersten Dokument hinzuzufügen, es zu setzen und die Änderungen
im PDF zu sehen. Erstelle verschiedene Absätze und füge unterschiedlich viele
Leerzeichen ein. Erforsche den eigenen Texteditor; klicke in die Quelldatei und
finde heraus, wie man zur selben Stelle im PDF-Dokument springt. Füge einige
geschützte Leerzeichen ein und finde heraus, wie diese Zeilenumbrüche
beeinflussen.
