---
layout: "lesson"
lang: "lt"
title: "Pagrindinė LaTeX dokumento struktūra"
description: "Ši pamoka yra apie pagrindinę LaTeX dokumento struktūrą ir jo pavertimą į PDF failą, taip pat apie pagrindinius specialiuosius simbolius, naudojamus aprašant struktūrą."
toc-anchor-text: "Dokumento struktūra"
toc-description: "Pagrindinė dokumento struktūra."
---

# LaTeX dokumento struktūra

<span
  class="summary">Ši pamoka yra apie pagrindinę LaTeX dokumento struktūrą ir jo pavertimą į PDF failą, taip pat apie pagrindinius specialiuosius simbolius, naudojamus aprašant struktūrą.</span>

Pirmasis jūsų LaTeX dokumentas bus labai paprastas: tik parodys dalis, kurios
yra kiekviename dokumente. Aptarsime, kaip jį sėkmingai įvesti ir bus pirma
proga panaudoti pavyzdį čia, svetainėje `learnlatex.org`.

Jei naudojate lokaliai įdiegtą LaTeX, redaktoriuje sukurkite naują failą
pavadinimu `first.tex` ir nusikopijuokite arba surinkite žemiau esantį tekstą.

Jei naudojate internetinę sistemą, galite tiesiog spustelėti po pavyzdžiu
esančius mygtukus „Leisti TeXLive.net“ arba „Atverti Overleaf“, kad
išbandytumėte!

<p
  class="hint">Siūlome išbandyti internetines paslaugas, net jei įsidiegėte LaTeX; tai yra gera proga pamatyti, kaip veikia skirtingi pasirinkimai.</p>

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Hey world!

This is a first document.
\end{document}
```

Išsaugokite failą ir išveskite iš jo PDF dokumentą; jei naudojate LaTeX
lokaliai, tada tikslus mygtukas, kurį reikia tam paspausti, priklauso nuo
jūsų pasirinkto redaktoriaus.  Turite gauti PDF failą, kuriame yra pavyzdžio
tekstas, esantis tarp `\begin{document}` ir `\end{dokument}` _plius_ puslapio
numeris; LaTeX jį prideda automatiškai.

Peržiūrėkite išvestį `first.pdf`, naudodami bet kurią PDF skaityklę. Atrodo
puikiai; sveikiname!

Jei norite gauti HTML, o ne PDF išvestį, pažiūrėkite į [pagalbą](./help),
kaip tai atlikti.

## Klaidų tvarkymas

Klaidos pasitaiko. Patikrinkite, ar įvedėte kiekvieną pavyzdžio eilutę
tiksliai taip, kaip ji parašyta aukščiau. Kartais nežymūs įvesties pakeitimai
nulemia didelius rezultato pokyčius, iki LaTeX neveikimo. Jei užstrigote,
pabandykite ištrinti dokumentą ir nusikopijuoti iš naujo pavyzdžio eilutes.

Jei jūsų LaTeX procesas baigiasi klaustuku terminalo lange, tada galite iš to
išeiti, įvesdami po klaustuko `x` ir paspausdami `<Enter>`.

LaTeX klaidų pranešimai stengiasi būti naudingi, tačiau jie nėra tokie, kaip
tekstų tvarkyklėse. Kai kuriuose LaTeX redaktoriuose taip pat sunku pamatyti
„pilną“ klaidos tekstą, kuris gali atskleisti esmines detales. LaTeX vykdymo
metu visada sukuria žurnalą su atliekamų veiksmų įrašais; tai yra tekstinis
failas su praplėtimu `.log`.  Jame jūs visada galite surasti pilnus klaidų
pranešimus. Jeigu jūs kreipsitės pagalbos dėl klaidos, LaTeX ekspertai dažnai
paprašys log failo kopijos.

<p
  class="hint">Daugiau dėmesio klaidoms paskirsime <a href="./lesson-15">pamokoje 15</a>.</p>

## Ką sužinojote

Pirmasis dokumentas pateikė tik pamatinius dalykus.
LaTeX dokumentai yra teksto ir komandų mišinys.
Komandos prasideda kairiniu pasviruoju brūkšniu 
ir kartais turi argumentų figūriniuose skliaustuose 
(ir/arba neprivalomus argumentus laužtiniuose skliaustuose).
Išvesties PDF gaunate, paleisdami LaTeX programą ant įvesties failo.

Kiekvienas LaTeX dokumentas turi `\begin{document}` ir atitinkantį `\end{document}`.
Tarp jų yra *dokumento kūnas* su jūsų turiniu.
Pavyzdyje kūnas turi dvi pastraipas (jos atskiriamos tuščiomis eilutėmis). 
Prieš `\begin{document}` yra *dokumento preambulė*, 
skirta koduoti dokumento elementų išdėstymą. 
Komanda `\usepackage` aprašyta [vėlesnėje pamokoje](lesson-06), 
ji daugumoje mūsų pavyzdžių naudojama nurodyti šriftų kodavimą.

LaTeX turi apibrėžęs daugiau komandų `\begin{...}` ir `\end{...}` porų; 
jos žymi tai, kas vadinama *aplinkomis*. Šios komandos ir naudojamos visada
poromis, kiekvienai `\begin{x}` turi atitikti `\end{x}`. 
Jei viena aplinka prasidėjo kitoje aplinkoje, tai joje ir turi pasibaigti,
 t.y., jei `\begin{y}` yra tarp atitinkančių `\begin{x}` ir `\end{x}`, 
tai `\end{y}` turi būti tarp `\begin{y}` ir `\end{x}`.

Mes galime rašyti komentarus pradėdami juos procento ženklu `%`; panaudokime
juos pakomentuoti tokią dokumento struktūrą:

```latex
\documentclass[a4paper,12pt]{article} % Dokumento klasė su opcijomis
% Select T1 font encoding: suitable for Western European Latin scripts
\usepackage[T1]{fontenc}
% Komentaras preambulėje
\begin{document}
% Tai yra komentaras kūne
This is   a simple
document\footnote{with a footnote}.

