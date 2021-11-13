---
layout: "lesson"
lang: "lt"
title: "Šriftų pasirinkimas ir Unicode „variklių“ naudojimas"
description: "Ši pamoka aprašo kontekstą, kurį sukuria LaTeX interpretuodamas Unicode simbolius, ir kaip jis paveikia teksto įvedimą ir šriftų naudojimą.  Sužinokite apie Unicode ir OpenType šriftų palaikymą."
toc-anchor-text: "Šriftai ir Unicode varikliai"
toc-description: "Šriftų ir failų kodavimo pasirinkimas."
---

# Šriftai ir Unicode varikliai

<span
  class="summary">Ši pamoka aprašo kontekstą, kurį sukuria LaTeX interpretuodamas Unicode simbolius, ir kaip jis paveikia teksto įvedimą ir šriftų naudojimą.  Sužinokite apie Unicode ir OpenType šriftų palaikymą.</span>

Kai TeX ir LaTeX buvo pradėti plačiau naudoti, jie iš esmės susitvarkydavo
tik su Europos kalbomis, nors buvo galimybė naudoti kitas abėcėles, tokias
kaip graikų ir rusų.

## Akcentai ir kirčiuotos raidės

TeX originaliu būdu akcentai ir kirčiuotos raidės buvo įvedamos naudojant komandas,
tokias kaip `\c{c}`, kad išvesti ç, ar `\'e` &ndash; kad é.  Nors kai
kurie žmonės ir toliau naudoja šias įvesties komandas, nes jas galima lengvai
surinkti ASCII klaviatūromis, kiti norėjo, kad būtų galima tiesiogiai naudoti
jų lokalizuotų klaviatūrų klavišais įvedamus simbolius.

Prieš Unicode įvedimą LaTeX palaikė daugelį failų koduočių lentelių, kurių
kiekviena leido tekstą natūraliai rašyti tam tikromis kalbomis, pavyzdžiui,
naudojant `latin1` kodavimą prancūzų vartotojai galėjo rašyti `déjà vu`, o
LaTeX išsiversdavo kirčiuotas raides į TeX komandas, kad gautų teisingą
išvestį.

Šį metodą šiuolaikinis LaTeX vis dar naudoja, kai kompiliuojama su `pdflatex`
varikliu.  Ir tokiu atveju daroma prielaida, kad visi failai yra
Unicode'iniai (tiksliau, UTF-8 koduotės), jei nenurodyta kitaip.  Nors šis
variklis apsiriboja 8&nbsp;bitų šriftais, dauguma Europos kalbų yra palaikomos.

## Šriftų pasirinkimas

Šrifto parinkimas dirbant su `pdflatex` naudoja patikimą LaTeX šriftų
pasirinkimo schemą, ir šių laikų standartinis LaTeX turi paruošęs naudojimui
daug šriftų.  Pavyzdžiui, TeX Gyre yra aukštos kokybės šriftų rinkinys,
atitinkantis daugumai žmonių gerai pažįstamus ir įprastus šriftus, kaip
Times, Helvetica, Palatino ir pan.  Įkelti šiuos šriftus į dokumentą yra taip
pat paprasta, kaip įkelti paketą atitinkamu pavadinimu.  Šrifto Times
vizualus atitikmuo TeX Gyre šeimoje yra Termes:


```latex
\usepackage{tgtermes}
```
{: .noedit :}

Naudojant `pdflatex`, dauguma šriftų yra pasiekiami per paketus.  Galite
užmesti akį į [LaTeX“ šriftų katalogą](https://www.tug.org/FontCatalogue/)
arba [CTAN šriftų puslapį](https://www.ctan.org/topic/font), kad pamatyti
pasirinkimo galimybes.  Taip pat galite paieškoti norimo šrifto internete,
jei jis turi suderinamą su `pdflatex` paketą.  Jei patiko patentuotas
šriftas, galite paieškoti tinkamo klono, kuris daugeliui pritaikymų būtų
pakankamai panašus į originalą.

## Unicode era

Kadangi `pdflatex` gali naudoti tik 8&nbsp;bitų failų koduotes ir 8&nbsp;bitų
šriftus, su juo negalima natūraliai pajungti šiuolaikinių OpenType šriftų ir
lengvai persijunginėti tarp kelių kalbų, jei jose naudojamos skirtingos
abėcėlės (_scripts_, jei naudoti techninį terminą).  Yra du pdfTeX
pakaitalai, natūraliai priimantys Unicode įvestį ir šiuolaikinius šriftus:
XeTeX ir LuaTeX.  Ant LaTeX dokumentų jie yra iškviečiami, nustačius jūsų
redaktoriuje naudoti atitinkamai variklius `xelatex` ir `lualatex`.

Šiuose varikliuose šriftai pasirenkami `fonspec` paketo komandomis, o
paprastiems dokumentams tai gali atrodyti taip paprastai, kaip:

```latex
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
```
{: .noedit :}

Taip pasirenkamas TeX Gyre Termes šriftas, kaip ir `pdflatex` pavyzdyje
aukščiau.  Pažymėtina, kad šis metodas veikia *bet kuriam* OpenType šriftui.
Kai kuriuos šriftus, naudojamus su `pdflatex`, taip pat galima naudoti su
`xelatex` ir `lualatex`, pakrovus tinkamus paketus arba pajungus juos, kaip
bet kurį jūsų kompiuteryje įdiegtą šriftą, naudojant paketą `fontspec`, kaip
parodyta aukščiau.

[LaTeX šriftų kataloge](https://www.tug.org/FontCatalogue/) taip pat rodomi
šriftai, turintys OpenType versijas, todėl galite jį naudoti kaip šaltinį
susirasti šriftus, taip pat kaip ir 
[CTAN puslapį](https://www.ctan.org/topic/font), irgi minėtą anksčiau.

Pasirinkus šriftą, bet koks tekstas Unicode koduotėje dabar gali būti
surinktas ar nukopijuotas į įvesties dokumentą.  Čia yra pavyzdys, kuriame
matomos lotyniškos ir graikiškos raidės, taip pat CJK hieroglifai:

```latex
% !TEX xelatex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{texgyretermes-regular.otf}
\newfontfamily\cjkfont{FandolSong-Regular.otf}
\begin{document}

ABC → αβγ → {\cjkfont 你好}

\end{document}
```

<p class="hint">Perjunginėjant kalbas paprastai svarbu pakeisti ir tokius dalykus kaip žodžių kėlimo šablonai ar panašiai, ir būtent <code>babel</code> ir <code>polyglossia</code> paketai pateikia patikimas komandas tokiam pakeitimui.</p>
