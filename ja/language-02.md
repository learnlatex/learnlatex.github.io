---
layout: "lesson"
lang: "ja"
title: "和文用文書クラスと縦書き"
description: "このレッスンでは和文の組版に対応する代表的な文書クラスを紹介します。一部の文書クラスは縦書きにも対応しています。"
toc-anchor-text: "和文用文書クラス"
toc-description: "和文組版に適した文書クラス"
---

<!-- TODO: extra-01の日本語版を用意するか検討。設定に`next: "extra-01"`の追記が必要 -->

## pLaTeX

```latex
% !TEX platex
\documentclass{tarticle}

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
\documentclass[uplatex]{utarticle}

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
\documentclass{ltjtarticle}

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
