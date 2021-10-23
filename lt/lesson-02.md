---
layout: "lesson"
lang: "lt"
title: "Darbas su LaTeX"
description: "Ši pamoka paaiškina apie TeX sistemas ir labiausiai naudojamas iš jų, išvardina kelis teksto redaktrius, paprastai naudojamus su LaTeX, ir internetines sistemas su indegruotais redaktoriais."
toc-anchor-text: "Darbas su LaTeX"
toc-description: "TeX sistemos ir LaTeX redaktoriai."
---

# Darbas su LaTeX

<span
  class="summary">Ši pamoka paaiškina apie TeX sistemas ir labiausiai naudojamas iš jų, išvardina kelis teksto redaktrius, paprastai naudojamus su LaTeX, ir internetines sistemas su indegruotais redaktoriais.</span>

LaTeX nėra atskira viena programa, 'viską' savyje talpinanti, o yra visuma
programų, veikiančių kartu. Pirmiausia jums reikia skirti du dalykus:

- _TeX sistema_
- Tekstinis redaktorius (dažnai pritaikytas būtent LaTeX)

## TeX sistemos

Darbo su LaTeX esmė yra kokios nors TeX sistemos naudojimas. Bet kuri TeX
sistema yra aibė 'užkulisinių' programų ir failų, reikalingų LaTeX darbui,
bet didumą laiko jums nereikia jos 'leisti'.

Dabar yra pagrinde naudojamos dvi TeX sistemos, [MiKTeX](https://miktex.org/)
ir [TeX Live](https://tug.org/texlive). Abi veikia Windows, macOS ir Linux.
MiKTeX daugiau remiasi Windows sistema; macOS sistemoje TeX Live yra ijungtas
į didesnę kolekciją [MacTeX](http://www.tug.org/mactex/).  Kiekviena iš
sistemų turi [savo privalumų](https://tex.stackexchange.com/questions/20036),
ir jūs galite susipažinti su [daugiau patarimų LaTeX Projekto
puslapyje](https://www.latex-project.org/get/).

Jei jūs neapsisprendžiate, kokią sistemą instaliuotis, mes rekomenduojame
pasirinkti TeX Live, nes ji veikia visose pagrindinėse operacinėse
platformose ir turi tam tikrų veikimo greičio privalumų.

## Redaktoriai

LaTeX failai yra paprastas tekstas, todėl gali būti redaguojami bet kokiu
teksto redaktoriumi.  Vis dėlto patogiausi yra pritaikyti darbui su LaTeX
redaktoriai, turintys tokias ypatybes, kaip kompiliavimo paleidimą ant jūsų
failų vienu paspaudimu, integruotą PDF skaityklę, ir sintaksės spalvinimą.
Tikrai naudinga visų modernių LaTeX redaktorių ypatybė yra SyncTeX:  galimybė
klikinti jūsų įvesties faile ir peršokti į atitinkamą vietą PDF, ir
atvirkščiai.

Yra daug daugiau LaTeX redaktorių, nei mes galime tikėtis čia išvardinti: yra
išsamus sąrašas [StackExchange
tinklapyje](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Bazinis redaktorius [TeXworks](https://tug.org/texworks) platinamas kartu su
TeX Live ir MiKTeX tiek Windows, tiek Linux, o
[TeXShop](https://pages.uoregon.edu/koch/texshop/) yra dalis MacTeX.

<p 
  class="hint">Kokį redaktorių jūs bepasirinktumėte, mes rekomenduojame jį instaliuoti <i>po</i> jau turint TeX sistemą, kad redaktorius galėtų ją 'surasti' ir tinkamai nusistatyti.</p>

## Darbas internete

Yra keletas galingų saitynų, kuie leidžia iš viso išvengti TeX sistemos ir
LaTeX redaktoriaus instaliavimo.  Šie saitynai suteikia jums galimybę
redaguoti savo failus tinklapyje, paleidžia LaTeX „už scenos“ ir parodo gautą
PDF.

Kai kurie iš šių saitynų kombinuoja LaTeX su WYSIWYG ypatybėmis, kai kiti
labiau koncentruojasi ties LaTeX kodu ir yra artimesni lokalioms LaTeX
sistemoms.

Yra internetinės LaTeX sistemos, vykdančios LaTeX be asmeninio prisijungimo,
ir mes vienoje iš jų, [TeXLive.net](https://texlive.net), leisime jums
redaguoti ir testuoti pavyzdžius, kuriuos mes pateiksime.  Geriausios
sistemos, labiau tinkamos išbaigtiems darbams, reikalauja prisijungimo prieš
naudojimą.  Tai leidžia jums išsaugoti savo darbus, o saitynus apsaugo nuo
perkrovos.  Mes pateikiame nuorodas, sekdami kuriomis jūs galie redaguoti
savo pavyzdžius [Overleaf](https://www.overleaf.com), viename iš didžiausių
LaTeX saitynų.  Tokių saotymų yra ir daugiau,
[Papeeria](https://papeeria.com/) yra vienas iš pavyzdžių.

## Darbas kiteims tikslams

Jei jūs planuojate išsiųsti savo LaTeX failus į vietas, kuriose juos
kompiliuos, kaip leidėjai, konferencijų organizatoriai ar preprintų serveriai
(pvz., arXiv), jūs turite patikrinti jų keliamus apribojimus.

## Pratimas

Paruoškite sau lokalią LaTeX sistemą _arba_ prisiregistruokite pas
internetinės LaTeX paslaugos tiekėją. Jei jūs naudosite lokalią sistemą, tada
jums taip pat reiks pasirinkti ir redaktorių: mes rekomenduojame pradėti
dirbti su TeXworks ar TeX Shop (žr. aukščiau), o vėliau, kai jau žinosite,
kaip _jums_ geriausiai dirbasi su LaTeX, patyrinėsite kitus redaktorius.

Jūs galėsite [vykdyti visus mūsų kitus pratimus naršyklėje](help.md), bet mes
norime padėti jums pradėti dirbti su tikrais dokumentais, todėl dabar yra
tinkamas laikas pasiruošti.  yourself ready.