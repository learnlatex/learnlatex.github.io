---
title: "Extendendo o LaTeX usando pacotes"
---

Depois de declarar uma classe, no preâmbulo você pode modificar funcionalidades
do LaTeX adicionando um ou mais _pacotes_. Estes podem:

- Mudar como partes do LaTeX funcionam
- Adicionar novos comandos ao LaTeX
- Mudar a aparência do documento

## Mudando como o LaTeX funciona

O 'kernel' (núcleo) do LaTeX é bem limitado em termos de personalização para o
usuário, então alguns pacotes cuidam de ideias bastante comuns.  O primeiro da
nossa lista muda como o LaTeX trata de tipografia específica a um idioma
(hifenização, pontuação, citações, localização de idioma, etc.).  Idiomas
diferentes têm regras diferentes, então é importante dizer ao LaTeX qual usar.
Isso é configurado pelo pacote `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

%\usepackage[brazilian]{babel}

\usepackage[width = 6cm]{geometry} % To force hyphenation here

\begin{document}

Isto é um monte de texto sem sentido para demonstrar como o LaTeX vai hifenizar texto
em diferentes idiomas, então deve ser longo para ter no mínimo uma separação silábica.
Isto é um monte de texto sem sentido para demonstrar como o LaTeX vai hifenizar texto
em diferentes idiomas, então deve ser longo para ter no mínimo uma separação silábica.

\end{document}
```

Tente descomentar o a linha que carrega o pacote `babel` e veja o efeito. (As
regras de hifenização padrão são Inglês Americano.)

O pacote `babel` faz muito mais que hifenização, dependendo do idioma em
questão; nós damos [alguns detalhas extra](pt/more-06) se você precisar.

## Mudando o design

É útil poder ajustar alguns aspectos da aparência do documento independentemente
da classe de documento.  O mais óbvio são as margens.  Nós acabamos de usar o
pacote `geometry` no exemplo acima, mas vamos agora ver um exemplo específico
sobre margens.

```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}

\begin{document}
Olá mundo!

Este é o meu primeiro documento.


% ================
\chapter{Capítulo Um}
Introdução ao primeiro capítulo.


\section{Título da primeira seção}
Texto do material na primeira seção

Segundo parágrafo.

\subsection{Subseção da primeira seção}

Texto do material na subseção.


% ================
\section{Segunda seção}

Texto da segunda seção.

\end{document}
```

Você deve ver claramente o efeito quando o pacote `geometry` é carregado ou não.

## Adicionando comandos

Um dos pontos fortes do LaTeX é que você pode escolher entre milhares de
pacotes, incluindo alguns para escrever textos matemáticos, fazer links, para
recursos de cores sofisticados, etc.  Vamos ver alguns dos pacotes mais comuns
em lições posteriores.

## Exercícios

Tente escrever texto em outros idiomas e veja como `babel` afeta a hifenização:
você pode encontrar algum texto na internet, e adivinhar a opção que carrega o
idioma escolhido.

Tente alterar as margens no exemplo com `geometry`.  Você pode modificar margens
individuais usando `top`, `bottom`, `left` e `right`, em uma lista separada por
vírugla.

Tente carregar o pacote `lipsum` e usar o comando `\lipsum` no seu documento.
Consegue dizer por que esse pacote é útil para fazer exemplos?
