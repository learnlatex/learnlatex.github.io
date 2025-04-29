---
layout: "lesson"
lang: "ca"
title: "Més sobre: Tractament d'errors"
description: "Aquesta lliçó explica alguns altres errors comuns a LaTeX, i explica sobre errors encadenats i errors silenciosos."
toc-anchor-text: "Més sobre: Tractament d'errors"
---

## Errors que ocorren a la fi dels entorns

Alguns entorns (principalment les alineacions `amsmath` i taules `tabularx`) escanegen el cos complet de l'entorn abans de processar el seu contingut. Això significa que qualsevol error dins de l'entorn es reportarà a la última línia. Tanmateix, com vam veure en la lliçó principal, la visualització del context de l'error hauria de mostrar la localització precisa on s'ha produït.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

\begin{align}
\alpha &= \frac{1}{2}\\
\beta  &= \frak{2}{3}\\
\gamma &= \frac{3}{4} 
\end{align}

\end{document}
```

Aquí l'error es reportarà a la línia 12

```
l.12 \end{align}
```
{: .noedit :}

Encara que l'error real és a la línia 10 com es pot veure en les línies de context:

```
! Control de seqüència indefinida.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}


## Errors ficticis degut a errors comesos prèviament

Quan s'utilitza LaTeX de forma interactiva, des de la línia de comandes és possible: amb la tecla `x` podem aturar el procés quan tenim el primer error, editar el document i tornar a executar LaTeX. Tanmateix, si s'obvien els errors o s'utilitza un editor o un sistema en línia, aleshores TeX intentarà tirar endavant; això pot provocar però l'aparició de nous errors.

Així que no t'has de preocupar massa pel _número_ d'errors i t'has de concentrar sempre en resoldre el primer error que se t'indica.


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

Més text.
\end{document}
```

Aquí l'error és el caràcter de subratllat `_` que hauria de ser `\_`.

TeX ho indica correctament amb el _primer_ missatge d'error

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         paraula  $\alpha + \beta$.
?
```
{: .noedit :}

Tanmateix, en obviar aquest error i continuar, TeX segueix executant-se i afegirà el `$`en aquest punt, de manera que `_` serà interpretat, en mode matemàtic, com un subíndex. El mode matemàtic continua vigent fins que el següent símbol `$` indiqui el final, i per tant la comanda `\alpha` s'interpreta en mode text, generant un nou missatge d'error.

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## Errors que no disparen un missatge d'error

Alguns errors, especialment errors que no són detectats fins al final del fitxer, no generen un missatge d'error i tant sols donen una alerta en el log.

Si proves aquest exemples utilitzant el servei TeXLive.net retornarà un PDF; per veure el missatge d'error en el log s'ha d'afegir `%!TeX log`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large un text llarg) a tamany normal?

\end{document}
```

En aquest exemple el canvi de tamany té un error de sintaxi doncs l'hem acabat amb `)` en comtpes de `}`. Això no s'ha detectat fins que no hem arribat al final del fitxer quan TeX detecta que encara hi ha un grup sense tancar. Aleshores es reporta la línia en la qual el grup es va obrir amb `{`. No pot detectar l'error `)` doncs es veu com a "text normal".

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
  rlselectline('pre0',10);
  rlselectline('pre3',5);
  rlselectline('pre6',6);
  }, false);
</script>
