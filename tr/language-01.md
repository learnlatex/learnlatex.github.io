---
layout: "lesson"
lang: "tr"
title: "Language-specifics for English"
description: "This lesson shows language-specific details for typesetting text in English."
next: "extra-01"
toc-anchor-text: "Anchor"
toc-description: "Description"
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
