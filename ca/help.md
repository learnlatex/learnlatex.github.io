---
layout: "page"
lang: "ca"
title: "Utilitzant el lloc web de learnlatex.org"
description: "Aquesta pàgina explica el site learnlatex.org i com aprofitar-lo al màxim."
permalink: /ca/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# Ajuda


## Navegant pel lloc web

El curs consisteix en 16 lliçons principals presentades a la [taula de continguts]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}) o a la [pàgina inicial](./).

Cada lliçó té un enllaç associat a una altra lliçó, que permet aprofundir sobre el tema. És possible estudiar les 16 lliçons principals _sense_ haver de llegir les lliçons addicionals.

Al final del curs hi ha una o més lliçons específiques de l'idioma utilitzat i una galeria amb exemples d'alguns paquets de LaTeX que no s'han explicat durant el curs.

---

## Exemples 

### Executar els exemples

Cada exemple consisteix en un document LaTeX petit i complet, que es mostra a la pàgina de la següent forma:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text d'exemple.
\end{document}
```

Els exemples es poden editar i fer-ne canvis, potser com a part dels exercicis proposats que hi ha a la fi de cada lliçó.

* L'editor que hem utilitzat és [ACE](https://ace.c9.io/).

  Pots personalitzar el tema que s'ha utilitzat en l'editor (per exemple utilitzant un tema de fons fosc i text clar) en la pàgina de [configuració del lloc web](settings). Una forma convenient d'experimentar amb diferents temes és utilitzar <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>⌘</kbd>+<kbd>,</kbd> a Mac) en qualsevol dels exemples del lloc. [Això ens mostrarà un penell](javascript:acesettings()) que ens permetrà canviar els paràmetres de configuració d'ACE.

  El repositori d'ACE té una útil llista de [dreceres de teclat de l'editor](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts).

* [CodeMirror6](https://codemirror.net/)

#### Tres maneres d'executar un exemple

* Utilitzar el servei de Overleaf
* Utilitzar el servei de TeXLive.net
* Instal·lar el sistema TeX localment

##### Utilitzar el servei de Overleaf

Overleaf és potser el servei d'edició de LaTeX en línia més popular. El botó <button>Obre a Overleaf</button>, sota de l'exemple, enviarà el codi a [Overleaf](https://www.overleaf.com/about).

Si no disposes d'un compte seràs redirigit a la pàgina de login on podràs registrar-te en el servei de Overleaf. És un servei gratuït però serà necessari donar alguns detalls i acceptar els Termes i Condicions.

Si el teu compte de Overleaf està emmagatzemat en el teu navegador, aleshores Overleaf s'obrirà en un nou tabulador, en un nou projecte amb el codi incorporat. Podràs aleshores editar-lo a Overleaf i s'executarà LaTeX amb el teu codi, mostrant la sortida resultant o el log d'errors.

Les característiques d'edició d'Overleaf són molt extenses i aquí no tenim intenció de detallar-les, però només dir que podràs guardar el teu projecte al teu compte de Overleaf i retornar-hi més endavant.

##### Utilitzar el servei de TeXLive.net

El botó <button>Executa a TeXLive.net</button>, a sota de l'exemple, executarà el codi en el servei
[TeXLive.net](https://texlive.net)[^1].

El servei TeXLive.net es va desenvolupar específicament per donar suport a aquest lloc web, i en particular utilitza la llibreria [PDF.js](https://mozilla.github.io/pdf.js/) per habilitar la visualització de PDF en el navegador i en el mòbil sense haver de fer servir cap altre lector de PDFs.

El document PDF resultant (o potser el log d'errors) es mostrarà a sota de l'exemple. Amb el botó <button>Esborrar sortida</button> podràs esborrar aquest PDF (però potser no cal que ho facis i el pots deixar visible).

Fixa't que **TeXLive.net** no requereix que et donis d'alta ni facis login, per tant és molt pràctic per a petits exemples, però no proporciona cap mecanisme per guardar el teu document. Qualsevol canvi que facis en l'exemple es perdrà quan surtis de la pàgina.

##### Sistema TeX instal·lat localment

Si tens un sistema TeX instal·lat a la teva màquina, podràs copiar el codi de l'exemple fora de la pàgina, seleccionant-lo de forma explícita o utilitzant la drecera (per ex Ctrl-C). Tindràs el codi disponible en el porta-papers i podràs enganxar-lo en un document nou amb el teu editor preferit.
   
### Resolent problemes

Els nostres exemples estan provats amb una versió de LaTeX actualitzada. Tots funcionen amb les dues versions de serveis online que hem comentat, i per tant si en el teu sistema detectes algun error, potser la teva versió de LaTeX no està actualitzada.

---

## Escollir el motor de TeX

Quan executes els documents d'exemple, per defecte s'utilitza el motor `pdflatex`.

Pots escollir entre `latex`, `pdflatex`, `xelatex`, `lualatex`, `platex` o `uplatex` utilitzant el comentari:

`% !TEX ` _qualsevol text_ `lualatex`

on l'espai en blanc a l'inici és opcional i les majúscules s'ignoren, així com _qualsevol text_ entre la primera i la última paraula.

Pots veure un exemple de com s'utilitza un comentari per especificar LuaLaTeX en [algun dels exemples en aquest lloc web](more-14).

Si s'especifica `platex` o `uplatex`, aleshores el programa que s'utilitza per generar el PDF és `dvipdfmx`, a partir del fitxer DVI que aquestes variants generen. De manera similar, si s'especifica `latex` s'utilitza `dvips` i `ps2pdf`.

Si no s'especifica `% !TeX` en el comentari, aleshores s'utilitzarà `pdflatex` a no ser que hagis especificat el motor TeX per defecte en la pàgina de [configuració](settings).

---

## Escollir com visualitzar la sortida

Si utilitzes el sistema TeXLive.net, el PDF de sortida es genera amb la llibreria [PDF.js](https://mozilla.github.io/pdf.js/). Això té un comportament consistent independentment del navegador que utilitzis.

Si vols utilitzar el lector de PDFs associat al teu navegador (ja sigui perquè ve incorporat o perquè has associat una aplicació externa) hauràs d'afegir un comentari de la forma:

`% !TEX ` _qualsevol text_ `pdf`

El comportament per defecte es pot especificar utilitzant `pdfjs` en la marca final. Quan facis proves és possible que necessitis el fitxer de log, fins i tot si el document produeix un PDF sense errors. Això serà possible si especifiques la marca `log` al final del comentari.

Com a alternativa a utilitzar el comentari `% !TeX`, pots especificar el paràmetre de retorn del lloc en la [pàgina de configuració](settings). La configuració és específica de cada navegador, de manera que pots escollir el valor `pdfjs` per al teu dispositiu mòbil, però utilitzar `pdf` en el navegador de l'ordinador de sobretaula.


---

## Sortida HTML (make4ht, LaTeXML, lwarp)

Si utilitzes el sistema online TeXLive.net, aleshores s'ha d'especificar l'opció de retorn `make4ht`, que retorna una o més pàgines HTML dins del marc de la pàgina. Es pot especificar al mateix temps que `xelatex` o `lualatex` o bé el valor per defecte `latex`.

Per habilitar aquesta sortida hem d'afegir el comentari:


`% !TeX make4ht`
{: .noedit :}


Alternativament pots especificar l'opció de retorn `make4ht` en la [pàgina de configuració](settings).


Si utilitzes un sistema TeX instal·lat localment, pots obtenir el mateix resultat executant

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

afegint l'opció `-x` o `-l` si s'especifica XeLaTeX o LuaLaTeX.

Quan executem localment també són possibles altres configuracions. Veure el [manual de make4ht](https://texdoc.org/pkg/make4ht).

Per executar `LaTeXML` localment, hauràs d'instal·lar LaTeXML (que no és part de TeX Live o MiKTeX) i utilitzar les comandes

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

També hi ha d'altres configuracions de LaTeXML possibles, [com es descriu en el manual](https://dlmf.nist.gov/LaTeXML/manual/).


Aquí no documentem la configuració `lwarp`, doncs és bastant experimental i segurament canviarà. La versió actual es pot veure al [repositori font](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: S'ha de fer notar que durant el desenvolupament d'aquest lloc web també hem utilitzat [LaTeXOnline](https://latexonline.cc/) i [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http) i volem donar les gràcies als programadors d'aquests serveis web per fer actualitzacions i habilitar els exemples del lloc web des del principi.
