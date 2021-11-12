---
layout: "lesson"
lang: "lt"
title: "Matematika"
description: "Ši pamoka pristato LaTeX matematinę veikseną, tekstines ir iš teksto išskirtas matematines formules, taip pat plėtinius, pateikiamus paketo amsmath ir šriftų pakeitimą matematinėje veiksenoje."
toc-anchor-text: "Matematika"
toc-description: "Matematinė veiksena ir matematiniai LaTeX žymenys."
---

# Matematika

<span
  class="summary">Ši pamoka pristato LaTeX matematinę veikseną, tekstines ir iš teksto išskirtas matematines formules, taip pat plėtinius, pateikiamus paketo `amsmath` ir šriftų pakeitimą matematinėje veiksenoje.</span>

Profesionalus sudėtingos matematikos spausdinimas yra viena iš stipriausių
LaTeX pusių.  Jūs galite rinkti matematinius reiškinius gana natūraliu ir
logišku būdu, remdamiesi vadinamąja „matematine LaTeX veiksena“.

## Matematinė veiksena

Matematinėje veiksenoje LaTeX ignoruoja tarpus (įvesties dokumente) ir
(beveik visada) pats sudėlioja teisingus tarpus tarp simbolių (išvesties
dokumente).

Yra dvi pagrindinės matematinės veiksenos išvesties formos:

* tekstinė (_inline_)
* išskirties (_display_)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A sentence with inline mathematics: $y = mx + c$.
A second sentence with inline mathematics: $5^{2}=3^{2}+4^{2}$.


A second paragraph containing display math.
\[
  y = mx + c
\]
See how the paragraph continues after the display.
\end{document}
```

Kai kur kitur jūs galite pamatyti reiškinius, panašius į LaTeX matematines
formules, pavyzdžiui, MathJax sistemoje, įdedančioje formules į
tinklalapiuose ar Vikipedijoje. Tokios sistemos dažnai priima tam tikras
LaTeX sintaksės variacijas, nes iš tikrųjų nenaudoja LaTeX „užkulisiuose“.

<p class="hint">Visi mūsų pavyzdžiai yra <i>teisingas</i> LaTeX.  Jei kokiame
  kitame kontekste matote ką besiskiriančio, tai gali būti, kad ten LaTeX
  nenaudojamas.</p>

### Tekstinių matematinių formulių žymėjimas

Kaip matėte pavyzdyje aukščiau, tekstinės matematinės formulės pažymėtos
naudojant dolerių simbolius (`$...$`). Taip pat galima naudoti žymėjimą
`\(...\)`. Paprastos išraiškos formulių viduje įvedamos be jokio specialaus
žymėjimo ir, kaip matėte, išeities formate formulių ženklai yra išdėliojama
gražiai (su tinkamais tarpeliais), o raidės rašomos kursyvu.

Tekstinėje matematinėje veiksenoje yra ribojamas išraiškos aukštis, kad
formulės, kiek įmanoma, negadintų tarpų tarp pastraipos eilučių.

Atkreipiame dėmesį į tai, kad _visa_ matematika turėtų būti sužymėta kaip
tokia, net jei tai liečia vieną atskirą simbolį: rašykite `... $2$ ...`, o ne
`... 2 ...`; kitaip, pavyzdžiui, kai jums reiks užrašyti neigiamą skaičių, tai
reikės matematikos, kad išvestumėte tinkamo ilgio minuso ženklą `...$-2$...`,
o tada bus panaudoti skaitmenys iš matematinio šrifto, kurie gali skirtis nuo
skaitmenų iš tekstinio šrifto (tai priklauso nuo dokumentų klasės). 

Iš kitos pusės, saugokitės matematikos veiksenos įjungimo ženklų, esančių
paprastame tekste, nukopijuotame iš kažkur kitur, pavyzdžiui, su piniginėmis
vertėmis, naudojančiomis `$`, arba su failų pavadinimais, naudojančiais
ženklą `_` (kurie turėtų būti surinkti kaip `\$` ir `\_`, atitinkamai).

#### Indeksai

Formulėse mes galime lengvai pridėti viršutinius ir apatinius indeksus; jie
pažymimi naudojant `^` ir `_`, atitinkamai.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Superscripts $a^{b}$ and subscripts $a_{b}$.
\end{document}
```

