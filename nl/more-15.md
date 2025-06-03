---
layout: "lesson"
lang: "nl"
title: "Meer over: Fouten afhandelen"
description: "Deze les toont nog enkele veelvoorkomende fouten in LaTeX en legt uit over geketende fouten en stille fouten."
toc-anchor-text: "Meer over: Fouten afhandelen"
---

## Fouten die aan het einde van omgevingen worden gemeld

Sommige omgevingen (met name `amsmath`-uitlijningen en `tabularx`-tabellen) scannen de volledige inhoud van de omgeving voordat ze die verwerken.
Dit betekent dat elke fout binnen de omgeving op de laatste regel wordt gemeld. 
Zoals te zien in de hoofdles zou de foutcontext van TeX nog steeds de foutlocatie moeten aangeven.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

Hier wordt de fout gemeld op regel 13

```
l.13 \end{align}
```
{: .noedit :}

Hoewel de echte fout op regel 11 staat, zoals te zien is in de contextregels:

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}

## Nepfouten door eerdere fouten

Wanneer je LaTeX interactief aanroept via de opdrachtregel, kan je
de verwerking stoppen bij de eerste fout met `x`, het document bewerken
en opnieuw uitvoeren.
Maar als je langs de fout scrolt of een tekstbewerker of online systeem gebruikt dat dat automatisch doet, zal TeX zich proberen te herstellen;
dit kan echter leiden tot meerdere foutmeldingen.

Maak je dus niet al te veel zorgen over het _aantal_ gerapporteerde fouten en
richt je altijd op het oplossen van de eerste gemelde fout.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\begin{document}
Tekst_woord  $\alpha + \beta$.

Meer tekst
\end{document}
```

De fout hier is de underscore `_`, die als `\_` moet worden ingevoerd.

TeX meldt dit correct met de _eerste_ foutmelding:

```
! Missing $ inserted.
<inserted text> 
                $
l.6 Tekst_
          woord  $\alpha + \beta$.
?
```
{: .noedit :}

Als je echter langs de `?`-prompt scrolt, herstelt TeX zich door een `$` toe te voegen zodat de `_` wordt gezien als een subscript in de wiskundige modus.
De wiskundige modus gaat dan door tot de `$`, waarna `\alpha` wordt gezien als tekst, wat een nieuwe fout veroorzaakt:

```
! Missing $ inserted.
<inserted text> 
                $
l.6 Tekst_woord  $\alpha
                        + \beta$.
? 
```
{: .noedit :}

## Fouten die geen foutprompt veroorzaken

Sommige fouten, met name fouten die pas aan het einde van het bestand worden gedetecteerd, genereren geen foutprompt, maar geven alleen een waarschuwing in het logbestand.

Als je dit voorbeeld probeert met de TeXLive.net-server, krijg je standaard een PDF;
om de foutmelding in het logbestand te zien, voeg `%!TeX log` toe.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[dutch]{babel}

\begin{document}

 Tekst {\large wat grote tekst) doorsnee grootte?

\end{document}
```

In dit voorbeeld is de grootteverandering per ongeluk beëindigd met `)` in plaats van met `}`.
Dit wordt pas aan het einde van het bestand gedetecteerd wanneer TeX merkt dat er nog een niet-gesloten groep is.
TeX meldt dan de regel waarop de groep werd geopend `{`.
De echte fout kan niet worden gedetecteerd omdat `)` wordt gezien als "normale tekst".

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 8 ({)
```
{: .noedit :}

<script>
window.addEventListener('load', function(){
  rlselectline('pre0',10);
  rlselectline('pre3',5);
  rlselectline('pre6',6);
  }, false);
</script>
