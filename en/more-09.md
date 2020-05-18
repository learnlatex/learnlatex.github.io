---
title: "More on: Cross-referencing"
---

## Making cross-references into links

You can make your cross-references into hyperlinks using the `hyperref` package.
This

```latex
\documentclass{article}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introduction}
Some exciting text with a reference~\ref{sec:next}.

\section{Next thing}
\label{sec:next}

More text here.
\end{document}
```

We have chosen to make the links the same color as the normal text; try removing
`hidelinks` to see why! 
