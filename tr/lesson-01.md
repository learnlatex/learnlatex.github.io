---
layout: "lesson"
lang: "tr"
title: "LaTeX nedir ve nasıl çalışır"
description: "Bu ders LaTeX'in temellerini ve alışılagelmiş kelime işlemcilerden Microsoft Word veya LibreOffice'e kıyasla nasıl çalıştığını açıklar."
toc-anchor-text: "LaTeX'e giriş"
toc-description: "LaTeX nedir ve nasıl çalışır"
---

# LaTeX nedir ve nasıl çalışır

Microsoft Word veya LibreOffice Writer gibi alışılagelmiş kelime işlemcilerinin aksine LaTeX WYSIWYG ('What You See Is What You Get') [tr: "Ne görüyorsan onu alırsın"] mantığı ile çalışmaz. Kullanıcı, düz bir metni biçimleyerek zenginleştirir. HTML benzeri bir şekilde yapılan bu biçimlendirme LaTeX'e metnin belirli kısımlarının karakteri hakkında bilgi verir.

Örneğin, HTML'de yeni bir bölüm (section) oluşturan `<h2>` tagini ele alalım. Bu işlev için LaTeX'de `\section` komutu kullanılmaktadır.

## LaTeX iş akışı

LaTeX dosyaları dökümanın kendisinden ziyade dökümanı oluşturan komutları içerdiğinden dolayı, başkalarıyla paylaşılmak istenildiği zaman genellikle dosyanın kendisi gönderilmez. Bunun yerine, LaTeX kaynağı yazıldıktan sonra PDF çıktısı elde etmek için dosya üzerinde LaTeX programı çalıştırılır (genellilke `pdflatex`). Başkalarına göndermek istediğiniz dosya elde ettiğiniz PDF olacaktır.

İnsanlar bu sürece farklı isimler verebiliyor. LaTeX kullanmak programlama yapmaya benzediği için bazıları 'derlemek' (compiling) kelimesini kullansa da 'karakter dizmek' (typesetting) daha doğru olur.

## Çoklu dizgilemek

Basit dökümanlarda dosyanızı bir kere dizgilemek (typeset) PDF oluşturmak için yeterlidir. Ancak dökümana  referanslar, alıntılar, içindekiler vs. eklerseniz LaTeX'i ardışık birden fazla kez çalıştırmak durumunda kalabilirsiniz. Bu durum söz konusu olduğunda bildireceğiz.

## LaTeX mi, pdfLaTeX mi ...?

[Bir sonraki derste](lesson-02) LaTeX'in aslında tek bir programdan ibaret olmadığını göreceğiz. İşleri karıştırmamak adına, şimdilik PDF çıktıları elde edebileceğiniz tek bir LaTeX programına odaklanıyoruz, `pdfLaTeX`. Dersin ilerleyen kısımlarında diğer LaTeX programlarına ve bunları neden kullanmak isteyebileceğinize de değineceğiz.
