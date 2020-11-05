---
lang: "pt"
title: "Tabelas"
toc-anchor-text: "Tabelas no LaTeX"
toc-description: "Princípios básicos de tabelas."
---

## Tabelas básicas

Tabelas no LaTeX são feitas usando o ambiente `tabular`.  Essa lição vai assumir
que você carregou o pacote `array`, que adiciona mais funcionalidades às tabelas
do LaTeX, e que não é carregado por padrão no LaTeX por motivos históricos.
Então adicione o seguinte no seu preâmbulo e você estará pronto para a lição:

```latex
\usepackage{array}
```
{: .noedit :}

Para criar um `tabular` vamos dizer ao LaTeX quantas colunas serão necessárias
e como elas serão alinhadas.  Isso é feito com um argumento obrigatório
&ndash; geralmente chamado de preâmbulo da tabela &ndash; no ambiente `tabular`,
em que você especifica as colunas usando nomes de uma letra, chamados símbolos
de preâmbulo (_preamble-tokens_).  Os tipos disponíveis são:

<!-- don't line wrap this table, markdown seems to not support this -->

| tipo       | descrição |
| ---        |:-- |
| `l`        | coluna alinhada à esquerda |
| `c`        | coluna centralizada |
| `r`        | coluna alinhada à direita |
| `p{largura}` | uma coluna com `largura` fixa;  o texto será justificado e quebrado em linhas automaticamente |
| `m{largura}` | igual `p`, mas centralizado verticalmente em relação ao restante da linha da tabela |
| `b{largura}` | igual `p`, alinhado ao fundo |
| `w{alin}{largura}` | escreve os conteúdos com uma `largura` fixa, sobrescrevendo se o conteúdo for mais largo. Você pode escolher o alinhamento horizontal `alin` usando `l`, `c`, ou `r` |
| `W{alin}{largura}` | igual `w`, mas haverá um aviso de "overfull box" se o conteúdo for mais largo que `largura` |

Além desses, outros símbolos de preâmblo estão disponíveis, que não criam uma
coluna, mas também são úteis:

<!-- don't line wrap this table, markdown seems to not support this -->

| tipo | descrição |
| ---  | :-- |
| `*{num}{símbolos}` | repete os `símbolos`, `num` vezes no preâmbulo.  Com isso você pode criar várias colunas com configuração idêntica |
| `>{decl}` | este vai colocar `decl` antes dos conteúdos de cada célula da coluna que segue (isso é útil, por exemplo, para usar uma fonte diferente para esta coluna) |
| `<{decl}` | este vai colocar `decl` depois dos conteúdos de cada célula da coluna que precede |
| <span>`|`</span>  | adiciona uma linha vertical |
| `@{decl}` | substitiu o espaço entre colunas por `decl` |
| `!{decl}` | adiciona `decl` no centro do espaço existente entre colunas |

Essas duas tabelas listam todos os tipos de colunas disponíveis no LaTeX e no
pacote `array`.  Alguns tipos adicionais de colunas, de pacotes diferentes, são
apresentados na [página de detalhes adicionais](more-08) dessa lição.

As colunas `l`, `c`, e `r` terão a largura natural da célula mais larga daquela
coluna.  Cada coluna deve ser declarada, então se você quer três colunas
centralizadas você usaria `ccc` no preâmbulo da tabela.  Espaços são ignorados,
então `c c c` é o mesmo.

No corpo de uma tabela, colunas são separadas usando um "e comercial" `&` e uma
nova linha é iniciada usando `\\`.

Nós temos tudo o que precisamos para nossa primeira tabela.  No exemplo a seguir
os `&` e `\\` estão alinhados.  Isso não é necessário no LaTeX, mas auxilia a
entender o código da tabela.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Animal & Comida & Tamanho \\
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Se a coluna de uma tabela contém muito texto você terá problemas em acertar a
tabela apenas com `l`, `c`, e `r`.  Veja o que acontece no exemplo a seguir:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Descrição \\
  Cão    & O cão é um mamífero carnívoro da família dos canídeos, subespécie do
           lobo, e talvez o mais antigo animal domesticado pelo ser humano. \\
  Gato   & O gato é um mamífero carnívoro da família dos felídeos, muito popular
           como animal de estimação. Ocupando o topo da cadeia alimentar, é
           predador natural de diversos animais, como roedores, pássaros,
           lagartixas e alguns insetos. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

O problema é que o tipo de coluna `l` escreve os conteúdos em uma única linha
com sua largura natural, mesmo se isso ultrapassar a margem.  Para vencer isso
você pode usar a coluna tipo `p`.  Ela escreve os conteúdos como parágrafos com
a largura que você especificar como argumento e alinha o bloco de texto com o
topo das outras linhas &ndash; que é o que você vai querer na maioria das vezes.
Compare a tabela acima com a seguinte:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Descrição \\
  Cão    & O cão é um mamífero carnívoro da família dos canídeos, subespécie do
           lobo, e talvez o mais antigo animal domesticado pelo ser humano. \\
  Gato   & O gato é um mamífero carnívoro da família dos felídeos, muito popular
           como animal de estimação. Ocupando o topo da cadeia alimentar, é
           predador natural de diversos animais, como roedores, pássaros,
           lagartixas e alguns insetos. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Se sua tabela tem muitas colunas iguais, é trabalhoso digitar todas as
