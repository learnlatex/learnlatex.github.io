---
layout: "lesson"
lang: "ca"
title: "Particularitats del català"
description: "Aquesta lliçó explica detalls específics referents a escriure documents LaTeX en català. Ens referim a la separació de guions i als accents."
next: "extra-01"
toc-anchor-text: "LaTeX en català"
toc-description: "Particularitats del català"
---

# Específic per al català

<span
  class="summary">Aquesta lliçó explica detalls específics referents a escriure documents LaTeX en llengua catalana. Volem insistir en què no us deixeu influir per documentació obsoleta que podeu trobar a internet i que descriuen la manera de procedir quan encara el LaTeX estava pensat exclusivament per a l'anglès.</span>

## Separació de guions

LaTeX es va escriure pensant en l'idioma anglès, i per tant hi ha molts pocs assumptes problemàtics específics a aquest idioma. El principal és la separació de guions: les tradicions anglesa i americana són diferents. LaTeX va començar fent servir els patrons americans, però es pot canviar a la manera britància utilitzant `babel`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[catalan]{babel}
\begin{document}
El text.
\end{document}
```

El paquet `babel` es cuida de modificar el que calgui per tal de respectar les normes tipogràfiques de la llengua que volgueu, especialment:
* El guionatge dels mots als finals de línia (anomenats "patrons de guionatge");
* L'espai al voltant dels signes de puntuació;
* Els títols per defecte dels annexes (taula de continguts, bibliografia, ...)

## Caràcters accentuats

Al començament del LaTeX, `é` s'escrivia amb una macro per afegir l'accent: `\'{e}` i un altre per a l'ela geminada.
**Fa molt temps que ja no cal aquesta mena de  malabarismes** atès que podem usar les tecles d'accent del teclat:
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[catalan]{babel}
\begin{document}
Faç aïrada, confús pel White Mackay, el jove prosèlit taurí, zelós apel·là i queixa asserí, grunyint d'aürt:``És burla a la història el vet!''.
\end{document}
```

De tota manera, el sistema de macros encara es pot fer servír _si calgués_, per exemple per escriure caràcters en llengües que el vostre teclat no suporta.
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[catalan]{babel}
\begin{document}
\begin{tabular}{ll}
\hline
\`{a} & accent greu \\
\'{e} & accent agut \\
\^{i} & accent circumflex \\
\"{o} & dièresi \\
\~{u} & titlla \\
\={o} & màcron \\
\.{o} & punt \\
\u{o} & accent breu\\
\v{o} & accent anticircumflex\\
\H{o} & dièresi hongaresa \\
\t{oo} &\\
\c{c} & trenc\\
\d{o} & punt superior \\
\b{o} & subratllat \\
\r{o} & anell \\
\k{o} & ogonek \\
\hline
\OE{}, \oe{} & O, E dins O \\
\AE{}, \ae{} & A, E dins A \\
\hline
\end{tabular}
\end{document}
``` 