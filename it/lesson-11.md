---
layout: "lesson"
lang: "it"
title: "Formattazione: font e spaziatura"
description: "Questa lezione mostra come modificare le spaziature predefinite in un documento e come aggiungere istruzioni di formattazione esplicita al codice sorgente di LaTeX."
toc-anchor-text: "Font e spaziatura"
toc-description: "Formattazione del testo per la presentazione visuale."
---

# Formattazione: testo e spaziatura

<span
  class="summary">Questa lezione mostra come modificare le spaziature predefinite in un documento e come aggiungere istruzioni di formattazione esplicita al codice sorgente di LaTeX.</span>

Abbiamo già visto che, con LaTeX, una riga vuota nel 
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

Lavorando con LaTeX, non avrai praticamente mai bisogno di andare 
a capo in modo esplicito: quasi certamente ti basterà incominciare
un nuovo capoverso con il metodo standard o con le funzionalità
di `parskip`, come hai appena visto.

Le circostanze in cui dovrai andare a capo con `\\` e incominciare
una nuova riga senza incominciare un nuovo capoverso sono _poche_:

- alla fine di una riga in una tabella
- dentro l'ambiente `center`
- in poesia (dentro l'ambiente `verse`)

Per il resto, cioè praticamente _sempre_, a meno che tu non ti 
trovi in una delle circostanze ‘speciali’, appena elencate 
non dovrai _mai_ adoperare `\\`.

## Aggiungere spazio

Possiamo inserire uno spazio sottile (circa la metà dello spessore
di uno spazio normale) con `\,`. 
Il modo matematico pevede anche altri comandi: `\.`, `\:`, `\;`
e un comando per inserire uno spazio negativo: `\!`.

Riscontrerai molto raramente la necessità di aggiungere 
dello spazio esplicito, orizzontale o verticale: tipicamente,
ciò accade nella composizione della pagina del titolo
(nell'ambiente `titlepage`).
Per farlo, puoi adoperare `\hspace` e `\vspace`, 
che agiscono sullo spazio orizzontale e verticale rispettivamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Un po' di testo \hspace{1cm} ancora testo.

\vspace{10cm}

E ancora un po' di testo.

\end{document}
```

## Formattazione esplicita del testo

Nella [lezione 3](lesson-03) abbiamo visto che 
la grande maggioranza delle volte è meglio fare 
affidamento sulla struttura logica del documento.
Qualche volta, tuttavia, è inevitabile dover 
scrivere qualche parola in nero, in corsivo, 
in carattere monospaziato, eccetera.
Per farlo, LaTeX prevede due tipi di comando: 
uno si adopera per porzioni di testo brevi o brevissime, 
che vanno messe nel suo argomento; 
l'altro, che è propriamente una _dichiarazione_, 
va dato solo all'inizio degli 
ambienti o nelle definizioni di ambienti personali.

Per brevi frammenti di testo, dunque, i comandi 
disponibili sono 
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

Negli ambienti, dunque, adopereremo comandi 
che alterano le impostazioni
del carattere corrente come, per esempio,
`\bfseries` e `\itshape`. 
Dal momento che il raggio d'azione di queste dichiarazioni non
prevede un limite predefinito, per evitare che il loro effetto 
si estenda all'intero documento, dovrai darle in un _gruppo_.
LaTeX considera gruppi gli ambienti o le celle di una tabella,
per esempio, ma la cosa più semplice è creare
un gruppo esplicitamente con `{...}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

Testo normale.

{
\itshape
Questo testo è in corsivo.

Come puoi osservare, l'effetto della dichiarazione
non è limitato a un solo capoverso.
}

\end{document}
```

In modo analogo possiamo modificare il corpo del font: 
con dichiarazioni che funzionano come quelle appena 
viste, cioè che hanno effetto a partire dal punto 
in cui vengono inserite nel sorgente.
I corpi da esse prodotti sono _relativi_ al corpo del 
font principale del documento (quello impostato nella 
dichiarazione di classe, per capirci).
Quelle più comuni, elencate dal corpo più grande a quello 
più piccolo, sono
`\huge`, `\large`, `\normalsize`, `\small` e `\footnotesize`

Nota bene che è importante terminare un capoverso
_prima_ di modificare nuovamente il corpo del font:
osserva come nell'esempio seguente abbiamo aggiunto un `\par` 
(interruzione di capoverso) esplicito.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Testo normale.

\begin{center}
  {\itshape\large Testo più grande e in corsivo.\par}
  Testo normale.
  {\bfseries\small Testo più piccolo e in nero.\par}
\end{center}

\end{document}
```

## Esercizi

Fa' delle prove con la formattazione manuale: crea un ambiente 
`titlepage` per una pagina del titolo, prova a metterci diversi 
spazi e a modificare il font.
Che cosa succede quando combini insieme più comandi per
modificare il font?
In cosa il risultato è diverso dal modo matematico?

Che cosa succede se modifichi il corpo del font di un capoverso
lungo (prova con `\tiny` e poi con `\huge`) ma _non_ scrivi
il `\par` finale prima di chiudere il gruppo?
