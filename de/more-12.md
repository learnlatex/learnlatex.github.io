---
layout: "lesson"
lang: "de"
title: "Mehr zu: Literaturverzeichnis und -verweise"
description: "Diese Lektion zeigt Details zu nicht-englischen Literaturverzeichnissen, wie Verweise in Hyperlinks geändert werden und arbeitet die Hauptunterschiede zwischen BibTeX-Stilen heraus."
toc-anchor-text: "Mehr zu: Literaturverzeichnis und -verweise"
---

## Nicht-englische Sortierung

Das BibTeX-Programm wurde hauptsächlich für englische Verweise geschrieben. Es
ist im Umgang mit Akzenten stark eingeschränkt und noch stärker beeinträchtigt
durch nicht-lateinische Buchstaben. Im Gegensatz dazu wurde Biber von Beginn an
auf ein Gemisch verschiedener Schriftsysteme ausgelegt.

Das bedeutet, dass wenn irgendeine andere Sortierreihenfolge als die englische
benötigt wird, `biblatex` und Biber anstelle von `natbib` und BibTeX verwendet
werden sollte.

## Hyperlinks

Wenn das `hyperref` Paket geladen wird (wie bereits [zuvor](more-09)
beschrieben) wird es automatisch einige Inhalte des Literaturverzeichnisses zu
Links umformen. Dies ist besonders für URLs und DOIs nützlich.

## Unterschiede in den optimalen Eingaben für BibTeX bei verschiedenen Stilen

Während die allgemeine Syntax der BibTeX-Dateien für BibTeX und `biblatex`
übereinstimmt, können die verfügbaren unterstützten Felder des Stils und ihre
genaue Bedeutung nicht nur zwischen BibTeX und `biblatex`, sondern auch zwischen
verschiedenen BibTeX-Stilen variieren. Ein Kernset von Eintragtypen und Feldern
ist in nahezu jedem Stil identisch, aber es gibt auch Unterschiede.

Ein Beispiel wären URLs. Einige ältere BibTeX `.bst` Stile (besonders die
'Standard-BibTeX-Stile' wie `plain.bst`, `unsrt.bst`, ...) gehen der Erfindung
von URLs voraus und besitzen kein extra Feld für die URL einer Onlinequelle.
Viele neuere Stile _haben_ ein spezielles `url` Feld. Die Behelfslösung, um eine
URL in den älteren Stilen zu verwenden, ist meist das `howpublished` Feld, mit
neueren Stilen ist aber selbstverständlich das `url` Feld zu bevorzugen.

Um das Beste aus dem jeweiligen Stil herauszuholen, ist es nötig, in Erfahrung
zu bringen, welche Felder und Semantik unterstützt werden.
