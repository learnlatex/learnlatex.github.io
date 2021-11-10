---
layout: "lesson"
lang: "lt"
title: "Daugiau apie citavimą ir bibliografiją"
description: "Ši pamoka pateikia daugiau detalių apie ne anglų kalbos bibliografijas, parodo, kaip aktyvinti nuorodas, ir nurodo kai kuriuos skirtumus tarp BibTeX stilių."
toc-anchor-text: "Daugiau apie citavimą ir bibliografiją"
---

##  Rūšiavimas ne anglų kalboje

BibTeX programa buvo parašyta pagrinde tvarkyti anglų kalbos nuorodas.  Ji ne
taip gerai tvarkosi su kirčiuotais rašmenimis ir dar prasčiau su
nelotyniškomis raidėmis.  Biber programa, priešingai, buvo nuo pat
pradžių kuriama, kad tinkamai tvarkytųsi su skirtingų rašmenų mišiniais.

Tai reiškia, kad jei rūšiuojate savo bibliografiją kitokia tvarka, nei
angliška, tada tikrai turėtumėte naudoti `biblatex` ir Biber, o ne `natbib`
ir BibTeX.

## Hipernuorodos

Jei įkelsite `hyperref` paketą (apie jį [kalbėta anksčiau](more-09)), tai jis
automatiškai praturtins jūsų bibliografijos turinį aktyviomis nuorodomis.
Tai ypač naudinga naudojant internetinius adresus (_URL_) ir skaitmeninius
identifikatorius, kaip DOI.

## BibTeX stilių skirtumų geriausio panaudojimo praktika

Nors BibTeX failų sintaksė yra ta pati, nesvarbu ką jūs naudojate, BibTeX ar
`biblatex`, palaikomų (naudojamų stiliaus) laukų rinkinys ir tiksli jų
reikšmė gali ne tik skirtis ne tik dėl skirtumo tarp BibTeX darbo eigos ir
`biblatex`, bet ir dėl skirtumo tarp BibTeX stilių.  Nemaža pagrindinė aibė
įrašų tipų ir laukų yra ta pati beveik visiems stiliams, tačiau kai kurie
laukai skiriasi.

Tipinis pavyzdys yra URL (internetinis adresas).  Kai kurie senesni BibTeX
`.bst` stiliai (ypač standartiniai BibTeX stiliai, pvz. `plain.bst`,
`unsrt.bst`, ...) ateina iš laikų prieš URL išradimą ir neturi jokio lauko
įrašyti internetinio šaltinio URL.  Daugelis naujesnių stilių _turi_
dedikuotą `url` lauką.  Aplinkinis būdas išvesti URL su senesniais stiliais
yra naudoti lauką `howpublished`, tačiau su naujesniais stiliais, žinoma,
geriau naudoti tam skirtą `url` lauką.

Norėdami išnaudoti visą naudojamo stiliaus potencialą, turite išsiaiškinti jo
palaikomų laukų rinkinį ir jų semantiką.
