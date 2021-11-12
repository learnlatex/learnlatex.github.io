---
layout: "lesson"
lang: "lt"
title: "Citatos ir nuorodos"
description: "Ši pamoka apie bibliografinių bazių pagrindus. Sužinosite, kaip sukurti savo duomenų bazes ir kaip jas naudoti savo dokumentuose, vykdant dvi galimas darbo eigas."
toc-anchor-text: "Citatos ir nuorodos"
toc-description: "Darbas su bibliografinėmis bazėmis."
---

# Citatos ir nuorodos

<script>
runlatex.preincludes = {
 "pre1": {
    "pre0": "learnlatex.bib"
   },
 "pre2": {
    "pre0": "learnlatex.bib"
   }
}
</script>

<span
  class="summary">Ši pamoka apie bibliografinių duomenų bazių pagrindus. Sužinosite, kaip sukurti savo duomenų bazes ir kaip jas naudoti savo dokumentuose, vykdant dvi galimas darbo eigas.</span>

Nors bibliografines nuorodas galima įkelti į savo dokumentą tiesiogiai, bet
daug rašantys autoriai paprastai šią informaciją pasiima iš vieno ar kelių
išorinių failų. Tokiame faile yra bibliografinių duomenų bazė, kurioje
informacija yra paruošta automatiniam apdorojimui. Bibliografinių duomenų
bazių naudojimas leidžia daug kartų naudoti vieną kartą suvestą informaciją
ir dar išvengti rankinio performatavimo.


## Bibliografinės bazės

Su LaTeX susijusios bibliografinės bazės paprastai vadinamos „BibTeX failais“
ir atskiriamos pagal plėtinį `.bib`.  Juose yra bibliografiniai įrašai, po
vieną kiekvienam literatūros šaltiniui, o kiekvienas įrašas yra serija
raktažodžių apibrėžimų, vadinamų „laukais“ (_fields_).  Pažvelkime į pavyzdį:

<!-- {% raw %} -->
```bibtex
@article{Thomas2008,
  author  = {Thomas, Christine M. and Liu, Tianbiao and Hall, Michael B.
             and Darensbourg, Marcetta Y.},
  title   = {Series of Mixed Valent {Fe(II)Fe(I)} Complexes That Model the
             {H(OX)} State of [{FeFe}]Hydrogenase: Redox Properties,
             Density-Functional Theory Investigation, and Reactivity with
             Extrinsic {CO}},
  journal = {Inorg. Chem.},
  year    = {2008},
  volume  = {47},
  number  = {15},
  pages   = {7009-7024},
  doi     = {10.1021/ic800654a},
}
@book{Graham1995,
  author    = {Ronald L. Graham and Donald E. Knuth and Oren Patashnik},
  title     = {Concrete Mathematics},
  publisher = {Addison-Wesley},
  year      = {1995},
}
```
<!-- {% endraw %} -->

Ten yra vienas įrašas apie straipsnį (_article_) ir vienas apie knygą
(_book_); tai yra bene dažniausiai sutinkami įrašų tipai.  Duomenų bazės
įrašo tipas visada rašomas po `@`, kaip parodyta, ir visa kita įrašo
informacija talpinama į figūrinių skliaustų porą.

Bibliografijos įrašui reikalingi laukai pateikiami rakto&ndash;reikšmės
(_key&ndash;value_) formatu, išskyrus vadinamąjį „raktą“ (_key_): citatos
identifikatorių.  Pastarasis turi būti unikalus, nes pagal jį ieškoma, bet
jūs galite naudoti bet kokią patinkančią raidžių seką, nes tai tik etiketė.
Pavyzdyje mes pasirinkome naudoti autoriaus vardą ir metus: tai yra įprasta
praktika.

Kurie tiksliai laukai reikalingi priklauso nuo įrašo tipo, tačiau dauguma jų
yra gana akivaizdūs. Galėjote pastebėti, kad `author` lauke skirtingi autoriai
atskirti skirtuku `and`. Tai yra _esminis_ dalykas: formuojant _išvestį_
reikia žinoti, kuris autorius yra kuris. Taip pat gal pastebėjote, kad
straipsnio pavadinime (`title` lauke) kai kurios dalys yra papildomai
apskliaustos figūriniais skliaustais; jie apsaugo nuo didžiųjų raidžių
pakeitimo mažosiomis ir atvirkščiai.


