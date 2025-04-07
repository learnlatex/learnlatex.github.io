---
layout: "lesson"
lang: "en"
title: "हिंदी भाषा की विशिष्ट विशेषताएँ"
description: "इस अध्याय में कुछ अनुशंसाएँ दी गई हैं जो हिंदी भाषा में LaTeX-डॉक्यूमेंट बनाने में उपयोगी होंगी।"
next: "extra-01"
toc-anchor-text: "हिंदी भाषा की विशिष्ट विशेषताएँ"
toc-description: "हिंदी में LaTeX के साथ टाइपसेटिंग"
---

# हिंदी भाषा की विशिष्ट विशेषताएँ

<span
  class="summary">इस अध्याय में कुछ अनुशंसाएँ दी गई हैं जो हिंदी भाषा में LaTeX-डॉक्यूमेंट बनाने में उपयोगी होंगी।</span>

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
