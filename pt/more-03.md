---
lang: "pt"
title: "Veja mais sobre: Seu primeiro documento LaTeX"
---

## Executando o LaTeX

Como [detalhado antes](lesson-02), documentos LaTeX são compostos de texto
simples.  Para ver isso, tente abrir o seu primeiro docmento em um editor de
texto comum, por exemplo no Windows usando o Bloco de Notas.  Você deve ver o
mesmo que viu no seu editor dedicado para LaTeX, mas sem o realce de sintaxe
nos comandos.

Você também pode executar o LaTeX sem o seu editor;  isso exige usar o Prompt de
Comando/Terminal, então não se preocupe se você não for familiar com essas
ferramentas.  Se quiser tentar, você pode navegar para o diretório que contém o
seu arquivo `.tex`, e executar:

`pdflatex first`

ou

`pdflatex first.tex`

para compor o seu PDF.  Perceba que a extensão `.tex` é opcional:  o LaTeX vai
assumir que arquivos têm extensão `.tex` a menos que você especifique uma
extensão.

## Caracteres especiais

Se você precisar digitar um caractere especial, a maioria das vezes basta usar
uma contra-barra antes do caractere então, por exemplo, `\{` é usado para
imprimir um `{`.  No entanto há alguns casos que você precisa de um comando mais
longo:

| Símbolo | Comando curto (equações e texto) | Comando longo (texto apenas) |
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

Para os últimos três símbolos, não há comandos curtos disponíveis, porque `\\`
é usado para indicar uma quebra de linha, e `\~` e `\^` são usados para
produzir os acentos til e circunflexo quando usando apenas caracteres ASCII no
arquivo `.tex`.
