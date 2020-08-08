---
title: "Veja mais sobre: Estruturando documentos longos"
---

## Criando um índice remissivo

Dependendo do tipo de documento que você está escrevendo, você pode querer
incluir um índice.  O processo é parecido com incluir a biliografia, pois
arquivos também são necessários para armazenar as informações.  Felizmente, todo
o processo é automatizado pelo pacote `imakeidx`.  Precisamos três instruções
para o LaTeX:

- O comando `\makeindex`, que ativa a criação do índice
- O comando `\index`, que adiciona itens ao índice
- O comando `\printindex`, que imprime o índice

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Algum texto sobre Foo\index{foo}.
Mais texto\index{baz!bar}.
Ainda mais texto\index{alpha@$\alpha$}.
Mais texto sobre uma parte diferente de baz\index{baz!wibble}.

\clearpage
Algum texto sobre Foo\index{foo} again, on a different page.
Ainda mais texto\index{beta@$\beta$}.
Ainda mais texto\index{gamma@$\gamma$}.
\printindex
\end{document}
```

Mostramos duas funcionalidades de índices aqui: a subdivisão usando `!`, e
imprimir algo diferente do texto usado para organizar em ordem alfabética usando
`@`.  Há muitas formas de personalizar um índice;  experimente o exemplo e veja
como ele funciona.
