---
layout: "lesson"
lang: "ja"
title: "日本語LaTeXとDVIウェア"
description: "このレッスンでは和文組版に適したLaTeXエンジンを紹介します。一部のLaTeXエンジンはPDFを直接生成するのではなく、DVIという中間形式を経由してPDFを作成します。DVIからPDFを作成するDVIウェアについても紹介します。"
toc-anchor-text: "日本語LaTeX"
toc-description: "日本語を扱えるLaTeXエンジン"
---

# 日本語LaTeXとDVIウェア

<span class="summary">このレッスンでは和文組版に適したLaTeXエンジンを紹介します。一部のLaTeXエンジンはPDFを直接生成するのではなく、DVIという中間形式を経由してPDFを作成します。DVIからPDFを作成するDVIウェアについても紹介します。</span>

オリジナルのLaTeXは海外（特に英語圏）で開発されたソフトウェアであるため、残念ながらそのままでは日本語を扱うことができません。しかしオリジナルのLaTeXを日本語用に拡張し、和文組版が可能なLaTeXエンジン（日本語LaTeX）がいくつも開発されてきました。代表的なものは以下の3つです。

* pLaTeX：最も古くから使われている日本語LaTeXで、よく普及している。出力形式はDVI。
* upLaTeX：pLaTeXをさらに拡張した日本語LaTeX。森鷗外の「鷗」などJISS X 0208の外の文字も容易に扱うことができる。出力形式はDVI。
* LuaLaTeX：比較的新しいLaTeXエンジン。欧米でも用いられるが、LuaTeX-jaというしくみを使うことで和文組版も可能。PDFを直接出力する。

pLaTeXとupLaTeXはまとめて「pTeX系」と呼ばれることがあります。これらのエンジンはPDFではなくDVIを出力するため、最終的なPDFを得るためにはdvipdfmxなどのDVIウェアを利用する必要があります。一方、LuaLaTeXは直接PDFを出力できるためDVIウェアを必要としません。

<p class="hint">欧文組版ではこの他にもpdfLaTeXやXeLaTeXがしばしば用いられますが、現在のところこれらのエンジンではきちんとした和文組版はできませんので注意してください。</p>

## pLaTeX

```latex
% !TEX platex
\documentclass{jsarticle}

\title{p\LaTeX\ 実験}
\author{林蓮枝}

\begin{document}

\maketitle

\begin{abstract}
本稿では、文書組版システムp\LaTeX{}の使い方を解説します。
p\LaTeX{}を利用するときには、あらかじめ文章中に\TeX{}コマンドと呼ばれる組版用の指示を混在させ\ldots
\end{abstract}

\section{導入}
こんにちは世界

\end{document}
```

## upLaTeX

```latex
% !TEX uplatex
\documentclass[uplatex]{jsarticle}

\title{up\LaTeX\ 実験}
\author{林蓮枝}

\begin{document}

\maketitle

\begin{abstract}
本稿では、文書組版システムup\LaTeX{}の使い方を解説します。
up\LaTeX{}を利用するときには、あらかじめ文章中に\TeX{}コマンドと呼ばれる組版用の指示を混在させ\ldots
\end{abstract}

\section{導入}
こんにちは世界

\end{document}
```


## LuaLaTeX

```latex
% !TEX lualatex
\documentclass{ltjarticle}

\title{Lua\LaTeX\ 実験}
\author{林蓮枝}

\begin{document}

\maketitle

\begin{abstract}
本稿では、文書組版システムLua\LaTeX{}の使い方を解説します。
Lua\LaTeX{}を利用するときには、あらかじめ文章中に\TeX{}コマンドと呼ばれる組版用の指示を混在させ\ldots
\end{abstract}

\section{導入}
こんにちは世界


\end{document}
```
