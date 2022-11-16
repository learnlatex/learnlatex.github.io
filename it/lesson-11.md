---
layout: "lesson"
lang: "it"
title: "Formattazione: font e spaziatura"
description: "Questa lezione mostra come modificare gli elementi di spaziatura in un documento e come aggiungere istruzioni di formattazione esplicita a al codice sorgente di LaTeX."
toc-anchor-text: "Font e spaziatura"
toc-description: "Formattazione del testo per la presentazione visuale."
---

# Formattazione: testo e spaziatura

<span
  class="summary">Questa lezione mostra come modificare gli elementi di spaziatura in un documento e come aggiungere istruzioni di formattazione esplicita al codice sorgente di LaTeX.</span>

Abbiamo già visto che, in LaTeX, una riga vuota nel 
sorgente fa incominciare un nuovo capoverso.
Ti accorgerai della cosa perché, in accordo con le comuni 
convenzioni tipografiche, il nuovo capoverso è
segnalato dal rientro della prima riga.

## Spaziatura dei capoversi

Un'altra possibilità per separare i capoversi è
mettere tra l'uno e l'altro dello spazio verticale
(una riga vuota, per capirci).
Puoi ottenere questo risultato con il pacchetto `parskip`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[parfill]{parskip}
\usepackage{lipsum} % per il testo fittizio di riempimento
\begin{document}
\lipsum
\end{document}
```

## Forzare un a capo

Lavorando con LaTeX, non avrai quasi mai bisogno di andare 
a capo esplicitamente: quasi certamente ti basterà incominciare
un nuovo capoverso con il metodo standart o con le funzionalità
di `parskip`, come hai appena visto.

Le circostanze in cui dovrai andare a capo con `\\` e incominciare
una nuova riga senza incominciare un nuovo capoverso sono _poche_:

- alla fine di una riga di una tabella
- dentro l'ambiente `center`
- in poesia (dentro l'ambiente `verse`)

Per il resto, cioè praticamente _sempre_, se non ti trovi in una 
di queste circostanze ‘speciali’, non dovrai _mai_ adoperare `\\`.

## Aggiungere dello spazio

Possiamo inserire uno spazio sottile (circa la metà dello spessore
normale) con `\,`. 
In modo matematico, ci sono anche altri comandi: `\.`, `\:` e `\;`,
e uno per inserire uno spazio negativo: `\!`.

Molto di rado, per esempio durante la composizione della pagina del titolo, 
potresti avere bisogno di aggiungere dello spazio esplicito, 
orizzontale o verticale.
Per farlo, puoi adoperare `\hspace` e `\vspace`, che aggiungono dello
spazio orizzontale e verticale rispettivamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Un po' di testo \hspace{1cm} ancora testo.

\vspace{10cm}

E ancora un po' di testo.
\end{document}
```

## Formattazione esplicita del testo esplicita

Nella [lezione 3](lesson-03) abbiamo scritto che la grande maggioranza
delle volte è meglio fare affidamento sulla struttura logica del documento.
Qualche volta, tuttavia, capita di dover mettere qualche parola in nero,
in corsivo, in carattere monospaziato, eccetera.
Per farlo, ci sono due tipi di comando: uno si adopera per porzioni di 
testo brevi o brevissime; l'altro, solo negli ambienti o nelle
definizioni di ambienti personali.

Per brevi frammenti di testo, dunque, adoperiamo 
`\textbf`, `\textit`, `\textsl`, `\textrm`, `\textsf`, 
`\texttt` e `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Divertiamoci un po' con i font: \textbf{nero}, \textit{corsivo}, 
\textsl{inclinato}, \textrm{tondo}, \textsf{senza grazie}, 
\texttt{a spaziatura fissa} e \textsc{maiuscoletto}.
\end{document}
```

Negli ambienti we use commands that alter the font setup; 
come, per esempio, `\bfseries` e `\itshape`. 

Because these don't 'stop',
dovrai darli in un _gruppo_ per evitare che il loro effetto
si estenda all'intero documento.
LaTeX considera come gruppi gli ambienti o le celle di una tabella,
per esempio, ma la cosa più semplice è creare
un gruppo esplicitamente con `{...}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

{\itshape

This text is italic.

So it this: the effect is not limited to a paragraph.

}
\end{document}
```

We can set font size in a similar way; these commands all work on an ongoing
basis. The sizes we set are relative: `\huge`, `\large`, `\normalsize`,
`\small` and `\footnotesize` are common. It's important to finish a paragraph
_before_ changing the font size back; see how we add an explicit `\par`
(paragraph break) here.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Normal text.

\begin{center}
{\itshape\large Some text\par}
Normal text
{\bfseries\small Much smaller text\par}
\end{center}

\end{document}
```

## Exercises

Experiment with manual formatting: create a `titlepage` environment and
try inserting different spaces and font changes. What happens when we
combine font changes? How does this compare to math mode?

What happens if you change the font size of a large paragraph (try with
`\tiny` then with `\huge`) but don't issue a final `\par` before closing
the group?
