---
layout: "lesson"
lang: "de"
title: "Design anpassen mit Klassen"
description: "Diese Lektion erklärt, was eine Dokumentklasse ist und wie sie das Layout eines Dokuments beeinflusst, und listet die Hauptklassen auf, die in einer TeX-Distribution enthalten sind."
toc-anchor-text: "Dokumentklassen"
toc-description: "Das generelle Dokumentenlayout einstellen"
---

# Design anpassen mit Klassen

<span
  class="summary">Diese Lektion erklärt, was eine Dokumentklasse ist und wie sie das Layout eines Dokuments beeinflusst, und listet die Hauptklassen auf, die in einer TeX-Distribution enthalten sind.</span>

Es mag aufgefallen sein, dass jedes unserer bisherigen LaTeX-Dokumente mit der
Zeile `\documentclass` startet und dass die häufigste Wahl
`\documentclass{article}` war. (Wir brauchten auch schon
`\documentclass{report}` in [einer vorigen Lektion](lesson-04), um den
`\chapter`-Befehl auszuprobieren.) Diese Zeile wird in jedem LaTeX-Dokument
benötigt, und ist (fast) immer der erste Befehl im Dokument.

## Was eine Dokumentklasse macht

Die Dokumentklasse definiert das generelle Layout des Dokuments, wie z.B.

- Design: Seitenränder, Schrift, Abstände, etc.
- ob Kapitel als Gliederungsebene verfügbar sind
- ob der Dokumententitel auf einer eigenen Seite ausgegeben wird

Dokumentklassen können auch allgemeinere neue Befehle bereitstellen;
insbesondere für Spezialfälle wie das Erstellen von Präsentationsfolien.

Der `\documentclass`-Aufruf kann außerdem _globale Optionen_ setzen: Dinge, die
das gesamte Dokument beeinflussen. Diese werden in eckigen Klammern angegeben:
`\documentclass[<Optionen>]{<Name>}`. Diese Syntax, optionale Argumente in
eckigen Klammern zu erwarten, wird von vielen LaTeX-Befehlen genutzt.

## Die Standardklassen

LaTeX kommt mit einigen Standardklassen, die sich bis auf einige Abwandlungen
ähneln:

- `article`
  kurze Dokumente ohne Kapitel
- `report`
  längere Dokumente mit Kapiteln, einseitiger Druck
- `book`
  längere Dokumente mit Kapiteln, beidseitiger Druck, mit Titelei und Anhängen
  (bspw. für einen Index)
- `letter`
  Schriftverkehr ohne Abschnitte
- `slides`
  für Präsentationen (siehe aber auch weiter unten)

Die `article`, `report` und `book` Klassen verwenden, wie bereits gesehen, sehr
ähnliche Befehle. Soll mit `letter` ein Brief geschrieben werden, unterscheiden
sich die verfügbaren Befehle bereits

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\begin{document}

\begin{letter}{Eine Adresse\\Einer Straße\\Jener Stadt}

\opening{Sehr geehrte Damen und Herren,}

Hier kommt der Text

\closing{Mit freundlichen Grüßen,}

\end{letter}

\end{document}
```

Man beachte die Verwendung von ``\\``, um die Zeilen der Adresse zu trennen; mit 
Zeilenumbrüchen beschäftigen wir uns [später](lesson-11). Die `letter` Klasse
erstellt eine neue Umgebung für einzelne Briefe und weitere spezielle Befehle.

Die Standardklassen `article`, `report` und `book` unterstützen die Optionen
`10pt`, `11pt` und `12pt` für die Schriftgröße und `twocolumn`, um ein
zweispaltiges Dokument zu setzen.

## Funktionsreiche Klassen

Die Standardklassen sind sehr beständig, was aber auch bedingt, dass sie in
Design und der Bandbreite verfügbarer Befehle zurückhalten sind. Im Laufe der
Zeit wurden weitere Klassen mit mehr Funktionen erstellt, die das Design
anpassbar machen, ohne dass man alles selbst programmieren muss (was wir [später
behandeln](lesson-11)).

Die American Mathematical Society stellen Varianten der Standardklassen
(`amsart`, `amsbook`) zur Verfügung, die mehr dem traditionellen Design von
Veröffentlichungen mathematischer Zeitschriften entsprechen.

Die zwei größten und verbreitetsten 'erweiterten' Klassen sind die KOMA-Script
Sammlung und die `memoir` Klasse. KOMA-Script bietet den Standardklassen
entsprechende Alternativen: `scrartcl`, `scrreprt`, `scrbook` und `scrlttr2`.
Die Klasse `memoir` entspricht am ehesten einer Erweiterung von `book`.

Diese erweiterten Klassen haben ein Fülle an Anpassungsmöglichkeiten, die wir
uns in der Übung ein wenig anschauen wollen. Woher man die
Anpassungsmöglichkeiten kennen soll werden wir [in einer späteren
Lektion](lesson-16) erklären, natürlich können Sie auch jetzt dort nachlesen.

## Präsentationen

Die `slides` Klasse wurde entwickelt, um gedruckte Folien Mitte der 80iger zu
erzeugen, und bietet keine Funktionen, interaktive PDF-basierte Präsentationen
zu erstellen. Es gibt moderne Alternativen, die genau dies erreichen: sie sind
spezialisiert für diese Anwendung und verglichen mit anderen LaTeX-Dokumenten
recht speziell, weshalb wir sie im Abschnitt [mehr Details](more-05) behandeln.

## Übung

Erkunde, wie sich ein Dokument beim Wechsel von den Standardklassen auf eine aus
der KOMA-Script Sammlung oder auf `memoir` verändert.

```latex
\documentclass{article} % Hier die Dokumentklasse ändern
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\begin{document}

\section{Einführung}

Dies ist ein Beispieldokument mit ein wenig
Blindtext\footonet{und einer Fußnote}. Dieser Absatz ist ein
wenig lang, um zu sehen, wie sich ein zweispaltiges Dokument
verhält.

\end{document}
```

Benutze die globale Option `twocolumn`, um zu sehen, wie sich das Layout ändert.

Tausche `\section` gegen `\chapter` aus und finde heraus, welchen Effekt
folgende globale Optionen bei Verwendung der Klasse `scrreprt` haben.

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
