---
lang: "pt"
title: "Citações e referências"
---
<script>
preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

## Bancos de referências

Para citações bibliográficas, enquanto você pode incluí-las diretamente no seu
texto, geralmente você vai obter essa informação de um ou mais arquivos
externos.  Tal arquivo é um banco de referências, contendo a informação em um
formato fácil de ser processado.  Usar um ou mais bancos de referências lhe
permite reutilizar informações e evitar formatação manual.

Bancos de referências são normalmente chamados de 'arquivos BibTeX' e tem a
extensão `.bib`.  Eles contém um ou mais registros, um para cada referência, e
dentro de cada registro há uma série de campos.  Vamos ver um exemplo:

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->

Estes são os registros para um artigo e outro para um livro;  esses são de longe
os tipos mais comuns.  Cada registro do banco de referências começa com um `@`,
como mostrado, e todas as informações ficam entre chaves.

Os vários campos que precisamos são dados em um formato de chave-e-valor, além
da 'chave da citação':  o identificador daquela referência.  Para essa chave
você pode usar o que quiser, pois é apenas um rótulo, mas acima escolhemos usar
o nome de um autor mais o ano:  esse é um formato comum.

Exatamente quais campos são necessários depende to tipo de registro, mas a
maioria deles são óbvios.  Você pode perceber que no campo `autor`, cada nome é
separado por `and`.  Isso é _essencial_: o formato da saída precisa saber qual
autor é qual.  Você pode também perceber que no título do artigo alguns itens
estão entre um par extra de chaves;  eles estão lá para prevenir que aquelas
partes sejam mudadas de maiúsculo para minúsculo e vice-versa.

