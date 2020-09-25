---
title: "Veja mais sobre: Estrutura Lógica"
---

## Título do documento

O LaTeX oferece marcação lógica para o título dos documentos: três comandos para
configurar os 'meta dados', e um para usá-los:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{U.~M.~Autor \and O.~Outro}
\title{Algumas coisas que fiz}
\date{1st April 2020}
\maketitle

Texto normal.
\end{document}
```

Como você pode ver, os comandos `\author`, `\title` e `\date` salvam
informações, e `\maketitle` as usa.  Você também pode separar múltiplos autores
com `\and`.  Os comandos `\author`, `\title` e `\date` devem vir antes de
`\maketitle`.  Aqui nós os colocamos no corpo do documento:  eles também podem
ser usados no preâmbulo (exceto `\maketitle`), mas se você usar atalhos do
pacote `babel` eles não estarão ativos lá.

A aparência fornecida pelo comando `\maketitle` depende da classe de documento
(ver [lição 5](lesson-05)).  Há um ambiente `titlepage` para quando você
quiser um design próprio, mas isso está fora do escopo dessa introdução.  Se
você quer fazer seus próprios designs de documento você pode usar uma classe
personalizável, como `memoir`, ou começar com uma das classes base do LaTeX,
como `book` e usá-la como ponto de partida.

## Listas descritivas
Em adição aos tipos de listas "ordenados" e "não-ordenados", o LaTeX possui um
outro tipo, menos comum: as "listas descritivas".

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

\begin{description}
\item[Cão:]  mamífero carnívoro da família dos canídeos, subespécie do lobo, e
  talvez o mais antigo animal domesticado pelo ser humano. 
\item[Gato:] mamífero carnívoro da família dos felídeos, muito popular como
  animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural
  de diversos animais, como roedores, pássaros, lagartixas e alguns insetos.
\end{description}

\end{document}
```

## Exercícios

Tente usar diferentes combinações de `\author`, `\title` e `\date` para testar
`\maketitle`.  Quais desses você _deve_ usar?  Você precisa fornecer um autor,
um título e uma data aos comandos?

Faça algumas listas descritivas, então coloque-as em outras listas (ordenadas,
não-ordenadas, ou descritivas).
