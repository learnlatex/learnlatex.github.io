---
layout: "lesson"
lang: "nl"
title: "Wiskunde"
description: "Deze les toont de wiskundemodus van LaTeX en hoe je wiskunde binnen een regel of als alleenstaande vergelijking zet, de uitbreidingen van het amsmath-pakket, en hoe je lettertypes in wiskunde wijzigt."
toc-anchor-text: "Wiskunde"
toc-description: "Wiskundemodus en wiskundige notatie."
---

# Wiskunde

<span
  class="summary">Deze les toont de wiskundemodus van LaTeX en hoe je wiskunde binnen een regel of als alleenstaande vergelijking zet, de uitbreidingen van het amsmath-pakket, en hoe je lettertypes in wiskunde wijzigt.</span>

Het opmaken van complexe wiskunde is een van de sterkste punten van LaTeX.
Je kan wiskunde logisch opmaken in wat bekendstaat als 'wiskundemodus' ('math mode').

## Wiskundemodus

In wiskundemodus worden spaties genegeerd en wordt de correcte afstand tussen tekens (bijna altijd) automatisch toegepast.

Er zijn twee vormen van de wiskundemodus:

* binnen een regel (inline)
* weergave (display)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Een zin met inlinewiskunde: $y = mx + c$.
Een tweede zin met inlinewiskunde: $5^{2}=3^{2}+4^{2}$.

Een tweede paragraaf met weergavewiskunde.
\[
  y = mx + c
\]
Merk op hoe de paragraaf verdergaat na de weergave.
\end{document}
```

Je kan 'LaTeX-achtige' wiskundige invoer ook op andere plaatsen tegenkomen, bijvoorbeeld in het MathJax-systeem voor het tonen van vergelijkingen op webpagina's.
Deze systemen accepteren vaak kleine variaties op de LaTeX-syntaxis omdat ze LaTeX niet daadwerkelijk op de achtergrond gebruiken.

<p
  class="hint">Onze voorbeelden zijn allemaal <i>correcte</i> LaTeX. Als je iets anders ziet in een andere context, kan dat zijn omdat het voorbeeld niet echt LaTeX gebruikt.</p>

### Inlinewiskundemodus en wiskundige notatie

Zoals je hierboven kan zien, wordt inlinewiskundemodus gemarkeerd met een paar dollartekens (`$...$`).
Het is ook mogelijk om de notatie `\( ... \)` te gebruiken.
Eenvoudige expressies worden ingevoerd zonder speciale opmaak, en je ziet dat de wiskunde mooi gespatieerd wordt met cursieve letters.

Inlinewiskundemodus beperkt de verticale grootte van de expressie, zodat de formule de regelafstand van de paragraaf zo min mogelijk verstoort.

Let op dat _alle_ wiskunde gemarkeerd moet worden als wiskunde, zelfs als het om één teken gaat – gebruik `... $2$ ...` en niet `... 2 ...`;
anders kan het gebeuren dat wanneer je bijvoorbeeld een negatief getal nodig hebt en een minteken uit de wiskunde gebruikt, `... $-2$ ...` wiskundecijfers gebruikt die misschien niet hetzelfde lettertype hebben als de tekstcijfers (afhankelijk van de documentklasse).
Let omgekeerd ook op wiskundestructuren in gewone tekst die ergens vandaan zijn gekopieerd, zoals geldbedragen met `$` of bestandsnamen met `_` (die respectievelijk moeten worden gemarkeerd als `\$` en `\_`).

We kunnen eenvoudig superscripts en subscripts toevoegen;
deze worden respectievelijk gemarkeerd met `^` en `_`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Superscripts $a^{b}$ en subscripts $a_{b}$.
\end{document}
```

(Je ziet soms voorbeelden waar eenvoudige super- en subscripts zonder accolades worden ingevoerd, maar dat is geen officiële syntaxis en kan fout gaan; gebruik altijd accolades.)

Er zijn _veel_ gespecialiseerde commando’s voor de wiskundemodus.
Sommige zijn vrij eenvoudig, zoals `\sin` en `\log` voor sinus en logaritme, of `\theta` voor de Griekse letter.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Wat wiskunde: $y = 2 \sin \theta^{2}$.
\end{document}
```

We kunnen hier niet alle standaardcommando’s voor wiskundemodus behandelen, maar er zijn veel online bronnen die de ze vermelden.
Je kan commando’s voor wiskundige symbolen opzoeken via [Detexify](https://detexify.kirelabs.org/classify.html).

### Weergavewiskunde

Je kan exact dezelfde commando’s gebruiken voor weergavewiskunde als voor inlinewiskunde.
Weergavewiskunde is standaard gecentreerd en bedoeld voor grotere vergelijkingen die ‘onderdeel van een paragraaf’ zijn.
Let erop dat wiskunde in weergave geen paragraafeinde toestaat binnen de vergelijking, dus je mag geen lege regels binnen de bron van de wiskunde plaatsen.

De paragraaf moet altijd _voorafgaand_ aan de wiskundige weergave beginnen, dus laat geen lege regel vóór de weergavewiskundeomgeving.
Als je meerdere regels wiskunde nodig hebt, gebruik dan niet opeenvolgende weergaveomgevingen (dit zorgt voor inconsistente afstand);
gebruik in plaats daarvan een meerregelige weergaveomgeving zoals `align` uit het `amsmath`-pakket dat later wordt besproken.

Weergavewiskunde is bijzonder handig voor integralen, bijvoorbeeld:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Een paragraaf over een grotere vergelijking
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Let hier op hoe sub- en superscripts worden gebruikt om de grenzen van de integraal aan te geven.

We hebben hier één stuk handmatige spatiëring toegevoegd: `\,` zorgt voor een kleine spatie vóór de `dx`.
De opmaak van de differentiaaloperator verschilt: sommige uitgevers gebruiken een rechte 'd', anderen een cursieve '_d_'.
Een manier om je bron aanpasbaar te maken is door een commando `\diff` te maken dat je kan wijzigen zoals je wil, [bijvoorbeeld](http://www.tug.org/TUGboat/tb41-1/tb127gregorio-math.pdf):

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\newcommand{\diff}{\mathop{}\!d}            % Voor cursief
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % Voor rechtopstaand
\begin{document}
Een paragraaf over een grotere vergelijking
\[
\int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]
\end{document}
```

