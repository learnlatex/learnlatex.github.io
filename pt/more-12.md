---
lang: "pt"
title: "Veja mais sobre: Citações e referências"
toc-anchor-text: "Veja mais sobre: Citações e referências"
---

## Organização alfabética em outros idiomas

O programa BibTeX foi escrito primariamente para trabalhar com referências em
Inglês.  Ele é bem limitado em termos de caracteres com acentos, e ainda mais
com caracteres não-Latinos.  Em contraste, o Biber foi projetado desde o
princípio para trabalhar com diversos alfabetos corretamente.

Isso significa que se você precisa escrever uma bibliografia em um idioma com
alfabeto diferente do Inglês, ou até caracteres especiais, você provavelmente
vai precisar usar o `biblatex` e o Biber, ao invés do `natbib` e BibTeX.

## Hiperlinks

Se você carregar o pacote `hyperref` (como visto [anteriormente](more-09)),
ele vai automaticamente transformar alguns campos da sua bibliografia em links.
Isso é particularmente útil em URLs e DOIs.

## Diferenças em melhores práticas para arquivos BibTeX entre estilos

Enquanto a sintaxe geral de arquivos BibTeX é a mesma, você usando o fluxo de
trabalho do BibTeX ou do `biblatex`, o conjunto de campos suportados (usados
pelo estilo) e o seu significado exata pode não apenas variar entre o BibTeX e
o `biblatex`, mas também entre diferentes estilos do BibTeX.  Um grande conjunto
'central' de tipos de registros e campos são os mesmos para quase todos os
estilos, mas há diferenças em alguns campos.

Um exemplo comum é a URL.  Alguns estilos antigos do BibTeX (notavelmente os
'estilos padrão do BibTeX', _e.g._ `plain.bst`, `unsrt.bst`, ...) precedem a
criação da URL e não tem campo dedicado para a URL de uma fonte online.  Muitos
estilos mais novos têm um campo `url` dedicado.  A solução para mostrar a URL em
estilos antigos geralmente é usar o campo `howpublished`, mas com estilos mais
novos é preferível, claro, usar o campo `url`.

Para poder usar o completo potencial do estilo que estiver usando você terá que
descobrir quais campos ele suporta e como usar cada um.
