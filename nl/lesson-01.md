---
layout: "lesson"
lang: "nl"
title: "Wat is LaTeX en hoe werkt het?"
description: "Deze les verklaart de grondbeginselen van LaTeX en hoe het zich verhoudt tot gangbare tekstverwerkers zoals Microsoft Word of LibreOffice Writer."
toc-anchor-text: "LaTeXs grondbeginselen"
toc-description: "Wat is LaTeX en hoe werkt het?"
---

# LaTeXs grondbeginselen

<span
  class="summary">Deze les verklaart de grondbeginselen van LaTeX en hoe het zich verhoudt tot gangbare tekstverwerkers zoals Microsoft Word of LibreOffice Writer.</span>

In tegenstelling tot tekstverwerkers zoals Microsoft Word of LibreOffice Writer biedt LaTeX gewoonlijk geen WYSIWYG ('What You See Is What You Get').
Bij LaTeX wordt een eenvoudig tekstbestand verrijkt met een opmaaktaal.
Deze opmaaktaal wijst LaTeX op de logische betekenis van bepaalde delen van de tekst, net zoals HTML dat doet.

Neem bijvoorbeeld het element `<h2>` dat een nieuwe sectie in een HTML-document aanduidt.
LaTeX heeft hier ook een commando voor, namelijk `\section`.

## LaTeXs workflow

Omdat LaTeX-bestanden niet het document zelf zijn, maar eerder instructies over wat elk deel van het document zou moeten zijn, deel je normaal gezien je bronbestanden niet met anderen.
In plaats daarvan voer je LaTeX uit op de broncode (normaal gesproken via het programma `pdflatex`) om een PDF te creëren.
Deze PDF kan je dan met anderen delen.

Omdat het gebruik van LaTeX op programmeren lijkt, noemt met dit proces vaak 'compileren', hoewel 'zetten' correcter zou zijn.

## Meerdere LaTeX-compilaties

Eenvoudige bestanden hoef je maar één keer te zetten om de afgewerkte PDF te bekomen.
Zodra je echter meer ingewikkelde zaken toevoegt, zoals kruisverwijzingen, citaten, figuren en inhoudsopgaven, ben je misschien genoodzaakt LaTeX meerdere keren uit te voeren.
We zullen later uitleggen wanneer dat het geval is.

## LaTeX of pdfLaTeX of ...

In de [volgende les](lesson-02) zullen we zien dat LaTeX niet slechts één programma is.
Voor de eenvoud richten we ons op een bepaald LaTeX-programma, pdfLaTeX, om PDF's te maken.
Enkele andere programma's en redenen om die te gebruiken, komen later aan bod.

