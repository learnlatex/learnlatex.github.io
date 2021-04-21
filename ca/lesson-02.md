---
layout: "lesson"
lang: "ca"
title: "Treballant amb LaTeX"
description: "Aquesta lliçó explica què és un sistema TeX i quins són els més habituals, llista alguns dels editors de text que s'utilitzen per a LaTeX, i els sistemes online que tenen editors integrats."
toc-anchor-text: "Treballant amb LaTeX"
toc-description: "Sistemes TeX i editors de text LaTeX."
---

# Treballant amb LaTeX

<span
  class="summary">Aquesta lliçó explica què és un sistema TeX i quins són els més habituals, llista alguns dels editors de text que s'utilitzen per a LaTeX, i els sistemes online que tenen editors integrats.</span>

A diferència de moltes aplicacions d'ordinador, LaTeX no és una única aplicació que conté tota la funcionalitat. Més aviat hi ha diferents aplicacions que treballen conjuntament. Podem dividir-les en dos grups:

- Un _sistema TeX_
- Un editor de text (sovint un editor específic per a LaTeX)

## Sistemes LaTeX

El nucli de treballar amb LaTeX és disposar d'un sistema TeX. Un sistema TeX és un conjunt de programes i fitxers en 'segon pla' que són necessaris per tal de què funcioni LaTeX, però la major part del temps no necessitaràs executar-los directament.

Avui dia hi ha disponibles dos sistemes TeX,
[MiKTeX](https://miktex.org/) i [TeX Live](https://tug.org/texlive). Tots dos estan dispoibles
per a Windows, macOS i Linux.
Per a Windows, MiKTeX té una llarga trajectòria; per a macOS, TeX Live ve empaquetat amb una col·leccuó més gran anomenada [MacTeX](http://www.tug.org/mactex/). Hi ha [avantatges per cada sistema](https://tex.stackexchange.com/questions/20036), i pots cercar [més informació i consells del LaTeX Project](https://www.latex-project.org/get/).

Com que TeX Live està disponible en totes les plataformes habituals, i té alguns avantatges de rendiment, et recomanem que, si no estàs segur quin sistema has d'instal·lar, et decantis per TeX Live.

## Editors

Els fitxers de LaTeX són senzillament fitxers de text pla, i per tant es poden editar amb qualsevol editor de text.
Tanmateix, és convenient utilitzar un editor que hagi estat dissenyat per treballar amb LaTeX, doncs proporcionarà opcions interessants com ara compilar amb un sol click, visors de PDF integrats, ressaltar la sintaxi. Una opció molt interessant en tots els editors moderns de LaTeX  és SyncTeX: la possibilitat de clicar en el teu codi font i anar directament al PDF, o a la inversa.

Hi ha molts més editors LaTeX dels que podem llistar aquí: hi ha una [llista completa a
StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Un editor bàsic, [TeXworks](https://tug.org/texworks), ve inclòs a TeX Live i a MiKTeX, tant per a Windows com per Linux, i [TeXShop](https://pages.uoregon.edu/koch/texshop/) ve inclòs a MacTeX.

<p class="hint">Tant se val l'editor que escullis, però recomanem instal·lar-lo <i>després</i> d'instal·lar el teu sistema TeX, així doncs l'editor podrà 'trobar' el sistema TeX i configurar-lo de forma correcta.</p>

## Treballant online

Hi ha diferents webs online que et donen tota la funcionalitat i així pots estalviar-te la instal·lació del sistema TeX i de l'editor LaTeX. En aquestes webs pots editar directament els teus fitxers, compilar LaTeX i visualitzar directament el PDF resultant, tot plegat de forma fàcil i ràpida.

Alguns d'aquests llocs combinen LaTeX amb opcions similars a un processador de texts, mentre que d'altres estan més pensats per treballar amb el codi font de LaTeX i són més propers a tenir una instal·lació local.

Hi ha sistemes que et permeten executar LaTeX sense necessitat d'estar <em>logats</em>, i utilitzem un d'aquests,[TeXLive.net](https://texlive.net), per tal de què puguis editar i testejar els exemples que et proporcionem. Per a un treball més complet, els millors sistemes online et demanaran que et registris abans d'utilitzar-los. Això et permetrà guardar el teu treball i també evitar que aquestes webs no es sobrecarreguin d'informació. Et proporcionem enllaços de manera que puguis editar els exemples amb [Overleaf](https://www.overleaf.com), una de les webs més importants per treballar LaTeX online. També n'hi ha d'altres: per exemple [Papeeria](https://papeeria.com/).

## Treballar amb d'altres

Si estàs pensant d'enviar els teus fonts de LaTeX a d'altres destins que els processaran, com ara editorials, organitzadors de conferències o serveis de pre-impressió (com arXiv), hauràs de tenir present les restriccions que imposen.

## Exercici

Ja pots configurar una instal·lació LaTeX local, _o_ un compte en un servei online de LaTeX. Si estàs utilitzant una instal·lació local, necessitaràs també un editor: et recomanem començar amb TeXworks o TeX Shop (veure més amunt), i més endavant, quan hagis agafat confiança, ja podràs provar d'altres editors.

Podràs [executar tots els nostres exercicis en el navegador](help.md), però també t'animem a què treballis amb documents reals, així que ja és un bon moment per posar-te a punt.