Editar arquivos `.bib` à mão é tedioso, então a maioria das pessoas usa um
editor dedicado.  O [JabRef](https://www.jabref.org) é amplamente utilizado e é
multiplataforma, mas há muitos outros disponíveis.  Se a referência contém um
DOI (Digital Object Identifier) você pode querer usar o
[doi2bib](https://doi2bib.org) para obter o registro BibTeX referente.  Mas
sempre certifique-se que o registro está correto!

Aqui vamos usar o banco de referências de exemplo acima para as demonstrações.
Salvamos esse arquivo como `learnlatex.bib`.

## Transferindo informação do banco de referências

Para obter as informações no seu documento há três passos.  Primeiro, use o
LaTeX para compilar seu documento, que vai criar um arquivo com uma lista de
referências que você cita em seu documento.  Em seguida, execute um programa que
pega as informações do banco de dados de referências, escolhe as que você usa, e
as organiza.  Finalmente, comple seu documento novamente para que o LaTeX possa
usar essas informações para resolver suas citações.  Geralmente será necessário
compilar no mínimo duas vezes para resolver todas as referências.

Para o segundo passo, há dois sistemas amplamente utilizados: BibTeX e Biber.
O Biber é apenas usado com um pacote chamado `biblatex`, enquanto que o BibTeX
é usado ou sem pacotes, ou com o `natbib`.

A execução dessa ferramenta assim como do LaTeX, é feita de formas diferentes
por editores diferentes.  Para os nossos exemplos há alguns scripts que fazem
tudo automaticamente.  Seu editor pode ter um único botão 'faça coisas' ou você
pode precisar escolher executar o BibTeX ou o Biber manualmente entre execuções
do LaTeX.

O formato das citações e referências é independente do seu banco de referências
BibTeX, e é configurado por um 'estilo'.  Veremos que esses estilos funcionam
diferentemente no fluxo de trabalho com o BibTeX e no `biblatex`, mas a ideia
geral permanece:  nós podemos escolher como citações aparecem.

## O fluxo de trabalho do BibTeX com `natbib`

Enquanto é possível inserir citações em um documento LaTeX sem carregar qualquer
pacote, as funcionalidades são limitadas.  Ao invés disso, vamos usar o pacote
`natbib`, que nos permite criar diferentes tipos de citações e tem vários
estilos disponíveis.

A estrutura básica do nosso documento é mostrada no exemplo:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{natbib}

\begin{document}
A amostra de matemática é de \citet{Graham1995}, enquanto
há algo sobre química em \citet{Thomas2008}.

Citações entre parênteses: \citep{Graham1995}
e então \citep[p.~56]{Thomas2008}.

\citep[See][pp.~45--48]{Graham1995}

Juntas \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

Você pode ver que podemos citar diferentes registros do banco de citações
sabendo a chave.  O pacote `natbib` oferece estilos de citação entre parênteses
e no texto, `\citet` e `\citep`, respectivamente.  O estilo das referências é
selecionado na linha `\bibliographystyle`;  aqui usamos `plainnat`.
A bibliografia é inserida pela linha `\bibliography`, que também indica o banco
de referências a ser usado;  mais de um pode ser indicado em uma lista deparada
por vírgula.

Referências a páginas podem ser adicionadas à citação com um argumento opcional.
Se dois argumentos opcionais são dados, o primeiro vai à frente da citação, como
uma nota, e o segundo vai depois, para referência a páginas.

A configuração acima usa o estilo autor-ano, mas podemos usar citações numéricas
também.  Isso é feito usando a opção `numbers` na linha que carrega o `natbib`.

## O fluxo de trabalho com `biblatex`

O pacote `biblatex` funciona um pouco diferente do `natbib`, pois selecionamos
o banco de referências no preâmbulo, mas imprimimos as referências separadamente
no corpo do documento.  Há alguns comandos novos para isso:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % file of reference info

\begin{document}
A amostra de matemática é de \autocite{Graham1995}.

Algumas citações mais complexas: \parencite{Graham1995} ou
\textcite{Thomas2008} ou talvez \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[See][45-48]{Graham1995}

Juntas \autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

Note que `\addbibresource` _exige_ o nome completo do banco de referências,
enquanto nós omitimos a extensão `.bib` do comando `\bibliography` com `natbib`.
Veja também que o `biblatex` usa nomes mais longos para os comandos de citação,
mas sua função é fácil de adivinhar.

Novamente, notas podem ser inseridas antes e depois da citação com os argumentos
opcionais.  Note que para os números de páginas, você não precisa escrever `p.~`
ou `pp.~`, o `biblatex` pode adicionar o prefixo apropriado.

No `biblatex`, o estilo das referências é escolhido quando carregamos o pacote.
Aqui, usamos `authoryear`, mas também há um estilo `numeric`, além de muitos
outros.

## Escolhendo entre o trabalho com o BibTeX ou com o `biblatex`

Embora bibliografias tanto o BibTeX quanto com o `biblatex` leem o banco de
referências no formato BibTeX e produzem resultado estruturalmente similar no
documento, eles usam formas completamente diferentes para produzir esse
resultado.  Isso significa que há algumas diferenças entre as duas abordagens
que podem lhe ajudar a escolher qual funciona melhor para você.

No fluxo de trabalho com o BibTeX o estilo da bibliografia é decidido por um
arquivo `.bst` que você escolhe com o comando `\bibliographystyle`.
O `biblatex` não usa arquivos `.bst` e usa um sistema diferentes.  Se você está
usando um template que vem com um arquivo `.bst` ou receber um arquivo desse
para usar no seu projeto, então você deverá usar o BibTeX e não pode usar o
`biblatex`.

A abordagem com o `biblatex` implica que você pode mudar a aparência da lista
de referências e das citações diretamente no preâmbulo do documento usando
comandos no LaTeX.  Modificações em arquivos `.bst`, por outro lado, exigem
trabalhar com esses arquivos externos e conhecimento da linguagem de programação
do BibTeX.  De forma geral, o `biblatex` é mais fácil de personalizar do que os
estilos no fluxo de trabalho do BibTeX.

No `biblatex` geralmente é mais fácil implementar estilos de citação mais
elaborados com uma gama maior de comandos de citação.  O `biblatex` também
oferece mais funcionalidades dependentes do contexto.  De forma geral isso é
menos interessante para estilos comuns nas áreas de exatas, mas se torna mais
relevante para alguns estilos complexos nas áreas de humanas.

O BibTeX só pode ordenar caracteres ASCII corretamente e depende de soluções
alternativas para fornecer ordenação baseada em ASCII para caracteres não-ASCII.
Com o Biber, o `biblatex` tem capacidade Unicode completa para ordenar
caracteres.  Portanto, o `biblatex` geralmente é uma escolha melhor se você quer
organizar sua bibliografia em ordem diferente do Inglês/ASCII.

Tendo existido por muito mais tempo que o `biblatex`, o fluxo de trabalho com o
BibTeX é mais bem estabelecido, o que significa que muitas editoras e revistas
esperam bibliografias geradas pelo BibTeX.  Essas revistas não podem, ou em
geral não aceitam submissões usando o `biblatex`.

Em conclusão: verifique as diretrizes ao autor/submissão se você está enviando
seu trabalho para uma revista ou editora.  Se você for dado um arquivo `.bst`,
você deve usar o fluxo de trabalho com o BibTeX.  Se você quer uma bibliografia
e estilo relativamente simples e só precisa ordenação compatível com
Inglês/ASCII, o fluxo de trabalho com o BibTeX deve ser suficiente.  Se você
precisa de um estilo mais complexo, usando alfabeto não-Inglês, ou quer acesso
mais fácil à personalização do estilo de citação e bibliografia, você vai
preferir usar o `biblatex`.

## Exercícios

Tente ambos os exemplos com `natbib` e `biblatex`.  Com o `natbib` você vai
precisar executar o LaTeX, o BibTeX, LaTeX, e LaTeX novamente;  com o
`biblatex` você executa LaTeX, o Biber, e LaTeX.  Você vai precisar descobrir
como fazer isso no seu editor de escolha, ou tente no Overleaf ou neste site.

Veja o que acontece quando você cria novos registros no banco de referências e
adiciona novas citações.  Adicione citações que não existem no banco de
referências e veja como elas aparecem.  Experimente com a opção `numeric` no
`natbib` e com a opção equivalente `style=numeric` no `biblatex`.
