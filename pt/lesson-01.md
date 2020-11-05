---
lang: "pt"
title: "O que é LaTeX e como funciona?"
toc-anchor-text: "O Básico de LaTeX"
toc-description: "O que é LaTeX e como funciona?"
---

Diferente de processadores de texto comuns, como o _Microsoft Word_ ou o
_LibreOffice Writer_, o LaTeX geralmente não tem interface WYSIWYG ('What You
See Is What You Get'&mdash;'O que você vê é o que você obtém').  Com o LaTeX,
você parte de texto simples e enriquece-o com _markup_ (comandos e instruções
para o LaTeX).  Essas instruções comunicam ao LaTeX o significado de certos
elementos do texto, similar ao HTML.

Por exemplo, o elemento `<h2>` indica uma nova seção em um documento HTML.
O LaTeX também tem um comando para isso; aqui você usaria o comando `\section`.

## O fluxo de trabalho com {{ site.latex }}

Porque os arquivos LaTeX não são o documento em si, mas instruções sobre o que
cada parte do documento deve ser, você normalmente não dá a outras pessoas os
seus arquivos LaTeX.  Ao invés disso, após escrever seu documento _fonte_, você
executa o LaTeX no seu arquivo (normalmente usando um programa chamado
`pdflatex`) para criar um arquivo PDF.  Esse PDF é o que você apresenta às
pessoas.

Pessoas usam nomes diferentes para descrever esse processo.  Como usar o LaTeX
é um pouco ligado à programação, esse processo é geralmente chamado de
'compilar' o seu documento, embora 'composição tipográfica' seja mais correto.

## Múltiplas execuções do {{ site.latex }}

Para arquivos simples, você só precisa executar o LaTeX uma vez no seu arquivo
para ter o PDF completo.  Mas conforme você adicionar coisas mais complicadas,
como referências cruzadas, citações, figuras, e sumários, você precisará
executar o LaTeX mais de uma vez.  Vamos lhe dizer quando for o caso.

## {{ site.latex }} ou pdf{{ site.latex }} ou ...

Na [próxima lição](lesson-02), nós vamos ver que o LaTeX não é um único
programa.  Para simplificar as coisas, nós vamos focar em uma versão em
particular, o pdfLaTeX, para criar os seus PDFs.  Nós também vamos ver outros
programas, e porque você usaria eles, mais adiante no curso.
