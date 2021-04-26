---
layout: "lesson"
lang: "de"
title: "Was LaTeX ist und wie es funktioniert"
description: "Diese Lektion erläutert die Grundlagen von LaTeX und wie es funktioniert, besonders im Gegensatz zu herkömmlichen Textverarbeitungsprogrammen wie Microsoft Word oder LibreOffice Writer."
toc-anchor-text: "LaTeX Grundlagen"
toc-description: "Was LaTeX ist and wie es funktioniert."
---

# Was LaTeX ist und wie es funktioniert

# LaTeX Grundlagen

<span
  class="summary">Diese Lektion erläutert die Grundlagen von LaTeX und wie es funktioniert, besonders im Gegensatz zu herkömmlichen Textverarbeitungsprogrammen wie Microsoft Word oder LibreOffice Writer.</span>

Anders als herkömmliche Textverarbeitungsprogramme wie Microsoft Word oder 
LibreOffice Writer stellt LaTeX normalerweise keine WYSIWYG ('What You See 
Is What You Get') zur Verfügung. Bei LaTeX wird einfacher Text mit 
Auszeichnungen angereichert. Diese Auszeichnungen geben LaTeX Informationen 
über die logische Bedeutung bestimmter Elemente des Texts ähnlich wie das auch 
HTML tut.

Man nehme z.B. das Element `<h2>`, das einen neuen Abschnitt in einem 
HTML-Dokument darstellt.
LaTeX besitzt ebenfalls einen Befehl dafür, in diesem Fall wäre es der Befehl `\section`.

## Der LaTeX-Ablauf

Da LaTeX-Dateien nicht das Dokument an sich sind, sondern eher Anweisungen über 
die Art der einzelnen Teile eines Dokuments, gibt man anderen Personen in der 
Regel nicht die LaTeX-Datei selbst. Stattdessen führt man, nachdem man die LaTeX 
_Quelle_ geschrieben hat, LaTeX aus (normalerweise mit Hilfe eines Programms wie 
`pdflatex`), um eine PDF-Datei zu erhalten. Diese PDF-Dateien schickt man dann 
an andere Personen.

Dieser Prozess wird unterschiedlich bezeichnet, je nachdem, wen man fragt. Da 
die Anwendung von LaTeX ein wenig wie Programmieren ist, nennt man den Ablauf oft
'Kompilierung' eines Dokuments. Obwohl 'Textsatz' der passendere Begriff ist.

## Mehrfache LaTeX-Läufe

Für einfache Dokumente genügt es, sie nur einmal setzen zu lassen, um das fertige
PDF zu erhalten. Sobald man aber kompliziertere Dinge verwendet, wie z.B. 
Querverweise, Zitate, Abbildungen und ein Inhaltsverzeichnis, muss man LaTeX 
unter Umständen mehr als einmal ausführen. Wir werden Ihnen erklären, wann dies 
der Fall ist.

## LaTeX oder pdfLaTeX oder ...

In der [nächsten Lektion](lesson-02) wird gezeigt, dass es nicht nur _ein_ 
LaTeX-Programm gibt. Um die Sache zu vereinfachen, werden uns auf das 
LaTeX-Programm `pdflatex` konzentrieren, um PDF-Dateien zu erzeugen. Wir werden 
uns zudem im weiteren Verlauf des Kureses andere Programme und ihre Einsatzzwecke 
ansehen.
