---
layout: "lesson"
lang: "pt"
title: "Veja mais sobre: Citações e referências"
description: "Esta lição dá mais detalhes sobre bibliografia em outros idiomas, como transformar referências em links e apresenta as principais diferenças entre estilos do BibTeX."
toc-anchor-text: "Veja mais sobre: Citações & referências"
---

## Organização alfabética em outros idiomas

O programa BibTeX foi escrito originalmente para trabalhar com referências em
inglês.  Ele é bem limitado em termos de caracteres com acentos, e ainda mais
com caracteres não-latinos.  Em contrapartida, o Biber foi projetado desde o
princípio para trabalhar com diversos alfabetos corretamente.

Isso significa que, se você precisa escrever uma bibliografia em um idioma
com alfabeto diferente do inglês, ou até com caracteres especiais, você
provavelmente vai precisar usar o `biblatex` e o Biber, ao invés do `natbib`
e BibTeX.

## Hiperlinks

Se você carregar o pacote `hyperref` (como visto [anteriormente](more-09)),
ele vai automaticamente transformar alguns campos da sua bibliografia em links.
Isso é particularmente útil em URLs e DOIs.

## Diferenças em melhores práticas para arquivos BibTeX entre estilos

Enquanto a sintaxe geral de arquivos BibTeX seja a mesma tanto usando o fluxo
de trabalho do BibTeX quanto do `biblatex`, o conjunto de campos suportados
(usados pelo estilo) e o seu significado exato pode não apenas variar entre
o BibTeX e o `biblatex`, mas também entre diferentes estilos do BibTeX.  Um
grande conjunto 'essencial' de tipos de registros e campos são os mesmos para
quase todos os estilos, mas há diferenças em alguns campos.

Um exemplo comum é a URL.  Alguns estilos antigos do BibTeX (em particular os
'estilos padrão do BibTeX', _e.g._ `plain.bst`, `unsrt.bst`, ...) precedem a
criação da URL e não têm campo dedicado para a URL de uma fonte online.  Muitos
estilos mais novos têm um campo `url` dedicado.  A solução para mostrar a URL em
estilos antigos geralmente é usar o campo `howpublished`, mas com estilos mais
novos é preferível, claro, usar o campo `url`.

Para poder usar todo o potencial do estilo que estiver usando, você terá que
descobrir quais campos ele suporta e como usar cada um.
