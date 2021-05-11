---
layout: "lesson"
lang: "ca"
title: "Més sobre: Taules"
description: "Aquesta lliçó explica més maneres de personalitzar les taules, posant estil a les columnes, canviar l'espaiat i les regles, i altres paquets que proporcionen diferents extensions a les taules."
toc-anchor-text: "Més sobre: Taules"
---


## Altres continguts del preàmbul

Com que en la lliçó principal no hem parlat de tots els identificadors disponibles, n'explicarem ara uns quants amb exemples. Potser vols tornar a llegir-te el principi de la lliçó sobre les taules i així tenir una visió general dels elements disponibles. Les breus descripcions que hem donat en la lliçó principal haurien de ser suficients per comprendre el significat dels tipus de columna `m`, `b`, `w` i `W` si has entès els tipus `l`, `c`, `r` i `p`. Si no és així, potser voldràs fer unes quantes proves abans de començar. El que queda per aprofondir són els altres operadors de preàmbul `>`, `<`, `@`, `!` i `|`.

### Posar estil a una columna

Com que `>` i `<` es poden utilitzar per posar coses abans i després del contingut de les cel·les d'una columna, pots utilitzar-los per afegir comandes que afecten l'aspecte de la columna. Per exemple, si vols posar en cursiva la primera columna i després una coma, ho pots fer de la següent manera:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  Animal & Menjar  & Tamany   \\
  \midrule
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

`\itshape` fa el text en cursiva, però només dins la cel·la de la taula. Mirarem com posar format manualment [en una propera lliçó](lesson-11).

Potser voldràs que la primera cel·la no es vegi afectada perquè és la capçalera de la taula. Aleshores pots utilitzar `\multicolumn`. Recorda que pots utilitzar-ho per canviar l'alineació d'una sola cel·la com es mostra a continuació:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{>{\itshape}l<{:} *{2}{l}}
  \toprule
  \multicolumn{1}{l}{Animal} & Menjar  & Tamany   \\
  \midrule
  gos    & carn  & mitjà \\
  cavall  & ufals & gros  \\
  granota   & mosques & petit  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

### Manipular l'espaiat entre columnes

Normalment LaTeX completa cada columna amb espais en ambdós costats per donar una visió equilibrada i separar-les de forma convenient. Aquest espaiat es defineix amb la longitud `\tabcolsep`. Com que cada columna es completa pels dos costats es tindrà una separació d'un ample `tabcolsep` en cada lateral de la taula i una separació d'un ample de `2\tabcolsep` entre dues columnes (un per cada columna). Pots ajustar aquest espai amb l'amplada que desitgis utilitzant `\setlenght`:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\setlength\tabcolsep{1cm}

\begin{document}
\begin{tabular}{lll}
  Animal & Menjar  & Tamany   \\
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Pots canviar aquest espai a qualsevol valor arbitrari amb `@`. Això eliminarà l'espaiat entre dues columnes o en els finals, i en canvi posarà entre les columnes allò que hagis especificat com a argument:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l@{ : }l@{\hspace{2cm}}l}
  Animal & Menjar  & Tamany   \\
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

(En una [propera](lesson-11) lliço veurem `\hspace` una altra vegada; pots endevinar que afegeix un espaiat horitzontal.)

La marca de preàmbul `!` fa una cosa similar. La diferència és que _afegeix_ el seu argument enmig de l'espaiat entre dues columnes.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l!{:}ll}
  Animal & Menjar  & Tamany   \\
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


### Línies verticals

En algunes ocasions voldràs utilitzar línies verticals.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{l|ll}
  Animal & Menjar  & Tamany   \\
  gos    & carn  & mitjà \\
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Te n'hauràs adonat que l'ús de `|` és bastant similar a `!{decl}`; afegeix una línia vertical entre dues columnes deixant un espai de farciment entre elles. Però fer-ho així té un gran inconvenient; les línies verticals no funcionaran si utilitzes les línies horitzontals del paquet `booktabs`. En comptes de fer-ho així pots utilitzar les línies horitzontals que proporciona LaTeX, que són `\hline` (que es correspon a `\toprule`, `\midrule` i `\bottomrule`) i `\cline` (que funciona igual que `\cmidrule`). Com vam ensenyar prèviament, les línies verticals s'afegiran a qualsevol espai que s'especifiqui en els arguments opcionals a `\\`. 

## Personalitzant les línies del paquet `booktabs`