definições de coluna no preâmbulo.  Você pode facilitar as coisas usando
`*{num}{símbolos}`, que vai repetir os `símbolos` por `num` vezes.  Assim,
`*{6}{c}` é equivalente a `cccccc`.  Para mostrar como isso funciona, aqui está
a primeira tabela dessa lição, mas com a nova sintaxe:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Comida & Tamanho \\
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Adicionando linhas

Um conselho antes de apresentar linhas em tabelas;  linhas devem ser usadas com
moderação em tabelas, e normalmente linhas verticais devem ser completamente
evitadas.  De fato, tabelas 'profissionais' não devem usar nenhuma das linhas
padrão fornecidas pelo LaTeX;  ao invés disso você deve se familiarizar com os
recursos do pacote `booktabs`, que é porque ele é mostrado aqui.  Para constar,
as linhas padrão são mostradas na página de [mais informações](more-08).

O pacote `booktabs` fornece quatro tipos diferentes de linhas.  Cada um desses
comandos deve ser a primeira coisa em uma linha ou deve seguir outra linha.
Três desses comandos são: `\toprule`, `\midrule`, e `\bottomrule`, e devem ser
usados no topo, meio, e final da tabela, respectivamente:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Comida & Tamanho \\
  \midrule
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

O quarto comando de linha fornecido pelo `booktabs` é o `\cmidrule`.  Ele pode
ser usado para traçar uma linha que não cobre toda a largura da tabela, mas
apenas um conjunto específico de colunas.  Um conjunto de colunas é dado como
um intervalo de números: `{`_número_`-`_número_`}`.  Mesmo se você quiser a
linha apenas em uma coluna, ambos os números devem ser dados (e ser iguais,
nesse caso específico):

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Comida & Tamanho \\
  \midrule
  cão    & carne  & médio   \\
  \cmidrule{1-2}
  cavalo & capim  & grande  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  sapo   & moscas & pequeno \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Há outra funcionalidade útil de `\cmidrule`.  Você pode encurtá-la em qualquer
um dos lados com um argumento opcional entre parênteses:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Comida & Tamanho \\
  \midrule
  cão    & carne  & médio   \\
  \cmidrule{1-2}
  cavalo & capim  & grande  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  sapo   & moscas & pequeno \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Você deve ter adivinhado que `r` e `l` significam que a linha é encurtada no
lado direito (**r**ight) e esquerdo (**l**eft), respectivamente.

Às vezes uma linha é separação demais entre duas linhas da tabela, mas para que
ela não perca o significado, você pode querer separar elas de alguma forma.
Nesse caso você pode usar `\addlinespace` para inserir um pequeno espaço
vertical:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Descrição \\
  \midrule
  Cão    & O cão é um mamífero carnívoro da família dos canídeos, subespécie do
           lobo, e talvez o mais antigo animal domesticado pelo ser humano. \\
  \addlinespace
  Gato   & O gato é um mamífero carnívoro da família dos felídeos, muito popular
           como animal de estimação. Ocupando o topo da cadeia alimentar, é
           predador natural de diversos animais, como roedores, pássaros,
           lagartixas e alguns insetos. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Unindo células

No LaTeX você pode unir célular horizontalmente usando o comando `\multicolumn`.
Ele deve ser a primeira coisa em uma célula.  O `\multicolumn` leva três
argumentos:

1. O número de células que devem ser unidas
2. O alinhamento da célula resultante
3. O conteúdo da célula resultante

O alinhamento pode conter qualquer coisa válida no preâmbulo de um `tabular`,
mas apenas _um único tipo de coluna_:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Comida & Tamanho \\
  \midrule
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
  fluf   & \multicolumn{2}{c}{desconhecido} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Você também pode usar `\multicolumn` em uma única célula para previnir que o
tipo de coluna que você definiu no preâmbulo seja usado na célula atual.
O exemplo a seguir usa esse método para centralizar a linha do cabeçalho da
tabela:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Comida} & \multicolumn{1}{c}{Tamanho} \\
  \midrule
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
  fluf   & \multicolumn{2}{c}{desconhecido} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Unir célular na vertical não é suportado no LaTeX.  Geralmente é suficiente
deixar células vazias para dar ao leitor a ideia correta do que conteúdo sem
explicitamente juntar as linhas:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Grupo     & Animal & Tamanho \\
  \midrule
  herbívoro & cavalo & grande  \\
            & cervo  & médio   \\
            & coelho & pequeno \\
  \addlinespace
  carnívoro & cão    & médio   \\
            & gato   & pequeno \\
            & leão   & grande  \\
  \addlinespace
  onívoro   & corvo  & pequeno \\
            & urso   & grande  \\
            & porco  & médio   \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Evercícios

Use o exemplo mais simples de tabela para começar a experimentar com elas.
Tente alinhamentos diferentes usando tipos de colunas `l`, `c`, e `r`.  O que
acontece se você escreve menos colunas do que declaradas em uma linha.  E se
tiver mais colunas do que foram declaradas?  Experimente com o comando
`\multicolumn` para unir colunas.
