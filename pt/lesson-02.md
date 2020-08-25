---
title: "Trabalhando com LaTeX"
---

Diferente de muitos programas de computador, o LaTeX não é uma única aplicação
que contém 'tudo em um'.  Ao invés disso, há diversos programas que trabalham
juntos.  Podemos dividi-los em duas coisas que você realmente precisa:

- Um _sistema TeX_
- Um editor de texto (geralmente um específico para LaTeX)

## Sistemas {{ site.tex }}

O principal para trabalhar com o LaTeX é ter um sistema TeX disponível.  Um
sistema TeX é um conjunto de programas 'nos bastidores' e arquivos que são
necessários para fazer o LaTeX funcionar, mas na maioria das vezes você não
precisa executá-los diretamente.

Existem dois grandes sistemas TeX disponíveis atualmente,
[MiKTeX](https://www.miktex.org) e [TeX Live](https://tug.org/texlive).  Ambos
disponíveis para Windows, macOS e Linux.  O MiKTeX é mais utilizado no Windows;
no macOS, o TeX Live é distribuído em uma coleção maior chamada
[MacTeX](http://www.tug.org/mactex/).
Há [vantagens de cada sistema](https://tex.stackexchange.com/questions/20036),
e você pode querer ver
[algumas dicas adicionais do Projeto LaTeX](https://www.latex-project.org/get/).

Como o TeX Live está disponível em todas as plataformas, e como tem algumas
vantagens de desempenho, nós recomendamos que se você está em dúvida sobre qual
sistema instalar, você escolha o TeX Live.

## Editores

Arquivos LaTeX são arquivos de texto simples, então podem ser editados com
qualquer editor de texto.  No entanto, é conveniente ter um editor projetado
para trabalhar com o LaTeX, pois eles têm funcionalidades como compilação em
um clique dos seus arquivos, visualizadores de PDF embutidos, e realce de
sintaxe.  Uma funcionalidade muito útil em todos os editores modernos de LaTeX
é o SyncTeX:  a habilidade de clicar no seu código fonte e ir direto para aquele
local exato no PDF, e vice-versa.

Há muito mais editores de LaTeX do que podemos listar aqui:  há uma [lista
compreensiva no StackExchange]
(https://tex.stackexchange.com/questions/339/latex-editors-ides).
Um editor básico, [TeXworks](https://tug.org/texworks), é distribuído no
TeX Live e no MiKTeX, tanto para Windows como para Linux, e o
[TeXShop](https://pages.uoregon.edu/koch/texshop/) é istribuído com o MacTeX.

Qualquer editor que você escolher, nós recomendamos que você instale-o _depois_
do seu sistema TeX, para que o editor possa 'ver' o sistema TeX e se configurar
corretamente.

## Trabalhando online

Há vários sites poderosos atualmente, que lhe permitem não ter um sistema TeX
ou editor instalados no seu computador.  Esses websites lhe permitem editar seus
arquivos em uma página no navegador, e executam o LaTeX nos bastidores, e
mostram o arquivo PDF produzido.

Alguns desses sites combinam o LaTeX com funcionalidades similares a um
processador de texto, enquanto que outros são mais focados em deixar você ver
o arquivo LaTeX fonte, assim fornecem uma experiência mais parecida com ter um
sistema TeX local.

Há sistemas que permitem que você execute o LaTeX sem precisar registar, e nós
usamos um desses, o [LaTeX CGI](https://latexcgi.xyz), que permite que você
edite e teste os exemplos que fornecemos.  Para trabalhos mais completos, os
melhores sistemas online requerem que você registre-se antes de usá-los.  Isso
lhe permite salvar seu trabalho, mas também ajuda que os sites não fiquem
sobrecarregados.  Nós configuramos links para que você possa editar os exemplos
no [Overleaf](https://www.overleaf.com), um dos maiores sites de edição online
de LaTeX.  Há vários outros também: [Papeeria](https://papeeria.com/) é um
exemplo.

## Exercício

Obtenha uma instalação local de LaTeX _ou_ uma conta em um serviço online.
Se estiver usando uma instalação local, você também precisará escolher um
editor: nós recomendamos começar com o TeXworks ou TeX Shop (ver acima), e
depois procure outros editores quando souber como _você_ trabalha melhor com
o LaTeX.

Você poderá [executar todos os outros exercícios no seu navegador](help.md),
mas nós queremos ajudar você a trabalhar com documentos reais, então agora é
uma ótima oportunidade para se preparar.
