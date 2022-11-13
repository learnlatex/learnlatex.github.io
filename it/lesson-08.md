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
| `>{decl}` | mette `decl` prima del contenuto di ogni cella nella colonna successiva (utile, per esempio, per impostare un font differente per la colonna in questione) |
| `<{decl}` | mette `decl` dopo il contenuto di ogni cella nella colonna precedente |
| <span>`|`</span> | aggiunge un filetto verticale |
| `@{decl}` | sostituisce lo spazio tra due colonne con `decl` |
| `!{decl}` | aggiunge `decl` al centro dello spazio tra due colonne |

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

The issue is that the `l` type column typesets its contents in a single row at
its natural width, even if there is a page
border in the way. To overcome this you can use the `p` column. This
typesets its contents as paragraphs with the width you specify as an argument
and vertically aligns them at the top &ndash; which you'll want most of the
time. Compare the above outcome to the following:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

If your table has many columns of the same type it is cumbersome to put that
many column definitions in the preamble.  You can make things easier
by using `*{num}{string}`, which repeats the `string`  `num` times.
So `*{6}{c}` is equivalent to `cccccc`. To show you that it works here is the first
table of this lesson with the newly learned syntax:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Adding rules (lines)

A word of advice prior to introducing rules; lines should be used really
sparsely in tables, and normally vertical ones look unprofessional. In fact,
for professional tables you shouldn't use any of the standard lines; instead you
should get familiar with the facilities of the `booktabs` package, which is why
it is covered here first. For the sake of completeness the standard
lines are shown in the [more-info](more-08) page.

`booktabs` provides four different types of lines. Each of those commands has to
be used as the first thing in a row or following another rule.
Three of the rule commands are: `\toprule`, `\midrule`, and
`\bottomrule`. From their names the intended place of use should be clear:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

The fourth rule command provided by `booktabs` is `\cmidrule`. It can be used to
draw a rule that doesn't span the entire width of the table but only a specified
column range. A column range is entered as a number span: `{`_number_`-`_number_`}`.
Even if you only want to draw the rule for a single
column you need to specify that as a range (with both numbers matching).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

There is another useful feature of `\cmidrule`. You can shorten it on either end
with an optional argument enclosed in parentheses:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

You may have guessed that `r` and `l` mean the rule is shortened on its **r**ight
and **l**eft end, respectively.

Sometimes a rule would be too much of a separation for two rows but to get
across the meaning more clearly you want to separate them by some means. In this
case you can use `\addlinespace` to insert a small skip.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  \addlinespace
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Merging cells

In LaTeX you can merge cells horizontally by using the `\multicolumn` command. It
has to be used as the first thing in a cell. `\multicolumn` takes three
arguments:

1. The number of cells which should be merged
2. The alignment of the merged cell
3. The contents of the merged cell

The alignment can contain anything legal in a `tabular`'s preamble, but _only a
single column type_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

You can also use `\multicolumn` on a single cell to prevent the
application of whatever you defined in the table preamble for the
current column.  The following uses this method to center the
table's head row:


<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Food} & \multicolumn{1}{c}{Size} \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
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
