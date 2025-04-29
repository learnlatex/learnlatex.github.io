---
layout: "page"
lang: "pt"
title: Site Settings
permalink: /pt/settings
---
# Configurações do site (preferências do usuário)

## Aceitar ou Excluir Cookies

Cookies são pequenos pedaços de dados que são armazenados pelo seu navegador.
Por padrão, nenhum cookie é usado por este site, mas todas as opções definidas
nesta página são armazenadas nos cookies.

Aceite cookies aqui para habilitar o uso de cookies neste site e para habilitar
os menus de opções abaixo.

{% include settings-accept.html 
   accept="Aceitar Cookies"
   reset= "Redefinir: Excluir todos os cookies"
%}

## Formato de saída padrão

O parâmetro `return` que o TeXLive.net deve usar na ausência de uma configuração
via comentários `%! TEX` nos exemplos.

{% include settings-return.html %}

## Interpretador TeX padrão

O parâmetro `engine` que o TeXLive.net ou o Overleaf devem usar na ausência de
uma configuração por meio de comentários `% !TEX` nos exemplos. (Opções `-dev`
ou `context` não devem ser usadas no Overleaf.)

{% include settings-engine.html %}

## Tema do Editor

O tema usado pelo editor ACE integrado.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
