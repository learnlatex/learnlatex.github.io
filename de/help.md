---
layout: "page"
lang: "de"
title: "Learnlatex.org verwenden"
description: "Diese Seite erklärt die learnlatex.org Webseite und wie man sie am besten nutzt."
permalink: /de/help
---

# Hilfe


## Auf der Seite navigieren

Der Kurs besteht aus 16 Hauptlektionen, welche über das [Inhaltsverzeichnis]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}) auf der [Startseite](./) erreichbar sind.

Jede Lektion hat einen Link zu einer Zusatzlektion, welche das Thema weiter
vertieft.  Es sollte möglich sein, alle 16 Lektionen _ohne_ die Zusatzlektionen
durchzuarbeiten.

Am Ende des Kurses gibt es eine oder mehrere sprachspezifische Lektionen,
sowie eine Beispielsammlung von LaTeX Paketen, die nicht in diesem Kurs
behandelt wurden.

---

## Beispiele

### Beispiele kompilieren

Jedes Beispiel besteht aus einem kleinen, aber vollständigen LaTeX-Dokument, 
das auf der Seite so angezeigt wird:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Example text.
\end{document}
```

bzw. ins Deutsche übersetzte Beispiele so (siehe auch [speziell fürs Deutsche
geschriebene Lektion](language-01)):

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\begin{document}
Beispieltext.
\end{document}
```

Jedes Beispiel ist komplett. Sie können kleinere Änderungen
z.B. für Übungsaufgaben direkt im Editor machen.

Für die Beispiele wurde der [ACE](https://ace.c9.io/) Editor benutzt.

#### Drei Möglichkeiten die Beispiele zu kompilieren

* Den Overleaf Service nutzen
* Den LaTeX Online Service nutzen
* Eine lokale TeX Installation nutzen

##### Den Overleaf Service nutzen

Overleaf ist einer der beliebtesten online LaTeX-Editoren.
Die <button>In Overleaf öffnen</button> Schaltfläche unter dem Beispiel,
übermittelt den Code an [Overleaf](https://www.overleaf.com/about).

Wenn Sie keinen Overleaf Account haben, oder die Anmeldedaten nicht bereits
im Browser gespeichert sind, werden Sie zu einer Login-Seite weitergeleitet,
wo Sie sich registrieren oder einloggen können. Overleaf ist ein gratis Service,
Sie müssen nur wenige Informationen angeben, und den Nutzungsbedingungen zustimmen.

Wenn Ihre Overleaf Anmeldedaten bereits im Browser vorhanden sind, wird
Overleaf in einem neuen Tab geöffnet, mit dem Code als neues Projekt.
Sie können den Code dann direkt bearbeiten, und Overleaf wird automatisch
LaTeX ausführen, und das resultierende Dokument, oder einen Fehlerbericht anzeigen.

Die Editierfunktionen in Overleaf sind weitaus mächtiger als auf dieser Seite,
und Sie können Ihr Projekt im Overleaf Account speichern und später weiter arbeiten.

##### Den LaTeX Online Service nutzen

Die <button>LaTeX Online</button> Schaltfläche unter dem Beispiel,
übermittelt den Code an [TexLive.net](https://texlive.net)[^1].

Der LaTeX CGI Dienst wurde speziell für diese Seite entwickelt und nutzt
[PDF.js](https://mozilla.github.io/pdf.js/), um PDF Dokumente in Browsern ohne
eingebaute PDF-Unterstützung anzuzeigen.

Die resultierenden PDF-Dokumente (oder Fehlermeldungen) werden direkt unterhalb
der Beispiele angezeigt. Eine <button>Delete Output</button> Schaltfläche wird
angezeigt, um die Ausgabe zu löschen.

Bitte beachten Sie, dass **LaTeX Online** keinerlei Anmeldung oder Registrierung
benötigt. Das ist sehr nützlich für kleine Beispiele, aber weder diese Seite,
noch `latexcgi`, `latexonline.cc` oder `latex-on-http` bieten die Möglichkeit,
Ihre Dokumente zu speichern. Jegliche Änderungen, die Sie an dem Beispielcode
machen, ist verloren, wenn Sie die Seite schließen.

##### Eine lokale TeX-Installation nutzen

Wenn Sie TeX lokal installiert haben, können Sie den Beispielcode aus der
Seite entweder mit der Maus markieren, oder mit dem `Alles markieren` 
Tastaturkürzel im Editor kopieren (in Windows ist das z.B. Strg-A Strg-C).
Das kopiert den Code in die Zwischenablage ihres Betriebssystems. 
Dann können Sie ein neues leeres Dokument in Ihrem lokalen Editor öffnen
und den Code hineinkopieren.

### Fehlerbehebung

Unsere Beispiele basieren auf einer aktuellen LaTeX-Installation.
Sie funktionieren mit beiden Onlineservices. Falls Sie mit dem Beispielcode
Fehlermeldungen erhalten, überprüfen Sie bitte, ob ihre LaTeX-Installation
auf dem neuesten Stand ist.

---

## Ein TeX Programm wählen

Wenn Sie den Beispielcode verwenden, wird automatisch das `pdflatex` Programm
genutzt.

Sie können diese Auswahl auf `latex`, `pdflatex`, `xelatex`, `lualatex`,
`platex` oder `uplatex` verändern mit einem Kommentar in der Form:

`% !TEX ` _irgendein text_ `lualatex`

Das Leerzeichen am Anfang ist optional. Die Groß- und Kleinschreibung,
sowie auch der _irgendein text_ zwischen dem ersten und letzten Wort werden ignoriert.

Das ermöglicht es die Form `% !TEX program=pdflatex` zu nutzen, die von einigen
TeX-Editoren verwendet wird, ohne auf `program=` zu achten. Es kann jeweils nur
eines der unterstützten Programme definiert werden.

Ein Beispiel zur Verwendung von LuaLaTeX finden Sie [auf dieser Seite](more-14).

Wenn `platex` oder `uplatex` gewählt wurde, wird zusätzlich `dvipdfmx`
verwendet, um das PDF Dokument aus den DVI Dateien dieser Engines zu generieren.
Ähnlich wie `dvips` und `ps2pdf` benutzt werden, wenn `latex` spezifiziert wurde.

---

## Darstellung der Ausgabe wählen

Wenn Sie einen der LaTeX Onlineservices nutzen, wird die PDF Ausgabe
der Beispiele automatisch mit [PDF.js](https://mozilla.github.io/pdf.js/)
dargestellt. Das sorgt für konsistente Ergebnisse unabhängig vom verwendeten Browser.

Falls Sie es bevorzugen, den Standard-PDF-Reader Ihres Browsers zu verwenden
(im Browser integriert, oder als externe Applikation), können Sie einen
Kommentar in folgender Form hinzufügen:

`% !TEX ` _irgendein text_ `pdf`

Das Standardverhalten kann explizit definiert werden mit `pdfjs`.
Zur Fehlersuche kann es gewünscht sein, die Logdatei auszugeben,
auch wenn der Code ein PDF Dokument ohne Fehler generiert.
Dies kann mit der Angabe von `log` erreicht werden.

---

[^1]: Während der Entwicklung dieser Seite haben wir auch
[LaTeX.Online](https://latexonline.cc/) und
[LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http) genutzt.
Wir möchten den Entwicklern dieser Services danken. Durch ihre Anpassungen
wurde es möglich, die Beispiele auf dieser Seite schon in einer frühen
Phase zur Verfügung zu stellen.
