---
layout: "lesson"
lang: "ca"
title: "Cites i referències bibliogràfiques"
description: "Aquesta lliçó explica les bases de les referències bibliogràfiques. Aprendràs a construir la teva pròpia base de dades i com utilitzar-les en documents utilitzant algun dels dos mètodes principals disponibles."
toc-anchor-text: "Cites i referències bibliogràfiques"
toc-description: "Treballar amb bases de dades bibliogràfiques."
---

# Cites i referències bibliogràfiques

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
  class="summary">Aquesta lliçó explica les bases de les referències bibliogràfiques. Aprendràs a construir la teva pròpia base de dades i com utilitzar-les en documents utilitzant algun dels dos mètodes principals disponibles.</span>

Per fer cites bibliogràfiques, encara que podries incloure les referències directament de les fonts, normalment s'agafarà aquesta informació d'un o més arxius externs. Aquests arxius són bases de dades de referències que contenen informació en un format de fàcil tractament. Utilitzar una o més bases de dades de referències et permetrà reutilitzar la informació i t'evitarà haver d'afegir-la manualment.

## Bases de dades de referències bibliogràfiques

Les bases de dades de referències es coneixen normalment com a 'fitxers BibTeX' i tenen extensió `.bib`. Per cada referència contenen una o més entrades, que inclouen diferents camps. Anem a veure un exemple.

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


Això és una entrada d'un article i una altra entrada d'un llibre; són sens dubte els tipus més comuns. Cada entrada a la base de dades comença amb `@`, com es veu, i tota la informació queda abarcada per les claus.

Els diferents camps que conté són parelles clau-valor, excepte el primer camp, que es correspon amb el que s'anomena la 'clau': el 'nom' del registre. Pots posar el que vulguis, doncs tan sols és una etiqueta, i en aquest cas hem escollit utilitzar el nom de l'autor i l'any: és una elecció habitual.

Els camps que es necessita especificar dependrà del tipus de registre, però la majoria dels camps són bastant obvis. Potser hauràs notat que en el camp `author` cada autor està 
separat per la partícula `and`. Això és _essencial_: l'arxiu _final_ necessita conèixer qui és cadascun dels autors. Potser hauràs notat igualment que en el títol de l'article algunes parts estan entre claus. Les claus s'utilitzen per evitar que s'apliqui un canvi de majúscules o minúscules.

