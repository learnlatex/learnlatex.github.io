---
layout: "page"
lang: "nl"
title: Site-instellingen
permalink: /nl/settings
---
# Site-instellingen (gebruikersvoorkeuren)

## Cookies accepteren of verwijderen

Cookies zijn gegevens die door je browser worden opgeslagen.
Standaard gebruikt deze site geen cookies, maar alle opties die op deze pagina worden ingesteld, worden opgeslagen via cookies.

Accepteer hier cookies om het gebruik van cookies op deze site toe te staan en om de onderstaande menu-opties te activeren.

{% include settings-accept.html 
   accept="Cookies accepteren"
   reset= "Reset: alle cookies verwijderen"
%}

## Standaardwaarde voor return
De `return`-parameter voor formulieren die TeXLive.net moet gebruiken als deze niet via `% !TeX`-commentaren in het voorbeeld ingesteld wordt.

{% include settings-return.html %}


## Standaard engine
De `engine`-parameter voor formulieren die TeXLive.net of Overleaf moet gebruiken als deze niet via `% !TeX`-commentaren in het voorbeeld ingesteld wordt.
(De `-dev` en `context` opties mogen niet bij Overleaf worden gebruikt.)

{% include settings-engine.html %}


## Kleurenthema
Het thema dat wordt gebruikt door de ingebouwde ACE-editor.

{% include settings-acetheme.html %}

Het thema dat wordt gebruikt door de ingebouwde CodeMirror6-editor.

{% include settings-cm6theme.html %}
