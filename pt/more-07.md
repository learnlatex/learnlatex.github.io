---
lang: "pt"
title: "Veja mais sobre: Incluindo gráficos e fazendo coisas 'flutuarem'"
toc-anchor-text: "Veja mais sobre: Incluindo gráficos e fazendo coisas 'flutuarem'"
---

## Nomeando arquivos de gráficos

O LaTeX funciona em muitas plataformas então nomes de arquivos merecem certa
atenção.  O mais seguro é dar nomes simples aos seus arquivos, em especial sem
espaços.  Por exemplo, se quiser organizar seu arquivos mantendo todos os
gráficos em uma subpasta, então algo como
`\includegraphics[width=30pt]{pix/mom.png}`
é portável e à prova de problemas futuros.

Espaços em nomes de arquivos são tradicionalmente problemáticos, mas são
geralmente suportados.  No entanto, se você tem espaços no nome de um arquivo e
estiver tendo problemas, você pode tentar remover os espaços como um primeiro
passo.

O suporte a caracteres especiais é um pouco variável;  há problemas com alguns
sistemas, particularmente no Windows.  Se estiver encontrando problemas com
caracteres especiais em nomes de arquivos, tente usar apenas caracteres ASCII
para ver se funciona.

## Armazenando gráficos em uma subpasta

Uma forma comum de organizar arquivos é colocar todos os gráficos em uma
subpasta.  Você pode então incluir o caminho relativo, como mostrado acima;
perceba que o caractere `/` é usado para separar partes do caminho, _mesmo no
Windows_.

Se você tem muitas imagens, você pode querer configurar as subpastas de antemão.
Isso pode ser feito usando o comando `\graphicspath`, que precisa de um item
entre chaves para cada subpasta.  Por exemplo, para incluir ambos os diretórios
`figs` e `pics`, teríamos:

<!-- {% raw %} -->
```latex
\graphicspath{{figs/}{pics/}}
```
<!-- {% endraw %} -->

Note a necessidade de um `/` ao final de cada item.

## Criando gráficos

Como já foi discutido, é fácil usar gráficos de várias fontes, incluindo
plotagens de programas científicos.  Quando o fizer, você provavelmente vai
querer salvar como um PDF se possível, já que é um formato vetorial.  Se você
precisar de uma imagem raster, opte por uma resolução alta.  Você pode fazer
gráficos manuais que incluem partes de código LaTeX usando o
[Inkscape](https://inkscape.org/).  Uma alternatica que extende as técnicas de
desenho para três dimensões é o
[Asymptote](https://www.ctan.org/pkg/asymptote).  Estes dois produzem arquivos
que você pode incluir em seu documento.

Você também pode criar gráficos como desenhos que são especialmente feitos para
o LaTeX, com altíssima precisão, assim como equações e rótulos que combinam com
o seu documento.  Você pode desenhar gráficos diretamente no seu documento, que
é conveniente à custa de documentos mais complexos com exigências maiores,
usando o [Ti*k*Z](https://ctan.org/pkg/pgf).  Uma alternativa é o
[PSTricks](https://ctan.org/pkg/pstricks-base).

## Controlando _floats_

A forma como o LaTeX controla _floats_ é complexa.  A exigência mais comum é ter
a figura colocada no PDF exatamente onde ela está no código fonte.  O pacote
`float` faz isso:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % texto de enchimento
\usepackage{float}

\begin{document}
\lipsum[1-7]
\begin{figure}[H]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Uma imagem de exemplo}
\end{figure}
\lipsum[8-15]
\end{document}
```

Note a opção `H`, que coloca a figura 'absolutamente aqui'.  No entanto não é
recomendado usar `H` pois ele pode criar grandes espaços em branco no seu
documento.

## Outros tipos de _float_

[Em breve veremos](lesson-08) que podemos colocar tabelas em _floats_;  elas
vão em um ambiente `table`.  No entanto não temos que _necessariamente_ colocar
figuras no ambiente `figure` nem tabelas no ambiente `table`;  isto é apenas
convenção.

Você pode querer outros tipos de ambientes flutuantes (_floats_);  cada tipo é
inserido independentemente.  Você pode fazer isso usando o pacote
[`trivfloat`](https://ctan.org/pkg/trivfloat).  Ele fornece um único comando,
`\trivfloat`, para fazer novos tipos de _floats_.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % texto de enchimento
\usepackage{trivfloat}
\trivfloat{image}

\begin{document}
\begin{image}
  \centering
  \includegraphics[width=0.5\textwidth]{example-image}
  \caption{Uma imagem de exemplo}
\end{image}
\end{document}
```
