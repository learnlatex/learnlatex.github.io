---
lang: "vi"
title: "Những ví dụ chuyên sâu hơn"
---

Khóa này cung cấp một cái nhìn tổng quan về những tính năng của LaTeX. Ngoài
những tính năng này, LaTeX còn có một hệ thống gói lệnh rất phong phú cho rất
nhiều lĩnh vực khác nhau. Ở đây là một vài ví dụ; ta sẽ không có giải thích cho
mã ở đây nhưng sẽ có đường dẫn tới các hướng dẫn sử dụng gói mà bạn có thể đọc
để hiểu thêm về những ví dụ này. Những ví dụ này được lấy từ chính hướng dẫn sử
dụng gói, trừ khi được ghi rõ là không.

Chú ý rằng việc sử dụng một gói ở đây không có nghĩa là chúng tôi khuyên dùng
gói đấy hơn những gói khác có chức năng tương tự. Mục đích ở đây chỉ là một vài
ví dụ cho thấy những công dụng phong phú mà LaTeX có thể cung cấp.

## Hóa học

### [`mhchem`](https://texdoc.net/pkg/mhchem)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{mhchem}
\begin{document}
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
\end{document}
```

## Ngôn ngữ học
### [`forest`](https://texdoc.net/pkg/forest)
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

## Cờ

<!-- not 2017 -->
### [`xskak`](https://texdoc.net/pkg/xskak)
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


## Thơ

### [`memoir`](https://texdoc.net/pkg/memoir)


```latex
\documentclass{memoir}
\usepackage[T1]{fontenc}
\begin{document}
\settowidth{\versewidth}{Nay, nay, I leave thee not,
                                       thou goest too}
\begin{verse}[\versewidth]
\ldots \\*
His judgement rendered, he dissolved the Thing. \\*
\flagverse{Ingeborg} And your decision? \\*
\flagverse{Fridthjof} \vinphantom{And your decision?}

                                   Have I ought to choose? \\*
Is not mine honour bound by his decree? \\*
And that I will redeem through Angantyr \\*
His paltry gold doth hide in Nastrand’s flood. \\*
Today will I depart. \\*
\flagverse{Ingeborg} \vinphantom{Today will I depart.}

                                 And Ingeborg leave? \\*
\flagverse{Fridthjof} Nay, nay, I leave thee not,

                                   thou goest too. \\*
\flagverse{Ingeborg} Impossible! \\*
\flagverse{Fridthjof} \vinphantom{Impossible!}

                                   O! hear me, ere thou answerest.
\end{verse}
\end{document}
```

## Vẽ hình
<!-- not 2017 -->
### [`tikz`](https://texdoc.net/pkg/tikz)


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

## Vẽ đồ thị hàm số
### [`pgfplots`](https://texdoc.net/pkg/plots)


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

## Âm nhạc


### [`musixtex`](https://texdoc.net/pkg/musixtex)


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
