---
layout: "page"
lang: "fr"
title: Paramètres du site
permalink: /fr/settings
---
# Paramètres du site (préférences de l'utilisateur) GOOGLE TRANSLATE

## Accepter ou supprimer les cookies

Les cookies sont de petits éléments de données stockés par votre navigateur. Par défaut, aucun cookie n'est utilisé par ce site, mais toutes les options définies sur cette page sont stockées dans des cookies.

Acceptez les cookies ici pour permettre l'utilisation de cookies sur ce site et pour activer les options de menu ci-dessous.


{% include settings-accept.html 
   accept="Accepter les cookies"
   reset= "Réinitialiser: supprimer tous les cookies"
%}

## Retour par défaut

Le `return` paramètre de formulaire que TeXLive.net doit utiliser en l'absence de paramètre via les `% !TeX` commentaires dans l'exemple.

{% include settings-return.html %}


## Moteur par défaut

Le `engine` paramètre de formulaire que TeXLive.net ou Overleaf doit utiliser en l'absence de paramètre via les `% !TeX` commentaires dans l'exemple. (`-dev` et les `context` options ne doivent pas être utilisées à Overleaf.)

{% include settings-engine.html %}


## Thème de l'éditeur
Le thème utilisé par l'éditeur ACE intégré.

{% include settings-acetheme.html %}
