---
lang: "pt"
title: "Matemática"
toc-anchor-text: "Matemática"
toc-description: "Modo e notação matemática."
---

## Modo matemático

Você pode escrever equações no LaTeX usando uma forma lógica, conhecida como
'modo matemático' (_math mode_).  Nesse modo, espaços são ignorados e o
espaçamento correto entre caracteres é (quase) sempre aplicado.  Há duas formas
do modo matemático: linear (_inline_) e em exibição (_display_).

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Uma frase com matemática linear: $y = mx + c$.
Uma segunda frase com matemática linear: $5^{2}=3^{2}+4^{2}$.


Um segundo parágrafo com matemática em exibição:
\[
  y = mx + c
\]
Veja como o parágrafo continua após a equação.
\end{document}
```

Você pode ver sintaxe parecida com a do LaTeX em outros lugares, por exemplo o
sistema MathJax para inserir equações em páginas da internet.  Esses sistemas
geralmente aceitam pequenas variações da sintaxe do LaTeX pois eles não usam
o LaTeX de fato, mas uma emulação.  Nossos exemplos todos contém
'LaTeX correto', então se você ver algo diferente em outro contexto, pode ser
que o exemplo não esteja realmente usando o LaTeX.

## Modo matemático linear e notação matemática

Como você viu acima, o modo matemático linear é marcado usando um par de cifrões
(`$...$`).  Também é possível usar a notação `\(...\)`.  Expressões simples são
escritas sem qualquer marcação, e você verá que a equação é espaçada
corretamente e tem as letras que representam variáveis em itálico.

Matemática linear restringe o tamanho vertical da expressão para que, na
medida do possível, a fórmula não perturbe o espaçamento entre linhas no
parágrafo.

Note que _toda_ matemática deve ser marcada como matemática, mesmo se é um único
caractere; use `... $2$ ...` ao invés de `... 2 ...`, caso contrário, por
exemplo, quando você precisar um número negativo e precisar do modo matemático
para ter um sinal de menos, o `... $-2$ ...` pode usar uma fonte diferente da
dos dígitos no modo de texto (dependendo da classe de documento e fontes que
você usar).

Reciprocamente, cuide com construtos matemáticos que aparecem em texto simples
copiado de outras fontes, como valores monetários usando `$` ou nomes de
arquivos usando `_` (que podem ser escritos com `\$` e `\_`, respectivamente).

Podemos facilmente adicionar superscritos e subscritos; eles são marcados usando
`^` e `_`, respectivamente:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Superscritos $a^{b}$ e subscritos $a_{b}$.
\end{document}
```

(você pode encontrar exemplos onde super- e subscritos simples são escritos sem
as chaves, mas esta não é a sintaxe oficial e pode não funcionar todas as vezes;
sempre use chaves.)

Há _muitos_ comandos específicos para o modo matemático.  Alguns são bastante
fáceis, por exemplo `\sin` e `\log` para o seno e logaritmo, ou `\theta` para a
letra Grega:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Matemática: $y = 2 \sin \theta^{2}$.
\end{document}
```

Nós não podemos cobrir todos os comandos de matemática do LaTeX aqui, mas há
muitos recursos online listando o cunjunto padrão.  Você pode procurar comandos
para símbolos matemáticos usando o
[Detexify](https://detexify.kirelabs.org/classify.html).

## Matemática em exibição

Você pode usar exatamente os mesmos comandos para matemática em exibição ou para
matemática linear.  Matemática em exibição é centralizada por padrão e é usada
para equações maiores que são 'parte de um parágrafo'.  Note que ambientes de
equação não permitem que um parágrafo termine _dentro_ da equação, então você
não pode ter linhas em branco dentro do código da equação.

O parágrafo deve sempre começar _antes_ da equação, para não deixar uma linha em
branco antes do ambiente de equação.  Se você precisar de várias linhas de
matemática, não use vários ambientes de equação em sequência (o espaçamento fica
inconsistente);  use um dos ambientes de equação em várias linhas como o `align`
do pacote `amsmath`, apresentado adiante.

O modo de matemática em exibição é particularmente útil para integrações, por
exemplo:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Um parágrafo sobre uma equação maior
\[
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\]
\end{document}
```

Perceba aqui como a notação de sub-/superscrito é usada para definir os limites
da integração.

Nós adicionamos um comando de espaçamento manual aqui: `\,` faz um espaço fino
antes do `dx`, que nós precisamos para que não pareça um produto com o termo
anterior.

Você provavelmente vai querer uma equação numerada, que é criada usando o
ambiente `equation`.  Vamos tentar o mesmo exemplo acima:

