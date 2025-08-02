---
layout: "lesson"
lang: "nl"
title: "Basisstructuur van een LaTeX-document"
description: "Deze les laat de basisstructuur van een LaTeX-document zien, hoe je dit dan omzet naar een PDF-bestand, alsook de belangrijkste speciale tekens om LaTeX aan te sturen."
toc-anchor-text: "Documentstructuur"
toc-description: "De basisstructuur van een document."
---

# LaTeX-documentstructuur

<span
  class="summary">Deze les laat de basisstructuur van een LaTeX-document zien, hoe je dit dan omzet naar een PDF-bestand, alsook de belangrijkste speciale tekens om LaTeX aan te sturen.</span>

Je eerste LaTeX-document wordt heel eenvoudig; het doel is om te laten zien hoe een document eruitziet en hoe je het succesvol kan zetten. 
Dit is ook je eerste kans om te zien [hoe je de voorbeelden gebruikt](help) hier op `learnlatex.org`.

Als je een lokale LaTeX-installatie gebruikt, maak dan in je tekstbewerker een nieuw bestand aan met de naam `first.tex` en kopieer de onderstaande tekst of typ deze over.

Als je het online systeem gebruikt, dan kan je gewoon klikken op de knoppen ‘LaTeX Online’ of ‘Open in Overleaf’ in het voorbeeld om het uit te proberen!

<p
  class="hint">We raden aan om de online opties te proberen, zelfs als je LaTeX lokaal hebt geïnstalleerd; dit is een goede kans om te zien hoe de verschillende opties werken.</p>

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\begin{document}
Hallo wereld!

Dit is een eerste document.
\end{document}
```

Merk op dat LaTeX standaard is ingesteld om de (Amerikaans-)Engelse taalregels te volgen, bijvoorbeeld voor woordafbrekingen.
We gebruiken `\usepackage[dutch]{babel}` om dit naar het Nederlands om te zetten.
Bekijk eventueel ook [een latere les](more-06) of de [les specifiek over het gebruik van het Nederlands](language-01).

Sla het bestand op en zet het om naar een PDF-document; 
als je een lokale LaTeX-installatie gebruikt, hangt de knop die je hiervoor moet gebruiken af van de tekstbewerker die je hebt gekozen.
Je zou een PDF-bestand moeten krijgen met de bovenstaande tekst _plus_ een paginanummer;
LaTeX voegt dat automatisch toe.

Bekijk het resultaat `first.pdf` met het programma dat je gebruikt om PDF-bestanden te bekijken.
Ziet er goed uit; gefeliciteerd!

Als je liever HTML-code in plaats van een PDF wil genereren, kijk dan bij de
[hulp](./help) om te zien hoe dat kan.

## Fouten afhandelen

Fouten zijn onvermijdelijk.
Controleer of je elke regel precies hebt ingevoerd zoals hierboven weergegeven.
Soms geven ogenschijnlijk kleine wijzigingen grote veranderingen in het resultaat, waaronder ook het niet werken van het document.
Als je vastloopt, probeer dan het document te wissen en het opnieuw te kopiëren vanuit de regels hierboven.

Als je LaTeX-compilatie eindigt met een vraagteken,  dan kan je afsluiten door `x` en `<Enter>` te typen.

De foutmeldingen van LaTeX proberen behulpzaam te zijn, maar zijn anders dan die van tekstverwerkers.
Soms is het ook moeilijk om de 'volledige' fouttekst te zien, wat belangrijke details kan verbergen. 
LaTeX maakt altijd een logbestand aan van wat het doet;
dit is een tekstbestand dat eindigt op `.log`.
Je kan daar altijd de volledige foutmeldingen terugvinden, en als je een probleem hebt, zullen ervaren LaTeX-gebruikers vaak vragen om een kopie van je logbestand.

<p
  class="hint">We behandelen meer over het omgaan met fouten in <a href="./lesson-15">les 15</a>.</p>

## Wat je nu hebt

Het eerste document toont de basisprincipes.
LaTeX-documenten zijn een combinatie van tekst en commando’s.
De commando’s beginnen met een backslash en hebben soms argumenten tussen accolades (of soms ook optionele argumenten tussen vierkante haken).
Je krijgt dan een uitvoer-PDF door LaTeX te vertellen je bestand te zetten.

Elk LaTeX-document heeft een `\begin{document}` en een bijbehorende `\end{document}`.
Daartussen staat de *documentbody*, waar je inhoud komt.
Hier bevat de body twee paragrafen (in LaTeX scheid je paragrafen door één of meer witregels).
Voor `\begin{document}` staat de *documentpreambule*, die code bevat om de opmaak van het document in te stellen.
Het commando `\usepackage` wordt beschreven in een [latere les](lesson-06) en wordt in de meeste voorbeelden op deze site gebruikt om de lettertypecodering in te stellen.

LaTeX heeft ook andere `\begin{...}` en `\end{...}`-paren; deze heten *omgevingen*.
Je moet ze correct paren, dus voor elke `\begin{x}` moet er een `\end{x}` zijn.
Als je ze nest, moet je `\end{y} ... \end{x}` gebruiken om overeen te komen met
`\begin{x} ... \begin{y}`, d.w.z. de `\begin`- en `\end`-instructies moeten in volgorde overeenkomen.

We kunnen opmerkingen toevoegen aan een LaTeX-bestand door deze te beginnen met `%`;
laten we dat gebruikenom de structuur te tonen:

```latex
\documentclass[a4paper,12pt]{article} % De documentklasse met opties
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
% Een opmerking in de preambule
\begin{document}
% Dit is een opmerking
Dit is   een eenvoudig
document\footnote{met een voetnoot}.

Dit is een nieuwe paragraaf.
\end{document}
```

Je kan hierboven zien dat we twee paragrafen hebben: 
let op het gebruik van een witregel om dat te bereiken. 
Merk ook op dat meerdere spaties worden behandeld als een enkele.

Soms wil je ook een 'harde' spatie die niet over regels afbreekt:
in LaTeX kan je die maken met `~`, die twee stukjes tekst aan elkaar 'bindt'.
Dat is vooral handig als we later in de cursus kruisverwijzingen gaan maken.

## Speciale tekens

Je hebt waarschijnlijk al gezien dat ``\``, `{` en `}` een speciale betekenis hebben in LaTeX.
Een ``\`` begint een instructie aan LaTeX: een 'commando'. De accolades `{` en `}` worden gebruikt om _verplichte argumenten_ aan te geven: informatie die commando’s vereisen.

Er zijn ook andere tekens met speciale betekenis; we zagen bijvoorbeeld al dat `~`
een 'harde' spatie is. 
Bijna al deze tekens komen _zeer_ zelden voor in normale tekst, en daarom zijn ze gekozen voor bijzondere functies.
Als je een van deze speciale tekens tóch in de tekst wil weergeven, lees dan [informatie op de verdiepingspagina](more-03).

## Oefening

Experimenteer met het online bewerk- en opmaaksysteem; 
klik op de knop om de inhoud te zetten, bewerk deze vervolgens op de webpagina en zet hem opnieuw.

Probeer tekst toe te voegen aan je eerste document, het te zetten en de wijzigingen in je PDF te bekijken. 
Maak verschillende paragrafen en voeg variabele witruimte toe.
Verken hoe je tekstbewerker werkt; 
klik op je broncode en kijk hoe je naar dezelfde regel in de PDF kan gaan.
Probeer wat harde spaties toe te voegen en kijk hoe die de regelafbreking beïnvloeden.