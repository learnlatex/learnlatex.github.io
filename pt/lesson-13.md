---
lang: "pt"
title: "Estruturando documentos longos"
toc-anchor-text: "Structuring o código"
toc-description: "Dividindo o código de forma organizada."
---

<script>
preincludes = {
 "pre0": {
    "pre1": "front.tex",
    "pre2": "pref.tex",
    "pre3": "chap1.tex",
    "pre4": "chap2.tex",
    "pre5": "append.tex",
    "pre6": "frontcover.tex",
    "pre7": "dedication.tex",
    "pre8": "copyright.tex",
    "pre9": "backcover.tex",
   }
}
</script>

## Estruturando seu código fonte

Quando você está escrevendo um documento longo, você provavelmente vai querer
dividir o código fonte em múltiplos arquivos.  Por exemplo, é muito comum ter um
arquivo 'principal', e um arquivo fonte por capítulo (para um livro ou tese), ou
por seção (para um artigo longo).

O LaTeX nos permite dividir arquivos fonte de uma forma controlada.  Há dois
comandos importantes aqui, `\input` e `\include`.  Nós podemos usar `\input`
para incluir um arquivo como se seu conteúdo estivesse escrito no lugar do
comando `\input`, então esse comando pode ser usado para (essencialmente)
qualquer material.  O comando `\include` funciona para capítulos somente: ele
inicia uma nova página e faz alguns ajustes internos.  Mas ele tem uma grande
vantagem:  ele nos permite incluir arquivos seletivamente, então você pode
trabalhar em apenas uma parte do seu documento, ao invés dele todo.

Um documento longo pode, então, ter essa aparência:

<!-- pre0 {% raw %} -->
```latex
\documentclass{book}
\usepackage[T1]{fontenc}
\usepackage{biblatex}
\addbibresource{biblatex-examples.bib}

\title{Um livro de exemplo}
\author{John Doe \and Joe Bloggs}

\IfFileExists{append.aux}
{
\includeonly{
%  front,
%  chap1,
  chap2,
%  append
  }
}
{
% Inicialmente compilar o documento inteiro
% para gerar todos os arquivos .aux
}

\begin{document}
\frontmatter
\include{front}

% =========================
\mainmatter
\include{chap1}
\include{chap2}
\appendix
\include{append}

% ========================
\backmatter
\printbibliography
\newpage
\input{backcover}
\end{document}
```
<!-- {% endraw %} -->

Vamos ver os vários aspectos desse arquivo a seguir. (Os vários arquivos de
suporte estão no final desta página.)

## Usando `\input`

O comando `\input` é bom para partes de um longo arquivo que _não_ são capítulos
separados.  No exemplo, nós o usamos para separar a capa e contracapa, mantendo
o arquivo principal curto e claro, e isso significa que poderíamos reusar as
capas em outro documento.  Nós também usamos `\input` para as partes
'não-capítulo' no início do nosso 'livro':  coisas como o prefácio.  Novamente,
isso é para manter o arquivo principal limpo.

## Usando `\include` e `\includeonly`

O comando `\include` é bom para capítulos, então usamos ele para capítulos
completos;  ele sempre inicia uma nova página.  Escolhemos quais capítulos
serão de fato compilados usando `\includeonly`, que como você pode ver recebe
uma lista separada por vírgula de nomes de arquivo.  Ao usar o `\includeonly`,
você pode encurtar o tempo total de execução do seu documento e produzir um PDF
'seletivo' para revisão.  Adicionalmente, a principal vantagem de `\includeonly`
é que o LaTeX vai usar todas as referências cruzadas dos arquivos `.aux` de
outros arquivos incluídos.

## Criando um sumário

O comando `\tableofcontents` usa as informações dos comandos de secionamento
para preencher o sumário.  Ele tem seu próprio arquivo auxiliar com extensão
`.toc`, então você pode precisar executar o LaTeX duas vezes para resolver toda
a informação.  O sumário é gerado automaticamente dos títulos das seções.  Há
comandos simlares para lista de figuras (`\listoffigures`) e de tabelas
(`\listoftables`), que obtém as legendas das figuras do comando `\caption` nos
ambientes _float_ `figure` e `table`, e usa arquivos com extensão `.lof` e
`.lot`, respectivamente.

## Dividindo o documento em partes

Os comandos `\frontmatter`, `\mainmatter`, e `\backmatter` afetam a formatação.
Por exemplo, `\frontmatter` muda a numeração das páginas para algarismos Romanos
O comando `\appendix` muda a numeração dos capítulos para `A`, `B`, etc., então
o primeiro comando `\chapter` depois de `\appendix` imprime `Appendix A`.

## Exercícios

Experimente com a estrutura básica do documento de exemplo, e tente adicionar e
remover itens em `\includeonly` para ver o efeito.

Adicione alguns _floats_ para produzir uma lista de figuras e tabelas.
Se estiver usando uma instalação local de LaTeX, você consegue ver quantas
execuções do LaTeX são necessárias?  (Os sistemas online executam o LaTeX
quantas vezes forem necessárias automaticamente, então não fica claro quantas
vezes são necessárias.)

----

### front.tex
<!-- pre1 {% raw %} -->
```latex
\input{frontcover}
\maketitle
\input{dedication}
\input{copyright}
\tableofcontents
\input{pref}
```

#### pref.tex
<!-- pre2 {% raw %} -->
```latex
\chapter{Preface}
The preface text. See \cite{doody}.
```
<!-- {% endraw %} -->

#### chap1.tex
<!-- pre3 {% raw %} -->
```latex
\chapter{Introduction}
The first chapter text.
```
<!-- {% endraw %} -->

#### chap2.tex
<!-- pre4 {% raw %} -->
```latex
\chapter{Something}
The second chapter text.
```
<!-- {% endraw %} -->

####  append.tex
<!-- pre5 {% raw %} -->
```latex
\chapter*{Appendix}
The first appendix text.
```
<!-- {% endraw %} -->

#### frontcover.tex
<!-- pre6 {% raw %} -->
```latex
\begin{center}
The front cover
\end{center}
```
<!-- {% endraw %} -->

#### dedication.tex
<!-- pre7 {% raw %} -->
```latex
\begin{center}
\large
For \ldots
\end{center}
```
<!-- {% endraw %} -->

#### copyright.tex
<!-- pre8 {% raw %} -->
```latex
\begin{center}
Copyright 2020 learnlatex.
\end{center}
```
<!-- {% endraw %} -->

#### backcover.tex
<!-- pre9 {% raw %} -->
```latex
\begin{center}
The back cover
\end{center}
```
<!-- {% endraw %} -->

----
