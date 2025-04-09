---
layout: "lesson"
lang: "de"
title: "Mehr zu: Mit Fehlern umgehen"
description: "Diese Lektion zeigt einige weitere häufige Fehler in LaTeX und erklärt verkettete Fehler und stille Fehler."
toc-anchor-text: "Mehr zu: Mit Fehlern umgehen"
---

## Fehler, die am Ende einer Umgebung auftreten

Manche Umgebungen (unter anderem `amsmath`s Ausrichtungen und `tabularx`
Tabellen) scannen den gesamten Umgebungskörper, bevor der Inhalt bearbeitet
wird. Dies bedeutet, dass jedweder Fehler innerhalb der Umgebung bei der letzten
Zeile gefunden wird. Wie dem auch sei, TeXs Kontextanzeige sollte trotzdem
helfen, den Fehler zu finden.

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

Hier wird der Fehler in Zeile 12 angezeigt

```
l.12 \end{align}
```
{: .noedit :}

obwohl der tatsächliche Fehler aus Zeile 10 in der Kontextanzeige zu finden ist:

```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}

## Unberechtigte Fehler aufgrund voriger Fehler

Wenn LaTeX interaktiv von der Befehlszeile aufgerufen wird, ist es möglich, den
LaTeX-Lauf beim ersten Fehler mit `x` abzubrechen, das Dokument zu bearbeiten
und LaTeX neu zu starten. Wird ein Fehler ignoriert (oder ein Onlinesystem oder
Editor verwendet, der Fehler zunächst ignoriert), wird TeX versuchen,
sich vom Fehler zu erholen und fortzufahren, was zu weiteren Fehlermeldungen
führen kann.

Man sollte sich also über die _Anzahl_ der gefunden Fehlern nicht den Kopf
zerbrechen und sich auf das Beheben des ersten Fehlers konzentrieren.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\begin{document}
Text_Wort  $\alpha + \beta$.

Mehr Text.
\end{document}
```

Hier ist der Fehler der Unterstrich `_`, der als `\_` eingegeben werden sollte.

TeX meldet den Fehler in der _ersten_ Fehlermeldung korrekt

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

Wird der Fehler zunächst bei der `?` Aufforderung ignoriert, erholt sich TeX
durch das Hinzufügen von `$`, sodass `_` im Mathematikmodus gelesen wird und als
Subskript interpretiert wird. Der Mathematikmodus wird bis zum `$` fortgesetzt,
hierdurch beendet und das folgende `\alpha` im Textmodus gesehen, was zum
nächsten Fehler führt

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}

## Fehler, die keinen Fehlerprompt auslösen

Manche Fehler, besonders solche, die erst am Ende einer Datei entdeckt werden,
erzeugen keine Fehlermeldung mit `?` Aufforderung, sondern bewirken nur eine
Warnung im Log.

Wenn dieses Beispiel mit dem TeXLive.net Server ausprobiert wird, wird eine PDF
erzeugt; um den Fehler zu sehen, muss `%!TeX log` hinzugefügt werden.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

\begin{document}

 Text {\large etwas großer Text) normale Größe?

\end{document}
```

In diesem Beispiel wurde die Schriftgraderhöhung fehlerhafter Weise mit `)`
anstelle von `}` beendet. Dies wird bis zum Ende der Datei nicht entdeckt, dort
wird TeX allerdings feststellen, dass noch eine ungeschlossene Gruppierung aktiv
ist. Es wird hier die Zeile melden, in der die Gruppe mit `{` geöffnet wurde,
den eigentlichen Fehler, dass `)` verwendet wurde, nimmt TeX als "normalen Text"
wahr.

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
