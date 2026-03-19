---
layout: "lesson"
lang: "el"
title: "Περισσότερα σχετικά με: Μορφοποίηση: γραμματοσειρές και κενά διαστήματα"
description: "Αυτό το μάθημα παρουσιάζει πώς να αφαιρέσετε την εσοχή παραγράφου για μία μόνο παράγραφο."
toc-anchor-text: "Περισσότερα σχετικά με: Μορφοποίηση: γραμματοσειρές και κενά διαστήματα"
---

## Αφαίρεση της εσοχής για μία μόνο παράγραφο

Αν θέλετε να αφαιρέσετε την εσοχή για μία μόνο παράγραφο, μπορείτε να χρησιμοποιήσετε την εντολή
`\noindent`.
Αυτό θα πρέπει να χρησιμοποιείται _πολύ_ σπάνια&#903; τις περισσότερες φορές, θα πρέπει να αφήνετε το LaTeX
να το διαχειρίζεται αυτόματα.

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
