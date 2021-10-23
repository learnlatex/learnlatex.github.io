---
layout: "lesson"
lang: "lt"
title: "Formatavimas: šriftai ir tarpai"
description: "Ši pamoka parodo, kaip keisti tarpus tarp dokumento elementų ir kaip naudoti formatavimo komandas LaTeX įvestyje."
toc-anchor-text: "Šriftai ir tarpai"
toc-description: "Teksto formatavimas vizualiam pateikimui."
---

# Formatavimas: šriftai ir tarpai

<span
  class="summary">Ši pamoka parodo, kaip keisti tarpus tarp dokumento elementų ir kaip naudoti formatavimo komandas LaTeX įvestyje.</span>

Jau matėme, kad tuščia jūsų įvesties eilutė sukuria naują pastraipą išvesties
dokumente.  Tas iš karto ten pasimato, nes pirmoji pastraipos eilutė būna įtraukta.

## Tarpai tarp pastraipų

Yra ir kitoks bendras stilius, kuriame nėra pastraipų įtraukų, bet tarp jų
yra lyg ir „tuščios eilutės“.  Tokį stilių galime gauti su `parskip`
paketu:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Tik dėl vietos užpildymo tekstu
\begin{document}
\lipsum
\end{document}
```

## Priverstinis eilutės laužimas

Dažniausiai jūs neturėtumėte priverstinai laužyti eilučių LaTeX dokumente:
tikriausiai jums pakaks naujos pastraipos arba `parskip` paketo galimybių
atskiriant pastraipas vertikaliais tarpais.

Yra tikrai _nedaug_ atvejų, kur jūs naudosite `\\` naujos eilutės pradėjimui
nepradėdami naujos pastraipos:

- eilučių pabaigoje lentelėse,
- `center` aplinkoje,
- poezijoje (`verse` aplinkoje).

Beveik visada visur kitur, nei vienoje iš tų ypatingų vietų, turėtumėte
_nenaudoti_ `\\`.


## Tarpų dėliojimas

Mes galime įdėti mažą tarpelį (maždaug pusę tarpžodžio tarpo) su `\,`.
Matematikos veiksenoje yra daugiau tarpų komandų: `\:` ir `\;`, o viena
&ndash; net tarpo sumažinimui: `\!`.

Retais atvejais, pavyzdžiui, kuriant titulinį puslapį, jums gali reikti dėti
horizontalius ir/arba vertikalius tarpus rankomis.  Tam galima naudoti
`\hspace` ir `\vspace` komandas.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some text \hspace{1cm} more text.

\vspace{10cm}

Even more text.
\end{document}
```

## Teksto formatavimas

Mes rašėme [3-ioje pamokoje](lesson-03), lad loginis sužymėjimas geriau, nei
išreikštas formatavimas.  Bet kartais norėsite, kad tekstas būtų paryškintas
ar kursyvas, ar vienplotis ir t.t.  Tam yra dviejų tipų komandos: trumpiems
teksto gabalams ir besitęsiančiam turiniui.

Trumpiems teksto gabaliukams naudojame `\textbf`, `\textit`, `\textrm`,
`\textsf`, `\texttt` ir `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Let's have some font fun: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced} and \textsc{small caps}.
\end{document}
```

Besitęsiančiam tekstui naudojame komandas, kurios perjungia šrifto nustatymą;
tokios yra, pavyzdžiui, `\bfseries` ir `\itshape`.  Kadangi jos pačios
„nesustoja“, turime jas įdėti į _grupę_, jei norime išvengti jų veikimo
visame likusiame dokumente.  LaTeX aplinkos yra grupės, kaip ir lentelių
langeliai, pagaliau mes galime panaudoti figūrinius skliaustus `{...}`, kad
sukurtume grupę išreikštu būdu.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

{\itshape

This text is italic.

So it this: the effect is not limited to a paragraph.

}
But not here.
\end{document}
```

Panašiu būdu nustatinėjame šrifto dydį; visos tam skirtos komandos veikia nuo
komandos vietos į priekį.  Dydžiai, kuriuos nustatome, yra santykiniai
bazinio teksto dydžio atžvilgiu: `\huge`, `\large`, `\normalsize`, `\small`
ir `\footnotesize` yra dažnai naudojami.  Svarbu pabaigti pastraipą prieš
šrifto dydžio atstatymą; pažiūrėkite pavyzdyje, kaip pridedame `\par`
(pastraipos pabaigą) išreikštu būdu:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

\begin{center}
{\itshape\large Some text\par}
Normal text
{\bfseries\small Much smaller text\par}
\end{center}

\end{document}
```

## Pratimai

Paeksperimentuokite su rankiniu formatavimu: sukurkite titulinio puslapio
aplinką `titlepage` ir pabandykite įterpti skirtingus tarpus ir šrifto
pakeitimus.  Kas nutinka, kai kombinuojame šrifto pakeitimus?  Kiek tai
atitinka šriftų kombinavimą matematinėse formulėse?

Kas nutiks, jei pakeisite didelės pastraipos šrifto dydį (pabandykite
`\tiny`, tada `\huge`), bet prieš uždarydami grupę neįdėsite `\par`?
