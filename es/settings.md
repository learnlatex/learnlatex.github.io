---
layout: "page"
lang: "es"
title: Configuración
permalink: /es/settings
---
# Configuración (Preferencias del usuario)

## Aceptar o Borrar Cookies

Las cookies son pequeños elementos, que contienen datos, que son guardados por su explorador. 
Por defecto, este sitio web no usa cookies, pero cualquier opción que
configure será guardada en forma de cookie.

Debe aceptar aquí el uso de cookies para permitir su uso en este sitio web y 
así activar los menús de opciones que encontrará más abajo.

{% include settings-accept.html 
   accept="Aceptar Cookies"
   reset= "Reinicio: Borrar todas las Cookies"
%}

## Salida por defecto
El parámetro `return` que TeXLive.net debe usar en caso de no haberlo especificado a través de los comentarios `% !TeX` de los ejemplos.

{% include settings-return.html %}


## Motor por defecto
El parámetro `engine` que TeXLive.net u Overleaf deben usar en caso de no haberlo especificado a través de los comentarios `% !TeX` de los ejemplos. (Las opciones`-dev` y `context` no deben usarse en Overleaf.)

{% include settings-engine.html %}


## Tema del Editor
El tema usado por el editor ACE integrado.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
