---
lang: "pt"
title: "Veja mais sobre: Extendendo o LaTeX usando pacotes e definições"
toc-anchor-text: "Veja mais sobre: Extendendo o LaTeX usando pacotes e definições"
---

## Carregando múltiplos pacotes

O comando `\usepackage` entende uma lista de pacotes separada por vírgula, então
você pode carregar vários de uma vez só: `\usepackage{color,graphicx}` por
exemplo.  Se você estiver passando opções para um pacote, elas se aplicarão para
cada um dos pacotes na lista.  Também é mais fácil remover pacotes comentando-os
se eles forem carregados separadamente.  Assim, vamos adotar como prática
carregar cada pacote em uma linha separada.

## O pacote `babel`

Nós mostramos o pacote `babel` na [lição principal](lesson-06) como uma forma
de escolher diferentes padrões de hifenização.  Mas `babel` faz muito mais do
que isso, dependendo dos idiomas sendo utilizados.  Por exemplo, em Alemão,
`babel` fornece atalhos para criar hífens 'flexíveis', e também uma forma rápida
de digitar tremas sem ter uma tecla especial no teclado.  Veja também como o
título da seção _Table of Contents_ gerada pelo comando `\tableofcontents` muda
para o Alemão _Inhaltsverzeichnis_:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Note que o nome da opção é 'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

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

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```

## Mais definições

O `\newcommand` permite comandos com até nove argumentos, em que o primeiro pode
ser opcional.

Se pegarmos o exemplo da lição principal, podemos tornar a cor opcional, sendo o
padrão azul:

```latex
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Algo sobre \kw{maçãs} e \kw[red]{laranjas}.

\end{document}
```

Argumentos opcionais são delimitados por `[]` e, se omitidos, o padrão
especificado na definição é usado.

## `\NewDocumentCommand`

A partir da versão de Outubro de 2020 do LaTeX, um sistema estendido de
definições está disponível.  Em versões anteriores esse sistema estava
disponível no pacote `xparse` que incluímos aqui por compatibilidade.

Podemos reproduzir o exemplo acima usando `\NewDocumentCommand`:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Necessário apenas em versões antigas do LaTeX
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Algo sobre \kw{maçãs} e \kw[red]{laranjas}.

\end{document}
```

Assim como com o `\newcommand`, o `\NewDocumentCommand` pega o comando a ser
definido (aqui `\kw`) e o corpo da definição usando `#1` a `#9` para os
argumentos, no entanto a diferença está em como os argumentos são especificados.

Ao contrário do `\newcommand`, onde apenas o número de argumentos é dado,
opcionalmente dando um valor padrão para o primeiro, com o `\NewDocumentCommand`
cada argumento é especificado com uma letra, então um comando de dois argumentos
é especificado com `{mm}` ao invés de `[2]`.  Essa forma é um pouco mais longa,
mas permite muito mais flexibilidade nos comandos a serem definidos.  Aqui damos
apenas esse simples exemplo onde o primeiro argument é opcoinal, com padrão azul
(`O{blue}`) e o segundo é obrigatório (`m`).
