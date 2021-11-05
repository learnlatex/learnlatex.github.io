---
layout: "lesson"
lang: "lt"
title: "Daugiau apie dokumentų struktūrą"
description: "Ši pamoka parodo, kaip koduojami dokumento antraštės dalys ir kaip konstruoti aprašymų sąrašus."
toc-anchor-text: "Daugiau apie dokumentų struktūrą"
---

## Dokumento antraštė

LaTeX siūlo tam tikrą loginį dokumentų antraščių sužymėjimą: trys komandos
metaduomenims apibrėžti ir viena &ndash; juos išvesti.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{A.~N.~Other \and D.~Nobacon}
\title{Some things I did}
\date{1st April 2020}
\maketitle

Some normal text.
\end{document}
```

Kaip matote, komandos `\author`, `\title` ir `\date` išsaugo informaciją, o
`\maketitle` ją panaudoja.  Kelis autorius galite atskirti su `\and` komanda.
Komandos `\author`, `\title` ir `\date` turi eiti prieš `\maketitle`. Čia mes
jas pateikėme dokumento kūne, nors jos taip pat gali būti preambulėje, tačiau
tada, kai naudositės `babel` paketo ypatybėmis, jos ten dar nebus aktyvuotos.

Komandos `\maketitle` išvesties maketas suprogramuotas dokumentų klasėje
(žr. [5-tąją pamoką](lesson-05)).  Kai jūs norite pats kurti antraštės
dizainą, tam yra skirta `titlepage` aplinka, tačiau jos aptarimas nepateko į
šį įvadą.  Jei norite pats kurti viso savo dokumentų dizainą, galite arba
naudoti klasę su lanksčiomis konfigūravimo galimybėmis, kaip, pavyzdžiui,
`memoir`, arba kurti savo klasę, pradėdami nuo vienos iš LaTeX bazinių
klasių, kaip `book`, ir modifikuodami pagal savo poreikius.


## Aprašomieji sąrašai

Be numeruotų (`enumerate` aplinka) ir nenumeruotų (`itemize` aplinka) sąrašų
tipų, LaTeX pateikia dar vieną, rečiau naudojamą: „aprašomąjį" sąrašo tipą.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

\begin{description}
\item[Dog:] member of the genus Canis, which forms part of the wolf-like canids,
  and is the most widely abundant terrestrial carnivore.
\item[Cat:] domestic species of small carnivorous mammal. It is the only
  domesticated species in the family Felidae and is often referred to as the
  domestic cat to distinguish it from the wild members of the family.
\end{description}

\end{document}
```

## Pratimai

Pakeiskite `\author`, `\title` ir `\date` komandų argumentus, kad pratestuoti
`maketitle` veikimą.  Kurios iš trijų komandų yra _tikrai_ būtinos?  Ar
komandų argumentuose galia būti bet koks tekstas, tame tarpe ir jokio teksto?

Sudarykite keletą aprašomųjų sąrašų, o kai kuriuos iš jų įdėkite į kitus
sąrašus (numeruotus, nenumeruotus ar aprašomuosius).
