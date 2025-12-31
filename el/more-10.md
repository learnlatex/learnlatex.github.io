---
layout: "lesson"
lang: "el"
title: "Περισσότερα σχετικά με: Μαθηματικά"
description: "Αυτό το μάθημα παρουσιάσει περισσότερα περιβάλλοντα στοίχισης του πακέτου amsmath, πώς να χρησιμοποιείτε έντονα γράμματα σε μαθηματικά, το πακέτο επέκτασης mathtools, και πώς να χρησιμοποιείτε Unicode για εισαγωγή μαθηματικών."
toc-anchor-text: "Περισσότερα σχετικά με: Μαθηματικά"
---


## Περισσότερα περιβάλλοντα στοίχισης του `amsmath`

Εκτός από το περιβάλλον `align*` που είδαμε στο κύριο μάθημα,
το πακέτο `amsmath` διαθέτει αρκετά ακόμη χρήσιμα περιβάλλοντα, όπως το `gather`
για μαθηματικά πολλών γραμμών που δεν χρειάζονται στοίχιση, και το `multline` για
την κατανομή μιας μεγαλύτερης ενιαίας έκφρασης σε πολλές γραμμές, στοιχίζοντας την
πρώτη γραμμή αριστερά και την τελευταία δεξιά. Σε όλες τις περιπτώσεις, η παραλλαγή με `*`
παραλείπει τους αριθμούς εξίσωσης.

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

### Στήλες σε μαθηματικά περιβάλλοντα στοίχισης

Τα περιβάλλοντα στοίχισης του `amsmath` έχουν σχεδιαστεί για να δέχονται ζεύγη
στηλών με την πρώτη στήλη κάθε ζεύγους στοιχισμένη στα δεξιά και
τη δεύτερη στοιχισμένη στα αριστερά. Αυτό επιτρέπει την εμφάνιση πολλαπλών εξισώσεων,
κάθε μία ευθυγραμμισμένη προς το σύμβολο σχέσης της.

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

Επιπλέον, υπάρχουν παραλλαγές των περιβαλλόντων που τελειώνουν σε `ed`, οι οποίες δημιουργούν μία δευτερεύουσα έκφραση μέσα σε μία
μεγαλύτερη σύνθεση μαθηματικών.
Για παράδειγμα, τα περιβάλλοντα `aligned` και `gathered` είναι παραλλαγές των `align` και `gather` αντίστοιχα.

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

Το περιβάλλον `aligned` δέχεται ένα προαιρετικό όρισμα θέσης, παρόμοιο με το `tabular`.
Αυτό είναι συχνά χρήσιμο για τη στοίχιση μίας μαθηματικής έκφρασης στην πρώτη γραμμή της&#903; συγκρίνετε τα στοιχεία της λίστας στο ακόλουθο παράδειγμα.

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

## Έντονη γραμματοσειρά μαθηματικών

Το τυπικό LaTeX έχει δύο τρόπους για να παράξει σύμβολα με έντονη γραμματοσειρά στα μαθηματικά.
Για να κάνετε μία ολόκληρη έκφραση με έντονη γραμματοσειρά, χρησιμοποιήστε το `\boldmath` πριν από την έκφραση. Η εντολή `\mathbf` είναι επίσης διαθέσιμη για να θέσετε μεμονωμένα γράμματα ή λέξεις σε όρθια έντονη γραμματοσειρά.

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

Αν θέλετε να χρησιμοποιήσετε σύμβολα με έντονη γραμματοσειρά (όπως
θα γίνονταν με το `\boldmath`)
μέσα σε μία έκφραση με κανονική γραμματοσειρά, μπορείτε να 
χρησιμοποιήσετε την εντολή `\bm` από το πακέτο `bm`. Σημειώστε ότι η εντολή `\bm` δουλεύει και με σύμβολα όπως το `=` και ελληνικά γράμματα. (Παρατηρήστε ότι το `\mathbf` δεν έχει αποτέλεσμα στο `\pi` στο παραπάνω παράδειγμα.)

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

## Το πακέτο mathtools
Το πακέτο `mathtools` φορτώνει το `amsmath` και προσθέτει αρκετές επιπλέον δυνατότητες, όπως παραλλαγές των περιβαλλόντων του `amsmath` για πίνακες, τα οποία επιτρέπουν τον καθορισμό της στοίχισης των στηλών.

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

## Μαθηματικά Unicode

Όπως θα δούμε στο [Μάθημα 14](lesson-14), υπάρχουν εναλλακτικές μηχανές TeX
που χρησιμοποιούν γραμματοσειρές OpenType. Αυτές οι μηχανές 
χρησιμοποιούν από προεπιλογή τις συνηθισμένες γραμματοσειρές μαθηματικών
του TeX, αλλά μπορείτε να φορτώσετε το πακέτο `unicode-math`
για να χρησιμοποιήσετε γραμματοσειρές μαθηματικών OpenType. 
Οι λεπτομέρειες αυτού του πακέτου είναι πέρα από αυτό το μάθημα
και σας παραπέμπουμε στην
[τεκμηρίωση του πακέτου](https://texdoc.org/pkg/unicode-math).
Παρ' όλα αυτά, δίνουμε εδώ ένα μικρό παράδειγμα.

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
