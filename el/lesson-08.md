---
layout: "lesson"
lang: "el"
title: "Πίνακες"
description: "Αυτό το μάθημα δείχνει πώς μπορείτε να δημιουργήσετε πίνακες στο LaTeX, να επηρεάσετε τη στοίχιση των κελιών, να προσθέσετε γραμμές στον πίνακα και να συγχωνεύσετε κελιά."
toc-anchor-text: "Πίνακες στο LaTeX"
toc-description: "Τα βασικά στοιχεία για την εργασία με πίνακες."
---

# Πίνακες

<span
  class="summary">Αυτό το μάθημα δείχνει πώς μπορείτε να δημιουργήσετε πίνακες στο LaTeX, να επηρεάσετε τη στοίχιση των κελιών, να προσθέσετε γραμμές στον πίνακα και να συγχωνεύσετε κελιά.</span>

Οι πίνακες στο LaTeX δημιουργούνται χρησιμοποιώντας το περιβάλλον `tabular`. Αυτό
το μάθημα προϋποθέτει ότι φορτώνετε το πακέτο `array`, το οποίο προσθέτει περισσότερη
λειτουργικότητα στους πίνακες του LaTeX, και το οποίο δεν περιλαμβάνεται στον
πυρήνα του LaTeX μόνο για ιστορικούς λόγους. Επομένως, προσθέστε το ακόλουθο
στο προοίμιο του εγγράφου σας και είμαστε έτοιμοι:

```latex
\usepackage{array}
```
{: .noedit :}

Για να στοιχειοθετήσουμε έναν πίνακα, πρέπει να πούμε στο LaTeX πόσες στήλες θα
χρειαστούν και πώς θα στοιχιστεί το κείμενο σε αυτές. Αυτό γίνεται με ένα υποχρεωτικό
όρισμα &ndash; συχνά αναφέρεται ως το προοίμιο του πίνακα &ndash; στο περιβάλλον `tabular`,
με το οποίο καθορίζονται οι στήλες χρησιμοποιώντας μονογράμματα ονόματα, τα οποία
καλούνται λεκτικά προοιμίου (preamble-tokens). Οι διαθέσιμοι τύποι στήλης είναι:

<!-- don't line wrap this table, markdown seems to not support this -->

| τύπος      | περιγραφή |
| ---        |:-- |
| `l`        | στήλη στοιχισμένη αριστερά |
| `c`        | κεντραρισμένη στήλη |
| `r`        | στήλη στοιχισμένη δεξιά |
| `p{width}` | στήλη σταθερού πλάτους `width`, το κείμενο θα αναδιπλωθεί στο τέλος των γραμμών και θα στοιχιστεί πλήρως |
| `m{width}` | όπως το `p`, αλλά κεντραρισμένη κατακόρυφα ως προς την υπόλοιπη σειρά |
| `b{width}` | όπως το `p`, αλλά στο κάτω μέρος της σειράς |
| `w{align}{width}` | τυπώνει τα περιεχόμενα σε ένα σταθερό πλάτος `width`, σιωπηρά τυπώνοντας πάνω από επόμενα αν το περιεχόμενο του κελιού είναι μεγαλύτερο. Μπορείτε να επιλέξετε την οριζόντια στοίχιση με `l`, `c`, ή `r`. |
| `W{align}{width}` | όπως το `w`, αλλά αυτό θα παραγάγει μια προειδοποίηση για υπερχείλιση πλαισίου (overfull box) αν το περιεχόμενο του κελιού είναι μεγαλύτερο. |

Επιπλέον, είναι διαθέσιμα κάποια ακόμη λεκτικά προοιμίου τα οποία δεν καθορίζουν
τη στήλη αλλά μπορεί να φανούν χρήσιμα:

<!-- don't line wrap this table, markdown seems to not support this -->

| τύπος | περιγραφή |
| ---  | :-- |
| `*{num}{string}` | επαναλαμβάνει το `string` για `num` φορές στο προοίμιο. Με αυτό μπορείτε να ορίσετε πολλαπλές όμοιες στήλες. |
| `>{decl}` | αυτό θα τοποθετήσει το `decl` πριν από τα περιεχόμενα κάθε κελιού στην επόμενη στήλη (αυτό είναι χρήσιμο, π.χ., για να θέσετε διαφορετική γραμματοσειρά για αυτή τη στήλη) |
| `<{decl}` | αυτό θα τοποθετήσει το `decl` μετά από τα περιεχόμενα κάθε κελιού στην προηγούμενη στήλη |
| <span>`|`</span>  | κάθετη γραμμή |
| `@{decl}` | αντικατάσταση του κενού χώρου ανάμεσα σε δύο στήλες με το `decl` |
| `!{decl}` | προσθήκη του `decl` στο κέντρο του υπάρχοντος κενού χώρου |

Αυτοί οι δύο πίνακες αναφέρουν όλους τους διαθέσιμους τύπους στήλης από το LaTeX
και το πακέτο `array`. Λίγοι επιπλέον τύποι στήλης, από άλλα πακέτα, παρουσιάζονται
στη [σελίδα με τις λεπτομέρειες](more-08) για αυτό το μάθημα.

