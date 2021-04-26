---
layout: "lesson"
lang: "mr"
title: "अधिक माहिती: गणित"
description: "ह्या प्रकरणात आपण amsmath आज्ञासंचातील मांडणीची क्षेत्रे पाहणार आहोत. तसेच गणिती अक्षरे ठळक ठशात कशी छापावीत, गणिताच्या विस्तारित वापरासाठी mathtools आज्ञासंच व युनिकोड अक्षरांसह गणिताची अक्षरजुळणी करणे हे सर्व शिकूया."
toc-anchor-text: "अधिक माहिती: गणित"
---


## `amsmath`मधील मांडणीची क्षेत्रे

मुख्य प्रकरणात दाखवलेल्या `align*` क्षेत्राखेरीज, `amsmath` आज्ञासंचात अनेक क्षेत्रे उपलब्ध
आहेत. `gather` हे क्षेत्र अनेक ओळींतील गणिती मांडणीसाठी उपयुक्त आहे, परंतु त्यांमध्ये कोणतीही
आडवी मांडणी दिसत नाही. `multline` क्षेत्रासह एक मोठे समीकरण अनेक ओळींवर लिहिता
येते. त्यातील पहिली ओळ डावीकडे मांडली जाते तर शेवटची ओळ उजवीकडे. प्रत्येक क्षेत्राच्या नावापुढे
`*` जोडल्यास त्या क्षेत्रातील समीकरणांना क्रमांक मिळत नाहीत.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\usepackage{amsmath}

\begin{document}

Gather
\begin{gather}
  P(x)=ax^{5}+bx^{4}+cx^{3}+dx^{2}+ex +f\\
  x^2+x=10
\end{gather}

Multline
\begin{multline*}
   (a+b+c+d)x^{5}+(b+c+d+e)x^{4} \\
    +(c+d+e+f)x^{3}+(d+e+f+a)x^{2}+(e+f+a+b)x\\
    + (f+a+b+c)
\end{multline*}
\end{document}
```

### गणिती अक्षरजुळणीत स्तंभ

`amsmath` आज्ञासंचातील मांडणीची क्षेत्रे समीकरणांची स्तंभयुक्त मांडणी करू शकतात. प्रत्येक जोडीतील
पहिला स्तंभ उजवीकडे मांडला असतो व दुसरा स्तंभ डावीकडेे.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned equations
\begin{align*}
a &= b+1   &  c &= d+2  &  e &= f+3   \\
r &= s^{2} &  t &=u^{3} &  v &= w^{4}
\end{align*}

\end{document}
```

मांडणीच्या ह्या क्षेत्रांच्या `ed` प्रत्ययासहितच्या आवृत्त्यादेखील उपलब्ध आहेत. ह्या क्षेत्रांमधील
मजकूर एक समीकरण असल्याप्रमाणे छापला जातो व त्यामुळे समीकरणावर व खाली सोडलेल्या जागेत फरक
पडतो. ह्या क्षेत्रांची नावे `aligned` व `gathered` अशी आहेत.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
Aligned:
\[
\left.\begin{aligned}
a&=b\\
c&=d
\end{aligned}\right\}
\Longrightarrow
\left\{\begin{aligned}
b&=a\\
d&=c
\end{aligned}\right.
\]
\end{document}
```

`aligned` ह्या क्षेत्रास स्थानाचा वैकल्पिक कार्यघटक देता येतो. ह्यामुळे शीर्षस्थानी दर्शनी गणित
बसवणे शक्य होते. पुढील उदाहरण पाहा.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath}
\begin{document}
\begin{itemize}
\item 
$\begin{aligned}[t]
a&=b\\
c&=d
\end{aligned}$
\item 
$\begin{aligned}
a&=b\\
c&=d
\end{aligned}$
\end{itemize}
\end{document}
```

## ठळक ठशातील गणित

लाटेक्-सह दोन पद्धतींनी ठळक ठशातील गणिती चिन्हे मिळवता येतात. संपूर्ण पदावली जर ठळक ठशात
हवी असेल, तर `\boldmath` ही आज्ञा पदावलीपूर्वी लिहावी. पदावलीतील काही ठरावीक चिन्हे
ठळक करण्यासाठी `\mathbf` ही आज्ञाही उपलब्ध आहे.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}

\begin{document}


$(x+y)(x-y)=x^{2}-y^{2}$

{\boldmath $(x+y)(x-y)=x^{2}-y^{2}$ $\pi r^2$}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$
$\mathbf{\pi} r^2$ % bad use of \mathbf
\end{document}
```

गणितक्षेत्राच्या इटालीय वळणातच ठळक ठसा हवा असेल, तर `bm` आज्ञासंचातील `\bm` ही आज्ञा
वापरू शकता. ही आज्ञा `=` अशा चिन्हांवर अथवा ग्रीक अक्षरांवरही काम करते. वरील उदाहरणात
असे लक्षात येईल की `\pi` ह्या आज्ञेवर ठळक ठशाच्या आज्ञेचा कोणताही परिणाम झाला नाही.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{bm}

\begin{document}

$(x+\mathbf{y})(x-\mathbf{y})=x^{2}-{\mathbf{y}}^{2}$

$(x+\bm{y})(x-\bm{y}) \bm{=} x^{2}-{\bm{y}}^{2}$

$\alpha + \bm{\alpha} < \beta + \bm{\beta}$

\end{document}
```

## mathtools आज्ञासंच

`mathtools` आज्ञासंचातर्फे `amsmath` हा आज्ञासंच वापरला जातो व त्या आज्ञासंचात काही
अतिरिक्त सुविधा पुरवल्या जातात. उदा. `amsmath` आज्ञासंचाहून किंचित वेगळ्या सारण्या ज्यांमध्ये
आडवी मांडणी शक्य आहे.

```latex
\documentclass[a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage{mathtools}

\begin{document}

\[
\begin{pmatrix*}[r]
  10&11\\
   1&2\\
  -5&-6
\end{pmatrix*}
\]

\end{document}
```

## युनिकोड व गणित

[प्रकरण १४](lesson-14)मध्ये आपण हे पाहूच की काही लाटेक्-चालक ओपनटाईप टंक वापरू शकतात. ह्या
चालकांद्वारेदेखील टेक्-चे मूळ गणिती टंकच वापरले जातात, परंतु `unicode-math` हा आज्ञासंच
वापरल्यास मात्र ओपनटाईप गणिती टंक वापरणे शक्य आहे. ह्या आज्ञासंचाचे तपशील ह्या अभ्यासक्रमाचा
मूळ भाग नाहीत, त्यामुळे [आज्ञासंचाची हस्तपुस्तिका](https://texdoc.org/pkg/unicode-math)
वाचावी असे आम्ही सुचवू. आज्ञासंचाचे एक लहान उदाहरण पुढीलप्रमाणे.

```latex
% !TEX lualatex
\documentclass[a4paper]{article}
\usepackage{unicode-math}
\setmainfont{TeX Gyre Pagella}
\setmathfont{TeX Gyre Pagella Math}

\begin{document}

One two three
\[
\log \alpha + \log \beta = \log(\alpha\beta)
\]

Unicode Math Alphanumerics
\[A + \symfrak{A}+\symbf{A}+ \symcal{A} + \symscr{A}+ \symbb{A}\]

\end{document}
```