Editar manualment els arxius `.bib` és bastant tediós, i per això la majoria de la gent utilitza un editor específic. [JabRef](https://www.jabref.org) s'utilitza àmpliament i és multiplataforma, però hi ha altres aplicacions disponibles. Si la referència conté un DOI (Identificador d'Objecte Digital), potser voldràs probar [doi2bib](https://doi2bib.org) per tal d'obtenir fàcilment el registre BibTeX. Però abans que res assegura't de disposar de la informació correcta!

Aquí utilitzarem, per als exemples que segueixen, la senzilla base de dades que hem definit més amunt: l'hem 'guardat' en el fitxer `learnlatex.bib`.

## Transferint informació des de la base de dades

Per tal de què la informació bibliogràfica es transmeti al teu document, s'han de seguir tres etapes. En primer lloc compilaràs el teu document amb LaTeX, i en aquesta etapa es crea l'arxiu amb la llista de les referències citades en el document. En segon lloc s'haurà d'executar un programa que llegeix la informació de la base de dades, es selecciona les que utilitzes i les ordena. Finalment tornaràs a compilar el document, i d'aquesta forma LaTeX podrà utilitzar la informació obtinguda per posar referències a les teves cites. Normalment es necessitarà compilar almenys dues vegades per tal d'obtenir totes les referències del document.

Per al segon pas, són dos els sistemes que s'utilitzen habitualment: BibTeX i Biber. Biber només es pot utilitzar amb el paquet `biblatex`, mentre que BibTeX s'utilitza amb el paquet `natbib` o bé amb cap.

Utilitzar una segona eina, juntament amb LaTeX, es gestiona de diferents maneres segons els diferents editors. Per als nostres exemples en línia hi ha una sèrie de scripts en segon pla que fan tota la feina de cop. El teu editor pot tenir un simple botó 'executa', o potser et deixarà escollir entre BibTeX o Biber manualment quan compiles LaTeX.

El format de les cites i referències és independent de la teva base de dades BibTeX i es configura amb el que es coneix com 'estil'. Veurem que això funciona de forma lleugerament diferent en els paquets `natbib` i `biblatex`, però la idea és la mateixa: podem elegir com es presenten les cites.

## El procés de treball BibTeX amb `natbib`

Encara que és possible inserir cites a un document de LaTeX sense carregar cap paquet, seria una opció força limitada. Millor utilitzar el paquet `natbib`, que ens permetrà crear diferents tipus de cites i té molts estils disponibles.

L'estructura bàsica del nostre document es mostra en aquest exemple.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{natbib}

\begin{document}
L'exemple de matemàtiques està extret de \citet{Graham1995}, mentre que
també hi ha un exemple de química \citet{Thomas2008}.

Exemple de citacions entre parèntesi: \citep{Graham1995}
i també \citep[p.~56]{Thomas2008}.

\citep[See][pp.~45--48]{Graham1995}

Ho posem junt \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

Pots veure que podem citar diferents entrades de la base de dades donant la seva clau. El paquet `natbib` disposa de dos estils de cites: les cites textuals i les cites entre parèntesi, `\citet` i `\citep`, respectivament. L'estil de referència es selecciona en la línia `\bibliographystyle`; en el nostre exemple és l'estil `plainnat`. S'afegeix la bibliografia gràcies a la línia `\bibliography` que pren com a argument la base de dades utilitzada; si són vàries, els seus noms estan separats per comes.

Es pot afegir una referència a la pàgina d'un registre, utilitzant un argument opcional. Si donem dos arguments opcionals, el primer es posarà davant de l'etiqueta de la cita com una petita nota; i el segon anirà darrera l'etiqueta com una referència de pàgina.

La configuració del nostre exemple utilitza l'estil autor-any, però podem fer ús de les cites enumerades. Això s'aconsegueix afegint l'opció `numbers` en la línia corresponent a `natbib`.

## El procés de treball amb `biblatex`

El paquet `biblatex` funciona una mica diferent que `natbib`, ja que encara que les cites apareixen en el cos del document, la base de dades es selecciona en el preàmbul. Per fer-ho hi ha diferents comandes.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % fitxer amb la informació de referència

\begin{document}
L'exemple de matemàtiques està extret de \autocite{Graham1995}.

Algunes citacions més complexes: \parencite{Graham1995} o
\textcite{Thomas2008} o possiblement \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[See][45-48]{Graham1995}

Ho posem junt \autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

Fixa't que `\addbibresource` _necessita_ conèixer el nom del fitxer de tota la base de dades, a diferència del que passava amb `natbib`, on podíem ometre l'extensió `.bib` quan utilitzàvem `\bibliography`. Fixa't igualment que `biblatex` utilitza noms més llargs per a les comandes de cites, però d'altra banda és més fàcil endivinar quin és el seu ús.

Igual que abans, es pot afegir un petit text abans i després de la cita utilitzant els arguments opcionals. Fixa't que ara no es necessiten els prefixos `p.~` o `pp.~` per citar les pàgines, `biblatex` afegeix automàticament el prefix adequat.

A `biblatex`, es selecciona l'estil de referència en carregar el paquet. En aquest exemple hem utilitzat `authoryear`, però existeix també un estil `numeric` i també hi ha disponibles d'altres estils.

## Exercicis

Experimenta els exemples que se't proposen tant amb el paquet `natbib` com `biblatex`. Amb `natbib` necessitaràs executar LaTeX, després BibTeX, LaTeX i un altre cop LaTeX; amb `biblatex` hauràs d'executar LaTeX, Biber i LaTeX un altre cop. Investiga com fer tot això amb el teu editor de LaTeX en línia.

Mira què passa quan es creen nous registres a la base de dades i noves cites en el teu document. Afegeix una cita que no estigui en la teva base de dades per veure què passa.
Prova l'opció `numeric` en ambdós paquets.
