---
layout: "lesson"
lang: "hi"
title: "अधिक जानकारी: तार्किक संरचना"
description: "यह पाठ बताता है कि डॉक्यूमेंट का शीर्षक कैसे सेट करें, तथा विवरण सूची कैसे बनाएं।"
toc-anchor-text: "अधिक जानकारी: तार्किक संरचना"
---

## डॉक्यूमेंट शीर्षक

LaTeX डाक्यूमेंट्स के शीर्षक के लिए कुछ तार्किक मार्कअप प्रदान करता है:  जैसे कि 'मेटा-डेटा' सेट करने के लिए तीन कमांड और इसका उपयोग करने के लिए एक।

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

जैसा कि आप देख सकते हैं, `\author`, `\title` और `\date` कमांड जानकारी को संग्रहित करते हैं, और `\maketitle` उस जानकारी का उपयोग करता है। आप कई लेखकों को `\and` के द्वारा अलग भी कर सकते हैं। यह जरुरी है कि `\author`, `\title` और `\date` कमांड `\maketitle` से पहले दिए जाएं। यहाँ हमने इन्हें डॉक्यूमेंट के मुख्य भाग में रखा है; इन्हें प्रीएम्बल (preamble) में भी रखा जा सकता है, लेकिन यदि आप `babel` शॉर्टकट्स का उपयोग कर रहे हैं तो वे वहाँ सक्रिय नहीं होंगे।

`\maketitle` द्वारा दिया गया डिजाईन डॉक्यूमेंट की श्रेणी (document class) पर निर्भर करता है ([पाठ 5](lesson-05) देखें)। जब आप अपनी पसंद का डिजाईन बनाना चाहें, तो `titlepage` नामक एक वातावरण (environment) उपलब्ध है, लेकिन यह इस परिचय की सीमा से बाहर है। यदि आप स्वयं का डॉक्यूमेंट डिजाईन बनाना चाहते हैं, तो आप किसी अनुकूलन योग्य श्रेणी, जैसे `memoir`, का उपयोग कर सकते हैं, या LaTeX की मूल श्रेणियों में से किसी एक जैसे `book` से शुरुआत कर सकते हैं।

## विवरणात्मक सूचियाँ (descriptive lists)
"क्रमबद्ध" और "अक्रमबद्ध" प्रकार की सूचियों के अलावा, LaTeX एक और प्रकार प्रदान करता है, जो कम सामान्य है: "विवरणात्मक सूचियाँ"।

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


## अभ्यास

अलग-अलग `\author`, `\title` और `\date` की जानकारी देकर `\maketitle` का परीक्षण करें। इनमें से किन-किन को देना जरूरी है? क्या इन कमांड्स में लेखक, शीर्षक और तारीख होना अनिवार्य है?

कुछ विवरणात्मक सूचियाँ (descriptive lists) बनाइए, और उनमें से कुछ को अन्य सूचियों (क्रमबद्ध, अक्रमबद्ध या विवरणात्मक) के भीतर डालकर नेस्ट कीजिए।