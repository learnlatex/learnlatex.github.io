---
layout: "lesson"
lang: "it"
title: "Di più su: Tabelle"
description: "Questa lezione mostra altri modi per personalizzare una tabella impostando 
lo stile di una colonna, modificando la spaziatura e i filetti, e descrive altri pacchetti 
che forniscono diverse funzionalità per comporre le tabelle."
toc-anchor-text: "Di più su: Tabelle"
---


## Gli altri contenuti del preambolo

Dato che la lezione principale non ha illustrato tutte le 
opzioni disponibili per le intestazioni delle tabelle, 
ne spieghiamo alcune altre qui, con degli esempi.
Ti consigliamo di ripassare l'inizio della lezione per 
avere una panoramica delle diverse possibilità.
Dopo aver compreso per bene il funzionamento di `l`, `c`, `r`, e `p`,
le brevi descrizioni che ti daremo in questa sede dovrebbero 
bastarti per capire che cosa fanno i diversi tipi 
di colonna `m`, `b`, `w`, e `W`.
Se ancora non basta, ti consigliamo di fare qualche 
esperimento modificando opportunamente i codici d'esempio.
Infine, rimarranno da vedere gli altri _token di preambolo_, 
utili e comunemente usati, come `>`, `<`, `@`, `!`, e `|`. 

### Impostare lo stile di una colonna

I caratteri `>` e `<` si possono adoperare per inserire 
elementi prima e dopo il contenuto della cella di una colonna. 
Dunque, grazie a essi potrai aggiungere anche _comandi_ 
che modificano l'aspetto di una colonna. 
Per esempio, volendo la prima colonna in corsivo e con
un segno di due punti dopo ogni voce, puoi fare così:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:}*{2}{l}}
  \toprule
  Animale  & Cibo   & Taglia  \\
  \midrule
  cane     & carne  & media   \\
  cavallo  & fieno  & grande  \\
  rana     & mosche & piccola \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Di solito `\itshape` mette in corsivo tutto il testo successivo, 
ma in una tabella il suo effetto è ‘arginato’ dai confini della 
cella (che è un gruppo). 
Esamineremo la formattazione manuale del testo 
[tra qualche lezione](lesson-11).

Spesso la prima riga di una tabella fa da intestazione, e 
va formattata in modo diverso dal resto.
Per farlo, c'è il comando `\multicolumn`, che può essere 
adoperato anche per modificare l'allineamento di una singola
cella, come mostra l'esempio seguente:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:}*{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animale} & Cibo  & Taglia \\
  \midrule
  cane     & carne  & media   \\
  cavallo  & fieno  & grande  \\
  rana     & mosche & piccola \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Modificare lo spazio tra le colonne

Per impostazione predefinita, LaTeX mette uno spazio a 
entrambi i lati di ciascuna colonna per equilibrarne 
l'aspetto e separarle. 
Questo spazio è definito con la lunghezza `\tabcolsep`. 
Di conseguenza, ci sarà un solo `\tabcolsep` a entrambe 
le estremità della tabella e `2\tabcolsep` tra due 
colonne consecutive (uno per ogni colonna). 
Puoi modificare in ogni momento questo spazio impostandolo 
a una lunghezza a piacere con `\setlength`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  Animale  & Cibo   & Taglia  \\
  cane     & carne  & media   \\
  cavallo  & fieno  & grande  \\
  rana     & mosche & piccola \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Puoi cambiare questo spazio in qualunque cosa tu voglia 
dichiarandolo nell'argomento di `@`: il riempimento predefinito 
tra due colonne o alle estremità della tabella _verrà levato_ 
e al suo posto LaTeX inserirà quanto specificato (uno spazio
di 2 centimetri, nell'esempio successivo):

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{:}l@{\hspace{2cm}}l}
  Animale  & Cibo   & Taglia  \\
  cane     & carne  & media   \\
  cavallo  & fieno  & grande  \\
  rana     & mosche & piccola \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(Di nuovo, vedremo il comando `\hspace` 
[tra poco](lesson-11); qui puoi indovinare da te che
serve ad aggiungere dello spazio orizzontale.)

Nel preambolo di una tabella, `!` fa qualcosa di molto simile
a quanto appena visto.
La differenza è che _aggiunge_ il proprio argomento al centro
dello spazio tra due colonne.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animale  & Cibo   & Taglia  \\
  cane     & carne  & media   \\
  cavallo  & fieno  & grande  \\
  rana     & mosche & piccola \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Filetti verticali

