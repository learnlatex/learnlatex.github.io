---
layout: "page"
lang: "fr"
title: Paramètres du site
permalink: /fr/settings
---
# Paramètres du site (préférences de l'utilisateur)

## Accepter ou supprimer les cookies

Les cookies sont de petits éléments contenant des données, stockés par votre
navigateur. Par défaut, aucun cookie n'est utilisé par ce site, mais si vous
choisissez des options sur cette page, elles seront stockées dans des cookies.

Acceptez les cookies ici pour permettre leur utilisation sur ce site et pour
activer les options ci-dessous.


{% include settings-accept.html 
   accept="Accepter les cookies"
   reset= "Réinitialiser: supprimer tous les cookies"
%}

## Retour par défaut

Le paramètre `return` que TeXLive.net doit utiliser en l'absence de paramètre
explicite fourni par les commentaires `% !TeX` du code.

{% include settings-return.html %}


## Moteur par défaut

Le paramètre `engine` que TeXLive.net ou Overleaf doivent utiliser en l'absence
de paramètre explicite dans les commentaires `% !TeX` du code.
(les options `-dev` et `context` options ne doivent pas être utilisées avec
Overleaf.)

{% include settings-engine.html %}


## Thème de l'éditeur
Le thème utilisé par l'éditeur intégré, ACE.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
