---
lang: "fr"
title: "Qu'est-ce que LaTeX, et comment ça marche?"
description: "Cette leçon explique les bases de ce qu'est LaTeX et comment il fonctionne par rapport aux traitements de texte courants tels que Microsoft Word ou LibreOffice Writer."
toc-anchor-text: "Les bases de LaTeX"
toc-description: "Qu'est-ce que LaTeX et comment ça marche."
---

Contrairement aux traitements de texte courants tels que Microsoft Word ou
LibreOffice Writer, LaTeX ne fournit pas lui-même de WYSIWYG (« _What You See
Is What You Get_ », c'est-à-dire « ce que vous voyez est ce que vous obtenez »
ou « tel écran, tel écrit »). Avec LaTeX, on prend du texte simple et on
l'enrichit avec des balises. Ce balisage indique à LaTeX la signification
logique de certains éléments du texte, comme en HTML.

Par exemple dans un document HTML, l'élément `<h2>` indique une nouvelle
section. En LaTeX, pour avoir le même résultat, on utiliserait la commande
`\section`.


## La chaîne de traitement {{ site.latex }}

Comme les fichiers LaTeX ne sont pas le document lui-même mais plutôt des
instructions disant ce que doit être chaque partie du document, vous ne donnez
normalement pas à vos lecteurs votre fichier LaTeX lui-même. Au lieu de cela,
après avoir écrit votre _fichier source_ LaTeX, vous lancez LaTeX sur le fichier (en
utilisant par exemple un programme appelé `pdflatex`) pour produire un fichier
PDF. C'est ce PDF que vous allez fournir à vos lecteurs.

Ce processus porte différents noms : comme l'utilisation de LaTeX est un peu
comme la programmation, on appelle souvent cela « compiler » votre document,
le terme de « composition » serait sans doute plus exact.


## Compilations multiples avec {{ site.latex }}

Pour les documents simples, on n'a besoin de compiler le fichier qu'une seule
fois pour obtenir le PDF complet. Mais une fois que vous aurez commencé à
ajouter des éléments plus complexes, comme des références croisées, des
citations, des figures et des tables des matières, il vous faudra peut-être
faire tourner LaTeX plusieurs fois sur votre document. Nous vous dirons quand
ce sera le cas.


## {{ site.latex }} ou pdf{{ site.latex }} ou&hellip;

[Dans la prochaine leçon](lesson-02), nous allons voir que LaTeX n'est pas un
programme unique. Pour simplifier les choses, nous allons nous concentrer sur un
programme LaTeX particulier, pdfLaTeX, pour créer vos PDF. Plus tard dans le
cours, nous jetterons un œil à d'autres programmes, et vous comprendez quand les
utiliser.
