---
lang: "es"
title: "Más sobre: Su primer documento en LaTeX"
---

## Ejecutando LaTeX

Como [comentamos anteriormente](lesson-02), los documentos de LaTeX contienen texto 
sin formato. Para verlo, intente abrir su primer documento en un simple editor de texto, 
por ejemplo usando Notepad en Windows. Debería ver el mismo texto que ve en un editor
de LaTeX, pero sin el color y el resalte de las palabras.

Puede también convertilo en PDF con su editor; para ello debe usar la Línea/Terminal
de Comandos, lo sentimos si no está familiarizado con ella. Cuando usted *se encuentre* 
en ella, vaya hasta el directorio que contenga su fichero fuente `.tex` y ejecute    

`pdflatex first`

o

`pdflatex first.tex`

para obtener su PDF. Note que la extension `.tex` es opcional: LaTeX asumirá que los
ficheros terminan con `.tex` a menos que especifique otra extensión.
 
## Caracteres especiales

Si necesita escribir un carácter especial, la mayor parte del tiempo podrá hacerlo
utilizando simplemente una barra inversa delante de él. Así, por ejemplo `\{` se usa
para obtener un `{`. Hay unos pocos casos en los que tendrá que utilizar, en su lugar, un comando más largo.

| Símbolo | Comado corto (matemáticas y texto) | Comando largo (sólo para texto) |
| `{`     | `\{`          | `\textbraceleft`  |
| `}`     | `\}`          | `\textbraceright` |
| `$`     | `\$`          | `\textdollar`     |
| `%`     | `\%`          |                   |
| `&`     | `\&`          |                   |
| `#`     | `\#`          |                   |
| `_`     | `\_`          | `\textunderscore` |
| ``\``   |               | `\textbackslash`  |
| `^`     |               | `\textasciicircum`|
| `~`     |               | `\textasciitilde` |

Para los tres últimos símbolos no existe ningún comando corto disponible,
ya que `\\` se usa como un indicador de salto de línea y `\~` y `\^` se usan
para obtener la tilde de la eñe o el acento circunflejo, cuando se usan sólo los caracteres
de código ASCII como entrada.
