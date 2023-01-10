---
layout: "page"
lang: "it"
title: Impostazioni del sito
permalink: /it/settings
---
# Impostazioni del sito (preferenze dell'utente)

## Accettare o eliminare i cookie

I cookie sono piccole stringhe di dati che vengono 
memorizzati dal tuo browser. 
Per impostazione predefinita nessun cookie viene 
utilizzato da questo sito, ma le eventuali opzioni 
impostate in questa pagina vengono memorizzate nei cookie.

Accetta i cookie qui per abilitare l'uso dei cookie su 
questo sito e per abilitare le opzioni del menù sottostante.


{% include settings-accept.html 
   accept="Accept Cookies"
   reset= "Reset: Delete All Cookies"
%}

## Default Return
Il parametro del modulo `return` che TeXLive.net 
dovrebbe usare in assenza di un'impostazione 
tramite i commenti `% !TeX` nell'esempio.

{% include settings-return.html %}


## Motore predefinito
Il parametro del modulo `engine` che TeXLive.net o Overleaf 
dovrebbero adoperare in assenza di un'impostazione 
tramite i commenti `% !TeX` nell'esempio.
(Le opzioni `-dev` e `context` non dovrebbero essere 
adoperate su Overleaf.)

{% include settings-engine.html %}


## Tema dell'editor
Il tema adoperato dall'editor ACE incorporato.

{% include settings-acetheme.html %}
