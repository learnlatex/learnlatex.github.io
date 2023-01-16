---
layout: "lesson"
lang: "it"
title: "Di più su: Tabelle"
description: "Questa lezione mostra altri modi per personalizzare una tabella impostando 
lo stile di una colonna e modificandone la spaziatura e i filetti. Inoltre, descrive altri pacchetti 
che forniscono ulteriori funzionalità per comporre le tabelle."
toc-anchor-text: "Di più su: Tabelle"
---

## Gli altri contenuti del preambolo

Nella lezione principale non è stato possibile 
descrivere tutte le opzioni disponibili per le 
intestazioni delle tabelle, perciò ne spieghiamo 
alcune altre qui, con degli esempi.
Innanzitutto ti consigliamo di ripassare l'inizio 
della lezione per avere sotto mano la panoramica 
delle diverse possibilità.
Se hai compreso per bene il funzionamento di 
`l`, `c`, `r`, e `p`, le brevi descrizioni che 
ti abbiamo dato dovrebbero bastarti per capire 
anche come si comportano le colonne `m`, `b`, `w` 
e `W` (lì non descritte).
Se non è così, potrebbe aiutarti fare qualche 
esperimento modificando opportunamente i codici 
degli esempi per prendere
dimestichezza con i vari tipi di colonne.
Rimangono ora da vedere `>`, `<`, `@`, `!`, e `|`,
altri _token di preambolo_ utili e comunemente
adoperati. 

### Impostare lo stile di una colonna

I caratteri `>` e `<` si possono adoperare per 
inserire elementi rispettivamente prima e dopo 
il contenuto di una cella. 
Dunque, grazie a essi potrai aggiungere anche 
_comandi_ che modificano l'aspetto di una 
colonna. 
Per esempio, volendo la prima colonna in corsivo 
e con un segno di due punti dopo ogni voce, puoi 
fare così:

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

Di solito `\itshape` (che è una _dichiarazione_) 
mette in corsivo _tutto_ il testo successivo, 
ma in una tabella il suo effetto è ‘arginato’ dai 
confini della cella (che, di fatto, è un gruppo). 
Esamineremo la formattazione manuale del testo 
[tra qualche lezione](lesson-11).

Spesso la prima riga di una tabella fa da 
intestazione, e perciò va formattata in modo 
diverso dal resto.
Il comando `\multicolumn`, che come ricorderai
può essere adoperato anche per modificare 
l'allineamento di una singola
cella, torna utile anche a questo scopo, 
come mostra l'esempio seguente:

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

Osserva che ora l'intestazione della prima colonna
è in tondo e senza i due punti.

### Modificare lo spazio tra le colonne

Per impostazione predefinita, LaTeX mette uno spazio a 
entrambi i lati di ciascuna colonna per equilibrarne 
l'aspetto e separarle adeguatamente. 
Questo spazio è definito dalla lunghezza `\tabcolsep`. 
Di conseguenza, ci sarà un solo `\tabcolsep` a entrambe 
le estremità della tabella e `2\tabcolsep` tra due 
colonne consecutive (uno per ogni colonna). 
Puoi modificare in ogni momento questo spazio 
impostandolo a una lunghezza a piacere con 
`\setlength`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}        % vogliamo \tabcolsep di 1 centimetro

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

