---
lang: "pt"
title: "Usando o learnlatex.org"
permalink: /pt/help
---

## Navegando no site

O curso consite de 16 lições básicas que podem ser acessadas do sumário na
[página incial](/).

Cada lição tem um link para uma lição associada sobre o mesmo tema que traz mais
detalhes sobre o assunto.  Deve ser possível estudar todas as 16 lições _sem_
ler as lições adicionais.

No final do curso há uma ou mais lições específicas para o idioma sendo usado
para as lições, e finalmente uma galeria de exemplos de pacotes demonstrando
usos do LaTeX não abordados neste curso.

## Executando os exemplos

Cada exemplo consiste de um documento LaTeX completo mostrado na página assim:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Texto de exemplo.
\end{document}
```

O exemplo é completo.  No entanto você pode querer editá-lo para fazer pequenas
modificações, talvez como parte de um exercício proposto no final da lição.
O editor sendo usado é o [ACE](https://ace.c9.io/).

Há três formasde você executar o exemplo:

1. Use um serviço de **LaTeX Online**. O botão <button style="padding:0 1px;font-size:90%">LaTeX Online</button>
   vai encaminhar o código para o serviço
   [LaTeX CGI](https://latexcgi.xyz/)[^1].

   O serviço LaTeX CGI foi desenvolvido especificamente para suportar este site,
   em particular ele usa o [PDF.js](https://mozilla.github.io/pdf.js/) para
   permitir a visualização do PDF no celular e outros navegadores sem
   visualizador de PDF embutido.

   O documento PDF resultante (ou o log de erros) será mostrado na página
   imediatamente abaixo do exemplo.  Um botão
   <button style="padding:0 1px;font-size:90%">Excluir saída</button>
   aparecerá para que você possa remover este arquivo (ou você pode deixá-lo e
   continuar com o restante da lição).

   Note que o botão **LaTeX Online** não exige qualquer tipo de registro, então
   é conveniente para pequenos exemplos, mas nem este site, nem o `latexcgi`,
   `latexonline.cc` ou `latex-on-http` oferecem formas de salcar o seu
   documento.  Quaisquer modificações que você fizer no exemplo serão perdidas
   se você sair da página.

2. Use o **Overleaf**.  O botão <button style="padding:0 1px;font-size:90%">Abrir no Overleaf</button>
   vai enviar seu código para o [Overleaf](https://www.overleaf.com/about).

   Se você não tem uma conta, ou os detalhes da conta não estão registrados no
   seu navegador, você será redirecionado para uma página de login onde você
   pode acessar sua conta ou registar no Overleaf.  O Overleaf é um serviço
   gratuito mas requer que você forneça alguns detalhes a aceite os termos e
   condições.

   Se sua conta no Overleaf já estiver no seu navegador, o Overleaf será aberto
   em uma nova aba, com um novo projeto com o código.  Você pode então editar
   no Overleaf, que vai executar o LaTeX simultaneamente no seu código mostrando
   o resultado ou log.

   As funcionalidades de edição do Overleaf são muito superiores às deste site,
   e você pode salvar seu projeto na sua conta no Overleaf e retornar depois.

3. Se você tem um sistema TeX, então você pode copiar o código do exemplo da
   página selecionando-o ou usando os comandos de selecionar tudo (geralmente
   Ctrl-A) e copiar (Ctrl-C).  Isto vai colocar o código na área de
   transferência do seu sistema operacional, então você pode começar um
   documento em branco no seu editor e colar o texto (Ctrl-V).

## Escolhendo o interpretador {{ site.tex }}

Quando estiver executando os documentos de exemplo deste site, por padrão o
`pdflatex` será usado, a menos que o exemplo use o pacote `fontspec`, então o
`xelatex` será usado.

Você pode forçar a escolha entre `pdflatex`, `xelatex`, `lualatex`, `platex` ou
`uplatex` usando um comentário na forma:

`% !TEX ` _qualquer texto_ `lualatex`

onde o espaço em branco no início é opcional e minúsculas e maiúsculas não são
diferenciadas, e o _qualquer texto_ entre a primeira e a última palavra é
ignorado.

Isso permite que a forma `% !TEX program=pdflatex` usada por alguns editores
funcione, mas não exige o `program=`, e atualmente é restrito a apenas um dos
cinco interpretadores suportados nos sistemas online usados.

Você pode ver um exemplo de um comentário sendo usado para especificar o
LuaLaTeX em um [exemplo neste site](more-14).

Se o `platex` ou `uplatex` for especificado, então o programa `dvipdfmx` também
é usado para produzir o PDF final do arquivo DVI que estes interpretadores
geram.

## Escolhendo como mostrar o resultado

Se você usar o sistema LaTeX online, então o PDF resultante de executar o LaTeX
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

---

[^1]: Note que durante o desenvolvimento do site nós também usamos o
      [LaTeX.Online](https://latexonline.cc/) e
      [LaTeX-on-HTTP](https://github.com/YtoTech/latex-on-http)
      e agradecemos aos desenvolvedores desses serviços por atualizações e por
      permitir os exemplos deste site em fases anteriores.
