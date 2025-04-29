---
layout: "lesson"
lang: "hi"
title: "अधिक जानकारी: लंबे डाक्यूमेंट्स की संरचना"
description: "यह पाठ दिखाता है कि इंडेक्स कैसे बनाया जाता है, तथा इस प्रक्रिया को स्वचालित करने के लिए imakeidx पैकेज का उपयोग कैसे किया जाता है।"
toc-anchor-text: "अधिक जानकारी: लंबे डाक्यूमेंट्स की संरचना"
---

## अनुक्रमणिका (Index) बनाना

यह इस बात पर निर्भर करता है कि आप किस प्रकार का दस्तावेज़ लिख रहे हैं—आप उसमें एक अनुक्रमणिका शामिल करना चाह सकते हैं। यह कुछ हद तक ग्रंथ सूची (bibliography) बनाने जैसा होता है, क्योंकि इसमें भी सहायक फ़ाइलों (auxiliary files) का उपयोग होता है। सौभाग्य से, `imakeidx` पैकेज इस पूरी प्रक्रिया को स्वचालित कर देता है। LaTeX को तीन निर्देश (instructions) देने की आवश्यकता होती है:

- `\makeindex` कमांड, जो अनुक्रमणिका बनाने को सक्षम करता है  
- `\index` कमांड, जो अनुक्रमणिका प्रविष्टियों को चिह्नित करता है  
- `\printindex` कमांड, जो अनुक्रमणिका को प्रिंट करता है


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{imakeidx}
\makeindex
\begin{document}
Some text about Foo\index{foo}.
More text\index{baz!bar}.
Even more text\index{alpha@$\alpha$}.
More text about a different part of baz\index{baz!wibble}.

\clearpage
Some text about Foo\index{foo} again, on a different page.
Even more text\index{beta@$\beta$}.
Even more text\index{gamma@$\gamma$}.
\printindex
\end{document}
```

यहाँ हमने अनुक्रमणिका (indexing) की दो विशेषताएँ दिखाई हैं: `!` का उपयोग करके उपविभाजन (subdivision), और  `@` का उपयोग करके अनुक्रमणिका में अलग पाठ (text) प्रिंट करना, जबकि क्रमबद्धता (sorting) के लिए कुछ और उपयोग करना। अनुक्रमणिका को कस्टमाइज़ करने के कई विकल्प होते हैं;  
उदाहरण का अनुकरण करके देखें कि यह कैसे कार्य करता है।