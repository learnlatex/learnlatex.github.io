---
layout: "page"
lang: "mr"
title: Site Settings
permalink: /tr/settings
---
# Site Settings (User Preferences) (MR)

## Accept or Delete Cookies

Cookies are small pieces of data that are stored by your browser.
By default no cookies are used by this site, but any options set on
this page are stored in cookies.

Accept cookies here to enable the use of cookies on this site and to
enable the menu options below.


{% include settings-accept.html 
   accept="Accept Cookies"
   reset= "Reset: Delete All Cookies"
%}

## Default Return
The `return` form parameter that TeXLive.net should use in the absence of a setting via `% !TeX` comments in the example.

{% include settings-return.html %}


## Default Engine
The `engine` form parameter that TeXLive.net or Overleaf should use in the absence of a setting via `% !TeX` comments in the example. (`-dev` and `context` options should not be used at Overleaf.)

{% include settings-engine.html %}


## Editor Theme
The theme used by the embedded ACE editor.

{% include settings-acetheme.html %}

CodeMirror6.

{% include settings-cm6theme.html %}
