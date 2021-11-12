---
layout: "lesson"
lang: "lt"
title: "Lentelės"
description: "Ši pamoka parodo, kaip koduoti LaTeX kalboje lenteles, nustatyti teksto lygiavimą langeliuose ir tarp jų, pridėti linijas ir apjungti langelius."
toc-anchor-text: "LaTeX lentelės"
toc-description: "Darbo su lentelėmis pagrindai."
---

# Lentelės

<span
  class="summary">Ši pamoka parodo, kaip koduoti LaTeX kalboje lenteles, nustatyti teksto lygiavimą langeliuose ir tarp jų, pridėti linijas ir apjungti langelius.</span>

Lentelės LaTeX renkamos `tabular` aplinkoje. Šioje pamokoje darome prielaidą,
kad jūs naudojate `array` paketą, kuris prideda daugiau galimybių LaTeX
lentelėms ruošti ir kuris nėra LaTeX branduolyje tik dėl istorinių
aplinkybių. Taigi, įdėkite į savo dokumento preambulę šiuos dalykus ir mes
galėsime pradėti:

```latex
\usepackage{array}
```
{: .noedit :}

Įvesdami `tabular` aplinką turime nurodyti, kiek bus kolonėlių ir koks juose
bus lygiavimas. Tai labai paprastai nurodome privalomajame `\begin{tabular}`
komandos argumente, dažnai vadinamame lentelės preambule: viena raidė vienai
kolonėlei (sudėtingesni dalykai priklauso `array` paketui). Raidės vadinamos
preambulės žetonais (_preamble-tokens_) ir yra tokios:

<!-- don't line wrap this table, markdown seems to not support this -->

| žetonas    | teksto lygiavimas kolonėlėje |
| ---        |:-- |
| `l`        | pagal kairįjį kraštą (_**l**eft aligned_) |
| `c`        | centruotas (_**c**entered_) |
| `r`        | pagal dešinįjį kraštą (_**r**ight aligned_) |
| `p{width}` | sulaužytas į pločio `width` **p**astraipą, išlygiuotą abiejuose kraštuose; vertikalus lygiavimas pagal pirmąją pastraipos eilutę (_top aligned_) |
| `m{width}` | kaip `p`, bet vertikaliai centruotas (_**m**iddle aligned_) |
| `b{width}` | kaip `p`, bet vertikaliai – pagal apatinę eilutę (_**b**ottom aligned_) |
| `w{align}{width}` | kaip `p`, bet horizontaliai – pagal `align`, kuris gali būti vienas iš `l`, `c`, ar `r` |
| `W{align}{width}` | kaip `w`, tik įspės apie perpildytą dėžę (_overfull box_), jei turinys netilps į nurodytą plotį |

Be to, yra keletas kitų preambulės žetonų, kurie neapibrėžia kolonėlės, bet
taip pat gali būti naudingi:

<!-- don't line wrap this table, markdown seems to not support this -->

| žetonas | veikimo aprašymas |
| ---  | :-- |
| `*{num}{string}` | `num` kartų pakartoja seką `string` preambulėje; taip galite aprašyti daug identiško lygiavimo kolonėlių |
| `>{decl}` | įdeda deklaraciją `decl` prieš kiekvieno langelio turinį kitoje kolonėlėje (tai praverčia, pvz., nustatyti kitokį kolonėlės šriftą) |
| `<{decl}` | įdeda `decl` po kiekvieno langelio turinio ankstesnėje kolonėlėje |
| <span>`|`</span>  | brėžia vertikalią liniją tarp langelių |
| `@{decl}` | pakeičia tarpą tarp dviejų langelių į `decl` |
| `!{decl}` | įdeda `decl` į vidurį tarpo, esančio tarp dviejų langelių |

Šios dvi lentelės pateikė visus galimus LaTeX ir `array` paketo kolonėlių
tipus.  Keli papildomi kolonėlių tipai iš kitų paketų pateikti [papildomos
informacijos puslapyje](more-08) prie šios pamokos.

Kolonėlės tipo `l`, `c`, ir `r` natūraliai turi plačiausio jų langelio plotį.
Kiekviena kolonėlė turi būti deklaruota, taigi, norėdami trijų centruotų
kolonėlių, lentelės preambulėje nurodykite `ccc`.  Tarpai preambulėje
ignoruojami, todėl `c c c` reiškia tą patį.

Lentelėje kolonėlės atskiriamos ženklu `&` (_ampersand_), o perėjimas į naują
eilutę nurodomas su `\\`.

Mes jau turime viską, ko reikia mūsų pirmajai lentelei.  Tolesniame kode
ženklai `&` ir `\\` yra sulygiuoti.  Tai daryti nėra būtina, tik padeda
skaityti įvesties kodą.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Jei lentelės kolonėlėje yra daug teksto, tai bus problemų išgauti tinkamą
vaizdą tik su `l`, `c`, ar `r`.  Pažiūrėkite, kas atsitinka šiame pavyzdyje:

