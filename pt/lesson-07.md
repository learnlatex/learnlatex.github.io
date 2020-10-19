---
lang: "pt"
title: "Incluindo gráficos e fazendo coisas 'flutuarem'"
---

## Incluindo gráficos

Para trazer gráficos de fora do LaTeX, use o pacote `graphicx`, que adiciona o
comando `\includegraphics` ao LaTeX:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
Essa imagem
\begin{center}
  \includegraphics[height=2cm]{example-image}
\end{center}
é um PDF importado.
\end{document}
```

Você pode incluir arquivos EPS, PNG, JPG, e PDF.
Se você tem mais de uma versão de uma imagem (com diferentes extensões) então
você pode escrever, por exemplo, `example-image.png`. (O pacote `graphicx` vai
tentar adivinhar a extensão se você não der uma.)

Você vai perceber que usamos um novo ambiente aqui, `center`, para colocar a
imagem centralizada horizontalmente na página.  [Mais adiante](lesson-11),
vamos falar mais sobre espaçamento e posicionamento.

## Alterando a aparência de imagens

O comando `\includegraphics` tem muitas opções para controlar o tamanho e forma
das imagens incluídas e para aparar material.  ALgumas dessa opções são bastante
utilizadas, então vale a pena conhecê-las.

A coisa mais óbvia a fazer é definir a largura (`width`) ou a altura (`height`)
de uma imagem, que são frequentemente relativos à largura (`\textwidth`) e à
altura (`\textheight`) da área de texto.  O LaTeX vai redimensionar a imagem
automaticamente para que proporção fique correta.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[height = 0.5\textheight]{example-image}
\end{center}
Algum texto
\begin{center}
  \includegraphics[width = 0.5\textwidth]{example-image}
\end{center}
\end{document}
```

Você também pode redimensionar imagens usando um fator de escala com `scale`, ou
girá-las usando `angle`.  Outra coisa que você pode querer fazer é cortar (com
`clip`) ou aparar (com `trim`) uma imagem.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}

\begin{document}
\begin{center}
  \includegraphics[clip, trim = 0 0 50 50]{example-image}
\end{center}
\end{document}
```

## Fazendo imagens flutuar

Tradicionalmente em tipografia, particularmente com documentos técnicos, imagens
podem mover para outros locais no documento.  Isso chama-se um _float_.  Imagens
são normalmente incluídas como _floats_ (iniciado aqui pelo ambiente `figure`)
para que elas não deixem grandes espaços em branco na página.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage{lipsum}  % produzir texto de preenchimento

\begin{document}
\lipsum[1-4] % Alguns parágrafos de enchimento

Local de teste.
\begin{figure}[ht]
  \centering
  \includegraphics[width=0.5\textwidth]{example-image-a.png}
  \caption{Uma imagem de exemplo}
\end{figure}

\lipsum[6-10] % Alguns parágrafos de enchimento
\end{document}
```

Aqui o LaTeX moveu a imagem e a legenda para longe do texto `Local de teste`
para o topo da segunda página porque não há espaço para ela no final da primeira
página.  O `ht` influencia onde o LaTeX pode colocar o _float_;  essas duas
letras significam que ele pode ir onde está no código fonte (depois de
`Local de teste`) ou no topo de uma página.  Você pode usar quatro
especificadores diferentes:

- `h` 'aqui' se possível (`here`)
- `t` topo da página (`top`)
- `b` final da página (`bottom`)
- `p` uma página dedicada para _floats_ (float `page`)

[Mais adiante](lesson-09) vamos ver como fazer referências cruzadas a
_floats_ para que você possa indicá-los do texto.

Você provavelmente percebeu que centralizamos a imagem usando `\centering` ao
invés do ambiente `center`.  Dentro de um _float_ (como o `figure`) você deve
usar `\centering` se quiser centralizar o conteúdo;  isso evita que o ambiente
`center` adicione espaçamento vertical indesejado.

## Exercícios

Tente incluir uma imagem que você criou, substituindo as 'padrões' que usamos
na demonstração.

Explore o que você pode fazer usando as opções `height`, `width`, `angle` e
`scale`.

Use `lipsum` para fazer uma demonstração razoavelmente longa, então tente
colocar floats usando diferentes especificadores de posição.  Como
especificadores diferentes interagem?
