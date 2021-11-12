---
layout: "lesson"
lang: "lt"
title: "Daugiau apie tai, kaip dokumentų klasės keičia dizainą"
description: "Ši pamoka suteikia informaciją apie specialias LaTeX dokumentų klases."
toc-anchor-text: "Daugiau apie tai, kaip dokumentų klasės keičia dizainą"
---

## Žurnalams skirtos klasės

Daugelis akademinių žurnalų turi paruoštas LaTeX klases, skirtas
pateikiamiems straipsniams.  Jos paprastai suformuoja dizainą, panašų į
žurnalinį variantą, nors tai priklauso nuo šrifto naudojimo ir pan.  Jei
tokia klasė yra, ją paprastai tiesiogiai teikia redakcija, kuri kartu turėtų
pateikti išsamią informaciją apie tos klasės savybes.  Daugelį žurnalų klasių
taip pat galima rasti [CTAN](https://ctan.org) ir standartinėse TeX
sistemose.


## Pristatymų klasės

Viena sričių, kuriai reikia daug specializuotų komandų, yra pristatymų
kūrimas.  Klasė `slides` buvo parašyta „klasikinėms“ spausdintoms skaidrėms
spausdinti, ir ji nepalaiko daugelio efektų, būdingų ekrane pateikiamiems
pristatymams.  Šiam tikslui buvo sukurtos naujos klasės, tarp jų plačiausiai
naudojamos yra dvi: `beamer` ir `powerdot`.  Kadangi `beamer` yra
populiaresnis, pateiksime pavyzdį su juo:

```latex
\documentclass{beamer}
\usepackage[T1]{fontenc}
\begin{document}

\begin{frame}
  \frametitle{A first frame}
  Some text
\end{frame}

\begin{frame}
  \frametitle{A second frame}
  Different text
  \begin{itemize}
    \item<1-> First item
    \item<2-> Second item
  \end{itemize}
\end{frame}

\end{document}
```

Pavyzdys demonstruoja dvi svarbias idėjas.  Pirma, `beamer` padalija
dokumentą į seką „rėmų“ (_frames_), kurių kiekvieną gali sudaryti daugiau nei
viena skaidrė (puslapis).  Antra, `beamer` išplečia įprastą LaTeX sintaksę,
kad skirtingos įvesties dalys galėtų būti išvestos dinamiškai „tada, kai to
reikia“.  Ši išraiškos priemonė yra galinga, bet per sudėtinga, kad ją čia
aprėptume: bet [šiame tinklaraščio
įraše](https://www.texdev.net/2014/01/17/the-beamer-slide-overlay-concept/)
rasite daugiau apie tai.

## Vaizdų klasė

Pasitaikys tokie atvejai, kai jūs norėsite sukurti iliustraciją (kurioje gali
būti pakankamai daug teksto) naudojant LaTeX.  Dažnai jūs norėsite ją toliau
naudoti kaip paveiksliuką, todėl ji turi būti išvesta viena į atskirą
„puslapį“.  Tokį dalyką lengviausia padaryti naudojant
[`standalone`](https://ctan.org/pkg/standalone) klasę.  Ji automatiškai
nustato puslapio dydį, kad jis apimtų visą išvedamą turinį.

```latex
\documentclass{standalone}
\usepackage[T1]{fontenc}
\begin{document}
A simple document: this will be a very small box!
\end{document}
```
