---
layout: "lesson"
lang: "el"
title: "Περισσότερα σχετικά με: Παραπομπές"
description: "Αυτό το μάθημα δείχνει πώς μπορείτε να δημιουργήσετε συνδέσμους σε παραπομπές φορτώνοντας το πακέτο hyperref."
toc-anchor-text: "Περισσότερα σχετικά με: Παραπομπές"
---

## Δημιουργία συνδέσμων από παραπομπές

Μπορείτε να μετατρέψετε τις παραπομπές σας σε υπερσυνδέσμους χρησιμοποιώντας το πακέτο `hyperref`.
Στις περισσότερες περιπτώσεις, το `hyperref` θα πρέπει να φορτώνεται μετά από όλα τα άλλα πακέτα στο προοίμιο του εγγράφου.

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

Εδώ επιλέξαμε να κάνουμε τους συνδέσμους να έχουν το ίδιο χρώμα με το κανονικό κείμενο. Δοκιμάστε να αφαιρέσετε το `hidelinks` για να δείτε γιατί!
