---
layout: "lesson"
lang: "pt"
title: "Lição específica para a língua Portuguesa"
description: "Esta lição mostra detalhes específicos de linguagem para escrever textos em Português. O foco é na hifenização e nos textos localizados."
next: "extra-01"
toc-anchor-text: "LaTeX na Língua Portuguesa"
toc-description: "Lição específica para a língua Portuguesa."
---

# Especificidades para usar o LaTeX em textos em Português

<span
  class="summary">Esta lição mostra detalhes específicos para escrever textos
  em português usando o LaTeX, com foco nos padrões de hifenização e nos textos
  localizados.</span>

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

É importante utilizar o idioma correto no pacote `babel` para ter os padrões de
hifenização corretos carregados.  O exemplo a seguir mostra o mesmo texto
escrito utilizando o padrão de hifenização da Língua Portuguesa, e abaixo, o
padrão do Inglês.  Veja como no PDF (quando compilado com o `pdflatex`) a
palavra "gravadas" é hifenizada corretamente como "gra-vadas" em Português, mas
não é possível hifenizar em Inglês.  Outro exemplo é a palavra "conhecidas", que
é hifenizada em Inglês como "con-hecidas", que é uma divisão silábica incorreta
em Português.

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
