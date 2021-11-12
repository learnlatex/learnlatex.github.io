---
layout: "lesson"
lang: "lt"
title: "Daugiau apie darbą su LaTeX"
description: "Ši pamoka pateikia daugiau detalių apie tai, kas yra LaTeX ir kokius variklius jis naudoja."
toc-anchor-text: "Daugiau apie darbą su LaTeX"
---

Daugumoje pavyzdžių šioje svetainėje, leisdami LaTeX, naudojame ne programą
vardu `latex`, bet vietoje jos kviečiame `pdflatex`.  Tai yra viena iš šeimos
susijusių programų, kurių visos yra `latex` „palikuonės“.  Mes pasirinkome
`pdflatex`, nes ji yra turbūt plačiausiai naudojama iš tos šeimos, nes
tiesiogiai gamina PDF failus.


## Formatai ir varikliai

Kaip buvo aprašyta [anksčiau](more-01), LaTeX yra antstatas ant sistemos,
vadinamos TeX.  Mes LaTeX vadiname „formatu“, kas reiškia, kad tai yra
rinkinys makrosų (instrukcijų ir komandų), kuriuos TeX supranta.  Kai
leidžiate `pdflatex`, jūs _iš tikrųjų_ leidžiate programą vardu „pdfTeX“, su
iš anksto įkeltu „LaTeX formatu“.  Paprastai vadiname pdfTeX _varikliu_,
t.y., programa, suprantančia TeX komandas.

Šiandien yra naudojami trys pagrindiniai varikliai:

- pdfTeX,
- XeTeX,
- LuaTeX.

Mes pristatysime [XeTeX ir LuaTeX vėliau](lesson-14); pagrindinis dalykas,
kurį reikia žinoti dabar, yra tai, kad jie gali naudoti operacinės sistemos
šriftus, tuo tarpu pdfTeX to padaryti negali.

Jei esate Japonijoje arba daug rašote japonų kalba, taip pat galite susidurti
su pTeX ir upTeX.  Tai yra varikliai pritaikyti vertikaliajam spausdinimui.
LuaTeX taip pat sugeba daug ką padaryti šioje srityje, tačiau upTeX šiuo metu
vis dar yra populiariausia sistema japonų kalbai.