Totes les línies del paquet `booktabs` i de la comanda `\addlinespace` accepten un argument addicional entre claudàtors i així pots especificar el gruix d'una línia o l'espaiat horitzontal. A més a més, el retall de línia que provoca `\cmidrule` es pot personalitzar especificant l'ample entre claudàtors després de les opcions `r` o `l`.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{@{} lll@{}} \toprule[2pt]
  Animal & Menjar  & Tamany   \\ \midrule[1pt]
  gos    & carn  & mitjà \\
  \cmidrule[0.5pt](r{1pt}l{1cm}){1-2}
  cavall  & ufals   & gros  \\
  granota   & mosques & petit  \\ \bottomrule[2pt]
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Alineació numèrica a les columnes

L'alineació de números a les taules es pot gestionar amb el tipus de columna `S` que proporciona el paquet `siunitx`.

Un exemple senzill amb dues columnes numèriques ben alineades seria:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{booktabs}
\usepackage{siunitx}
\begin{document}
\begin{tabular}{SS}
\toprule
{Valors} &  {Més Valors} \\
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

Fixa't que qualsevol cel·la no-numèrica ha de ser "protegida" mitjançant claus.

El paquet `siunitx` proporciona moltes possibilitats per formatar números de diferents maneres; mira la [documentació del paquet](https://texdoc.org/pkg/siunitx).

## Especificar l'amplada total de la taula

L'amplada de l'entorn `tabular` es determina automàticament en funció del contingut de la taula. Hi ha dos mecanismes habituals per tal d'especificar un total d'amplada diferent.

Has de notar que quasi sempre serà preferible donar format a la taula amb una amplada fixa tal com es fa a continuació (potser utilitzant un tamany de font com ara `\small`) més que no pas escalar la taula amb `\resizebox` o comandes similars que poden donar tamanys de fonts i amplades inconsistents.

### `tabular*`

L'entorn `tabular*` pren l'argument opcional _width_ que especifica l'amplada total de la taula. Es podrà afegir a la taula un espai ajustable amb la comanda `\extracolsep`. Aquest espai s'afegeix entre totes les columnes que hi ha presents en el preàmbul a partir d'aquest punt. Aquesta comanda s'utilitza quasi sempre juntament amb `\fill`, un espai especial que s'ajusta de manera que sigui el més llarg possible.

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

L'entorn `tabularx`, proporcionat pel paquet del mateix nom, té una sintaxi similar a `tabular*` però en comptes d'ajustar l'espaiat inter-columna, ajusta les amplades de les columnes especificant un nou tipus de columna, `X`. Això és equivalent a especificar `p{...}` per una determinada amplada.

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

A diferència d'altres maneres discutides en aquestes lliçons, amb `tabularx` necessitarem editar la taula diverses vegades amb diferents amplades de prova per determinar l'ajustament final. Això vol dir que hi ha diverses restriccions en l'ús d'aquest entorn; mira la [documentació del paquet](https://texdoc.org/pkg/tabularx).

## Taules multi-pàgina

Un entorn `tabular` crea un bloc indivisible, amb la qual cosa haurà de ser prou petit per tal d'ajustar-se a una pàgina i es situa sovint en un entorn flotant `table`.

Diversos paquets disposen de variants amb sintaxi similar, que permeten dividir la taula per provocar un salt de página. Aquí ho fem amb el paquet `longtable`:

```latex
\documentclass{article}
\usepackage[paperheight=8cm,paperwidth=8cm]{geometry}
\usepackage{array}
\usepackage{longtable}
\begin{document}
\begin{longtable}{cc}
\multicolumn{2}{c}{Una Taula Llarga}\\
Cantó Esquerre & Cantó Dreta\\
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

`longtable` és remarcable pel fet que preserva l'amplada de les columnes en totes les pàgines de la taula; tanmateix, per tal d'aconseguir-ho, potser s'haurà de compilar el document diverses vegades, doncs entrades posteriors de la taula amb valors amples poden afectar les amplades en pàgines anteriors.

## Notes al peu de la taula

És bastant habitual que necessitis símbols en una tabla per fer referència a notes al peu de la taula. El paquet `threeparttable` simplifica les anotacions en aquest tipus de taules, fent que les notes al peu es situin en el mateix bloc que la pròpia taula. Et convidem a veure la [documentació d'aquest paquet](https://texdoc.org/pkg/threepqrttable) per a més detalls, però vejam ara un exemple senzill:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{threeparttable}
\begin{document}

\begin{table}
\begin{threeparttable}
   \caption{Un Exemple}
   \begin{tabular}{ll}
    Una entrada & 42\tnote{1}\\
    Una altra entrada & 24\tnote{2}\\
   \end{tabular}
   \begin{tablenotes}
   \item [1] la primera nota.
   \item [2] la segona nota.
   \end{tablenotes}
\end{threeparttable}
\end{table}

\end{document}
```

## Composició tipogràfica de columnes estretes

Les regles per defecte de salt de línia assumeixen que les línies són relativament llargues, i així hi ha una certa flexibilitat a l'hora d'escollir els salts de línia. El següent exemple mostra diferents possibilitats en el cas de les taules. La primera taula mostra l'ajustament d'espai entre paraules, i TeX donarà un missatge d'avís del tipus 'Underfull lines' (línies que deixen espais en blanc). L'ús de `\raggedright` normalment impedeix aquest problema, però pot donar lloc a línies molt irregulars. La comanda `\RaggedRight` del paquet `ragged2e` pot ser un compromís; permet certa irregularitat entre l'ample de les línies, però també divideix una paraula amb un guionet quan és necessari, tal i com es mostra a la tercera taula.

Fixa't en l'ús que fem de `\arraybackslash`, que 'reseteja' la definició de `\\` de manera que finalitza la fila de la taula.

Una tècnica alternativa, com es mostra a la quarta taula, és utilitzar una font més petita de manera que les columnes ja no són tan estretes en relació amb el tamany de la font.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{ragged2e}
\begin{document}

\begin{table}

\begin{tabular}[t]{lp{3cm}}
Un & Un text llarg dins d'un paràgraf estret, amb una mica de text d'exemple.\\
Dos & Un altre text llarg dins d'un paràgraf estret, amb algunes altres paraules més per tal de provocar un guionet a la paraula en el salt de línia.
\end{tabular}%
\begin{tabular}[t]{l>{\raggedright\arraybackslash}p{3cm}}
Un & Un text llarg dins d'un paràgraf estret, amb una mica de text d'exemple.\\
Dos & Un altre text llarg dins d'un paràgraf estret, amb algunes altres paraules més per tal de provocar un guionet a la paraula en el salt de línia.
\end{tabular}%
\begin{tabular}[t]{l>{\RaggedRight}p{3cm}}
Un & Un text llarg dins d'un paràgraf estret, amb una mica de text d'exemple.\\
Dos & Un altre text llarg dins d'un paràgraf estret, amb algunes altres paraules més per tal de provocar un guionet a la paraula en el salt de línia.
\end{tabular}

\footnotesize
\begin{tabular}[t]{lp{3cm}}
Un & Un text llarg dins d'un paràgraf estret, amb una mica de text d'exemple.\\
Dos & Un altre text llarg dins d'un paràgraf estret, amb algunes altres paraules més per tal de provocar un guionet a la paraula en el salt de línia.
\end{tabular}

\end{table}

\end{document}
```

## Definir nous tipus de columnes

Com hem explicat a la [lliçó principal](lesson-08), el paquet `array` permet construccions com ara `>{\bfseries}c`  per definir una columna centrada i en negreta. Moltes vegades és convenient definir un nou tipus de columna per encapsular aquesta definició, per exemple

```latex
\newcolumntype{B}{>{\bfseries}c}
```
permet l'ús de `B` en el preàmbul d'una taula per tal d'especificar una columna centrada i en negreta.


## Trucs verticals

Sovint, en comptes de voler que una cel·la s'expandeixi en múltiples files, potser és millor tenir una sola fila en què algunes cel·les es divideixen verticalment mitjançant entorns `tabular` niats.

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
  El contingut & és & aquí \\
  El contingut & és & aquí \\
  El contingut & és & aquí \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

S'ha de fer notar que pots controlar l'alineació vertical mitjançant un argument opcional de `tabular`; suporta l'ús de `t`, `c`, o `b` per a les alineacions de dalt, centre i baix respectivament, i s'utilitza de la següent manera:

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
  El contingut & és & aquí \\
  El contingut & és & aquí \\
  El contingut & és & aquí \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Espaiat de línia en les taules

En la lliçó principal vam veure que `\addlinespace` del paquet `booktabs` era útil per afegir espaiat extra entre línies.

Hi ha dos paràmetres generals que controlen aquest espaiat de línia, `\arraystretch` i `\extrarowheight` (aquest darrer pertany al paquet `array`).

```latex
\renewcommand\arraystretch{1.5}
```

incrementa l'espaiat de base en un 50%.


Sovint, especialment quan utilitzem `\hline`, n'hi ha prou amb incrementar l'altura de les files, sense haver d'incrementar la seva amplada per sota de la línia base. El següent exemple mostra l'ús del paràmetre `\extrarowheight`.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\begin{document}

\begin{center}
\begin{tabular}{cc}
\hline
Quadrat& $x^2$\\
\hline
Cub& $x^3$\\
\hline
\end{tabular}
\end{center}

\begin{center}
\setlength\extrarowheight{2pt}
\begin{tabular}{cc}
\hline
Quadrat& $x^2$\\
\hline
Cub& $x^3$\\
\hline
\end{tabular}
\end{center}
\end{document}
```
