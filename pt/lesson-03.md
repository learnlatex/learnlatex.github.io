---
title: "Seu primeiro documento LaTeX"
---

Nosso primeiro documento LaTeX será muito simples: a ideia é lhe mostrar como um
documento se parece e como processá-lo com sucesso.  Também é a sua primeira
chance de ver [como usar os exemplos aqui no `learnlatex.org`](help).

Se você está usando uma instalação local de LaTeX, no seu editor crie um arquivo
chamado `first.tex`, e copie-e-cole o texto abaixo, ou digite-o.  Se você está
usando um sistema online, você pode apenas clicar no botão 'LaTeX Online' ou
'Abrir no Overleaf' no exemplo para experimentá-lo!  Sugerimos que você teste
as opções online, mesmo que você tem o LaTeX instalado localmente;  é uma boa
chance de ver como as diferentes opções funcionam.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Olá mundo!

Este é o meu primeiro documento.
\end{document}
```

Salve o arquivo e compile-o em um documento PDF; se você está usando uma
instalação local, o botão exato vai depender do editor que você escolheu.  Você
deve obter um arquivo PDF que contém o texto acima, _mais_ o número da página;
o LaTeX adiciona isso automaticamente.

Veja o arquivo `first.pdf` com qualquer programa que preferir para ver PDFs.
Parabéns, você criou seu primeiro documento em LaTeX!

## Tratando de erros

Erros acontecem.
Caso o documento acima apresente erros, verifique se você digitou todas as
linhas exatamente como escritas acima.  Às vezes, diferenças aparentemente
insignificantes podem resultar em grandes diferenças no resultado, por vezes
fazendo que um documento não funcione.  Se você não conseguir encontrar o
problema, tente apagar o documento e copiar as linhas acima do zero.

Se a execução do LaTeX terminar com um ponto de interrogação, você pode sair
digitando `x`, e depois a tecla `<Enter>`.

As mensagens de erro do LaTeX tentam ajudar, mas não são as mesmas de
processadores de texto.  Alguns editores também tornam difícil de ver o texto
completo de uma mensagem de erro, o que pode esconder detalhes importantes.
O LaTeX sempre cria um registro do que está fazendo;  esse registro é um arquivo
de texto com extensão `.log`.  Você sempre vai encontrar a mensagem de erro
completa lá, e se tiver algum problema, usuários experientes de LaTeX geralmente
vão pedir uma cópia do arquivo `.log` para examinar o problema.

## O que você aprendeu até agora

O primeiro documento mostra o básico.
Documentos LaTeX são uma mistura de texto e comandos.
Os comandos começam com uma contra-barra (``\``) e às vezes têm argumentos entre
chaves (`{...}`), e às vezes argumentos opcionais entre colchetes (`[...]`).
Você então obtém um arquivo PDF ao executar o LaTeX em seu arquivo.

Todo documento LaTeX tem um `\begin{document}` e um `\end{document}`
correspondente.
Entre esses dois comandos fica o _corpo do documento_, onde está o seu conteúdo.
No exemplo acima o corpo do documento tem dois parágrafos (no LaTeX você separa
parágrafos com uma ou mais linhas em branco).
Antes do `\begin{document}` fica o _preâmbulo do documento_, que contém comandos
para configurar a aparência do seu documento.
O comando `\usepackage` é descrito em uma [lição futura](lesson-06), e é usado
na maioria dos exemplos neste site para configurar a codificação das fontes.

O LaTeX tem outros pares `\begin{...}` e `\end{...}`; estes são chamados
_ambientes_.  Você deve combiná-los de forma que para cada `\begin{x}`, haja um
`\end{x}`.  Se você usar ambientes dentro de outros ambientes, você deve
terminar os ambientes na ordem inversa que eles começaram.  Ou seja, se você
tiver `\begin{x} ... \begin{y}`, você deve terminar com `\end{y} ... \end{x}`.

Podemos também adicionar comentários em um arquivo LaTeX prefixando-o com um
`%`; vamos usar isso para mostrar a estrutura do documento:
```latex
\documentclass[a4paper,12pt]{article} % The document class with options
\usepackage[T1]{fontenc}
% Um comentário no preâmbulo
\begin{document}
% Isto é um comentário
Isto é   um   documento
simples\footnote{com uma nota de rodapé}.

Este é um novo parágrafo.
\end{document}
```

Você pode ver acima que temos dois parágrafos:  perceba que usamos uma linha em
branco para isso.  Perceba também que múltiplos espaços são tratados como um
único espaço.

Você pode querer também um espaço 'rígido', que não permite quebra de linha: no
LaTeX podemos fazer isso usando um `~`, 'amarrando' dois fragmentos de texto
juntos.  Isso é especialmente útil quando começarmos a criar referências
cruzadas mais adiante nesse curso.

## Caracteres especiais

Você deve ter percebido que ``\``, `{` e `}` têm um signigicado especial para o
LaTeX.  Uma ``\`` começa uma instrução para o LaTeX: um 'comando'.  As chaves
`{` e `}` são usadas para delimitar _argumentos obrigatórios_: informações que
comandos exigem.

Há outros caracteres com significados especiais; acabamos de ver que `~` é um
espaço rígido, por exemplo.  Quase todos esses caracteres são _muito_ incomuns
em texto normal, por isso eles foram escolhidos para ter significados especiais.
Se você precisar mostrar um desses caracteres especiais no texto, colcamos mais
informações sobre isso na
[página de detalhes adicionais desta lição](more-03).

## Exercise

Experimente com a edição e sistema tipográfico online;  clique no botão para
compor o conteúdo, então edite-o na página e componha novamente.

Tente adicionar texto no seu primeiro documento,  execute o LaTeX nele e veja
as mudanças no seu PDF.  Faça alguns parágrafos diferentes e adicione espaços.
Explore como o seu editor funciona;  clique no código fonte e veja como ir para
a linha correspondente no seu PDF.  Tente adicionar alguns espaços rígidos e
veja como eles influenciam a quebra de linhas.
