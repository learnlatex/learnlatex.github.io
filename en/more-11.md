---
title: "More on: Formatting: fonts and spacing"
---

## Suppressing the indent for one paragraphs

 If you want to suppress that for a single case, you can use `\noindent`.
 This should be _very_ rarely used: most of the time, you should let LaTeX
 handle this automatically.

 ```latex
 \documentclass{article}
 \begin{document}
 One small paragraph, which we have filled out a little to make sure you can
 see the effect here!

 One small paragraph, which we have filled out a little to make sure you can
 see the effect here!

 \noindent  One small paragraph, which we have filled out a little to make sure
 you can see the effect here!
 \end{document}
 ```
