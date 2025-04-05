---
layout: "page"
lang: "ca"
title: Configuracions del lloc
permalink: /ca/settings
---
# Configuracions del lloc (Preferències d'Usuari)

## Acceptar o Esborrar Cookies

Les cookies són informació de poc tamany que emmagatzema el teu navegador web. Per defecte, aquest lloc web no utilitza cookies, exceptuant algunes opcions relacionades amb la configuració.

Pots acceptar les cookies aquí si vols habilitar l'ús de cookies i habilitar el menú d'opcions d'aquí sota.


{% include settings-accept.html 
   accept="Accept Cookies"
   reset= "Reset: Delete All Cookies"
%}

## Retorn per defecte
El paràmetre `retorn` que utilitzarà TeXLive.net en absència de la configuració `% !TeX` en l'exemple.

{% include settings-return.html %}


## Motor per defecte
El paràmetre `motor` que utilitzarà TeXLive.net o Overleaf en absència de la configuració `% !TeX` en l'exemple. (les opcions `-dev` i `context` no s'han d'utilitzar a Overleaf.)

{% include settings-engine.html %}


## Tema de l'editor
El tema que utilitza l'editor ACE que utilitza el lloc web.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
