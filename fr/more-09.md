---
title: "Références croisées : pour aller plus loin"
---

## Transformer les références croisées en liens hypertextes

Vous pouvez transformer vos références croisées en hyperliens cliquables en utilisant le package `hyperref`. Dans la plupart des cas, `hyperref` doit être chargé après tout autre package du préambule de votre document.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introduction}
Some exciting text with a reference~\ref{sec:next}.

\section{Next thing}
\label{sec:next}

More text here.
\end{document}
```

Nous avons choisi de faire les liens de la même couleur que le texte normal ; enlevez l'option `hidelinks` pour comprendre pourquoi !  &#128578;
