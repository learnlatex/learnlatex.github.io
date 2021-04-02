---
layout: "page"
lang: "pt"
title: Site Settings
permalink: /pt/settings
---
# Configurações do site (preferências do usuário) GOOGLE TRANSLATE

## Aceitar ou Excluir Cookies

Cookies são pequenos pedaços de dados que são armazenados pelo seu navegador. Por padrão, nenhum cookie é usado por este site, mas todas as opções definidas nesta página são armazenadas nos cookies.

Aceite cookies aqui para habilitar o uso de cookies neste site e para habilitar as opções de menu abaixo.

{% include settings-accept.html 
   accept="Aceitar Cookies"
   reset= "Redefinir: Excluir todos os cookies"
%}

## Retorno padrão 
O parâmetro de formulário `return` que TeXLive.net deve usar na ausência de uma configuração via comentários `%! TeX` no exemplo.

{% include settings-return.html %}


## Default Engine

O `engine` parâmetro de formulário que TeXLive.net ou Overleaf deve usar na ausência de uma configuração por meio de `% !TeX` comentários no exemplo. ( -deve as contextopções não devem ser usadas no Overleaf.)

{% include settings-engine.html %}


## Tema do Editor
O tema usado pelo editor ACE integrado.

{% include settings-acetheme.html %}
