---
layout: "lesson"
lang: "it"
title: "Tabelle"
description: "Questa lezione mostra come comporre le tabelle con LaTeX, come impostare l'allineamento delle celle e come unirle, come aggiungere filetti."
toc-anchor-text: "Tabelle con LaTeX"
toc-description: "Nozioni fondamentali per comporre le tabelle."
---

# Tabelle

<span
  class="summary">Questa lezione mostra come comporre le tabelle con LaTeX, come impostare l'allineamento delle celle e come unirle, come aggiungere filetti.</span>

In LaTeX, le tabelle si costruiscono nell'ambiente 
`tabular`. 
In questa lezione assumiamo anche il caricamento del 
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

Per comporre una tabella nell'ambiente `tabular`, 
LaTeX ha bisogno di sapere due cose: quante 
colonne servono e come debbono 
essere allineate. 
Questa dichiarazione va fatta in un 
argomento obbligatorio 
&ndash; spesso chiamato _preambolo_ della tabella &ndash;
di `tabular`, nel quale le colonne vengono 
specificate con nomi di una sola lettera, 
chiamati _preamble-token_ (token di preambolo). 
La tabella seguente mostra i tipi di colonna standard
disponibili:

<!-- don't line wrap this table, markdown seems to not support this -->

| Tipo                         | Descrizione |
| ---                          |:-- |
| `l`                          | colonna allineata a sinistra |
| `c`                          | colonna centrata |
| `r`                          | colonna allineata a destra |
| `p{larghezza}`               | colonna di `larghezza` fissa; il testo va a capo automaticamente ed è giustificato |
| `m{larghezza}`               | come `p`, ma messo in alto rispetto al resto della riga |
| `b{larghezza}`               | come `p`, ma messo in basso |
| `w{allineamento}{larghezza}` | produce una colonna di `larghezza` fissa e `allineamento` `l`, `c` o `r`; se troppo largo, il contenuto della colonna finisce nel margine. |
| `W{allineamento}{larghezza}` | come `w`, ma se il contenuto è troppo largo, LaTeX emette un avviso di `overfull box`. |

Oltre a quelli appena visti, sono disponibili 
alcuni altri _preamble-token_ che non 
definiscono una colonna, ma potrebbero essere 
ugualmente utili:

<!-- don't line wrap this table, markdown seems to not support this -->

| Tipo | Descrizione |
| ---  | :-- |
| `*{numero}{stringa}` | ripete la `stringa` per `numero` volte nel preambolo; utile per dichiarare più colonne identich. |
| `>{dichiarazione}` | mette la `dichiarazione` prima del contenuto di ogni cella nella colonna successiva (utile, per esempio, per impostare un font differente per la colonna in questione) |
| `<{dichiarazione}` | mette la `dichiarazione` dopo il contenuto di ogni cella nella colonna precedente |
| <span>`|`</span> | aggiunge un filetto verticale |
| `@{dichiarazione}` | sostituisce lo spazio tra due colonne con la `dichiarazione` |
| `!{dichiarazione}` | aggiunge la `dichiarazione` al centro dello spazio tra due colonne |

Le due tabelle qui sopra mostrano tutti i tipi 
di colonna disponibili in LaTeX standard e con 
il pacchetto `array`.
Ulteriori tipi di colonna definiti dai diversi 
pacchetti vengono presentati nella 
[pagina di approfondimento](more-08) di questa 
lezione.

Le colonne `l`, `c` e `r` avranno la larghezza 
naturale della cella più larga.
Vanno dichiarate tutte le colonne di cui hai 
bisogno: se ti servono tre colonne centrate, 
per esempio, nel preambolo della tabella 
scriverai `ccc` (o `c c c`, dato che gli spazi 
vengono ignorati).

Nel corpo della tabella, le colonne si separano 
con il carattere `&` e si termina una riga 
con `\\`.

Ora sai tutto ciò che ti serve per comporre 
la tua prima tabella. 
Nota che nel codice seguente `&` e `\\` sono 
incolonnati. 
LaTeX non lo richiede, ma è una buona pratica
per rendere il sorgente più leggibile.

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

Il problema è che il materiale di una colonna 
`l` viene stampato su una sola riga e con la sua 
larghezza naturale, anche se la pagina non è
sufficientemente grande.
Per evitarlo, al suo posto puoi specificare la 
colonna `p{larghezza}`, che sistema il proprio 
contenuto come un capoverso della `larghezza` 
da te indicata e allineato verticalmente in alto 
(questa impostazione predefinita andrà bene nella
grandissima maggioranza delle volte).
Confronta il risultato dell'esempio precedente con 
questo:

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

Se la tua tabella contiene molte colonne dello 
stesso tipo, dichiararle una alla volta nel 
preambolo può essere farraginoso. 
È molto più veloce scrivere `*{<numero>}{<specificatore>}`, 
che ripete lo `specificatore` per `numero` volte.
In altre parole, `*{6}{c}` equivale a scrivere 
`cccccc`. 
Per mostrarti come funziona la cosa, ecco di nuovo 
la prima tabella di questa lezione con la sintassi 
appena descritta:

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

