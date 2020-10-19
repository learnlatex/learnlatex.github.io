---
lang: "pt"
title: "Usando classes de documentos para influenciar o design"
---

## O que uma classe de documento faz

Você deve ter percebido que todos os documentos LaTeX que criamos até agora
começam com uma linha com `\documentclass`, e que `\documentclass{article}` foi
a escolha mais comum.  (Nós usamos `\documentclass{report}` na
[lição anterior](lesson-04) para testar o comando `\chapter`.) Essa linha é
necessária em todos os documentos em LaTeX, e é (quase) sempre o primeiro
comando que você deve usar.

A classe de documento configura a aparência geral do documento, por exemplo:

- design: margens, fontes, espaçamento, etc.
- comandos de secionamento disponíveis (como `\chapter`)
- se o título vai em uma página dedicada

Classes de documento também podem adicionar outros comandos no geral;  isso é
particularmente comum em classes especializadas, como classes para apresentações
de slides.

A linha da classe de documento também pode configurar _opções globais_: coisas
que se aplicam ao documento todo.  Elas são dadas entre colchetes:
`\documentclass[<opções>]{<nome>}`.  Esta sintaxe, com informações opcionais
aparecendo primeiro entre colchetes, é usada em muitos comandos do LaTeX.

## As classes base

O LaTeX vem com um conjunto de classes padrão, todas as quais têm aparência
similar, mas com algumas variações:

- `article`: documentos curtos sem capítulos
- `report`: documentos mais longos com capítulos, e impressão em um lado
- `book`: documentos mais longos com capítulos, impressão em frente e verso, com
  conteúdo pré- e pós-textual (por exemplo um índice remissivo)
- `letter`: correspondência, sem seções
- `slides`: para apresentações (mas veja mais abaixo)

As classes `article`, `report` e `book` têm comandos muito similares
disponíveis, como já vimos.  Quando escrevendo uma carta com a classe `letter`,
os comandos disponíveis são um pouco diferentes:

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\begin{document}

\begin{letter}{Um endereço\\Em uma rua\\de Alguma Cidade}

\opening{Caro Senhor ou Senhora,}

O texto vai aqui

\closing{Atenciosamente,}

\end{letter}

\end{document}
```

Veja como ``\\`` é usado para separar linhas do endereço;  vamos abordar quebra
de linhas [adiante](lesson-11).  Também veja como a classe `letter` cria um
novo ambiente para cada carta, e tem comandos especializados.

As classes padrão `article`, `report` e `book` têm opções `10pt`, `11pt` e
`12pt` para mudar o tamanho da fonte, e `twocolumn` para fazer um documento com
duas colunas.

## Classes ricas em funções

As classes padrão são muito estáveis, mas isso significa que também são bem
conservativas quanto à aparência e à gama de comandos disponíveis.  Ao longo do
tempo, algumas classes poderosas foram escritas, que lhe permitem alterar o
design tem ter que fazer coisas manualmente (que nós abordaremos
[adiante](lesson-11)).

A _American Mathematical Society_ fornece variantes das classes padrão (`amsart`
e `amsbook`) com um design mais tradicional, mais próximo do que é usado em
artigos científicos de matemática.

As duas maiores e mais populares classes 'extendidas' são a coleção KOMA-Script
e a classe memoir.  KOMA-Script oferece um conjunto de classes que são
'paralelos' às classes padrão:  `scrartcl`, `scrreprt`, e `scrbook`, enquanto há
apenas uma classe `memoir` que é como uma extensão de `book`.

Essas classes extendidas têm muitos pontos de personalização, que vamos explorar
um pouco em um exercício.  Você pode se perguntar como sabemos quais são esses
pontos de personalização;  vamos abordar isso
[em uma lição adiante](lesson-15), mas você pode pular se quiser!

## Apresentações

A classe `slides` foi desenvolvida para fazer slides físicos na década de 1980,
então não possui recursos para criar apresentações interativas em PDF.  Há
classes modernas que fazem exatamente isso:  elas são bem especializadas
comparadas a documentos gerais no LaTeX, então as abordamos na lição de
[informações adicionais](more-05).

## Exercícios

Explore como mudar a classe de document entre as padrão, as da coleção
KOMA-Script, e `memoir` afeta a aparência do documento.

```latex
\documentclass{article} % Mude a classe aqui
\usepackage[T1]{fontenc}

\begin{document}

\section{Introdução}

Este é um documento de exemplo com texto
modelo\footnote{e uma nota de rodapé}.  Esse parágrafo
é mais longo, pois queremos ver o efeito de fazer o
documento ter duas colunas.

\end{document}
```

Adicione a opção de classe `twocolumn` e veja como a aparência muda.

Mude o comando `\section` acima para `\chapter` e veja quais os efeitos
das seguintes opções quando usando a classe `scrreprt`.

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
