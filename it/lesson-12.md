---
layout: "lesson"
lang: "it"
title: "Citazioni e riferimenti bibliografici"
description: "Questa lezione insegna le nozioni fondamentali sulle basi di dati bibliografici. Imparerai come costruire i tuoi database bibliografici personali e come adoperarli nei documenti con i due principali metodi disponibili."
toc-anchor-text: "Citazioni e riferimenti bibliografici"
toc-description: "Lavorare con i database bibliografici."
---

# Citazioni e riferimenti bibliografici

<script>
runlatex.preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<span
  class="summary">Questa lezione insegna le nozioni fondamentali sulle basi di dati bibliografici. Imparerai a costruire i tuoi database bibliografici personali e ad adoperarli nei documenti con i due principali metodi disponibili.</span>

Le fonti (o _riferimenti bibliografici_) delle citazioni 
bibliografiche presenti nel tuo lavoro possono essere 
inserite nel documento direttamente, ma in linea generale 
ti consigliamo di scriverle in uno o più file esterni. 
Un file del genere si chiama _base di dati bibliografici_ 
(o _database bibliografico_) e contiene le informazioni 
in un formato facile da trattare per LaTeX.
Avere a disposizione uno o più di questi database ti 
permetterà di riutilizzare le informazioni in essi
contenute, evitando di formattare il documento a mano.

## Basi di dati bibliografici

Nel gergo di LaTeX, un database bibliografico è un 
‘file BibTeX’, con estensione `.bib`. 
Questi file contengono una o più voci (chiamate 
anche _record bibliografici_) ciascuna corrispondente
a una fonte. 
Ogni record contiene una serie di _campi_ da riempire
con delle informazioni.
Vediamone un esempio insieme.

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}

@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->

Il codice qui sopra contiene un record di tipo `article` 
(cioè, un articolo apparso in una rivista) e un record 
di tipo `book` (cioè, un libro vero e proprio): sono di 
gran lunga i record più comuni. 
Come puoi osservare, ogni tipo di record incomincia con 
`@` e le informazioni a completamento dei campi (come
`author` e `title`, per esempio), vanno date tra
parentesi graffe dopo il segno di `=`.

I campi sono tutti nel formato `chiave=valore`, tranne 
la cosiddetta ‘chiave’, cioè il ‘nome’ che assegnerai
al record e che scriverai come argomento del comando 
di citazione.
Come chiave puoi scrivere quello che vuoi, dato che è 
una semplice etichetta, ma nell'esempio abbiamo scelto 
il cognome dell'autore seguito dall'anno di 
pubblicazione (`Thomas2008`, per esempio): è una soluzione 
comune ed efficace.

I campi esatti da riempire dipendono dal tipo di record, 
ma la grande maggioranza di essi sono abbastanza ovvi. 
Se hai osservato il codice con attenzione, ti sarai 
accorto che nel campo `author` ogni voce è separata 
dall'altra con `and`. 
Ciò è _essenziale_: il formato del PDF composto ha 
bisogno di conoscere gli autori uno per uno. 
Come hai notato, anche nel titolo dell'articolo
alcune voci sono ulteriormente tra parentesi 
graffe: è una buona pratica per evitare sorprese 
indesiderate nelle maiuscole e nelle minuscole 
durante la composizione.

