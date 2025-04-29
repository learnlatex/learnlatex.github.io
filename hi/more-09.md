---
layout: "lesson"
lang: "hi"
title: "अधिक जानकारी: क्रॉस-रेफरेंसिंग"
description: "यह पाठ दिखाता है कि आप हाइपररेफ पैकेज लोड करके क्रॉस-रेफरेंस के लिंक कैसे बना सकते हैं।"
toc-anchor-text: "अधिक जानकारी: क्रॉस-रेफरेंसिंग"
---


## क्रॉस-रेफरेंस को लिंक में बदलना

आप `हाइपररेफ` पैकेज का उपयोग करके अपने क्रॉस-रेफरेंस को हाइपरलिंक में बदल सकते हैं। अधिकांश मामलों में, `हाइपररेफ` को डॉक्यूमेंट की प्रस्तावना में निर्दिष्ट किसी भी अन्य पैकेज के बाद लोड किया जाना चाहिए।


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage[hidelinks]{hyperref}
\begin{document}

\section{Introduction}
Some exciting text with a reference~\ref{sec:next}.

\section{Next thing}
\label{sec:next}

More text here.
\end{document}
```

हमने लिंक को सामान्य टेक्स्ट के समान रंग में बनाने का विकल्प चुना है; इसका कारण जानने के लिए `hidelinks` को हटाने का प्रयास करें!