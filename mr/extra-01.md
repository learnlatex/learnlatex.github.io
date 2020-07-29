---
title: "पुढील अभ्यासाकरिता"
---

ह्या अभ्यासक्रमात लाटेक्-च्या अतिशय महत्त्वाच्या आज्ञांची ओळख करून देण्यात आली आहे,
परंतु लाटेक् आणखी अनेक क्षेत्रांमध्ये वापरले जाते. त्याकरिता विविध आज्ञासंच तयार केले गेले
आहेत. आम्ही येथे कोणत्याही स्पष्टीकरणाशिवाय काही उदाहरणे जोडत आहोत. सोबत त्या आज्ञासंचांच्या
दस्तऐवजांचे [टेक्-डॉक](https://texdoc.net) ह्या संकेतस्थळावरील दुवे आहेत.
ही उदाहरणे (विशेष नोंद नसल्यास) त्या दस्तऐवजांमधूनच घेतली आहेत.

**टीप** येथे नोंदवले गेलेले आज्ञासंच इतरांपेक्षा चांगले आहेत म्हणून इथे नोंदवले गेले
  आहेत असे मुळीच नाही. आम्हाला केवळ लाटेक्-च्या निरनिराळ्या क्षेत्रातील वापराची
  काही उदाहरणे दाखवायची होती जी ह्या अभ्यासक्रमात इतरत्र दाखवता येणे शक्य नव्हते.

## रसायनशास्त्र

### [`mhchem`](https://texdoc.net/pkg/mhchem)

```latex
\documentclass{article}
\usepackage{mhchem}
\begin{document}
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
\end{document}
```

## भाषाविज्ञान
### [`forest`](https://texdoc.net/pkg/forest)
```latex
\documentclass{article}
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
### [`xskak`](https://texdoc.net/pkg/xskak)
```latex
\documentclass{article}
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

### [`memoir`](https://texdoc.net/pkg/memoir)


```latex
%!TeX xelatex
\documentclass{memoir}
\usepackage{marathi}

\begin{document}
\poemtitle*{औदुंबर}
\settowidth{\versewidth}{शेतमळ्यांची दाट लागली हिरवी गरदी पुढे.}
\begin{verse}[\versewidth]
    ऐल तटावर पैल तटावर हिरवाळी घेउन\\
    निळासांवळा झरा वाहतो बेटाबेटातुन.
    
    चार घरांचे गांव चिमुकले पैल टेकडीकडे\\
    शेतमळ्यांची दाट लागली हिरवी गरदी पुढे.
    
    पायवाट पांढरी तयांतुन अडवी तिडवी पडे\\
    हिरव्या कुरणांमधुनि चालली काळ्या डोहाकडे.
    
    झांकळुनी जळ गोड काळिमा पसरी लाटांवर\\
    पाय टाकुनी जळांत बसला असला औदुंबर.
\end{verse}
\end{document}
```
सौजन्य - [लाटेक् आणि पॉलिग्लॉसियाची ओळख - रोहित होळकर](https://ctan.org/pkg/latex-mr?lang=en)

## आकृत्या
<!-- not 2017 -->
### [`tikz`](https://texdoc.net/pkg/tikz)


<!-- {% raw %} -->
```latex
%!TeX xelatex
\documentclass{article}
\usepackage{marathi}
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
        \draw[->] (-0.5,0,0) -- (#1,0,0) node[pos=1.1]{क};
        \draw[->] (0,-0.5,0) -- (0,#2,0) node[pos=1.2]{ख};
        \draw[->] (0,0,-0.5) -- (0,0,#3) node[pos=1.1]{ग};}
    \begin{tikzpicture}[3d view]
    \simplecuboid{2}{2}{2}
    \simpleaxes{2}{2}{2}
    \end{tikzpicture}
\end{document}
```
<!-- {% endraw %} -->

## Function plotting
### [`pgfplots`](https://texdoc.net/pkg/plots)


<!-- {% raw %} -->
```latex
\documentclass{article}
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

## संगीत


### [`musixtex`](https://texdoc.net/pkg/musixtex)


<!-- {% raw %} -->
```latex
\documentclass{article}
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
