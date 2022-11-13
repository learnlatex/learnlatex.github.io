---
layout: "lesson"
lang: "it"
title: "Tabelle"
description: "Questa lezione mostra come comporre le tabelle in LaTeX, impostare l'allineamento delle celle, aggiungere filetti e unire le celle."
toc-anchor-text: "Tabelle con LaTeX"
toc-description: "Nozioni fondamentali per comporre le tabelle."
---

# Tabelle

<span
  class="summary">Questa lezione mostra come comporre le tabelle in LaTeX, impostare l'allineamento delle celle, aggiungere filetti e unire le celle.</span>

In LaTeX, le tabelle sono costruite nell'ambiente 
`tabular`. 
In questa lezione assumiamo il caricamento del 
pacchetto `array`, che aggiunge ulteriori 
funzionalità alle tabelle standard, e che non è 
integrato nel kernel di LaTeX solo per ragioni 
storiche.
Scrivi dunque la riga seguente nel tuo preambolo
e sarai pronto per incominciare:

```latex
\usepackage{array}
```
{: .noedit :}

Per comporre una tabella dentro `tabular`, bisogna dire
a LaTeX di quante colonne si ha bisogno e come debbono
essere allineate. Questa dichiarazione va fatta
in un argomento obbligatorio 
&ndash; spesso chiamato _preambolo_ &ndash;
di `tabular`, nel quale le colonne vengono specificate 
con nomi di una sola lettera, chiamati _preamble-token_.
I tipi di colonne disponibili sono i seguenti:

<!-- don't line wrap this table, markdown seems to not support this -->

| tipo                         | descrizione |
| ---                          |:-- |
| `l`                          | colonna allineata a sinistra |
| `c`                          | colonna centrata |
| `r`                          | colonna allineata a destra |
| `p{larghezza}`               | colonna di `larghezza` fissa; il testo va a capo automaticamente ed è giustificato |
| `m{larghezza}`               | come `p`, ma messo in alto rispetto al resto della riga |
| `b{larghezza}`               | come `p`, ma messo in basso |
| `w{allineamento}{larghezza}` | produce una colonna di `larghezza` fissa e `allineamento` `l`, `c` o `r`; se troppo largo, il contenuto della colonna finisce nel margine. |
| `W{allineamento}{larghezza}` | come `w`, ma se il contenuto è troppo largo, emette un avviso di `overfull box`. |

Oltre a quelli appena visti, sono disponibili alcuni altri _preamble-token_ che 
non definiscono una colonna ma potrebbero ugualmente essere utili:

<!-- don't line wrap this table, markdown seems to not support this -->

| tipo | descrizione |
| ---  | :-- |
| `*{numero}{stringa}` | ripete la `stringa` per `numero` volte nel preambolo. Utile per dichiarare più colonne identiche. |
| `>{dichiarazione}` | mette la `dichiarazione` prima del contenuto di ogni cella nella colonna successiva (utile, per esempio, per impostare un font differente per la colonna in questione) |
| `<{dichiarazione}` | mette la `dichiarazione` dopo il contenuto di ogni cella nella colonna precedente |
| <span>`|`</span> | aggiunge un filetto verticale |
| `@{dichiarazione}` | sostituisce lo spazio tra due colonne con la `dichiarazione` |
| `!{dichiarazione}` | aggiunge la `dichiarazione` al centro dello spazio tra due colonne |

Le due tabelle qui sopra mostrano tutti i tipi di colonna disponibili
in LaTeX standard e con il pacchetto `array`.
Ulteriori tipi di colonna messi a disposizione dai diversi pacchetti
vengono presentati nella [pagina di approfondimento](more-08) di questa 
lezione.

Le colonne `l`, `c` e `r` avranno la larghezza naturale della cella più larga.
Vanno dichiarate tutte le colonne di cui hai bisogno: se ti servono tre colonne
centrate, per esempio, nel preambolo della tabella scriverai `ccc` 
(o `c c c`, dato che gli spazi vengono ignorati).

