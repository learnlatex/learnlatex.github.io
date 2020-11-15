---
lang: "fr"
title: "Choisir des polices de caractères et utiliser Unicode : pour aller plus loin"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis orci, faucibus eget sollicitudin vel, varius eget ipsum. Duis sed sodales leo."
toc-anchor-text: "Choisir des polices de caractères et utiliser Unicode : pour aller plus loin"
---

## Lua

Le moteur LuaTeX donne accès aux polices OpenType de la même manière que XeTeX,
et le package `fontspec` fonctionnent aussi bien avec l'un qu'avec l'autre,
pour la plupart des usages.

LuaTeX étend les fonctionnalités TeX d'autres façons, notamment en intégrant le
langage de script Lua. Ce langage permet de programmer dans un style plus
familier aux habitués des langages de programmation courants. Dans LuaTeX,
il offre la possibilité d'accéder aux rouages internes de TeX et de modifier
leur comportement par du code Lua.

Nous ne parlerons pas de la programmation en Lua ici, mais voici un exemple
de calcul de 2π :


```latex
%!TEX lualatex
\documentclass{article}

\begin{document}

$ 2\pi \approx \directlua{ tex.print(2 * math.pi) } $

\end{document}
```

