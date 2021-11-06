---
layout: "lesson"
lang: "lt"
title: "Daugiau apie LaTeX išplėtimą paketais ir apibrėžimais"
description: "Ši pamoka daugiau papasakoja apie paketų prijungimą, apie `babel` paketą kalbos pasirinkimui ir pateikia daugiau detalių apie naujų komandų apibrėžimą."
toc-anchor-text: "Daugiau apie LaTeX išplėtimą paketais ir apibrėžimais"
---

## Daugelio paketų naudojimas vienu metu

Komanda `\usepackage` priima kableliais atskirtą paketų sąrašą, todėl viena
komanda gali įkelti kelis paketus, pavyzdžiui, `\usepackage{color,graphicx}`.
Jei neprivalomajame komandos argumente perduodate paketo parinktis, jos bus
taikomos kiekvienam sąrašo paketui, bet ne visuose jos gali būti numatytos.
Mums lengviau komentuoti paketus, jei jie įkeliami atskirai.  Taigi mes
laikysimės praktikos kiekvieną paketą įkelsime atskiroje eilutėje.


## `babel` paketas

Mes pristatėme `babel` paketą [pagrindinėje pamokoje](lesson-06) kaip
priemonę pasirinkti skirtingus žodžių kėlimo modelius. Bet jis daro daug
daugiau nei tik tai, atsižvelgdamas į vartojamą (-as) kalbą (-as).
Pavyzdžiui, vokiečių kalbai jis pateikia keletą trumpinių, nurodančių vietas
galimiems žodžių lūžiams, taip pat būdą greitai įvesti vokiškus akcentus be
vokiškos klaviatūros.  Taip pat pastebėkite, kad skyriaus antraštė _Table of
Contents_, paprastai sukuriama komandos `\tableofcontents`, pasikeitė į
vokišką _Inhaltsverzeichnis_.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Pastebėkite, kad parinkties vardas 'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.


\end{document}
```

Kiti kalbos parametrai keičia formatavimą, pavyzdžiui, tradicinėje prancūzų
tipografijoje yra tarpas prieš kai kuriuos skyrybos ženklus, kaip `:` ir
`babel` tai prideda automatiškai, jei įkeliate jį su parinktimi `french`.


## Globalios parinktys

Kartais reikia, kad parinktis būtų prieinama visiems jūsų įkeltiems paketams.
Tada ji nurodoma prie komandos `\documentclass` ir kiekvienas paketas gali
„pamatyti“ šį sąrašą.  Taigi, norėdami perduoti dokumento kalbą visiems
paketams, galime naudoti:

```latex
\documentclass[ngerman]{article} % Pastebėkite, kad parinkties vardas 'ngerman'
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## Daugiau apibrėžimų

Komanda `\newcommand` gali apibrėžti naujas komandas, turinčias iki devynių
argumentų, iš kurių pirmasis gali būti neprivalomas.

Paimkime pavyzdį iš pagrindinės pamokos, ir padarykime spalvos argumentą
neprivalomu, pagal nutylėjimą imdami mėlyną.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Something about \kw{apples} and \kw[red]{oranges}.

\end{document}
```

Neprivalomas argumentas yra nurodomas laužtiniuose skliaustuose `[]`, o jei
jis yra praleistas, tada naudojama apibrėžime nurodyta reikšmė.


## `\NewDocumentCommand`

Nuo 2020 m. spalio mėn. laidos LaTeX turi išplėstą apibrėžimų sistemą.
Senesnėse LaTeX laidose ji buvo pasiekiama prijungus `xparse` paketą, kurį
mes čia irgi naudojame suderinamumui pasiekti.

Aukščiau pateiktą pavyzdį galime pakartoti, bet naudodami
`\NewDocumentCommand`:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Reikalingas tik senesnėms LaTeX laidoms
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Something about \kw{apples} and \kw[red]{oranges}.

\end{document}
```

Kaip ir `\newcommand`, `\NewDocumentCommand` priima apibrėžiamą komandą (čia
`\kw`) ir apibrėžimo kūną su argumentais nurodytais nuo `#1` iki `#9`, tačiau
turi skirtingą argumentų deklaravimo dalį.

Kitaip nei su `\newcommand`, kuriai nurodomas tik argumentų skaičius ir yra
galimybė padaryti pirmąjį argumentą neprivalomu, nurodant jam numatytąją
reikšmę, su `\NewDocumentCommand` kiekvienas argumentas nurodomas raide;
taigi, dviejų argumentų komandai būtų nurodyta `{mm}`, o ne `[2]`.  Tai šiek
tiek ilgesnis užrašas, tačiau leidžiantis apibrėžti daug daugiau komandų
formų.  Pateikėme tik šį paprastą pavyzdį, kai pirmasis argumentas yra
neprivalomas (_optional_), numatytoji reikšmė yra mėlyna (`O{blue}`), o
antrasis argumentas yra privalomas (`m`, _mandatory_).