<!-- {% raw %} -->

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Problema ta, kad `l` tipo kolonėlės langelis pateikia savo turinį vienoje
eilutėje visu jo natūraliu pločiu, net jei išeinama už puslapio krašto.
Norėdami tai sutvarkyti, galite naudoti kolonėlę `p`.  Joje langelių turinys
pateikiamas pastraipomis, kurių plotį nurodėte `p` argumente, o vertikaliai
jos lygiuojamos pagal savo pirmąsias eilutes &ndash; tas jums dažniausiai ir
tiks.  Palyginkite aukščiau gautą rezultatą su šiuo:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Jei kartais jūsų lentelėje yra daug to paties tipo stulpelių, gali būti
nepatogu į preambulę surašyti tiek pat stulpelių apibrėžimų.  Naudojantis
žetonu `*{num}{string}`, kuris `num` kartų pakartoja seką `string`, galite
pasilengvinti uždavinį.  Taigi, `*{6}{c}` yra lygiavertis `cccccc`.  Kad
pademonstruoti, kad tai veikia, štai pirmoji šios pamokos lentelė su naujai
išmokta sintakse:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Linijų pridėjimas

Patariamasis žodis prieš pradedant apie linijas: linijų lentelėse turėtų būti
naudojama nedaug, o vertikaliosios paprastai neatrodo profesionaliai.  Tiesą
sakant, profesionalioms lentelėms nereiktų naudoti standartinių LaTeX linijų;
vietoj to jūs turėtumėte susipažinti su `booktabs` paketo galimybėmis, todėl
jis čia pirmiausia ir aptariamas.  Siekiant išsamumo, standartinės linijos
parodytos [„daugiau šia tema“](more-08)s puslapyje.

Paketas `booktabs` apibrėžia keturis skirtingus horizontalių linijų
tipus. Visos horizontalių linijų komandos gali būti naudojamos tik kaip
pirmieji dalykai lentelių eilutėse.  Trys linijų komandų tokios: `\toprule`
(virš lentelės), `\midrule` (lentelės viduje) ir `\bottomrule` (po lentele):

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Ketvirtoji linijos brėžimo komanda `booktabs` pakete yra `\cmidrule`.  Ji
naudojama nubrėžti liniją ne per visą lentelės plotį, o tik per nurodytą
kolonėlių intervalą; pastarasis nurodomas kaip kolonėlių numerių intervalas:
`{`_numeris_`-`_numeris_`}`.  Net jei reikia linijos tik per vieną kolonėlę,
turite nurodyti intervalą (su vienodais skaičiais).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Viena naudinga `\cmidrule` savybė yra galimybė pritrumpinti linijos galus.
Trumpinamas galas nurodomas raide neprivalomame argumente skliausteliuose:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Galbūt jūs jau atspėjote, kad `r` ir `l` reiškia atitinkamai dešinįjį
(_**r**ight_) ir kairįjį (_**l**eft_) galą.

Kartais linija būna per daug ryškus atskyrimas tarp dviejų eilučių, nors
aiškesniam suvokimui norisi jas kažkaip atskirti. Tokiu atveju galima
panaudoti `\addlinespace` mažo papildomo tarpo įdėjimui.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  \addlinespace
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Langelių apjungimas

Vienoje eilutėje esančius kaimyninius langelius galite apjungti su komanda
`\multicolumn`.  Ji turi būti pirmasis dalykas pirmajame apjungiamame
langelyje. `\multicolumn` reikia trijų argumentų:

1. apjungiamų langelių skaičius
2. jungtinio langelio lygiavimas
3. jungtinio langelio turinys

Lygiavimo argumente gali būti bet kas, kas legalu `tabular` preambulėje, bet
tik _vienas kolonėlės tipas_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\multicolumn` galima pritaikyti ir vienam langeliui, kai norite perapibrėžti
lentelės preambulės nustatymus duotai kolonėlei.  Žemiau pateiktas pavyzdys
naudoja šį metodą kolonėlių antraštėms centruoti:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Food} & \multicolumn{1}{c}{Size} \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

LaTeX nepalaiko vertikalaus langelių apjungimo (kuris veiktų
nepriekaištingai).  Paprastai pakanka palikti tuščius langelius, kad
skaitytojas suvoktų, kas turėta omenyje, ir be langelių per kelias eilutes
apjungimo.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}


\begin{document}
\begin{tabular}{lll}
  \toprule
  Group     & Animal & Size   \\
  \midrule
  herbivore & horse  & large  \\
            & deer   & medium \\
            & rabbit & small  \\
  \addlinespace
  carnivore & dog    & medium \\
            & cat    & small  \\
            & lion   & large  \\
  \addlinespace
  omnivore  & crow   & small  \\
            & bear   & large  \\
            & pig    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Pratimai

Pasinaudokite paprastu lentelės pavyzdžiu ir pradėkite bandymus su
lentelėmis.  Išbandykite skirtingus lygiavimus, panaudodami kolonėlių tipus
`l`, `c` ir `r`. Kas nutiks, jei lentelės eilutėje turėsite per mažai
elementų? O kas, jei per daug?  Pabandykite komandą `\multicolumn` langelių
apjungimui.
