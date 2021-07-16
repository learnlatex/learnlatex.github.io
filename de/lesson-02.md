---
layout: "lesson"
lang: "de"
title: "Mit LaTeX arbeiten"
description: "Diese Lektion erklärt, was ein TeX-System ist und welches die gängigsten Systeme sind, und listet einige der häufig für LaTeX genutzten Texteditoren und Onlinesysteme mit integrierten Editoren auf."
toc-anchor-text: "Mit LaTeX arbeiten"
toc-description: "TeX-Systeme und LaTeX-Texteditoren"
---

# Mit LaTeX arbeiten

<span
  class="summary">Diese Lektion erklärt, was ein TeX-System ist und welches die gängigsten Systeme sind, und listet einige der häufig für LaTeX genutzten Texteditoren und Onlinesysteme mit integrierten Editoren auf.</span>


Im Gegensatz zu vielen Computeranwendungen ist LaTeX keine einzelne Anwendung,
die 'alles' enthält, vielmehr arbeiten verschiedene Programme zusammen. Diese
können wir in zwei benötigte Kategorien unterteilen:

- Ein _TeX-System_
- Ein Texteditor (häufig ein LaTeX-spezifischer)

## LaTeX-Systeme

Um mit LaTeX arbeiten zu können, muss ein TeX-System verfügbar sein. Ein
TeX-System ist eine Sammlung an Programmen und Dateien, die im Hintergrund
verfügbar sind, die man aber in der Regel nicht direkt ausführt.

Heutzutage sind zwei große TeX-Systeme verbreitet,
[MiKTeX](https://miktex.org/) und [TeX Live](https://tug.org/texlive). Beide
unterstützen Windows, macOS und Linux.
MiKTeX wurde ursprünglich für Windows konzipiert;
auf macOS ist TeX Live in einer größeren Sammlung namens [MacTeX](https://www.tug.org/mactex/) enthalten.
Jedes System hat
[individuelle Vorteile](https://tex.stackexchange.com/questions/20036) und
[weitere Hinweise vom LaTeX Project](https://www.latex-project.org/get/) sind
einen Blick wert.

Da TeX Live auf allen verbreiteten Plattformen verfügbar ist und einige
Performancevorteile hat, empfehlen wir, sollte man unschlüssig sein, die Wahl
von TeX Live.

## Editoren

LaTeX-Dateien sind einfache Klartextdateien, sie können also mit jedem
Texteditor bearbeitet werden. Allerdings ist ein für LaTeX konzipierter Editor
komfortabler, da sie Funktionen wie 1-Klick-Kompilation der LaTeX-Dateien,
eingebaute PDF-Viewer und Syntaxhervorhebung bieten. Ein nützliches Feature
moderner LaTeX-Editoren ist SyncTeX: die Möglichkeit mit einem Klick in die
Quellen direkt zur entsprechenden Stelle im PDF oder andersherum zu springen.

Es gibt wesentlich mehr LaTeX-Editoren als wir hier auflisten könnten, eine
[umfassende Liste findet man auf
StackExchange](https://tex.stackexchange.com/questions/339/latex-editors-ides).
Ein Editor mit den wesentlichen Funktionen, [TeXworks](https://tug.org/texworks),
ist in TeX Live und MiKTeX auf Windows und Linux enthalten, MacTeX beinhaltet
[TeXShop](https://pages.uoregon.edu/koch/texshop/).

<p
  class="hint">Unabhängig welchen Editor man auswählt, wir empfehlen ihn <i>nach</i> dem TeX-System zu installieren, damit der Editor die TeX-Installation findet und sich entsprechend korrekt selbst konfiguriert.</p>

## Online arbeiten

Es gibt verschiedene nützliche Webseiten, mit denen es möglich ist, LaTeX zu
verwenden, ohne dass man ein TeX-System und Editor überhaupt installieren muss.
Auf diesen Seiten bearbeitet man seine Dateien online, anschließend wird LaTeX
im Hintergrund ausgeführt und das resultierende PDF angezeigt.

Manche dieser Seiten kombinieren LaTeX mit Funktionen aus
Textverarbeitungsprogrammen, während andere darauf fokussiert sind, den
LaTeX-Code direkt anzuzeigen, und so einer lokalen TeX-Installation nahe kommen.

Es gibt Systeme, die es erlauben, LaTeX auszuführen, ohne eine Anmeldung
vorauszusetzen, wir verwenden einen solchen,
[TeXLive.net](https://texlive.net), damit die Beispiele auf dieser Seite
ausprobiert werden können. Für vollständige Arbeiten verlangen die besten
Onlinesysteme eine Registrierung. Dadurch kann man seine Arbeit speichern und
verhindert eine Überbelastung der Seiten. Wir bieten Links, damit man die
Beispiele auf [Overleaf](https://www.overleaf.com), eine der verbreitetsten
LaTeX-Webseiten, bearbeiten kann. Natürlich gibt es auch andere, ein Beispiel
ist [Papeeria](https://papeeria.com/).

## Zusammen mit anderen arbeiten

Plant man, die LaTeX-Quellen an Andere zu schicken, die diese weiterverarbeiten,
etwa Herausgeber, Konferenzorganisatoren oder Pre-Print-Server (z.B. arXiv),
sollte man prüfen, welche Restriktionen diese vorgeben.

## Übung

Machen Sie sich bereit, entweder mit einer lokalen LaTeX-Installation _oder_
einem Konto bei einem Online-LaTeX-Anbieter. Wenn eine lokale Installation
gewählt wird, benötigt man auch einen Editor: wir empfehlen zunächst mit
TeXworks oder TeX Shop zu starten (siehe oben) und später andere Editoren zu
erwägen, nachdem _Sie_ wissen, wie Sie am besten mit LaTeX arbeiten.

Man kann [alle Übungen im Browser bearbeiten](help), aber wir möchten dir
helfen, echte Dokumente zu bearbeiten, deshalb ist jetzt ein guter Zeitpunkt,
das vorzubereiten.
