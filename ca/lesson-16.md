---
layout: "lesson"
lang: "ca"
title: "Accedir a la documentació i obtenir ajuda"
description: "En aquesta lliçó s'explica les principals maneres de documentar-se per als paquets i aplicacions relacionats amb LaTeX, i com cercar ajuda quan tens un dubte."
toc-anchor-text: "Ajuda i documentació"
toc-description: "Accedir a l'ajuda i a la documentació."
---

# Documentació i obtenir ajuda

<span
  class="summary">En aquesta lliçó s'explica les principals maneres de documentar-se per als paquets i aplicacions relacionats amb LaTeX, i com cercar ajuda quan tens un dubte.</span>

Hi ha diferents maneres per accedir a la documentació d'un paquet o classe.

## `texdoc`

Si has instal·lat una distribució TeX (_per exemple_, TeX Live o MiKTeX) i has inclòs la documentació en el procés d'instal·lació, pots accedir-hi amb l'eina de línia de comanda `texdoc`. Usant:

`texdoc` < _pkg_ >

se t'obrirà el paquet de documentació `<pkg>`. Aquesta utilitat cerca la documentació disponible i obre allò que creu que és la coincidència més bona al teu criteri de cerca. Podràs llistar i escollir entre tots els resultats possibles que s'han trobat utilitzant:

`texdoc -l` < _pkg_ >

## texdoc.org

Aquesta [pàgina web](https://texdoc.org/) funciona de manera similar a la utilitat `texdoc`. Pots cercar la documentació que tenen disponible igual que ho faries amb `texdoc -l` i escollir algun dels resultats.

## CTAN

[CTAN](https://www.ctan.org) és l'arxiu de documentació 'Comprehensive TeX Archive Network'. La major part dels paquets LaTeX es publiquen aquí. Pots cercar en el lloc web per un paquet i accedir a la documentació. Habitualment els paquets es guarden a `ctan.org/pkg/<pkg-name>` i pots accedir al README i a la documentació dels paquets que es guarden a CTAN.

## Llibres sobre LaTeX

Hi ha diversos llibres disponibles que et poden ajudar per aprendre LaTeX. Com a principiant, pots aprendre molt a partir d'una guia estructurada per a principiants, doncs pots trobar-hi molts més detalls dels que cobrim en aquest tutorial. També podràs accedir a un manual de referència amb molt més detall i recomanacions.

L'equip de LaTeX té una [llista de llibres](https://www.latex-project.org/help/books/) escrits pels seus membres. El més destacat és la [guia oficial de Lamport](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838) i el detallat [LaTeX Companion](https://www.informit.com/store/latex-companion-9780201362992).

Altres llibres que et poden ajudar a aprendre LaTeX són

- [_Guide to LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714) per Helmut
  Kopka i Patrick Daly: disponible com a e-book
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/) per Nicola Talbot: disponible com a e-book gratuït i una edició impresa de baix cost
- [_Using LaTeX to write a PhD thesis_](https://www.dickimaw-books.com/latex/thesis/) per Nicola Talbot: disponible com a e-book gratis i una edició impresa de baix cost
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide)   per Stefan Kottwitz: disponible com a e-book i edició impresa
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154) per Marc van Dongen: disponible com a e-book gratis i una edició impresa de baix cost

## Obtenir ajuda

Hi ha diversos fòrums online per demanar ajuda sobre qüestions relacionades amb LaTeX; potser el més conegut és [TeX - LaTeX StackExchange](https://tex.stackexchange.com). Sempre que demanis una pregunta, primer de tot hauries de tenir el teu exemple ben clar: el que s'anomena 'minimal working example' (MWE). Això no vol dir que el codi funcioni (si no no faries la pregunta!) sinó que has fet tot el possible per fer que el dubte sigui clar, auto-contingut i mínim, que vol dir que només has de tenir les línies de codi necessàries per mostrar el problema.

### Com proporcionar un 'minimal working example' (MWE)

Com pots obtenir un MWE? Normalment el més fàcil és començar per

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text
\end{document}
```

i afegir línies una per una fins que sorgeix el problema. Pots provar també de partir del teu exemple real i anar reduint-lo, però aquest pot ser un procés llarg.

<p class="hint">Si necessites més text per provocar un salt de línia i altres efectes, pots utilitzar paquets com <code>lipsum</code> per generar paràgrafs i text sense sentit i mantenir el teu fitxer ben curt.</p>


### Fitxer de log

Una opció que sempre tindràs disponible és accedir al fitxer log; el crea LaTeX cada vegada que compiles, i té el mateix nom que el teu document, però amb extensió `.log`.

En el fitxer de log sempre podràs veure el llistat complet de tots els errors. Els missatges d'error de LaTeX intenten ser d'ajuda, però no són igual que els missatges que trobem en un processador de text.

<p class="hint">Alguns editors també fan difícil de veure el missatge complet d'un error, i poden amagar els detalls clau.</p>

Si tens algun problema, els usuaris experts de LaTeX et podrien demanar una còpia del teu fitxer log.

### Anar més enllà

Finalment oferim una [galeria de petits exemples](./extra-01) que mostren una ampla varietat de temes que no hem pogut cobrir en aquesta introducció, i els diferents paquets de LaTeX que utilitzen.
