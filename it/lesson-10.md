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

Si possono aggiungere facilmente esponenti e deponenti marcandoli
con `^` e `_` rispettivamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un esponente $a^{b}$ e un deponente $a_{b}$.
\end{document}
```
(Potresti vedere esempi in cui apici e pedici semplici 
sono scritti senza parentesi graffe, ma questa non è la 
sintassi ufficiale e potrebbe non funzionare: 
metti _sempre_ le parentesi graffe e non sbagli.)

Ci sono _tantissimi_ comandi per il modo matematico 
specialistico. Alcuni sono abbastanza semplici, 
per esempio `\sin` per il seno e `\log` il logaritmo, 
o `\theta` per la corrispondente lettera greca.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un po' di matematica: $y = 2 \sin \theta^{2}$.
\end{document}
```
Non possiamo trattare qui tutti i comandi standard 
del modo matematico di LaTeX, ma esistono numerose 
risorse online che li elencano tutti. 
Puoi cercare i comandi per i simboli matematici
tramite lo strumento [Detexify](https://detexify.kirelabs.org/classify.html).


### Matematica in display

You can use exactly the same commands for display math mode as for
inline work. Display math mode is set centered by default and is meant
for larger equations that are 'part of a paragraph'. Note that
display math environments do not allow a paragraph to end within the
mathematics, so you may not have blank lines within the source of the
display.

The paragraph should always be started _before_ the display so do not
leave a blank line before the display math environment. If you need
several lines of mathematics, do not use consecutive display math
environments (this produces inconsistent spacing); use one of the
multi-line display environments such as `align` from the `amsmath`
package described later.

It's particularly useful for integrations, for example:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A paragraph about a larger equation
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Notice here how sub-/superscript notation is used to set the limits on the
integration.

We've added one piece of manual spacing here: `\,` makes a thin space before the
`dx`.
Formatting of the differential operator varies: some publishers use an upright
'd' whilst others use an italic '_d_'. One way to write your source to allow you to
handle either is to create a command `\diff` that you can adjust as required,
[for example](http://www.tug.org/TUGboat/tb41-1/tb127gregorio-math.pdf)
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\newcommand{\diff}{\mathop{}\!d}            % For italic
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % For upright
\begin{document}
A paragraph about a larger equation
\[
\int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]
\end{document}
```

You often want a numbered equation, which is created using the `equation`
environment. Let's try the same example again:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A paragraph about a larger equation
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

The equation number is incremented automatically and may be a simple
number as in this example or may be prefixed by section number, so
(2.5) for the 5th equation in section 2. The details of the formatting
are set up by the document class and not described here.


## Il pacchetto `amsmath`

Mathematical notation is very rich, and this means that the tools built
into the LaTeX kernel can't cover everything. The `amsmath` package
extends the core support to cover a lot more ideas.
The [`amsmath` User Guide](http://texdoc.org/pkg/amsmath)
contains many more examples than we can show in this lesson.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Solve the following recurrence for $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

The `align*` environment makes the equations line up on the ampersands, the `&`
symbols, just like a table. Notice how we've used `\quad` to insert a bit of
space, and `\text` to put some normal text inside math mode. We've also used
another math mode command, `\binom`, for a binomial.

Notice that here we used `align*`, and the equation didn't come out numbered.
Most math environments number the equations by default, and the starred variant
(with a `*`) disables numbering.

The package also has several other convenient environments, for
example for matrices.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
AMS matrices.
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

Unlike normal text, font changes in math mode often convey very specific meaning.
They are therefore often written explicitly. There are a set of commands you need
here:

- `\mathrm`: roman (upright)
- `\mathit`: italic spaced as 'text'
- `\mathbf`: boldface
- `\mathsf`: sans serif
- `\mathtt`: monospaced (typewriter)
- `\mathbb`: double-struck (blackboard bold) (provided by the `amsfonts` package)

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
