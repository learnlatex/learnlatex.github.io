---
layout: "page"
lang: "lt"
title: Svetainės nustatymai
permalink: /lt/settings
---
# Svetainės nustatymai (vartotojo nuostatos)

## Priimkite arba ištrinkite slapukus

Slapukai yra nedideli duomenų rinkinukai, išsaugomi jūsų naršyklės.
Standartiškai ši svetainė nenaudoja slapukų, tačiau visos šiame puslapyje
pasirinktos nuostatos išsaugomos slapukuose.

Paspauskite `Accept cookies` žemiau, kad įgalinti slapukų naudojimą ir
aktyvuoti žemiau pateiktus pasirinkimo meniu.

{% include settings-accept.html 
   accept="Accept Cookies"
   reset= "Reset: Delete All Cookies"
%}

## Standartinė grąžinama išvestis

Parametras, nurodantis grąžinamų (`return`) duomenų formatą, kurį TeXLive.net
turėtų naudoti, kai pavyzdys neturi tinkamo nustatymo `% !TeX` formos komentaru.

{% include settings-return.html %}


## Standartinis variklis

Parametras, nurodantis variklį (`engine`), kurį TeXLive.net arba Overleaf
turėtų naudoti, jei pavyzdys neturi tinkamo nustatymo `% !TeX` formos
komentaru.  (`-dev` ir `context` parinktys negali būti naudojamos su
Overleaf.)

{% include settings-engine.html %}


## Redaktoriaus tema

Spalviniai nustatymai įterptajam ACE redaktoriui.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
