---
layout: "lesson"
lang: "de"
title: "Mehr zu: Querverweise"
description: "Diese Lektion zeigt, wie Querverweise zu Links werden, indem das hyperref Paket geladen wird"
toc-anchor-text: "Mehr zu: Querverweise"
---

## Querverweise zu Links machen

Querverweise können zu Hyperlinks werden, indem das `hyperref` Paket geladen
wird. In den meisten Fällen sollte `hyperref` als letztes Paket in der Präambel
geladen werden.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}
\usepackage[hidelinks]{hyperref}

\begin{document}
\section{Einführung}
Etwas interessanter Text mit einem Verweis~\ref{sec:next}.

\section{Nächste Sache}
\label{sec:next}

Mehr Text hier.
\end{document}
```

Wir haben uns entschieden, den Links die selbe Farbe zu geben wie dem Text.
Entferne `hidelinks`, um zu sehen warum.
