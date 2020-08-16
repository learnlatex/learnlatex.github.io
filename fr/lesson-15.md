---
title: "Comprendre les erreurs"
---

Contrairement à un système de traitement de texte typique, LaTeX a un cycle
d'édition/exécution/visualisation plus proche de ce qu'on fait avec un
compilateur destiné à un langage de programmation ; comme en programmation,
l'utilisateur peut faire des erreurs pendant la saisie et doit donc lire et
comprendre les messages d'erreur renvoyés par le système pour corriger
rapidement les problèmes.

Cette page donne des exemples de quelques erreurs courantes. Chaque exemple
d'erreur comporte une explication sur la forme de son message.

Il sera instructif de tester les exemples mais vous apprendrez aussi beaucoup
si vous utilisez les fonctions d'édition de ce site web pour corriger les
documents et résoudre les problèmes.


## pdflatex not found

Une première erreur, fréquente quand on commence, est :

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

sous Windows ou

```
bash: pdflatex: command not found
```
{: .noedit :}

sous Linux.

Il ne s'agit pas d'une erreur de TeX mais d'une erreur du système d'exploitation,
indiquant que TeX n'est pas installé ou n'est pas trouvé. Une erreur courante
est d'installer un _éditeur_ tel que TeXworks ou TeXShop mais sans installer un
système TeX tel que TeX Live ou MiKTeX.


## Anatomie d'un message d'erreur de {{ site.tex }}

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

My command is used here \mycommand.

\end{document}
```

produit un message de plusieurs lignes dans le fichier de log :

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}


* La première ligne, signalée par `!`, donne la nature générale de l'erreur
(commande non définie dans ce cas).
* Les deux lignes suivantes montrent la ligne que TeX était en train de traiter
quand l'erreur est apparue, avec un saut de ligne marquant l'emplacement exact
que TeX avait atteint. La commande indéfinie est le dernier jeton lu, donc le
dernier mot avant le saut de ligne, `\textbold` ici. Après le saut de ligne,
il y a les autres éléments `{hmmm}` qui ont peut-être été lus en argument mais
n'ont pas encore été exécutés par TeX.
* Il peut en général y avoir quelques lignes supplémentaires ici, montrant
davantage du contexte du message d'erreur.
* La dernière ligne commence par `l.` suivi d'un numéro de ligne, et ensuite la
ligne du fichier source où l'erreur est détectée.

* La dernière ligne est un `?`.  Si vous utilisez TeX de manière interactive,
il est possible d'entrer des instructions à TeX à ce stade, mais la plupart des
éditeurs et des systèmes en ligne exécutent TeX dans un mode qui ne s'arrête pas
aux erreurs et essaie de traiter la suite du document. En tapant `s` à l'invite,
vous indiquerez à TeX de continuer dans ce mode si vous travaillez de manière
interactive.

Notez ici que TeX ne voit pas l'erreur au moment où la définition est faite ;
et en fait, si `\mycommand` est définie mais jamais utilisée, aucune erreur
n'apparaît. Donc, bien que l'erreur soit signalée à la ligne 8, la « vraie »
erreur se trouve dans la définition à la ligne 3, il est donc important de lire
l'intégralité du message d'erreur.


Attention, certains éditeurs affichent une version « résumée » du journal des
erreurs. Cela peut être spécialement trompeur quand on se retrouve avec :

`line 8: undefined command: ...\mycommand`

car cela donne l'impression que `\mycommand` n'est pas définie.


## Accolades manquantes (ou en trop)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Ici, l'erreur est une accolade `}` déséquilibrée, utilisée par erreur pour
terminer l'argument optionnel. L'accolade fermante fait échouer la lecture des
options par LaTeX et on obtient une erreur interne pas très utile :


```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Bien que la description de l'erreur ne soit pas très claire, les deux lignes
suivantes affichent avec précision l'emplacement de l'erreur grâce au saut de
ligne inséré pour indiquer jusqu'où TeX avait lu :

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


## Fichiers manquants

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

produit le message d'erreur :

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Note : la même erreur peut avoir deux causes différentes. Une simple faute de
frappe comme ici peut être corrigée en rectifiant le nom du package ; si le
fichier est vraiment manquant, il doit être installé sur le système.


## Lignes vides en mode mathématique

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

produit l'erreur plutôt ésotérique :

```
! Missing $ inserted.
```
{: .noedit :}

Mais la correction est simple : les lignes vides sont sont pas autorisées dans
un environnement mathématique. Il suffit de les supprimer (ou de les mettre en
commentaire).


## Travaux pratiques

Essayez de corriger les erreurs dans les exemples de cette page.

Écrivez de petits documents avec différentes erreurs et regardez comment la
forme des messages d'erreur vous renseigne sur ce qui s'est passé.


<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(3, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(3, 18, false);
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3, 20, false);
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(7, 0, false);
  }, false);
</script>
