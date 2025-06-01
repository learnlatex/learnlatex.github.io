---
layout: "lesson"
lang: "nl"
title: "Omgaan met fouten"
description: "Deze les laat enkele veelvoorkomende fouten in LaTeX-documenten zien, wat ze betekenen en hoe je ermee om kan gaan."
toc-anchor-text: "Fouten afhandelen"
toc-description: "Omgaan met onverwacht gedrag."
---

# Omgaan met fouten

<span
  class="summary">Deze les laat enkele veelvoorkomende fouten in LaTeX-documenten zien, wat ze betekenen en hoe je ermee om kan gaan.</span>

In tegenstelling tot een typisch tekstverwerkingssysteem heeft LaTeX een bewerkings-/uitvoerings-/bekijkcyclus die meer lijkt op het werken met programmeertaalcompilers, en net als bij programmeren kunnen gebruikers fouten maken in hun invoer en moeten ze omgaan met foutmeldingen die door het systeem worden gerapporteerd.

## Veelvoorkomende fouten

Deze pagina geeft voorbeelden van verschillende veelvoorkomende fouten.
Elk foutvoorbeeld bevat een bespreking van de vorm van de foutmelding.

Het kan leerzaam zijn om de voorbeelden uit te proberen, maar ook om de
bewerkingsmogelijkheden te gebruiken om de documenten te proberen te herstellen en te testen of je de fouten kan oplossen.

### pdflatex niet gevonden

Een veelvoorkomende eerste fout die mensen zien bij het beginnen is:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

op Windows of

```
bash: pdflatex: command not found
```
{: .noedit :}

op Linux.

Dit is geen TeX-fout maar een besturingssysteemfout die aangeeft dat TeX niet is geïnstalleerd of niet is gevonden.
Een veelgemaakte fout is het installeren van een _tekstbewerker_ zoals TeXworks of TeXShop, zonder een TeX-systeem zoals TeX Live of MiKTeX te installeren.

### Anatomie van een TeX-foutmelding

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

Mijn commando wordt hierna gebruikt \mycommand.

\end{document}
```

Dit produceert een meerregelige foutmelding in het logbestand.

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 Mijn commando wordt hierna gebruikt \mycommand
                                      .
? 
```
{: .noedit :}

* De eerste regel, gemarkeerd met `!`, geeft de algemene aard van de fout (onbekend commando in dit geval).
* De volgende twee regels tonen de regel die TeX aan het verwerken was, met een regeleinde dat het punt markeert waar TeX was aangekomen.
Het onbekende commando is het laatste dat gelezen werd, dus het laatste woord vóór het regeleinde, `\textbold` hier.
Na het regeleinde volgen de resterende tokens `{hmmm}`, die mogelijk als argument zijn gelezen maar nog niet door TeX zijn uitgevoerd.
* Er kunnen in het algemeen nog enkele aanvullende regels zijn die meer context van de foutmelding tonen.
* De laatste regel begint met `l.` gevolgd door een regelnummer en vervolgens de regel in het bronbestand waar de fout is gedetecteerd.

* De laatste regel is een `?`. Als je TeX interactief gebruikt, kun je hier instructies aan TeX geven, maar de meeste tekstbewerkers en online systemen draaien TeX in een modus die niet stopt bij fouten, maar probeert door te gaan met het verwerken van de rest van het document. Typen van `s` op de prompt zal TeX instrueren om verder te gaan in deze modus als je interactief werkt.

Merk hier op dat TeX de fout niet ziet op het moment dat de definitie wordt gemaakt; en in feite als `\mycommand` is gedefinieerd maar niet wordt gebruikt, zou er geen fout optreden.
Hoewel de fout wordt gemeld op regel 8, zit de "echte" fout in de definitie op regel 4, dus het is belangrijk om de volledige foutmelding te bekijken.

Let op dat sommige tekstbewerkers slechts éénregelige "samenvattingen" van de foutlog tonen.
Dit kan bijzonder misleidend zijn als het wordt weergegeven als:

`line 8: undefined command: ...\mycommand`

omdat het dan lijkt alsof `\mycommand` niet is gedefinieerd.

### Niet-overeenkomende accolades

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Hier is de fout een niet-overeenkomende `}` die wordt gebruikt om het optionele argument te beëindigen.
De sluitende accolade zorgt ervoor dat LaTeX’s optiesparser faalt, en je krijgt een interne en niet erg behulpzame foutmelding:

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Hoewel de foutbeschrijving niet behulpzaam is, tonen de volgende twee regels wel nauwkeurig de locatie van de fout aan de hand van het regeleinde dat laat zien hoe ver TeX had gelezen:

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}

### Ontbrekende bestanden

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

Dit levert de fout op:

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Opmerking: dezelfde fout kan twee verschillende oorzaken hebben;
een eenvoudige typefout zoals hier, die kan worden opgelost door de pakketnaam te corrigeren, of dat het bestand echt ontbreekt en geïnstalleerd moet worden op het huidige systeem.

### Lege regels in weergavewiskunde

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\begin{document}

Wat tekst
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Dit levert volgende (enigszins mysterieuze) fout op:

```
! Missing $ inserted.
```
{: .noedit :}

Maar de oplossing is eenvoudig: lege regels zijn niet toegestaan in wiskunde-omgevingen en moeten worden verwijderd.

## Oefening

Probeer de fouten in de meegeleverde voorbeelden te corrigeren.

Maak kleine documenten met verschillende fouten en let op de vorm van de foutmeldingen.

<script>
window.addEventListener('load', function(){
  rlselectline('pre2',4);
  rlselectline('pre4',4);
  rlselectline('pre7',4);
  rlselectline('pre9',8);
    }, false);
 </script>
