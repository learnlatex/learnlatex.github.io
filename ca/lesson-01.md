---
layout: "lesson"
lang: "ca"
title: "Què és LaTeX i com funciona"
description: "Aquesta lliçó explica les bases de què és LaTeX i com funciona en comparació amb els processadors de text comuns com ara Microsoft Word o LibreOffice Writer."
toc-anchor-text: "Bases de LaTeX"
toc-description: "Què és LaTeX i com funciona."
---

# Bases de LaTeX

<span
  class="summary">Aquesta lliçó explica les bases de què és LaTeX i com funciona en comparació amb els processadors de text comuns com ara Microsoft Word o LibreOffice Writer.</span>

A diferència dels processadors de text habituals, com ara Microsoft Word o LibreOffice Writer, LaTeX no és WYSIWYG (acrònim de 'What You See Is What You Get', 'Allò Que Veus És Allò Que Obtens'). Amb LaTeX es té el text sense format i amb marcadors o etiquetes. Aquestes etiquetes donen informació a LaTeX sobre el significat lògic dels elements del text, de la mateixa manera que ho fa el HTML.

Posem com a exemple l'element `<h2>` que indica una nova secció en un document HTML. De la mateixa manera, LaTeX també té una comanda per fer-ho: `\section`.

## El procés de treballar amb LaTeX

Com que els arxius de LaTeX no són el document final, sinó més aviat les instruccions sobre com seran cadascuna de les parts del document, no s'acostuma a compartir el codi LaTeX. Després d'escriure el _codi font_ en LaTeX, aquest s'ha de convertir a PDF. Per generar aquest arxiu, que és el que es comparteix i publica, normalment s'utilitza el programa `pdflatex`.

Aquest procés de _compilar_ el document es pot portar a terme de diferents maneres, i és que utilitzar LaTeX és quasi com programar. Tot i que parlem de _compilar_, el terme _composició tipogràfica_ és més precís.

## Múltiples execucions de LaTeX

Per als documents simples, només s'haurà de compilar el codi una vegada per tal de generar el PDF. Però, a mesura que el document es vagi complicant més i més, com ara referències creuades, cites, figures o índex, haurem d'executar LaTeX més d'una vegada. Ja ho comentarem més endavant quan arribi el moment.

## LaTeX o pdfLaTeX o ...

En la [propera lliçó](lesson-02) veurem que LaTeX no és un simple programa. Per tal de no complicar les coses, ens centrarem en un programa particular de LaTeX, `pdfLaTeX`, que permet la generació de fitxers PDF. Més endavant, veurem d'altres programes i per a què pot ser interessant el seu ús.
