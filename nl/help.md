---
layout: "page"
lang: "nl"
title: "De learnlatex.org-website gebruiken"
description: "Deze pagina legt uit hoe de learnlatex.org-website werkt en hoe je deze het beste kan gebruiken."
permalink: /nl/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# Hulp

## Wegwijs op de site

De cursus bestaat uit 16 kernlessen die te vinden zijn via de [inhoudsopgave]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}) op de [startpagina](./).

Elke les heeft een link naar een bijbehorende les over hetzelfde onderwerp die dieper op de materie ingaat.
Het is mogelijk om alle 16 lessen door te nemen _zonder_ de aanvullende lessen te lezen.

Aan het eind van de cursus zijn er één of meer lessen specifiek gericht op de
taal waarin je de lessen volgt, en tot slot een galerij met voorbeelden
van LaTeX-pakketten die buiten deze cursus vallen.

---

## Voorbeelden

### Voorbeelden uitvoeren

Elk voorbeeld is een volledig, klein LaTeX-document dat binnen de pagina wordt weergegeven zoals hier:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\begin{document}
Voorbeeldtekst.
\end{document}
```

Elk voorbeeld is volledig, maar je kan het aanpassen om kleine wijzigingen te maken, bijvoorbeeld als onderdeel van een oefening aan het eind van de les.

Er worden twee tekstbewerkers gebruikt op de site (afhankelijk van de pagina).

* [ACE](https://ace.c9.io/).

  Je kan het thema van de tekstbewerker aanpassen (bijvoorbeeld een donker thema met lichte tekst op een donkere achtergrond) op de pagina [Site-instellingen](settings).
  Een handige manier om met thema’s te experimenteren is door <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>⌘</kbd>+<kbd>,</kbd> op Mac) in te drukken terwijl je op een voorbeeld staat.
  [Hiermee wordt een paneel geopend](javascript:acesettings()) waarmee je alle ACE-instellingen kan aanpassen.

  De ACE-repository heeft een [pagina met handige sneltoetsen](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts).

* [CodeMirror6](https://codemirror.net/)

  Momenteel zijn er twee CodeMirror-thema's beschikbaar (licht en donker).

#### Drie manieren om een voorbeeld uit te voeren

* Gebruik Overleaf
* Gebruik TeXLive.net
* Gebruik een lokaal geïnstalleerd TeX-systeem

##### Gebruik Overleaf

Overleaf is een van de populairste online LaTeX-bewerkers.
De knop <button>Open in Overleaf</button> onder het voorbeeld verstuurt de code naar [Overleaf](https://www.overleaf.com/about).

Als je geen account hebt, of als de gegevens niet in je browser zijn opgeslagen, word je doorgestuurd naar een inlogpagina waar je kan inloggen of registreren bij Overleaf.
Dit is een gratis dienst, maar je moet wel wat gegevens verstrekken en akkoord gaan met de voorwaarden.

Als je al bent ingelogd, opent Overleaf in een nieuw tabblad met een nieuw project dat de voorbeeldcode bevat.
Je kan deze vervolgens bewerken in Overleaf, dat automatisch LaTeX uitvoert op je code en de uitvoer of foutmeldingen toont.

In tegenstelling tot documenten die via TeXLive.net verwerkt zijn, kan je
projecten in Overleaf opslaan en later opnieuw openen.

##### Gebruik TeXLive.net

De knop <button>Uitvoeren met TeXLive.net</button> onder het voorbeeld stuurt de code naar [TeXLive.net](https://texlive.net)[^1].

Deze dienst is speciaal ontwikkeld voor deze website, en maakt onder andere gebruik van [PDF.js](https://mozilla.github.io/pdf.js/) om PDF-bestanden weer te geven in browsers (ook op mobiel) die geen ingebouwde PDF-lezer hebben.

Het resulterende PDF-document (of een deel van het foutlogboek) wordt direct onder het voorbeeld weergegeven.
Er verschijnt een knop <button>Verwijder output</button> zodat je deze uitvoer kan verwijderen (of je kan de uitvoer ook laten staan en verdergaan met de les).

Let op: **TeXLive.net** vereist geen inloggegevens of registratie,
dus het is erg handig voor kleine voorbeelden.
Deze site biedt echter geen manier om documenten op te slaan.
Wijzigingen die je aanbrengt in het voorbeeld gaan verloren als je de pagina verlaat.

##### Lokaal geïnstalleerd TeX-systeem

Als je een lokaal TeX-systeem hebt geïnstalleerd, kan je de voorbeeldcode van de pagina kopiëren.
Je kan dit doen door de code handmatig te selecteren of door de sneltoetsen voor "alles selecteren" te gebruiken (<kbd>Ctrl</kbd>+<kbd>A</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd> op Windows, bijvoorbeeld).
Hiermee kopieer je de code naar het klembord van je besturingssysteem zodat je een leeg document kan starten in je lokale tekstbewerker en de code erin kan plakken.

### Problemen oplossen

Onze voorbeelden zijn gebaseerd op een up-to-date LaTeX-installatie.
Ze werken allemaal met beide online demonstratiesystemen.
Als je fouten krijgt bij het uitvoeren van de voorbeelden, ga dan na of je LaTeX-installatie up-to-date is.

---

## De TeX-engine kiezen

Bij het uitvoeren van voorbeelden wordt standaard de `pdflatex`-engine gebruikt.

Je kan zelf een andere engine kiezen, zoals `latex`, `pdflatex`, `xelatex`, `lualatex`, `platex` of `uplatex`, door een opmerking toe te voegen in de vorm:

`% !TEX ` _willekeurige tekst_ `lualatex`

De spatie aan het begin is optioneel, hoofdlettergebruik maakt niet uit, en de _willekeurige tekst_ tussen het begin en de engine wordt genegeerd.

Dit maakt het mogelijk om de notatie `% !TEX program=pdflatex` te gebruiken, zoals sommige tekstbewerkers doen, maar het vereist `program=` niet en is momenteel beperkt tot engines die ondersteund worden op de online systemen van deze site.

Een voorbeeld van zo’n commentaar om LuaLaTeX te gebruiken vind je
[in sommige voorbeelden op deze site](more-14).

Als `platex` of `uplatex` gekozen is, wordt ook het programma `dvipdfmx` gebruikt om van het DVI-bestand een PDF te maken.
Op vergelijkbare wijze worden `dvips` en `ps2pdf` gebruikt als `latex` is gespecificeerd.

Als er geen engine wordt gespecificeerd via `% !TeX`, dan wordt `pdflatex` gebruikt, tenzij je een andere standaardengine hebt gekozen op de pagina [Site-instellingen](settings).

---

## TODO Choosing how to display the output

If you use the TeXLive.net system, then the PDF
output from running an example is shown using
[PDF.js](https://mozilla.github.io/pdf.js/) by default. This provides
consistent behavior over the widest range of browsers.

If you would prefer to use your browser's default PDF reader (either
its built in one, or an external application that you have configured)
then add a comment of the form:

`% !TEX ` _any text_ `pdf`

The default behavior can be explicitly specified by using `pdfjs` as
the final token. For debugging you may sometimes want the log file
returned, even if the document produces a PDF with
no errors. This can be specified by using `log` as the final token in
the comment.

As an alternative to using a `% !TeX` comment, you may specify the
site default return parameter on the [Site Settings](settings)
page. The Settings are specific to each browser, so for example you
may choose to use the default `pdfjs` setting on your mobile device,
but use `pdf` on your desktop browser to use its default PDF rendering.


---

## HTML output (make4ht, LaTeXML, lwarp)

If using the TeXLive.net system, then additional return options,
`make4ht`, `LaTeXML` or `lwarp` may be specified. These return one or more HTML pages
in the frame within the page. It may be specified at the same time
as `xelatex` or `lualatex` as well as the default `pdflatex` processing.

To enable this output, add a comment of the form:


```
% !TeX make4ht
```
{: .noedit :}


Replacing `make4ht` by `LaTeXML` or `lwarp` to specify those systems.



Alternatively you may specify `make4ht`, `LaTeXML` or `lwarp` as the default return option
on the [Site Settings](settings) page.


If using a locally installed TeX system, the same output as the `make4ht` option may be obtained
by executing

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

with the addional option `-x` or `-l` if XeLaTeX or LuaLaTeX are specified.

When running locally, other configurations would be possible. See the [make4ht
manual](https://texdoc.org/pkg/make4ht).


For `LaTeXML` to run locally, you would need to install LaTeXML (it is not part of TeX Live or MiKTeX)
and use

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Many other LaTeXML configurations are possible,
[as described in the manual](https://dlmf.nist.gov/LaTeXML/manual/).


The `lwarp` configuration is not documented here, it is somewhat experimental and subject to change.
The current version can be seen at the
[source repository](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: Note that during development of the site we have also used 
      [LaTeX.Online](https://latexonline.cc/) and
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      and we thank the developers of those services for making updates to enable
      the examples on this site to be available at an early stage.


