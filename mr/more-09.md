---
layout: "lesson"
lang: "mr"
title: "अधिक माहिती: अंतर्गत संदर्भ"
description: "ह्या प्रकरणात hyperref आज्ञासंच वापरून दस्तऐवजात अंतर्गत दुवे कसे तयार करावेत हे पाहू."
toc-anchor-text: "अधिक माहिती: अंतर्गत संदर्भ"
---

## अंतर्गत संदर्भांचे दुवे बनवणे

दस्तऐवजातील अंतर्गत संदर्भांना दुव्यांमध्ये रूपांतरित करण्याकरिता `hyperref` आज्ञासंच वापरता येऊ
शकतो. बहुतेक वेळा हा आज्ञासंच शेवटी वापरणे श्रेयस्कर आहे.

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

ह्या उदाहरणात मजकुराचा रंग व दुव्याचा रंग समान ठेवला आहे. `hidelinks` हे प्राचल काढून कारण
जाणून घ्या! 
