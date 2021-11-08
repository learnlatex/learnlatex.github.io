---
layout: "lesson"
lang: "lt"
title: "Daugiau apie lenteles"
description: "Ši pamoka parodo daugiau būdų, kaip keisti lentelių išvaizdą: pasirenkant kolonėlės stilių, pakeičiant tarpus ir linijas, taip pat pasirenkant paketus, skirtus lentelėms."
toc-anchor-text: "Daugiau apie lenteles"
---

## Kitas lentelių preambulės turinys

Kadangi pagrindinėje pamokaje buvo aptarti ne visi galimi preambulės žetonai,
keletas likusių čia pateikiami su pavyzdžiais.  Galite dar kartą peržiūrėti
žetonų lenteles pamokos pradžioje, kad susidarytumėte bendrą vaizdą apie
prieinamus variantus.  Čia pateikti trumpi aprašymai turėtų būti pakankami
suprasti, ką reiškia stulpelių tipai m, b, w ir W, jei supratote tipus l, c,
r ir p.  Jei ne, galite šiek tiek paeksperimentuoti su jais.  Ko vis dar
nepasiaiškinome, tai naudingų preambulės žetonų `>`, `<`, `@`, `!`, ir `|`.


### Kolonėlių stiliai

Kadangi žetonai `>` ir `<` naudojami įterpti kodą, atitinkami, prieš ir po
langelio turinio, su jais galima pridėti komandas, įtakojančias kolonėlės
langelių išvaizdą.  Pavyzdžiui, jei norite pirmosios kolonėlės įrašus išvesti
kursyvu ir po kiekvieno jų padėti dvitaškį, galite tai pasiekti tokiu būdu:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
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

Komanda `\itshape` išveda tolesnį tekstą kursyvu, bet ji (kaip ir kitos
šriftų keitimo komandos) veikia tik vieno langelio viduje.  Mes panagrinėsime
rankinį šriftų valdymą [po kelių pamokų](lesson-11).

Grįžtant prie pavyzdžio: tikriausiai nenorėsite, kad pirmasis langelis būtų
paveiktas bendrojo stulpelio formatavimo, nes jame yra kolonėlės antraštė.
Jame gali būti panaudota komanda `\multicolumn`.  Atsiminkite, kad ji gali
būti naudojama pakeisti ir vieno langelio lygiuotę, kaip padaryta žemiau:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animal} & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Tarpų tarp kolonėlių valdymas

LaTeX standartiškai palieka šiek tiek vietos iš abiejų kiekvienos kolonėlės
pusių vaizdo subalansavimui ir atskyrimui.  Šio tarpo plotis nurodomas
kintamuoju `\tabcolsep`.  Dėl to, kad tarpai yra iš abiejų kiekvienos
kolonėlės pusių, jūs gaunate po vieną `\tabcolsep` tarpą abiejuose lentelės
šonuose ir `2\tabcolsep` tarpą tarp kiekvienų dviejų kolonėlių, nes dedasi po
vieną tarpą iš kiekvienos kolonėlės.  Galite pakeisti tarpo dydį su komanda
`\setlength`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

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

Su žetonu `@` galite pakeisti tarpą tarp konkrečių kolonėlių į faktiškai bet
ką.  Žetonas pašalins standartinį tarpą tarp kolonėlių (arba iš šono, jei
stovi preambulės priekyje arba gale), o vietoj to įdės tai, ką nurodėte kaip
argumentą:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(Susipažinsime su `\hspace` [kiek vėliau](lesson-11); galite atspėti iš
vardo, kad komanda prideda horizontalų tarpą.)

Preambulės žetonas `!` daro kažką gana panašaus.  Skirtumas yra tame, kad jis
_įterpia_ savo argumentą į vidurį tarp abiejų tarpų.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Vertikalios linijos

Nors vertikalių linijų naudojimas lentelėse ir nėra skatinamas leidyboje, bet
yra labai mėgiamas biurokratinėse ataskaitose.  Todėl kartais jums teks
naudoti vertikalias linijas:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animal & Food  & Size   \\[2pt]
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Gal pastebėjote, kad žetono `|` poveikis yra gana panašus į `!`; jis
prideda vertikalią liniją tarp dviejų kolonėlių, palikdamas tarpus tokius,
kokie jie yra.  Vis dėlto jis turi juntamą neigiamą poveikį: vertikalios
linijos išvedamos netinkamai su horizontaliomis linijomis iš paketo
`booktabs`.  Galite naudoti standartines LaTeX horizontalias linijas; t.y.,
`\hline` (vietoje `\toprule`, `\midrule` ir `\bottomrule`) ir `\cline`
(vietoje `\cmidrule`).  Kaip matyti pavyzdyje aukščiau, vertikalios linijos
automatiškai prasitęsia per tarpą, kurį prideda neprivalomas `\\` argumentas.


