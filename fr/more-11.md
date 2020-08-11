---
title: "More on: Formatting: fonts and spacing"
---

## Suppressing the indent for one paragraph


If you want to suppress indentation for a single paragraph, you can use
`\noindent`.
This should be _very_ rarely used; most of the time, you should let LaTeX
handle this automatically.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
One small paragraph, which we have filled out a little to make sure you can
see the effect here!

One small paragraph, which we have filled out a little to make sure you can
see the effect here!

\noindent  One small paragraph, which we have filled out a little to make sure
you can see the effect here!
\end{document}
```
