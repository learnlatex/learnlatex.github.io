---
lang: "en"
title: "Language-specifics for English"
next: "extra-01"
---

## hyphenation

LaTeX was written for use with English, and so there are very few
language-specific issues facing authors in English. The main one
is hyphenation: UK and US traditions are different. LaTeX starts out
using US English patterns, but you can switch to UK ones using `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[UKenglish]{babel}
\begin{document}
Some text
\end{document}
```
