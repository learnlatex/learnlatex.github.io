---
layout: "lesson"
lang: "lt"
title: "Kas LaTeX yra ir kaip veikia"
description: "Ši pamoka paaiškina LaTeX veikimo pagrindus ir skirtumus nuo įprastų biuro dokumentų redaktorių, kaip Microsoft Word ar LibreOffice Writer."
toc-anchor-text: "LaTeX pagrindai"
toc-description: "Kas LaTeX yra ir kaip veikia."
---

# LaTeX pagrindai

<span
  class="summary">Ši pamoka paaiškina LaTeX veikimo pagrindus ir skirtumus nuo biuro dokumentų redaktorių, tokių kaip Microsoft Word ar LibreOffice Writer.</span>

Skirtingai nuo biuro dokumentų redaktorių, tokių kaip Microsoft Word ar
LibreOffice Writer, LaTeX paprastai nepateikia, žargoniškai išsireiškiant
WYSIWYG („_What You See Is What You Get_“, tai yra, „tai, ką matote, yra tai,
ką gaunate“ arba „kas ekrane, tas popieriuje“).  Dirbant su LaTeX tekstas yra
papildomai sužymimas (matematikos formulių atveju, dar ir simboliai renkami
standartine klaviatūra). Šis sužymėjimas atskleidžia loginę kai kurių teksto
elementų prasmę, panašiu būdu, kaip HTML kalboje. Paimkime, pavyzdžiui,
elementą `<h2>`, žymintį skyrių HTML dokumente. LaTeX taip pat turi turi tam
skirtą komandą `\section`.

## Darbo su LaTeX eiga

Kadangi LaTeX rinkmenos (failai) nėra „švarūs“ dokumentai kaip tokie, nes
turi instrukcijas apie atskiras dokumento dalis, tai jūs normaliai neduosite
skaityti tokios rinkmenos kitiems žmonėms.  Pirmiau, sukūrę savąją LaTeX
_įvestį_, paleisite su ja (ant jos) LaTeX (paprastai programą `pdflatex`),
kad gauti PDF failą.  Ši PDF _išvestis_ yra tai, ką jūs siųsite kitiems
skaityti.

Kiti autoriai naudoja kitus žodžius aprašyti šį procesą.  Rašyti LaTeX
dokumentą yra panašu į programavimą, todėl LaTeX programos leidimas dažnai
vadinamas dokumento `kompiliavimu`, nors `komponavimas` būtų tiksliau.

## LaTeX leidimas kelis kartus

Paprastiems LaTeX failams pakanka tik vieno programos leidimo, kad gauti
galutinį PDF.  Bet jei jūs pradėsite naudoti sudėtingesnius dalykus, paremtus
nuorodomis tarp dokumento elementų, kaip literatūros citavimą, automatinį
brėžinių numeravimą ar turinio generavimą, jums gali tekti paleisti LaTeX
programą daugiau nei kartą.  Mes perspėsime jus, kai to prireiks.

## LaTeX ar pdfLaTeX, ar ...

[Kitoje pamokoje](lesson-02) mes kalbėsime apie tai, kad LaTeX nėra viena
programa.  Dėstymo supaprastinimui, kurse apsiribojame viena LaTeX programa,
pdfLaTeX, skirta PDF išvedimui.  Dabar apžvelgsime kitas programas ir
priežastis, kodėl jūs norėtumėte jas naudoti tolesnėje kurso eigoje.
