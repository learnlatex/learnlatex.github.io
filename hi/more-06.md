---
layout: "lesson"
lang: "hi"
title: "अधिक जानकारी: पैकेजों और परिभाषाओं का उपयोग करके LaTeX का विस्तार करना"
description: "यह पाठ पैकेज लोडिंग पर अधिक विवरण देता है, भाषा चयन के लिए बैबल पैकेज दिखाता है, और कस्टम कमांड पर अधिक विवरण देता है।"
toc-anchor-text: "अधिक जानकारी: पैकेजों और परिभाषाओं का उपयोग करके LaTeX का विस्तार करना"
---


## एक से अधिक पैकेज लोड करना
`\usepackage` कमांड में कॉमा से अलग किए गए कई पैकेजों की सूची दी जा सकती है, जिससे आप एक साथ कई पैकेज लोड कर सकते हैं, जैसे: `\usepackage{color,graphicx}`। यदि आप किसी विकल्प को पास कर रहे हैं, तो वह विकल्प सूची में दिए सभी पैकेजों पर लागू होगा। हालांकि, यदि आप प्रत्येक पैकेज को अलग पंक्ति में लोड करते हैं, तो उन्हें अस्थायी रूप से हटाना (comment करना) आसान होता है। इसलिए हम प्रत्येक पैकेज को अलग पंक्ति में लोड करना बेहतर मानते हैं।


## `babel` पैकेज
हमने `babel` पैकेज को [मुख्य पाठ](lesson-06) में विभिन्न भाषा-अनुसार हाइफनेशन पैटर्न चुनने के एक तरीके के रूप में दिखाया था। यह पैकेज इससे कहीं अधिक कार्य करता है, जो प्रयुक्त भाषा या भाषाओं पर निर्भर करता है। उदाहरण के लिए, जर्मन में यह ‘soft’ हाइफ़न बनाने के लिए कुछ शॉर्टकट प्रदान करता है, और बिना जर्मन कीबोर्ड के उमैlaut अक्षर टाइप करने का तरीका भी देता है। साथ ही यह भी ध्यान दें कि `\tableofcontents` कमांड द्वारा सामान्यतः जो _Table of Contents_ शीर्षक बनता है, वह जर्मन भाषा में बदलकर _Inhaltsverzeichnis_ हो जाता है।


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage[ngerman]{babel} % Notice that the option name is 'ngerman'

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.


\end{document}
```

## अन्य भाषा सेटिंग्स डिजाइन में परिवर्तन करती हैं

उदाहरण के लिए, पारंपरिक फ्रेंच टाइपोग्राफी में कुछ विराम चिह्नों, जैसे `:` से पहले एक स्पेस होता है। यदि आप `babel` पैकेज को `french` विकल्प के साथ लोड करते हैं, तो यह स्पेस अपने आप जोड़ दी जाती है।


## ग्लोबल विकल्प
कई बार आप चाहते हैं कि कोई विकल्प उन सभी पैकेजों के लिए उपलब्ध हो, जिन्हें आपने लोड किया है। यह काम `\documentclass` लाइन में विकल्प देकर किया जाता है: सभी पैकेज इस सूची को ‘देख’ सकते हैं। इसलिए यदि आप डॉक्यूमेंट की भाषा सभी पैकेजों को बताना चाहते हैं, तो आप ऐसा लिख सकते हैं:

```latex
\documentclass[ngerman]{article} % Notice that the option name is 'ngerman'
\usepackage[T1]{fontenc}

\usepackage{babel}

\begin{document}

\tableofcontents

\section{"Uber "Apfel und Birnen}

\subsection{Äpfel}
Äpfel sind rot.

\subsection{Birnen}
Birnen sind gelb.

\end{document}
```


## और परिभाषाएँ

`\newcommand` कमांड अधिकतम नौ आर्ग्युमेंट्स (तर्कों) तक की अनुमति देता है, जिनमें से पहला तर्क वैकल्पिक हो सकता है।

यदि हम मुख्य पाठ में दिए गए उदाहरण को लें, तो हम रंग को वैकल्पिक बना सकते हैं, जो डिफ़ॉल्ट रूप से नीला होगा।


```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xcolor}

\newcommand\kw[2][blue]{\textcolor{#1}{\itshape #2}}

\begin{document}

Something about \kw{apples} and \kw[red]{oranges}.

\end{document}
```

वैकल्पिक तर्कों को `[]` में लिखा जाता है, और यदि इन्हें नहीं दिया जाता है, तो परिभाषा में निर्धारित डिफ़ॉल्ट मान का उपयोग किया जाता है।

## `\NewDocumentCommand`

अक्टूबर 2020 की LaTeX रिलीज से एक विस्तृत परिभाषा प्रणाली उपलब्ध है। पुराने LaTeX संस्करणों में यह सुविधा `xparse` पैकेज के माध्यम से उपलब्ध थी, जिसे हम यहाँ संगतता (compatibility) के लिए उपयोग करते हैं।

हम ऊपर दिए गए उदाहरण को दोहरा सकते हैं, लेकिन इस बार `\NewDocumentCommand` का उपयोग करके।

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\usepackage{xparse} % Only needed for older LaTeX releases
\usepackage{xcolor}

\NewDocumentCommand\kw{O{blue} m}{\textcolor{#1}{\itshape #2}}

\begin{document}

Something about \kw{apples} and \kw[red]{oranges}.

\end{document}
```

जिस प्रकार `\newcommand` में परिभाषित किए जाने वाले कमांड (यहाँ `\kw`) और परिभाषा के भाग में `#1` से लेकर `#9` तक तर्क (arguments) उपयोग किए जाते हैं, उसी प्रकार `\NewDocumentCommand` में भी यही होता है, लेकिन दोनों में तर्कों को निर्दिष्ट करने का तरीका अलग होता है।

`\newcommand` में जहाँ केवल तर्कों की संख्या दी जाती है (और पहले तर्क के लिए डिफ़ॉल्ट मान वैकल्पिक रूप से दिया जा सकता है), वहीं `\NewDocumentCommand` में प्रत्येक तर्क को एक अक्षर के माध्यम से निर्दिष्ट किया जाता है। उदाहरण के लिए, दो तर्कों वाले कमांड को `[2]` की बजाय `{mm}` से दर्शाया जाता है। 

यह तरीका थोड़ा विस्तृत (verbose) जरूर है, लेकिन इससे अधिक प्रकार के कमांड बनाए जा सकते हैं। यहाँ हम एक साधारण उदाहरण दे रहे हैं जिसमें पहला तर्क वैकल्पिक है और उसका डिफ़ॉल्ट मान `blue` है (`O{blue}`), जबकि दूसरा तर्क अनिवार्य (`m`) है।