(Galite pamatyti pavyzdžių, kai paprasti indeksai įvedami be figūrinių
skliaustų, tačiau tai nėra oficiali sintaksė ir kai kuriuose kontekstuose
gali netinkamai suveikti; visada naudokite skliaustus.)

#### Spec komandos

Yra _labai daug_ specialiai matematikai skirtų komandų.  Pavyzdžiui, kai
kurios iš jų yra gana lengvai atpažįstamos, kaip `\sin` ir `\log`, žyminčios
sinusą ir logaritmą, ar `\theta` graikiškai raidei išvesti.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Some mathematics: $y = 2 \sin \theta^{2}$.
\end{document}
```

Čia negalime aprėpti visų standartinių LaTeX matematinės veiksenos komandų,
tačiau yra daug internetinių šaltinių, pateikiančių standartinį rinkinį. Dar
galite rasti matematinių simbolių komandas įrankio
[Detexify](https://detexify.kirelabs.org/classify.html) pagalba.


### Išskirta matematika

Išskirtose iš teksto formulėse galima naudoti lygiai tas pačias komandas,
kaip ir tekstinėse formulėse.  Paprastai išskirtosios formulės yra
horizontaliai centruojamos ir naudojamos didesnėms lygtims, kurios yra
„pastraipos dalis“, išvesti.  Atminkite, kad išskirtosios matematikos aplinkos
neleidžia pastraipai pasibaigti savo viduje, todėl jose negali būti tuščių
eilučių.

Pastraipa, kurioje yra išskirtųjų formulių, turi prasidėti _prieš_ jas, todėl
nepalikite tuščių eilučių prieš išskirtosios matematikos aplinkas.  Kai jums
reikia kelių matematikos eilučių, nenaudokite kelių matematikos aplinkų iš
eilės (tai sukurs nevienodus tarpus); naudokite vieną iš aplinkų, skirtų
išvesti daugeliui eilučių, tokių, kaip `align` iš `amsmath` paketo, aprašyto
toliau.

#### Integralai

Išskirtoji matematinė aplinka ypač tinka formulėms su integralais, pavyzdžiui:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A paragraph about a larger equation
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Atkreipkite dėmesį, kaip indeksų žymenys naudojami integravimo riboms
tinkamoje vietoje išvesti.

Pavyzdyje pridėjome rankomis vieną tarpą: `\,` sukuria mažą tarpelį prieš
`dx`.  Diferencialinio operatoriaus formatavimas nėra vienodas: kai kurie
leidėjai naudoja stačią „d“, kiti &ndash; kursyvinį „_d_“.  Vienas iš būdų
parašyti dokumentą, lengvai pritaikomą minėtiems atvejams, yra
sukurti komandą, pvz., `\diff`, kurią galėsite pataisyti norimu būdu,
[pavyzdžiui](http://www.tug.org/TUGboat/tb41-1/tb127gregorio-math.pdf)

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\newcommand{\diff}{\mathop{}\!d}            % d kursyvu
% \newcommand{\diff}{\mathop{}\!\mathrm{d}} % d status 
\begin{document}
A paragraph about a larger equation
\[
\int_{-\infty}^{+\infty} e^{-x^2} \diff x
\]
\end{document}
```
#### Numeruotos lygtys

Dažnai prireikia numeruotos lygties, kurią sukuria `equation` aplinka.
Pabandykime dar kartą tą patį pavyzdį:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A paragraph about a larger equation
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

Lygties numeris padidinamas kiekvienai naujai lygčiai automatiškai. Jis gali
būti paprastas skaičius, kaip šiame pavyzdyje, arba gali turėti skyriaus
numerį kaip priešdėlį, pavyzdžiui, (2.5) 5-ajai lygčiai skyriuje 2.
Formatavimo detales apibrėžia dokumento klasė ir jų čia neaprašome.


## Paketas `amsmath`

