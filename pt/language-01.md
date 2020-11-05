---
lang: "pt"
title: "Lição específica para a língua Portuguesa"
next: "extra-01"
toc-anchor-text: "Lição específica para a língua Portuguesa"
---

Como a língua Portuguesa usa o alfabeto Latino, assim como a língua Inglesa, o
LaTeX funciona quase corretamente com a língua Portuguesa por padrão; há poucos
ajustes a fazer.  As únicas coisas que devem ser mudadas para escrever em
Português no LaTeX são os padrões de hifenização e os textos localizados (por
exemplo a palavra 'Capítulo', que por padrão aparece 'Chapter').

O pacote `babel` fornece duas variantes da língua Portuguesa: Português Europeu
e Brasileiro, que podem ser carregados com as opções `portuguese` e `brazilian`,
respectivamente:

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[brazilian]{babel}
\begin{document}
\chapter{Viu? :)}
\end{document}
```

Ambas as opções carregam os padrões de hifenização da língua Portuguesa, e
modificam os textos localizados de acordo (há pequenas diferenças nesses textos
entre as duas versões do idioma: por exemplo com `brazilian` o comando
`\tableofcontents` cria um "Sumário", enquanto que com `portuguese` o título
do caopitulo fica "Conteúdo").
