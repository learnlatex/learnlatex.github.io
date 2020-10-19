---
lang: "pt"
title: "Veja mais sobre: Tabelas"
---

## Outros símbolos de preâmbulo para tabelas

A [lição principal](lesson-08) não abordou todos os símbolos de preâmbulo
disponíveis, portanto alguns serão explicados aqui, com exempls.  Você pode
querer revisitar as tabelas no início da lição para ter uma visão geral dos
símbolos disponíveis.  As descrições dadas lá devem ser suficientes para
entender o que os tipos diferentes de colunas `m`, `b`, `w`, e `W` fazem, depois
que você endender `l`, `c`, `r`, e `p`.  Se não, você pode experimentar um pouco
com eles.  O que ainda falta são os outros símbolos listados na
[lição principal](lesson-08):  `>`, `<`, `@`, `!`, e `|`.

### Aplicando estilos a uma coluna

Como `>` e `<` podem ser usados para colocar coisas antes e depois dos conteúdos
das células de uma coluna, você pode usar esses símbolos para adicionar comandos
que afetam a aparência de uma coluna.  Por exemplo, se você quiser deixar a
primeira coluna em itálico e colocar um `:` depois dela, você pode fazer o
seguinte:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
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

`\itshape` deixa todo o texto que segue em itálico, mas seu efeito é 'contido' à
céula da tabela.  Vamos abordar formatação manual de texto
[algumas lições adiante](lesson-11).

Você pode querer que a primeira célula não seja afetada porque ela é o cabeçalho
da tabela.  Aqui `\multicolumn` pode ser usado.  Lembre que esse comando pode
ser usado para mudar o alinhamento de uma única célula, como mostrado abaixo:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animal} & Comida  & Tamanho   \\
  \midrule
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Manipulando o espaço entre colunas

Geralmente o LaTeX preenche o espaço entre as colunas com um espaço em cada lado
para dar uma aparência balanceada e separá-las.  Esse espaço é definido com o
parâmetro `\tabcolsep`.  Devido ao fato de cada coluna ser preenchida em ambos
os lados, você obtém um `\tabcolsep` em cada lateral da tabela, mais
`2\tabcolsep` entre cada duas colunas &ndash; um de cada coluna.  Você pode
ajustar esse espaço usando `\setlength`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

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

Você pode trocar esse espaço por algo à sua escolha usando `@`.  Esse símbolo
vai remover o espaçamento entre duas colunas, e inserir o argumento entre elas:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Animal & Comida & Tamanho \\
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(Vamos abordar `\hspace` [em breve](lesson-11);  você pode adivinhar que ele
adiciona um espaço horizontal.)

O símbolo `!` faz algo bem similar a `@`.  A diferença é que `!` _adiciona_ o
argumento no centro do espaço entre as colunas:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animal & Comida & Tamanho \\
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Linhas verticais

Às vezes você é obrigado a usar linhas verticais em tabelas.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animal & Comida & Tamanho \\[2pt]
  cão    & carne  & médio   \\
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Você deve ter percebido que o comportamento de `|` é bem similar ao `!`;  ele
adiciona a linha vertical entre duas colunas deixando o espaçamento intacto.
No entanto há uma grande desvantagem nisso;  linhas verticais não funcionam com
as linhas horizontais do `booktabs`.  Você pode usar as linhas horizontais
padrão do LaTeX;  elas são `\hline` (correspondente a `\toprule`, `\midrule`, e
`\bottomrule`) e `\cline` (corresponde a `\cmidrule`).  Como mostrado acima,
linhas verticais vão preencher qualquer espaço especificado no argumento
opcional de `\\`.

## Personalizando as linhas do `booktabs`

