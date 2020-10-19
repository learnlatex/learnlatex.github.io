---
lang: "fr"
title: "Utiliser les classes de documents pour changer l'apparence : pour aller plus loin"
---

## Classes spécifiques d'un journal

De nombreuses journaux scientifiques proposent leur classe LaTeX pour les
soumissions d'articles. Celle-ci donne généralement une mise en page proche de
celle du journal publié, bien que cela dépende de l'utilisation des polices de
caractères, etc. ; parfois, la mise en forme reste générique, mais l'utilisation
de la classe du journal facilite l'import de votre article dans leur chaîne de
traitement. Si une classe est disponible, elle est normalement mise à disposition
directement par l'éditeur du journal (sur son site web), qui doit donner les
détails nécessaires à son utilisation. Nombre d'entre elles sont également
disponibles sur CTAN et dans les distributions TeX standards.


## Classes pour les diaporamas

Un domaine très particulier est la création de diaporamas (présentations type
Microsoft Powerpoint). La classe `slides` avait été conçue pour la production
de diapositives 24x36mm et n'est pas vraiment faite pour les présentations
destinées à un vidéo-projecteur. Deux classes ont été développées à cet effet
et sont largement utilisées : `beamer` et `powerdot`. Actuellement, `beamer`
est la plus largement utilisée, voici donc un exemple de son fonctionnement :

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}{Première diapositive}
  Un peu de texte.
\end{frame}

\begin{frame}{Deuxième diapositive}
  Et maintenant une liste:
  \begin{itemize}
    \item<1-> Premier item,
    \item<2-> Second item.
  \end{itemize}
\end{frame}

\end{document}
```

Cela montre deux choses importantes. Premièrement, `beamer` divise un document
en `frames` (« cadres »), chacun d'eux pouvant donner une diapositive ou
plusieurs. Deuxièmement, `beamer` ajoute des possibilités à la syntaxe LaTeX
de base pour permettre à certaines parties du document d'apparaître petit à
petit, formant des animations. C'est un outil puissant, mais plus compliqué
que ce que nous pouvons couvrir ici :
[consultez cet article de blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/)
(en anglais) pour en savoir plus.


## Classe pour produire des images

Parfois vous devez composer une image (qui peut avoir un code-source très long)
avec LaTeX. Dans ce cas, souvent, vous ne voulez rien d'autre que l'image dans 
le PDF final, sans le reste de la page. Le plus simple est d'utiliser la classe
[`standalone`](https://ctan.org/pkg/standalone). Elle définit automatiquement la
taille de la page pour qu'elle contienne tout juste le contenu imprimé.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
Un document très simple: il va tenir dans une toute petite boîte!
\end{document}
```
