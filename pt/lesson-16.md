---
layout: "lesson"
lang: "pt"
title: "Acessando documentação e obtendo ajuda"
description: "Esta lição mostra as principais fontes de documentação para pacotes e software relacionado ao LaTeX, e como você pode buscar ajuda quando estiver com problemas."
toc-anchor-text: "Ajuda & documentação"
toc-description: "Acessando ajuda e documentação."
---

# Acessando documentação e obtendo ajuda

<span
  class="summary">Esta lição mostra as principais fontes de documentação para
  pacotes e software relacionado ao LaTeX, e como você pode buscar ajuda quando
  estiver com problemas.</span>

Há várias formas de acessar a documentação de um pacote ou classe.

## `texdoc`

Se você instalou um sistema TeX (_e.g._, TeX Live ou MiKTeX) e incluiu a
documentação quando instalou, você pode acessá-la localmente usando a ferramenta
de linha de comando `texdoc`.  Usando:

`texdoc` < _pct_ >

abrirá a documentação do pacote `<pct>`.  Esse utilitário buscará a documentação
disponível e abrirá a qual ele achar mais próxima do termo de busca que você
digitou.  Você pode lsitar e escolher dentre todos os resultados compatíveis que
ele encontrar usando:

`texdoc -l` < _pct_ >

## texdoc.org

[texdoc.org](https://texdoc.org/) é um website que funciona de forma similar ao
`texdoc`.  Você pode buscar a documentação que o site tem disponível assim como
você faria com `texdoc -l` e escolher dentre os resultados.

## CTAN

[CTAN](https://www.ctan.org) é a rede abrangente de arquivos TeX
(_Comprehensive TeX Archive Network_).  A maioria dos pacotes LaTeX são
publicados lá.  Você pode buscar no site por um pacote para acessar sua
documentação.  Geralmente os pacotes são salvos em `ctan.org/pkg/<nome-pct>`
e você pode acessar o arquivo leia-me (README) e a documentação dos pacotes
armazenados lá.

## Livros sobre LaTeX

Há vários livros disponíveis que podem ajudar você a aprender sobre o LaTeX.
Como um iniciante, você vai ganhar muito conhecimento de um guia estruturado
para iniciantes, pois eles podem dar muito mais detalhes do que mostramos aqui.
Você também pode querer acessar uma referência com mais detalhes e
recomendações.

O time LaTeX tem uma [lista de livros](https://www.latex-project.org/help/books)
escrita em sua maioria pelos membros.  Os mais notáveis são o
[guia oficial de Lamport](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838)
e o abrangente
[LaTeX Companion](https://www.informit.com/store/latex-companion-9780201362992).

Outros livros focados no aprendizado de LaTeX incluem:

- [_Guide to
  LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) de Helmut
  Kopka e Patrick Daly: disponível em e-book
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/)
  de Nicola Talbot: disponível em e-book gratuito ou edição impressa acessível
- [_Using LaTeX to write a PhD
  thesis_](https://www.dickimaw-books.com/latex/thesis/)
  de Nicola Talbot: disponível em e-book gratuito ou edição impressa acessível
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)
  de Stefan Kottwitz: disponível em e-book e impresso
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154)
  de Marc van Dongen: disponível em e-book e impresso

## Obtendo ajuda

Há vários fóruns online para fazer perguntas sobre o LaTeX;  talvez o mais
popular atualmente seja o
[TeX - LaTeX StackExchange](https://tex.stackexchange.com).  Sempre que você
fizer uma pergunta, é melhor primeiro deixar o seu exemplo claro:  o que é
conhecido como um 'exemplo funcional mínimo'
('_minimal working example_'&mdash;MWE).  Isso não significa que o código deve
funcionar (você não estaria perguntando se estivesse), mas significa que você
fez o seu melhor para deixar o exemplo claro e mínimo (que contém apenas o
necessário para demonstrar o problema).

### Como criar um _minimal working example_ (MWE)

Como construir um MWE?  Normalmente o mais fácil é começar de:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text
\end{document}
```

e adicionar um trecho por vez até que o problema apareça.  Você pode tentar
'desmembrando' seu arquivo, tirando partes não relacionadas ao problema, mas
isso pode demorar.

<p
  class="hint">Se você precisar mais texto para mostrar quebras de página ou
  outros efeitos, pacotes como <code>lipsum</code> podem ser usados para gerar
  texto de enchimento enquanto o código fonte continua pequeno.</p>

### Arquivo log

Uma coisa que é bom que você tenha disponível é o log;  esse arquivo é criado
pelo LaTeX sempre que você o executa e tem o mesmo nome do seu arquivo principal
mas com extensão `.log`.

<p
  class="hint">Dependendo da interface do seu computador, você pode
  precisar ativar 'mostrar extensões' para descobrir qual arquivo é o log.</p>

No arquivo log, você sempre pode ver as mensagens de erro completas.  As
mensagens de erro do LaTeX tentam ser úteis, mas elas não são as mesmas
mensagens que em processadores de texto.

<p
  class="hint">Alguns editores também tornam difícil ver o 'texto completo' de
  um erro, o que pode esconder detalhes importantes.</p>

Se você tiver um problema, usuários experientes de LaTeX frequentemente vão
pedir uma cópia do seu log para lhe ajudar.

### Indo além

Finalmente, oferecemos uma [galeria de pequenos exemplos](extra-01) mostrando
uma gama de áreas diferentes que não foram contempladas nessa introdução, e
diferentes pacotes específicos para essas áreas.
