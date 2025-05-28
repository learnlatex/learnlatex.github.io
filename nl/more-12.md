---
layout: "lesson"
lang: "nl"
title: "Meer over: Citaten en referenties"
description: "Deze les geeft details over niet-Engelstalige bibliografieën, hoe je referenties omzet in hyperlinks, en belicht de belangrijkste verschillen tussen BibTeX-stijlen."
toc-anchor-text: "Meer over: Citaten en referenties"
---

## Omgaan met niet-Engelse sortering

Het BibTeX-programma is voornamelijk geschreven om referenties in het Engels te verwerken.
Het is zeer beperkt in het omgaan met accenten en nog beperkter met niet-Latijnse letters.
Daarentegen is het Biber-programma vanaf het begin ontworpen om allerhande schriftsystemen correct te verwerken.

Dit betekent dat als je je bibliografie sorteert en je moet sorteren in een andere volgorde dan de Engelse, je echt `biblatex` en Biber zou moeten gebruiken in plaats van `natbib` en BibTeX.

## Hyperlinks

Als je het `hyperref`-pakket laadt (zoals eerder behandeld in [more-09]), zal het automatisch bepaalde inhoud in je bibliografie omzetten in links.
Dit is in het bijzonder handig voor URL’s en DOI’s.

## Uiteenlopend gebruik van BibTeX-invoer door verschillende stijlen

Hoewel de algemene syntaxis van BibTeX-bestanden hetzelfde is, of je nu de BibTeX-werkwijze of `biblatex` gebruikt, kunnen de ondersteunde velden (gebruikt door de stijl) en hun exacte betekenis niet alleen variëren tussen BibTeX en `biblatex`, maar ook tussen verschillende BibTeX-stijlen.
Een groot ‘kernpakket’ van itemtypes en velden is hetzelfde voor bijna alle stijlen, maar er zijn verschillen in sommige velden.

Een veelvoorkomend voorbeeld is de URL.
Sommige oudere BibTeX `.bst`-stijlen (met name de 'standaard BibTeX-stijlen', zoals `plain.bst`, `unsrt.bst`, ...) stammen uit de tijd vóór de uitvinding van de URL en hebben geen specifiek veld voor de URL van een online bron.
Veel nieuwere stijlen hebben _wel_ een specifiek `url`-veld.
De oplossing om de URL toch te tonen in oudere stijlen is meestal om het `howpublished`-veld te gebruiken, maar bij de nieuwere stijlen is het natuurlijk beter om het specifieke `url`-veld te gebruiken.

Om volledig gebruik te kunnen maken van het potentieel van de gebruikte stijl, zul je moeten uitzoeken welke velden worden ondersteund en wat hun betekenis is.
