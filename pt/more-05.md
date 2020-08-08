---
title: "Veja mais sobre: Usando classes de documentos para influenciar o design"
---

## Classes específicas de revistas

Muitas revistas acadêmicas têm classes de documento em LaTeX para as submissões.
Estas geralmente configuram a aparência do documento para ser similar ao artigo
publicado, embora isso dependa da fonte utilizada, etc.  Se há uma classe
disponível, ela é normalmente fornecida diretamente pelo escritório editorial,
que também deve fornecer detalhes sobre quais recursos a classe tem.  Muitas
também estão disponíveis na CTAN e em distribuições TeX.

## Classes para apresentações

Uma área que precisa de muito tratamento especial é criar apresentações.
A classe `slides` foi escrita para fazer slides 'clássicos' impressos, e não tem
nenhum suporte para apresentações eletrônicas.  Duas classes foram desenvolvidas
com esse propósito, que são amplamente utilizadas:  `beamer` e `powerdot`.  Como
`beamer` é provavelmente a mais comum, vamos mostrar um exemplo de como ela
funciona:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}{O primeiro quadro}
  Algum texto
\end{frame}

\begin{frame}{O segundo quadro}
  Mais texto
  \begin{itemize}
    \item<1-> Primeiro item
    \item<2-> Segundo item
  \end{itemize}
\end{frame}

\end{document}
```

Esse exemplo mostra duas ideias importantes.  Primeiro, `beamer` divide o
documento em 'quadros' (_frames_), e cada qual pode ter mais de um slide
(página).  Segundo, `beamer` adiciona à sintaxe normal do LaTeX permitindo que
partes do material apareçam uma de cada vez.  Isto é uma ferramenta poderosa,
mas mais complicada do que podemos abordar aqui:  dê uma olhada
[nesse blog](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept)
para uma abordagem mais aprofundada.

## Uma classe para imagens

Há ocasiões em que você precisa fazer uma imagem (que pode conter muito texto)
usando o LaTeX.  Frequentemente você não quer nada além do pŕoprio conteúdo na
'página'.  Essa tarefa fica mais fácil usando a classe
[`standalone`](https://ctan.org/pkg/standalone).  Ela automaticamente configura
o tamanho da página para conter o conteúdo impresso:

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
Um documento simples:  esta será uma caixa bem pequena!
\end{document}
```
