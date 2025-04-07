---
layout: "lesson"
lang: "ca"
title: "Analitzar els errors"
description: "Aquesta lliçó ensenya alguns errors comuns en els documents de LaTeX, què signifiquen i com podem solucionar-los."
toc-anchor-text: "Tractament d'errors"
toc-description: "Tractar comportaments inesperats."
---

# Analitzar els errors

<span
  class="summary">Aquesta lliçó ensenya alguns errors comuns en els documents de LaTeX, què signifiquen i com podem solucionar-los.</span>

A diferència d'un processador de text típic, LaTeX té un cicle d'Edició/Compilació/Vista més proper als compiladors de llenguatges de programació, i de la mateixa manera que els programadors cometen errors quan escriuen programes, també aquí haurem de tractar els missatges d'error que ens reporta el sistema.

## Errors comuns

Aquesta pàgina dóna exemples d'alguns dels errors comuns. Per cada exemple d'error es discuteix sobre com es dóna el missatge d'error.

És instructiu provar els exemples i veure els errors que provoquen, però també editar-los i mirar de corregir els errors fins a resoldre'ls.

### pdflatex not found

Un primer error molt comú que els usuaris es troben quan comencen és:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

a Windows, i a Linux:

```
bash: pdflatex: command not found
```
{: .noedit :}


Això no és un error TeX sinó més aviat un error de sistema operatiu que ens diu que TeX no està instal·lat o no el troba. Un error comú és instal·lar un _editor_ com ara TeXworks o TeXShop però sense instal·lar un sistema TeX com TeX Live o MiKTeX.

### Anatomia d'un missatge d'error de TeX

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

La meva comanda s'utilitza aquí \mycommand.

\end{document}
```

Això provoca un missatge multilínia en el fitxer log.

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 La meva comanda s'utilitza aquí \mycommand
                                      .
? 
```
{: .noedit :}

* La primera línia, marcada amb `!`, dóna una idea general de la naturalesa de l'error (en aquest cas comanda 'undefined').
* El segon parell de línies mostra la línia que TeX estava processant, amb un salt de línia que marca el punt fins on TeX ha arribat. La comanda 'undefined' és l'últim punt llegit i per tant l'última paraula abans del salt de línia, en aquest cas `\textbold`. Després del salt de línia tenim el codi `{hmmm}` que possiblement s'haurà llegit com un argument però TeX encara no l'ha executat.
* En aquest punt hi poden haver d'altres línies addicionals, proporcionant més context dels missatges d'error.
* La última línia comença amb `l.` seguit del número de línia, i finalment la línia del fitxer font on s'ha detectat l'error.

* La línia final és un `?`.  Si utilitzem TeX de forma interactiva és possible entrar instruccions TeX en aquest punt, però la majoria dels editors i sistemes online compilen TeX en un mode que no s'atura en els errors i provarà de processar la resta del document. Escrivint `s` en el prompt li estem dient a TeX que volem treballar en mode interactiu.

Fixa't que TeX no veu l'error en el punt on s'ha fet la definició; i de fet si definim `\mycommand` però no l'utilitzem, no saltarà cap error. Així doncs encara que es reporti un error a la línia 8, l'error "real" és en la línia 4, i és que és important llegir tot el missatge de l'error.

Tingues present que alguns editors mostren un resum d'una línia de la informació del log de l'error. Això pot donar lloc a confusions, sobretot si es mostra de la forma

`line 8: undefined command: ...\mycommand`

doncs pot donar a entendre que `\mycommand` no està definit.

### Error en l'ús de claus {}

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Aquí l'error és una clau no aparellada `}` utilitzada al final d'un argument opcional, i que hauria de ser un claudàtor, causant un error de sintaxi, i obtenim un error intern: 

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Mentre que la descripció de l'error no ajuda massa, les dues línies següents mostren clarament la posició de l'error utilitzant un salt de línia i mostrant fins a quin punt TeX ha llegit:

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}


### Fitxers no trobats

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

Produeix l'error

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Nota: aquest mateix error pot tenir dues causes diferents: un simple error tipogràfic com és aquest cas, que es pot corregir arreglant el nom del paquet; o que realment el fitxer no es troba i s'ha d'instal·lar en el sistema.

### Línies en blanc en el mode matemàtic display

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Produeix un misteriós error

```
! Missing $ inserted.
```
{: .noedit :}

Però arreglar-lo és ben simple, les línies en blanc no estan permeses en l'entorn matemàtic i s'han d'esborrar.

## Exercici

Prova de corregir els errors en els següents exercicis.

Edita petits documents amb diferents errors i fixa't en els missatges d'error que provoquen.

<script>
  window.addEventListener('load', function(){
  rlselectline('pre2',4);
  rlselectline('pre4',4);
  rlselectline('pre7',4);
  rlselectline('pre9',8);
  }, false);
</script>
