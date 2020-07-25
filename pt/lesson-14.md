---
title: "Trocando fontes e usando interpretadores Unicode"
---

Quando o TeX e o LaTeX começaram a ser amplamente utilizados eles funcionavam
apenas com idiomas Europeus, embora houvesse alguma capacidade para usar outros
alfabetos como o Grego e o Russo.

Originalmente, acentos e letras acentuadas eram escritas usando comandos como
`\c{c}` para 'ç' e `\'e` para 'é'.  Enquanto ainda há pessoas que usam esses
métodos de entrada porque eles podem ser mais fáceis de digitar, outros preferem
usar as teclas nos seus teclados para digitar esses caracteres diretamente.

Antes do Unicode, o LaTeX fornecia suporte para vários tipos de _codificação_
dos arquivos fonte, que permitiam que o texto fosse escrito em vários idiomas
nativamente &ndash; por exemplo, usando a codificação `latin1`, usuários
Franceses poderiam escrever '`déjà vu`' e o LaTeX iria traduzir, internamente,
as letras acentuadas nos comandos que produziriam o resultado correto.

Essa abordagem ainda é usada no LaTeX atualmente usando o `pdflatex`.  Por
padrão todos os arquivos são assumidos ser Unicode (codificação UTF-8) a menos
que seja especificado o contrário.  Embora o `pdflatex` seja limidado a fontes
de 8 bits, a maioria dos idiomas europeus é suportado.

Escolha de fontes com o `pdflatex` usa o sistema robusto de seleção de fontes do
LaTeX, e atualmente há muitas fontes próprias para isso em uma distribuição
LaTeX padrão.  Por exemplo, as fontes _TeX Gyre_ são uma coleção de fontes de
alta qualidade baseadas em fontes populares, como Times, Helvetica, Palatino, e
outras.  Para carregar essas fontes, basta carregar o pacote apropriado.  Para
uma fonte similar à Times, o nome é _TeX Gyre Termes_, e o pacote é:

```latex
\usepackage{tgtermes}
```
{: .noedit :}

No `pdflatex`, a maioria das fontes é carregada pelos seus respectivos pacotes.
Você pode procurar no [LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/)
ou na página da [CTAN sobre o tópico 'fontes'](https://www.ctan.org/topic/font)
para ver algumas opções.  Você também pode procurar na Internet pela fonte que
você quer, e buscar por um pacote compatível com o `pdflatex`.  Se quiser usar
uma fonte comercial, você pode buscar por um clone apropriado, que para a
maioria das aplicações é similar o suficiente à original.

## A era Unicode

Como o `pdflatex` é limitado a arquivos 8 bits e fontes de 8 bits, ele não pode,
nativamente, usar fontes modernas OpenType, e trocar facilmente entre idiomas
que usam alfabetos (ou sistema de escrita, para usar o termo técnico)
diferentes.  Há dois substitutos para o pdfTeX que usam entrada Unicode e fontes
modernas: XeTeX e LuaTeX.  Para o LaTeX, estes são tipicamente chamados pelo
seu editor usando os programas `xelatex` e `lualatex`, respectivamente.

Nesses interpretadores, a seleção de fontes é feita usando o pacote `fontspec`,
e para documentos simples basta usar, por exemplo:

```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

para selecionar a fonte TeX Gyre Termes, como no exemplo com `pdflatex` acima.
Notavelmente, esse método funciona para _qualquer_ fonte OpenType.  Algumas
fontes disponíveis para o `pdflatex` também estão disponíveis para `xelatex` e
`lualatex` pelos respectivos pacotes, mas também é possível carregar qualquer
fonte que você tiver instalada no seu computador usando o `fontspec` como
mostrado acima. O [LaTeX Font Catalogue](https://www.tug.org/FontCatalogue/)
também mostra fontes com formato OpenType disponíveis, então você pode usar o
catálogo para buscar fontes, assim como a
[página da CTAN](https://www.ctan.org/topic/font) mencionada acima.

Tendo escolhido uma fonte, o texto agora pode ser escrito diretamente usando
caracteres Unicode no seu documento.  Aqui está um exemplo que usa algumas
letras do alfabeto Latino e Grego, assim como alguns ideogramas chineses:

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

Quando trocar idiomas, também é importante trocar coisas como padrões de
hifenização entre outras especificidades que os pacotes `babel` e `polyglossia`
conseguem fazer de forma robusta.
