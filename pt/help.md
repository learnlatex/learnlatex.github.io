---
layout: "page"
lang: "pt"
title: "Usando o learnlatex.org"
description: "Esta página explica o próprio site learnlatex.org e como fazer o melhor uso dele."
permalink: /pt/help
---
<script>
  function acesettings() {
      editors['pre0'].execCommand("showSettingsMenu");
  }
</script>

# Ajuda

## Navegando no site

O curso consite de 16 lições básicas que podem ser acessadas do
[sumário]({{ "/" | absolute_url | append: page.lang | append: "/#toc" }}) na
[página incial](./).

Cada lição tem um link para uma lição associada sobre o mesmo tema que traz mais
detalhes sobre o assunto.  Deve ser possível estudar todas as 16 lições _sem_
ler as lições adicionais.

No final do curso há uma ou mais lições específicas para o idioma sendo usado
para as lições, e finalmente uma galeria de exemplos de pacotes demonstrando
usos do LaTeX não abordados neste curso.

---

## Exemplos

### Executando os exemplos

Cada exemplo consiste de um documento LaTeX completo mostrado na página assim:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Texto de exemplo.
\end{document}
```

Cada exemplo é completo.  No entanto você pode querer editá-lo para fazer
pequenas modificações, talvez como parte de um exercício proposto no final da
lição.

O editor sendo usado é o

* [ACE](https://ace.c9.io/).

  Você mode mudar o tema utilizado pelo editor (por exemplo usando um tema escuro
  com texto claro em um fundo escuro) na [página de configurações](settings).  Uma
  forma conveniente de experimentar temas diferentes é usar
  <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>⌘</kbd>+<kbd>,</kbd> no Mac) enquanto estiver
  em qualquer exemplo no site.  [Esse comando mostra um painel](javascript:acesettings())
  que permite mudar as configurações do ACE.

  O repositório do ACE tem uma página com
  [atalhos de teclado úteis](https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts).

* [CodeMirror6](https://codemirror.net/).

#### Três formas de você executar os exemplos

* Usar o Overleaf
* Usar o TeXLive.net
* Usar um sistema TeX local

##### Usando o Overleaf

O Overleaf é um dos mais populares serviços de edição online de LaTeX.  O botão
<button>Abrir no Overleaf</button>, abaixo do exemplo, vai enviar o código para
o [Overleaf](https://www.overleaf.com/about).

Se você não tem uma conta, ou os detalhes da conta não estão registrados no seu
navegador, você será redirecionado para uma página de login onde você pode
acessar sua conta ou registar no Overleaf.  O Overleaf é um serviço gratuito mas
requer que você forneça alguns detalhes a aceite os termos e condições.

Se sua conta no Overleaf já estiver no seu navegador, o Overleaf será aberto em
uma nova aba, com um novo projeto com o código.  Você pode então editar no
Overleaf, que vai executar o LaTeX simultaneamente no seu código mostrando o
resultado ou log.

As funcionalidades de edição do Overleaf são muito mais completas que as deste
site, e você pode salvar seu projeto na sua conta no Overleaf e retornar depois.

##### Usando o TeXLive.net

O botão <button>Executar no TeXLive.net</button>, abaixo do exemplo, vai enviar
o código para o [TeXLive.net](https://texlive.net)[^1].

O TeXLive.net foi desenvolvido especificamente para suportar este site e, em
particular, usa o [PDF.js](https://mozilla.github.io/pdf.js/) para permitir a
visualização do PDF em dispositivos móveis e outros navegadores sem leitores de
PDF nativos.

O documento PDF resultante (ou o log de erros) será mostrado na página
imediatamente abaixo do exemplo.  Um botão <button>Excluir saída</button>
aparecerá para que você possa remover este arquivo (ou você pode deixá-lo e
continuar com o restante da lição).

Note que o **TeXLive.net** não exige qualquer tipo de registro, então é
conveniente para pequenos exemplos, mas este site não oferece formas de salvar o
seu documento.  Quaisquer modificações que você fizer no exemplo serão perdidas
se você sair da página.

##### Usando um sistema TeX local

Se você tem um sistema TeX, então você pode copiar o código do exemplo da página
selecionando-o ou usando os comandos de selecionar tudo (geralmente
<kbd>Ctrl</kbd>+<kbd>A</kbd>) e copiar (<kbd>Ctrl</kbd>+<kbd>C</kbd>).  Isto vai
colocar o código na área de transferência do seu sistema operacional, então você
pode começar um documento em branco no seu editor e colar o texto
(<kbd>Ctrl</kbd>+<kbd>V</kbd>).

### Solução de problemas

Nossos exemplos são baseados em instalações de LaTeX atualizadas.  Todos
funcionam em ambos os nossos sitemas de demonstração online, então se você
encontrar erros com os exemplos que mostramos, você pode começar verificando se
seu sistema TeX está atualizado.

---

## Escolhendo o interpretador TeX

Quando executando documentos de exemplo, por padrão o `pdflatex` será utilizado.

Você pode forçar a escolha entre `pdflatex`, `xelatex`, `lualatex`, `platex` ou
`uplatex` usando um comentário na forma:

`% !TEX ` _qualquer texto_ `lualatex`

onde o espaço em branco no início é opcional e minúsculas e maiúsculas não são
diferenciadas, e o _qualquer texto_ entre a primeira e a última palavra é
ignorado.

Isso permite que a forma `% !TEX program=pdflatex` usada por alguns editores
funcione, mas não exige o `program=`, e atualmente é restrito a usar apenas um
dos interpretadores suportados nos sistemas online usados.

Você pode ver um exemplo de um comentário sendo usado para especificar o
LuaLaTeX em um [exemplo neste site](more-14).

Se o `platex` ou `uplatex` for especificado, então o programa `dvipdfmx` também
é usado para produzir o PDF final do arquivo DVI que estes interpretadores
geram.
De forma similar, o `dvips` e `ps2pdf` são usados se `latex` for especificado.

Se o interpretador não for especificado com um comentário `% !TEX`, então o
`pdflatex` será utilizado a menos que você tenha especificado um interpretador
padrão na [página de configurações](settings).

---

## Escolhendo como mostrar o resultado

Se você usar o TeXLive.net, então o PDF resultante de executar o LaTeX
no exemplo é mostrado usando o [PDF.js](https://mozilla.github.io/pdf.js/) por
padrão.  Isso permite que a visualização seja consistente entre diversos
navegadores.

Se você preferir usar o visualizador PDF padrão do seu navegador, seja um
embutido ou uma aplicação externa que você configurou, use um comentário na
forma:

`% !TEX ` _qualquer texto_ `pdf`

O comportamento padrão pode ser especificado explicitamente usando `pdfjs` no
final do comentário.  Para depuração você pode querer ver o arquivo log
retornado, mesmo que o documento produza um PDF sem erros.  Isso pode ser
solicitado usando `log` no comentário acima.

Uma alternativa a usar um comentário `% !TEX`, você pode especificar o formato
de saída padrão na [página de configurações](settings).  As configurações são
específicas a cada navegador, então por exemplo você pode escolher a
configuração padrão `pdfjs` no seu celular, mas usar `pdf` no seu laptop para
usar o visualizador padrão do seu navegador.

---

## Saída HTML (make4ht)

Se estiver usando o TeXLive.net, uma opção adicional de saída, `make4ht`, pode
ser especificada.  Essa opção retorna uma ou mais páginas HTML no quadro de
saída do exemplo.  Essa opção pode ser especificada junto com `xelatex`, ou
`lualatex` ou com o intepretador padrão `pdflatex`.

Para habilitar saída em HTML, adicione o comentário:


`% !TeX make4ht`
{: .noedit :}


Alternativamente você pode especificar `make4ht` como a opção de saída padrão na
[página de configurações](settings).


Se estiver usando um sistema TeX local, o mesmo resultado pode ser obtido
executando

`make4ht  document.tex "2,mathjax"`
{: .noedit :}

com as opções adicionais `-x` ou `-l` se o XeLaTeX ou LuaLaTeX forem utilizados.

Quando executando em um sistema local, outras configurações são possíveis. Veja
o [manual do make4ht](https://texdoc.org/pkg/make4ht).

---

[^1]: Note que durante o desenvolvimento do site nós também usamos o
      [LaTeX.Online](https://latexonline.cc/) e
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      e agradecemos aos desenvolvedores desses serviços por atualizações e por
      permitir os exemplos deste site em fases anteriores.
