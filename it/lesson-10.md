---
layout: "lesson"
lang: "it"
title: "Matematica"
description: "Questa lezione presenta il modo matematico di  LaTeX e insegna come si scrivono le formule in linea e in display, le funzionalità aggiuntive fornite dal pacchetto amsmath e come si selezionano i font nella scrittura della matematica."
toc-anchor-text: "Matematica"
toc-description: "Modo matematico e notazione matematica."
---

# Matematica

<span
  class="summary">Questa lezione presenta il modo matematico di  LaTeX e insegna come si scrivono le formule in linea e in display, le funzionalità aggiuntive fornite dal pacchetto amsmath e come si selezionano i font nella scrittura della matematica.</span>

La scrittura della matematica, da quella più semplice 
alle formule più complesse, è uno dei punti di forza 
di LaTeX.
È possibile scrivere formule matematiche con la 
marcatura logica nel cosiddetto ‘modo matematico’.

## Modo matematico

Nel modo matematico, LaTeX ignora gli spazi  
e applica (quasi sempre) la spaziatura
corretta tra i caratteri.

Esistono due forme del modo matematico:

* in linea
* in display (cioè, ‘in mostra’ sulla pagina)

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

Attenzione: potrebbe capitarti di vedere input matematici 
‘simili a LaTeX’ altrove, come per esempio il sistema MathJax 
per inserire equazioni nelle pagine web. 
Spesso, però, questi sistemi accettano lievi variazioni nella 
sintassi di LaTeX perché ‘dietro le quinte’, in verità 
non adoperano _davvero_ LaTeX.

<p
  class="hint">Tutti i nostri esempi sono scritti in 
  LaTeX <i>corretto</i>. 
  Se altrove vedi qualcosa di diverso, potrebbe essere 
  perché l'esempio non utilizza <i>davvero</i> LaTeX.</p>

### Modo matematico in linea e notazione matematica

Come puoi vedere nell'esempio qui sopra, il modo matematico 
in linea è delimitato da una coppia di dollari `$...$`. 
Al suo posto si può anche adoperare la notazione
equivalente `\( ... \)`. 
Le espressioni semplici si scrivono nel sorgente 
senza bisogno di marcature particolari. 
Osserva come nel documento finale i vari elementi 
delle formule sono ben distanziati tra loro e le 
lettere vengono rese automaticamente in corsivo.

Nella matematica in linea, la dimensione 
verticale delle formule è limitata in modo da 
non disturbare, per quanto possibile, 
l'avanzamento di riga del capoverso in cui 
compaiono.

Nota bene che _tutta_ la matematica dovrebbe 
essere inserita nel sorgente come tale (tra 
dollari, cioè) anche se si tratta di un solo 
carattere: dunque, è bene scrivere `... $2$ ...` 
e non `... 2 ...`. 
In caso contrario, dovendo scrivere un numero 
negativo in modo matematico per ottenere il 
corretto segno meno, per esempio, la scrittura 
`... $-2$ ...` potrebbe adoperare caratteri
matematici diversi da quelli usati per le altre 
cifre presenti nel testo (a seconda della classe 
del documento). 
Invece, fa' molta attenzione a quando copi 
simboli matematici da una fonte terza:
i simboli di valuta come `$` o i nomi 
di file nei quali è presente `_` produrranno
altrettanti errori: dovrai correggerli
scrivendo rispettivamente `\$` e `\_`.

Si possono aggiungere facilmente esponenti e 
pedici marcandoli con `^` e `_` rispettivamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Un esponente $a^{b}$ e un pedice $a_{b}$.

\end{document}
```
(Qua e là nella rete troverai facilmente esempi 
in cui esponenti e pedici semplici sono scritti 
senza parentesi graffe, ma questa non è la 
sintassi ufficiale e potrebbe non funzionare: 
per non sbagliare, mettile _sempre_.)

Esistono _numerosissimi_ comandi per scrivere
la matematica specialistica.
Il significato di alcuni di essi si indovina 
abbastanza facilmente: per esempio, `\sin` 
per il seno, `\log` per il logaritmo 
o `\theta` per la corrispondente lettera greca.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Un po' di matematica: $y = 2 \sin \theta^{2}$.

\end{document}
```
Non è possibile descrivere qui _tutti_ i comandi 
standard del modo matematico di LaTeX, ma esistono 
numerose risorse on-line complete. 
Infine, puoi sempre cercare i comandi per i simboli 
matematici con lo strumento 
[Detexify](https://detexify.kirelabs.org/classify.html).


### Matematica in display

Gli identici comandi adoperati per la matematica 
in linea possono essere adoperati per mostrarla 
in display.
Per impostazione predefinita, un display matematico 
viene composto al centro della pagina ed è pensato 
per equazioni più grandi che sono ‘parte di un capoverso’. 
Tieni presente che siccome gli ambienti matematici 
in display non possono contenere la fine di un capoverso, 
non sono ammesse righe vuote al loro interno.

Il capoverso dovrebbe incominciare sempre _prima_ del display, 
matematico, quindi non lasciare una riga vuota prima. 
Se hai bisogno di più righe di matematica, non adoperare display
matematici consecutivi (la cosa produce una spaziatura incoerente), 
ma uno degli ambienti matematici ‘multiriga’ come 
`align` del pacchetto `amsmath`, descritto più avanti.

I display matematici sono particolarmente utili per formule
contenenti simboli voluminosi come gli integrali, come si vede 
nell'esempio seguente:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Un capoverso che riguarda una formula voluminosa:
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]

