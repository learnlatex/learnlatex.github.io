---
lang: "pt"
title: "Formatação: fontes e espaçamento"
---

## Espaçamento entre parágrafos

Nós já vimos que uma linha em branco no seu código criará um novo parágrafo no
LaTeX.  Isso aparece como um parágrafo que vai começar com uma indentação.
Um estilo comum é não ter indentação para parágrafos, mas ter uma
'linha em branco' entre eles.  Podemos ter isso com o pacote `parskip`:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % Para texto de enchimento
\begin{document}
\lipsum
\end{document}
```

## Forçando uma nova linha

Na maioria das vezes você não deve forçar uma nova linha no LaTeX:  você quase
certamente quer um novo parágrafo ou usar o `parskip`, como já vimos, para fazer
uma linha em branco entre parágrafos.

Há algumas _poucas_ ocasiões onde você vai usar `\\` para iniciar uma nova linha
sem começar um novo parágrafo:

- No final da linha de uma tabela
- Dentro do ambiente `center`
- Em poesia (no ambiente `verse`)

Quase sempre, se você não está nesses locais especiais, você _não deve_ usar
`\\`.

## Adicionando espaçamento explícito

Podemos inserir um espaço fino (aproximadamente metade de um espaço normal)
usando `\,`.  No modo matemático, também há outros comandos: `\.`, `\:`, e `\;`,
e um para um espaço negativo: `\!`.

Muito raramente, por exemplo ao criar uma folha de rosto, você pode precisar
adicionar espaço horizontal ou vertical.  Podemos usar `\hspace` e `\vspace`
para isso:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Algum texto \hspace{1cm} mais texto.

\vspace{10cm}

Ainda mais texto.
\end{document}
```

## Formatação explícita do texto

Nós vimos [mais no início do curso](lesson-03) que na maioria das vezes a
estrutura lógica é preferível.  Mas às vezes você quer fazer texto negrito ou
itálico ou monoespaçado, etc.  Há dois tipos de comando para isso:  para trechos
curtos de texto, e para material potencialmente longo.

Para trechos curtos, usamos `\textbf`, `\textit`, `\textrm`, `\textsf`,
`\texttt` e `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Vamos nos divertir com fontes: \textbf{negrito}, \textit{itálico}, \textrm{romano},
\textsf{sans serif}, \texttt{monoespaçado} and \textsc{versalete}.
\end{document}
```

Para texto corrido, usamos comandos que alteram a configuração da fonte;  os
comandos aqui são, por exemplo, `\bfseries` e `\itshape`.  Porque esses não
'param', precisamos colocá-los em um _grupo_, se queremos previnir que eles
tenham efeito em todo o documento.  Ambientes no LaTeX formam grupos, assim como
células de tabelas, ou podemos usar `{...}` para criar um grupo explícito:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Texto normal.

{\itshape

Este texto é itálico.

Este também:  o efeito não se limita a um parágrafo.

}
\end{document}
```

Você pode mudar o tamanho da fonte de forma similar;  esses comandos todos têm
efeito a partir de onde foram usados.  Os tamanhos são relativos:  `\huge`,
`\large`, `\normalsize`, `\small` e `\footnotesize` são comuns.  É importante
terminar um parágrafo _antes_ de mudar o tamanho da fonte de volta; veja como
adicionamos um `\par` (equivalente a uma linha em branco) aqui:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Texto normal

\begin{center}
{\itshape\large Algum texto\par}
Texto normal
{\bfseries\small Texto muito menor\par}
\end{center}

\end{document}
```

## Exercícios

Experimente com a formatação manual: crie um ambiente `titlepage` e tente
inserir diferentes espaços e mudanças de fonte.  O que acontece quando
combinamos mudanças de fonte?  Como isso se compara com o modo matemático?

O que acontece se você mudar o tamanho da fonte de um parágrafo longo (tente
usar `\tiny` e depois `\huge`) mas não colocar o `\par` ao final antes de
terminar o grupo?
