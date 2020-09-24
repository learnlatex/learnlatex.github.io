---
title: "Veja mais sobre: Extendendo o LaTeX usando pacotes"
---

## Carregando múltiplos pacotes

O comando `\usepackage` entende uma lista de pacotes separada por vírgula, então
você pode carregar vários de uma vez só: `\usepackage{color,graphicx}` por
exemplo.  Se você estiver passando opções para um pacote, elas se aplicarão para
cada um dos pacotes na lista.  Também é mais fácil remover pacotes comentando-os
se eles forem carregados separadamente.  Assim, vamos adotar como prática
carregar cada pacote em uma linha separada.

## O pacote `babel`

Nós mostramos o pacote `babel` na [lição principal](pt/lesson-06) como uma forma
de escolher diferentes padrões de hifenização.  Mas `babel` faz muito mais do
que isso, dependendo dos idiomas sendo utilizados.  Por exemplo, em Alemão,
`babel` fornece atalhos para criar hífens 'flexíveis', e também uma forma rápida
de digitar tremas sem ter uma tecla especial no teclado:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Note que o nome da opção é 'ngerman'

\begin{document}

H"ohe

\end{document}
```

Outras configurações de linguagem fazem mudanças de design:  por exemplo, em
tipografia Francesa tradicional, há um espaço antes de alguns sinas de
pontuação, como `:`, e esse espaço é adicionado automaticamente se você carregar
o pacote `babel` com a opção `french`.

## Opções globais

Às vezes, você quer que uma opção fique disponível para todos os pacotes que
você carregar.  Isso é feito ao passar a opção na linha do `\documentclass`:
todos os pacotes podem 'ver' essa lista.  Então para passar o idioma de um
documento para todos os pacotes podemos usar:

```latex
\documentclass[ngerman]{article} % Note que o nome da opção é 'ngerman'
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

H"ohe

\end{document}
```