You often want a numbered equation, which is created using the `equation`
environment. Let's try the same example again:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
Um parágrafo sobre uma equação maior
\begin{equation}
\int_{-\infty}^{+\infty} e^{-x^2} \, dx
\end{equation}
\end{document}
```

O número da equação é incrementado automaticamente e pode ser um número único,
como nesse exemplo, ou pode ser prefixado pelo número da seção, por exemplo
(2.5) para a 5ª equação na seção 2.  Os detalhes da formatação são configurados
pela classe de documento, então não são detalhados aqui.

## O pacote `amsmath`

Notação matemática é muito rica, e isso significa que as ferramentas incluídas
no núcleo do LaTeX não podem cobrir todos os casos necessários.  O pacote
`amsmath` extende o suporte básico para cobrir muito mais ideias.
O [Guia de Usuário do `amsmath`](http://texdoc.net/pkg/amsmath) (em inglês)
contém muito mais exemplos do que podemos mostrar nessa lição.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}

\begin{document}
Resolva a seguinte recorrência para $ n,k\geq 0 $:
\begin{align*}
  Q_{n,0} &= 1   \quad Q_{0,k} = [k=0];  \\
  Q_{n,k} &= Q_{n-1,k}+Q_{n-1,k-1}+\binom{n}{k}, \quad\text{para $n$, $k>0$.}
\end{align*}
\end{document}
```

O ambiente `align*` faz com que os termos das equações alinhem nos `&`, como em
uma tabela.  Veja como usamos `\quad` para inserir um pouco de espaço, e `\text`
para colocar texto normal dentro do modo matemático.  Nós também usamos outro
comando, `\binom`, para um binomial.

Veja como aqui usamos `align*` e a equação não saiu numerada.  A maioria dos
ambientes matemáticos numeram as equações por padrão, e a versão com `*`
desabilita a numeração.

O pacote `amsmath` também tem outros ambientes convenientes, por exemplo, para
matrizes:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Matrizes AMS.
\[
\begin{matrix}
a & b & c \\
d & e & f
\end{matrix}
\quad
\begin{pmatrix}
a & b & c \\
d & e & f
\end{pmatrix}
\quad
\begin{bmatrix}
a & b & c \\
d & e & f
\end{bmatrix}
\]
\end{document}
```

## Fontes no modo matemático

Ao contrário de texto normal, mudanças de fonte em modo matemático transmitem
um significado muito específico.  Elas são portanto escritas explicitamente.
Há um conjunto de comandos que você precisa aqui:

- `\mathrm`: fonte romana (em pé)
- `\mathit`: itálico espaçado como 'texto'
- `\mathbf`: negrito
- `\mathsf`: sans serif
- `\mathtt`: monoespaçada (máquina de escrever)
- `\mathbb`: traçado duplo (do pacote `amsfonts`)

Cada um desses leva letras do alfabeto Latino como argumento, então por exemplo,
podemos escrever uma matriz como:

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
A matriz $\mathbf{M}$.
\end{document}
```

Note que a fonte itálica padrão em equações separa as letras de forma que elas
podem ser usadas para denotar o produto de variáveis.  Use `\mathit` para fazer
uma palavra em itálico.

Os comandos `\math..` usam fontes específicas para uso matemático.  Às vezes
você precisa incluir uma uma palavra que é parte da estrutura do texto, e
precisa usar a fonte do texto, para isso você pode usar `\text{...}` (que é
definido no pacote `amsmath`) ou estilos específicos de fonte, como
`\textrm{...}`.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}

$\text{bad use } size  \neq \mathit{size} \neq \mathrm{size} $

\textit{$\text{bad use } size \neq \mathit{size} \neq \mathrm{size} $}

\end{document}
```

Se você precisa deixa outros símbolos em negrito, veja
[os detalhes adicionais](more-10)

## Exercícios

Experimente um pouco com o modo matemático:  pegue os exemplos e troque entre
modo linear e em exibição.  Consegue ver o efeito?

Tente adicionar outras letras Gregas, tanto minúsculas quanto maiúsculas.
Você vai conseguir adivinhar o nome de algumas.

Experimente com os comandos de mudança de fonte: o que acontece se você usar
um dentro do outro?

Equações em exibição são centralizadas por padrão;  tente adicionar a opção
`[fleqn]` (do inglês, _flush left equation_) no `\documentclass` em alguns dos
exemplos acima para ver uma configuração diferente.  De forma similar, números
de equações geralmente ficam à direita.  Experimente adicionar a opção `[leqno]`
(do inglês, _left equation numbers_) no `\documentclass`.
