---
layout: "lesson"
lang: "ja"
title: "日本語LaTeXとDVIウェア"
description: "このレッスンでは和文組版に適したLaTeXエンジンを紹介します。一部のLaTeXエンジンはPDFを直接生成するのではなく、DVIという中間形式を経由してPDFを作成します。DVIからPDFを作成するDVIウェアについても紹介します。"
toc-anchor-text: "日本語LaTeX"
toc-description: "日本語を扱えるLaTeXエンジン"
---

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
