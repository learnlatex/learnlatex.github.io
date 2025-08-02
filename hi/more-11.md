---
layout: "lesson"
lang: "hi"
title: "अधिक जानकारी: फ़ॉर्मेटिंग: फॉण्ट और स्पेसिंग"
description: "यह पाठ दिखाता है कि किसी एक पैराग्राफ के लिए पैराग्राफ इंडेंटेशन को कैसे कम किया जाए।"
toc-anchor-text: "अधिक जानकारी: फ़ॉर्मेटिंग: फॉण्ट और स्पेसिंग"
---

## किसी एक पैराग्राफ के लिए इंडेंट हटाना  

यदि आप केवल एक पैराग्राफ की शुरुआत में होने वाला इंडेंटेशन (खाली जगह) हटाना चाहते हैं, तो आप `\noindent` का उपयोग कर सकते हैं। हालाँकि, इसका उपयोग _बहुत_ कम किया जाना चाहिए; अधिकांश स्थितियों में LaTeX को इसे स्वचालित रूप से संभालने देना चाहिए।


```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\begin{document}
One small paragraph, which we have filled out a little to make sure you can
see the effect here!

One small paragraph, which we have filled out a little to make sure you can
see the effect here!

\noindent  One small paragraph, which we have filled out a little to make sure
you can see the effect here!
\end{document}
```