Modificare a mano un file `.bib` è piuttosto noioso, 
perciò la maggior parte degli utenti gestisce le 
bibliografie con un editor dedicato.
[JabRef](https://www.jabref.org) è largamente usato 
ed è multipiattaforma, ma ne esistono molti altri.
Se il riferimento bibliografico contiene un DOI 
(_Digital Object Identifier_), puoi provare 
[doi2bib](https://doi2bib.org) per ottenere facilmente 
il record in formato BibTeX.
Ma non dimenticarti di verificare che il record sia 
corretto e contenga tutte le informazioni che ti servono!

In questa lezione adopereremo per le nostre 
dimostrazioni il breve database bibliografico 
dell'esempio precedente: lo abbiamo registrato con 
il nome `learnlatex.bib`.

## Trasferire le informazioni dal database al documento

Per trasferire le informazioni dal database 
bibliografico al tuo documento, i passaggi 
da seguire sono tre.

1. Innanzitutto, devi comporre il tuo lavoro con 
LaTeX una prima volta: nella cartella di lavoro 
comparirà un file contenente la lista dei 
riferimenti bibliografici citati nel documento.
2. Poi, devi eseguire un programma che estrae dal 
database i riferimenti delle citazioni
presenti nel documento e le mette in ordine
(a questo punto della composizione, le citazioni
nel documento compaiono in una forma provvisoria:
non preoccupartene).
3. Infine, devi comporre nuovamente il documento, 
in modo che LaTeX possa adoperare queste 
informazioni per ‘risolvere’ le citazioni.

Di solito, per risolvere tutti i riferimenti 
bastano due composizioni consecutive.

Per quanto riguarda il secondo passaggio, ci sono 
due programmi diffusamente adoperati: BibTeX e Biber. 
Biber si adopera sempre e solo in coppia con il 
pacchetto `biblatex`, mentre BibTeX si adopera o 
senza pacchetti o con il pacchetto `natbib`.

L'esecuzione di un secondo strumento oltre a LaTeX 
viene gestita in modi diversi dai diversi editor. 
Per i nostri esempi on-line, alcuni script fanno 
tutto e in una volta sola, lavorando ‘dietro le quinte’. 
Il tuo editor potrebbe avere un singolo pulsante 
del tipo ‘fai ...’ oppure potresti scegliere di 
eseguire BibTeX o Biber a mano tra un'esecuzione e 
l'altra di LaTeX.

L'aspetto delle citazioni (nel corpo del documento) 
e dei riferimenti bibliografici (nella sezione
_Bibliografia_ che sta di solito alla fine) 
è indipendente dal database BibTeX ed è 
definito da ciò che si chiama ‘stile’. 
Vedremo che gli stili funzionano in modo leggermente 
diverso a seconda che si adoperi BibTeX o `biblatex`, 
ma il concetto di fondo rimane: possiamo scegliere 
l'aspetto delle citazioni nel documento.

## Il flusso di lavoro con BibTeX + `natbib`

Sebbene sia possibile inserire citazioni 
bibliografiche in un documento LaTeX senza caricare 
alcun pacchetto, i limiti della cosa diventano
presto evidenti.
Qui adopereremo il pacchetto `natbib`, che permette 
di creare diversi tipi di citazione e mette a 
disposizione dell'utente numerosi stili.

L'esempio seguente mostra la struttura di base 
del nostro sorgente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{natbib}

\begin{document}

La galleria di esempi matematici è presa da \citet{Graham1995},
mentre c'è un po' di chimica in \citet{Thomas2008}.

Alcune citazioni tra parentesi: \citep{Graham1995}
e \citep[p.~56]{Thomas2008}.

\citep[Vedi][pp.~45–48]{Graham1995}

Citazione multipla: \citep{Graham1995,Thomas2008}.

\bibliographystyle{plainnat} % stile delle citazioni nel corpo del documento
\bibliography{learnlatex}    % database bibliografico senza l'estensione .bib

\end{document}
```

Come puoi osservare, si possono citare le diverse fonti
presenti nel database bibliografico mediante la loro
chiave.
Il pacchetto `natbib` definisce due stili
di citazione: lo stile testuale (comando `\citet`) 
e lo stile tra parentesi (comando `\citep`).
Lo stile dei riferimenti si seleziona con il comando
`\bibliographystyle`: qui abbiamo scelto `plainnat`.
Infine, la bibliografia vera e propria è inserita
nel documento con il comando `\bibliography`, 
nel cui argomento va scritto il nome con cui 
si è registrato il database bibliografico 
_senza l'estensione_ .bib`.
Se i database sono più d'uno, vanno elencati 
separandoli con la virgola.

Eventuali riferimenti al numero di pagina possono 
essere aggiunti alle citazioni bibliografiche come 
argomento facoltativo.
Se gli argomenti facoltativi sono due, il primo 
verrà stampato prima della citazione (di solito 
serve per brevi note) e il secondo, con il riferimento
alle pagine, dopo l'etichetta.

Le impostazioni qui sopra adoperano lo stile autore-anno.
ma si può scegliere anche lo stile numerico: basta
passare a `natbib` l'opzione `numbers`.

## Il flusso di lavoro con `biblatex`

Il pacchetto `biblatex` lavora in modo leggermente 
diverso da `natbib`, dato che database bibliografico 
e stile di citazione si specificano _nel preambolo_, 
mentre nel corpo del documento va dato solo il comando 
per stampare la bibliografia.
Ecco i comandi nuovi che dovrai imparare.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[style=authoryear]{biblatex} % impostazioni di biblatex
\addbibresource{learnlatex.bib}         % database bibliografico con l'estensione .bib

\begin{document}

La galleria di esempi matematici è presa da \autocite{Graham1995}.

Alcune citazioni più complesse: \parencite{Graham1995} o
\textcite{Thomas2008} o anche \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[See][45-48]{Graham1995}

Citazione multipla: \autocite{Thomas2008,Graham1995}.

\printbibliography % questo comando stampa la bibliografia

\end{document}
```

Osserva che `\addbibresource` richiede il nome del 
database _completo dell'estensione_, che invece 
va omessa nell'argomento di `\bibliography` di `natbib`. 
Ancora, nota che `biblatex` adopera nomi piuttosto 
lunghi per i suoi comandi di citazione, il cui 
significato è tuttavia abbastanza facile da indovinare.

Di nuovo, si possono inserire brevi testi prima e 
dopo la citazione mediante gli argomenti facoltativi.
Osserva che l'indicazione del numero delle pagine 
_non_ richiede esplicitamente di scrivere `p.~` o `pp.~`: 
`biblatex` aggiunge automaticamente quanto serve.

Con `biblatex`, lo stile di citazione va 
specificato come opzione al pacchetto, nel preambolo.
Qui abbiamo scelto `authoryear`, ma sono 
disponibili anche lo stile `numeric` e molti altri.

## Scegliere tra BibTeX e `biblatex`

Sebbene entrambi i flussi di lavoro appena descritti 
(il flusso di BibTeX e quello di `biblatex`) ricevano 
come input un file con estensione `.bib` e siano in
grado di generare un risultato composto strutturalmente 
simile, il modo in cui ci arrivano è completamente
diverso. 
In altre parole, tra i due approcci esistono alcune 
differenze che possono aiutarti a scegliere quale va 
meglio _per te_.

Nel flusso di lavoro di BibTeX, lo stile della 
bibliografia viene deciso in ultima analisi da un 
file `.bst` che si seleziona con il comando 
`\bibliographystyle`. 
`biblatex` non adopera i file `.bst` e, inoltre, 
usa un sistema diverso. 
Se stai usando un modello che viene fornito con 
un file `.bst` o ti viene fornito un file `.bst` 
per il tuo progetto, _devi_ adoperare BibTeX e 
non puoi usare `biblatex`.

Il diverso approccio adottato da `biblatex` implica 
che sia possibile modificare il risultato prodotto 
dai comandi per la bibliografia e per le citazioni 
direttamente dal preambolo del documento tramite 
comandi basati su LaTeX. 
Le modifiche degli stili `.bst` di BibTeX, 
da parte loro, di solito richiedono di lavorare con 
questi file esterni e la conoscenza 
del linguaggio di programmazione BibTeX. 
In generale, si dice che `biblatex` sia più facile 
da personalizzare rispetto a BibTeX.

In `biblatex` è generalmente più semplice 
implementare stili di citazione più elaborati con 
una gamma più ampia di comandi di citazione diversi. 
Offre anche funzionalità più dipendenti dal contesto. 
In parole povere, questo è meno interessante per gli 
stili comuni in molti argomenti STEM, ma diventa 
rilevante per alcuni stili più complessi in alcune 
aree delle discipline umanistiche.

BibTeX è in grado di mettere nel corretto ordine 
alfabetico solo i caratteri US-ASCII e si affida 
a soluzioni alternative per i caratteri non coperti 
da questa codifica. 
Con Biber (il motore di composizione bibliografica a
cui `biblatex` si appoggia), `biblatex` offre 
funzionalità di ordinamento Unicode complete, il che
lo rende di solito una scelta migliore per lavorare
con bibliografie in lingue diverse dall'inglese o
che richiedono caratteri non ASCII.

Essendo in circolazione da molto più tempo di 
`biblatex`, il flusso di lavoro BibTeX è più 
consolidato, il che significa che molti editori 
e redazioni di riviste si aspettano bibliografie 
generate con BibTeX. 
Tali editori non possono o generalmente non 
accettano file che adoperano `biblatex`.

La conclusione è: se devi inviare a una redazione
di rivista o a un editore, controlla le linee guida 
e le indicazioni che sicuramente ti verranno date. 
Se ti viene fornito un file `.bst`, _devi_ adoperare 
BibTeX. 
Se desideri una bibliografia e uno stile di citazione 
relativamente semplici e i riferimenti presenti nel
tuo database sono conformi alla codifica US-ASCII 
inglese, BibTeX dovrebbe essere sufficiente. 
Se hai bisogno di uno stile di citazione più complesso, 
se le tue fonti sono in lingue diverse dall'inglese
o desideri poter personalizzare gli stili di citazione
e l'aspetto della bibliografia con relativa facilità,
allora ti consigliamo di prendere in considerazione 
`biblatex`.

## Esercizi

Prova entrambi gli esempi di `natbib` e `biblatex`. 
Per `natbib`, dovrai eseguire nell'ordine LaTeX, 
BibTeX, LaTeX, LaTeX; per `biblatex`, la sequenza 
è LaTeX, Biber, LaTeX. 
Scopri come farlo nel tuo editor o prova le
funzionalità automatiche di Overleaf e TeXLive.net.

Osserva che cosa succede quando crei nuovi record 
bibliografici e nuove citazioni. 
Aggiungi una citazione che non è nel database e 
guarda come appare nel documento composto. 
Fa' delle prove con le opzioni `numeric` di `natbib` 
e `style=numeric` di `biblatex`.
