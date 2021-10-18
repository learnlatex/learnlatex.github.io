---
layout: "lesson"
lang: "lt"
title: "Extending LaTeX using packages and definitions"
description: "Ši pamoka parodo, kaip galite praplėsti LaTeX pagal savo poreikius: pakeisti išvesties dokumentų išvaizdą, panaudojant įvairius paketus, ir apibrėžti savo komandas."
toc-anchor-text: "LaTeX praplėtimas"
toc-description: "Paketų ir apibrėžimų panaudojimas."
---

# LaTeX praplėtimas

<span
  class="summary">Ši pamoka parodo, kaip galite praplėsti LaTeX pagal savo poreikius: pakeisti išvesties dokumentų išvaizdą, panaudojant įvairius paketus, ir apibrėžti savo komandas.</span>

Deklaravę preambulėje dokumento klasę, galite toliau modifikuoti LaTeX veikimą, pridėdami vieną ar daugiau *paketų*. Jie gali

- pakeisti kai kurių LaTeX dalių veikimą,
- pridėti naujų komandų prie jau apibrėžtų klasėje ir LaTex branduolyje,
- pakeisti dokumento išvaizdą.

## LaTeX darbo keitimas

LaTeX 'branduolys' (esminė LaTeX dalis) nėra lengvai pritaikomas vartotojo
poreikiams, bet papildomi paketai išsprendžia daugumą dažniausiai sutinkamų
problemų.  Pirmiausia verta paminėti, kaip LaTeX prisitaiko prie konkrečios
kalbos rašymo taisyklių (žodžių kėlimo, skyrybos, citatų atskyrimo,
lokalizacijos ir kt.).  Jos yra surinktos `babel` („Babylono“) pakete, kuriam
reikia nurodyti dokumente naudojamas kalbas.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[french]{babel}

\usepackage[width = 6cm]{geometry} % kad priversti kelti žodžius

\begin{document}

This is a lot of filler which is going to demonstrate how LaTeX hyphenates
material, and which will be able to give us at least one hyphenation point.
Voici beaucoup de texte de remplissage pour démontrer comment le LaTeX s'occupe des
coupures de mots en fin de ligne; pour ça, il nous faut au moins un point de césure.
Čia daugiausia tik vietos užpildymui skirtas tekstas, demonstruojantis, kaip 
\LaTeX{} perkėlinėja žodžius, ir turintis pademonstuoti nors vieną kėlimą. 
\end{document}
```

Pabandykite atkomentuoti (aiškiai netinkamą) eilutę su prancūzų kalbos
nustatymu `babel` pakete ir pastebėkite efektą išvesties dokumente
(standartiškai LaTeX veikia JAV anglų kalbos kėlimo taisyklės.)

Šis paketas apibrėžia daug daugiau dalykų, priklausomų nuo kalbos, nei tik
žodžių kėlimas; galite [daugiau apie juos sužinoti](more-06), jei įdomu.


## Dizaino keitimas

Naudinga sugebėti pakeisti kai kuriuos dizaino aspektus nepriklausomai nuo
dokumentų klasės. Labiausiai krentantis į akis dalykas yra puslapio dydis
(arba paraštės). Mes ką tik panaudojome `geometry` paketą pavyzdyje aukščiau,
bet dabar panagrinėkime pavyzdį, skirtą paraštėms (dėmesio, išvesties
dokumentas turi daugiau nei vieną puslapį):

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
Hey world!

This is a first document.


% ================
\chapter{Chapter One}
Introduction to the first chapter.


\section{Title of the first section}
Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.


% ================
\section{Second section}

Text of the second section.

\end{document}
```

Jūs turėtumėte pastebėti efektą, palygindami rezultatą su gautu užkomentavus
`geometry` paketo eilutę.

## Naujo funkcionalumo pridėjimas

Viena iš LaTeX stiprybių yra galimybė pasirinkti iš tūkstančių paketų tuos,
kurie skirti jūsų poreikiams tenkinti: rašyti matematines formules, kurti
interaktyvias nuorodas, išgauti norimus spalvų deruinius ir pan.  Vėlesnėse
pamokose pamatysime kai kuriuos dažnai naudojamus paketus.


## Komandų apibrėžimas

Kartais jums prireikia komandos, pritaikytos jūsų dokumentui, arba dėl tam
tikro veikimo, nerasto turimuose paketuose, arba kad patogiai įvestumėte
bendrą išraišką, kurią naudojate daug kartų.

Šiame pavyzdyje parodyta komanda, kuri išveda raktinius žodžius konkrečiu stiliumi:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\kw[1]{\textbf{\itshape #1}}

\begin{document}

Something about \kw{apples} and \kw{oranges}.

\end{document}
```

Apibrėžime `[1]` nurodo komandos argumentų skaičių (vienas), ir `#1` pažymi
vietą, kurioje pirmasis (ir vienintelis šiuo atveju) argumentas bus įstatytas
(`apples` arba `oranges` šiame pavyzdyje). Jūs galite panaudoti iki devynių
argumentų, bet dažniausiai apsieinama su vienu ar visai be argumentų.

Apibrėždami komandas galite ne tik sumažinti spausdinimą, reikalingą
dokumentui parengti. Jūs galite atskirti pateikimo formą (dizaino sprendimus)
nuo turinio.  Jei nuspręsite raktiniams žodžiams naudoti kitokį stilių, tai,
užuot redagavę visą dokumentą, jūs tiesiog pakeisite apibrėžimą.

Dabar mes pakrausime `xcolor` packetą, įgalinantį naudoti spalvas, ir
panaudosime mėlyną (`blue`) spalvą vietoje šrifto pastorinimo:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[1]{\textcolor{blue}{\itshape #1}}

\begin{document}

Something about \kw{apples} and \kw{oranges}.

\end{document}
```

Turėkite omenyje, kad apibrėždami labai daug komandų arba komandas su
daugeliu argumentų, padarote LaTeX įvesties dokumentą sunkiau suprantamą
(kitiems ar net jums vėliau), nes naudojate naują sintaksę.  Galimybė
apibrėžti konkrečiam dokumentui skirtas komandas turėtų būti naudojama
saikingai.

## Pratimai

Pabandykite parašyti tekstą kitomis Europos kalbomis ir pažiūrėkite, kaip
`babel` panaudojimas paveikia žodžių kėlimą: jūs tikriausiai galite surasti
kokį nors tekstą internete ir atspėti tinkamus `babel` nustatymus.

Pabandykite pakeisti paraštes `geometry` naudojimo pavyzdyje. Jūs galite
priskirti skirtingus dydžius `top` (viršutiniajai), `bottom` (apatiniajai),
`left` (kairiajai) ir `right (dešiniajai) paraštėms, atskirdami lygybes
kableliais.

Pabandykite įkelti `lipsum` paketą ir tada pridėti `\lipsum` komandą į jūsų
dokumento kūną. Ar galite atspėti, kodėl šis paketas naudingas kuriant
dokumentų pavyzdžius?

Pabandykite pakeisti `\kw` apibrėžimą, kad pritaikyti skirtingus šriftų stilius. 
