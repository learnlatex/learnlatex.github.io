---
layout: "lesson"
lang: "mr"
title: "अधिक माहिती: अक्षरजुळणी: टंकांचे ठसे व ओळींमधील जागा"
description: "ह्या प्रकरणात एखाद्या परिच्छेदासाठी आरंभीची मोकळी जागा काढून टाकण्याची सोय आपण पाहू."
toc-anchor-text: "अधिक माहिती: अक्षरजुळणी: टंकांचे ठसे व ओळींमधील जागा"
---

## एखाद्या परिच्छेदाकरिता आरंभीची मोकळी जागा काढून टाकणे

`\noindent` ह्या आज्ञेचा वापर करून परिच्छेदारंभीची मोकळी जागा काढून टाकता येते. ह्याचा वापर
फार कमी केला जावा असे आम्ही सुचवू. लाटेक्-ला हे आपोआप हाताळू देणे कधीही अधिक इष्ट होय.

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