Vaak wil je een genummerde vergelijking, wat gedaan wordt met de `equation`-omgeving.
Laten we hetzelfde voorbeeld opnieuw proberen:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
Een paragraaf over een grotere vergelijking
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

Het nummer van de vergelijking wordt automatisch verhoogd en kan een eenvoudig getal zijn zoals in dit voorbeeld, of voorafgegaan worden door een sectienummer, zoals (2.5) voor de vijfde vergelijking in sectie 2.
De details van de opmaak worden bepaald door de documentklasse en worden hier niet behandeld.


## Het `amsmath`-pakket

Wiskundige notatie is zeer uitgebreid, wat betekent dat de hulpmiddelen die in de LaTeX-kern zijn ingebouwd niet alles kunnen voorzien.
Het `amsmath`-pakket breidt de kernfunctionaliteit uit en ondersteunt veel meer concepten.
De [gebruikershandleiding van `amsmath`](http://texdoc.org/pkg/amsmath) bevat veel meer voorbeelden dan we in deze les kunnen tonen.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{amsmath}

\begin{document}
Los de volgende recursiebetrekking op voor $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{voor $n$, $k>0$.}
\end{align*}
\end{document}
```

De `align*`-omgeving zorgt ervoor dat de vergelijkingen netjes uitlijnen op de ampersands, de `&`-symbolen, net als in een tabel.
Merk op dat we `\quad` gebruiken om wat witruimte toe te voegen en `\text` om normale tekst binnen de wiskundemodus te zetten.
We hebben ook een ander wiskundig commando gebruikt, `\binom`, voor een binomiaalcoëfficiënt.

Let op dat we hier `align*` hebben gebruikt, waardoor de vergelijking niet wordt genummerd.
De meeste wiskundeomgevingen nummeren vergelijkingen standaard, en de variant met een sterretje (`*`) schakelt die nummering uit.

Het pakket bevat ook verschillende andere handige omgevingen, bijvoorbeeld voor matrices.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{amsmath}
\begin{document}
AMS-matrices.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

## Lettertypes in wiskundemodus

In tegenstelling tot gewone tekst hebben lettertypeveranderingen in wiskundemodus vaak een zeer specifieke betekenis.
Ze worden daarom meestal expliciet aangegeven.
Er is een hele reeks commando’s beschikbaar:

- `\mathrm`: romein (rechtop)
- `\mathit`: cursief, zoals 'tekst'
- `\mathbf`: vet
- `\mathsf`: schreefloos (sans serif)
- `\mathtt`: monospaced (typemachinestijl)
- `\mathbb`: dubbelgetrokken (**b**lackboard **b**old) (geleverd door het `amsfonts`-pakket)

Deze commando’s nemen Latijnse letters als argument, dus bijvoorbeeld kunnen we een matrix schrijven als:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\begin{document}
De matrix $\mathbf{M}$.
\end{document}
```

Let op dat standaard cursieve wiskunde de letters los van elkaar toont, zodat ze kunnen worden geïnterpreteerd als een product van variabelen.
Gebruik `\mathit` om een woord cursief te maken.

De `\math..`-lettertypecommando’s gebruiken lettertypes die bedoeld zijn voor wiskundig gebruik.
Soms wil je echter een woord opnemen dat grammaticaal deel uitmaakt van de zin en het huidige tekstlettertype moet gebruiken;
hiervoor kun je `\text{...}` gebruiken (geleverd door het `amsmath`-pakket) of specifieke tekstcommando’s zoals `\textrm{...}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}
\usepackage{amsmath}
\begin{document}

$\text{fout gebruik } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{fout gebruik } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```

Als je andere symbolen vet moet maken, [bekijk dan de extra details](more-10).

## Oefeningen

Probeer wat eenvoudige zaken in wiskundemodus: neem de voorbeelden en wissel tussen inline- en weergavewiskunde.
Kan je het verschil zien?

Probeer andere Griekse letters toe te voegen, zowel kleine als hoofdletters.
Je zou de namen moeten kunnen raden.

Experimenteer met de lettertypecommando’s: wat gebeurt er als je ze probeert te nesten?

Weergavewiskunde is standaard gecentreerd;
probeer de documentklasseoptie `[fleqn]` (flush left equation) toe te voegen aan enkele van de bovenstaande voorbeelden om een andere layout te zien.
Evenzo staan vergelijkingsnummers normaal aan de rechterkant.
Experimenteer met het toevoegen van de documentklasseoptie `[leqno]` (left equation numbers).