## `booktabs` linijų keitimas

Visos `booktabs` linijų komandos ir `\addlinespace` priima neprivalomą
argumentą, skirtą nurodyti linijos storį. Be to, `\cmidrule` galų
apipjaustymą galima keisti, nurodant figūriniuose skliaustuose po `r` arba
`l` norimus ilgius.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal & Food  & Size   \\ \midrule[1pt]
  dog    & meat  & medium \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  horse  & hay   & large  \\
  frog   & flies & small  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Skaičių lygiavimas kolonėlėse

Skaičių lygiavimą lentelėse galima valdyti nurodžius kolonėlės tipą `S`,
kuris apibrėžtas pakete `siunitx`.  Paprastas pavyzdys su dviem lygiuotais
skaitmeninėmis kolonėlėmiss būtų toks:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Values} &  {More Values} \\
\midrule
1        &   2.3456 \\
1.2      &   34.2345 \\
-2.3     &   90.473 \\
40       &   5642.5 \\
5.3      &   1.2e3 \\
0.2      &    1e4 \\
\bottomrule
\end{tabular}
\end{document}
```

Pastebėkite, kad kiekvienas neskaitmeninio turinio langelis turi būti
„apsaugotas“ figūriniais skliaustais

Paketas `siunitx` suteikia daug galimybių formatuoti skaičius skirtingais
būdais; žr. [paketo dokumentaciją](https://texdoc.org/pkg/siunitx).


## Bendro lentelės pločio nurodymas

Aplinkos `tabular` plotis nustatomas pagal lentelės turinį.  Yra du
dažniausiai naudojami mechanizmai nurodyti kitokį lentelės plotį.

Atminkite, kad beveik visada geriau formatuoti lentelę iki nurodyto pločio,
kaip nurodyta toliau (galbūt panaudojant tokį šrifto dydį, kaip `\small`, jei
reikia), o ne keisti lentelės mastelį su `\resizebox` ar kaip panašiomis
komandomis, kurios išves nesuderintus šriftų dydžius ir linijų pločius.

### `tabular*`

Aplinkos `tabular*` komanda priima papildomą _pločio_ argumentą, nurodantį
bendrą lentelės plotį.  Tampomi tarpai turi būti pridėti su `\extracolsep`
komanda, kuri prideda tarpus tarp kolonėlių nuo savo vietos preambulėje.
Naudojama ji beveik visada su specialia komanda `\fill`, kuri tempiasi tiek,
kiek reikia.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
A & B\\
C & D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabular*}{.5\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\begin{center}  
\begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}cc@{}}
\hline
A & B\\
C & D\\
\hline
\end{tabular*}
\end{center}

\end{document}
```

### `tabularx`

Aplinka `tabularx` iš to paties pavadinimo paketo, turi panašią sintaksę kaip
ir `tabular*`, tačiau užuot koregavusi tarpus tarp kolonėlių, reguliuoja
pločius tų kolonėlių, kurioms nurodytas naujas tipas `X`.  Jis atitinka tipą
`p{...}`, tik nereikia nurodyti pločio.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{tabularx}
\begin{document}

\begin{center}
\begin{tabular}{lp{2cm}}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabular}
\end{center}

