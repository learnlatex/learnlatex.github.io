---
lang: "pt"
title: "Estrutura Lógica"
toc-anchor-text: "Estrutura Lógica"
toc-description: "Estrutura e representação visual."
---

O LaTeX possui meios de você focar na estrutura lógica do seu documento, assim
como lhe permite modificar a aparência diretamente.  A maioria das vezes, é
muito melhor usar métodos que focam na estrutura, pois torna mais fácil
reutilizar ou alterar a aparência quando necessário.

## Um primeiro exemplo

Vamos começar com um exemplo contrastando um dos comandos de marcação lógica
mais comuns no LaTeX, `\emph` (do inglês _emphasize_), que simplesmente deixa
texto em itálico (em impressões, geralmente é como texto é enfatizado).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Texto com \emph{ênfase e com \emph{ênfase} aninhada}.

Texto em \textit{itálico e com \textit{itálico} aninhado}.
\end{document}
```

Você pode provavelmente adivinhar que `\textit` é um comand para fazer texto em
itálico, mas ele _sempre_ deixa coisas em itálico, então não funciona com mais
níveis de texto aninhado.  Veja como `\emph` sabe quando está aninado.
Também há ocasiões em que ênfase não é o mesmo que itálico;  por exemplo, em
apresentações, cores são geralmente uma opção melhor.  Com marcação lógica, não
temos que nos preocupar com os detalhes no corpo do documento.

Vamos ver sobre [formatação manual mais adiante](lession-11), mas para o
momento vamos adicionar `\textbf` aos comandos que conhecemos:  ele deixa texto
negrito.

## Comandos de secionamento

Você provavelmente usou um processador de texto, onde para começar uma seção a
maioria das pessoas escreve o título e então simplesmente aumenta o tamanho da
fonte e deixa o texto negrito, seguido por uma quebra de linha.  No LaTeX, usar
marcação é _mais fácil_ que fazer a formatação manualmente; podemos usar o
comando `\section`, que cuida da numeração, mudança de fonte, espaçamento
vertical, etc., e mantém o resultado uniforme ao longo do documento.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Olá mundo!

Este é o meu primeiro documento.

\section{Título da primeira seção}

Material textual na primeira seção.

Segundo parágrafo.

\subsection{Subseção na primeira seção}

Texto na subseção.

\section{Segunda seção}

Texto da segunda seção.

\end{document}
```

Usando a configuração pardrão da classe `article`, o LaTeX numera as seções e
subseções e inclui títulos em negrito.  Vamos ver como mudar a aparência na
[próxima lição](lesson-05).

O LaTeX pode dividir documentos em alguns níveis por padrão:

- `\chapter` (mas é necessário `\documentclass{book}` ou
  `\documentclass{report}` para isso)
- `\section`
- `\subsection`
- `\subsubsection`

Ainda podemos ir além:  o próximo 'abaixo' é `\paragraph`, mas quase sempre é
'detalhe demais' em seções.  (Sim, `\paragraph` é um comando de secionamento, e
_não_ uma forma de iniciar um novo parágrafo!)

Você pode se pergutar sobre o título de um documento.  Há vários comandos
especiais para isso, mas nem todos os documentos os usam, então abordamos isso
na [lição extra paralela a esta](more-04).

## Listas

Outro local muito comum que você vai querer marcação lógica é em listas.
Há dois tipos comuns de listas por padrão no LaTeX:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Ordenada:
\begin{enumerate}
  \item Um item
  \item Outro
  \item Uau! Três itens
\end{enumerate}

Não-ordenada:
\begin{itemize}
  \item Um item
  \item Outro
  \item Uau! Três itens
\end{itemize}

\end{document}
```

Percceba que usamos `\item` para iniciar cada item, e que o marcador usado para
cada tipo de lista é adicionado automaticamente.

## Exercícios

Experimente com diferentes níveis de secionamento.  Tente usar
`\documentclass{report}` ao invés de `\documentclass{article}` e adicione
comandos `\chapter`.  Como eles parecem?  Tente `\paragraph` e (até mesmo)
`\subparagraph` para ver como eles funcionam:  por padrão eles _não_ adicionam
números.

Faça algumas listas, e insira uma lista dentro da outra.  Como o formato dos
números ou marcadores muda?  Você pode ter apenas quatro níveis de listas por
pardão no LaTeX, mas mais que quatro níveis nesse caso tende a ser um mau sinal
de qualquer forma!
