---
layout: "lesson"
lang: "it"
title: "Di più su: Citazioni e riferimenti bibliografici"
description: "Questa lezione fornisce maggiori dettagli sulle bibliografie in lingua diversa dall'inglese, su come trasformare i riferimenti bibliografici in collegamenti ipertestuali ed evidenzia le principali differenze tra gli stili di BibTeX."
toc-anchor-text: "Di più su: Citazioni e riferimenti bibliografici"
---

## Ordinamento alfabetico per lingue diverse dall'inglese

Il programma BibTeX è stato scritto in primo luogo
per occuparsi di riferimenti bibliografici in lingua 
inglese.
Per questo motivo, presenta importanti limiti nella 
gestione dei caratteri accentati, ed è ancora più 
limitato con quelli di alfabeti non latini.
Biber, invece, è stato scritto da zero
per gestire correttamente tutte le lingue, anche quando
si trovano mescolate in una stessa bibliografia.

Ciò significa che se devi comporre una bibliografia
e ordinarne i riferimenti in un ordine diverso
da quello inglese, dovresti adoperare 
`biblatex` + Biber e non `natbib` + BibTeX.

## Collegamenti ipertestuali

Caricando il pacchetto `hyperref` (come descritto 
[in una lezione precedente](more-09)), 
alcuni elementi della bibliografia verranno
trasformati automaticamente in collegamenti
ipertestuali.
La cosa è particolarmente utile per URL e DOI.

## Differenze tra gli stili di BibTeX e buone pratiche

Sebbene la sintassi generale dei file `.bib` sia
sostanzialmente identica tanto per BibTeX quanto
per `biblatex`, l'insieme dei campi ammessi (quelli
che poi verranno adoperati dallo stile) dai
diversi record e il loro significato esatto non 
solo possono variare tra i due programmi, ma anche 
tra diversi stili di BibTeX. 
Quasi tutti gli stili hanno in comune un ampio 
insieme di record e campi fondamentali, ma alcuni 
campi differiscono tra loro.

Prendiamo l'URL, per esempio.
Alcuni vecchi stili BibTeX `.bst` (in particolare 
gli stili BibTeX ‘standard’ come `plain.bst`, 
`unsrt.bst`, eccetera) sono antecedenti 
all'invenzione dell'URL e non prevedono un campo
dedicato a una risorsa on-line. 
Per risolvere il problema si può indicare 
l'URL nel campo `howpublished`.
Gli stili più recenti, invece, prevedono il
campo `url` e non presentano alcun problema.

Per poter sfruttare appieno il potenziale dello 
stile che hai scelto, dunque, dovrai scoprire 
i campi che ammette e la loro semantica.

