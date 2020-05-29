---
title: "Language-specifics for Japanese"
---

## platex

```latex
% !TEX platex
\documentclass{jsarticle}

\bibliographystyle{jplain}
\title{p\LaTeX\ 実験}
\author{林蓮枝}

\begin{document}

\maketitle

\begin{abstract}
本稿では、文書組版システムp\LaTeX{}の使い方を解説します。p\LaTeX{}を利用するときには、あらかじめ文章中に\TeX{}コマンドと呼ばれる組版用の指示を混在させ\ldots
\end{abstract}

\section{導入}
こんにちは世界！%\cite{確率統計}

%\bibliography{refs}
\end{document}
```

