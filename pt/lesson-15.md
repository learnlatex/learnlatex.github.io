---
lang: "pt"
title: "Lidando com erros"
---

Diferente de um sistema típico de processamento de texto, o LaTeX tem um ciclo
de Editar/Executar/Visualizar mais próximo a uma linguagem de programação, e
assim como na programação, usuários podem cometer erros no seu código e será
necessário resolver os erros reportados pelo sistema.

Esta página dá exemplos de vários erros comuns.

Cada exemplo de erro tem alguma discussão sobre a forma da mensagem de erro.

Pode ser instrutivo experimentar os exemplos e as funcionalidades de edição para
tentar corrigir os documentos mostrados aqui, e ver se você consegue resolver
os erros.

## pdflatex não encontrado

Um erro inicial comum que as pessoas veem quando estão começando é:

```
'pdflatex' is not recognized as an internal or external command,
operable program or batch file.
```
{: .noedit :}

no Windows (ou uma mensagem equivalente em português) ou

```
bash: pdflatex: command not found
```
{: .noedit :}

no Linux.

Esse erro não é do TeX, mas do sistema operacional dizendo que o TeX não está
instalado ou não foi encontrado.  Um erro comum é instalar um _editor_, como o
TeXworks ou TeXShop mas não instalar um sistema TeX, como TeX Live ou MiKTeX.

## Anatomia de uma mensagem de erro do {{ site.tex }}

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\newcommand\mycommand{\textbold{hmmm}}

\begin{document}

My command is used here \mycommand.

\end{document}
```

Esse documento produz uma mensagem de erro de várias linhas no log:

```
! Undefined control sequence.
\mycommand ->\textbold 
                       {hmmm}
l.8 My command is used here \mycommand
                                      .
? 
```
{: .noedit :}

* A primeira linha, marcada com `!` mostra a natureza geral do erro (um comando
  indefinido, neste caso);
* O segundo _par_ de linhas mostra a linha que o teX estava processando, com uma
  quebra de linha marcando o ponto até onde o TeX chegou quando encontrou o
  erro.  O comando indefinido é o último símbolo lido, então é a última coisa
  antes da quebra de linha; aqui `\textbold`.  Depois da quebra de linha os
  caracteres restantes `{hmmm}` que poderiam ter sido lidos como um argumento
  mas ainda não foram executados pelo TeX;
* Pode haver no geral algumas linhas adicionais, dando mais contexto à mensagem
  de erro;
* A linha final começa com `l.` seguido de um número de linha, e então a linha
  no arquivo fonte onde o erro foi detectado;
* A linha final é um `?`.  Se você estiver usando o TeX interativamente (pela
  linha de comando) é possível dar instruções para o TeX neste ponto, mas a
  maioria dos editores e sistemas online executam o TeX em um modo que não para
  depois de erros, mas passará direto e tentar processar o restante do
  documento.  Digitar `s` aqui instruirá o TeX a continuar nesse modo se você
  estiver trabalhando interativamente.

Note aqui que o TeX não vê o erro no local em que o comando `\mycommand` é
definido;  de fato, se `\mycommand` for definido daquela forma mas não for
usado, o erro não acontecerá.  Então embora o erro é reportado na linha 7, o
erro _real_ está na definição na linha 3, então é importante ver a mensagem de
erro completa.

Cuidado que alguns editores mostram 'sumários' de uma linha no relatório de
erros.  Isso pode ser particularmente enganoso se mostrado como:

`line 7: undefined command: ...\mycommand`

pois faz parecer que o comando `\mycommand` não está definido.

## Chaves desbalanceadas

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[leqno}{amsmath}

\begin{document}

\end{document}
```

Aqui o erro é uma chave `}` desbalanceada usado no argumento opcional.
A fecha-chave faz com que a leitura de argumento opcional do LaTeX falhe e você
receba um erro interno não muito informativo:

```
! Argument of \@fileswith@ptions has an extra }.
```
{: .noedit :}

Enquanto a descrição do erro não é muito útil; as duas linhas seguintes mostram
precisamente o local do erro por usar uma quebra de linha mostrando até onde o
TeX leu:

```
l.4 \usepackage[leqno}
                      {amsmath}
```
{: .noedit :}

## Arquivos não encontrados

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{amsmathz}

\begin{document}

\end{document}
```

Esse documento causa a mensagem de erro:

```
! LaTeX Error: File `amsmathz.sty' not found.
```
{: .noedit :}

Note que o mesmo erro pode ser produzido por duas causas diferentes;  aqui é um
simples erro de digitação, que pode ser remediado ao corrigir o nome do pacote,
mas poderia ser um arquivo que realmente não existe e precisa ser instalado no
sistema.

## Linhas vazias em equações

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}

Some text
\begin{equation}

  1=2

\end{equation}

\end{document}
```

Esse documento produz o ligeiramente misterioso erro:

```
! Missing $ inserted.
```
{: .noedit :}

Mas a correção é simples:  linhas vazias não são permitidas em ambientes
matemáticos, e devem ser deletadas.

## Exercícios

Tente corrigir os erros nos exemplos apresentados.

Crie pequenos documentos com diferentes erros e analise a forma das mensagens de
erro.

<script>
  window.addEventListener('load', function(){
      if(editors['pre2'] != null) editors['pre2'].moveCursorTo(3, 31, false);
      if(editors['pre4'] != null) editors['pre4'].moveCursorTo(3, 18, false);
      if(editors['pre7'] != null) editors['pre7'].moveCursorTo(3, 20, false);
      if(editors['pre9'] != null) editors['pre9'].moveCursorTo(7, 0, false);
  }, false);
</script>
