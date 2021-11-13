---
layout: "lesson"
lang: "lt"
title: "Darbas su LaTeX"
description: "Ši pamoka paaiškina apie TeX sistemas ir labiausiai naudojamas iš jų, išvardina kelis teksto redaktorius, paprastai naudojamus su LaTeX, ir internetines sistemas su integruotais redaktoriais."
toc-anchor-text: "Darbas su LaTeX"
toc-description: "TeX sistemos ir LaTeX redaktoriai."
---

# Darbas su LaTeX

<span
  class="summary">Ši pamoka paaiškina apie TeX sistemas ir labiausiai naudojamas iš jų, išvardina kelis teksto redaktorius, paprastai naudojamus su LaTeX, ir internetines sistemas su integruotais redaktoriais.</span>

LaTeX nėra atskira viena programa, „viską“ savyje talpinanti, o yra visuma
programų, veikiančių kartu. Pirmiausia jums reikia skirti du dalykus:

- _TeX sistema_
- Tekstinis redaktorius (dažnai pritaikytas būtent LaTeX)

## TeX sistemos

Darbo su LaTeX esmė yra kokios nors TeX sistemos naudojimas. Bet kuri TeX
sistema yra aibė „užkulisinių“ programų ir failų, reikalingų LaTeX darbui,
bet didumą laiko jums nereikės jų „leisti“.

Dabar yra pagrinde naudojamos dvi TeX sistemos, [MiKTeX](https://miktex.org/)
ir [TeX Live](https://tug.org/texlive). Abi veikia Windows, MacOS ir Linux.
MiKTeX daugiau remiasi Windows sistema; MacOS sistemoje TeX Live yra įjungtas
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

Yra daug daugiau LaTeX redaktorių, nei mes galime tikėtis čia išvardinti:
išsamus sąrašas yra [StackExchange
tinklapyje](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Bazinis redaktorius [TeXworks](https://tug.org/texworks) yra platinamas kartu
su TeX Live ir MiKTeX tiek Windows, tiek Linux, o
[TeXShop](https://pages.uoregon.edu/koch/texshop/) įeina į MacTeX.

<p 
  class="hint">Kokį redaktorių jūs bepasirinktumėte, mes rekomenduojame jį instaliuoti <i>jau</i> turint TeX sistemą, kad redaktorius galėtų ją „surasti“ ir tinkamai nusistatyti.</p>

## Darbas internete

Yra keletas galingų svetainių, kurios leidžia iš viso išvengti TeX sistemos ir
LaTeX redaktoriaus instaliavimo.  Šios svetainės suteikia jums galimybę
redaguoti savo failus tinklapyje, paleidžia LaTeX „už scenos“ ir parodo gautą
PDF.

Kai kurios iš šių svetainių kombinuoja LaTeX su WYSIWYG ypatybėmis, kai kitos
labiau koncentruojasi ties LaTeX kodu ir yra artimesnės lokalioms LaTeX
sistemoms.

Yra internetinės LaTeX sistemos, vykdančios LaTeX be asmeninio prisijungimo,
ir mes vienoje iš jų, [TeXLive.net](https://texlive.net), leisime jums
redaguoti ir testuoti pavyzdžius, kuriuos mes pateiksime.  Geriausios
sistemos, labiau tinkamos išbaigtiems darbams, reikalauja prisijungimo prieš
naudojimą.  Tai leidžia jums išsaugoti savo darbus, o svetaines apsaugo nuo
perkrovos.  Mes pateikiame nuorodas, sekdami kuriomis jūs galite redaguoti
savo pavyzdžius [Overleaf](https://www.overleaf.com), viename iš didžiausių
LaTeX svetainių.  Tokių sistemų yra ir daugiau,
[Papeeria](https://papeeria.com/) yra vienas iš pavyzdžių.

## Darbas kitiems tikslams

Jei jūs planuojate išsiųsti savo LaTeX failus į vietas, kuriose juos
kompiliuos, kaip leidėjai, konferencijų organizatoriai ar preprintų serveriai
(pvz., arXiv), jūs turite patikrinti jų keliamus reikalavimus.

## Pratimas

Paruoškite sau lokalią LaTeX sistemą _arba_ prisiregistruokite pas
internetinės LaTeX paslaugos tiekėją. Jei jūs naudosite lokalią sistemą, tada
jums taip pat reiks pasirinkti ir redaktorių: mes rekomenduojame pradėti
dirbti su TeXworks ar TeXShop (žr. aukščiau), o vėliau, kai jau žinosite,
kaip _jums_ geriausiai dirbasi su LaTeX, patyrinėsite kitus redaktorius.

Jūs galėsite [vykdyti visus mūsų kitus pratimus naršyklėje](help.md), bet mes
norime padėti jums pradėti dirbti su tikrais dokumentais, todėl dabar yra
tinkamas laikas pasiruošti.
