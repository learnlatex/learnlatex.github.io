---
layout: "page"
lang: "it"
title: Impostazioni del sito
permalink: /it/settings
---
# Impostazioni del sito (preferenze dell'utente)

## Accettare o non accettare i cookie

I cookie sono piccole stringhe di dati che vengono 
memorizzati dal tuo browser. 
Per impostazione predefinita, questo sito non
adopera alcun cookie, ma le eventuali opzioni 
impostate in questa pagina vengono memorizzate 
nei cookie.

Per abilitare i cookie su questo sito e le 
opzioni del menù sottostante, devi accettare
i cookie qui di seguito:


{% include settings-accept.html 
   accept="Accept Cookies"
   reset= "Reset: Delete All Cookies"
%}

## Return predefinito
Il parametro del modulo `return` che TeXLive.net 
dovrebbe adoperare in assenza di un'impostazione 
esplicita
tramite i commenti `% !TeX` nell'esempio.

{% include settings-return.html %}


## Motore predefinito
Il parametro del modulo `engine` che TeXLive.net 
o Overleaf dovrebbero adoperare in assenza 
di un'impostazione esplicita tramite i commenti `% !TeX` 
nell'esempio.
(Le opzioni `-dev` e `context` _non_ dovrebbero 
essere scelte su Overleaf.)

{% include settings-engine.html %}


## Tema dell'editor
Il tema adoperato dall'editor ACE incorporato.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
