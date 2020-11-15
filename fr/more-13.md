---
lang: "fr"
title: "S'organiser pour écrire un document long : pour aller plus loin"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "S'organiser pour écrire un document long : pour aller plus loin"
---

## Ajouter un index

Selon le type de document que vous rédigez, vous pouvez vouloir un index. Sa
construction est automatisée par le package `imakeidx`, et ça fonctionne en
interne un peu comme une bibliographie : LaTeX écrit puis relit des fichiers
auxiliaires. Vous aurez besoin de trois instructions :

- La commande `\makeindex`, qui initialise la création d'un index,
- La commande `\index`, qui permet de définir les entrées de l'index au fil du texte,
- La commande `\printindex`, qui insère l'index dans le document.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Some text about Foo\index{foo}.
More text\index{baz!bar}.
Even more text\index{alpha@$\alpha$}.
More text about a different part of baz\index{baz!wibble}.

\clearpage
Some text about Foo\index{foo} again, on a different page.
Even more text\index{beta@$\beta$}.
Even more text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

Nous avons illustré ici deux fonctionnalités de la création d'un index : la
subdivision en utilisant `!`, et l'affichage de quelque chose de différent du
« texte de tri » d'une entrée d'index en utilisant `@`. On peut personnaliser
beaucoup de choses dans un index ; testez l'exemple et regardez comment ça
fonctionne.