## Aggiungere i filetti

Prima di affrontare l'argomento delle linee 
(o _filetti_), ti diamo un consiglio: 
i filetti nelle tabelle andrebbero adoperati 
con grande parsimonia, evitando il più possibile
quelli verticali, perché producono un risultato 
tipograficamente scadente.
Per ottenere tabelle di aspetto professionale,
inoltre, è meglio evitare i filetti standard di LaTeX 
e adoperare al loro posto quelli messi a
disposizione dal pacchetto `booktabs`, 
motivo per cui lo descriviamo qui come prima cosa.
Se vuoi saperne di più sui filetti standard
di LaTeX, trovi qualche altra informazione nella
[pagina di approfondimento](more-08).

`booktabs` definisce quattro tipi diversi di 
filetto, ciascuno dei quali si ottiene con 
un comando.
Questi comandi vanno dati come prima cosa 
all'inizio di una riga di tabella o debbono
seguire immediatamente un altro filetto.
I tre comandi più adoperati sono `\toprule`, 
`\midrule` e `\bottomrule`. 
Il loro nome indica chiaramente dove vanno messi
nel codice:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}

\begin{tabular}{lll}
  \toprule                       % filetto iniziale
  Animale & Cibo   & Taglia  \\
  \midrule                       % filetto intermedio
  cane    & carne  & media   \\
  cavallo & fieno  & grande  \\
  rana    & mosche & piccola \\
  \bottomrule                    % filetto finale
\end{tabular}

\end{document}
```
<!-- {% endraw %} -->

Il quarto filetto definito da `booktabs` è 
`\cmidrule`. 
Può essere adoperato per disegnare una linea 
che non copre l'intera larghezza della tabella, 
ma solo un determinato intervallo di colonne, 
che si indica come un intervallo numerico: 
`{`_<numero>_`-`_<numero>_`}`.
Dovrai indicare un intervallo anche se vuoi 
che il filetto sia largo una colonna soltanto 
(in questo caso, i due numeri saranno uguali).

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
  \cmidrule{1-2}                 % filetto che copre la prima e la seconda colonna
  cavallo & fieno  & grande  \\  
  \cmidrule{1-1}                 % filetto che copre la prima colonna
  \cmidrule{3-3}                 % filetto che copre la terza colonna
  rana    & mosche & piccola \\
  \bottomrule
\end{tabular}
  
\end{document}
```
<!-- {% endraw %} -->

`\cmidrule` presenta un'altra caratteristica
utile: puoi accorciarlo a entrambe le estremità 
con un argomento facoltativo _tra parentesi tonde_:

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

Osservando il codice, hai certamente 
indovinato che le lettere `r` e `l` 
indicano che il filetto va accorciato alla 
sua estremità destra (_**r**ight_)
e sinistra (_**l**eft_) rispettivamente.

A volte un filetto orizzontale può essere una 
separazione eccessiva tra due righe, ma ti 
accorgi che la tabella sarebbe più chiara  
distinguendole comunque in qualche modo.
In casi come questo, puoi inserire un piccolo 
spazio verticale con il comando `\addlinespace`.

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

Per unire celle orizzontali
c'è il comando `\multicolumn`, che in una 
cella va dato come prima cosa. 
`\multicolumn` prende tre argomenti:

1. il numero di celle da unire
2. l'allineamento della cella risultante
3. il contenuto della cella risultante

Il secondo argomento può contenere qualsiasi cosa
sia ammessa nel preambolo di `tabular`, ma, fa' 
attenzione, puoi metterci _un solo tipo di colonna_.

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
Nell'esempio seguente, il comando centra
le intestazioni di colonne altrimenti
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

LaTeX non permette di unire le celle in senso verticale.
Di solito, per dare al lettore l'idea corretta di 
cosa si intendesse fare basta lasciare le celle 
vuote, senza estenderle _davvero_ 
su più righe.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
  
\begin{tabular}{lll}
  \toprule
  Gruppo    & Animale  & Taglia  \\
  \midrule
  erbivoro  & cavallo  & grande  \\
            & cervo    & media   \\
            & coniglio & piccola \\
  \addlinespace
  carnivoro & cane     & media   \\
            & gatto    & piccola \\
            & leone    & grande  \\
  \addlinespace
  onnivoro  & corvo    & piccola \\
            & orso     & grande  \\
            & maiale   & media   \\
  \bottomrule
\end{tabular}
  
\end{document}
```
<!-- {% endraw %} -->

## Esercizi

Adopera la semplice tabella d'esempio all'inizio di questa lezione
per incominciare a fare qualche esperimento.
Prova differenti allineamenti con i tipi di colonna `l`, `c` e `r`.
Che cosa succede se gli elementi in una riga sono troppo pochi?
Che cosa succede se sono troppi?
Fa' delle prove con il comando `\multicolumn` per unire alcune celle.