Οι στήλες `l`, `c`, και `r` θα έχουν το φυσικό πλάτος του φαρδύτερου κελιού.
Όλες οι στήλες πρέπει να δηλωθούν, επομένως αν χρειάζεστε τρεις κεντραρισμένες στήλες
θα χρησιμοποιήσετε `ccc` στο προοίμιο του πίνακα. Τα κενά διαστήματα αγνοούνται,
επομένως το `c c c` είναι το ίδιο.

Στο σώμα του πίνακα, οι στήλες χωρίζονται με τον χαρακτήρα `&` και μια νέα
σειρά ξεκινάει χρησιμοποιώντας `\\`.

Έχουμε ό,τι χρειαζόμαστε για τον πρώτο μας πίνακα. Στον ακόλουθο κώδικα τα
`&` και `\\` είναι στοιχισμένα. Αυτό δεν είναι απαραίτητο στο LaTeX, αλλά
κάνει τον κώδικα πιο ευανάγνωστο.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{lll}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```

<!-- {% endraw %} -->

Αν μία στήλη του πίνακα περιέχει πολύ κείμενο, θα είναι δύσκολο να πάρετε σωστό
αποτέλεσμα μόνο με τα `l`, `c`, και `r`. Δείτε τι συμβαίνει στο ακόλουθο παράδειγμα:

<!-- {% raw %} -->

```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cl}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Το πρόβλημα είναι ότι ο τύπος στήλης `l` στοιχειοθετεί τα περιεχόμενα του κελιού
σε μία σειρά στο φυσικό της πλάτος, ακόμη κι αν ξεπερνάμε το πλαίσιο της σελίδας.
Για να  το ξεπεράσετε αυτό, μπορείτε να χρησιμοποιήσετε τη στήλη `p`. Αυτή 
στοιχειοθετεί τα περιεχόμενά της ως παραγράφους με το πλάτος που καθορίζετε ως όρισμα,
και τα τοποθετεί στο πάνω μέρος της σειράς του πίνακα &ndash; κάτι που θα θέλατε τις 
περισσότερες φορές. Συγκρίνετε το παραπάνω αποτέλεσμα με το ακόλουθο:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{cp{9cm}}
  Animal & Description \\
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Αν ο πίνακας έχει πολλές στήλες του ίδιου τύπου, δεν είναι βολικό να βάζετε όλους
αυτούς τους ορισμούς στηλών στο προοίμιο. Μπορείτε να το απλοποιήσετε χρησιμοποιώντας
το `*{num}{string}`, που επαναλαμβάνει το `string` για `num` φορές.
Έτσι το `*{6}{c}` είναι ισοδύναμο με το `cccccc`. Για να δείτε ότι δουλεύει,
ο πρώτος πίνακας αυτού του μαθήματος μπορεί να γραφτεί με τη νέα σύνταξη
ως εξής:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}

\begin{document}
\begin{tabular}{*{3}{l}}
  Animal & Food  & Size   \\
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

## Προσθήκη γραμμών

Μία συμβουλή πριν αναφερθούμε στις γραμμές (οριζόντιες και κάθετες) στο εσωτερικό
των πινάκων: οι γραμμές πρέπει να χρησιμοποιούνται πολύ φειδωλά στους πίνακες,
και συνήθως οι κάθετες γραμμές δεν δείχνουν επαγγελματικές. Στην πραγματικότητα,
για επαγγελματικούς πίνακες δεν θα πρέπει να χρησιμοποιείτε καθόλου τις τυπικές γραμμές
που παρέχει το LaTeX&#903; θα πρέπει να εξοικειωθείτε με τις δυνατότητες του πακέτου `booktabs`,
και για το λόγο αυτό καλύπτεται εδώ πρώτο. Για λόγους πληρότητας, οι τυπικές
γραμμές παρουσιάζονται στη [σελίδα με τις λεπτομέρειες](more-08).

