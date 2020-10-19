---
lang: "fr"
title: "Comprendre les erreurs : pour aller plus loin"
---

## Les erreurs à la fermeture des environnements

Certains environnements (notamment les alignements `amsmath` et les tableaux
`tabularx`) scannent le corps entier de l'environnement avant de traiter le
contenu. Ça signifie que toute erreur _dans_ l'environnement sera signalée au
niveau de sa dernière ligne. Cependant, comme nous l'avons vu dans la leçon
principale, l'affichage du contexte d'erreur par TeX permet toujours de
localiser l'erreur.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

Ici, l'erreur sera signalée à la ligne 12 :

```
l.12 \end{align}
```
{: .noedit :}

Bien que la véritable erreur se trouve à la ligne 10, comme le montrent les
lignes de contexte :

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Erreurs en cascade

En exécutant LaTeX en interactif depuis la ligne de commande, il est possible
d'arrêter le traitement à la première erreur avec `x`, d'éditer le document et
de relancer LaTeX. Cependant, si vous passez outre l'erreur ou si vous utilisez
un éditeur ou un système en ligne qui le fait pour vous, alors LaTeX essaiera
de retomber sur ses pieds ; cependant, cela peut entraîner l'apparition
d'erreurs ultérieures.

Ne vous préoccupez donc pas trop du _nombre_ d'erreurs signalées et
concentrez-vous toujours sur la correction de la première erreur.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

L'erreur ici est le caractère _underscore_ `_` qui doit être saisi comme `\_`.

TeX le signale correctement avec le _premier_ message d'erreur :

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

Cependant, si à l'invite `?`, vous tapez <entrée>, TeX corrige en ajoutant
un `$` de sorte que le `_` est vu en mode mathématique comme un indice. Le mode
mathématique continue, puis se termine au `$` suivant, donc l'`\alpha` qui vient
après est vu en mode texte, générant une autre erreur :

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## Des erreurs qui ne lancent pas le mode interactif

Si vous compilez cet exemple avec le bouton _LaTeX Online_, vous aurez par
défaut un fichier PDF ; pour voir le message d'erreur dans le journal, il faut
ajouter `% !TEX log`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large some large text) normal size?

\end{document}
```

Dans cet exemple, le changement de taille est fermé par erreur avec une
parenthèse `)` au lieu d'une accolade `}`. Mais l'erreur n'est pas détectée
avant la fin du fichier, au moment TeX s'aperçoit qu'il y a encore un groupe
non fermé. Il rapporte ici la ligne à laquelle le groupe a été ouvert `{`. Il
ne peut pas détecter l'erreur réelle car la parenthèse `)` est considérée
comme du « texte normal », parfaitement valide.

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 6 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
      if(editors['pre0'] != null) editors['pre0'].moveCursorTo(8, 15, false);
      if(editors['pre3'] != null) editors['pre3'].moveCursorTo(3, 5,  false);
      if(editors['pre6'] != null) editors['pre6'].moveCursorTo(4, 30, false);
  }, false);
</script>
