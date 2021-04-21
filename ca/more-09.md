---
layout: "lesson"
lang: "ca"
title: "Més sobre: Referències creuades"
description: "Aquesta lliçó explica com podem fer enllaços de referències creuades carregant el paquet hyperref."
toc-anchor-text: "Més sobre: Referències creuades"
---

## Convertir referències creuades en enllaços

Pots convertir les teves referències creuades en enllaços utilitzant el paquet `hyperref`. En la majoria dels casos, `hyperref` s'ha de carregar després d'especificar qualsevol altre paquet en el preàmbul del document.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introduction}
Algun text interessant amb una referència~\ref{sec:next}.

\section{El següent element}
\label{sec:next}

Aquí hi ha més text.
\end{document}
```

Hem triat de fer els enllaços amb el mateix color que el text normal; prova de treure `hidelinks` per veure per què! 
