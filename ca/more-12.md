---
layout: "lesson"
lang: "ca"
title: "Més sobre: Cites i referències"
description: "Aquesta lliçó explica els detalls sobre la bibliografia en altres idiomes que no sigui l'anglès, com convertir les referències en hipervincles, i posa en relleu les principals diferències entre els estils BibTeX."
toc-anchor-text: "Més sobre: Cites i referències"
---

## Tractar amb referències en llengua no anglesa

El programa BibTeX va ser escrit principalment per tractar amb referències en anglès. Té moltes limitacions gestionant els caràcters accentuats, i encara més limitat amb els caràcters que no siguin de l'alfabet llatí. Per contra, el programa Biber es va escriure des del principi per gestionar aquesta diversitat.

Això significa que si estàs ordenant la teva bibliografia, i has de fer una ordenació diferent de l'anglesa, hauries d'utilitzar `biblatex` i Biber, més que no pas `natbib` i BibTeX.

## Hiperenllaços

Si carregues el paquet `hyperref` (com hem vist [abans](more-09)), de forma automàtica convertirà algunes de les teves entrades bibliogràfiques en enllaços. Això és particularment útil per URLs i DOIs.