\begin{center}  
\begin{tabularx}{.5\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\begin{center}  
\begin{tabularx}{\textwidth}{lX}
\hline
A & B B B B B B B B B B B B B B B B B B B B B B B B\\
C & D D D D D D D\\
\hline
\end{tabularx}
\end{center}

\end{document}
```

Skirtinguose nuo kitų lentelių aplinkų, aptartų šiose pamokose, `tabularx`
reikia kelių kompiliavimo kartų, kad bandymų keliu nustatytų galutinius
kolonėlių pločius.  Tai reiškia tam tikrus aplinkos naudojimo apribojimus,
žr. [paketo dokumentaciją](https://texdoc.org/pkg/tabularx).


## Lentelės per kelis puslapius

Aplinka `tabular` suformuoja neskaldomą dėžę, todėl ji turi būti pakankamai
maža, kad tilptų viename puslapyje, ir dažniausiai yra dedama į plaukiojančią
`table` aplinką.

Keli paketai pateikia aplinkų variantus su panašia sintakse, bet leidžia
skaldyti lenteles per puslapius.  Čia mes parodome `longtable` paketą:

```latex
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{A Long Table}\\
Left Side & Right Side\\
\hline
\endhead
\hline
\endfoot
aa & bb\\  
Entry & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & bbb\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b\\  
a & b b b b b b\\  
a & b b b b b\\  
a & b b\\  
A Wider Entry & b\\  
\end{longtable}

\end{document}
```

Aplinka `longtable` išsiskiria tuo, kad išveda vienodą kolonėlių plotį
visuose lentelės puslapiuose; tačiau norint tai pasiekti, gali prireikti
kelių LaTeX paleidimų, kad platūs įrašai, esantys lentelėje žemiau, paveiktų
kolonėlių plotį ankstesniuose puslapiuose.


## Lentelių išnašos

Gana įprasta poreikis yra turėti lentelėje ženklus, panašius į išnašų, bet
susijusius su pastabomis po lentele.  Paketas `threeparttable` supaprastina
tokių lentelių žymėjimą, pasirūpindamas, kad pastabos būtų išdėstytos po
lentele esančiame bloke, tokio pat pločio kaip ir lentelė.  Išsamesnė
informacija [paketo dokumentacijoje](https://texdoc.org/pkg/threeparttable);
čia pateikiame tik paprastą pavyzdį.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{An Example}
   \begin{tabular}{ll}
    An entry & 42\tnote{1}\\
    Another entry & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] the first note.
   \item [2] the second note.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Tekstas siaurose kolonėlėse

Standartiniai LaTeX parametrai, reguliuojantys pastraipų eilučių laužymą, yra
parinkti sąlyginai ilgoms eilutėms, leidžiančioms lanksčiai parinkti eilučių
lūžius.  Kitame pavyzdyje pateikiami keli galimi metodai valdyti lūžius
siaurose kolonėlėse.  Pirmoji lentelė pateikia ištampytus tarpžodinius
tarpus, ir TeX log faile perspėja apie nužpildytas eilutes (_Underfull
lines_).  Komandos `\raggedright` naudojimas (antroji lentelė) paprastai
išvengia šių pranešimų, tačiau eilutės gali gautis per daug nesulygiuotos
(_ragged_).  Komanda `\RaggedRight` iš `ragged2e` paketo siūlo kompromisą; ji
leidžia šiek tiek netolygumo linijų ilgiuose, bet prireikus perkelia žodžius,
kaip parodyta trečioje lentelėje.

Atkreipkite dėmesį į komandą `\arraybackslash`; ji pakeičia `\\` apibrėžimą
taip, kad jis baigtų lentelės eilutę.

Alternatyvi technika, parodyta ketvirtoje lentelėje, yra mažesnio šrifto
naudojimas, kad kolonėlė, lyginant su teksto dydžiu, būtų talpesnė.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
One & A long text set in a narrow paragraph, with some more example text.\\
Two & A different long text set in a narrow paragraph, with some more  hard to hyphenate words.
\end{tabular}

\end{table}

\end{document}
```

## Naujų kolonėlių tipų apibrėžimas

Kaip parodyta [pagrindinėje pamokoje](lesson-08), `array` paketas leidžia
tokiomis preambulės konstrukcijomis kaip `>{\bfseries}c` formatuoti centruotą
kolonėlę pastorintu šriftu.  Patogu išsisaugoti tokią konstrukciją kaip naują
kolonėlės tipą, pavyzdžiui:

```latex
\newcolumntype{B}{>{\bfseries}c}
```
leistų su `B` žymėti lentelių preambulėse pastorinto šrifto centruotus
stulpelius. 


## Vertikalaus skaidymo triukai

Dažnai, užuot apjunginėjus į vieną langelius iš kelių eilučių, geriau turėti
vieną eilutę, kurioje kai kurie langeliai vertikaliai padalijami įdėtomis
`tabular` aplinkomis.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}{@{}c@{}}A\\a\end{tabular} & \begin{tabular}{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Pastebėkite, kad vertikalųjį lentelių tarpusavio lygiavimą galite valdyti
neprivalomu `tabular` argumentu; jame gali būti reikšmės `t`, `c` arba `b`,
žyminčios lygiavimą su viršutine (_top_) eilute, centru, arba apatine
(_bottom_) eilute, atitinkamai, ir jis gali būti naudojamas taip:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lcc}
  \toprule
  Test & \begin{tabular}[b]{@{}c@{}}A\\a\end{tabular} & \begin{tabular}[t]{@{}c@{}}B\\b\end{tabular} \\
  \midrule
  Content & is & here \\
  Content & is & here \\
  Content & is & here \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Tarpai tarp lentelės eilučių

Pagrindinėje pamokoje pademonstravome komandą `\addlinespace` iš `booktabs`
paketo, kuri yra naudojama padidinti tarpą tarp konkrečių eilučių.

Yra du bendri parametrai, valdantys atstumą tarp eilučių: `\arraystretch` ir
`\extrarowheight` (pastarasis iš `array` paketo).

```latex
\renewcommand\arraystretch{1.5}
```

padidins pradinį atstumą 50%.

Dažnai, ypač kai naudojamas `\hline`, geriau tiesiog padidinti eilučių
aukštį, nedidinant jų gylio žemiau bazinės linijos.  Kitas pavyzdys
demonstruoja parametro `\extrarowheight` naudojimą.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}


\begin{center}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}


\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Square& $x^2$\\
\hline
Cube& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
