---
layout: "lesson"
lang: "lt"
title: "Daugiau apie ilgesnių dokumentų struktūrizavimą"
description: "Ši pamoka parodo, kaip sudaryti dalykinį indeksą ir kaip panaudoti paketą imakeidx proceso automatizavimui."
toc-anchor-text: "Daugiau apie ilgesnių dokumentų struktūrizavimą"
---

## Indekso sudarymas

Kai kuriems dokumentų tipams galbūt norėsite sukurti dalykinę rodyklę
(indeksą).  Procesas šiek tiek primena bibliografijos kūrimą, nes naudojami
pagalbiniai failai.  Laimei, procesas automatizuojamas panaudojus paketą
`imakeidx`.  Dokumente yra naudojamos trys LaTeX komandos:

- `\makeindex` &ndash; rodyklės (`.idx` failo automatiniam) kūrimui,
- `\index` &ndash; visų rodyklės įrašų sužymėjimui (rankomis) dokumente,
- `\printindex` &ndash; rodyklės (automatiniam) išvedimui.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Some text about Foo\index{foo}.
More text\index{baz!bar}.
Even more text\index{alpha@$\alpha$}.
More text about a different part of baz\index{baz!wibble}.

\clearpage
Some text about Foo\index{foo} again, on a different page.
Even more text\index{beta@$\beta$}.
Even more text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

Čia parodėme dar dvi indeksavimo ypatybes: padalijimą į lygius, panaudojant
`!`, ir išvedimo indekse ko nors, beskiriančio nuo rodyklės rūšiavimui skirto
teksto, panaudojant `@`.  Yra daug galimybių konfigūruoti rodyklės išvedimą;
išbandykite pavyzdį ir pamatykite, kaip rodyklės kūrimas veikia.
