---
layout: "lesson"
lang: "pt"
title: "Veja mais sobre: Resolvendo erros"
description: "Esta lição mostra mais alguns erros comuns no LaTeX e explica sobre cadeias de erros e erros silenciosos."
toc-anchor-text: "Veja mais sobre: Resolvendo erros"
---

## Erros reportados no final de ambientes

Alguns ambientes (em particular, alinhamentos do `amsmath` e tabelas do
`tabularx`) leem todo o corpo do ambiente antes de processar o conteúdo.  Isso
significa que qualquer erro dentro do ambiente será relatado na última linha.
No entanto, como visto na [lição principal](lesson-15), o contexto do erro
mostrado pelo TeX ainda deve mostrar a localização exata do erro.

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

Aqui o erro será relatado na linha 12:

```
l.12 \end{align}
```
{: .noedit :}

Embora o erro real seja na linha 10, como mostrado pelas linhas de contexto:


```
! Undefined control sequence.
<argument> ...ha &= \frac {1}{2}\\ \beta &= \frak 
                                                  {2}{3}\\ \gamma &= \frac {...
```
{: .noedit :}

## Erros adicionais devidos a erros anteriores

Ao executar o LaTeX interativamente pela linha de comando, é possível parar
o processamento no primeiro erro digitando `x` e `<Enter>` quando o TeX
esperar por instruções.  Você pode então editar o documento e executar o LaTeX
novamente.  No entanto, se você deixar o TeX passar pelo erro ou se usar um
editor ou sistema online que faz isso automaticamente, o TeX tentará se
recuperar do erro, mas isso pode levar a mais erros.

Então, não se preocupe com o _número_ de erros relatados e sempre se concentre
em corrigir o _primeiro_ erro.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Text_word  $\alpha + \beta$.

More text.
\end{document}
```

No exemplo o erro é o `_`, que deveria ser escrito `\_`.

O TeX relata isso corretamente com a _primeira_ mensagem de erro:

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_
         word  $\alpha + \beta$.
?
```
{: .noedit :}

No entanto se você passar pelo `?` (teclando `<Enter>`), o TeX se recupera do
erro adicionando um `$` de forma que o `_` esteja em modo matemático,
simbolizando um subscrito.  O modo matemático continua até que o próximo `$`
o encerre, então o `\alpha` é visto em modo de texto causando outro erro:

```
! Missing $ inserted.
<inserted text> 
                $
l.5 Text_word  $\alpha
                       + \beta$.
? 
```
{: .noedit :}


## Erros que não causam uma mensagem de erro

Alguns erros, especialmente erros que não são detectados antes do final do
arquivo, não geram uma mensagem de erro, mas apenas mostram um aviso no log.

Se você experimentar este exemplo usando o servidor do TeXLive.net (no botão
'LaTeX Online'), ele vai devolver um arquivo PDF por padrão, pois não há uma
mensagem de erro;  para ver a mensagem no log adicione `%!TEX log` no exemplo:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

 Text {\large some large text) normal size?

\end{document}
```

Nesse exemplo, a mudança de tamanho da fonte foi erroneamente terminada com `)`
ao invés de `}`.  Isso não é detectado até que o final do arquivo seja
processado e o TeX detecta que ainda há um grupo aberto.  Ele reporta aqui a
linha na qual o grupo foi aberto com `{`.  Ele não pode detectar o erro "real"
pois o `)` é visto como "texto normal".

```
(\end occurred inside a group at level 1)

### simple group (level 1) entered at line 5 ({)
```
{: .noedit :}


<script>
  window.addEventListener('load', function(){
  rlselectline('pre0',9);
  rlselectline('pre3',4);
  rlselectline('pre6',5);
  }, false);
</script>
