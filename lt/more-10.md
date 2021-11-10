---
layout: "lesson"
lang: "lt"
title: "Daugiau apie matematiką"
description: "Ši pamoka parodo daugiau lygčių lygiavimo aplinkų iš amsmath, formulių išvedimą pastorintais šriftais, matematinį išplėtimo paketą mathtools, ir Unicode įvesties panaudojimą matematikai."
toc-anchor-text: "Daugiau apie matematiką"
---


## Daugiau lygiavimo apllinkų iš `amsmath` 

Be pagrindinėje pamokoje parodytos `align*` aplinkos, `amsmath` paketas turi
keletą kitų aplinkų išskirtajai matematikai, būtent, `gather` kelioms
eilutėms su formulėmis, kurių nereikia lygiuoti, ir `multline`, skirta
sulaužyti didesnę vieną išraišką per kelias eilutes, kur pirmoji eilutė
nustumiama į kairę, o paskutinioji į dešinę.  Visų aplinkų formos su `*`
neišveda lygčių numerių.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

Gather
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### Kolonėlės matematiniuose lygiavimuose

Matematinio lygiavimo aplinkos yra sukurtos lygiuoti stulpelių poras, kai
kiekvienoje poroje pirmasis stulpelis lygiuojamas pagal dešinįjį kraštą, o
antrasis &ndash; pagal kairįjį.  Tai leidžia išvesti keletą lygčių,
sulygiuotų pagal savo sąryšių simbolius.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned equations
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

Papildomai yra aplinkų variantai, kurių vardai baigiasi `ed`; jie skirti
lygiuotą aplinką didesnio matematinio reiškinio viduje. Pavyzdžiui, `aligned`
ir `gathered` yra atitinkami `align` ir `gather` variantai.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

Aplinka `aligned` priima neprivalomą argumentą, panašiai kaip `tabular`.  Tai
praverčia norint lygiuotis su viršutinės eilutės formule; palyginkite sąrašo
elementus šiame pavyzdyje.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## Matematika pastorintu šriftu

Standartiniame LaTeX yra du būdai paryškinti simbolius matematikoje.  Norint
paryškinti visą išraišką, naudokite `\boldmath` prieš ją.  Tuo tarpu komanda
`\mathbf` yra skirta atskirų raidžių ar žodžių išvedimui stačiu paryškintu
roman šriftu.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}

$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % bad use of \mathbf
\end{document}
```

Jei norite išvesti atskirus simbolius paryškintus taip, lyg jie būtų
formulėje po `\boldmath` komandos, bet normalaus šriftų storio aplinkoje,
galite naudoti komandą `\bm` iš `bm` paketo.  Pastebėkite, kad `\bm` taip pat
veikia tokius simbolius kaip `=` ir graikiškos raidės. (Atkreipkite dėmesį,
kad ankstesniame pavyzdyje `\mathbf` neturėjo įtakos `\pi`.)

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## Paketas `mathtools`

Paketas `mathtools` įkelia `amsmath` ir prideda keletą papildomų galimybių,
tokių kaip kolonėlių lygiavimo nurodymas `amsmath` matricose.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

## Matematika su Unicode simboliais

Kaip matysite [14-toje pamokoje](lesson-14), yra TeX variklių variantai,
naudojantys OpenType šriftus.  Standartiškai šie varikliai vis dar naudoja
klasikinius TeX matematikos šriftus, tačiau su `unicode-math` paketu galite
naudoti OpenType matematinius šriftus.  Šio paketo panaudojimo detalės yra už
šio kurso ribų, ir mes nukreipiame jus į [paketo
dokumentaciją](https://texdoc.org/pkg/unicode-math), nors čia ir pateikiame
nedidelį pavyzdį.

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

One two three
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicode Math Alphanumerics
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
