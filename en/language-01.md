---
layout: "lesson"
lang: "en"
title: "Language-specifics for English"
description: "This lesson shows language-specific details for typesetting with LaTeX in English. The focus is on hyphenation, where UK and US traditions are different."
next: "extra-01"
toc-anchor-text: "English Language-specifics"
toc-description: "Typesetting with LaTeX in English."
---

# Language-specifics for English

<span
  class="summary">This lesson shows language-specific details for typesetting with LaTeX in English with a focus on hyphenation, where UK and US traditions are different.</span>

## Hyphenation

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