Todas as linhas do pacote `booktabs` e `\addlinespace` suportam um argumento
opcional entre colchetes com o qual você pode especificar a espessura da linha.
Além disso, o comprimento da redução da linha do `\cmidrule` pode ser modificada
especificando um comprimento entre chaves depois de `r` ou `l`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal & Comida & Tamanho \\ \midrule[1pt]
  cão    & carne  & médio   \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  cavalo & capim  & grande  \\
  sapo   & moscas & pequeno \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Alinhamento de números em colunas

O alinhamento de números em tabelas pode ser feito usando o tipo de coluna `S`,
do pacote `siunitx`.

Um exemplo simples, com duas colunas numéricas alinhadas é:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Valores} &  {Mais valores} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```

Note que células não-numéricas devem ser "protegidas" colocando o seu conteúdo
entre chaves.

O pacote `siunitx` fornece muitas possibilidades de formatação de números de
formas diferentes;  consulte a
[documentação do pacote](https://texdoc.net/pkg/siunitx).

## Especificando a largura total da tabela

A largura de um ambiente `tabular` é automaticamente determinado do conteúdo da
tabela.  Há dois mecanismos comumente usados para especificar a largura total da
tabela.

Note que é quase sempre preferível formatar a tabela para caber em uma largura
conforme explicado abaixo (talvez usando uma fonte menor, como `\small`, se
necessário) do que redimensionar a tabela usando `\resizebox` e comandos
similares que vão produzir tamanhos de fontes e espessuras de linha
inconsistentes.

### `tabular*`

O ambiente `tabular*` leva um argumento adicional de _largura_, que especifica a
largura total da tabela.  Espaço esticável deve ser adicionado à tabela usando
o comando `\extracolsep`.  Esse espaço é adicionado entre todas as colunas a
partir daquele ponto no preâmbulo.  `\extracolsep` é quase sempre usado com
`\fill`, um espaço especial que estica o quanto for necessário.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

O ambiente `tabularx`, do pacote de mesmo nome, tem uma sintaxe similar a
`tabular*` mas ao invés de ajustar o espaço entre as colunas, ele ajusta a
largura das colunas do tipo `X`.  Isso é equivalente à uma coluna `p{...}` com
um valor automaticamente determinado para a largura.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

Diferente de outros tipos de tabelas discutidos nessas lições, `tabularx`
precisa escrever o conteúdo da tabela várias vezes, experimentando com o valor
da largura para determinar o valor final.  Isso significa que há algumas
restrições à utilização do ambiente; consulte a
[documentação do pacote](https://texdoc.net/pkg/tabularx).

## Tabelas multi-páginas

Um ambiente `tabular` cria uma caixa inquebrável, então ela deve ser pequena o
suficiente para caber em uma página, e é geralmente colocada em um ambiente
_float_ `table`.

Vários pacotes têm variações com sintaxe similar que permitem quebra de página
na tabela.  Aqui mostramos o pacote `longtable`:

```latex
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{Uma tabela longa}\\
Left Side & Right Side\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Texto & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
Texto mais largo & b\\  
\end{longtable}

