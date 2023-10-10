---
layout: "lesson"
lang: "lt"
title: "Kaip surasti dokumentaciją ir gauti pagalbą"
description: "Šioje pamokoje pateikiami pagrindiniai dokumentacijos šaltiniai su LaTeX susijusiai programinei įrangai ir paketams ir paaiškinama, kaip ieškoti pagalbos iškilus sunkumams."
toc-anchor-text: "Pagalba ir dokumentacija"
toc-description: "Kaip pasiekti dokumentaciją ir gauti pagalbą."
---

# Dokumentacija ir pagalbos gavimas

<span
  class="summary">Šioje pamokoje pateikiami pagrindiniai dokumentacijos šaltiniai su LaTeX susijusiai programinei įrangai ir paketams ir paaiškinama, kaip ieškoti pagalbos iškilus sunkumams.</span>

Paketo ar klasės dokumentaciją galima pasiekti keliais būdais.


## `texdoc`

Jei turite lokaliai įdiegtą TeX sistemą (pvz., TeX Live arba MiKTeX) kartu su
dokumentacija (yra toks pasirinkimas diegimo metu), tai galite pasiekti šią
lokalią dokumentaciją iš komandinės eilutės su `texdoc`. Įvykdžius

`texdoc` <_pkg_>

bus atverta paketo (ar klasės) <_pkg_> dokumentacija.  Priemonė `texdoc` ieško
turimoje dokumentacijoje ir atidaro tai, kas, jos manymu, yra artimiausia
jūsų paieškos terminui.  Galite paprašyti ją išvardyti visus tikėtinus
rezultatus, kuriuos ji randa, kad galėtumėte pasirinkti:

`texdoc -l` <_pkg_>


## texdoc.org

Tai yra [svetainė](https://texdoc.org/), kuri veikia panašiai kaip `texdoc`
priemonė.  Galite ieškoti joje laikomos dokumentacijos, kaip tai darytumėte
su `texdoc -l`, ir tada pasirinkti iš rezultatų.


## CTAN

[CTAN](https://www.ctan.org) (_**C**omprehensive **T**eX **A**rchive
**N**etwork_) yra pats pilniausias su TeX susijusių dalykų archyvas. Ten
publikuojama dauguma LaTeX paketų.  Suradę ten paketą, rasite kartu ir
naujausią dokumentaciją.  Paprastai paketai išsaugomi adresu
`ctan.org/pkg/<pkg-name>` ir ten galite rasti README ir kitą informaciją.


## Knygos apie LaTeX

Yra keletas knygų, kurios gali padėti geriau išmokti LaTeX.  Kaip
pradedantysis, jūs gausite daug naudos iš bet kokio struktūrizuoto
pradedančiųjų vadovo, nes jie suteiks daug daugiau informacijos, nei mes
galėjome čia pateikti.  Taip pat galbūt norėsite pasinaudoti detaliu LaTeX
vadovu su išsamia informacija ir rekomendacijomis.

LaTeX komanda publikuoja [sąrašą
knygų](https://www.latex-project.org/help/books/), didžiumą kurių parašė
komandos nariai.  Žymiausios iš jų yra [oficialus LaTeX
vadovas](https://www.informit.com/store/latex-a-document-preparation-system-9780201529838),
parašytas LaTeX formato pradininko Lamport'o ir gal kiek jau pasenęs, ir
visapusiška knyga [LaTeX Companion 3rd edition](https://www.informit.com/store/latex-companion-parts-i-ii-3rd-edition-9780138166489).

Kitos knygos, skirtos mokytis LaTeX, yra

- [_Guide to LaTeX_](https://www.informit.com/store/guide-to-latex-9780132651714),
  autoriai Helmut Kopka ir Patrick Daly; pasiekiama kaip elektroninė knyga;
- [_LaTeX for Complete Novices_](https://www.dickimaw-books.com/latex/novices/),
  autorius Nicola Talbot: laisvai prieinama kaip e-knyga arba nebrangus
  spausdintas leidimas;
- [_Using LaTeX to write a PhD thesis_](https://www.dickimaw-books.com/latex/thesis/),
  autorius Nicola Talbot; laisvai prieinama kaip e-knyga arba nebrangus
  spausdintas leidimas;
- [_LaTeX Beginner's Guide_](https://www.packtpub.com/gb/hardware-and-creative/latex-beginners-guide),
  autorius Stefan Kottwitz: ir elektroninė, ir spausdinta knyga;
- [_LaTeX and Friends_](https://www.springer.com/gp/book/9783642238154),
  autorius Marc van Dongen; ir elektroninė, ir spausdinta knyga.


## Kaip gauti pagalbą

Yra įvairių internetinių forumų, kuriuose galima uždavinėti LaTeX klausimus;
[TeX&ndash;LaTeX StackExchange](https://tex.stackexchange.com) šiandien
turbūt yra populiariausias.  Užduodant klausimą, pirmiausia paruoškite aiškų
savo pavyzdį: tai, kas paprastai vadinama „minimaliu darbiniu pavyzdžiu“
(MWE, _minimal working example_).  Tai nereiškia, kad jo kodas veikia (nes
kitaip gal neklaustumėte), bet tai reiškia, kad padarėte viską, kad jis būtų
aiškus, savarankiškas ir minimalus!  Pastaroji savybė reiškia, kad jis turi
tik tiek turinio, kad matytųsi problema.

### Kaip pateikti minimalų darbinį pavyzdį (MWE)

Kaip sukonstruoti MWE? Paprastai lengviausia pradėti nuo

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Text
\end{document}
```

ir dėkite eilutes po vieną, kol parodysite problemą.  Galite pabandyti
„apkarpyti“ savo tikrąjį failą, tačiau tai gali būti ilgas procesas.

<p class="hint">Jei jums reikia daugiau teksto, kad būtų rodomas puslapių laužymas ar kiti efektai, tada tokie paketai kaip <code>lipsum</code> gali padėti sukurti tekstą iš beprasmių pastraipų ir išlaikyti mažą testinį failą</p>


### Vykdymo žurnalas (log failas)

Vienas dalykas, kurį norėsite pasiekti klaidų atveju, yra jūsų vykdymo
žurnalo (log) failas; LaTeX sukuria jį kiekvieno vykdymo metu; jis turi tą
patį pavadinimą kaip jūsų įvestis, bet baigiasi `.log`.

<p class="hint">Kai kurių darbalaukių sąsajos nerodo failų vardų plėtinių, todėl gali prireikti nustatyti plėtinių rodymą, kad išsiaiškintumėte, kuris failas tai yra.</p>

Log faile visada rasite pilnus klaidų pranešimus.  Nors LaTeX klaidų
pranešimus stengtasi padaryti naudingais, tačiau jie kartais ateina „iš
vykdymo gilumos“, ir jų supratimui reikalingas kontekstas.

<p class="hint">Kai kuriuose programiniuose redaktoriuose būna sunku pamatyti pilną klaidos tekstą, esminė informacija gali būti nematoma.</p>

Jei kreipsitės dėl problemos į LaTeX ekspertus, tikėtina, kad jie paprašys
jūsų log failo kopijos.

### Tolesnis kelias

Baigdami mes siūlome [mažų pavyzdžių galeriją](./extra-01), demonstruojančią
kelias sritis, nepaliestas šiame įvade, ir LaTeX paketus naudingus tose srityse.