Το πακέτο `booktabs` παρέχει τέσσερις διαφορετικούς τύπους (οριζόντιων) γραμμών. Κάθε μία από
τις αντίστοιχες εντολές πρέπει να χρησιμοποιηθεί πρώτη σε μία σειρά ή αμέσως μετά
από μία άλλη οριζόντια γραμμή. Οι τρεις από τις εντολές είναι: `\toprule`, `\midrule`, και
`\bottomrule`. Το σημείο στο οποίο ενδείκνυται να χρησιμοποιηθεί κάθε μία είναι μάλλον εμφανές
από το όνομά της:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Η τέταρτη εντολή οριζόντιας γραμμής που παρέχεται από το πακέτο `booktabs` είναι η
`\cmidrule`. Μπορεί να χρησιμοποιηθεί για να σχεδιαστεί μία οριζόντια γραμμή που
δεν εκτείνεται σε όλο το πλάτος του πίνακα αλλά μόνο σε συγκεκριμένο εύρος στηλών.
Το εύρος των στηλών δίνεται ως εύρος αριθμών: `{`_number_`-`_number_`}`.
Ακόμη κι αν θέλετε  να  σχεδιάσετε τη γραμμή για μόνο μία στήλη, πρέπει να τη
δώσετε ως εύρος (με τους δύο αριθμούς να ταυτίζονται).

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule{1-1}
  \cmidrule{3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Υπάρχει ακόμη ένα χρήσιμο χαρακτηριστικό της εντολής `\cmidrule`. Μπορείτε να
την περικόψετε σε κάθε άκρο με ένα προαιρετικό όρισμα σε παρενθέσεις:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  \cmidrule{1-2}
  horse  & hay   & large  \\
  \cmidrule(r){1-1}
  \cmidrule(rl){2-2}
  \cmidrule(l){3-3}
  frog   & flies & small  \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Θα μαντέψατε ότι τα `r` και `l` σημαίνουν ότι η γραμμή περικόπτεται στο δεξί (**r**ight)
και αριστερό (**l**eft) άκρο, αντίστοιχα.

Μερικές φορές, μία οριζόντια γραμμή μπορεί να διαχωρίζει υπερβολικά δύο σειρές
του πίνακα, όμως για να περάσετε το μήνυμα θα θέλατε να τις διαχωρίσετε με κάποιο τρόπο.
Σε αυτή την περίπτωση μπορείτε να χρησιμοποιήσετε την εντολή `\addlinespace`
για να εισαγάγετε ένα μικρό κενό.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{cp{9cm}}
  \toprule
  Animal & Description \\
  \midrule
  dog    & The dog is a member of the genus Canis, which forms part of the
           wolf-like canids, and is the most widely abundant terrestrial
           carnivore. \\
  \addlinespace
  cat    & The cat is a domestic species of small carnivorous mammal. It is the
           only domesticated species in the family Felidae and is often referred
           to as the domestic cat to distinguish it from the wild members of the
           family. \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Συγχώνευση κελιών

Στο LaTeX μπορείτε να συγχωνεύσετε κελιά οριζόντια χρησιμοποιώντας την εντολή `\multicolumn`.
Πρέπει να χρησιμοποιηθεί πρώτη σε ένα κελί. Η εντολή `\multicolumn` δέχεται τρία
ορίσματα:

1. Το πλήθος των κελιών που θα συγχωνευθούν
2. Τη στοίχιση του συγχωνευμένου κελιού
3. Το περιεχόμενο του συγχωνευμένου κελιού

Η στοίχιση μπορεί να περιλαμβάνει οτιδήποτε είναι έγκυρο στο προοίμιο του `tabular`,
όμως _μόνο έναν τύπο στήλης_.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Animal & Food  & Size   \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Μπορείτε επίσης να χρησιμοποιήσετε την εντολή `\multicolumn` σε ένα μόνο κελί ώστε
να αποτρέψετε την εφαρμογή αυτών που έχετε ορίσει στο προοίμιο του πίνακα για
την τρέχουσα στήλη. Το ακόλουθο παράδειγμα χρησιμοποιεί αυτή τη μέθοδο για να
κεντράρει τη γραμμή επικεφαλίδων του πίνακα:

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  \multicolumn{1}{c}{Animal} & \multicolumn{1}{c}{Food} & \multicolumn{1}{c}{Size} \\
  \midrule
  dog    & meat  & medium \\
  horse  & hay   & large  \\
  frog   & flies & small  \\
  fuath  & \multicolumn{2}{c}{unknown} \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->

Το LaTeX δεν υποστηρίζει κατακόρυφη συγχώνευση κελιών.
Συνήθως αρκεί να αφήσετε κάποια κελιά κενά για να καταλάβει ο αναγνώστης
αυτό που εννοείτε, χωρίς να χρειάζετε να συγχωνεύσετε τα κελιά.

<!-- {% raw %} -->
```latex
\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{array}
\usepackage{booktabs}

\begin{document}
\begin{tabular}{lll}
  \toprule
  Group     & Animal & Size   \\
  \midrule
  herbivore & horse  & large  \\
            & deer   & medium \\
            & rabbit & small  \\
  \addlinespace
  carnivore & dog    & medium \\
            & cat    & small  \\
            & lion   & large  \\
  \addlinespace
  omnivore  & crow   & small  \\
            & bear   & large  \\
            & pig    & medium \\
  \bottomrule
\end{tabular}
\end{document}
```
<!-- {% endraw %} -->


## Ασκήσεις

Χρησιμοποιήστε το απλό παράδειγμα πίνακα για να αρχίσετε να πειραματίζεστε με τους
πίνακες. Δοκιμάστε διαφορετική στοίχιση με τους τύπους στηλών `l`, `c` και `r`.
Τι συμβαίνει αν έχετε λιγότερα στοιχεία σε μία γραμμή πίνακα; Αν έχετε περισσότερα;
Πειραματιστείτε με την εντολή `\multicolumn` για να συνενώσετε στήλες σε μία γραμμή.
