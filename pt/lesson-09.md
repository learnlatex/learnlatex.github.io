---
lang: "pt"
title: "Referências cruzadas"
toc-anchor-text: "Referências cruzadas"
toc-description: "Mencionando figuras, tabelas, etc."
---

## O mecanismo de `\label` e `\ref`

Quando você está escrevendo um documento de qualquer comprimento, você vai
querer mencionar itens numerados, como figuras, tabelas, ou equações.
Felizmente, o LaTeX consegue numerar automaticamente;  apenas precisamos
configurar tudo corretamente.  Para que o LaTeX lembre de um ponto no seu
documento você deve colocar um rótulo (_label_) nesse local, e em outros locais
você pode referenciar esse rótulo.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Olá mundo!

Este é o meu primeiro documento.

\section{Título da primeira seção}

Texto do material da primeira seção.


\subsection{Subseção da primeira seção}
\label{subsec:labelone}

Texto do material da primeira subseção.
\begin{equation}
  e^{i\pi}+1 = 0
\label{eq:labeltwo}
\end{equation}

Na subseção~\ref{subsec:labelone} está a equação~\ref{eq:labeltwo}.
\end{document}
```

Há dois comandos `\label{...}`, um após a subseção e outro dentro do ambiente
`equation`.  Eles são associados com os comandos `\ref{...}` na última frase.
Quando você executa o LaTeX ele salva as informações sobre rótulos em um arquivo
auxiliar.  Para `\label{subsec:labelone}`, o LaTeX sabe que ele está em uma
subseção e então salva o seu número.  Em `\label{eq:labeltwo}`, o LaTeX sabe que
está em uma equação, então ele salva as informações daquela equação.  Quando
você pedir por essa informação, o LaTeX vai buscá-la do arquivo auxiliar.

O `subsec:` e `eq:` não são tratados diferentemente pelo LaTeX;  eles só servem
para você se organizar sobre o que se trata aquele rótulo.

Você pode ver referências que aparecem no PDF como pontos de interrogação em
negrito, **??**.  A explicação é que devido à esse armazenamento de informação
no arquivo auxiliar, a primeira vez que você compila o documento, o rótulo ainda
não foi salvo.  Execute o LaTeX mais uma vez e tudo estará correto. (Geralmente
enquanto estiver escrevendo um documento você vai executar o LaTeX várias vezes
de qualquer forma, então isso não é um problema.)  Se mesmo depois de compilar
de novo a referência continuar como **??**, verifique que você escreveu o rótulo
corretamente.

Note os tils (`~`) antes das referências.  VOcê não quer uma quebra de linha
entre `subseção` e o número, ou entre `equação` e o número.  Colocar um til
impede que o LaTeX quebre a linha naquele ponto.

## Onde colocar a `\label`

O comando `\label` sempre se refere à _ultima_ entidade numerada:  uma seção,
uma equação, um _float_, etc.  Isso significa que `\label` sempre deve vir
_depois_ do objeto ao qual você quer se referir.  Em particular, quando você
cria _floats_, o comando `\label` deve vir _depois_ (ou melhor, dentro) do
comando `\caption`, mas dentro do ambiente _float_.

## Exercícios

Tente adicionar novas partes numeradas (seções, subseções, listas numeradas)
para testar o documento e descobrir quantas execuções do LaTeX são necessárias
para resolver todos os comandos `\label` e `\ref`.

Adicione alguns _floats_ e veja o que acontece quando você coloca `\label`
_antes_ do `\caption` ao invés de depois;  você consegue prever o resultado?

O que acontece se você colocar uma `\label` para uma equação _depois_ do
`\end{equation}`?
