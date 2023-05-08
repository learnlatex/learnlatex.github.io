---
layout: "lesson"
lang: "lt"
title: "Kaip dokumento klasės įtakoja išvaizdą"
description: "Ši pamoka paaiškina, kas yra dokumento klasė ir kaip ji gali įtakoti išeities dokumento išvaizdą, pristatomos pagrindinės LaTeX klasės."
toc-anchor-text: "Dokumentų klasės"
toc-description: "Bendros dokumento išvaizdos nustatymas."
---

# Dokumentų klasės

<span
  class="summary">Ši pamoka paaiškina, kas yra dokumentų klasė ir kaip ji gali įtakoti išeities dokumento išvaizdą, pristatomos pagrindinės LaTeX klasės.</span>

Galbūt pastebėjote, kad visi LaTeX dokumentai, pateikti mūsų pavyzdžiuose,
prasidėjo nuo `\documentclass` eilutės ir kad `\documentclass{article}` buvo
dažniausias variantas. (Mums prireikė `\documentclass{report}` ankstesnėje
pamokoje išbandyti `\chapter` komandą.)  Ši eilutė yra būtina visuose LaTeX
dokumentuose ir (beveik) visada yra pirmoji privaloma LaTeX komanda.

## Ką daro dokumentų klasė

Dokumentų klasė nustato bendrą dokumento išvaizdą, pavyzdžiui:

- dizainą: paraštes, šriftus, tarpus ir pan.,
- ar yra `\chapter` skyriaus lygis,
- ar dokumento antraštė turėtų būti atskirame puslapyje, `...`

Dokumentų klasės taip pat apibrėžia naujas bendras LaTeX komandas; tai ypač pasakytina apie specialius atvejus, kaip klasės pateikties skaidrėms ar laiškams.

Dokumentų klasės eilutė gali taip pat nustatyti parinktis, bendras visam dokumentui. Jos pateikiamos laužtiniuose skliaustuose: `\documentclass[<parinktys>]{<klasė>}`. Ši sintaksinė forma, su neprivaloma informacija laužtiniuose skliaustuose po komandos, bet prieš privalomus argumentus, yra bendrai naudojama daugelyje LaTeX komandų.

## Bazinės klasės

LaTeX visada turi nedidelę aibę standartinių klasių, turinčių tarpusavyje daug bendro, nors su tam tikromis variacijomis:
- `article` (straipsnis) :  trumpiems dokumentams be `\chapter` lygio
- `report` (raportas) :
  ilgesniems dokumentams su `\chapter` skirsniais, vienpusis spausdinimas (be puslapių skirstymo į kairiuosius ir dešiniuosius)
- `book` (knyga) :
  ilgesniems dokumentams su `\chapter` skirsniais, dvipusis spausdinimas, su priešlapiais ir užlapiais (pavyzdžiui, rodykle)
- `letter` (laiškas) :
  spausdintiems laiškams
- `slides` (skaidrės) :
  pristatymams (bet žr. žemiau)

Klasės `article`, `report` ir `book` apibrėžia labai panašias komandų aibes. Komandos rašyti korespondencijai iš `letter` klasės yra kiek kitokios:

```latex
\documentclass{letter}
\usepackage[T1]{fontenc}
\begin{document}

\begin{letter}{Some Address\\Some Street\\Some City}

\opening{Dear Sir or Madam,}

The text goes Here

\closing{Yours,}

\end{letter}

\end{document}
```

Pastebėkite, kaip ``\\`` atskiria adreso eilutes; mes pažvelgsime į eilučių
laužymą [kiek vėliau](lesson-11).  Taip pat pastebėkite, kad `letter` klasė
turi aplinką `letter` kiekvienam atskiram laiškui ir kitas specialias
komandas.

Standartinės klasės `article`, `report` ir `book` priima parinktis `10pt`,
`11pt` ir `12pt`, surinktas neprivalome `documentclass` argumente, kad
pakeisti pagrindinio teksto šrifto dydį (ir kai kuriuos kitus susijusius
dydžius), taipogi `twocolumn`, kad išvesti dokumentą dviem kolonėlėmis
(kelios parinktys atskiriamos kableliais).

## Klasės su papildomomis galimybėmis

Pagrindinės klasės yra labai stabilios, tačiau tai reiškia, kad jos taip pat
yra gana konservatyvios tiek dizaino, tiek komandų keitimo požiūriu. Laikui
bėgant buvo parašyta keletas lankstesnių klasių, leidžiančių jums pakeisti
dizainą, neperprogramuojant jo rankiniu būdu (ką mes panagrinėsime [šiek tiek
vėliau](lesson-11)).

Amerikos matematikų draugija (_American Mathematical Society_, AMS) paruošė
standartinių klasių variantus (`amsart`, `amsbook`) su dizainu būdingu
tradicinėms matematikos mokslo publikacijoms.

Didžiausios ir populiariausios „išplėstinės“ klasės yra iš KOMA-Script
rinkinio ir klasė `memoir`. KOMA-Script siūlo atitikmenis standartinėms
klasėms: `scrartcl`, `scrreprt`, `scrbook`, ir `scrlttr2`. Klasė `memoir` yra
atskira ir labiausiai primena `book` klasės išplėtimą.

Šiose išplėstinėse klasėse yra paruošta daug keitimams patogių „kablių“
(_hooks_), kai kuriuos parodysime pratimuose.  Gali kilti klausimas, kaip
galite žinoti apie jų pateiktus kablius; mes rašysime apie tai [vėlesnėje
pamokoje](lesson-16), bet jūs visada galite žvilgtelėti į ateitį!

## Pristatymai

Klasė `slides` buvo sukurta ruošti fizinėms skaidrėms 1980-tųjų viduryje,
todėl nepateikia jokių priemonių kurti interaktyvius PDF pristatymus.  Bet
yra modernios klasės, skirtos būtent tam; kadangi jos yra pakankamai
specializuotos, lyginant su bendrų LaTeX dokumentų klasėmis, tai bus
pristatytos [papildomoje pamokoje](more-05).

## Pratimai

Ištirkite, kaip dokumento klasės pakeitimas iš standartinės į vieną iš KOMA
rinkinio ar į `memoir` klasę paveikia išvesties dokumento išvaizdą.

```latex
\documentclass{article} % Pakeiskite klasę čia
\usepackage[T1]{fontenc}

\begin{document}

\section{Introduction}

This is a sample document with some dummy
text\footnote{and a footnote}. This paragraph is quite
long as we might want to see the effect of making the
document have two columns.

\end{document}
```

Pridėkite klasės parinktį `twocolumn` ir pamatykite, kaip pasikeitė
išdėstymas.

Pakeiskite komandą `\section` į `\chapter` ir suraskite, ką paveikia toliau
išvardintos parinktys, panaudotos kartu su `scrreprt` klase:

- `chapterprefix`
- `headings=small`
- `headings=big`
- `numbers=enddot`
