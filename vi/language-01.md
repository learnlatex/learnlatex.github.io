---
title: "Language-specifics for English"
---

## hyphenation

LaTeX was written for use with English, and so there are very few
langauge-specific issues facing authors in English. The main one
is hyphenation: UK and US traditions are different. LaTeX starts out
using US English patterns, but you can switch to UK ones using `babel`.

```latex
\documentclass{article}
\usepackage[UKenglish]{babel}
\begin{document}
Some text
\end{document}
```
