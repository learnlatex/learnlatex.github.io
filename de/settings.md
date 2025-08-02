---
layout: "page"
lang: "de"
title: Seiteneinstellungen
permalink: /de/settings
---
# Seiteneinstellungen (Benutzereinstellungen) (DE)

## Cookies akzeptieren oder löschen

Cookies sind kleine Datensätze, die im Browser des Benutzers gespeichert werden.
Standardmäßig werden keine Cookies von dieser Seite genutzt, allerdings werden
alle Einstellungen, die hier getroffen werden, in Cookies gespeichert.

Um Einstellung im folgenden Menü zu treffen und Cookies zu speichern, müssen
Cookies akzeptiert werden.


{% include settings-accept.html 
   accept="Cookies akzeptieren"
   reset= "Zurücksetzen: Alle Cookies löschen"
%}

## Standardrückgabe

Die Form der Rückgabe über den `return` Parameter, die TeXLive.net benutzen
soll, wenn keine direkte Wahl über `% !TeX` Kommentare im Beispiel getroffen
wird.

{% include settings-return.html %}


## Standardengine

Die `engine` die von TeXLive.net oder Overleaf benutzt werden soll, wenn keine
direkte Wahl über `% !TeX` Kommentare im Beispiel getroffen wird. (Die `-dev`
und `context` Optionen sollten nicht mit Overleaf verwendet werden.)

{% include settings-engine.html %}


## Editorthema

Das Thema, welches der eingebettete ACE-Editor verwendet.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