.bib failų redagavimas rankomis gana nuobodus užsiėmimas, dauguma žmonių
naudoja tam skirtą redaktorių. [JabRef](https://www.jabref.org) yra
populiarus ir veikia įvairiose operacinėse sistemose; yra keletas kitų
analogiškų internetinių paslaugų tiekėjų.  Jei nuorodoje yra DOI (
_**D**igital **O**bject **I**dentifier_, skaitmeninio objekto
identifikatorius), galite pabandyti [doi2bib](https://doi2bib.org) tam, kad
lengvai gauti BibTeX įrašą.  Tačiau tam būtinai patikrinkite, ar įrašas
teisingas!

Savo demonstracijose naudosime pateiktą aukščiau trumpą duomenų bazės
pavyzdį: mes ją išsaugojome kaip `learnlatex.bib`.


## Informacijos perkėlimas iš duomenų bazės

Informacijos perkėlimui į savo dokumentą atliekami trys veiksmai.
Pirmiausia, įvesties dokumento kompiliavimas su LaTeX, kurio metu sukuriamas
failas su nuorodų, kurias cituoja jūsų dokumentas, sąrašu.  Antra, leidimas
programos, kuri paima informaciją iš bibliografinės bazės, išrenka jūsų
naudojamus įrašus ir juos sutvarko.  Galiausiai, savo dokumento kompiliavimas
dar kartą (ar du), kad LaTeX panaudotų šią informaciją jūsų citavimo
nuorodoms sutvarkyti.  Paprastai, norint susieti visas nuorodas, reikia bent
dviejų kompiliacijų.

Antrame žingsnyje daugiausia naudojamos dvi sistemos: BibTeX ir Biber.  Biber
visada naudojamas tik kartu su LaTeX paketu `biblatex`, tuo tarpu BibTeX
veikimui paketai nereikalingi, nors kai kuriems paketams, kaip `natbib`,
Bibtex reikalingas.

Antrojo įrankio ir LaTeX paleidimus skirtingi redaktoriai tvarko skirtingai.
Mūsų internetinių pavyzdžių vykdymui iš pamokų puslapių yra keletas
„užkulisinių“ scenarijų, kurie viską padaro vieno kreipimosi metu.  Lokaliame
redaktoriuje gali būti ir vienas mygtukas „daryk“, bet gali tekti ir pačiam
pasirinkti BibTeX ar Biber leidimą tarp LaTeX leidimų.

Citatų ir literatūros sąrašo įrašų formatai nepriklauso nuo jūsų BibTeX
duomenų bazės ir yra nustatomi taip vadinamu „stiliumi“.  Pamatysime,
kad stiliai veikia šiek tiek kitaip, kai naudojamas BibTeX ir kai `biblatex`
paketas, tačiau išlaikoma bendra idėja, kad mes galime pasirinkti, kaip
atrodys cituojama informacija.

## BibTeX darbo eiga su `natbib`

Nors citatas galima įterpti į LaTeX dokumentą ir neįkeliant jokių paketų,
galimybės yra gana ribotos.  Vietoj to naudosime `natbib` paketą, kuris
leidžia kurti įvairių tipų citatas ir turi daugybę stilių

Pagrindinė mūsų įvesties struktūra yra parodyta šiame pavyzdyje:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{natbib}

\begin{document}
The mathematics showcase is from \citet{Graham1995}, whereas
there is some chemistry in \citet{Thomas2008}.

Some parenthetical citations: \citep{Graham1995}
and then \citep[p.~56]{Thomas2008}.

\citep[See][pp.~45--48]{Graham1995}

Together \citep{Graham1995,Thomas2008}

\bibliographystyle{plainnat}
\bibliography{learnlatex}
\end{document}
```

Kaip galite matyti, galime cituoti įrašus iš duomenų bazės, pateikdami jų
raktus (identifikatorius).  Pakete `natbib` yra apibrėžtos komandos tiek
citavimui tiesiog tekste, tiek skliausteliuose, atitinkamai `\citet` ir
`\citep`.  Pagrindinis stilius pasirenkamas `\bibliographyle` eilutėje; čia
mes naudojome `plainnat` stilių.  Literatūros sąrašas išvedamas
`\bibliography` komanda, kurios argumente nurodoma duomenų bazė, kurią reikia
naudoti; jei daugiau, nei viena, tai kableliais atskiriami jų vardai.

Puslapių iš cituotų šaltinių numerius galima pridėti prie citatos su
neprivalomu argumentu.  Jei pateikiami du neprivalomi argumentai
(laužtiniuose skliaustuose), tai pirmojo turinys eina prieš citavimo žymę, kaip
trumpa įvadinė pastaba, o antrojo &ndash; po žymės, kaip detalizuojanti pastaba.

Pavyzdyje pateikti nustatymai naudoti autoriaus&ndash;metų stilių, tačiau
galime naudoti ir skaitines citatas.  Tam pakanka nurodyti `numbers` opciją
prie `natbib` paketo.


## Darbas su `biblatex`

Paketas `biblatex` veikia kiek kitaip, nei `natbib`, nes duomenų bazes
pasirenkame dar preambulėje, nors spausdiname informaciją iš jų dokumento
tekste.  Tam yra keletas naujų komandų.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[style=authoryear]{biblatex}
\addbibresource{learnlatex.bib} % file of reference info

\begin{document}
The mathematics showcase is from \autocite{Graham1995}.

Some more complex citations: \parencite{Graham1995} or
\textcite{Thomas2008} or possibly \citetitle{Graham1995}.

\autocite[56]{Thomas2008}

\autocite[See][45-48]{Graham1995}

Together \autocite{Thomas2008,Graham1995}

\printbibliography
\end{document}
```

Pastebėkite, kad `\addbibresource` _reikalauja_ pilno duomenų bazės failo
vardo, kai tuo tarpu praleidinėjome `.bib` komandoje `\bibliography` su
`natbib`.  Taip pat atkreipkite dėmesį, kad `biblatex` citavimo komandos yra
ilgesnės, nors jas visas gana lengva atspėti.

Taipogi, trumpą tekstą prieš ir po citavimo galima įterpti neprivalomais
argumentais.  Atkreipkite dėmesį, kad prieš puslapių numerius čia nereikia
pridėti `p.~` ar `pp.~`, `biblatex` pats gali parinkti atitinkamą priešdėlį.

Paketo biblatex kvietimo eilutėje  pasirenkamas ir citavimo stilius. Čia mes
naudojome `authoryear`, tačiau yra ir skaitinis stilius, ir daugybė kitų.

## Pasirinkimas tarp BibTeX ir `biblatex`

Nors abu, ir BibTeX, ir biblatex, naudoja BibTeX failus ir gali išvesti
struktūriškai panašų rezultatą, jie naudoja visiškai skirtingus būdus šiam
rezultatui gauti.  Šie skirtumai tarp abiejų darbo eigų gali padėti jums
pasirinkti, kuris iš jų jums tiks geriausiai.

BibTeX darbo eigoje bibliografijos stilių nustato a `.bst` failas, kurį
pasirenkate komanda `\bibliographystyle`.  Paketas `biblatex` vietoje `.bst`
failų naudoja kitokią sistemą.  Jei naudojate LaTeX dokumento šabloną su
kartu pateiktu `.bst` failu, arba jūs gavote `.bst` failą, skirtą jūsų
projektui, turite naudoti BibTeX darbo eigą ir negalite naudoti `biblatex`.

Paketas `biblatex` veikia kitokiu metodu: galite modifikuoti bibliografijos
ir citavimo komandų išvestį tiesiog iš savo dokumento preambulės
perapibrėždami ten LaTeX komandas.  Tuo tarpu norint modifikuoti BibTeX
`.bst` stilius, reikia redaguoti šiuos (išorinius LaTeX atžvilgiu) failus, o
tam dar reikia žinių ir apie BibTeX programavimo kalbą.  Bendrai kalbant,
`biblatex` lengviau keičiamas pagal poreikius nei BibTeX stiliai.

Bendrai paėmus, su „biblatex“ lengviau užprogramuoti sudėtingesnius citavimo
stilius, turinčius daugiau skirtingų citavimo komandų. Jis taip pat įgalina
labiau nuo konteksto priklausantį jų elgesį.  Grubiai tariant, tokie dalykai
yra mažiau reikšmingi stiliuose, naudojamuose tiksliųjų mokslų srityse,
tačiau tampa aktualūs pereinant prie sudėtingesnių stilių humanitarinių
mokslų srityse.

BibTeX gali teisingai rūšiuoti tik JAV ASCII simbolius ir remiasi ASCII
pagrįstais apėjimais rūšiuojant ne ASCII simbolius.  Su Biber programa
`biblatex` siūlo pilno Unikodo rūšiavimo galimybes.  Todėl `biblatex`
paprastai yra geresnis pasirinkimas, jei norite rūšiuoti savo literatūros
sąrašą ne ASCII ar ne anglų abėcėlės tvarka.

Daug ilgiau naudojamas nei `biblatex`, BibTeX yra daug plačiau paplitęs nei
`biblatex`, tai yra, daugelis leidėjų ir žurnalų tikisi bibliografijų,
sugeneruotų BibTeX darbo eigoje.  Tokie leidėjai negali apdoroti arba tiesiog
nepriima publikacijų, naudojančių `biblatex`.

Galutinė išvada yra tokia: peržiūrėkite gaires autoriams, jei ruošiatės
pateikti savo darbą žurnalui ar leidėjui.  Jei jums pateiktas `.bst` failas
su stiliumi, naudokite BibTeX.  Jei norite palyginti paprasto bibliografijos
ir citavimo stiliaus ir tinka rūšiavimas angliško ASCII pagrindu, tada turėtų
pakakti BibTeX.  Jei jums reikalingas sudėtingesnis citavimo stilius, ne
angliškas rūšiavimas, ar lengvesnis citavimo ir bibliografijos stiliaus
pritaikymas, tada pasidomėkite `biblatex` naudojimu.


## Pratimai

Išbandykite abu `natbib` and `biblatex` pavyzdžius. `natbib` atveju turėsite
paleisti LaTeX, BibTeX, LaTeX, LaTeX; `biblatex` &ndash; tai LaTeX, Biber,
LaTeX.  Suraskite, kaip tai padaryti savo redaktoriuje, arba išbandykite
Overleaf ir TeXLive.net automatiką.

Pažiūrėkite, kas nutinka, kai sukuriate naujus duomenų bazių įrašus ir naujus
citavimo įrašus.  Pridėkite citavimą, kurio nėra duomenų bazėje, ir
pažiūrėkite, kaip jis bus išvestas.  Eksperimentuokite su `natbib` opcija
`numeric` ir `biblatex` opcija `style=numeric`.
