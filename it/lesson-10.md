---
layout: "lesson"
lang: "it"
title: "Matematica"
description: "Questa lezione presenta il modo matematico di  LaTeX e come si scrivono le formule in linea e in display, le funzionalità aggiuntive fornite dal pacchetto amsmath e come si selezionano i font nella scrittura della matematica."
toc-anchor-text: "Matematica"
toc-description: "Modo matematico e notazione matematica."
---

# Matematica

<span
  class="summary">Questa lezione presenta il modo matematico di  LaTeX e come si scrivono le formule in linea e in display, le funzionalità aggiuntive fornite dal pacchetto amsmath e come si selezionano i font nella scrittura della matematica.</span>

La scrittura della matematica, da quella più semplice alle formule
più complesse, è uno dei punti di forza di LaTeX.
È possibile scrivere formule matematiche con la marcatura logica 
nel cosiddetto ‘modo matematico’.

## Modo matematico

Nel modo matematico, gli spazi vengono ignorati e viene
(quasi sempre) applicata la spaziatura
corretta tra i caratteri.

Esistono due forme del modo matematico:

* in linea
* in display

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Una frase con della matematica in linea: $y = mx + c$.
Un'altra frase con della matematica in linea: $5^{2}=3^{2}+4^{2}$.

Un secondo capoverso contenente della matematica in display.
\[
  y = mx + c
\]
Osserva in che modo il capoverso continua dopo il display.
\end{document}
```

Potresti vedere input matematici ‘simili a LaTeX’ in altri posti, 
come per esempio il sistema MathJax per inserire equazioni nelle pagine 
web. Spesso questi sistemi spesso accettano lievi variazioni nella 
sintassi di LaTeX perché ‘dietro le quinte’ non usano davvero LaTeX.

<p
  class="hint">Tutti i nostri esempi sono scritti in LaTeX <i>corretto</i>. 
  Se vedi qualcosa di diverso in un altro contesto, potrebbe essere 
  perché l'esempio non utilizza davvero LaTeX.</p>

### Modo matematico in linea e notazione matematica

Come puoi vedere sopra, il modo matematico in linea è delimitato 
da una coppia di dollari (`$...$`). 
Si può anche adoperare la notazione `\( ... \)`. 
Le espressioni semplici vengono inserite senza marcature particolari,
e osserverai che gli elementi nelle formule sono ben distanziati
tra loro e le lettere automaticamente in corsivo.

Il modo matematico in linea limita la dimensione verticale della
formula in modo da non disturbare, per quanto possibile, l'avanzamento
di riga del capoverso in cui è inserita.

Nota bene che _tutta_ la matematica dovrebbe essere inserita nel 
sorgente come tale (tra dollari) anche se si 
tratta di un solo carattere: dunque, è bene scrivere `... $2$ ...` e non 
`... 2 ...`. In caso contrario, per esempio, dovendo scrivere un 
numero negativo in modo matematico per ottenere il corretto segno
di meno, la scrittura `... $-2$ ...` potrebbe adoperare cifre 
matematiche diverse dal carattere delle altre cifre presenti 
del testo (a seconda della classe del documento). 
Al contrario, presta attenzione ai costrutti in modalità matematica 
che appaiono come testo semplice copiato da fonti terze, come valori 
monetari che adoperano `$` o nomi di file nei quali è presente `_` 
(che possono essere contrassegnati rispettivamente come `\$` e `\_`).

Si possono aggiungere facilmente esponenti e pedici marcandoli
con `^` e `_` rispettivamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un esponente $a^{b}$ e un pedice $a_{b}$.
\end{document}
```
(Potresti vedere esempi in cui esponenti e pedici semplici 
sono scritti senza parentesi graffe, ma questa non è la 
sintassi ufficiale e potrebbe non funzionare: 
per non sbagliare, metti _sempre_ le parentesi graffe.)