Nel corpo della tabella, le colonne si separano con il carattere `&`
e si incomincia una nuova riga con `\\`.

Ora sappiamo tutto ciò che ci serve per la nostra prima tabella. 
Nel codice seguente, `&` e `\\` sono incolonnati. 
Non è necessario farlo, con LaTeX, ma ti aiuterà a leggere
il codice sorgente.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Animale & Cibo   & Taglia  \\
  cane    & carne  & media   \\
  cavallo & fieno  & grande  \\
  rana    & mosche & piccola \\
\end{tabular}
\end{document}
```

<!-- {% endraw %} -->

Se una colonna contiene molto testo, il risultato 
con i semplici `l`, `c` e `r` non sarà buono. 
Osserva che cosa succede nell'esempio seguente:

<!-- {% raw %} -->

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animale  & Descrizione \\
  cane     & Il cane è un membro del genere Canis, che fa parte dei canidi 
             simili ai lupi, ed è il carnivoro terrestre più largamente 
             diffuso. \\  
  gatto    & Il gatto è una specie domestica di piccolo mammifero carnivoro. 
             È l'unica specie domestica della famiglia Felidae ed è spesso 
             indicato come il gatto domestico per distinguerlo dai membri 
             selvatici della famiglia. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Il problema è che una colonna `l` stampa il proprio contenuto 
in una sola riga alla sua larghezza naturale, anche se in mezzo
c'è il bordo di una pagina.
Per evitare la cosa, puoi adoperare la colonna `p`, che stampa
il proprio contenuto come capoversi della larghezza da te 
specificata nell'argomento e allineati verticalmente in alto 
(ciò che vorrai la grande maggioranza delle volte).
Confronta il risultato dell'esempio precedente con questo:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animale  & Descrizione \\
  cane     & Il cane è un membro del genere Canis, che fa parte dei canidi 
             simili ai lupi, ed è il carnivoro terrestre più largamente 
             diffuso. \\  
  gatto    & Il gatto è una specie domestica di piccolo mammifero carnivoro. 
             È l'unica specie domestica della famiglia Felidae ed è spesso 
             indicato come il gatto domestico per distinguerlo dai membri 
             selvatici della famiglia. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Se la tua tabella ha molte colonne dello stesso tipo, dichiararle una
alla volta nel preambolo può essere farraginoso. 
È molto più veloce dare `*{numero}{stringa}`, che ripete la `stringa` per 
`numero` volte.
In altre parole, `*{6}{c}` equivale a scrivere `cccccc`. 
Per mostrarti come funziona la cosa, ecco di nuovo la prima tabella
di questa lezione con la sintassi appena imparata:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animale & Cibo   & Taglia  \\
  cane    & carne  & media   \\
  cavallo & fieno  & grande  \\
  rana    & mosche & piccola \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Aggiungere linee

Un consiglio, prima di introdurre le linee (o _filetti_): i filetti nelle
tabelle andrebbero adoperati con grande parsimonia, e di solito quelli 
verticali producono un risultato non professionale.
Per ottenere tabelle di aspetto professionale, infatti, è meglio evitare
i filetti standard di LaTeX e adoperare al loro posto quelli messi a
disposizione dal pacchetto `booktabs`, motivo per cui lo descriviamo
qui come prima cosa.
Per completezza, i filetti standard sono trattati nella
[pagina di approfondimento](more-08).

`booktabs` mette a disposizione quattro tipi diversi di filetto, ciascuno
dei quali si ottiene con un comando.
Questi comandi debbono essere dati come prima cosa all'inizio di una riga 
o seguire immediatamente un altro filetto.
I tre comandi più adoperati sono `\toprule`, `\midrule` e
`\bottomrule`. Il loro nome indica chiaramente dove vanno dati:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animale & Cibo   & Taglia  \\
  \midrule
  cane    & carne  & media   \\
  cavallo & fieno  & grande  \\
  rana    & mosche & piccola \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Il quarto filetto definito da `booktabs` è `\cmidrule`. Può essere adoperato
per disegnare una linea che non copre l'intera larghezza della tabella, ma solo
un determinato intervallo tra colonne. Un intervallo tra colonne si indica
come un intervallo numerico: `{`_numero_`-`_numero_`}`.
Dovrai indicare un intervallo anche se vuoi che il filetto sia largo
una colonna soltanto (in questo caso, i due numeri saranno uguali).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animale & Cibo   & Taglia  \\
  \midrule
  cane    & carne  & media   \\
  \cmidrule{1-2}
  cavallo & fieno  & grande  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  rana    & mosche & piccola \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

C'è un'altra caratteristica utile di `\cmidrule`. 
Puoi accorciarlo a entrambe le estremità con un argomento facoltativo
tra parentesi tonde:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animale & Cibo   & Taglia  \\
  \midrule
  cane    & carne  & media   \\
  \cmidrule{1-2}
  cavallo & fieno  & grande  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  rana    & mosche & piccola \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Hai sicuramente indovinato che `r` e `l` indicano che il filetto
è accorciato alla sua estremità destra (_**r**ight_)
e sinistra (_**l**eft_) rispettivamente.

A volte un filetto può essere una separazione eccessiva tra due righe, 
ma ti accorgi che la tabella sarebbe più chiara  
distinguendole comunque in qualche modo.
In casi come questo, puoi inserire un piccolo spazio verticale 
con il comando `\addlinespace`.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animale  & Descrizione \\
  cane     & Il cane è un membro del genere Canis, che fa parte dei canidi 
             simili ai lupi, ed è il carnivoro terrestre più largamente 
             diffuso. \\  
  \addlinespace
  gatto    & Il gatto è una specie domestica di piccolo mammifero carnivoro. 
             È l'unica specie domestica della famiglia Felidae ed è spesso 
             indicato come il gatto domestico per distinguerlo dai membri 
             selvatici della famiglia. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Unire le celle

In LaTeX, puoi unire le celle orizzontalmente con il comando `\multicolumn`,
che va dato come prima cosa in una cella. 
`\multicolumn` prende tre argomenti:

1. il numero di celle da unire
2. l'allineamento della cella risultante
3. il contenuto della cella risultante

Il secondo argomento può contenere qualsiasi cosa sia
legale nel preambolo di `tabular`, ma, fa' attenzione,
_un solo tipo di colonna_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animale   & Cibo   & Taglia  \\
  \midrule
  cane      & carne  & media   \\
  cavallo   & fieno  & grande  \\
  rana      & mosche & piccola \\
  furlong   & \multicolumn{2}{c}{sconosciuto} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Puoi adoperare `\multicolumn` anche in una singola cella 
per evitare che LaTeX applichi alla colonna in questione 
quanto hai definito nel preambolo della tabella.
Nell'esempio seguente, il comando è stato adoperato
per centrare le intestazioni di colonne altrimenti
allineate a sinistra:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animale} & \multicolumn{1}{c}{Cibo} & \multicolumn{1}{c}{Taglia} \\
  \midrule
  cane      & carne  & media   \\
  cavallo   & fieno  & grande  \\
  rana      & mosche & piccola \\
  furlong   & \multicolumn{2}{c}{sconosciuto} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Merging cells vertically isn't supported by LaTeX.
Usually it suffices to leave cells empty to give the reader the
correct idea of what was meant without explicitly making cells span rows.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Group     & Animal & Size   \\
  \midrule
  herbivore & horse  & large  \\
            & deer   & medium \\
            & rabbit & small  \\
  \addlinespace
  carnivore & dog    & medium \\
            & cat    & small  \\
            & lion   & large  \\
  \addlinespace
  omnivore  & crow   & small  \\
            & bear   & large  \\
            & pig    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Exercises

Use the simple table example to start experimenting with tables. Try out
different alignments using the `l`, `c` and `r` column types. What happens if
you have too few items in a table row? How about too many? Experiment with the
`\multicolumn` command to span across columns.
