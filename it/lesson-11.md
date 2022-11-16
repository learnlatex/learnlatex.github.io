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
una nuova riga senza incominciare un nuovo capoverso sono _pochi_:

- alla fine di una riga di una tabella
- dentro l'ambiente `center`
- in poesia (dentro l'ambiente `verse`)

Almost always, if you are not in one of those special places, you should
_not_ use `\\`.

## Adding explicit space

We can insert a thin space (about half the normal thickness) using
`\,`. In math mode, there are also other commands: `\.`, `\:` and `\;`,
and one for a negative space: `\!`.

Very rarely, for example when creating a title page, you might need to
add explicit horizontal or vertical space. We can use `\hspace` and `\vspace`
for that.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some text \hspace{1cm} more text.

\vspace{10cm}

Even more text.
\end{document}
```

## Explicit text formatting

We wrote [in lesson 3](lesson-03) that most of the time logical structure is
preferable. But sometimes you want to make text bold, or italic, or monospaced,
etc. There are two types of command for this: ones for short pieces of text,
and ones for 'running' material.

For short bits of text, we use `\textbf`, `\textit`, `\textrm`, `\textsf`,
`\texttt` and `\textsc`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Let's have some font fun: \textbf{bold}, \textit{italic}, \textrm{roman},
\textsf{sans serif}, \texttt{monospaced} and \textsc{small caps}.
\end{document}
```

For running text, we use commands that alter the font setup; the commands
here are for example `\bfseries` and `\itshape`. Because these don't 'stop',
we need to place them in a _group_ if we want to prevent them from applying to
the whole document. LaTeX environments are groups, as are table cells,
or we can use `{...}` to make an explicit group.

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
