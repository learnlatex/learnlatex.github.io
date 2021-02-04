---
layout: "lesson"
lang: "mr"
title: "लाटेक्-आज्ञावल्यांचे प्रदर्शन - पुढील अभ्यासासाठी उदाहरणे"
description: "ह्या प्रकरणात लाटेक्-मधील काही अन्य निवडक आज्ञासंचांची उदाहरणे आहेत. ह्यांबाबत उर्वरित अभ्यासक्रमात पुरेशी माहिती आली नव्हती."
toc-anchor-text: "लाटेक्-आज्ञावल्यांचे प्रदर्शन"
toc-description: "पुढील अभ्यासासाठीची उदाहरणे."
---

# प्रदर्शन

<span class="summary">
ह्या प्रकरणात लाटेक्-मधील काही अन्य निवडक आज्ञासंचांची उदाहरणे आहेत. ह्यांबाबत उर्वरित
अभ्यासक्रमात पुरेशी माहिती आली नव्हती.
</span>

ह्या अभ्यासक्रमात लाटेक्-च्या अतिशय महत्त्वाच्या आज्ञांची ओळख करून देण्यात आली आहे, परंतु लाटेक्
आणखी अनेक क्षेत्रांमध्ये वापरले जाते. त्याकरिता विविध आज्ञासंच तयार केले गेले आहेत. आम्ही येथे
कोणत्याही स्पष्टीकरणाशिवाय काही उदाहरणे जोडत आहोत. सोबत त्या आज्ञासंचांच्या दस्तऐवजांचे
[टेक्-डॉक](https://texdoc.net) ह्या संकेतस्थळावरील दुवे आहेत. ही उदाहरणे (विशेष नोंद नसल्यास)
त्या दस्तऐवजांमधूनच घेतली आहेत.

<p class="hint">
इथे नोंदवल्या गेलेल्या आज्ञासंचांचे त्यांच्यासारख्या इतर आज्ञासंचांपेक्षा उदात्तीकरण करणे हा ह्या
यादीचा उद्देश नाही. इथे केवळ विविध क्षेत्रात लाटेक् कसे वापरले जाते ह्याची एक झलक दाखवणे हा
उद्देश आहे.
</p>

## रसायनशास्त्र

### आज्ञासंच: [`mhchem`](https://texdoc.net/pkg/mhchem)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{mhchem}
\begin{document}
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
\end{document}
```

## भाषाविज्ञान

### आज्ञासंच: [`forest`](https://texdoc.net/pkg/forest)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{forest}
\begin{document}
\begin{forest}
[VP
  [DP[John]]
  [V’
    [V[sent]]
    [DP[Mary]]
    [DP[D[a]][NP[letter]]]
  ]
]
\end{forest}
\end{document}
```

## बुद्धिबळ

<!-- not 2017 -->
### आज्ञासंच: [`xskak`](https://texdoc.net/pkg/xskak)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{xskak}
\begin{document}
\newchessgame
\mainline{1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6}

\xskakset{moveid=2w}%
\chessboard[setfen=\xskakget{nextfen}]\\[1ex]
Position after 2.\,\xskakget{lan}
\end{document}
```

## काव्य

### लाटेक्-वर्ग: [`memoir`](https://texdoc.net/pkg/memoir)

मेमॉयर लाटेक्-वर्गाचे उदाहरण देण्याकरिता एका मराठी कवितेची अक्षरजुळणी करून दाखवत आहोत.

<p class="hint">
हे उदाहरण मेमॉयरच्या दस्तऐवजातील नाही आहे.
</p>

```latex
%!TeX lualatex
\documentclass{memoir}
\usepackage{marathi}

\begin{document}
\poemtitle*{औदुंबर}
\settowidth{\versewidth}{शेतमळ्यांची दाट लागली हिरवी गरदी पुढे.}
\begin{verse}[\versewidth]
  ऐल तटावर पैल तटावर हिरवाळी घेऊन\\
  निळासांवळा झरा वाहतो बेटाबेटातून.
  
  चार घरांचे गांव चिमुकले पैल टेकडीकडे\\
  शेतमळ्यांची दाट लागली हिरवी गरदी पुढे.
  
  पायवाट पांढरी तयांतुन अडवी तिडवी पडे\\
  हिरव्या कुरणांमधुनि चालली काळ्या डोहाकडे.
  
  झांकळुनी जळ गोड काळिमा पसरी लाटांवर\\
  पाय टाकुनी जळांत बसला असला औदुंबर.
\end{verse}
\end{document}
```

<p class="hint">
सौजन्य - [लाटेक् आणि पॉलिग्लॉसियाची ओळख - रोहित होळकर](https://ctan.org/pkg/latex-mr)
</p>

## आकृत्या

<!-- not 2017 -->
आज्ञासंच: [`tikz`](https://texdoc.net/pkg/tikz)

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tikz}
\usetikzlibrary {perspective}

\begin{document}

\newcommand\simplecuboid[3]{%
\fill[gray!80!white] (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=0,y=#2,z=#3)
-- (tpp cs:x=#1,y=#2,z=#3)
-- (tpp cs:x=#1,y=0,z=#3) -- cycle;
x
\fill[gray] (tpp cs:x=0,y=0,z=0)
-- (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=0,y=#2,z=#3)
-- (tpp cs:x=0,y=#2,z=0) -- cycle;
\fill[gray!50!white] (tpp cs:x=0,y=0,z=0)
-- (tpp cs:x=0,y=0,z=#3)
-- (tpp cs:x=#1,y=0,z=#3)
-- (tpp cs:x=#1,y=0,z=0) -- cycle;}
\newcommand{\simpleaxes}[3]{%
\draw[->] (-0.5,0,0) -- (#1,0,0) node[pos=1.1]{x};
\draw[->] (0,-0.5,0) -- (0,#2,0) node[pos=1.1]{y};
\draw[->] (0,0,-0.5) -- (0,0,#3) node[pos=1.1]{z};}
\begin{tikzpicture}[3d view]
   \simplecuboid{2}{2}{2}
   \simpleaxes{2}{2}{2}
\end{tikzpicture}
\end{document}
```
<!-- {% endraw %} -->

## आलेख

आज्ञासंच: [`pgfplots`](https://texdoc.net/pkg/plots)

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{pgfplots}
\pgfplotsset{width=7cm,compat=1.17}

\begin{document}

\begin{tikzpicture}
\begin{axis}[]
      % density of Normal distribution:
      \addplot [
            red,
            domain=-3e-3:3e-3,
            samples=201,
      ]
            {exp(-x^2 / (2e-3^2)) / (1e-3 * sqrt(2*pi))};
\end{axis}
\end{tikzpicture}

\end{document}
```
<!-- {% endraw %} -->

## पाश्चात्त्य शास्त्रीय संगीत

आज्ञासंच: [`musixtex`](https://texdoc.net/pkg/musixtex)

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{musixtex}

\begin{document}

\begin{music}
\parindent10mm
\instrumentnumber{1}
% a single instrument
\setname1{Piano}
% whose name is Piano
\setstaffs1{2}
% with two staffs
\generalmeter{\meterfrac44}
% 4/4 meter chosen
\startextract
% starting real score
\Notes\ibu0f0\qb0{cge}\tbu0\qb0g|\hl j\en
\Notes\ibu0f0\qb0{cge}\tbu0\qb0g|\ql l\sk\ql n\en
\bar
\Notes\ibu0f0\qb0{dgf}|\qlp i\en
\notes\tbu0\qb0g|\ibbl1j3\qb1j\tbl1\qb1k\en
\Notes\ibu0f0\qb0{cge}\tbu0\qb0g|\hl j\en
\zendextract
% terminate excerpt
\end{music}

\end{document}
```
<!-- {% endraw %} -->