Matematinis žymėjimas yra labai įvairus, ir tai reiškia, kad LaTeX branduolio
priemonės negali aprėpti visko.  Paketas `amsmath` išplečia palaikymo bazę,
kad ji apimtų daug daugiau idėjų.  Paketo naudotojo vadove [`amsmath` User
Guide](http://texdoc.org/pkg/amsmath) yra daug daugiau pavyzdžių, nei galime
parodyti šioje pamokoje.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Solve the following recurrence for $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{for $n$, $k>0$.}
\end{align*}
\end{document}
```

Aplinka `align*` išlygiuoja lygtis pagal simbolius `&`, visai kaip lentelėje.
Atkreipkite dėmesį, kaip mes panaudojome `\quad` įdėti šiek tiek tuščios
vietos, ir `\text` įtraukti įprastą tekstą į matematinę formulę.  Binominiam
koeficientui užrašyti mes panaudojome kitą matematikos komandą `\binom`.

Atkreipkite dėmesį, kad čia mes naudojome `align*`, ir lygtys išsivedė
nenumeruotos.  Dauguma išskirtosios matematikos aplinkų pagal nutylėjimą
numeruoja lygtis, o variantas su žvaigždute `*` išjungia numeravimą.

Paketas taip pat turi keletą kitų patogių aplinkų, pavyzdžiui, skirtų
matricoms.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
AMS matrices.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

## Šriftai formulėse

Skirtingai nuo įprasto teksto, šrifto pakeitimai matematikoje dažnai
perteikia labai specifinę prasmę. Todėl jie dažnai rašomi tiesiog formulėse.
Čia yra komandų rinkinys, kurio jums prireiks:

- `\mathrm`: status (_roman_)
- `\mathit`: kursyvas (_italic_)
- `\mathbf`: pastorintas (_bold_)
- `\mathsf`: be užbraukimų (_sans serif_)
- `\mathtt`: vienplotis (_typewriter_)
- `\mathbb`: dvibrūkšninis (_blackboard bold_) (pateikiamas `amsfonts` pakete)

Kiekviena iš jų tikisi lotyniškų raidžių savo argumente; todėl, pavyzdžiui,
mes galime pažymėti matricą kaip

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
The matrix $\mathbf{M}$.
\end{document}
```

Pastebėkite, kad standartinis matematikos kursyvas atskiria žodžio raides
taip, lyg jos būtų atskiri kintamieji sandaugos reiškinyje. Jei norite
normaliai atrodančio žodžio kursyvu, naudokite `\mathit`.

Šriftų komandos `\math..` naudoja šriftus, paruoštus matematikai. Tačiau
kartais reikia įterpti žodį, kuris yra išorinio sakinio struktūros dalis ir
todėl jam reikalingas esamas teksto šriftas; tokiam tikslui galite naudoti
`\text{...}` komandą (iš `amsmath` paketo) arba specifinių tekstinių šriftų
parinkimo komandas, kaip `\textrm{..}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}

$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```
Jei jums prireiks pastorinti kitus simbolius (ne raides), pažiūrėkite
[papildomą pamoką](more-10).

## Pratimai

Išbandykite abi matematinės veiksenos formas: paimkite pavyzdžius ir
perjunkite formules iš tekstinių į išskirtąsias ar atvirkščiai. Ar galite
pamatyti, kokį poveikį tai daro?

Pabandykite pridėti kitas graikiškas raides, tiek mažąsias, tiek didžiąsias.
Turėtumėte sugebėti atspėti komandų vardus.

Eksperimentuokite su šriftų keitimo komandomis: kas nutinka, kai bandote jas
įdėti vieną į kitą?

Išskirtosios formulės yra centruojamos pagal nutylėjimą; pabandykite pridėti
dokumentų klasės parinktį `[fleqn]` (_flush left equation_) į kai kuriuos iš
aukščiau pateiktų pavyzdžių, kad pamatyti kitokį išdėstymą.

Panašiai pagal nutylėjimą lygčių numeriai išvedami dešinėje.  Pabandykite
pridėti `[leqno]` (_left equation numbers_) kaip dokumentų klasės parinktį.
