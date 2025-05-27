---
layout: "lesson"
lang: "nl"
title: "Citaten en referenties"
description: "Deze les toont de basisprincipes van referentiedatabanken. Leer hoe je je eigen databanken opbouwt en hoe je ze gebruikt in documenten met behulp van de twee belangrijkste beschikbare werkwijzen."
toc-anchor-text: "Citaten & referenties"
toc-description: "Werken met referentiedatabanken."
---

# Citaten en referenties

<script>
runlatex.preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<span class="summary">Deze les toont de basisprincipes van referentiedatabanken. Leer hoe je je eigen databanken opbouwt en hoe je ze gebruikt in documenten met behulp van de twee belangrijkste beschikbare werkwijzen.</span>

Voor bibliografische citaten kan je referentiebronnen direct in je document opnemen, maar meestal haal je die informatie uit een of meer externe bestanden.
Zo'n bestand is een referentiedatabank die de informatie bevat in een verwerkingsvriendelijk formaat.
Het gebruik van een of meer referentiedatabanken stelt je in staat informatie te hergebruiken en handmatige opmaak te vermijden.

## Referentiedatabanken

Referentiedatabanken worden normaal gesproken aangeduid als 'BibTeX-bestanden' en hebben de extensie `.bib`.
Ze bevatten een of meer items, één voor elke referentie, en binnen elk item staat een reeks velden.
Laten we een voorbeeld bekijken.

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham en Donald E. Knuth en Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->

Dit is een item voor een artikel en een ander voor een boek;
dit zijn verreweg de meest voorkomende types.
Elk type databankitem begint met `@`, zoals weergegeven, en alle informatie staat dan binnen een paar accolades.

De verschillende benodigde velden worden weergegeven in een sleutel-waardepaar, behalve wat bekend staat als de 'key' of 'sleutel': de 'naam' van de citaatverwijzing.
Je kan kiezen wat je wil, het is slechts een label, maar hierboven hebben we gekozen voor de naam van een auteur plus het jaar: dit is een gangbare aanpak.

Welke velden je precies nodig hebt, hangt af van het type item, maar de meeste zijn vrij duidelijk.
Je zal merken dat in het `author`-veld elke auteur wordt gescheiden door `and`. Dit is _essentieel_: het uitvoerformaat moet weten wie welke auteur is.
Je merkt misschien ook dat in de titel van het artikel sommige onderdelen tussen extra accolades staan; die voorkomen dat er automatisch hoofdletterwijzigingen worden toegepast.

