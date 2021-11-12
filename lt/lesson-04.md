---
layout: "lesson"
lang: "lt"
title: "Loginė struktūra"
description: "Ši pamoka įveda kelias pagrindines formatavimo komandas ir palygina jas su semantiniu formatavimu, naudojančiu skyrių antraščių komandas ir sąrašus."
toc-anchor-text: "Loginė struktūra"
toc-description: "Struktūra ir išvaizda."
---

# Loginė struktūra

<span
  class="summary">"Ši pamoka įveda kelias pagrindines formatavimo komandas ir palygina jas su semantiniu formatavimu, naudojančiu skyrių antraščių komandas ir sąrašus.</span>

LaTeX dokumento sužymėjimo metodai skirti susikoncentruoti į loginę dokumento struktūrą, paslepiant vizualaus dizaino (išvaizdos) nustatymus į komandų apibrėžimus.  Toks atskyrimas įgalina optimizuoti išvaizdos apibrėžimą ir ją lengvai keisti, nekeičiant dokumento kūno.

## Struktūra ar išvaizda

Pradėsime nuo pavyzdžio, palyginančio `\emph`, vieną iš populiariausių LaTeX komandų, skirtą loginiam akcentavimui, su `\textit`, tiesiog teksto spausdinimo kursyvu (pasviru šriftu _italic_; kaip tik taip ir spausdinami pabrėžiami dalykai).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some text with \emph{emphasis and \emph{nested} content}.

Some text in \textit{italic and \textit{nested} content}.
\end{document}
```

Tikriausiai atspėjote, kad `\textit` komanda skirta spausdinti tekstą
kursyvu, tik ji _visada_ daro dalykus kursyvu, todėl ji nepaveikia teksto
išvaizdos, pritaikyta pakartotinai. Pažiūrėkite, kaip `\emph` _pastebi_
konteksto pasikeitimą. Be to, yra vietų, kuriose akcentavimas išreiškiamas ne
kursyvu; pavyzdžiui, pristatymuose akcentuoti pakeičiant spalvą paprastai yra
geriau.  Panaudojus loginį žymėjimą, galima nesijaudinti dėl dokumento kūno
keitimo, kai keičiamos tokios išvaizdos detalės.

Mes panagrinėsime [rankinį formatavimą vėliau](lesson-11), bet šiam momentui
pridėkime `\textbf` prie žinomų komandų: ji spausdina tekstą pastorintu
šriftu (_bold_).

## Antraščių komandos

Tikriausiai naudojote teksto rengyklę, kurioje, formatuodami skyriaus
antraštę, dauguma žmonių įveda tekstą, tada tiesiog padaro jo šriftą
didesniu ir/ar paryškintu ir atskiria naujomis eilutėmis. LaTeX loginis
sužymėjimas iš tikrųjų yra _lengvesnis_ nei formatavimas rankomis; mes galime
naudoti `\section` komandą.  Ji valdo šrifto pasikeitimus, vertikalius tarpus
ir t.t., ir daro tai vienodai per visą dokumentą.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Hey world!

This is a first document.

\section{Title of the first section}

Text of material in the first section

Second paragraph.

\subsection{Subsection of the first section}

Text of material in the subsection.

\section{Second section}

Text of the second section.

\end{document}
```

Panaudodamas standartinę `article` klasę, LaTeX numeruoja skyrius
(_sections_) ir poskyrius (_subsections_) ir paryškina jų pavadinimus.  Mes
pagalvosime apie dizaino pakeitimą [kitoje pamokoje](lesson-05).

Standartinės LaTeX klasės suteikia galimybę padalyti dokumentus į skirtingų
lygių skyrius:

- `\chapter` (tam reikia `\documentclass{book}` arba `\documentclass{report}`)
- `\section`
- `\subsection`
- `\subsubsection`

Galime eiti „žemyn“ ir toliau: yra `\paragraph` ir `\subparagraph` lygiai,
bet beveik visada toks skaidymas pasidaro per daug „detalus“. (Taip,
`\paragraph` yra skyriaus komanda, o _ne_ būdas pradėti naują pastraipą!)

Jums gali kilti klausimas dėl dokumento pavadinimo. Tam yra keletas specialių
komandų, tačiau ne visi dokumentai jas naudoja, taigi mes nagrinėjame tai
[lygiagrečioje papildomoje pamokoje](more-04).

## Sąrašai

Kita labai dažna situacija, kurioje norėsis loginio žymėjimo, yra sąrašų
formavimas. Yra du įprasti sąrašų tipai, įmontuoti į LaTeX.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Ordered
\begin{enumerate}
  \item An entry
  \item Another One
  \item Wow! Three entries
\end{enumerate}

Unordered
\begin{itemize}
  \item An entry
  \item Another One
  \item Wow! Three entries
\end{itemize}

\end{document}
```

Pastebėkite, kad naudojame `\item` pradėdami kiekvieną sąrašo įrašą, ir kaip
tai išeities dokumente automatiškai prideda savą žymę abiejų tipų sąrašuose.

## Pratimai

Eksperimentuokite su skirtingais skyrių lygiais. Išbandykite
`\documentclass{report}` vietoje `\documentclass{article}` ir pridėkite
`\chapter` komandas. Kaip atrodo jų išvedamas tekstas?

Pabandykite `\paragraph` ir `\subparagraph` komandas, kad pamatyti, kaip jos
veikia:  paprastai jos _nenumeruoja_ antraščių.

Sudarykite keletą sąrašų ir įklijuokite vieną sąrašą į kitą. Kaip keičiasi
skaičių ar žymių formatas? Su standartinėmis LaTeX klasėmis galite sukurti
tik keturis lygius, tačiau apskritai, daugiau nei keturi sąrašų lygiai yra
blogas ženklas!
