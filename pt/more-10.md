---
title: "Veja mais sobre: Matemática"
---

## Mais ambientes de alinhamento do `amsmath`

Além do ambiente `align*` apresentado na [lição principal](lesson-10), o
`amsmath` tem diversos outras estruturas de equações em exibição, notavelmente
`gather` para equações de várias linhas que não precisam alinhamento, e
`multline` para dividir uma única expressão em várias linhas, alinhando a
primeira linha à esquerda e a última à direita.  Em todos os casos, a variante
com `*` omite a numeração das equações.

In addition to the `align*` environment shown in the main lesson,
`amsmath` has several other display math constructs, notably `gather`
for multi-line displays that do not need alignment, and `multline` for
splitting a larger single expression over multiple lines, aligning the
first line to the left, and the last to the right. In all cases the `*`
form  omits the equation numbers by default.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

Gather
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### Colunas em alinhamentos de equações

Os ambientes de alinhamento do `amsmath` são projetados para levar pares de
colunas com a primeira coluna de cada par alinhada à direita e a segunda à
esquerda.  Isso permite que múltiplas equações sejam apresentadas, cada uma
alinhada em direção ao seu símbolo de relação

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Equações alinhadas
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

Adicionalmente, há variantes dos ambientes com nome terminando em `ed`, que
formam um sub termo dentro de uma equação maior.  Por exemplo, `aligned` e
`gathered` são variantes de `align` e `gather` respectivamente.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned` aceita um argumento opcional de posicionamento similar ao ambiente
`tabular`.  Isso geralmente é útil para alinhar uma equação linear na primeira
linha;  compare os itens na lista no exemplo a seguir:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## Símbolos em negrito

O LaTeX por padrão tem dois métodos para fazer símbolos matemáticos em negrito.
Para fazer uma expressão inteira em negrito use `\boldmath` _antes_ de começar
a expressão.  O comando `\mathbf` também está disponível para deixar letras
individuais ou palavras em fonte romana em negrito.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % uso incorreto de \mathbf
\end{document}
```

Se você quer acessar símbolos em negrito (conforme você obteria com `\boldmath`)
dentro de uma expressão normal, então você pode usar o comando `\bm` do pacote
`bm`.  Note que `\bm` também funciona com símbolos como `=` e letras Gregas.
(Note que `\mathbf` não tem efeito em `\pi` no exemplo acima.)

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## Mathtools

O pacote `mathtools` carrega o `amsmath` e adiciona muitas outras
funcionalidades adicionais, como variantes dos ambientes de matriz do `amsmath`
que permitem escolher o alinhamento das colunas:

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

## Unicode Math

Como será visto na [lição 14](lesson-14), há outros interpretadores TeX que
usam fontes _OpenType_.  Por padrão, esses interpretadores ainda vão usar as
fontes matemáticas clássicas do TeX, mas você pode usar o pacote `unicode-math`
para usar fontes matemáticas _OpenType_.  Os detalhes desse pacote vão além
deste curso, então sugerimos consultar a
[documentação do pacote](https://texdoc.net/pkg/unicode-math).
Ainda assim, aqui vai um pequeno exemplo:

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

Um dois três
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Símbolos alfanuméricos Unicode
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
