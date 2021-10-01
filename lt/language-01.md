---
layout: "lesson"
lang: "lt"
title: "Lietuvybė LaTeX dokumentuose"
description: "Ši pamoka parodo, ko reikia, kad rašyti LaTeX dokumente lietuviškai."
next: "extra-01"
toc-anchor-text: "LaTeX lietuviškai"
toc-description: "Lietuviškos rašybos ypatybės"
---

# Lietuvybė LaTeX dokumentuose

<span
  class="summary">Ši pamoka skirta LaTeX dokumentų su lietuvišku tekstu ruošimui. Parodomi du dažniausiai pasitaikantys atvejai: kai visas dokumentas yra lietuviškai, ir kai lietuviški yra tik atskiri žodžiai, pavyzdžiui, vardai ir pavardės.</span>

## Pilnas lietuvybės palaikymas

Šiuolaikinis LaTeX turi du paketus ruošti dokumentams ne Amerikos anglų
kalba: `babel` ir `polyglosia`.  Pastarasis veikia tik su programomis
LuaLaTeX ir XeLaTeX.  Šie paketai užtikrina teisingą žodžių kėlimą, tinkamas
kabutes, pateikia lietuviškas pavadinimus automatiškai įvardinamiems
elementams, pavyzdžiui, lentelėms, brėžiniams ar turiniams.

Abu paketai įgalina komponuoti skirtingų kalbų dalis viename dokumente.

Kitas pasirinkimas liečia šriftus.  Geriausia tekstas atrodo, kai šriftas
turi visas lietuviškas raides, o ne komponuoja kai kurias raides iš atskirų
dalių.  Tarp rekomenduojami šriftų yra Latin Modern, TeX Gyre šeimos šriftai
ir Stix.

### Babel su (pdf)LaTeX

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{lmodern}% pagrindinis šriftas - Latin Modern
\usepackage[lithuanian]{babel}
\begin{document}
\textbf{Lietuvių kalba} – iš baltų prokalbės kilusi lietuvių tautos kalba,
kuri Lietuvoje yra \textit{valstybinė}, o Europos Sąjungoje – viena iš
\textbf{\textit{oficialiųjų kalbų}}.  Lietuviškai kalba apie tris milijonus
žmonių (dauguma jų gyvena Lietuvoje). Drauge su latvių, mirusiomis prūsų,
jotvingių ir kitomis baltų kalbomis, priklauso indoeuropiečių kalbų šeimos
baltų kalbų grupei.
\end{document}
```

### Babel su LuaLaTeX/XeLaTeX

```latex
\documentclass{article}
\usepackage[lithuanian]{babel}
\babelfont{rm}{TeXGyreTermes}% pagrindinis šriftas - TeX Gyre Termes
\begin{document}
\textbf{Lietuvių kalba} – iš baltų prokalbės kilusi lietuvių tautos kalba,
kuri Lietuvoje yra \textit{valstybinė}, o Europos Sąjungoje – viena iš
\textbf{\textit{oficialiųjų kalbų}}.  Lietuviškai kalba apie tris milijonus
žmonių (dauguma jų gyvena Lietuvoje). Drauge su latvių, mirusiomis prūsų,
jotvingių ir kitomis baltų kalbomis, priklauso indoeuropiečių kalbų šeimos
baltų kalbų grupei.
\end{document}
```

### Polyglossia su LuaLaTeX/XeLaTeX:

```latex
\documentclass{article}
\usepackage{polyglossia}
\setmainlanguage{lithuanian}
\setmainfont{Stix}% pagrindinis šriftas - Stix
\begin{document}
\textbf{Lietuvių kalba} – iš baltų prokalbės kilusi lietuvių tautos kalba,
kuri Lietuvoje yra \textit{valstybinė}, o Europos Sąjungoje – viena iš
\textbf{\textit{oficialiųjų kalbų}}.  Lietuviškai kalba apie tris milijonus
žmonių (dauguma jų gyvena Lietuvoje). Drauge su latvių, mirusiomis prūsų,
jotvingių ir kitomis baltų kalbomis, priklauso indoeuropiečių kalbų šeimos
baltų kalbų grupei.
\end{document}
```

## Atskiros lietuviškos raidės

Kartais dokumente reikia tik vienos kitos savitosios lietuviškos raidės,
pavyzdžiui pavardėse.  Arba jūs dirbate prie kompiuterio, kuriame nėra
instaliuota lietuvių kalbos klaviatūra.  Tokiu atveju pagelbėja akcentų
komandos.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\begin{tabular}{ll}
\hline
\={u}, \={U} & br\=uk\v{s}nys \\
\.{e}, \.{E} & ta\v{s}kas \\
\v{c}, \v{C}, \v{s}, \v{S}, \v{z}, \v{Z} & pauk\v{s}\v{c}iukas\\
\k{a}, \k{A}, \k{e}, \k{E}, \k{i}, \k{I}, \k{u}, \k{U} & nosin\.e \\
\hline
\end{tabular}
\end{document}
```
