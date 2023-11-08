---
layout: "lesson"
lang: "pt"
title: "Lição específica para a língua portuguesa"
description: "Esta lição mostra detalhes específicos de linguagem para escrever textos em português. O foco é na hifenização e nos textos localizados."
next: "extra-01"
toc-anchor-text: "LaTeX na língua portuguesa"
toc-description: "Lição específica para a língua portuguesa."
---

# Especificidades para usar o LaTeX em textos em português

<span
  class="summary">Esta lição mostra detalhes específicos para escrever textos
  em português usando o LaTeX, com foco nos padrões de hifenização e nos textos
  localizados.</span>

Como a língua portuguesa usa o alfabeto latino, assim como a língua inglesa, o
LaTeX funciona quase corretamente com a língua portuguesa por padrão; há poucos
ajustes a fazer.  As únicas coisas que devem ser mudadas para escrever em
português no LaTeX são os padrões de hifenização e os textos localizados (por
exemplo a palavra 'Capítulo', que por padrão aparece 'Chapter').

O pacote `babel` fornece duas variantes da língua portuguesa: português europeu
e brasileiro, que podem ser carregados com as opções `portuguese` e `brazilian`,
respectivamente:

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[brazilian]{babel}
\begin{document}
\chapter{Viu? :)}
\end{document}
```

Ambas as opções carregam os padrões de hifenização da língua portuguesa, e
modificam os textos localizados de acordo (há pequenas diferenças nesses textos
entre as duas versões do idioma: por exemplo com `brazilian` o comando
`\tableofcontents` cria um "Sumário", enquanto que com `portuguese` o título
do caopitulo fica "Conteúdo").

É importante utilizar o idioma correto no pacote `babel` para ter os padrões de
hifenização corretos carregados.  O exemplo a seguir mostra o mesmo texto
escrito utilizando o padrão de hifenização da língua portuguesa, e abaixo, o
padrão do inglês.  Veja como no PDF (quando compilado com o `pdflatex`) a
palavra "gravadas" é hifenizada corretamente como "gra-vadas" em português, mas
não é possível hifenizar em inglês.  Outro exemplo é a palavra "conhecidas", que
é hifenizada em inglês como "con-hecidas", que é uma divisão silábica incorreta
em português.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[textwidth=10.9cm]{geometry}
\usepackage[english,brazilian]{babel}
\usepackage{color}
\setlength\parindent{0pt}
\begin{document}
Apesar disso, como acontece com as palavras élficas, estas ficaram
\textcolor{red}{gravadas} em sua memória, e muito tempo depois ele as
interpretou o melhor que pôde: a língua era a das músicas élficas, e
falava de coisas pouco \textcolor{red}{conhecidas} na Terra-média.

\begin{otherlanguage}{english}
Apesar disso, como acontece com as palavras élficas, estas ficaram
\textcolor{red}{gravadas} em sua memória, e muito tempo depois ele as
interpretou o melhor que pôde: a língua era a das músicas élficas, e
falava de coisas pouco \textcolor{red}{conhecidas} na Terra-média.
\end{otherlanguage}
\end{document}
```