Le regole della buona tipografia scoraggiano l'uso dei filetti
verticali nelle tabelle.
Tuttavia, a volte non se ne può fare a meno.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animale  & Cibo   & Taglia  \\[2pt]
  cane     & carne  & media   \\
  cavallo  & fieno  & grande  \\
  rana     & mosche & piccola \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Osserva che il comportamento di `|` è abbastanza simile a 
quello di !{...}: infatti, aggiunge un filetto verticale 
tra due colonne lasciando inalterato lo spazio tra di esse. 
Tuttavia, c'è un enorme inconveniente: i filetti verticali 
non funzionano con le regole orizzontali di `booktabs`. 
In questo caso, al loro posto puoi adoperare i filetti
orizzontali definiti da LaTeX: quelli sono `\hline` 
(corrispondente a `\toprule`, `\midrule` e `\bottomrule`) 
e `\cline` (che si comporta come `\cmidrule`). 
Come mostrato sopra, i filetti verticali coprono anche
l'eventuale spazio specificato nell'argomento facoltativo di 
`\\`.

## Personalizzare i filetti di `booktabs`

Tutti i filetti di `booktabs` e il comando `\addlinespace`
accettano un argomento facoltativo tra parentesi quadre
con nel quale puoi specificare lo spessore del filetto.
Inoltre, la ‘rasatura’ permessa da `\cmidrule` può essere
personalizzata specificando una lunghezza tra parentesi
graffe dopo `r` o `l`.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{}lll@{}}
  \toprule[2pt]
  Animale & Cibo   & Taglia  \\ 
  \midrule[1pt]
  cane    & carne  & media   \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  cavallo & fieno  & grande  \\
  rana    & mosche & piccola \\ 
  \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Allineare numeri in una colonna

L'allineamento di numeri nelle colonne può essere 
gestito con lo specificatore di colonna `S` definito
dal pacchetto `siunitx`.

Un semplice esempio con due colonne di numeri
allineati (al separatore decimale, in questo caso)
può essere il seguente:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}

\begin{document}
\begin{tabular}{SS}
  \toprule
  {Valori} & {Ancora valori} \\
  \midrule
  1        & 2.3456  \\
  1.2      & 34.2345 \\
  -2.3     & 90.473  \\
  40       & 5642.5  \\
  5.3      & 1.2e3   \\
  0.2      & 1e4     \\
  \bottomrule
\end{tabular}
\end{document}
```
Osserva che una cella non numerica va ‘protetta’
racchiudendone il contenuto tra parentesi
graffe.

Il pacchetto `siunitx` prevede numerose possibilità
di formattare i numeri in diversi modi: per saperne
di più, da' un'occhiata alla 
[documentazione del pacchetto](https://texdoc.org/pkg/siunitx).

## Specificare la larghezza totale della tabella

La larghezza di un ambiente `tabular` è determinata automaticamente
in base al contenuto della tabella.
Per specificare una larghezza totale diversa, esistono due meccanismi
comunemente seguiti.

Osserva che è quasi sempre preferibile impostare la tabella
a una larghezza specifica come ti mostriamo sotto (con una
dichiarazione di corpo come `\small`, se necessario)
piuttosto che scalarla con `\resizebox` e comandi simili,
che produrranno corpi dei font e spessori dei filetti incoerenti.

### `tabular*`

L'ambiente `tabular*` accetta un ulteriore argomento `larghezza`, 
che specifica la larghezza _totale_ della tabella. 
Per conferire elasticità al risultato, bisogna aggiungere alla
tabella dello spazio elastico con il comando `\extracolsep`. 
Questo spazio,aggiunto tra tutte le colonne da quel punto 
in poi nel preambolo, viene quasi sempre dichiarato come `\fill`, 
uno spazio speciale che si allunga fino a diventare grande 
quanto necessario.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B \\
C & D \\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B \\
C & D \\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B \\
C & D \\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

L'ambiente `tabularx`, definito dall'omonimo pacchetto,
presenta una sintassi simile a quella di `tabular*`,
ma anziché aggiustare lo spazio tra le colonne, aggiusta
la larghezza delle colonne,specificate con un nuovo tipo
di colonna, `X`.
Ciò equivale a uno specificatore di tipo `p{...}`, ma con
una larghezza determinata automaticamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B \\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B \\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B \\
C & D D D D D D D \\
\hline
\end{tabularx}
\end{center}

\end{document}
```