Het handmatig bewerken van `.bib`-bestanden is nogal omslachtig, dus de meeste mensen gebruiken een speciale editor.
[JabRef](https://www.jabref.org) is veelgebruikt en werkt op meerdere platformen, maar er zijn ook andere interfaces beschikbaar.
Als de referentie een DOI (Digital Object Identifier) bevat, kan je [doi2bib](https://doi2bib.org) proberen om gemakkelijk het BibTeX-item te verkrijgen.
Controleer echter altijd of het item correct is!

Hier gebruiken we de korte voorbeelddatabank hierboven voor onze demonstraties: we hebben deze opgeslagen als `learnlatex.bib`.

## Informatie overnemen uit de databank

Om de informatie in je document te krijgen, zijn er drie stappen.
Eerst compileer je je document met LaTeX, wat een bestand aanmaakt met een lijst van de referenties die in je document worden aangehaald.
Vervolgens voer je een programma uit dat informatie uit de referentiedatabank haalt, de gebruikte selecteert, en ze in volgorde zet.
Tot slot compileer je je document opnieuw zodat LaTeX die informatie kan gebruiken om je citaten af te handelen.
Gewoonlijk zijn minstens twee compilaties nodig om alle referenties correct te verwerken.

Voor de tweede stap zijn er twee systemen gangbaar: BibTeX en Biber.
Biber wordt alleen gebruikt met een LaTeX-pakket genaamd `biblatex`, terwijl BibTeX wordt gebruikt zonder extra pakketten of samen met `natbib`.

Het uitvoeren van een extra tool naast LaTeX gebeurt op verschillende manieren in verschillende editors.
In onze online voorbeelden zijn er enkele scripts die alles achter de schermen in één keer doen.
Jouw editor heeft misschien één knop die alles doet, of je moet BibTeX of Biber handmatig uitvoeren tussen LaTeX-compilaties.

De opmaak van citaten en referenties is onafhankelijk van je BibTeX-databank en wordt bepaald door wat bekend staat als een 'stijl'.
We zullen zien dat deze iets anders werken in de BibTeX- en `biblatex`-werkwijze, maar het algemene idee blijft dat we kunnen kiezen hoe citaten worden weergegeven.

## De BibTeX-werkwijze met `natbib`

Hoewel het mogelijk is om citaten in een LaTeX-document in te voegen zonder extra pakketten, is dat vrij beperkt.
In plaats daarvan gebruiken we het `natbib`-pakket, waarmee we verschillende soorten citaten kunnen maken en dat veel stijlen ondersteunt.

De basisstructuur van onze invoer ziet er als volgt uit:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{natbib}

\begin{document}
Het wiskundige voorbeeld komt uit \citet{Graham1995}, terwijl
er wat chemie in \citet{Thomas2008} staat.

Enkele citaten tussen haakjes: \citep{Graham1995}
en dan \citep[p.~56]{Thomas2008}.

\citep[Zie][pp.~45--48]{Graham1995}

Samen \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

Je ziet dat we verschillende items uit de databank kunnen citeren met hun sleutel.
Het `natbib`-pakket biedt zowel citiatiestijlen met tekst als tussen haken, respectievelijk via `\citet` en `\citep`.
De referentiestijl wordt gekozen met de regel `\bibliographystyle`;
hier gebruiken we de stijl `plainnat`.
De bibliografie wordt ingevoegd met `\bibliography`, dat ook de te gebruiken databank(en) bepaalt; 
dit is lijst met namen gescheiden door komma's.

Paginaverwijzingen kunnen worden toegevoegd aan het citaat met een optioneel argument.
Als er twee optionele argumenten worden gegeven, komt de eerste vóór het citaatlabel als korte opmerking en de tweede na het label als paginaverwijzing.

De bovenstaande opzet gebruikt een auteur-jaarstijl, maar je kan ook numerieke verwijzingen gebruiken.
Dat doe je door de optie `numbers` toe te voegen aan de `natbib`-regel.

## TODO De `biblatex`-werkwijze

Het `biblatex`-pakket werkt iets anders dan `natbib`, omdat we de databanken in de preambule selecteren maar ze in het document zelf afdrukken. Daarvoor zijn nieuwe commando's nodig.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % bestand met referentie-informatie

\begin{document}
Het wiskundige voorbeeld komt uit \autocite{Graham1995}.

Meer complexe citaties: \parencite{Graham1995} of
\textcite{Thomas2008} of mogelijk \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[Zie][45-48]{Graham1995}

Samen \autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

Merk op dat `\addbibresource` _het volledige bestandsnaam van de databank vereist_, terwijl we de `.bib` weglaten bij `\bibliography` met `natbib`. Ook merk je dat `biblatex` langere namen gebruikt voor zijn citatiecommando’s, maar ze zijn vrij intuïtief.

Opnieuw kunnen korte teksten vóór en na het citaat worden ingevoegd met de optionele argumenten. Merk op dat de paginanummers hier niet voorafgegaan hoeven te worden door `p.~` of `pp.~`, `biblatex` voegt automatisch de juiste voorvoegsels toe.

In `biblatex` wordt de referentiestijl gekozen bij het laden van het pakket. Hier gebruiken we `authoryear`, maar er is ook een `numeric` stijl en nog veel meer zijn beschikbaar.

## Kiezen tussen de BibTeX-werkwijze en `biblatex`

Hoewel zowel de BibTeX-werkwijze als `biblatex` hun input uit BibTeX-bestanden halen en een vergelijkbare structuur in de output kunnen produceren, gebruiken ze totaal verschillende methodes. Dat betekent dat er enkele verschillen zijn die je kunnen helpen kiezen wat het beste voor jou werkt.

In de BibTeX-werkwijze wordt de bibliografiestijl uiteindelijk bepaald door een `.bst`-bestand dat je selecteert met het `\bibliographystyle`-commando. `biblatex` gebruikt geen `.bst`-bestanden maar een ander systeem. Als je een sjabloon gebruikt dat met een `.bst`-bestand komt of als je een `.bst`-bestand krijgt voor je project, moet je de BibTeX-werkwijze gebruiken en kun je `biblatex` niet gebruiken.

De andere benadering van `biblatex` houdt in dat je de uitvoer van citatie- en bibliografiecommando's rechtstreeks kunt aanpassen vanuit je documentpreambule met LaTeX-commando’s. Aanpassingen aan BibTeX `.bst`-stijlen vereisen daarentegen meestal het bewerken van deze externe bestanden en kennis van de BibTeX-programmeertaal. Over het algemeen wordt `biblatex` als gemakkelijker aanpasbaar beschouwd dan de BibTeX-werkwijze.

In `biblatex` is het over het algemeen eenvoudiger om meer geavanceerde citatiestijlen te implementeren met een groter aantal citatiecommando's. Het biedt ook meer contextafhankelijke functies. Dit is meestal minder van belang voor stijlen die gebruikelijk zijn in bètavakken, maar wel relevant in sommige gebieden van de geesteswetenschappen.

BibTeX kan alleen US-ASCII-tekens correct sorteren en gebruikt omwegen voor andere tekens. Met Biber biedt `biblatex` volledige Unicode-sorteermogelijkheden. Daarom is `biblatex` meestal een betere keuze als je je bibliografie in een niet-ASCII/niet-Engelse volgorde wilt sorteren.

Omdat BibTeX al veel langer bestaat dan `biblatex`, is de BibTeX-werkwijze meer ingeburgerd. Veel uitgevers en tijdschriften verwachten dan ook bibliografieën gegenereerd via de BibTeX-werkwijze. Deze accepteren meestal geen documenten die `biblatex` gebruiken.

Kort samengevat: controleer altijd de auteurs-/indienrichtlijnen als je iets instuurt voor een tijdschrift of uitgever. Als je een `.bst`-bestand krijgt, moet je de BibTeX-werkwijze gebruiken. Als je een relatief eenvoudige bibliografie- en citatiestijl nodig hebt en alleen Engels/US-ASCII-sorting, dan volstaat de BibTeX-werkwijze. Als je een complexere stijl nodig hebt, niet-Engelse sortering of gemakkelijker toegang tot stijl-aanpassingen, bekijk dan `biblatex`.

## Oefeningen

Probeer zowel de `natbib`- als de `biblatex`-voorbeelden uit. Voor `natbib` moet je LaTeX, BibTeX, LaTeX, LaTeX uitvoeren; voor `biblatex` is het LaTeX, Biber, LaTeX. Zoek uit hoe je dat doet in jouw editor, of probeer de automatisering van Overleaf en TeXLive.net.

Bekijk wat er gebeurt als je nieuwe databank-items en nieuwe citaties maakt. Voeg een citaat toe dat niet in de databank staat en bekijk hoe dat wordt weergegeven. Experimenteer met de `numeric` optie van `natbib` en `style=numeric` van `biblatex`.
