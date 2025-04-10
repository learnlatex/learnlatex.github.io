---
layout: "lesson"
lang: "hi"
title: "अधिक जानकारी: गणित"
description: "यह पाठ amsmath संरेखण वातावरण, गणित को बोल्ड बनाने का तरीका, गणित एक्सटेंशन पैकेज mathtools, तथा गणित के लिए यूनिकोड इनपुट का उपयोग करने के बारे में अधिक जानकारी प्रदान करता है।"
toc-anchor-text: "अधिक जानकारी: गणित"
---

## `amsmath` के संरेखण विकल्प

मुख्य पाठ में दिखाए गए `align*` वातावरण के अतिरिक्त, `amsmath` पैकेज में कई अन्य *डिस्प्ले मैथ* (display math) संरचनाएँ भी होती हैं। विशेष रूप से:
- `gather`: जब एक से अधिक पंक्तियों में गणितीय अभिव्यक्तियाँ हों लेकिन उन्हें आपस में संरेखित (aligned) करने की आवश्यकता न हो।
- `multline`: जब एक लंबी गणितीय अभिव्यक्ति को कई पंक्तियों में विभाजित करना हो। इसमें पहली पंक्ति बाईं ओर और अंतिम पंक्ति दाईं ओर संरेखित होती है।

इन सभी मामलों में, यदि `*` संस्करण का उपयोग किया जाए (जैसे `align*`, `gather*`), तो डिफ़ॉल्ट रूप से समीकरण क्रमांक (equation numbers) नहीं दिखाए जाते हैं।


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


### गणितीय संरेखण में कॉलम्स (Columns in Math Alignments)

`amsmath` पैकेज के संरेखण (alignment) वाले वातावरण इस तरह से बनाए गए हैं कि वे कॉलम्स की *जोड़ी (pair)* बना लेते हैं —  हर जोड़ी में पहला कॉलम *दाईं ओर संरेखित* (right-aligned) होता है  और दूसरा कॉलम *बाईं ओर संरेखित* (left-aligned) होता है। इससे आप एक साथ कई समीकरण (equations) इस प्रकार दिखा सकते हैं कि प्रत्येक समीकरण का *रिलेशन चिन्ह* (जैसे =, ≥, आदि) एक सी लाइन में संरेखित हो सके।


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

इसके अतिरिक्त, कुछ *डिस्प्ले वातावरण* (display environments) के ऐसे रूप होते हैं जिनका नाम `ed` पर समाप्त होता है, जो कि किसी बड़े गणितीय डिस्प्ले के भीतर एक *उप-अभिव्यक्ति (subterm)* को संरेखित करने के लिए उपयोग किए जाते हैं। उदाहरण के लिए: `aligned` → यह `align` का ही एक उपरूप है। `gathered` → यह `gather` का उपरूप है

इनका उपयोग तब किया जाता है जब आपको किसी बड़े समीकरण के अंदर ही संरेखित उप-भाग (sub-part) दर्शाना हो।

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

`aligned` एक वैकल्पिक स्थिति आर्ग्युमेंट लेता है, जैसा कि `tabular` में होता है। यह अक्सर इनलाइन गणितीय सूत्र को उसकी ऊपरी पंक्ति पर संरेखित करने के लिए उपयोगी होता है; नीचे दिए गए उदाहरण में सूची के आइटम्स की तुलना करें।

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

## बोल्ड गणित (Bold Math)  
स्टैंडर्ड LaTeX में गणित में प्रतीकों को बोल्ड करने के दो तरीके होते हैं। पूरे अभिव्यक्ति को बोल्ड बनाने के लिए, उस अभिव्यक्ति से पहले `\boldmath` का उपयोग करें। व्यक्तिगत अक्षरों या शब्दों को सीधे बोल्ड रोमन में सेट करने के लिए `\mathbf` कमांड भी उपलब्ध है।

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
यदि आप किसी सामान्य वज़न (normal weight) वाले गणितीय अभिव्यक्ति में ही बोल्ड प्रतीकों का उपयोग करना चाहते हैं (जैसा कि `\boldmath` करता है), तो आप `bm` पैकेज का `\bm` कमांड उपयोग कर सकते हैं। ध्यान दें कि `\bm` प्रतीकों जैसे `=` और ग्रीक अक्षरों के साथ भी काम करता है। (यह भी ध्यान दें कि ऊपर दिए गए उदाहरण में `\mathbf` का `\pi` पर कोई प्रभाव नहीं होता।)

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


## Mathtools पैकेज  
`mathtools` पैकेज, `amsmath` को लोड करता है और उसमें कई अतिरिक्त सुविधाएँ जोड़ता है, जैसे कि `amsmath` के मैट्रिक्स वातावरण (matrix environments) के ऐसे संस्करण, जिनमें कॉलम संरेखण (column alignment) को निर्दिष्ट (specify) किया जा सकता है।


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

## यूनिकोड गणित (Unicode Math)  

जैसा कि आप [पाठ 14](lesson-14) में देखेंगे, कुछ वैकल्पिक TeX इंजन होते हैं जो OpenType फ़ॉन्ट्स का उपयोग करते हैं। डिफ़ॉल्ट रूप से ये इंजन अब भी क्लासिक TeX गणित फ़ॉन्ट्स का ही उपयोग करते हैं, लेकिन आप `unicode-math` पैकेज का उपयोग करके OpenType गणित फ़ॉन्ट्स का प्रयोग कर सकते हैं। इस पैकेज का पूरा विवरण इस पाठ्यक्रम के दायरे से बाहर है, अधिक जानकारी के लिए [पैकेज दस्तावेज़](https://texdoc.org/pkg/unicode-math) देखें। हालाँकि, हम यहाँ एक छोटा सा उदाहरण दे रहे हैं।

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
