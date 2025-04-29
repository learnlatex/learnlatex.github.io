---
layout: "page"
lang: "lt"
title: "Tinklapio learnlatex.org gidas"
description: "Šis puslapis paaiškina apie pačią learnlatex.org svetainę ir geriausią jos panaudojimą."
permalink: /lt/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# Pagalba


## Judėjimas po svetainę

Kursas susideda iš 16 pagrindinių pamokų, kurios pasiekiamos iš [pagrindinio
turinio]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}),
pateikto [pradiniame lape](./).

Kiekvienoje pamokoje yra nuoroda į vieną susietą pamoką ta pačia tema, tik
kažkas panagrinėta giliau.  Galima praeiti visas 16 pamokų _aplenkiant_
papildomas pamokas.

Kurso pabaigoje yra mažiausiai viena pamoka, skirta kalbai, kuria buvo
pateiktos pamokos, ir galerija trumpų pavyzdžių, demonstruojančių paketus ir
LaTeX galimybes, neatskleistas šiame kurse.

---

## Pavyzdžiai

### Pavyzdžių kompiliavimas

Kiekvienas pavyzdys yra pilnas, nors ir mažas LaTeX dokumentas, pateikiamas
tekste panašiai kaip šis pavyzdys:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Example text.
\end{document}
```

Kiekvienas pavyzdys yra išbaigtas.  Jūs galite jį paredaguoti, įnešdami
smulkius taisymus, galbūt spręsdami pratimų aibę pamokos pabaigoje.

Redagavimo programa yra

* [ACE](https://ace.c9.io/).

  Jūs galite pasikeisti šios programos spalvinę gamą pagal save (pavyzdžiui,
  pasirinkti tamsų pagrindą su šviesiu tekstu) pasinaudodami [svetainės
  nustatymų](settings) puslapiu.  Iš klaviatūros galima patogiai išbandyti
  spalvines gamas klavišų kombinacija <kbd>Ctrl</kbd>+<kbd>,</kbd>
  (<kbd>⌘</kbd>+<kbd>,</kbd> Mac kompiuteriuose) beredaguojant bet kokį pavyzdį
  šioje svetainėje.  [Tai atvaizduoja ekrane panelę](javascript:acesettings()),
  kuri leidžia pasikeisti visus ACE nustatymus.

  Programos ACE saugykloje yra [naudinga redaktoriaus klavišų
  suvestinė](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts).

* [CodeMirror6](https://codemirror.net/).


#### Trys būdai vykdyti pavyzdžius

* Naudotis Overleaf paslauga
* Naudotis TeXLive.net paslauga
* Naudotis lokaliai kompiuteryje įdiegta TeX sistema.

##### Overleaf paslauga

Overleaf yra vienas iš populiariausių LaTeX tinklinio redagavimo paslaugos
tiekėjų.  Mygtuko <button>Atverti Overleaf</button>, kurio pavyzdys pateiktas
žemiau, paspaudimas nusiųs kodą į [Overleaf](https://www.overleaf.com/about).

Kada jūs neturite Overleaf paskyros ar prisijungimo prie jos duomenys nėra
išsaugoti jūsų naršyklės saugykloje, tada jus nukreips į prisijungimo
puslapį, kuriame galėsite prisijungti arba prisiregistruoti prie Overleaf.
Ši paslauga yra nemokama, bet reikalauja pateikti kai kurias detales apie
save ir sutikti su paslaugos teikimo sąlygomis.

Kai jūsų prisijungimo prie paskyros duomenys jau išsaugoti jūsų naršyklėje,
tada Overleaf sukurs naują kortelę naujam projektui su duotu pavyzdžiu. Tada
jūs galite redaguoti kodą tiesiog toje kortelėje, o Overleaf tuo pat metu
kompiliuos jūsų LaTeX kodą ir rodys šalia išvesties rezultatą arba klaidos
aprašymą.

Ne taip, kaip naudojant TeXLive.net, jūs galite išsaugoti savo projektą savo
paskyroje vėlesniam redagavimui.

##### TeXLive.net paslauga

Mygtuko <button>Leisti TeXLive.net</button>, kurio pavyzdys pateiktas žemiau,
paspaudimas nusiųs kodą į [TeXLive.net](https://texlive.net) paslaugą.[^1]

TeXLive.net paslauga buvo sukurta specialiai šios svetainės palaikymui ir
naudoja [PDF.js](https://mozilla.github.io/pdf.js/) modulį, gebantį
atvaizduoti PDF mobiliųjų telefonų ekranuose ir kitose naršyklėse,
neturinčiose įmontuoto PDF skaitytuvo.

Gautas PDF dokumentas (arba klaidos tekstas iš kompiliavimo žurnalo) bus
rodomas žemiau pavyzdžio.  Mygtukas <button>Pašalinti išvestį</button> bus
pateiktas, kad jūs galėtumėt pašalinti šią išvestį (nors jūs galite ją
palikti, tai netrukdo tęsti pamoką toliau).

Pabrėžiame, kad **TeXLive.net** nereikalauja jokios registracijos ar
prisijungimo, todėl yra labai patogus naudoti su mažais pavyzdžiais, bet šioje
paslaugoje nėra galimybės išsaugoti jūsų dokumentą.  Bet kokie pakeitimai
pavyzdyje bus prarasti, kai tik jūs išeisite iš puslapio.

##### Lokaliai įdiegta TeX sistema

Jei jūs turite TeX sistemą, įdiegtą kompiuteryje, tada jūs galite
nukopijuoti pavyzdžio kodą arba iš mūsų puslapio jį apšviečiant ir
kopijuojant, arba iš ACE redaktoriaus lango (panaudojant klavišų kombinaciją,
pavyzdžiui, <kbd>Ctrl</kbd>+<kbd>A</kbd> <kbd>Ctrl</kbd>+<kbd>C</kbd>). Tai
patalpins kodą į operacinės sistemos iškirpčių valdyklę, ir jūs galėsite
atverti tuščią dokumentą lokaliame tekstų redaktoriuje ir perkopijuoti kodą
vienu mygtuko ar klavišo paspaudimu.

### Trikdžių šalinimas

Mūsų pavyzdžiai yra paremti aktualios LaTeX sistemos naudojimu. Jie visi
veikia su abiem internetinių paslaugų platformomis, todėl jei gaunate
klaidas, leisdami mūsų pateiktus pavyzdžius lokaliai, turite pirmiausia
patikrinkite, ar jūsų LaTeX sistema yra atnaujinta.

---

## TeX variklio pasirinkimas

Dirbant su pavyzdiniais dokumentais yra naudojamas standartinis `pdflatex` variklis.

Jūs galite priversti naudoti `latex`, `pdflatex`, `xelatex`, `lualatex`,
`platex` ar `uplatex`, įdėdami, pavyzdžiui, tokios formos komentarą:

`% !TEX ` _bet koks tekstas_ `lualatex`

kur pirmasis tarpas yra nebūtinas, skirtumas tarp didžiųjų-mažųjų raidžių yra
ignoruojamas, kaip ir _bet koks tekstas_ tarp pirmojo ir paskutiniojo žodžių.

Tai leidžia naudoti komentaro formą `% !TEX program=pdflatex`, kuri naudojama
kai kuriuose TeX redaktoriuose, bet nereikalauja rašyti `program=` ir šiuo
metu yra ribojama tik pasirinkimu variklio, kuris palaikomas minėtų
internetinės paslaugos tiekėjų.

Jūs surasite šio tipo komentaro pavyzdžius, kurie nurodo LuaLaTeX 
[kai kuriuose šios svetainės pavyzdžiuose](more-14).

Kai `platex` ar `uplatex` yra nurodyti, tada `dvipdfmx` programa taip pat yra
naudojama pagaminti PDF rezultatą iš tarpinės DVI išvesties, kurią šie
varikliai generuoja.  Taipogi `dvips` ir `ps2pdf` programos yra naudojamos,
kai nurodomas `latex`.

Jeigu variklis `% !TeX` komentaru nenurodomas, tada naudojamas `pdflatex`,
nebent jūs buvote nustatęs standartu naudoti kitą TeX variklį [svetainės
nustatymų](settings) puslapyje.

---

## Išvesties rodymo pasirinkimas

Kai jūs naudojate TeXLive.net sistemą, tada PDF išvestis, gauta iš pavyzdžio
vykdymo, yra standartiškai rodoma naudojant
[PDF.js](https://mozilla.github.io/pdf.js/).  Tai užtikrina vienodą veikimą
plačiausioje naršyklių klasėje.

Jei jūs pageidaujate naudoti jūsų naršyklės PDF skaityklę (joje
įmontuotą ar išorinę programą, kviečiamą pagal jūsų nustatymus), tai
pridėkite tokios formos komentarą:

`% !TEX ` _bet koks tekstas_ `pdf`

Standartinis elgesys atitinka `pdfjs` įrašymą paskutiniuoju žodžiu.  Kai kada
derinimo reikmėms jūs galite norėti gauti log failą, net jei pavyzdys
kompiliavosi be klaidų. Tai gali būti pareikalauta, įrašant `log` kaip
paskutinįjį komentaro žodį.

Kaip alternatyvą `% !TeX` komentarams jūs galite nurodyti svetainės
standartinį išvesties parametrą [svetainės nustatymų](settings)
puslapyje. Nustatymai yra susieti su konkrečia naršykle, todėl, pavyzdžiui,
jūs galite standartiškai nustatyti `pdfjs` mobiliajame įrenginyje, bet
pasirinkti `pdf` stalinio kompiuterio naršyklėje, kad būtų naudojamas jos
standartinis PDF vaizdavimas.

---

## HTML išvestis (make4ht, LaTeXML, lwarp)

Kai naudojama TeXLive.net sistema, tada galima nurodyti papildomus išvesties
variantus:  `make4ht`, `LaTeXML` ar `lwarp`. Jie skirti išvesti vieną ar
daugiau HTML puslapių, įrėmintų tame pačiame puslapyje.  Tuo pat metu galima
nurodyti variklius `xelatex` ar `lualatex`, taipogi standartinį `pdflatex`
kvietimą.

Kad įgalinti šią išvestį, pridėkite komentarą:


```
% !TeX make4ht
```
{: .noedit :}


Pakeičiant `make4ht` į `LaTeXML` ar `lwarp`, nurodomas tų sistemų naudojimas.



Kitu būdu jūs galite `make4ht`, `LaTeXML` ar `lwarp` išvestis nurodyti kaip
standartines [svetainės nustatymų](settings) puslapyje.


Naudodami lokalią TeX sistemą, tokią pat išvestį, kaip `make4ht` atveju,
gauname vykdydami komandinę eilutę

```
make4ht  document.tex "learnlatex4ht,2,mathml,mathjax,svg"
```
{: .noedit :}

su papildoma opcija `-x` ar `-l`, jei reikia kviesti atitinkamai XeLaTeX ar LuaLaTeX.

Lokaliai vykdant ir kitokios konfigūracijos yra įmanomos, žiūrėkite [make4ht
vadovėlį](https://texdoc.org/pkg/make4ht).


Kad `LaTeXML` būtų vykdomas lokaliai, jums reikia turėti įdiegus LaTeXML (jis
nėra TeX Live ar MiKTeX dalis) ir vykdyti

```
latexml document.tex > document.xml
latexmlpost --format=html5 \
   --javascript='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' \
   --destination=document.html" document.tex
```
{: .noedit :}

Šiuo atveju yra daug kitokių LaTeXML konfigūracijų,
[aprašytų vadovėlyje](https://dlmf.nist.gov/LaTeXML/manual/).


Išvesties `lwarp` lokali konfigūracija čia neaprašoma, nes yra kažkiek
eksperimentinė ir gali keistis.  Esamą versiją galima pamatyti [kodo
saugykloje](https://github.com/davidcarlisle/latexcgi/blob/main/lwarp/latexcgilwarp).


---

[^1]: Pažymime, kad svetainės kūrimo metu mes taip pat naudojome
      [LaTeX.Online](https://latexonline.cc/) ir
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http), ir todėl mes
      dėkojame šių paslaugų kūrėjams už atliktas korekcijas, įgalinusias
      leisti šios svetainės pavyzdžius jau ankstyvoje stadijoje.


