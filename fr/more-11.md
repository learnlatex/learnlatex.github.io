---
lang: "fr"
title: "Mise en forme du texte : fontes et espacements -- Pour aller plus loin"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "Mise en forme du texte : fontes et espacements -- Pour aller plus loin"
---

## Supprimer l'indentation d'un paragraphe particulier

Si vous voulez supprimer l'indentation d'un seul paragraphe, vous pouvez le
précéder de `\noindent`. C'est à réserver pour les cas exceptionnels ;
en général, LaTeX sait s'en occuper automatiquement.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Un bref paragraphe, que nous avons un peu rempli pour que vous puissiez
en voir l'effet ici !

Un bref paragraphe, que nous avons un peu rempli pour que vous puissiez
en voir l'effet ici !

\noindent Un bref paragraphe, que nous avons un peu rempli pour que
vous puissiez en voir l'effet ici !
\end{document}
```