A differenza degli altri ambienti discussi in queste lezioni, 
`tabularx` richiede di comporre la tabella più volte, con 
larghezze di prova per determinare il risultato finale. 
Ciò significa che ci sono diverse restrizioni sull'uso dell'ambiente;
da' un'occhiata alla sua
[documentazione](https://texdoc.org/pkg/tabularx).

## Tabelle su più pagine

Un ambiente `tabular` produce una scatola che non può essere spezzata, 
e che perciò deve essere sufficientemente piccola per stare in una sola
pagina, spesso inserita nell'ambiente galleggiante `table`.

Esistono diversi pacchetti che definiscono varianti di questo ambiente 
con una sintassi simile, ma che permettono a una tabella di stare su
più di una pagina.
Qui mostriamo il pacchetto `longtable`.

```latex
\documentclass{article}
\usepackage[
  paperheight=8cm,
  paperwidth=8cm
]{geometry}
\usepackage{array}
\usepackage{longtable}

\begin{document}

\begin{longtable}{cc}
\multicolumn{2}{c}{Una tabella lunga} \\
Lato sinistro      & Lato destro \\
\hline
\endhead
\hline
\endfoot
aa                 & bb  \\  
Voce               & b   \\  
a                  & b   \\  
a                  & b   \\  
a                  & b   \\  
a                  & b   \\  
a                  & bbb \\  
a                  & b   \\  
a                  & b   \\  
a                  & b   \\  
a                  & b   \\  
a                  & b   \\  
a                  & b   \\  
a                  & b b b b b b \\  
a                  & b b b b b \\  
a                  & b b \\  
Una voce più lunga & b   \\  
\end{longtable}

\end{document}
```

`longtable` è notevole in quanto conserva la larghezza delle 
colonne su tutte le pagine della tabella; tuttavia, per ottenere 
questo risultato potrebbero servire diverse esecuzioni di LaTeX, 
in modo che le voci larghe incontrate successivamente nella tabella 
possano influire sulla larghezza delle colonne nelle pagine precedenti.

## Note nelle tabelle

È abbastanza comune in una tabella aver bisogno di segni (simili agli 
esponenti delle note a piè di pagina) che si riferiscano a note
sotto alla tabella. 
Il pacchetto `threeparttable` semplifica la composizione di tabelle
di questo tipo, componendo le note in un blocco largo quanto
la tabella.
Per ulteriori dettagli, guarda la
[documentazione del pacchetto](https://texdoc.org/pkg/threeparttable).
Qui te ne mostriamo un piccolo esempio.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{Un esempio}
   \begin{tabular}{ll}
    Una voce      & 42\tnote{1} \\
    Un'altra voce & 24\tnote{2} \\
   \end{tabular}
   \begin{tablenotes}
   \item [1] La prima nota.
   \item [2] La seconda nota.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Comporre in colonne strette

The default line breaking settings assume relatively long lines to
give some flexibility in choosing line breaks. The following example
shows some possible approaches. The first table shows interword spacing
stretched and TeX warns about Underfull lines. Using `\raggedright`
usually avoids this problem but may leave some lines ‘too ragged’. The
`\RaggedRight` command from the `ragged2e` package is a compromise;
it allows some raggedness in the line lengths, but will also
hyphenate where necessary, as shown in the third table.

Note the use of `\arraybackslash` here, which resets the definition of
`\\` so that it ends the table row.

An alternative technique, as shown in the fourth table, is to use a
smaller font so that the columns are not so narrow relative to the
text size.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\end{table}

\end{document}
```

## Definire nuovi tipi di colonna

As demonstrated in the [main lesson](lesson-08), the `array` package allows
constructs such as `>{\bfseries}c`  to denote a bold centered column.
It is often convenient to define a new column type to encapsulate such
use, for example

```latex
\newcolumntype{B}{>{\bfseries}c}
```
would allow the use of `B` in table preambles to specify a bold
centered column.


## Trucchi verticali

Often, rather than making a cell span multiple rows it is better to instead have
a single row in which some cells are split vertically by the use of nested
`tabular` environments.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Note that you can control vertical alignment by an optional argument to the
`tabular`; it supports the usage of `t`, `c`, or `b` for top, centered, or
bottom aligned respectively and is used like this:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Interlinea nelle tabelle

In the main lesson we demonstrated `\addlinespace` from the `booktabs`
package, which is useful for adding extra space between specific lines.

There are two general parameters that control line spacing,
`\arraystretch` and `\extrarowheight` (the latter from the `array`
package).

```latex
\renewcommand\arraystretch{1.5}
```

will increase the baseline spacing by 50%.


Often, especially when using `\hline`, it is better just to increase
the height of rows, without increasing their depth below the baseline.
The following example demonstrates the `\extrarowheight` parameter.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
