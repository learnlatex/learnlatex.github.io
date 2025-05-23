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

De paragraaf moet altijd _voorafgaand_ aan de wiskundige weergave beginnen, dus laat geen lege regel vóór de weergavewiskunde-omgeving.
Als je meerdere regels wiskunde nodig hebt, gebruik dan niet opeenvolgende weergave-omgevingen (dit zorgt voor inconsistente afstand);
gebruik in plaats daarvan een meerregelige weergaveomgeving zoals `align` uit het `amsmath`-pakket dat later wordt besproken.

Het is vooral handig voor integralen, bijvoorbeeld:

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


## TODO The `amsmath` package

Mathematical notation is very rich, and this means that the tools built
into the LaTeX kernel can't cover everything. The `amsmath` package
extends the core support to cover a lot more ideas.
The [`amsmath` User Guide](http://texdoc.org/pkg/amsmath)
contains many more examples than we can show in this lesson.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Solve the following recurrence for $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

The `align*` environment makes the equations line up on the ampersands, the `&`
symbols, just like a table. Notice how we've used `\quad` to insert a bit of
space, and `\text` to put some normal text inside math mode. We've also used
another math mode command, `\binom`, for a binomial.

Notice that here we used `align*`, and the equation didn't come out numbered.
Most math environments number the equations by default, and the starred variant
(with a `*`) disables numbering.

The package also has several other convenient environments, for
example for matrices.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
AMS matrices.
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

## Fonts in math mode

Unlike normal text, font changes in math mode often convey very specific meaning.
They are therefore often written explicitly. There are a set of commands you need
here:

- `\mathrm`: roman (upright)
- `\mathit`: italic spaced as 'text'
- `\mathbf`: boldface
- `\mathsf`: sans serif
- `\mathtt`: monospaced (typewriter)
- `\mathbb`: double-struck (blackboard bold) (provided by the `amsfonts` package)

Each of these takes Latin letters as an argument, so for example we might
write a matrix as

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
The matrix $\mathbf{M}$.
\end{document}
```

Note that the default math italic separates letters so that they may
be used to denote a product of variables. Use `\mathit` to make a word italic.

The `\math..` font commands use fonts specified for math
use. Sometimes you need to embed a word that is part of the outer
sentence structure and needs the current text font, for that you can
use `\text{...}` (which is provided by the `amsmath` package) or
specific font styles such as `\textrm{..}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}

$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```


If you need to make other
symbols bold, [see the extra details](more-10).

## Exercises

Try out some basic math mode work: take the examples and switch between
inline and display math modes. Can you see what effect this has.

Try adding other Greek letters, both lower- and uppercase. You should be
able to guess the names.

Experiment with the font changing commands: what happens when you try to
nest them?

Displayed math is centered by default; try adding the document class
option `[fleqn]` (flush
left equation) option to some of the above examples to see a different
layout. Similarly equation numbers are usually on the
right. Experiment with adding the `[leqno]` (left equation numbers)
document class option.