\end{document}
```

`longtable` é notável pois preserva a largura das colunas entre todas as páginas
da tabela;  no entanto para conseguir isso é necessário várias execuções do
LaTeX para que as células mais largas encontradas mais ao final da tabela possam
afetar a largura das colunas em páginas anteriores.

## Notas em tabelas

É bem comum precisar marcações como de notas de rodapé em tabelas, se referindo
às notas no final da tabela.  O pacote `threeparttable` simplifica a criação
dessas tabelas, fazendo com que as notas sejam colocadas em um bloco da mesma
largura da tabela.  Consulte a
[documentação do pacote](https://texdoc.net/pkg/threeparttable)
para detalhes completos sobre o processo, mas vamos mostrar um exemplo simples
aqui:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{Um exemplo}
   \begin{tabular}{ll}
    Texto & 42\tnote{1}\\
    Mais texto & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] A primeira nota.
   \item [2] A segunda nota.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Texto em colunas estreitas

As configurações padrão de quebra de linhas assumem linhas relativamente longas
para dar alguma flexibilidade ao escolher quebras de linhas.  O exemplo a seguir
mostra algumas abordagens possíveis.  A primeira tabela mostra o espaçamento
entre palavras alongado e o TeX avisa sobre linhas sub-preenchidas
(_Underfull_).  Usando `\raggedright` geralmente evita esse problema mas às
vezes deixa linhas muito irregulares.  O comando `\RaggedRight`, do pacote
`ragged2e` oferece um balanço;  ele também permite alguma irregularidade nos
comprimentos das linhas, mas também vai hifenizar se necessário, como mostrado
na terceira tabela.

Note o uso de `\arraybackslash` aqui, que redefine `\\` para que funcione como
fim da linha da tabela.

Uma técnica alternativa, como mostrado na quarta tabela, é usar uma fonte menor
para que as colunas não sejam tão estreitas em relação ao tamanho da fonte.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
Um   & Um texto bem longo escrito em um parágrafo estreito, com mais texto de exemplo.\\
Dois & Um texto longo diferente em um parágrafo estreito, com mais palávras difíceis de hifenizar.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
Um   & Um texto bem longo escrito em um parágrafo estreito, com mais texto de exemplo.\\
Dois & Um texto longo diferente em um parágrafo estreito, com mais palávras difíceis de hifenizar.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
Um   & Um texto bem longo escrito em um parágrafo estreito, com mais texto de exemplo.\\
Dois & Um texto longo diferente em um parágrafo estreito, com mais palávras difíceis de hifenizar.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
Um   & Um texto bem longo escrito em um parágrafo estreito, com mais texto de exemplo.\\
Dois & Um texto longo diferente em um parágrafo estreito, com mais palávras difíceis de hifenizar.
\end{tabular}

\end{table}

\end{document}
```

## Definindo novos tipos de coluna

Como demonstrado na [lição principal](lesson-08), o pacote `array` permite
construções como `>{\bfseries}c` para denotar uma coluna centralizada com texto
em negrito.  Geralmente é conveniente definir um novo tipo de coluna para
encapsular tal uso. Por exemplo:
```latex
\newcolumntype{B}{>{\bfseries}c}
```
permitiria usar `B` no preâmbulo da tabela para especificar uma coluna
centralizada com texto em negrito.

## Truques verticais

Frequentemente, ao invés de fazer uma célula cobrir multiplas linhas, é melhor
fazer uma única linha em que algumas células são divididas verticalmente usando
ambientes `tabular` dentro dessa célula:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Teste & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Conteúdo & vai & aqui \\
  Conteúdo & vai & aqui \\
  Conteúdo & vai & aqui \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Note que você pode controlar o alinhamento vertical usando o argumento opcional
do ambiente `tabular`;  ele suporta usar `t`, `c`, ou `b` para alinhar ao topo,
ao centro, ou ao fundo, respectivamente, e é usado assim:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Teste & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Conteúdo & vai & aqui \\
  Conteúdo & vai & aqui \\
  Conteúdo & vai & aqui \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Espaçamento entre linhas em tabelas

Na [lição principal](lesson-08) demonstramos `\addlinespace` do pacote
`booktabs`, que é útil para adicionar espaço extra entre linhas específicas.

Há dois parâmetros gerais que controlam o espaçamento entre linhas,
`\arraystretch` e `\extrarowheight` (este último do pacote `array`).
A definição:
```latex
\renewcommand\arraystretch{1.5}
```
vai aumentar o espaçamento entre linhas em 50%.

Frequentemente, especialmente quando usando `\hline`, é melhor apenas aumentar
a altura das linhas, sem aumentar sua profundidade abaixo da linha base.
O exemplo a seguir demonstra o parâmetro `\extrarowheight`:

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
Quadrado& $x^2$\\
\hline
Cubo& $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Quadrado& $x^2$\\
\hline
Cubo& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