This is a new paragraph.
\end{document}
```

Kaip matote, turime dvi pastraipas, atskirtas tuščia eilute. Taip pat
pastebėkite (PDF išeities faile), kad keli tarpai yra traktuojami kaip
vienas.

Taip pat kartais gali prireikti „kieto“ tarpo, per kurį nelaužiamos
eilutės. LaTeX dokumente toks tarpas žymimas bangele `~`, „surišančia“ du
teksto gabalus kartu. Tai ypač pravers vėliau šiame kurse, kai mes pradėsime
kurti nuorodas.

## Specialios raidės

Tikriausiai jau pastebėjote, kad ``\``, `{` ir `}` turi ypatingas roles LaTeX
dokumentuose. Su ``\`` prasideda kiekviena LaTeX instrukcija, vadinama
„komanda“. Figūriniai skliaustai `{` ir `}` apskliaudžia privalomus
argumentus: informaciją, kuri perduodama komandoms.

Yra daugiau raidžių, turinčių ypatingą reikšmes; ką tik matėme, pavyzdžiui,
kad `~` yra „kietas“ tarpas. Beveik visos tokios raidėse _labai_ retai
pasitaiko įprastame tekste, todėl jos ir buvo pasirinktos ypatingoms
rolėms. Jei jums prireiks parodyti vieną iš šių specialiųjų simbolių išeities
dokumente, rasite sprendimą [išsamesnės informacijos puslapyje](more-03).

## Pratimai

Paeksperimentuokite su internetine LaTeX paslaugų sistema: spustelėkite
mygtuką išvesties gavimui, tada paredaguokite pavyzdį tinklalapyje ir vėl
paleiskite LaTeX. 

Pabandykite pridėti teksto prie savo pirmojo dokumento, pagaminkite PDF
išvesties dokumentą ir pamatykite pakeitimus. Padarykite keletą skirtingų
pastraipų, pridėkite skirtingą skaičių tarpų ir vėl žiūrėkite, kas gavosi
išeities dokumente.

Ištirkite, ar jūsų LaTeX redaktorius palaiko SyncTeX: spustelėkite įvesties
faile ir suraskite, kaip peršokti į tą pačią eilutę PDF vaizde. 

Pabandykite pridėti keletą kietų tarpų ir pažiūrėti, kaip jie paveikia
eilučių laužymą.
