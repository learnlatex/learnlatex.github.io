---
layout: "lesson"
lang: "mr"
title: "अधिक माहिती: तार्किक मांडणी"
description: "ह्या प्रकरणात आपण दस्तऐवजास शीर्षक देणे व याद्या तयार करणे शिकणार आहोत."
toc-anchor-text: "अधिक माहिती: तार्किक मांडणी"
---

## शीर्षके

लाटेक् तीन तार्किक आज्ञांचा वापर करून दस्तऐवजाची पायाभूत माहिती (मेटाडेटा) साठवते व एका
आज्ञेसह तो छापते.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
\author{A.~N.~Other \and D.~Nobacon}
\title{Some things I did}
\date{1st April 2020}
\maketitle

Some normal text.
\end{document}
```

`\author`, `\title` व `\date` ह्या आज्ञा माहिती साठवतात व `\maketitle` ही आज्ञा ती
माहिती छापते. अनेक लेखक असतील, तर त्यांची नावे `\and` ह्या आज्ञेसह वेगळी केली
जातात. `\author`, `\title` व `\date` ह्या आज्ञा `\maketitle` आज्ञेपूर्वी येणे आवश्यक
असते. येथे आपण ह्या आज्ञा `document` क्षेत्रात लिहिल्या आहेत. त्या आज्ञापीठातही लिहिता येणे
शक्य आहे.

`\maketitle` ह्या आज्ञेचे फलित लाटेक्-वर्गावर अवलंबून आहे. (पाहा: [प्रकरण
५](lesson-05)). `titlepage` ह्या क्षेत्रासह स्वतःचे मुखपृष्ठदेखील बनवता येणे शक्य आहे, परंतु
ह्या प्रकरणाच्या मुख्य विषयात ते बसत नाही, त्यामुळे इथे त्याची चर्चा पुरे. जर मुखपृष्ठाची रचना
स्वतःच करायची असेल, तर `memoir` सारखा लवचीक लाटेक्-वर्ग वापरावा, अन्यथा `book` हा मूळ
लाटेक्-मधील आज्ञासंच वापरावा.

## वर्णनक्रमित याद्या
अनुक्रमित व बिंदुक्रमित याद्यांप्रमाणेच लाटेक्-मध्ये वर्णनक्रमित याद्यादेखील घडवता येतात.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}

\begin{description}
\item[Dog:] member of the genus Canis, which forms part of the wolf-like canids,
  and is the most widely abundant terrestrial carnivore.
\item[Cat:] domestic species of small carnivorous mammal. It is the only
  domesticated species in the family Felidae and is often referred to as the
  domestic cat to distinguish it from the wild members of the family.
\end{description}

\end{document}
```

## स्वाध्याय

`\author`, `\title` व `\date` ह्या आज्ञांचे कार्यघटक बदलून फलितात होणारा फरक
पाहा. ह्यांपैकी कोणत्या आज्ञा वापरणे `\maketitle` आज्ञा यशस्वीरीत्या चालण्याकरिता अतिशय
आवश्यक आहे?

काही वर्णनक्रमित याद्या बनवा. त्यांना एकमेकींच्या पोटात लिहून पाहा. बिंदुक्रमित अथवा अनुक्रमित
याद्यांच्या पोटात वर्णनक्रमित याद्या लिहून पाहा.