Puoi cambiare questo spazio in qualunque 
cosa tu voglia dichiarandolo nell'argomento 
di `@`: lo spazio di riempimento predefinito 
tra due colonne o alle estremità della tabella 
_sarà eliminato_ e al suo posto LaTeX inserirà 
quanto specificato (il segno di due punti
tra la prima e la seconda colonna e uno spazio 
di 2 centimetri tra la seconda e la terza, 
nell'esempio successivo):

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

Di nuovo, vedremo il comando `\hspace` 
[tra poco](lesson-11), ma non è difficile 
indovinare a che cosa serve.

Nel preambolo di una tabella, `!` fa qualcosa 
di molto simile a quanto appena visto, con
la differenza che _aggiunge_ il proprio 
argomento tra due colonne, lasciando inalterato 
lo spazio predefinito inserito da LaTeX.

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

Le regole della buona tipografia scoraggiano 
l'uso dei filetti verticali nelle tabelle.
Tuttavia, diamo l'esempio che segue per 
quando non se ne vuole (o non se ne può) 
fare a meno.

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

Osserva che il comportamento di `|` è abbastanza 
simile a quello di `!{...}`: infatti, aggiunge un 
filetto verticale tra due colonne lasciando 
inalterato lo spazio tra di esse. 
Tuttavia, c'è un enorme inconveniente: i filetti 
verticali di LaTeX _non_ funzionano con quelli 
orizzontali di `booktabs`. 
In questo caso, al loro posto puoi adoperare 
i filetti orizzontali di LaTeX: `\hline` 
(corrispondente a `\toprule`, `\midrule` 
e `\bottomrule`) e `\cline` (che si comporta 
come `\cmidrule`). 
Come si vede nell'esempio sopra, i filetti verticali 
coprono anche l'eventuale spazio specificato 
nell'argomento facoltativo di `\\`.

## Personalizzare i filetti di `booktabs`

Tutti i filetti di `booktabs` e il comando 
`\addlinespace` accettano un argomento 
facoltativo tra parentesi quadre nel quale 
puoi specificare lo spessore del filetto.
Inoltre, la ‘rasatura’ permessa da `\cmidrule` 
può essere regolata a una lunghezza indicata 
tra parentesi graffe dopo `r` o `l`.

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

Il modo più efficace per allineare dei
numeri in una tabella è metterli in una
colonna `S` definita dal pacchetto `siunitx`.

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
Osserva che un eventuale contenuto non 
numerico (le due intestazioni, in questo caso) 
va ‘protetto’ tra parentesi graffe.

Il pacchetto `siunitx` prevede numerose possibilità
per formattare i numeri e le unità di misura in 
diversi modi: per saperne di più, da' un'occhiata alla 
[documentazione del pacchetto](https://texdoc.org/pkg/siunitx).

## Tabelle di larghezza specificata

La larghezza di un ambiente `tabular` è determinata 
automaticamente in base al contenuto della tabella.
Tuttavia, puoi comporre tabelle di larghezza totale 
a piacere con uno dei due metodi che descriviamo qui 
sotto.

Osserva che è quasi sempre preferibile impostare 
per la tabella una larghezza specifica come facciamo 
qui (con una dichiarazione di corpo come `\small`, 
se necessario) piuttosto che scalarla con `\resizebox` 
e altri comandi simili, che produrranno corpi dei font 
e spessori dei filetti incoerenti.

### `tabular*`

L'ambiente `tabular*` accetta un ulteriore argomento 
`larghezza` che specifica la larghezza _totale_ della 
tabella. 
Per conferire elasticità al risultato, bisogna aggiungere 
tra le colonne uno spazio elastico con il comando 
`\extracolsep`. 
Questo spazio, che viene inserito tra _tutte_ le colonne 
dal punto del preambolo in cui viene dichiarato in poi, 
sarà quasi sempre `\fill`, cioè uno spazio ‘speciale’ 
che si allarga quanto serve.

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
la larghezza delle colonne, da indicare con 
il nuovo specificatore `X`.
Il risultato è simile a quello che si ottiene con `p{...}`,
con la differenza che ora la larghezza delle colonne,
che avranno tutte la stessa larghezza, è determinata 
automaticamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
  \begin{tabular}{lp{2cm}}
    \hline
    A & B B B B B B B B B B B B B B B B B B B B B B B B \\
    C & D D D D D D D \\
    \hline
  \end{tabular}
\end{center}

\begin{center}  
  \begin{tabularx}{.5\textwidth}{lX}
    \hline
    A & B B B B B B B B B B B B B B B B B B B B B B B B \\
    C & D D D D D D D \\
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

`tabularx` prende due argomenti obbligatori, 
nel primo dei quali va specificata la larghezza
della tabella, che è sempre opportuno indicare
_relativamente_ a una larghezza predefinita
(`\textwidth`, di solito, come nell'esempio
precedente).

A differenza degli altri ambienti descritti in 
queste lezioni, `tabularx` richiede qualche
tentativo per determinare la larghezza ottimale
della tabella.
Ciò significa che questo ambiente impone qualche
restrizione all'utente: per conoscerle,
consulta la [documentazione](https://texdoc.org/pkg/tabularx)
del pacchetto.

## Tabelle su più pagine

Un ambiente `tabular` produce una ‘scatola’ che 
non può essere spezzata, e che perciò deve essere 
sufficientemente piccola da stare in una sola
pagina ed è spesso inserita come float 
nell'ambiente galleggiante `table`.

I pacchetti disponibili che definiscono varianti
di questo ambiente con una sintassi simile ma
che permettono di comporre tabelle più lunghe
di una pagina sono più d'uno: qui descriviamo
il pacchetto `longtable`.

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
  Lato sinistro      & Lato destro      \\
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
  a                  & b b b b b   \\  
  a                  & b b \\  
  Una voce più lunga & b   \\  
\end{longtable}

\end{document}
```

`longtable` è notevole perché conserva 
la larghezza delle colonne su tutte le 
pagine in cui è suddivisa la tabella. 
Tuttavia, per ottenere questo risultato 
potrebbero servire diverse esecuzioni 
consecutive di LaTeX, in modo che il 
programma adegui la larghezza delle 
colonne nelle pagine precedenti a
quella delle voci più larghe incontrate
più avanti.

## Note nelle tabelle

È abbastanza comune in una tabella aver 
bisogno di segni (simili agli esponenti 
delle note a piè di pagina) che si 
riferiscano a note esplicative sotto alla 
tabella. 
Il pacchetto `threeparttable` semplifica 
la composizione di tabelle di questo tipo, 
componendo le note in un blocco largo quanto
la tabella.
Per ulteriori dettagli, guarda la
[documentazione del pacchetto](https://texdoc.org/pkg/threeparttable).
Eccone un piccolo esempio.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}

\begin{document}

\begin{table}
  \begin{threeparttable}
    \caption{Un esempio di tabella con note}
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

Le impostazioni predefinite di LaTeX 
presuppongono righe relativamente 
lunghe per offrire una certa flessibilità 
nella scelta del punto in cui interromperle. 
L'esempio seguente mostra alcuni possibili 
approcci. 
La prima tabella mostra una spaziatura 
interparola allungata, cosa che TeX segnala 
con messaggi di righe `Underfull` 
(poco piene). 
L'uso di `\raggedright` di solito evita 
questo problema, ma potrebbe lasciare alcune 
righe ‘troppo irregolari’. 
Il comando `\RaggedRight` del pacchetto 
`ragged2e` è un compromesso accettabile: 
permette una certa irregolarità nella 
lunghezza delle righe, ma contemporaneamente 
le interromperà dove necessario, 
come mostra la terza tabella qui sotto.

Osserva l'uso del comando `\arraybackslash`, 
che reimposta la definizione di `\\` 
per terminare una riga.

Una tecnica alternativa, come mostra la 
quarta tabella, consiste nell'adoperare 
un carattere più piccolo in modo che 
le colonne non siano così strette rispetto 
alla dimensione del testo.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}

\begin{document}

\begin{table}
  \begin{tabular}[t]{lp{3cm}}
    Uno & Un testo lungo inserito in un paragrafo stretto, con altro testo d'esempio. \\
    Due & Un testo lungo diverso inserito in un paragrafo stretto, con alcune parole più difficili
    da sillabare.
  \end{tabular}%
  \begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
    Uno & Un testo lungo inserito in un paragrafo stretto, con altro testo d'esempio. \\
    Due & Un testo lungo diverso inserito in un paragrafo stretto, con alcune parole più difficili 
    da sillabare.
  \end{tabular}%
  \begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
    Uno & Un testo lungo inserito in un paragrafo stretto, con altro testo d'esempio. \\
    Due & Un testo lungo diverso inserito in un paragrafo stretto, con alcune parole più difficili 
    da sillabare.
  \end{tabular}

\footnotesize
  \begin{tabular}[t]{lp{3cm}}
    Uno & Un testo lungo inserito in un paragrafo stretto, con altro testo d'esempio. \\
    Due & Un testo lungo diverso inserito in un paragrafo stretto, con alcune parole più difficili 
    da sillabare.
  \end{tabular}
\end{table}

\end{document}
```

## Definire nuovi tipi di colonna

Come abbiamo mostrato nella [lezione principale](lesson-08), 
il pacchetto `array` permette costrutti come 
`>{\bfseries}c` per specificare una colonna 
centrata in nero.
Spesso, tuttavia, per incapsulare definizioni 
come queste conveniene definire un nuovo tipo di 
colonna. 
Per esempio, la scrittura

```latex
\newcolumntype{B}{>{\bfseries}c}
```
permette di specificare nel preambolo della
tabella colonne di tipo `B`.


## Trucchi verticali

Spesso, anziché che fare in modo che una 
cella si estenda su più righe, è meglio 
avere una singola riga in cui alcune celle 
sono divise verticalmente da ambienti 
`tabular` nidificati.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}

\begin{tabular}{lcc}
  \toprule
  Test          & 
  \begin{tabular}{@{}c@{}}
    A \\ 
    a
  \end{tabular} & 
  \begin{tabular}{@{}c@{}}
    B \\ 
    b
  \end{tabular}           \\
  \midrule
  Il contenuto  & è & qui \\
  Il contenuto  & è & qui \\
  Il contenuto  & è & qui \\
  \bottomrule
\end{tabular}

\end{document}
```
<!-- {% endraw %} -->

Osserva che è possibile controllare 
l'allineamento verticale di una tabella 
mediante l'argomento facoltativo di 
`tabular`: i valori possibili sono 
`t`, `c` o `b` per l'allineamento 
in alto, al centro o in basso
rispettivamente. 
Ecco un esempio:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}

\begin{tabular}{lcc}
  \toprule
  Test          & 
  \begin{tabular}[b]{@{}c@{}}
    A \\ 
    a
  \end{tabular} & 
  \begin{tabular}[t]{@{}c@{}}
    B \\ 
    b
  \end{tabular}           \\
  \midrule
  Il contenuto  & è & qui \\
  Il contenuto  & è & qui \\
  Il contenuto  & è & qui \\
  \bottomrule
\end{tabular}

\end{document}
```
<!-- {% endraw %} -->

## Interlinea nelle tabelle

Nella lezione principale abbiamo 
descritto il comando `\addlinespace` 
del pacchetto `booktabs`, utile per 
aggiungere dello spazio supplementare 
tra due righe specifiche.

I parametri generali che controllano 
lo spazio tra le righe di una tabella: 
`\arraystretch` e `\extrarowheight` 
(il secondo è definito dal pacchetto 
`array`).

La scrittura

```latex
\renewcommand\arraystretch{1.5}
```

aumenterà del 50% lo spazio tra due linee di 
base consecutive _in tutta la tabella_.

Spesso, specialmente nelle tabelle che
contengono comandi `\hline`, è meglio 
aumentare solo l'altezza delle 
righe lasciando inalterato lo spazio
sotto alla linea di base del testo.
Per farlo, c'è il comando `\extrarowheight`,
all'opera nell'esempio seguente:

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}

\begin{center}
  \begin{tabular}{cc}
    \hline
    Quadrato & $x^2$ \\
    \hline
    Cubo     & $x^3$ \\
    \hline
  \end{tabular}
\end{center}

\begin{center}
  \setlength\extrarowheight{2pt}
  \begin{tabular}{cc}
    \hline
    Quadrato & $x^2$ \\
    \hline
    Cubo     & $x^3$ \\
    \hline
  \end{tabular}
\end{center}

\end{document}
```
