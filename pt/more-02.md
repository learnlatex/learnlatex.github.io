---
title: "Veja mais sobre: Trabalhando com LaTeX"
---

Para a maioria dos nossos exemplos, não usamos um programa chamado `latex`, ao
invés disso, um chamado `pdflatex`.  Este é um de uma família de programas
relacionados, todos 'descendentes' do `latex`.  Nós escolhemos o `pdflatex`
porque ele é o sistema mais amplamente utilizado, e produz arquivos PDF
diretamente.

## Formatos e interpretadores

Como mencionado [anteriormente](more-01), o LaTeX é construído sobre um
programa chamado TeX.  Nos referimos ao LaTeX como um 'formato':  uma coleção
de macros (instruções e comandos) que o TeX entende.  Quando você executa o
`pdflatex`, na verdade você esta executando um programa chamado 'pdfTeX' com o
'formato LaTeX' pré-carregado.  Normalmente chamamos o pdfTeX de um
_interpretador TeX_ (_TeX engine_, em inglês): um programa que entende
instruções TeX.

Há três interpretadores amplamente utilizados atualmente:

- pdfTeX
- XeTeX
- LuaTeX

Nós vamos abordar o [XeTeX e LuaTeX mais tarde](lesson-14):  o mais
importante que você precisa saber agora é que eles são capazes de carregar
fontes do computador, enquanto que o pdfTeX não pode.

Se você está no Japão, ou escrevendo textos em Japonês, você vai se deparar com
o pTeX e upTeX.  Esses são interpretadores especializados para tipografia
vertical.  LuaTeX também pode fazer isso, mas no momento o upTeX, em particular,
ainda é o sistema mais popular para Japonês.
