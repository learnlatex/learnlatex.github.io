---
title: "Veja mais sobre: Referências cruzadas"
---

## Transformando referências em links

Você pode transformar suas referências em links usando o pacote `hyperref`.  Na
maioria dos casos o `hyperref` deve ser carregado depois de quaisquer outros
pacotes especificados no preâmbulo do documento.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introdução}
Um texto incrível com uma referência~\ref{sec:next}.

\section{O que vem depois}
\label{sec:next}

Mais texto aqui.
\end{document}
```

Nós escolhemos deixar os links com a mesma cor do texto;  tente remover a opção
`hidelinks` para ver o porquê!
