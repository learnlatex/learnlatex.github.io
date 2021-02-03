---
layout: "lesson"
lang: "fr"
title: "Mise en forme du texte : fontes et espacements -- Pour aller plus loin"
description: "Cette leçon montre comment supprimer l'indentation pour un seul paragraphe."
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