Esistono _tantissimi_ comandi per il modo matematico 
specialistico. Alcuni si indovinano abbastanza facilmente: 
per esempio, `\sin` per il seno, `\log` il logaritmo 
o `\theta` per la corrispondente lettera greca.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un po' di matematica: $y = 2 \sin \theta^{2}$.
\end{document}
```
Non è possibile trattare qui tutti i comandi standard 
del modo matematico di LaTeX, ma esistono numerose 
risorse online che li elencano tutti. 
Puoi cercare i comandi per i simboli matematici
tramite lo strumento 
[Detexify](https://detexify.kirelabs.org/classify.html).


### Matematica in display

Gli identici comandi adoperati per la matematica in linea
possono essere adoperati per mostrarla in display.
Un display matematico viene composto al centro della pagina per 
impostazione predefinita ed è pensato per equazioni più 
grandi che sono ‘parte di un capoverso’. 
Tieni presente che siccome gli ambienti matematici in display non 
permettono a un capoverso di terminare al loro interno, 
non sono ammesse righe vuote nel sorgente di questi ambienti.

Il capoverso dovrebbe incominciare sempre _prima_ del display, 
matematico, quindi non lasciare una riga vuota prima di esso. 
Se hai bisogno di più righe di matematica, non adoperare display
matematici consecutivi (la cosa produce una spaziatura incoerente); 
usa invece uno degli ambienti matematici ‘multiriga’ come 
`align` del pacchetto `amsmath`, descritto più avanti.

I display matematici sono particolarmente utili per formule
contenenti simboli voluminosi come gli integrali, come si vede 
nell'esempio seguente:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un capoverso che riguarda una formula voluminosa
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Osserva qui come la notazione di esponenti e deponenti 
viene adoperata per impostare i limiti dell'integrazione.

Qui abbiamo aggiunto dello spazio a mano: la scrittura `\,`
inserisce uno spazio sottile prima di `dx`, necessario
perché non si tratta di un prodotto.
La formattazione dell'operatore differenziale varia: alcuni 
editori adoperano una ‘d’ in tondo, mentre altri scelgono la 
‘_d_’ corsiva. Una soluzione pratica per gestire entrambe
le varianti nella scrittura del tuo sorgente è creare un 
comando `\diff` da regolare come richiesto, 
[come si vede qui](http://www.tug.org/TUGboat/tb41-1/tb127gregorio -matematica.pdf)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\newcommand{\diff}{\mathop{}\!d}            % Per il corsivo
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % Per il tondo
\begin{document}
Un capoverso che riguarda una formula voluminosa
\[
\int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]
\end{document}
```

Spesso bisogna numerare le formule, cosa che si può fare
automaticamente con l'ambiente `equation`. 
Riproviamo di nuovo con il solito esempio:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un capoverso che riguarda una formula voluminosa
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

Il numero dell'equazione è incrementato automaticamente e può essere 
un numero semplice, come in questo esempio, o preceduto dal numero 
della sezione in cui la formula si trova, quindi (2.5) per la quinta 
equazione della sezione 2, per esempio. 
I dettagli della formattazione vengono impostati dalla classe di 
documento e non sono descritto qui.

## Il pacchetto `amsmath`

La notazione matematica è molto ricca, il che significa che gli 
strumenti integrati nel nucleo di LaTeX non possono coprire tutto. 
Il pacchetto `amsmath` estende il supporto di base per soddisfare
molte più esigenze.
La [documentazione di `amsmath`](http://texdoc.org/pkg/amsmath)
contiene molti più esempi di quanti non possiamo mostrarne
in questa lezione.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Risolvi la seguente ricorrenza per $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

L'ambiente `align*` allinea le equazioni alle ‘e commerciali’ (`&`)
proprio come in una tabella. 
Osserva come abbiamo adoperato `\quad` per inserire un po' di spazio, 
e `\text` per inserire del testo normale all'interno del modo 
matematico. 
Abbiamo anche usato un altro comando matematico: `\binom`, 
per un binomio.

Nota che qui abbiamo adoperato `align*` e che l'equazione non è 
numerata. La maggior parte degli ambienti matematici numera le equazioni 
per impostazione predefinita, e la variante con asterisco (con un `*` dopo
il nome dell'ambiente) disabilita la numerazione.

Il pacchetto definisce anche molti altri ambienti utili, per esempio 
per le matrici.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Matrici di AMS.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

## Font in modo matematico

A differenza del testo normale, i diversi font in modo matematico spesso 
trasmettono un significato molto specifico. 
Spesso, quindi, sono scritti in modo esplicito. 
A questo punto, hai bisogno di conoscere una serie di comandi:

- `\mathrm`: romano (tondo)
- `\mathit`: corsivo, spazieggiato come testo normale
- `\mathbf`: nero
- `\mathsf`: senza grazie
- `\mathtt`: a spaziatura fissa (macchina da scrivere)
- `\mathbb`: a tratto doppio (nero da lavagna) (richiede il pacchetto `amsfonts`)

Each of these takes Latin letters as an argument, so for example we might
write a matrix as

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
The matrix $\mathbf{M}$.
\end{document}
```

Note that the default math italic separates letters so that they may
be used to denote a product of variables. Use `\mathit` to make a word italic.

The `\math..` font commands use fonts specified for math
use. Sometimes you need to embed a word that is part of the outer
sentence structure and needs the current text font, for that you can
use `\text{...}` (which is provided by the `amsmath` package) or
specific font styles such as `\textrm{..}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}

$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```


If you need to make other
symbols bold, [see the extra details](more-10).

## Esercizi

Try out some basic math mode work: take the examples and switch between
inline and display math modes. Can you see what effect this has.

Try adding other Greek letters, both lower- and uppercase. You should be
able to guess the names.

Experiment with the font changing commands: what happens when you try to
nest them?

Displayed math is centered by default; try adding the document class
option `[fleqn]` (flush
left equation) option to some of the above examples to see a different
layout. Similarly equation numbers are usually on the
right. Experiment with adding the `[leqno]` (left equation numbers)
document class option.