\end{document}
```

Osserva in che modo esponenti e deponenti 
vengono adoperati per impostare i limiti dell'integrazione.

Qui abbiamo aggiunto dello spazio a mano: la scrittura `\,`
inserisce uno ‘spazio sottile‘ prima di `dx`, necessario
perché non si tratta di un prodotto.
La formattazione dell'operatore differenziale varia: alcuni 
editori adoperano una ‘d’ in tondo, mentre altri scelgono la 
‘_d_’ corsiva. 
Una soluzione pratica per gestire entrambe le varianti 
è definire un comando `\diff`, da regolare a seconda delle
necessità, 
[come si vede qui](http://www.tug.org/TUGboat/tb41-1/tb127gregorio -matematica.pdf):

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand{\diff}{\mathop{}\!d}            % Per il corsivo
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % Per il tondo

\begin{document}

Un capoverso che riguarda una formula voluminosa:
\[
\int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]

\end{document}
```

Spesso nei documenti si richiedono formule
numerate, cosa che si può fare
automaticamente con l'ambiente `equation`. 
Riproviamo di nuovo con il solito esempio:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Un capoverso che riguarda una formula voluminosa:
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}

\end{document}
```

Il numero dell'equazione è incrementato automaticamente 
e può essere un numero semplice, come in questo esempio, 
oppure preceduto dal numero della sezione in cui la formula 
si trova, quindi (2.5) per la quinta equazione della sezione 
2, per esempio. 
I dettagli della formattazione vengono impostati dalla 
classe di documento e non sono descritti qui.

## Il pacchetto `amsmath`

La notazione matematica è molto ricca, il che 
significa che gli strumenti integrati nel nucleo 
di LaTeX non possono coprire _tutte_ le necessità. 
Il pacchetto `amsmath` estende il supporto di base 
per soddisfare molte più esigenze.
La [documentazione di `amsmath`](http://texdoc.org/pkg/amsmath)
contiene molti più esempi di quanti non possiamo 
mostrarne in questa lezione.

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

L'ambiente `align*` allinea le equazioni alle 
‘e commerciali’ (`&`) proprio come in una tabella. 
Osserva come abbiamo adoperato `\quad` per inserire 
un po' di spazio e `\text` per inserire del testo 
normale all'interno del modo matematico. 
Abbiamo anche usato un altro comando matematico: 
`\binom`, per un binomio.

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
La matrice $\mathbf{M}$.
\end{document}
```

Si noti che il corsivo matematico predefinito separa le lettere 
per poterle adoperare per denotare un prodotto di variabili. 
Per scrivere una parola in corsivo, adopera `\mathit`.

I comandi per i font matematici del tipo `\math..` font caricano 
font specifici per la matematica. A volte è necessario incorporare 
una parola che fa parte della struttura esterna della frase e richiede 
il carattere del testo corrente. Per questo è possibile adoperare 
`\text{...}` (richiede `amsmath`) o stili di carattere specifici 
come `\textrm{..}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}

$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```

Se ti servono altri simboli in nero, leggi come fare
[nella lezione di approfondimento](more-10).

## Esercizi

Prova a lavorare un po' in modo matematico di base: prendi gli esempi 
di questa lezione e passa dal modo in linea a quello in display. 
Riesci a vedere le differenze?

Prova ad aggiungere altre lettere greche, sia minuscole sia maiuscole. 
Dovresti essere in grado di indovinarne i nomi.

Fa' delle prove con i comandi per cambiare font: che cosa succede 
quando provi ad annidarli?

La matematica in display è centrata per impostazione predefinita; 
prova ad aggiungere l'opzione di classe `[fleqn]` 
(allinea le equazioni a sinistra) ad alcuni degli esempi precedenti 
per vedere una disposizione diversa. Analogamente, i numeri delle equazioni 
sono di solito a destra. 
Prova ad aggiungere l'opzione di classe `[leqno]` 
(mette i numeri delle equazioni a sinistra).
