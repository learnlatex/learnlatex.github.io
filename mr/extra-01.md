---
layout: "lesson"
lang: "mr"
title: "लाटेक्-आज्ञावल्यांचे प्रदर्शन - पुढील अभ्यासासाठी उदाहरणे"
description: "ह्या प्रकरणात लाटेक्-मधील काही अन्य निवडक आज्ञासंचांची उदाहरणे आहेत. ह्यांबाबत उर्वरित अभ्यासक्रमात पुरेशी माहिती आली नव्हती."
toc-anchor-text: "लाटेक्-आज्ञावल्यांचे प्रदर्शन"
toc-description: "पुढील अभ्यासासाठीची उदाहरणे."
---

# प्रदर्शन

<span class="summary">
ह्या प्रकरणात लाटेक्-मधील काही अन्य निवडक आज्ञासंचांची उदाहरणे आहेत. ह्यांबाबत उर्वरित
अभ्यासक्रमात पुरेशी माहिती आली नव्हती.
</span>

ह्या अभ्यासक्रमात लाटेक्-च्या अतिशय महत्त्वाच्या आज्ञांची ओळख करून देण्यात आली आहे, परंतु लाटेक्
आणखी अनेक क्षेत्रांमध्ये वापरले जाते. त्याकरिता विविध आज्ञासंच तयार केले गेले आहेत. आम्ही येथे
कोणत्याही स्पष्टीकरणाशिवाय काही उदाहरणे जोडत आहोत. सोबत त्या आज्ञासंचांच्या दस्तऐवजांचे
[टेक्-डॉक](https://texdoc.org) ह्या संकेतस्थळावरील दुवे आहेत. ही उदाहरणे (विशेष नोंद नसल्यास)
त्या दस्तऐवजांमधूनच घेतली आहेत.

<p class="hint">
इथे नोंदवल्या गेलेल्या आज्ञासंचांचे त्यांच्यासारख्या इतर आज्ञासंचांपेक्षा उदात्तीकरण करणे हा ह्या
यादीचा उद्देश नाही. इथे केवळ विविध क्षेत्रात लाटेक् कसे वापरले जाते ह्याची एक झलक दाखवणे हा
उद्देश आहे.
</p>

## रसायनशास्त्र

### आज्ञासंच: [`mhchem`](https://texdoc.org/pkg/mhchem)

{% include extra-01-example-mchem.md %}

## भाषाविज्ञान

### आज्ञासंच: [`forest`](https://texdoc.org/pkg/forest)

{% include extra-01-example-forest.md %}

## बुद्धिबळ

<!-- not 2017 -->
### आज्ञासंच: [`xskak`](https://texdoc.org/pkg/xskak)

{% include extra-01-example-xskak.md %}

## काव्य

### लाटेक्-वर्ग: [`memoir`](https://texdoc.org/pkg/memoir)

मेमॉयर लाटेक्-वर्गाचे उदाहरण देण्याकरिता एका मराठी कवितेची अक्षरजुळणी करून दाखवत आहोत.

<!-- This code example has been translated, so is not
     included like the others. It also requires lualatex
     which the others don't --->

<!-- {% raw %} -->
```latex
%!TeX lualatex
\documentclass{memoir}
\usepackage{marathi}

\begin{document}
\poemtitle*{औदुंबर}
\settowidth{\versewidth}{शेतमळ्यांची दाट लागली हिरवी गरदी पुढे.}
\begin{verse}[\versewidth]
  ऐल तटावर पैल तटावर हिरवाळी घेऊन\\
  निळासांवळा झरा वाहतो बेटाबेटातून.

  चार घरांचे गांव चिमुकले पैल टेकडीकडे\\
  शेतमळ्यांची दाट लागली हिरवी गरदी पुढे.

  पायवाट पांढरी तयांतुन अडवी तिडवी पडे\\
  हिरव्या कुरणांमधुनि चालली काळ्या डोहाकडे.

  झांकळुनी जळ गोड काळिमा पसरी लाटांवर\\
  पाय टाकुनी जळांत बसला असला औदुंबर.
\end{verse}
\end{document}
```
<!-- {% endraw %} -->

<p class="hint">
हे उदाहरण मेमॉयरच्या दस्तऐवजातील नाही आहे.<br>
सौजन्य: लाटेक् आणि पॉलिग्लॉसियाची ओळख - रोहित होळकर
([https://ctan.org/pkg/latex-mr](https://ctan.org/pkg/latex-mr))
</p>


## आकृत्या

<!-- not 2017 -->
आज्ञासंच: [`tikz`](https://texdoc.org/pkg/tikz)


{% include extra-01-example-tikz.md %}


## आलेख

आज्ञासंच: [`pgfplots`](https://texdoc.org/pkg/pgfplots)


{% include extra-01-example-pgfplots.md %}


## पाश्चात्त्य शास्त्रीय संगीत

आज्ञासंच: [`musixtex`](https://texdoc.org/pkg/musixtex)


{% include extra-01-example-musixtex.md %}
