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

## Weergave van de uitvoer kiezen

Als je het TeXLive.net-systeem gebruikt, dan wordt de PDF-uitvoer van een voorbeeld standaard weergegeven met [PDF.js](https://mozilla.github.io/pdf.js/).
Dit zorgt voor consistent gedrag in de meeste browsers.

Als je liever de standaard PDF-lezer van je browser gebruikt (bijvoorbeeld de ingebouwde lezer of een extern programma dat je hebt ingesteld), voeg dan een opmerking toe van de vorm:

`% !TEX ` _willekeurige tekst_ `pdf`

Het standaardgedrag kan ook expliciet worden aangegeven door `pdfjs` als laatste woord te gebruiken.
Voor foutopsporing wil je soms het logbestand terugkrijgen, zelfs als het document zonder fouten een PDF produceert.
Dat kan je doen door `log` als laatste woord in het commentaar te gebruiken.

In plaats van een `% !TeX`-commentaar te gebruiken, kan je ook de standaard uitvoeroptie instellen op de pagina [Site-instellingen](settings).
De instellingen zijn browserspecifiek, dus je kan bijvoorbeeld de standaardinstelling `pdfjs` gebruiken op je mobiel apparaat, en `pdf` op je desktopbrowser om gebruik te maken van de ingebouwde PDF-weergave van de browser.

---

## HTML-uitvoer (make4ht, LaTeXML, lwarp)

Als je het TeXLive.net-systeem gebruikt, dan zijn er extra uitvoeropties beschikbaar: `make4ht`, `LaTeXML` of `lwarp`.
Deze leveren één of meer HTML-pagina's in het kader binnen de webpagina.
Je kan deze opties combineren met `xelatex` of `lualatex`, naast de standaard `pdflatex`-verwerking.

Om deze uitvoer in te schakelen, voeg je een commentaarregel toe van de vorm:

```
% !TeX make4ht
```
{: .noedit :}

Vervang `make4ht` door `LaTeXML` of `lwarp` om die systemen te gebruiken.

Je kan `make4ht`, `LaTeXML` of `lwarp` ook instellen als standaard uitvoeroptie op de pagina [Site-instellingen](settings).

Als je een lokaal geïnstalleerd TeX-systeem gebruikt, kan je dezelfde uitvoer als met `make4ht` verkrijgen
door het volgende commando uit te voeren:

```
make4ht document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

Voeg de extra optie `-x` of `-l` toe als je respectievelijk XeLaTeX of LuaLaTeX gebruikt.

Bij lokaal gebruik zijn ook andere configuraties mogelijk.
Zie de [handleiding van make4ht](https://texdoc.org/pkg/make4ht).

Om `LaTeXML` lokaal uit te voeren, moet je LaTeXML installeren (het maakt geen deel uit van TeX Live of MiKTeX)
en gebruik je de volgende commando's:

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html document.tex
```
{: .noedit :}

Veel andere LaTeXML-configuraties zijn mogelijk, [zoals beschreven in de handleiding](https://dlmf.nist.gov/LaTeXML/manual/).

De configuratie voor `lwarp` wordt hier niet gedocumenteerd.
Deze is enigszins experimenteel en kan veranderen.
De huidige versie is te vinden bij de [online broncode](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).

---

[^1]: Tijdens de ontwikkeling van de site hebben we ook gebruikgemaakt van
      [LaTeX.Online](https://latexonline.cc/) en
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http),
      en we danken de ontwikkelaars van deze diensten voor het mogelijk maken
      van voorbeeldondersteuning in een vroeg stadium.
